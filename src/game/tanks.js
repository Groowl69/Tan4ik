// ============================================================
// 3D-модели танков по спецификации класса + SVG-превью
// ============================================================
import * as THREE from 'three';

export const TIER_COLORS = {
  1: { body: 0x3fa7ff, turret: 0x2f8fe0, accent: '#5db9ff' },
  2: { body: 0x35c7b8, turret: 0x27a89b, accent: '#4fe0d0' },
  3: { body: 0xffb347, turret: 0xe6962e, accent: '#ffc76b' },
};

const barrelGeoCache = {};
function barrelGeo(radius, len) {
  const key = `${radius.toFixed(2)}_${len.toFixed(2)}`;
  if (!barrelGeoCache[key]) {
    const g = new THREE.CylinderGeometry(radius * 0.86, radius, len, 12);
    g.rotateX(Math.PI / 2);
    barrelGeoCache[key] = g;
  }
  return barrelGeoCache[key];
}

function stdMat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color, roughness: 0.55, metalness: 0.35, ...opts,
  });
}

// --- Собирает корпус + башню по классу. Возвращает { group, turret, barrels }
export function buildTankMesh(cls, tierOverride = null) {
  const tier = tierOverride || cls.tier;
  const colors = TIER_COLORS[Math.min(3, tier)];
  const group = new THREE.Group();

  // корпус
  const bodySize = cls.special === 'melee' ? 2.5 : cls.id === 'heavy' || cls.id === 'juggernaut' ? 2.45 : 2.2;
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(bodySize, 0.85, bodySize),
    stdMat(colors.body)
  );
  body.position.y = 0.55;
  body.castShadow = true;
  group.add(body);

  const plate = new THREE.Mesh(
    new THREE.BoxGeometry(bodySize * 0.8, 0.14, bodySize * 0.8),
    stdMat(colors.turret)
  );
  plate.position.y = 1.02;
  group.add(plate);

  // шипы для крашеров
  if (cls.special === 'melee') {
    const spikeGeo = new THREE.ConeGeometry(0.28, 0.85, 4);
    const n = cls.id === 'spike' ? 8 : 6;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const spike = new THREE.Mesh(spikeGeo, stdMat(colors.turret));
      spike.position.set(Math.cos(a) * (bodySize / 2 + 0.18), 0.55, Math.sin(a) * (bodySize / 2 + 0.18));
      spike.rotation.z = -Math.cos(a) * Math.PI / 2;
      spike.rotation.x = Math.sin(a) * Math.PI / 2;
      spike.castShadow = true;
      group.add(spike);
    }
  }

  // башня со стволами
  const turret = new THREE.Group();
  turret.position.y = 0.95;
  group.add(turret);

  const dome = new THREE.Mesh(
    new THREE.CylinderGeometry(0.55, 0.62, 0.35, 14),
    stdMat(colors.turret)
  );
  dome.position.y = 0.12;
  turret.add(dome);

  const barrels = [];
  for (const b of cls.barrels) {
    const radius = Math.min(0.62, 0.30 * b.w);
    const len = 2.1 * b.l;
    const mesh = new THREE.Mesh(barrelGeo(radius, len), stdMat(colors.turret));
    mesh.castShadow = true;
    const baseZ = len / 2 - 0.25;
    mesh.position.set(b.off || 0, 0.42, baseZ);
    const holder = new THREE.Group();
    holder.rotation.y = -THREE.MathUtils.degToRad(b.a);
    holder.add(mesh);
    turret.add(holder);
    barrels.push({ holder, mesh, baseZ, spec: b, recoil: 0 });
  }

  // раструб пулемётных веток
  for (const br of barrels) {
    if (br.spec.w >= 1.15) {
      const cone = new THREE.Mesh(
        new THREE.CylinderGeometry(br.spec.w * 0.34, br.spec.w * 0.22, 0.5, 10),
        stdMat(colors.body)
      );
      cone.rotation.x = Math.PI / 2;
      cone.position.z = br.baseZ + 2.1 * br.spec.l / 2 - 0.1;
      cone.position.y = 0.42;
      br.holder.add(cone);
    }
  }

  return { group, turret, barrels, colors };
}

// --- Вид от первого лица: стволы, прикреплённые к камере
export function buildViewModel(cls) {
  const colors = TIER_COLORS[Math.min(3, cls.tier)];
  const vm = new THREE.Group();
  const barrels = [];
  for (const b of cls.barrels) {
    const radius = Math.min(0.5, 0.24 * b.w);
    const len = 2.6 * b.l;
    const mesh = new THREE.Mesh(barrelGeo(radius, len), stdMat(colors.turret, { roughness: 0.45 }));
    const baseZ = -len / 2 - 0.1;
    mesh.position.set((b.off || 0) * 0.9, 0, baseZ);
    const holder = new THREE.Group();
    holder.rotation.y = -THREE.MathUtils.degToRad(b.a) * 0.55; // лёгкое схождение
    holder.add(mesh);
    vm.add(holder);
    barrels.push({ holder, mesh, baseZ, spec: b, recoil: 0 });
  }
  vm.position.set(0, -1.15, -0.55);
  return { vm, barrels };
}

// --- SVG-превью класса (вид сверху)
export function tankSVG(cls, size = 116) {
  const c = TIER_COLORS[Math.min(3, cls.tier)].accent;
  const cx = size / 2, cy = size / 2;
  const bodyHalf = size * 0.24;
  let svg = `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<defs><filter id="g${cls.id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2.4"/></filter></defs>`;
  // стволы
  for (const b of cls.barrels) {
    const w = Math.min(20, 10 * b.w);
    const l = size * 0.34 * b.l;
    svg += `<rect x="${cx - w / 2}" y="${cy - l - size * 0.06}" width="${w}" height="${l}" rx="${w * 0.28}" fill="${c}" stroke="#0b1220" stroke-width="2.5" transform="rotate(${b.a} ${cx} ${cy})" />`;
  }
  // шипы
  if (cls.special === 'melee') {
    const n = cls.id === 'spike' ? 8 : 6;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const r1 = bodyHalf * 1.28, r2 = bodyHalf * 1.75;
      const x1 = cx + Math.cos(a) * r1, y1 = cy + Math.sin(a) * r1;
      const x2 = cx + Math.cos(a) * r2, y2 = cy + Math.sin(a) * r2;
      svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="5" stroke-linecap="round" />`;
    }
  }
  // дроны
  if (cls.droneCount) {
    const n = Math.min(8, cls.droneCount);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + 0.5;
      const r = bodyHalf * 1.85;
      svg += `<rect x="${cx + Math.cos(a) * r - 4.5}" y="${cy + Math.sin(a) * r - 4.5}" width="9" height="9" fill="${c}" stroke="#0b1220" stroke-width="2" transform="rotate(45 ${cx + Math.cos(a) * r} ${cy + Math.sin(a) * r})" />`;
    }
  }
  svg += `<rect x="${cx - bodyHalf}" y="${cy - bodyHalf}" width="${bodyHalf * 2}" height="${bodyHalf * 2}" rx="${bodyHalf * 0.22}" fill="${c}" stroke="#0b1220" stroke-width="3.5" filter="url(#g${cls.id})" />`;
  svg += `<rect x="${cx - bodyHalf}" y="${cy - bodyHalf}" width="${bodyHalf * 2}" height="${bodyHalf * 2}" rx="${bodyHalf * 0.22}" fill="${c}" stroke="#0b1220" stroke-width="3.5" />`;
  svg += `<circle cx="${cx}" cy="${cy}" r="${bodyHalf * 0.42}" fill="#0b122033" stroke="#0b1220" stroke-width="2.5" />`;
  svg += `</svg>`;
  return svg;
}
