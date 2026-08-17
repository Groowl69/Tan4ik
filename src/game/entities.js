// ============================================================
// Сущности: фигуры, боссы, пули, частицы, опыт
// ============================================================
import * as THREE from 'three';
import { SHAPES, BOSSES, ARENA, clamp, rand, pick } from './config.js';
import { W, glowTexture } from './world.js';
import { S } from './audio.js';

export const enemies = [];   // {type, mesh, x, z, hp, maxhp, ...}
export const ebullets = [];  // вражеские пули
export const orbs = [];      // кристаллы опыта
export const particles = [];
export let boss = null;

const glowTex = glowTexture();
const geoCache = {};
const orbGeo = new THREE.OctahedronGeometry(0.34, 0);
const particleGeo = new THREE.BoxGeometry(0.22, 0.22, 0.22);

function shapeGeo(sides, size) {
  const key = `${sides}_${size.toFixed(2)}`;
  if (!geoCache[key]) {
    let g;
    if (sides === 0) g = new THREE.OctahedronGeometry(size * 0.72, 0);
    else g = new THREE.CylinderGeometry(size, size, size * 0.92, sides);
    geoCache[key] = g;
  }
  return geoCache[key];
}

function hpBarMesh() {
  const g = new THREE.Group();
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.14), new THREE.MeshBasicMaterial({ color: 0x10151f, transparent: true, opacity: 0.85, depthWrite: false }));
  const fg = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.09), new THREE.MeshBasicMaterial({ color: 0x5eff8a, depthWrite: false }));
  fg.position.z = 0.01;
  g.add(bg, fg);
  g.visible = false;
  return { group: g, fg };
}

// ---------- спавн фигур ----------
export function spawnShape(type, x, z, scaleMul = 1, home = false) {
  const def = SHAPES[type];
  const size = def.size;
  const mat = new THREE.MeshStandardMaterial({ color: def.color, roughness: 0.5, metalness: 0.25, emissive: def.color, emissiveIntensity: 0.12 });
  const mesh = new THREE.Mesh(shapeGeo(def.sides, size), mat);
  mesh.castShadow = true;
  mesh.position.set(x, size * 0.55, z);
  W.scene.add(mesh);
  const hpbar = hpBarMesh();
  hpbar.group.position.y = size + 0.9;
  hpbar.group.scale.x = size * 1.6;
  mesh.add(hpbar.group);
  const e = {
    type, def, mesh, mat, x, z, size,
    hp: def.hp * scaleMul, maxhp: def.hp * scaleMul,
    dmg: def.dmg * scaleMul, xp: def.xp * scaleMul,
    speed: def.speed, radius: size * 0.95,
    wanderA: rand(0, Math.PI * 2), wanderT: rand(0.5, 2),
    spin: rand(-0.7, 0.7), hitFlash: 0, hpbar,
    shootT: rand(1, 2.2), home, homeA: rand(0, Math.PI * 2), homeR: rand(13, 19),
    isBoss: false, summoned: false, dead: false,
  };
  enemies.push(e);
  return e;
}

function randEdgePos() {
  const side = Math.floor(rand(0, 4));
  const m = ARENA - 10;
  if (side === 0) return [rand(-m, m), -m];
  if (side === 1) return [rand(-m, m), m];
  if (side === 2) return [-m, rand(-m, m)];
  return [m, rand(-m, m)];
}

export function spawnAtEdge(type, scaleMul) {
  const [x, z] = randEdgePos();
  return spawnShape(type, x, z, scaleMul, type === 'droneE');
}

// ---------- боссы ----------
export function spawnBoss(key, chapterIdx) {
  const def = BOSSES[key];
  const hpMul = 1 + chapterIdx * 0.12;
  const e = spawnShape(key === 'hunter' ? 'tankE' : (def.sides === 0 ? 'droneE' : 'hexagon'), 0, -ARENA + 24, 1);
  // перестроим меш под босса
  W.scene.remove(e.mesh);
  const mat = new THREE.MeshStandardMaterial({ color: def.color, roughness: 0.4, metalness: 0.4, emissive: def.color, emissiveIntensity: 0.3 });
  const mesh = new THREE.Mesh(shapeGeo(def.sides, def.size), mat);
  mesh.castShadow = true;
  mesh.position.set(0, def.size * 0.6, -ARENA + 24);
  W.scene.add(mesh);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(def.size * 1.25, 0.16, 8, 40),
    new THREE.MeshBasicMaterial({ color: def.color, transparent: true, opacity: 0.7 })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.3;
  mesh.add(ring);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: def.color, transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.scale.setScalar(def.size * 4.2);
  mesh.add(glow);

  Object.assign(e, {
    mesh, mat, x: 0, z: -ARENA + 24, size: def.size, radius: def.size * 0.92,
    hp: def.hp * hpMul, maxhp: def.hp * hpMul, dmg: def.dmg, xp: def.xp,
    speed: 2.6, isBoss: true, bossKey: key, name: def.name,
    t: 0, atkT: 2, atk2T: 4, phase: 1, spinSpeed: key === 'gear' ? 3.2 : 0.8,
    telegraph: 0, chargeVX: 0, chargeVZ: 0, charging: 0, spiralA: 0,
    hitFlash: 0,
  });
  e.hpbar.group.visible = false;
  boss = e;
  return e;
}

// ---------- вражеские пули ----------
const ebulletGeo = new THREE.SphereGeometry(0.28, 10, 10);
const ebulletMat = new THREE.MeshBasicMaterial({ color: 0xff6b6b });
export function fireEnemyBullet(x, z, angle, speed, dmg, size = 1, life = 4.5) {
  if (ebullets.length > 140) return;
  const mesh = new THREE.Mesh(ebulletGeo, ebulletMat);
  mesh.scale.setScalar(size);
  mesh.position.set(x, 1.0, z);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xff5050, transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.scale.setScalar(1.6 * size);
  mesh.add(glow);
  W.scene.add(mesh);
  ebullets.push({ mesh, x, z, vx: Math.sin(angle) * speed, vz: Math.cos(angle) * speed, dmg, r: 0.3 * size, life });
  S.eshoot();
}

export function updateEnemyBullets(dt, playerHit) {
  for (let i = ebullets.length - 1; i >= 0; i--) {
    const b = ebullets[i];
    b.x += b.vx * dt; b.z += b.vz * dt; b.life -= dt;
    b.mesh.position.set(b.x, 1.0, b.z);
    if (b.life <= 0 || Math.abs(b.x) > ARENA || Math.abs(b.z) > ARENA) {
      W.scene.remove(b.mesh);
      ebullets.splice(i, 1);
      continue;
    }
    if (playerHit(b)) {
      W.scene.remove(b.mesh);
      ebullets.splice(i, 1);
    }
  }
}

// ---------- опыт ----------
export function dropXp(x, z, amount) {
  const n = clamp(Math.round(amount / 12), 1, 8);
  const each = amount / n;
  for (let i = 0; i < n; i++) {
    const mat = new THREE.MeshBasicMaterial({ color: 0xffe36b });
    const mesh = new THREE.Mesh(orbGeo, mat);
    const ox = x + rand(-1.2, 1.2), oz = z + rand(-1.2, 1.2);
    mesh.position.set(ox, 0.6, oz);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xffd94d, transparent: true, opacity: 0.65, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.scale.setScalar(1.5);
    mesh.add(glow);
    W.scene.add(mesh);
    orbs.push({ mesh, x: ox, z: oz, val: each, vx: rand(-3, 3), vz: rand(-3, 3), t: rand(0, 6) });
  }
}

export function updateOrbs(dt, px, pz, collect) {
  for (let i = orbs.length - 1; i >= 0; i--) {
    const o = orbs[i];
    o.t += dt;
    const dx = px - o.x, dz = pz - o.z;
    const d2 = dx * dx + dz * dz;
    if (d2 < 210) { // магнит
      const d = Math.sqrt(d2) || 1;
      const pull = clamp((210 - d2) / 210, 0, 1) * 46;
      o.x += (dx / d) * pull * dt;
      o.z += (dz / d) * pull * dt;
    } else {
      o.x += o.vx * dt; o.z += o.vz * dt;
      o.vx *= 0.92; o.vz *= 0.92;
    }
    o.mesh.position.set(o.x, 0.6 + Math.sin(o.t * 3) * 0.14, o.z);
    o.mesh.rotation.y += dt * 2.4;
    if (d2 < 2.6) {
      collect(o.val);
      W.scene.remove(o.mesh);
      orbs.splice(i, 1);
      S.xp();
    }
  }
}

// ---------- частицы ----------
export function burst(x, z, color, count = 12, power = 9, y = 1) {
  if (particles.length > 260) return;
  for (let i = 0; i < count; i++) {
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true });
    const mesh = new THREE.Mesh(particleGeo, mat);
    mesh.position.set(x + rand(-0.4, 0.4), y + rand(0, 0.8), z + rand(-0.4, 0.4));
    W.scene.add(mesh);
    const a = rand(0, Math.PI * 2);
    const sp = rand(power * 0.35, power);
    particles.push({
      mesh, mat,
      vx: Math.sin(a) * sp, vz: Math.cos(a) * sp, vy: rand(2, 9),
      life: rand(0.4, 0.9), maxLife: 0.9,
    });
  }
}

export function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.life -= dt;
    if (p.life <= 0) {
      W.scene.remove(p.mesh);
      particles.splice(i, 1);
      continue;
    }
    p.vy -= 16 * dt;
    p.mesh.position.x += p.vx * dt;
    p.mesh.position.y = Math.max(0.1, p.mesh.position.y + p.vy * dt);
    p.mesh.position.z += p.vz * dt;
    p.mesh.rotation.x += dt * 7; p.mesh.rotation.z += dt * 6;
    const k = p.life / p.maxLife;
    p.mesh.scale.setScalar(clamp(k * 1.4, 0.05, 1.4));
    p.mat.opacity = clamp(k * 1.3, 0, 1);
  }
}

// ---------- ИИ врагов ----------
function angleTo(ax, az, bx, bz) { return Math.atan2(bx - ax, bz - az); }

export function updateEnemies(dt, ctx) {
  const { px, pz, player, chapterIdx } = ctx;
  const scaleMul = 1 + chapterIdx * 0.3;

  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    if (e.dead) continue;
    const dx = px - e.x, dz = pz - e.z;
    const dist = Math.sqrt(dx * dx + dz * dz) || 1;
    e.hitFlash = Math.max(0, e.hitFlash - dt * 5);
    e.mat.emissiveIntensity = 0.12 + e.hitFlash * 1.6;

    let mvx = 0, mvz = 0;

    if (e.isBoss) {
      updateBoss(e, dt, ctx);
    } else if (e.type === 'tankE' || (e.type === 'diamond')) {
      // держат дистанцию и стреляют
      const want = e.type === 'tankE' ? 26 : 20;
      const toP = angleTo(e.x, e.z, px, pz);
      if (dist > want + 4) { mvx = Math.sin(toP) * e.speed; mvz = Math.cos(toP) * e.speed; }
      else if (dist < want - 4) { mvx = -Math.sin(toP) * e.speed; mvz = -Math.cos(toP) * e.speed; }
      else { mvx = Math.cos(toP) * e.speed * 0.6; mvz = -Math.sin(toP) * e.speed * 0.6; }
      e.mesh.rotation.y = toP;
      e.shootT -= dt;
      if (e.shootT <= 0 && dist < 70) {
        if (e.type === 'tankE') {
          fireEnemyBullet(e.x + Math.sin(toP) * 2.2, e.z + Math.cos(toP) * 2.2, toP + rand(-0.03, 0.03), 24, e.dmg * 0.55, 0.9);
          fireEnemyBullet(e.x + Math.sin(toP) * 2.2, e.z + Math.cos(toP) * 2.2, toP + rand(-0.03, 0.03), 24, e.dmg * 0.55, 0.9, 4.5);
          e.shootT = 1.6;
        } else {
          fireEnemyBullet(e.x + Math.sin(toP) * 1.8, e.z + Math.cos(toP) * 1.8, toP, 20, e.dmg * 0.8, 0.8);
          e.shootT = 1.7;
        }
      }
    } else if (e.type === 'droneE' || e.home) {
      // дрон: кружит и пикирует
      e.homeA += dt * 1.6;
      if (dist < 60) {
        const orbitX = px + Math.sin(e.homeA) * e.homeR;
        const orbitZ = pz + Math.cos(e.homeA) * e.homeR;
        const ta = angleTo(e.x, e.z, orbitX, orbitZ);
        mvx = Math.sin(ta) * e.speed; mvz = Math.cos(ta) * e.speed;
      } else {
        mvx = Math.sin(e.wanderA) * e.speed * 0.4; mvz = Math.cos(e.wanderA) * e.speed * 0.4;
      }
      e.mesh.rotation.y += dt * 4;
      e.mesh.position.y = e.size * 0.72 + Math.sin(e.homeA * 2) * 0.4;
    } else {
      // обычные фигуры: блуждание + агрессия
      e.wanderT -= dt;
      if (e.wanderT <= 0) { e.wanderA = rand(0, Math.PI * 2); e.wanderT = rand(1, 3); }
      if (dist < e.def.aggro) {
        const sp = e.type === 'triangle' ? e.speed * 1.35 : e.speed;
        mvx = (dx / dist) * sp; mvz = (dz / dist) * sp;
      } else {
        mvx = Math.sin(e.wanderA) * e.speed * 0.45;
        mvz = Math.cos(e.wanderA) * e.speed * 0.45;
      }
      e.mesh.rotation.y += dt * e.spin;
    }

    e.x = clamp(e.x + mvx * dt, -ARENA + e.radius, ARENA - e.radius);
    e.z = clamp(e.z + mvz * dt, -ARENA + e.radius, ARENA - e.radius);
    if (!e.isBoss || e.charging <= 0) e.mesh.position.set(e.x, e.mesh.position.y * 0 + (e.type === 'droneE' ? e.mesh.position.y : e.size * 0.55), e.z);
    else e.mesh.position.set(e.x, e.size * 0.55, e.z);

    // простое расталкивание
    for (let j = i - 1; j >= 0; j--) {
      const o = enemies[j];
      if (o.dead) continue;
      const ox = e.x - o.x, oz = e.z - o.z;
      const rr = e.radius + o.radius;
      const d2 = ox * ox + oz * oz;
      if (d2 > 0.01 && d2 < rr * rr) {
        const d = Math.sqrt(d2);
        const push = (rr - d) * 0.5;
        e.x += (ox / d) * push; e.z += (oz / d) * push;
        o.x -= (ox / d) * push; o.z -= (oz / d) * push;
      }
    }

    // контакт с игроком
    if (dist < e.radius + player.radius + 0.15) {
      ctx.contactDamage(e, dt);
    }

    // hp-бар
    if (!e.isBoss && e.hp < e.maxhp) {
      e.hpbar.group.visible = true;
      e.hpbar.group.lookAt(px, e.hpbar.group.parent.position.y + e.size + 0.9, pz);
      const frac = clamp(e.hp / e.maxhp, 0, 1);
      e.hpbar.fg.scale.x = Math.max(0.001, frac);
      e.hpbar.fg.position.x = -(1 - frac) / 2;
    }

    // смерть
    if (e.hp <= 0) killEnemy(i, ctx);
  }
}

// ---------- паттерны боссов ----------
function updateBoss(e, dt, ctx) {
  const { px, pz } = ctx;
  e.t += dt;
  const dx = px - e.x, dz = pz - e.z;
  const dist = Math.sqrt(dx * dx + dz * dz) || 1;
  const toP = angleTo(e.x, e.z, px, pz);
  e.mesh.rotation.y += dt * e.spinSpeed * (e.phase >= 3 ? 2.2 : 1);
  const frac = e.hp / e.maxhp;

  if (e.charging > 0) {
    e.charging -= dt;
    e.x += e.chargeVX * dt; e.z += e.chargeVZ * dt;
    e.mat.emissiveIntensity = 1.4;
    return;
  }
  if (e.telegraph > 0) {
    e.telegraph -= dt;
    e.mat.emissiveIntensity = 1.0 + Math.sin(e.t * 30) * 0.7;
    if (e.telegraph <= 0) {
      e.charging = 0.85;
      const a = angleTo(e.x, e.z, px, pz);
      e.chargeVX = Math.sin(a) * 46; e.chargeVZ = Math.cos(a) * 46;
      S.dash();
    }
    return;
  }

  const key = e.bossKey;
  // движение к игроку
  const approach = key === 'hunter' || key === 'mother' ? (dist > 30 ? 1 : dist < 22 ? -1 : 0) : (dist > 14 ? 1 : 0);
  const sp = e.speed * (e.phase >= 3 ? 1.7 : 1);
  e.x += (dx / dist) * sp * approach * dt;
  e.z += (dz / dist) * sp * approach * dt;

  e.atkT -= dt;
  e.atk2T -= dt;

  if (key === 'guard') {
    if (e.atkT <= 0) { e.telegraph = 0.65; e.atkT = 4.2; }
  } else if (key === 'gear') {
    if (e.atkT <= 0) {
      const n = 14;
      const base = e.mesh.rotation.y;
      for (let k = 0; k < n; k++) fireEnemyBullet(e.x, e.z, base + (k / n) * Math.PI * 2, 15, e.dmg * 0.5, 1, 5);
      e.atkT = 2.9;
    }
  } else if (key === 'hive') {
    if (e.atkT <= 0) {
      for (const off of [-0.22, 0, 0.22]) fireEnemyBullet(e.x + Math.sin(toP) * 2.5, e.z + Math.cos(toP) * 2.5, toP + off, 22, e.dmg * 0.6, 1);
      e.atkT = 2.4;
    }
    if (e.atk2T <= 0) {
      const alive = enemies.filter((x) => x.summoned && !x.dead).length;
      if (alive < 9) for (let k = 0; k < 3; k++) {
        const s = spawnShape('square', e.x + rand(-6, 6), e.z + rand(-6, 6), 1 + ctx.chapterIdx * 0.3);
        s.summoned = true;
      }
      e.atk2T = 6.5;
    }
  } else if (key === 'mother') {
    if (e.atkT <= 0) {
      const n = 12;
      for (let k = 0; k < n; k++) fireEnemyBullet(e.x, e.z, (k / n) * Math.PI * 2, 13, e.dmg * 0.45, 0.8, 5);
      e.atkT = 5.5;
    }
    if (e.atk2T <= 0) {
      const alive = enemies.filter((x) => x.summoned && !x.dead).length;
      if (alive < 10) for (let k = 0; k < 4; k++) {
        const s = spawnShape('droneE', e.x + rand(-5, 5), e.z + rand(-5, 5), 1 + ctx.chapterIdx * 0.3, true);
        s.summoned = true;
      }
      e.atk2T = 6;
    }
  } else if (key === 'hunter') {
    const enraged = frac < 0.4;
    if (e.atkT <= 0) {
      fireEnemyBullet(e.x + Math.sin(toP) * 2.6, e.z + Math.cos(toP) * 2.6, toP, enraged ? 52 : 44, e.dmg * 0.9, 1.1, 3.4);
      e.atkT = enraged ? 1.0 : 1.7;
    }
    if (e.atk2T <= 0) {
      for (const off of [-0.16, 0, 0.16]) fireEnemyBullet(e.x, e.z, toP + off, 30, e.dmg * 0.55, 0.9);
      e.atk2T = 5;
    }
    if (e.atkT <= -0.01 && enraged) e.spinSpeed = 1.6;
  } else if (key === 'core') {
    if (frac < 0.66 && e.phase === 1) { e.phase = 2; ctx.bossPhase(2); }
    if (frac < 0.33 && e.phase === 2) { e.phase = 3; ctx.bossPhase(3); }
    if (e.phase === 1) {
      if (e.atkT <= 0) {
        const n = 16;
        for (let k = 0; k < n; k++) fireEnemyBullet(e.x, e.z, e.spiralA + (k / n) * Math.PI * 2, 14, e.dmg * 0.5, 1, 5.5);
        e.spiralA += 0.35;
        e.atkT = 2.6;
      }
    } else if (e.phase === 2) {
      e.spiralA += dt * 2.6;
      if (e.atkT <= 0) {
        for (const off of [0, 2.1, 4.2]) fireEnemyBullet(e.x, e.z, e.spiralA + off, 17, e.dmg * 0.5, 0.95, 5.5);
        e.atkT = 0.14;
      }
      if (e.atk2T <= 0) {
        for (let k = 0; k < 3; k++) {
          const s = spawnShape(pick(['droneE', 'triangle']), e.x + rand(-8, 8), e.z + rand(-8, 8), 1.6, true);
          s.summoned = true;
        }
        e.atk2T = 7;
      }
    } else {
      if (e.atkT <= 0) {
        const n = 22;
        for (let k = 0; k < n; k++) fireEnemyBullet(e.x, e.z, (k / n) * Math.PI * 2 + e.spiralA, 18, e.dmg * 0.55, 1.05, 5.5);
        e.spiralA += 0.22;
        e.atkT = 1.9;
      }
      if (e.atk2T <= 0) { e.telegraph = 0.5; e.atk2T = 4.5; }
    }
  }
}

// ---------- смерть ----------
function killEnemy(idx, ctx) {
  const e = enemies[idx];
  e.dead = true;
  enemies.splice(idx, 1);
  W.scene.remove(e.mesh);
  burst(e.x, e.z, e.def.color, e.isBoss ? 46 : 12, e.isBoss ? 16 : 9, e.size);
  S.boom(e.isBoss);
  dropXp(e.x, e.z, e.xp);
  ctx.onKill(e);
  if (e.isBoss) { boss = null; ctx.onBossDown(e); }
}

export function damageEnemy(e, dmg) {
  if (e.dead) return;
  e.hp -= dmg;
  e.hitFlash = 1;
}

export function clearDynamic() {
  for (const e of enemies) W.scene.remove(e.mesh);
  for (const b of ebullets) W.scene.remove(b.mesh);
  for (const o of orbs) W.scene.remove(o.mesh);
  for (const p of particles) W.scene.remove(p.mesh);
  enemies.length = 0; ebullets.length = 0; orbs.length = 0; particles.length = 0;
  boss = null;
}
