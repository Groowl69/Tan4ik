// ============================================================
// Интерфейс: HUD, экраны, диалоги, выбор класса, миникарта
// ============================================================
import { STATS, MAX_STAT, CHAPTERS, xpNeed } from './config.js';
import { tankSVG } from './tanks.js';
import { toggleMute, isMuted, S, initAudio } from './audio.js';

const $ = (id) => document.getElementById(id);
const el = {};

let handlers = {};
let typeTimer = null;

export function initUI(h) {
  handlers = h;
  const ids = [
    'hud', 'chapter-label', 'wave-label', 'score-val', 'kills-val',
    'boss-wrap', 'boss-name', 'boss-bar-fill', 'boss-hp-text',
    'hp-fill', 'hp-text', 'stamina-fill', 'level-badge', 'class-name',
    'xp-fill', 'level-text', 'stats-panel', 'stat-points', 'stats-rows',
    'minimap', 'crosshair', 'notify-stack', 'vignette', 'hit-flash',
    'boss-warning', 'boss-warning-name',
    'screen-start', 'btn-start',
    'screen-story', 'story-tag', 'story-title', 'story-text', 'btn-story-next',
    'screen-class', 'class-title', 'class-hint', 'class-grid',
    'screen-pause', 'btn-resume', 'btn-restart-pause', 'btn-reclass', 'pause-mute',
    'screen-over', 'over-stats', 'btn-restart',
    'screen-win', 'win-stats', 'btn-freeplay', 'btn-restart-win',
    'btn-mute', 'btn-pause-hud',
  ];
  for (const id of ids) el[id] = $(id);

  buildStatRows();

  el['btn-start'].onclick = () => { initAudio(); S.click(); handlers.start(); };
  el['btn-story-next'].onclick = () => { S.click(); handlers.storyNext(); };
  el['btn-resume'].onclick = () => { S.click(); handlers.resume(); };
  el['btn-restart-pause'].onclick = () => { S.click(); handlers.restart(); };
  el['btn-reclass'].onclick = () => { S.click(); handlers.reclass(); };
  el['btn-restart'].onclick = () => { S.click(); handlers.restart(); };
  el['btn-restart-win'].onclick = () => { S.click(); handlers.restart(); };
  el['btn-freeplay'].onclick = () => { S.click(); handlers.freeplay(); };
  el['btn-mute'].onclick = () => { initAudio(); toggleMute(); syncMute(); S.click(); };
  el['btn-pause-hud'].onclick = () => { S.click(); handlers.pauseToggle(); };
  el['pause-mute'].onclick = () => { initAudio(); toggleMute(); syncMute(); };
  syncMute();
}

function syncMute() {
  const m = isMuted();
  el['btn-mute'].textContent = m ? 'Звук: выкл' : 'Звук: вкл';
  el['pause-mute'].textContent = m ? 'Включить звук' : 'Выключить звук';
}

// ---------- панель статов ----------
function buildStatRows() {
  const box = el['stats-rows'];
  box.innerHTML = '';
  STATS.forEach((s, i) => {
    const row = document.createElement('div');
    row.className = 'stat-row';
    row.innerHTML = `
      <span class="stat-key">${i + 1}</span>
      <span class="stat-name">${s.name}</span>
      <span class="stat-pips">${Array.from({ length: MAX_STAT }, () => '<i></i>').join('')}</span>
      <button class="stat-btn" title="Улучшить">+</button>
    `;
    row.querySelector('.stat-btn').onclick = () => handlers.upgrade(s.key);
    row.querySelector('.stat-row-hit, .stat-name')?.addEventListener?.('click', () => {});
    box.appendChild(row);
  });
}

export function refreshStats(P) {
  const rows = el['stats-rows'].children;
  STATS.forEach((s, i) => {
    const row = rows[i];
    if (!row) return;
    const pips = row.querySelectorAll('.stat-pips i');
    pips.forEach((p, k) => p.classList.toggle('on', k < P.stats[s.key]));
    const btn = row.querySelector('.stat-btn');
    const can = P.statPoints > 0 && P.stats[s.key] < MAX_STAT;
    btn.classList.toggle('ready', can);
    btn.disabled = !can;
  });
  el['stat-points'].textContent = P.statPoints;
  el['stats-panel'].classList.toggle('has-points', P.statPoints > 0);
}

// ---------- HUD ----------
export function updateHUD(P, game) {
  const maxhp = game.maxhp;
  el['hp-fill'].style.width = `${Math.max(0, (P.hp / maxhp) * 100)}%`;
  el['hp-text'].textContent = `${Math.max(0, Math.ceil(P.hp))} / ${maxhp}`;
  el['stamina-fill'].style.width = `${P.stamina}%`;

  const need = xpNeed(P.level);
  el['xp-fill'].style.width = `${Math.min(100, (P.xpIntoLevel / need) * 100)}%`;
  el['level-text'].textContent = `Уровень ${P.level}`;
  el['level-badge'].textContent = P.level;
  el['class-name'].textContent = game.className;

  el['score-val'].textContent = game.score.toLocaleString('ru-RU');
  el['kills-val'].textContent = game.kills;
  el['chapter-label'].textContent = game.chapterLabel;
  el['wave-label'].textContent = game.waveLabel;

  el['hit-flash'].style.opacity = P.hurtT > 0 ? Math.min(1, P.hurtT * 2.4) : 0;
  const lowHp = P.hp / maxhp < 0.3;
  el['vignette'].style.opacity = lowHp ? 0.55 + Math.sin(performance.now() / 180) * 0.2 : Math.min(0.5, P.hurtT);

  refreshStats(P);
}

export function updateBossBar(e) {
  el['boss-wrap'].classList.add('show');
  el['boss-name'].textContent = e.name;
  el['boss-bar-fill'].style.width = `${Math.max(0, (e.hp / e.maxhp) * 100)}%`;
  el['boss-hp-text'].textContent = `${Math.max(0, Math.ceil(e.hp)).toLocaleString('ru-RU')} / ${Math.ceil(e.maxhp).toLocaleString('ru-RU')}`;
}
export function hideBossBar() { el['boss-wrap'].classList.remove('show'); }

export function showBossWarning(name) {
  el['boss-warning-name'].textContent = name;
  el['boss-warning'].classList.add('show');
  setTimeout(() => el['boss-warning'].classList.remove('show'), 2600);
}

// ---------- уведомления ----------
export function notify(msg, type = 'info') {
  const stack = el['notify-stack'];
  const n = document.createElement('div');
  n.className = `notify ${type}`;
  n.textContent = msg;
  stack.appendChild(n);
  while (stack.children.length > 4) stack.removeChild(stack.firstChild);
  setTimeout(() => {
    n.classList.add('out');
    setTimeout(() => n.remove(), 400);
  }, 2600);
}

// ---------- экраны ----------
export function hideAllScreens() {
  ['screen-start', 'screen-story', 'screen-class', 'screen-pause', 'screen-over', 'screen-win'].forEach((id) => el[id].classList.remove('show'));
}
export function showScreen(id) { el[id].classList.add('show'); }
export function showHUD(on) { el['hud'].classList.toggle('hidden', !on); }

// ---------- история ----------
let storyQueue = [];
let storyDone = null;
let currentFull = '';
export function showStory(chapter, onDone) {
  storyQueue = [...chapter.story];
  storyDone = onDone;
  el['story-tag'].textContent = `${chapter.tag} · ${chapter.title}`;
  el['story-title'].textContent = 'Передача из штаба';
  hideAllScreens();
  showScreen('screen-story');
  typeNext();
}
function typeNext() {
  const text = storyQueue.shift();
  currentFull = text;
  const target = el['story-text'];
  clearInterval(typeTimer);
  target.textContent = '';
  let i = 0;
  typeTimer = setInterval(() => {
    i++;
    target.textContent = text.slice(0, i);
    if (i >= text.length) {
      clearInterval(typeTimer);
      typeTimer = null;
      el['btn-story-next'].textContent = storyQueue.length ? 'Дальше →' : 'В бой';
    }
  }, 16);
}
export function storyNext() {
  if (typeTimer) {
    // текст ещё печатается — допечатать мгновенно
    clearInterval(typeTimer);
    typeTimer = null;
    el['story-text'].textContent = currentFull;
    el['btn-story-next'].textContent = storyQueue.length ? 'Дальше →' : 'В бой';
    return;
  }
  if (storyQueue.length > 0) {
    typeNext();
    return;
  }
  hideAllScreens();
  if (storyDone) storyDone();
}

// ---------- выбор класса ----------
export function showClassPicker(options, title, hint, onPick) {
  el['class-title'].textContent = title;
  el['class-hint'].textContent = hint;
  const grid = el['class-grid'];
  grid.innerHTML = '';
  options.forEach((cls) => {
    const card = document.createElement('button');
    card.className = 'class-card';
    card.innerHTML = `
      <span class="class-tier">Тир ${cls.tier}</span>
      <span class="class-preview">${tankSVG(cls)}</span>
      <span class="class-cname">${cls.name}</span>
      <span class="class-cdesc">${cls.desc}</span>
    `;
    card.onclick = () => { S.evolve(); onPick(cls.id); };
    grid.appendChild(card);
  });
  hideAllScreens();
  showScreen('screen-class');
}

// ---------- итоговые экраны ----------
export function showGameOver(stats) {
  el['over-stats'].innerHTML = statsHTML(stats);
  hideAllScreens();
  showScreen('screen-over');
}
export function showWin(stats) {
  el['win-stats'].innerHTML = statsHTML(stats);
  hideAllScreens();
  showScreen('screen-win');
}
function statsHTML(s) {
  return `
    <div class="end-row"><span>Очки</span><b>${s.score.toLocaleString('ru-RU')}</b></div>
    <div class="end-row"><span>Уровень</span><b>${s.level}</b></div>
    <div class="end-row"><span>Уничтожено целей</span><b>${s.kills}</b></div>
    <div class="end-row"><span>Время в бою</span><b>${s.time}</b></div>
    <div class="end-row"><span>Рекорд</span><b>${s.best.toLocaleString('ru-RU')}</b></div>
  `;
}

// ---------- миникарта ----------
export function drawMinimap(state) {
  const cv = el['minimap'];
  if (!cv) return;
  const g = cv.getContext('2d');
  const S_ = cv.width;
  const half = 118;
  const k = S_ / (half * 2);
  g.clearRect(0, 0, S_, S_);
  g.fillStyle = 'rgba(13,20,33,0.82)';
  g.fillRect(0, 0, S_, S_);
  g.strokeStyle = 'rgba(87,104,143,0.6)';
  g.strokeRect(1, 1, S_ - 2, S_ - 2);
  const map = (x, z) => [S_ / 2 + x * k, S_ / 2 + z * k];
  // укрытия
  g.fillStyle = 'rgba(87,104,143,0.45)';
  for (const o of state.obstacles) {
    const [x, z] = map(o.x, o.z);
    g.fillRect(x - o.hw * k, z - o.hd * k, o.hw * 2 * k, o.hd * 2 * k);
  }
  // враги
  for (const e of state.enemies) {
    const [x, z] = map(e.x, e.z);
    g.fillStyle = e.isBoss ? '#ff4757' : '#ffb054';
    const r = e.isBoss ? 4 : 2;
    g.fillRect(x - r / 2, z - r / 2, r, r);
  }
  // игрок
  const [px, pz] = map(state.px, state.pz);
  g.save();
  g.translate(px, pz);
  g.rotate(-state.yaw + Math.PI);
  g.fillStyle = '#4dd0ff';
  g.beginPath();
  g.moveTo(0, -5); g.lineTo(3.6, 4); g.lineTo(-3.6, 4);
  g.closePath(); g.fill();
  g.restore();
}
