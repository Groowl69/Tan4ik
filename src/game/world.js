// ============================================================
// Мир: сцена Three.js, арена, укрытия, свет, атмосфера
// ============================================================
import * as THREE from 'three';
import { ARENA, rand } from './config.js';

export const W = {
  scene: null, camera: null, renderer: null,
  obstacles: [], // {x, z, hw, hd, mesh}
  dust: null,
  time: 0,
};

function gridTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#1b2334';
  g.fillRect(0, 0, 256, 256);
  g.strokeStyle = '#27324c';
  g.lineWidth = 3;
  g.strokeRect(0, 0, 256, 256);
  g.fillStyle = '#2c3a58';
  g.fillRect(0, 0, 6, 6);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(30, 30);
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function glowTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 2, 32, 32, 30);
  grad.addColorStop(0, inner);
  grad.addColorStop(1, outer);
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

export function initWorld(canvas) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x141b29);
  scene.fog = new THREE.Fog(0x141b29, 70, 210);

  const camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.1, 400);
  camera.position.set(0, 2.6, 0);
  camera.rotation.order = 'YXZ';
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // свет
  const hemi = new THREE.HemisphereLight(0xa8c0e8, 0x2a3244, 1.05);
  scene.add(hemi);
  const dir = new THREE.DirectionalLight(0xfff1d6, 1.15);
  dir.position.set(45, 70, 25);
  dir.castShadow = true;
  dir.shadow.mapSize.set(1024, 1024);
  dir.shadow.camera.left = -90; dir.shadow.camera.right = 90;
  dir.shadow.camera.top = 90; dir.shadow.camera.bottom = -90;
  dir.shadow.camera.far = 200;
  dir.shadow.bias = -0.0008;
  scene.add(dir);
  const fill = new THREE.DirectionalLight(0x7fa8ff, 0.25);
  fill.position.set(-40, 30, -30);
  scene.add(fill);

  // земля
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(ARENA * 2, ARENA * 2),
    new THREE.MeshStandardMaterial({ map: gridTexture(), roughness: 0.95, metalness: 0.05 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // внешняя тёмная плоскость за стеной
  const outer = new THREE.Mesh(
    new THREE.PlaneGeometry(900, 900),
    new THREE.MeshBasicMaterial({ color: 0x0d1220 })
  );
  outer.rotation.x = -Math.PI / 2;
  outer.position.y = -0.05;
  scene.add(outer);

  // стены
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x232c42, roughness: 0.8, metalness: 0.2 });
  const wallH = 7;
  const mkWall = (w, d, x, z) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, wallH, d), wallMat);
    m.position.set(x, wallH / 2, z);
    scene.add(m);
    // светящаяся кромка
    const edge = new THREE.Mesh(
      new THREE.BoxGeometry(w + 0.2, 0.22, d + 0.2),
      new THREE.MeshBasicMaterial({ color: 0x3d5a8a })
    );
    edge.position.set(x, wallH, z);
    scene.add(edge);
  };
  mkWall(ARENA * 2 + 4, 2, 0, -ARENA - 1);
  mkWall(ARENA * 2 + 4, 2, 0, ARENA + 1);
  mkWall(2, ARENA * 2 + 4, -ARENA - 1, 0);
  mkWall(2, ARENA * 2 + 4, ARENA + 1, 0);

  // укрытия
  const obstacleMats = [
    new THREE.MeshStandardMaterial({ color: 0x2b3550, roughness: 0.85, metalness: 0.15 }),
    new THREE.MeshStandardMaterial({ color: 0x313d5c, roughness: 0.85, metalness: 0.15 }),
    new THREE.MeshStandardMaterial({ color: 0x3a4763, roughness: 0.8, metalness: 0.2 }),
  ];
  const placed = [];
  let tries = 0;
  while (placed.length < 26 && tries < 400) {
    tries++;
    const x = rand(-ARENA + 12, ARENA - 12);
    const z = rand(-ARENA + 12, ARENA - 12);
    if (Math.abs(x) < 16 && Math.abs(z) < 16) continue; // чистый центр
    let ok = true;
    for (const p of placed) if ((p.x - x) ** 2 + (p.z - z) ** 2 < 170) { ok = false; break; }
    if (!ok) continue;
    const hw = rand(1.4, 3.4), hd = rand(1.4, 3.4), h = rand(1.6, 4.2);
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(hw * 2, h, hd * 2),
      obstacleMats[placed.length % 3]
    );
    m.position.set(x, h / 2, z);
    m.castShadow = true;
    m.receiveShadow = true;
    scene.add(m);
    // полоса-маркер на верхушке
    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(hw * 2 + 0.08, 0.12, hd * 2 + 0.08),
      new THREE.MeshBasicMaterial({ color: 0x57688f })
    );
    stripe.position.set(x, h + 0.05, z);
    scene.add(stripe);
    placed.push({ x, z, hw, hd, mesh: m });
  }
  W.obstacles = placed;

  // атмосферная пыль
  const dustGeo = new THREE.BufferGeometry();
  const n = 380;
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    pos[i * 3] = rand(-ARENA, ARENA);
    pos[i * 3 + 1] = rand(0.5, 22);
    pos[i * 3 + 2] = rand(-ARENA, ARENA);
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({
    color: 0x9db8e8, size: 0.22, transparent: true, opacity: 0.4,
    depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  scene.add(dust);
  W.dust = dust;

  W.scene = scene;
  W.camera = camera;
  W.renderer = renderer;

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return W;
}

export function renderWorld(dt) {
  W.time += dt;
  if (W.dust) {
    W.dust.rotation.y += dt * 0.008;
    W.dust.position.y = Math.sin(W.time * 0.2) * 0.4;
  }
  W.renderer.render(W.scene, W.camera);
}
