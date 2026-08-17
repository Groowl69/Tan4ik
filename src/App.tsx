import { useEffect, useRef } from "react";
import { startGame } from "./game/game.js";

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) startGame(canvasRef.current);
  }, []);

  return (
    <div id="app">
      <canvas ref={canvasRef} id="game-canvas" />

      {/* ======= HUD ======= */}
      <div id="hud" className="hidden">
        <div id="crosshair">
          <span className="ch-dot" />
          <span className="ch-t" /><span className="ch-b" /><span className="ch-l" /><span className="ch-r" />
        </div>

        <div id="hud-tl" className="hud-block">
          <div id="chapter-label">—</div>
          <div id="wave-label">—</div>
          <div className="hud-metrics">
            <span className="metric"><b id="score-val">0</b> очков</span>
            <span className="metric"><b id="kills-val">0</b> целей</span>
          </div>
        </div>

        <div id="hud-tr" className="hud-block">
          <button id="btn-mute" className="hud-btn">Звук: вкл</button>
          <button id="btn-pause-hud" className="hud-btn">Пауза [Esc]</button>
        </div>

        <div id="boss-wrap">
          <div id="boss-name">—</div>
          <div id="boss-bar"><div id="boss-bar-fill" /></div>
          <div id="boss-hp-text">—</div>
        </div>

        <div id="boss-warning">
          <span className="bw-sub">внимание</span>
          <span id="boss-warning-name">БОСС</span>
          <span className="bw-sub">обнаружен на арене</span>
        </div>

        <div id="stats-panel" className="hud-block">
          <div className="sp-head">
            <span className="sp-title">Системы машины</span>
            <span className="sp-points">Очки: <b id="stat-points">0</b></span>
          </div>
          <div id="stats-rows" />
        </div>

        <div id="minimap-wrap" className="hud-block">
          <canvas id="minimap" width="150" height="150" />
        </div>

        <div id="hud-bottom">
          <div id="bl-cluster" style={{ marginLeft: '40px' }}>
            <div id="level-badge">1</div>
            <div id="bl-bars">
              <div id="hp-bar"><div id="hp-fill" /><span id="hp-text">100 / 100</span></div>
              <div id="stamina-bar"><div id="stamina-fill" /></div>
              <div id="class-name">Базовый танк</div>
            </div>
          </div>
          <div id="xp-bar"><div id="xp-fill" /><span id="level-text">Уровень 1</span></div>
        </div>

        <div id="notify-stack" />
      </div>

      <div id="hit-flash" />
      <div id="vignette" />

      {/* ======= Стартовый экран ======= */}
      <div id="screen-start" className="screen show">
        <div className="start-grid">
          <div className="start-main">
            <div className="start-tag">// PvE-кампания · одиночный режим</div>
            <h1 className="start-title">СТАЛЬНОЙ<br /><span>ПОЛИГОН</span></h1>
            <p className="start-lore">
              Учебный полигон «ГЕНЕЗИС» вышел из-под контроля: мишени эволюционируют,
              машины прошлых кадетов перепрошиты, а в центре арены бьётся Ядро.
              Сядь в танк, прокачай его до финальной эволюции и зачисти все шесть секторов.
            </p>
            <div className="start-facts">
              <span><b>6</b> секторов кампании</span>
              <span><b>6</b> боссов</span>
              <span><b>10</b> веток развития</span>
              <span><b>30</b> эволюций танка</span>
            </div>
            <button id="btn-start" className="btn-primary">Начать зачистку</button>
            <div className="start-hint">Клик по арене захватывает мышь · Esc — пауза</div>
          </div>
          <div className="start-side">
            <div className="side-panel">
              <div className="side-head">Боевой устав</div>
              <div className="ctl"><kbd>W A S D</kbd><span>движение</span></div>
              <div className="ctl"><kbd>Мышь</kbd><span>наведение · ЛКМ — огонь</span></div>
              <div className="ctl"><kbd>Shift</kbd><span>форсаж (тратит энергию)</span></div>
              <div className="ctl"><kbd>ПКМ</kbd><span>мины (для Инженера)</span></div>
              <div className="ctl"><kbd>1–7</kbd><span>прокачка систем</span></div>
              <div className="ctl"><kbd>Esc / P</kbd><span>пауза и эволюция</span></div>
            </div>
            <div className="side-panel">
              <div className="side-head">Досье на цели</div>
              <div className="foe"><i style={{ background: "#ffd166" }} /><span>Квадрат — пушечное мясо</span></div>
              <div className="foe"><i style={{ background: "#ff5d5d" }} /><span>Треугольник — таранит</span></div>
              <div className="foe"><i style={{ background: "#ff9f43" }} /><span>Ромб — стреляет</span></div>
              <div className="foe"><i style={{ background: "#6f8bff" }} /><span>Пентагон — тяжёлая броня</span></div>
              <div className="foe"><i style={{ background: "#b06bff" }} /><span>Гексагон — ходячий склад XP</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* ======= История ======= */}
      <div id="screen-story" className="screen">
        <div className="story-card">
          <div id="story-tag">Глава</div>
          <div id="story-title">Передача из штаба</div>
          <p id="story-text" />
          <button id="btn-story-next" className="btn-primary">Дальше →</button>
        </div>
      </div>

      {/* ======= Выбор класса ======= */}
      <div id="screen-class" className="screen">
        <div className="class-head">
          <h2 id="class-title">Эволюция</h2>
          <p id="class-hint">Выберите ветку развития</p>
        </div>
        <div id="class-grid" />
      </div>

      {/* ======= Пауза ======= */}
      <div id="screen-pause" className="screen">
        <div className="pause-card">
          <h2 className="pause-title">Пауза</h2>
          <p className="pause-sub">Машина стоит, реактор гудит</p>
          <button id="btn-resume" className="btn-primary">Вернуться в бой</button>
          <button id="btn-settings-pause" className="btn-ghost">Настройки</button>
          <button id="btn-reclass" className="btn-ghost">Эволюция танка</button>
          <button id="btn-exit-menu" className="btn-ghost danger">Выйти в меню</button>
          <button id="pause-mute" className="btn-ghost">Выключить звук</button>
          <button id="btn-restart-pause" className="btn-ghost danger">Начать заново</button>
        </div>
      </div>

      {/* ======= Настройки ======= */}
      <div id="screen-settings" className="screen">
        <div className="settings-card">
          <h2 className="settings-title">Настройки</h2>
          <div className="settings-row">
            <label htmlFor="settings-music">Громкость музыки</label>
            <input type="range" id="settings-music" min="0" max="1" step="0.05" defaultValue="0.5" />
          </div>
          <div className="settings-row">
            <label htmlFor="settings-sfx">Громкость эффектов</label>
            <input type="range" id="settings-sfx" min="0" max="1" step="0.05" defaultValue="0.7" />
          </div>
          <div className="settings-row">
            <label htmlFor="settings-sens">Чувствительность камеры</label>
            <input type="range" id="settings-sens" min="0.001" max="0.01" step="0.0005" defaultValue="0.0022" />
          </div>
          <div className="settings-actions">
            <button id="settings-save" className="btn-primary">Сохранить</button>
            <button id="settings-close" className="btn-ghost">Закрыть</button>
          </div>
        </div>
      </div>

      {/* ======= Поражение ======= */}
      <div id="screen-over" className="screen">
        <div className="end-card over">
          <div className="end-kicker">// сигнал потерян</div>
          <h2 className="end-title">МАШИНА УНИЧТОЖЕНА</h2>
          <p className="end-sub">«ГЕНЕЗИС» пока сильнее. Штаб готовит новую машину.</p>
          <div id="over-stats" className="end-stats" />
          <button id="btn-restart" className="btn-primary">В бой снова</button>
        </div>
      </div>

      {/* ======= Победа ======= */}
      <div id="screen-win" className="screen">
        <div className="end-card win">
          <div className="end-kicker">// передача из штаба</div>
          <h2 className="end-title">ЯДРО ПАЛО</h2>
          <p className="end-sub">
            Полигон снова учебный. Каких-то шесть секторов, один кадет — и груда
            переплавленного железа. Отличная работа.
          </p>
          <div id="win-stats" className="end-stats" />
          <div className="end-btns">
            <button id="btn-freeplay" className="btn-primary">Свободная игра</button>
            <button id="btn-restart-win" className="btn-ghost">Новая кампания</button>
          </div>
        </div>
      </div>
    </div>
  );
}
