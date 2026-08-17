// ============================================================
// Игрок: танк, стрельба, дроны, мины, статы, уровни
// ============================================================
import * as THREE from 'three';
import { CLASSES, getClassById, ARENA, MAX_LEVEL, MAX_STAT, clamp, xpNeed, rand } from './config.js';
import { W, glowTexture } from './world.js';
import { buildTankMesh, buildViewModel } from './tanks.js';
import { S } from './audio.js';
import { enemies, damageEnemy, burst } from './entities.js';

const glowTex = glowTexture();

export const P = {
  x: 0, z: 0, yaw: 0, pitch: -0.06,
  vx: 0, vz: 0, radius: 1.5,
  level: 1, xp: 0, xpIntoLevel: 0,
  hp: 100, stamina: 100,
  statPoints: 0,
  stats: { regen: 0, maxhp: 0, body: 0, bspeed: 0, bdmg: 0, reload: 0, move: 0 },
  classId: 'basic', cls: null,
  mesh: null, turret: null, barrels: [], vm: null, vmBarrels: [],
  drones: [], traps: [], autoTurret: null,
  barrelCds: [], trapT: 0, autoCd: 0, autoAngle: 0,
  bobT: 0, alive: true, hurtT: 0,
  recoilKick: 0,
};

const pbullets = [];
const pbulletGeo = new THREE.SphereGeometry(0.3, 10, 10);
export const getPbullets = () => pbullets;

// ---------- производные статы ----------
export function getMaxHp() {
  const m = P.cls.mods || {};
  return Math.round((100 + 20 * P.stats.maxhp) * (m.hp || 1));
}
export function getBodyDmg() {
  const m = P.cls.mods || {};
  return (18 + 7 * P.stats.body) * (m.body || 1);
}
export function getMoveSpeed() {
  const m = P.cls.mods || {};
  return (11 + 1.15 * P.stats.move) * (m.move || 1);
}
export function getReloadFactor() { return 1 / (1 + 0.16 * P.stats.reload); }
export function getDmgFactor() {
  const m = P.cls.mods || {};
  return (1 + 0.3 * P.stats.bdmg) * (m.bdmg || 1);
}
export function getSpeedFactor() {
  const m = P.cls.mods || {};
  return (1 + 0.11 * P.stats.bspeed) * (m.bspeed || 1);
}

// ---------- инициализация ----------
export function initPlayer() {
  applyClass('basic', true);
  P.x = 0; P.z = 30;
  P.hp = getMaxHp();
  return P;
}

export function applyClass(id, silent = false) {
  const cls = getClassById(id);
  P.classId = id;
  P.cls = cls;

  // корпус в мире
  if (P.mesh) W.scene.remove(P.mesh);
  const built = buildTankMesh(cls);
  P.mesh = built.group;
  P.turret = built.turret;
  P.barrels = built.barrels;
  P.mesh.position.set(P.x, 0, P.z);
  W.scene.add(P.mesh);

  // стволы от первого лица
  if (P.vm) W.camera.remove(P.vm);
  const vmBuilt = buildViewModel(cls);
  P.vm = vmBuilt.vm;
  P.vmBarrels = vmBuilt.barrels;
  W.camera.add(P.vm);

  P.barrelCds = cls.barrels.map((b) => (b.phase || 0) * cls.reload);

  // дроны
  for (const d of P.drones) W.scene.remove(d.mesh);
  P.drones = [];
  if (cls.droneCount) {
    for (let i = 0; i < cls.droneCount; i++) {
      const mesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.5, 0),
        new THREE.MeshStandardMaterial({ color: 0x4fe0d0, emissive: 0x1e8f82, emissiveIntensity: 0.5, roughness: 0.4 })
      );
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0x4fe0d0, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
      glow.scale.setScalar(1.6);
      mesh.add(glow);
      mesh.castShadow = true;
      W.scene.add(mesh);
      P.drones.push({ mesh, x: P.x, z: P.z, hp: 50, respawn: 0, target: null, orbitA: (i / cls.droneCount) * Math.PI * 2 });
    }
  }

  // автотурель
  if (P.autoTurret) { W.scene.remove(P.autoTurret.mesh); P.autoTurret = null; }
  if (cls.special === 'auto') {
    const g = new THREE.Group();
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.38, 0.3, 10), new THREE.MeshStandardMaterial({ color: 0xe6962e, roughness: 0.5 }));
    const gun = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.16, 1.4, 8), new THREE.MeshStandardMaterial({ color: 0xe6962e, roughness: 0.5 }));
    gun.rotation.x = Math.PI / 2;
    gun.position.set(0, 0.28, 0.5);
    g.add(base, gun);
    g.position.y = 1.15;
    W.scene.add(g);
    P.autoTurret = { mesh: g, cd: 0, angle: 0 };
  }

  // мины сбрасываем
  for (const t of P.traps) W.scene.remove(t.mesh);
  P.traps = [];

  if (P.hp > 0) P.hp = Math.min(P.hp, getMaxHp());
  if (!silent) S.evolve();
}

// ---------- пули игрока ----------
function fireBullet(x, z, angle, spec) {
  const speed = 30 * spec.s * getSpeedFactor();
  const dmg = 12 * spec.d * getDmgFactor();
  const r = clamp(0.3 * spec.w, 0.22, 0.85);
  const color = spec.w >= 1.8 ? 0xffd166 : 0x56ccff;
  const mesh = new THREE.Mesh(pbulletGeo, new THREE.MeshBasicMaterial({ color }));
  mesh.scale.setScalar(r / 0.3);
  mesh.position.set(x, 1.0, z);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color, transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.scale.setScalar(2.4 * (r / 0.3));
  mesh.add(glow);
  W.scene.add(mesh);
  const life = clamp(52 / speed, 1.4, 3.4);
  pbullets.push({ mesh, x, z, vx: Math.sin(angle) * speed, vz: Math.cos(angle) * speed, dmg, r, life, spin: rand(0, 6) });
  S.shoot(clamp(1 - spec.w / 3, 0, 1));
  P.recoilKick = Math.min(1, P.recoilKick + (spec.w >= 1.8 ? 0.9 : 0.22));
}

function tryFire(dt, firing) {
  const cls = P.cls;
  const rf = getReloadFactor();
  for (let i = 0; i < cls.barrels.length; i++) {
    const spec = cls.barrels[i];
    P.barrelCds[i] -= dt;
    if (!firing || P.barrelCds[i] > 0) continue;
    P.barrelCds[i] = cls.reload * rf;
    const worldA = P.yaw + THREE.MathUtils.degToRad(spec.a);
    const n = spec.n || 1;
    for (let k = 0; k < n; k++) {
      const spread = (spec.spread || 0) + (n > 1 ? 0.1 : 0);
      const a = worldA + rand(-spread, spread);
      const off = spec.off || 0;
      const ox = Math.cos(worldA) * off;
      const oz = -Math.sin(worldA) * off;
      fireBullet(P.x + Math.sin(worldA) * 1.6 + ox, P.z + Math.cos(worldA) * 1.6 + oz, a, spec);
    }
    // отдача стволов
    if (P.barrels[i]) P.barrels[i].recoil = 1;
    if (P.vmBarrels[i]) P.vmBarrels[i].recoil = 1;
    if (spec.recoil) { // трай-энгл: тяга
      const back = worldA + Math.PI;
      P.vx += Math.sin(back + Math.PI) * 6;
      P.vz += Math.cos(back + Math.PI) * 6;
    }
  }
}

// ---------- мины ----------
function updateTraps(dt, placing) {
  const cls = P.cls;
  const maxTraps = cls.trapCount || 0;
  P.trapT -= dt;
  if (placing && maxTraps && P.trapT <= 0) {
    P.trapT = 0.55;
    if (P.traps.length >= maxTraps) {
      const old = P.traps.shift();
      W.scene.remove(old.mesh);
    }
    const power = cls.trapPower || 1;
    const mesh = new THREE.Mesh(
      new THREE.ConeGeometry(0.62, 0.9, 4),
      new THREE.MeshStandardMaterial({ color: 0xffc76b, emissive: 0x8a5a10, emissiveIntensity: 0.4, roughness: 0.5 })
    );
    const fx = P.x + Math.sin(P.yaw) * 2.4;
    const fz = P.z + Math.cos(P.yaw) * 2.4;
    mesh.position.set(fx, 0.45, fz);
    mesh.castShadow = true;
    W.scene.add(mesh);
    P.traps.push({ mesh, x: fx, z: fz, hp: 90 * power, dmg: 42 * power, life: 13, r: 0.9, flash: 0 });
    S.place();
  }
  for (let i = P.traps.length - 1; i >= 0; i--) {
    const t = P.traps[i];
    t.life -= dt;
    t.flash = Math.max(0, t.flash - dt * 4);
    t.mesh.rotation.y += dt * (0.5 + t.flash * 8);
    t.mesh.position.y = 0.45 + t.flash * 0.1;
    if (t.life <= 0 || t.hp <= 0) {
      burst(t.x, t.z, 0xffc76b, 6, 5, 0.5);
      W.scene.remove(t.mesh);
      P.traps.splice(i, 1);
    }
  }
}

// ---------- дроны ----------
function updateDrones(dt) {
  for (const d of P.drones) {
    if (d.hp <= 0) {
      d.mesh.visible = false;
      d.respawn -= dt;
      if (d.respawn <= 0) { d.hp = 50; d.mesh.visible = true; }
      continue;
    }
    d.orbitA += dt * 1.9;
    // поиск цели
    let best = null, bestD = 34 * 34;
    for (const e of enemies) {
      if (e.dead) continue;
      const dx = e.x - d.x, dz = e.z - d.z;
      const dd = dx * dx + dz * dz;
      if (dd < bestD) { bestD = dd; best = e; }
    }
    let tx, tz, sp;
    if (best) { tx = best.x; tz = best.z; sp = 25; }
    else { tx = P.x + Math.sin(d.orbitA) * 5.5; tz = P.z + Math.cos(d.orbitA) * 5.5; sp = 20; }
    const dx = tx - d.x, dz = tz - d.z;
    const dist = Math.sqrt(dx * dx + dz * dz) || 1;
    d.x += (dx / dist) * sp * dt;
    d.z += (dz / dist) * sp * dt;
    d.mesh.position.set(d.x, 1.2 + Math.sin(d.orbitA * 2) * 0.25, d.z);
    d.mesh.rotation.y += dt * 5;
    // урон по касанию
    if (best && bestD < (best.radius + 0.7) ** 2) {
      damageEnemy(best, 60 * dt);
      d.hp -= 14 * dt;
    }
  }
}

// ---------- автотурель ----------
function updateAuto(dt) {
  const at = P.autoTurret;
  if (!at) return;
  at.mesh.position.set(P.x, 1.15, P.z);
  at.cd -= dt;
  let best = null, bestD = 58 * 58;
  for (const e of enemies) {
    if (e.dead) continue;
    const dx = e.x - P.x, dz = e.z - P.z;
    const dd = dx * dx + dz * dz;
    if (dd < bestD) { bestD = dd; best = e; }
  }
  if (best) {
    const want = Math.atan2(best.x - P.x, best.z - P.z);
    at.angle += Math.atan2(Math.sin(want - at.angle), Math.cos(want - at.angle)) * Math.min(1, dt * 8);
    if (at.cd <= 0) {
      at.cd = 0.75 * getReloadFactor();
      fireBullet(P.x + Math.sin(at.angle) * 1.4, P.z + Math.cos(at.angle) * 1.4, at.angle + rand(-0.03, 0.03), { s: 1.1, d: 0.75, w: 0.8 });
    }
  }
  at.mesh.rotation.y = at.angle;
}

// ---------- основной апдейт ----------
export function updatePlayer(dt, input, ctx) {
  if (!P.alive) return;

  // обзор
  P.yaw = input.yaw;
  P.pitch = clamp(input.pitch, -0.5, 0.42);

  // движение
  const spd = getMoveSpeed() * (input.boost && P.stamina > 0 ? 1.45 : 1);
  if (input.boost && (input.mx || input.mz)) P.stamina = Math.max(0, P.stamina - 26 * dt);
  else P.stamina = Math.min(100, P.stamina + 17 * dt);

  let mx = 0, mz = 0;
  if (input.keys['KeyW'] || input.keys['ArrowUp']) { mx += Math.sin(P.yaw); mz += Math.cos(P.yaw); }
  if (input.keys['KeyS'] || input.keys['ArrowDown']) { mx -= Math.sin(P.yaw); mz -= Math.cos(P.yaw); }
  if (input.keys['KeyA'] || input.keys['ArrowLeft']) { mx += Math.cos(P.yaw); mz -= Math.sin(P.yaw); }
  if (input.keys['KeyD'] || input.keys['ArrowRight']) { mx -= Math.cos(P.yaw); mz += Math.sin(P.yaw); }
  const ml = Math.sqrt(mx * mx + mz * mz);
  if (ml > 0) { mx /= ml; mz /= ml; }
  input.mx = mx; input.mz = mz;

  P.vx += (mx * spd - P.vx) * Math.min(1, dt * 9);
  P.vz += (mz * spd - P.vz) * Math.min(1, dt * 9);
  P.x += P.vx * dt;
  P.z += P.vz * dt;

  // столкновения: стены
  P.x = clamp(P.x, -ARENA + P.radius, ARENA - P.radius);
  P.z = clamp(P.z, -ARENA + P.radius, ARENA - P.radius);
  // укрытия (круг против AABB)
  for (const o of W.obstacles) {
    const cx = clamp(P.x, o.x - o.hw, o.x + o.hw);
    const cz = clamp(P.z, o.z - o.hd, o.z + o.hd);
    const dx = P.x - cx, dz = P.z - cz;
    const d2 = dx * dx + dz * dz;
    if (d2 < P.radius * P.radius && d2 > 0.0001) {
      const d = Math.sqrt(d2);
      P.x = cx + (dx / d) * P.radius;
      P.z = cz + (dz / d) * P.radius;
    }
  }

  // реген
  const regen = 1.2 + 1.5 * P.stats.regen;
  P.hp = Math.min(getMaxHp(), P.hp + regen * dt);
  P.hurtT = Math.max(0, P.hurtT - dt);

  // стрельба
  tryFire(dt, input.firing);
  updateTraps(dt, input.placing);
  updateDrones(dt);
  updateAuto(dt);

  // пули игрока
  for (let i = pbullets.length - 1; i >= 0; i--) {
    const b = pbullets[i];
    b.x += b.vx * dt; b.z += b.vz * dt; b.life -= dt; b.spin += dt * 10;
    b.mesh.position.set(b.x, 1.0 + Math.sin(b.spin) * 0.02, b.z);
    let hit = b.life <= 0 || Math.abs(b.x) > ARENA - 0.5 || Math.abs(b.z) > ARENA - 0.5;
    if (!hit) {
      for (const o of W.obstacles) {
        if (Math.abs(b.x - o.x) < o.hw + b.r && Math.abs(b.z - o.z) < o.hd + b.r) { hit = true; break; }
      }
    }
    if (hit) {
      burst(b.x, b.z, 0x56ccff, 4, 4, 1);
      W.scene.remove(b.mesh);
      pbullets.splice(i, 1);
    }
  }

  // анимация модели
  P.mesh.position.set(P.x, 0, P.z);
  P.mesh.rotation.y = P.yaw;
  for (const b of P.barrels) {
    b.recoil = Math.max(0, b.recoil - dt * 6);
    b.mesh.position.z = b.baseZ - b.recoil * 0.34;
  }
  for (const b of P.vmBarrels) {
    b.recoil = Math.max(0, b.recoil - dt * 6);
    b.mesh.position.z = b.baseZ + b.recoil * 0.3;
  }

  // камера (от первого лица)
  const moving = ml > 0;
  if (moving) P.bobT += dt * (input.boost ? 13 : 9);
  const bob = moving ? Math.sin(P.bobT) * 0.055 : 0;
  const cam = W.camera;
  cam.position.set(P.x, 2.5 + bob, P.z);
  cam.rotation.y = P.yaw + Math.PI;
  cam.rotation.x = P.pitch + P.recoilKick * 0.045;
  P.recoilKick = Math.max(0, P.recoilKick - dt * 5);

  // viewmodel лёгкое покачивание
  if (P.vm) {
    P.vm.position.x = Math.sin(P.bobT * 0.5) * (moving ? 0.035 : 0);
    P.vm.position.y = -1.15 + Math.abs(Math.cos(P.bobT)) * (moving ? 0.03 : 0) - P.recoilKick * 0.05;
  }

  if (P.hp <= 0 && P.alive) {
    P.alive = false;
    burst(P.x, P.z, 0x3fa7ff, 40, 14, 1.2);
    ctx.onDeath();
  }
}

export function damagePlayer(dmg, ctx) {
  if (!P.alive) return;
  P.hp -= dmg;
  P.hurtT = 0.4;
  if (dmg > 4) S.hurt();
  ctx.shake(Math.min(1, dmg / 40));
}

export function gainXp(amount, ctx) {
  P.xp += amount;
  P.xpIntoLevel += amount;
  while (P.level < MAX_LEVEL) {
    const need = xpNeed(P.level);
    if (P.xpIntoLevel < need) break;
    P.xpIntoLevel -= need;
    P.level++;
    P.statPoints++;
    P.hp = Math.min(getMaxHp(), P.hp + getMaxHp() * 0.3);
    S.level();
    burst(P.x, P.z, 0xffe36b, 22, 11, 1.4);
    ctx.onLevelUp(P.level);
  }
}

export function upgradeStat(key) {
  if (P.statPoints <= 0 || P.stats[key] >= MAX_STAT) return false;
  P.stats[key]++;
  P.statPoints--;
  if (key === 'maxhp') P.hp += 20;
  S.click();
  return true;
}

export function resetPlayer() {
  P.level = 1; P.xp = 0; P.xpIntoLevel = 0; P.statPoints = 0;
  P.stats = { regen: 0, maxhp: 0, body: 0, bspeed: 0, bdmg: 0, reload: 0, move: 0 };
  P.x = 0; P.z = 30; P.vx = 0; P.vz = 0; P.yaw = 0; P.pitch = -0.06;
  P.stamina = 100; P.alive = true; P.hurtT = 0;
  applyClass('basic', true);
  P.hp = getMaxHp();
}
