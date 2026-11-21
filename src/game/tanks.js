// ============================================================
// 3D-модели танков по спецификации класса + SVG-превью
// ============================================================
import * as THREE from 'three';
import { getCustomization, getPaint } from './customization.js';

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

function hullGeometry(style, size, height = 0.85) {
  switch (style) {
    case 'cylinder': return new THREE.CylinderGeometry(size * 0.5, size * 0.5, height, 32);
    case 'triangle': return new THREE.CylinderGeometry(size * 0.58, size * 0.58, height, 3);
    case 'hexagon': return new THREE.CylinderGeometry(size * 0.58, size * 0.58, height, 6);
    case 'octagon': return new THREE.CylinderGeometry(size * 0.58, size * 0.58, height, 8);
    case 'ring': {
      const ring = new THREE.TorusGeometry(size * 0.42, size * 0.15, 12, 32);
      ring.rotateX(Math.PI / 2);
      return ring;
    }
    default: return new THREE.BoxGeometry(size, height, size);
  }
}

function makeBarrelAdornment(style, radius, length, paintId, colors) {
  const adornment = new THREE.Group();
  if (style === 'broken') {
    const jaggedMuzzle = new THREE.Mesh(
      new THREE.TorusGeometry(radius * 0.94, 0.075, 6, 12, Math.PI * 1.72),
      stdMat(0x17191d)
    );
    jaggedMuzzle.position.z = -length - 0.08;
    adornment.add(jaggedMuzzle);
    const fracture = new THREE.Mesh(
      new THREE.BoxGeometry(radius * 0.16, radius * 1.6, 0.09),
      stdMat(0x17191d)
    );
    fracture.position.set(radius * 0.6, 0, -length * 0.36);
    fracture.rotation.z = 0.45;
    adornment.add(fracture);
  } else if (style === 'alpha') {
    // Ретро-конфигурация: основной подвижный ствол и один дополнительный фиксированный на башне.
    const fixedTwin = new THREE.Mesh(
      barrelGeo(radius * 0.62, length * 0.92),
      paintMat(colors.paint || { color: colors.body })
    );
    fixedTwin.position.set(radius * 1.25, 0, -length * 0.46);
    adornment.add(fixedTwin);
  } else if (style === 'beta') {
    for (let i = 0; i < 5; i++) {
      const ring = new THREE.Mesh(
        new THREE.CylinderGeometry(radius * 1.08, radius * 0.92, Math.max(0.14, length * 0.1), 12),
        stdMat(colors.turret)
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.z = -length * (0.08 + i * 0.21);
      adornment.add(ring);
    }
  } else if (style === 'gamma') {
    const badge = new THREE.Group();
    const backgroundColor = paintId === 'black' ? 0xffffff : 0x141414;
    const sign = new THREE.Mesh(
      new THREE.CircleGeometry(radius * 1.65, 24),
      stdMat(backgroundColor, { side: THREE.DoubleSide })
    );
    badge.add(sign);
    const symbolColor = paintId === 'black' ? 0x141414 : 0xf5df35;
    for (let i = 0; i < 3; i++) {
      const wedge = new THREE.Mesh(
        new THREE.ConeGeometry(radius * 0.42, radius * 0.86, 3),
        stdMat(symbolColor)
      );
      const angle = i * Math.PI * 2 / 3;
      wedge.position.set(Math.cos(angle) * radius * 0.7, Math.sin(angle) * radius * 0.7, 0.025);
      wedge.rotation.z = angle;
      badge.add(wedge);
    }
    badge.position.set(radius * 0.12, radius * 0.9, -length * 0.48);
    adornment.add(badge);
  }
  return adornment;
}

function paintMat(paint, opts = {}) {
  const material = stdMat(paint.gradient ? 0xffffff : paint.color, opts);
  if (paint.gradient) {
    material.onBeforeCompile = (shader) => {
      shader.uniforms.tankGradientA = { value: new THREE.Color(paint.gradient[0]) };
      shader.uniforms.tankGradientB = { value: new THREE.Color(paint.gradient[1]) };
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\\nvarying float vTankGradient;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\\nvTankGradient = position.x;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', '#include <common>\\nuniform vec3 tankGradientA;\\nuniform vec3 tankGradientB;\\nvarying float vTankGradient;')
        .replace('#include <color_fragment>', '#include <color_fragment>\\ndiffuseColor.rgb *= mix(tankGradientA, tankGradientB, smoothstep(-1.0, 1.0, vTankGradient));');
    };
    material.customProgramCacheKey = () => 'tank-gradient-v1';
  }
  return material;
}

// --- Собирает корпус + башню по классу. Возвращает { group, turret, barrels }
export function buildTankMesh(cls, tierOverride = null, customization = getCustomization()) {
  const tier = tierOverride || cls.tier;
  const tierColors = TIER_COLORS[Math.min(3, tier)];
  const paint = getPaint(customization.paint);
  const colors = { body: paint.color, turret: paint.color, accent: '#' + paint.color.toString(16).padStart(6, '0') };
  const group = new THREE.Group();

  // корпус
  const bodySize = cls.special === 'melee' ? 2.5 : cls.id === 'heavy' || cls.id === 'juggernaut' ? 2.45 : 2.2;
  const bodyGeometry = hullGeometry(customization.body, bodySize);
  const body = new THREE.Mesh(bodyGeometry, paintMat(paint));
  body.position.y = 0.55;
  body.castShadow = true;
  group.add(body);

  const plate = new THREE.Mesh(
    new THREE.BoxGeometry(bodySize * 0.8, 0.14, bodySize * 0.8),
    paintMat(paint)
  );
  plate.position.y = 1.02;
  if (customization.body !== 'rectangle') {
    plate.geometry.dispose();
    plate.geometry = hullGeometry(customization.body, bodySize * 0.8, 0.14);
  }
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

  // Стволы отображаются только в модели от первого лица (buildViewModel).
  // В мировом корпусе оставляем башню без неподвижной дублирующей пушки.
  const barrels = [];

  return { group, turret, barrels, colors };
}

// --- Вид от первого лица: стволы, прикреплённые к камере
export function buildViewModel(cls, customization = getCustomization()) {
  const paint = getPaint(customization.paint);
  const colors = {
    body: paint.color,
    turret: paint.color,
    accent: '#' + paint.color.toString(16).padStart(6, '0'),
    paint,
  };
  const vm = new THREE.Group();
  const barrels = [];

  // Видимый капот/корпус танка: мировая модель находится за камерой,
  // поэтому для вида от первого лица нужна отдельная передняя секция корпуса.
  const bodySize = cls.special === 'melee' ? 2.5 : cls.id === 'heavy' || cls.id === 'juggernaut' ? 2.45 : 2.2;
  const hull = new THREE.Group();
  hull.position.set(0, 0.4, -1.05);
  const hullMesh = new THREE.Mesh(hullGeometry(customization.body, bodySize * 0.78, 0.48), paintMat(paint));
  hullMesh.castShadow = true;
  hull.add(hullMesh);

  const topPlate = new THREE.Mesh(
    hullGeometry(customization.body, bodySize * 0.55, 0.14),
    paintMat(paint, { metalness: 0.55 })
  );
  topPlate.position.y = 0.29;
  hull.add(topPlate);

  // Низкие боковые секции подчёркивают габарит и форму выбранного корпуса.
  for (const side of [-1, 1]) {
    const track = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.32, 1.42),
      stdMat(0x252b35, { roughness: 0.82, metalness: 0.18 })
    );
    track.position.set(side * bodySize * 0.43, -0.08, 0.02);
    hull.add(track);
  }
  const turretBase = new THREE.Mesh(
    new THREE.CylinderGeometry(bodySize * 0.22, bodySize * 0.28, 0.24, customization.body === 'triangle' ? 3 : customization.body === 'hexagon' ? 6 : 12),
    paintMat(paint)
  );
  turretBase.position.set(0, 0.34, -0.05);
  hull.add(turretBase);
  vm.add(hull);

  for (const spec of cls.barrels) {
    const radius = Math.min(0.5, 0.24 * spec.w);
    const length = 2.6 * spec.l * (customization.barrel === 'short' ? 0.6 : 1);
    const holder = new THREE.Group();
    holder.position.set((spec.off || 0) * 0.9, 0.82, 0);
    holder.rotation.y = -THREE.MathUtils.degToRad(spec.a) * 0.55;

    const mesh = new THREE.Mesh(
      barrelGeo(radius, length),
      paintMat(paint, { roughness: 0.45 })
    );
    const baseZ = -length / 2 - 0.1;
    mesh.position.set(0, 0, baseZ);
    holder.add(mesh);

    if (customization.barrel !== 'classic' && customization.barrel !== 'short') {
      holder.add(makeBarrelAdornment(customization.barrel, radius, length, customization.paint, colors));
    }

    // У раструбных стволов сохраняется визуальный раструб, но форма остаётся косметической.
    if (spec.w >= 1.15) {
      const muzzle = new THREE.Mesh(
        new THREE.CylinderGeometry(radius * 1.22, radius * 1.05, 0.22, 12),
        paintMat(paint)
      );
      muzzle.rotation.x = Math.PI / 2;
      muzzle.position.z = -length + 0.08;
      holder.add(muzzle);
    }

    vm.add(holder);
    barrels.push({ holder, mesh, baseZ, spec, recoil: 0 });
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
