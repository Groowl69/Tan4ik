// ============================================================
// Главный модуль: цикл, состояния, кампания, коллизии, ввод
// ============================================================
import { CHAPTERS, BOSSES, clamp, rand, pick, tier2Classes, getChildren, getClassById } from './config.js';
import { W, initWorld, renderWorld } from './world.js';
import { initPlayer, updatePlayer, damagePlayer, gainXp, upgradeStat, resetPlayer, getPbullets, getMaxHp, getBodyDmg, applyClass } from './player.js';
import {
  enemies, ebullets, orbs, boss,
  updateEnemies, updateEnemyBullets, updateOrbs, updateParticles,
  spawnAtEdge, spawnShape, spawnBoss, damageEnemy, dropXp, burst, clearDynamic,
} from './entities.js';
import { initUI, updateHUD, updateBossBar, hideBossBar, showBossWarning, notify, showScreen, hideAllScreens, showHUD, showStory, storyNext, showClassPicker, showGameOver, showWin, drawMinimap } from './ui.js';
import { S, initAudio } from './audio.js';

let started = false;

function lockPointer() {
  try {
    const p = W.renderer.domElement.requestPointerLock();
    if (p && p.catch) p.catch(() => { /* работает фолбэк: прицел зажатой мышью */ });
  } catch (err) { /* фолбэк: прицел зажатой мышью */ }
}

const G = {
  state: 'menu', // menu | story | playing | paused | over | win | free
  chapterIdx: 0, waveIdx: 0,
  spawnQueue: [], spawnT: 0,
  score: 0, kills: 0, playTime: 0,
  shake: 0, menuT: 0, pendingBoss: null, transT: 0,
  freeT: 0, endlessLvl: 0,
};

const input = {
  keys: {}, yaw: 0, pitch: -0.06,
  firing: false, placing: false, boost: false,
  mouseHeld: false, mx: 0, mz: 0,
};

// ---------- ввод ----------
function bindInput(canvas) {
  window.addEventListener('keydown', (e) => {
    input.keys[e.code] = true;
    if (e.code.startsWith('Digit')) {
      const n = parseInt(e.code.slice(5), 10);
      if (n >= 1 && n <= 7) tryUpgrade(n - 1);
    }
    if (e.code === 'KeyP' || e.code === 'Escape') {
      if (G.state === 'playing' || G.state === 'free') pauseGame();
      else if (G.state === 'paused') resumeGame();
    }
    if (e.code === 'Space') e.preventDefault();
  });
  window.addEventListener('keyup', (e) => { input.keys[e.code] = false; });

  canvas.addEventListener('mousedown', (e) => {
    initAudio();
    if (G.state !== 'playing' && G.state !== 'free') return;
    if (e.button === 0) {
      input.firing = true;
      input.mouseHeld = true;
      if (!document.pointerLockElement) lockPointer();
    }
    if (e.button === 2) input.placing = true;
  });
  window.addEventListener('mouseup', (e) => {
    if (e.button === 0) { input.firing = false; input.mouseHeld = false; }
    if (e.button === 2) input.placing = false;
  });
  window.addEventListener('contextmenu', (e) => e.preventDefault());

  window.addEventListener('mousemove', (e) => {
    const locked = document.pointerLockElement === canvas;
    if (locked || input.mouseHeld) {
      input.yaw -= (e.movementX || 0) * 0.0022;
      input.pitch = clamp(input.pitch - (e.movementY || 0) * 0.0022, -0.5, 0.42);
    }
  });

  document.addEventListener('pointerlockchange', () => {
    if (!document.pointerLockElement && (G.state === 'playing' || G.state === 'free')) {
      pauseGame();
    }
  });

  input.boostRef = () => input.keys['ShiftLeft'] || input.keys['ShiftRight'];
}

function tryUpgrade(idx) {
  const keys = ['regen', 'maxhp', 'body', 'bspeed', 'bdmg', 'reload', 'move'];
  upgradeStat(keys[idx]);
}

// ---------- состояния ----------
function pauseGame() {
  if (G.state !== 'playing' && G.state !== 'free') return;
  G.prevState = G.state;
  G.state = 'paused';
  if (document.pointerLockElement) document.exitPointerLock();
  showScreen('screen-pause');
}
function resumeGame() {
  if (G.state !== 'paused') return;
  hideAllScreens();
  G.state = G.prevState || 'playing';
  lockPointer();
}

function startCampaign() {
  clearDynamic();
  resetPlayer();
  G.chapterIdx = 0; G.waveIdx = 0;
  G.score = 0; G.kills = 0; G.playTime = 0;
  G.pendingBoss = null; G.bossDown = false; G.transT = 0;
  G.freeT = 3; G.endlessLvl = 0;
  input.yaw = 0; input.pitch = -0.06;
  hideAllScreens();
  showHUD(true);
  G.state = 'story';
  showStory(CHAPTERS[0], () => beginChapter());
}

function beginChapter() {
  G.waveIdx = 0;
  G.state = 'playing';
  notify(`${CHAPTERS[G.chapterIdx].tag}: ${CHAPTERS[G.chapterIdx].title}`, 'chapter');
  startWave();
}

function startWave() {
  const ch = CHAPTERS[G.chapterIdx];
  const wave = ch.waves[G.waveIdx];
  G.spawnQueue = [];
  for (const type in wave) for (let i = 0; i < wave[type]; i++) G.spawnQueue.push(type);
  // перемешать
  for (let i = G.spawnQueue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [G.spawnQueue[i], G.spawnQueue[j]] = [G.spawnQueue[j], G.spawnQueue[i]];
  }
  G.spawnT = 0.4;
}

function chapterProgression() {
  const ch = CHAPTERS[G.chapterIdx];
  if (G.pendingBoss) return;
  if (G.spawnQueue.length > 0 || enemies.length > 0 || boss) return;

  if (G.waveIdx < ch.waves.length - 1) {
    G.waveIdx++;
    notify(`Волна ${G.waveIdx + 1} из ${ch.waves.length}`, 'wave');
    startWave();
  } else {
    // босс
    const key = ch.bossKey;
    G.pendingBoss = key;
    showBossWarning(BOSSES[key].name);
    S.alarm();
    G.transT = 1.6;
  }
}

// ---------- события боя ----------
const ctx = {
  get px() { return playerRef.x; },
  get pz() { return playerRef.z; },
  get player() { return { radius: playerRef.radius }; },
  get chapterIdx() { return G.chapterIdx; },
  contactDamage(e, dt) {
    if (G.state !== 'playing' && G.state !== 'free') return;
    damagePlayer(e.dmg * dt * 1.4, { shake: addShake });
    damageEnemy(e, getBodyDmg() * dt * 1.6);
  },
  onKill(e) {
    G.kills++;
    if (e.isBoss) {}
  },
  onBossDown() {
    hideBossBar();
    notify('Босс уничтожен. Сектор зачищен!', 'good');
    G.transT = 1.6;
    G.bossDown = true;
  },
  onDeath() {
    G.state = 'over';
    S.over();
    if (document.pointerLockElement) document.exitPointerLock();
    saveBest();
    showGameOver(buildStats());
  },
  onLevelUp(level) {
    notify(`Уровень ${level}! +1 очко системы`, 'level');
    if (level === 15) {
      notify('Доступна эволюция танка — откройте меню (Esc)', 'good');
      G.tier2Ready = true;
    }
    if (level === 30 && getClassById(playerRef.classId).tier === 2) {
      notify('Доступна эволюция 3-го тира!', 'good');
      G.tier3Ready = true;
    }
  },
  bossPhase(n) {
    notify(`Ядро переходит в фазу ${n}!`, 'bad');
    S.alarm();
    addShake(0.8);
  },
};
let playerRef = null;

function addShake(v) { G.shake = Math.min(1.2, G.shake + v); }

function loadBest() {
  try { return +(localStorage.getItem('steel-best') || 0); } catch (e) { return 0; }
}
function saveBest() {
  try { if (G.score > loadBest()) localStorage.setItem('steel-best', String(G.score)); } catch (e) { /* приватный режим */ }
}
function buildStats() {
  const best = Math.max(G.score, loadBest());
  const m = Math.floor(G.playTime / 60), s = Math.floor(G.playTime % 60);
  return { score: G.score, level: playerRef.level, kills: G.kills, time: `${m}:${s.toString().padStart(2, '0')}`, best };
}

// ---------- коллизии пуль игрока ----------
function collidePlayerBullets() {
  const pbullets = getPbullets();
  for (let i = pbullets.length - 1; i >= 0; i--) {
    const b = pbullets[i];
    let removed = false;
    for (const e of enemies) {
      if (e.dead) continue;
      const dx = b.x - e.x, dz = b.z - e.z;
      const rr = b.r + e.radius;
      if (dx * dx + dz * dz < rr * rr) {
        damageEnemy(e, b.dmg);
        S.hit();
        burst(b.x, b.z, 0xbfe8ff, 3, 4, 1);
        addShake(0.05);
        if (b.pierce > 0) { b.pierce--; b.dmg *= 0.75; }
        else {
          removed = true;
          W.scene.remove(b.mesh);
          pbullets.splice(i, 1);
        }
        break;
      }
    }
    if (removed) continue;
  }
}

// коллизия мин и врагов
function collideTraps() {
  for (const t of playerRef.traps) {
    for (const e of enemies) {
      if (e.dead) continue;
      const dx = t.x - e.x, dz = t.z - e.z;
      const rr = t.r + e.radius;
      if (dx * dx + dz * dz < rr * rr) {
        damageEnemy(e, t.dmg * 0.016 * 2.4);
        t.hp -= (e.isBoss ? 26 : 8) * 0.016 * 10;
        t.flash = 1;
      }
    }
  }
}

// пули врагов vs игрок и мины
function enemyBulletHit(b) {
  const p = playerRef;
  const dx = b.x - p.x, dz = b.z - p.z;
  if (dx * dx + dz * dz < (b.r + p.radius) ** 2) {
    damagePlayer(b.dmg, { shake: addShake });
    return true;
  }
  for (const t of p.traps) {
    const tx = b.x - t.x, tz = b.z - t.z;
    if (tx * tx + tz * tz < (b.r + t.r) ** 2) {
      t.hp -= b.dmg;
      t.flash = 1;
      return true;
    }
  }
  return false;
}

// ---------- перерождение класса ----------
function offerClassChoice(forceTier = null) {
  const lvl = playerRef.level;
  const cur = getClassById(playerRef.classId);
  let options, title, hint;
  if (forceTier === 3 || (cur.tier === 2 && lvl >= 30)) {
    options = getChildren(cur.id);
    if (!options.length) { options = tier2Classes(); }
    title = 'Эволюция · Тир 3';
    hint = 'Выберите финальную форму машины';
  } else if (lvl >= 15) {
    options = tier2Classes();
    title = 'Эволюция · Тир 2';
    hint = lvl >= 30 ? 'Выберите ветку развития (затем — тир 3)' : 'Выберите ветку развития';
  } else {
    notify('Эволюция доступна с 15 уровня', 'bad');
    return;
  }
  const wasState = G.state;
  G.state = 'paused';
  if (document.pointerLockElement) document.exitPointerLock();
  showClassPicker(options, title, hint, (id) => {
    playerRef.applyClassFn(id);
    hideAllScreens();
    const chosen = getClassById(id);
    notify(`Класс: ${chosen.name}`, 'good');
    if (lvl >= 30 && chosen.tier === 2 && getChildren(id).length) {
      offerClassChoice(3);
    } else {
      G.state = wasState === 'paused' ? 'playing' : wasState;
      if (G.state === 'playing' || G.state === 'free') lockPointer();
    }
  });
}

// ---------- главный цикл ----------
let lastT = 0;
function frame(t) {
  const dt = clamp((t - lastT) / 1000, 0.001, 0.05);
  lastT = t;

  if (G.state === 'menu') {
    G.menuT += dt;
    updateEnemies(dt, { ...ctx, px: 99999, pz: 99999, contactDamage: () => {}, onKill: () => {}, onBossDown: () => {}, bossPhase: () => {} });
    updateParticles(dt);
    updateOrbs(dt, 99999, 99999, () => {});
    const r = 17;
    W.camera.position.set(Math.sin(G.menuT * 0.22) * r, 8.5, Math.cos(G.menuT * 0.22) * r);
    W.camera.lookAt(0, 1.2, 0);
    if (enemies.length < 12 && Math.random() < dt * 0.8) {
      spawnAtEdge(pick(['square', 'square', 'triangle', 'pentagon']), 1);
    }
  } else if (G.state === 'playing' || G.state === 'free') {
    G.playTime += dt;
    input.boost = input.boostRef();

    updatePlayer(dt, input, ctx);
    updateEnemies(dt, ctx);
    updateEnemyBullets(dt, enemyBulletHit);
    collidePlayerBullets();
    collideTraps();
    updateOrbs(dt, playerRef.x, playerRef.z, (val) => {
      G.score += Math.round(val);
      gainXp(Math.round(val), ctx);
    });
    updateParticles(dt);

    // спавн волн
    if (G.state === 'playing') {
      G.spawnT -= dt;
      if (G.spawnQueue.length && G.spawnT <= 0 && enemies.filter((e) => !e.isBoss).length < 16) {
        spawnAtEdge(G.spawnQueue.pop(), 1 + G.chapterIdx * 0.3);
        G.spawnT = 0.7;
      }
      chapterProgression();
      // отложенный спавн босса / переход дальше
      if (G.pendingBoss) {
        G.transT -= dt;
        if (G.transT <= 0) {
          spawnBoss(G.pendingBoss, G.chapterIdx);
          notify(`${BOSSES[G.pendingBoss].name} вышел на арену`, 'bad');
          G.pendingBoss = null;
        }
      } else if (G.bossDown) {
        G.transT -= dt;
        if (G.transT <= 0) {
          G.bossDown = false;
          if (G.chapterIdx >= CHAPTERS.length - 1) {
            // победа
            G.state = 'win';
            S.win();
            saveBest();
            if (document.pointerLockElement) document.exitPointerLock();
            showWin(buildStats());
          } else {
            G.chapterIdx++;
            G.state = 'story';
            showStory(CHAPTERS[G.chapterIdx], () => beginChapter());
          }
        }
      }
    } else {
      // свободная игра
      G.freeT -= dt;
      if (G.freeT <= 0 && enemies.length < 18) {
        G.endlessLvl += 0.12;
        const pool = ['square', 'triangle', 'diamond', 'pentagon', 'hexagon', 'droneE', 'tankE'];
        const n = Math.min(5, 1 + Math.floor(G.endlessLvl / 2));
        for (let i = 0; i < n; i++) spawnAtEdge(pick(pool), 1 + G.endlessLvl * 0.25);
        G.freeT = 5;
      }
    }

    // HUD
    if (boss) updateBossBar(boss);
    updateHUD(playerRef, hudState());
    drawMinimap({ px: playerRef.x, pz: playerRef.z, yaw: playerRef.yaw, enemies, obstacles: W.obstacles });

    // тряска камеры
    if (G.shake > 0.001) {
      G.shake *= Math.pow(0.0018, dt);
      W.camera.position.x += rand(-1, 1) * G.shake * 0.22;
      W.camera.position.y += rand(-1, 1) * G.shake * 0.16;
      W.camera.rotation.z = rand(-1, 1) * G.shake * 0.02;
    } else {
      W.camera.rotation.z = 0;
    }
  } else if (G.state === 'story') {
    updateParticles(dt);
    // лёгкое дыхание камеры
    W.camera.position.set(playerRef.x, 2.5 + Math.sin(performance.now() / 900) * 0.05, playerRef.z);
    W.camera.rotation.set(input.pitch, input.yaw + Math.PI, 0);
  }

  renderWorld(dt);
  requestAnimationFrame(frame);
}

function hudState() {
  const ch = CHAPTERS[G.chapterIdx];
  let waveLabel = 'Свободная игра';
  let chapterLabel = 'Полигон открыт';
  if (G.state !== 'free') {
    chapterLabel = `${ch.tag}: ${ch.title}`;
    waveLabel = boss ? 'БОСС' : G.pendingBoss ? 'Приближение босса…' : `Волна ${G.waveIdx + 1} / ${ch.waves.length}`;
  }
  return {
    maxhp: getMaxHp(),
    className: getClassById(playerRef.classId).name,
    score: G.score, kills: G.kills,
    chapterLabel, waveLabel,
  };
}

// ---------- старт ----------
export function startGame(canvas) {
  if (started) return;
  started = true;

  initWorld(canvas);
  playerRef = initPlayer();
  playerRef.applyClassFn = (id) => applyClass(id);
  bindInput(canvas);

  initUI({
    start: startCampaign,
    storyNext: () => storyNext(),
    resume: resumeGame,
    restart: () => { hideAllScreens(); startCampaign(); },
    reclass: () => offerClassChoice(),
    freeplay: () => {
      hideAllScreens();
      showHUD(true);
      G.state = 'free';
      G.endlessLvl = 0;
      notify('Свободная игра: волны без конца', 'chapter');
      lockPointer();
    },
    upgrade: (key) => { upgradeStat(key); },
    pauseToggle: () => { if (G.state === 'paused') resumeGame(); else pauseGame(); },
  });

  // режим меню: танк в центре, фигуры бродят
  playerRef.x = 0; playerRef.z = 0;
  playerRef.mesh.position.set(0, 0, 0);
  showHUD(false);

  lastT = performance.now();
  requestAnimationFrame(frame);
}
