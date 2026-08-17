// ============================================================
// Синтезаторный звук (WebAudio, без внешних файлов)
// ============================================================
let ctx = null;
let master = null;
let muted = false;
let lastEshoot = -1;

export function initAudio() {
  if (!ctx) {
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain();
      master.gain.value = 0.32;
      master.connect(ctx.destination);
    } catch (e) { ctx = null; }
  }
  if (ctx && ctx.state === 'suspended') ctx.resume();
}

export function toggleMute() {
  muted = !muted;
  if (master) master.gain.value = muted ? 0 : 0.32;
  return muted;
}
export const isMuted = () => muted;

function tone(freq, dur, type = 'square', vol = 0.5, slideTo = null, delay = 0) {
  if (!ctx || muted) return;
  const t0 = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t0 + dur);
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g).connect(master);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

function noise(dur, vol = 0.4, freq = 1200, delay = 0) {
  if (!ctx || muted) return;
  const t0 = ctx.currentTime + delay;
  const len = Math.max(1, Math.floor(ctx.sampleRate * dur));
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const f = ctx.createBiquadFilter();
  f.type = 'lowpass';
  f.frequency.value = freq;
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  src.connect(f).connect(g).connect(master);
  src.start(t0);
}

// ---- игровые события ----
export const S = {
  // pitch: 0 = огромный снаряд, 1 = обычный
  shoot(pitch = 0.5) {
    const f = 140 + pitch * 480;
    tone(f, 0.07 + (1 - pitch) * 0.08, 'square', 0.16, f * 0.5);
    if (pitch < 0.25) noise(0.18, 0.3, 500);
  },
  eshoot() {
    const now = ctx ? ctx.currentTime : 0;
    if (now - lastEshoot < 0.045) return;
    lastEshoot = now;
    tone(300, 0.08, 'sawtooth', 0.08, 150);
  },
  hit() { noise(0.05, 0.18, 2400); tone(520, 0.04, 'triangle', 0.1, 300); },
  boom(big = false) {
    noise(big ? 0.5 : 0.22, big ? 0.5 : 0.3, big ? 420 : 900);
    tone(big ? 70 : 110, big ? 0.5 : 0.25, 'sine', 0.4, 30);
  },
  xp() { tone(880, 0.07, 'sine', 0.12, 1320); },
  level() {
    [440, 554, 659, 880].forEach((f, i) => tone(f, 0.12, 'square', 0.14, null, i * 0.07));
  },
  alarm() {
    tone(392, 0.22, 'sawtooth', 0.2, 370);
    tone(311, 0.3, 'sawtooth', 0.2, 290, 0.24);
    tone(392, 0.22, 'sawtooth', 0.2, 370, 0.5);
  },
  hurt() { tone(180, 0.14, 'sawtooth', 0.22, 90); noise(0.1, 0.15, 700); },
  click() { tone(640, 0.05, 'square', 0.1, 480); },
  place() { tone(220, 0.09, 'triangle', 0.14, 160); },
  dash() { noise(0.16, 0.2, 1600); tone(300, 0.14, 'sine', 0.12, 700); },
  evolve() {
    [262, 330, 392, 523, 659].forEach((f, i) => tone(f, 0.16, 'triangle', 0.16, null, i * 0.09));
    noise(0.4, 0.2, 1500, 0.3);
  },
  win() {
    [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, 0.22, 'square', 0.15, null, i * 0.14));
  },
  over() {
    [330, 262, 208, 156].forEach((f, i) => tone(f, 0.3, 'sawtooth', 0.16, null, i * 0.18));
  },
};
