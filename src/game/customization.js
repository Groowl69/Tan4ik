// Косметические настройки танка. Не влияют на боевые параметры.
export const BODY_STYLES = [
  { id: 'rectangle', name: 'Прямоугольник' },
  { id: 'cylinder', name: 'Цилиндр' },
  { id: 'triangle', name: 'Треугольник' },
  { id: 'hexagon', name: 'Шестиугольник' },
  { id: 'octagon', name: 'Восьмиугольник' },
  { id: 'ring', name: 'Кольцо', unlock: 'campaign' },
];
export const BARREL_STYLES = [
  { id: 'classic', name: 'Классический' },
  { id: 'short', name: 'Фугасный' },
  { id: 'broken', name: 'Сломанный' },
  { id: 'alpha', name: 'Альфа' },
  { id: 'beta', name: 'Бета' },
  { id: 'gamma', name: 'Гамма', unlock: 'campaign' },
];
export const PAINTS = [
  { id: 'black', name: 'Чёрный', color: 0x20232a },
  { id: 'brown', name: 'Коричневый', color: 0x79502f },
  { id: 'yellow', name: 'Жёлтый', color: 0xf2c230 },
  { id: 'green', name: 'Зелёный', color: 0x31864a },
  { id: 'blue', name: 'Синий', color: 0x2879d0 },
  { id: 'purple', name: 'Фиолетовый', color: 0x884fc4 },
  { id: 'redblue', name: 'Красный → синий', color: 0x9c4b9d, gradient: [0xe43b43,0x315bd8] },
  { id: 'yellowgreen', name: 'Жёлтый → зелёный', color: 0x9eae35, gradient: [0xf2d43b,0x31965b] },
  { id: 'gray', name: 'Серый', color: 0x9299a3, unlock: 'campaign' },
];
const DEFAULT = { body: 'rectangle', barrel: 'classic', paint: 'blue' };
export function campaignComplete() {
  try { return localStorage.getItem('steel-campaign-complete') === '1'; } catch { return false; }
}
export function getCustomization() {
  try {
    const saved = JSON.parse(localStorage.getItem('steel-customization') || '{}');
    const unlocked = campaignComplete();
    return {
      body: BODY_STYLES.some(x => x.id === saved.body && (!x.unlock || unlocked)) ? saved.body : DEFAULT.body,
      barrel: BARREL_STYLES.some(x => x.id === saved.barrel && (!x.unlock || unlocked)) ? saved.barrel : DEFAULT.barrel,
      paint: PAINTS.some(x => x.id === saved.paint && (!x.unlock || unlocked)) ? saved.paint : DEFAULT.paint,
    };
  } catch { return { ...DEFAULT }; }
}
export function saveCustomization(value) {
  const unlocked = campaignComplete();
  const valid = (items, id, fallback) => items.some(x => x.id === id && (!x.unlock || unlocked)) ? id : fallback;
  const next = {
    body: valid(BODY_STYLES, value.body, DEFAULT.body),
    barrel: valid(BARREL_STYLES, value.barrel, DEFAULT.barrel),
    paint: valid(PAINTS, value.paint, DEFAULT.paint),
  };
  try { localStorage.setItem('steel-customization', JSON.stringify(next)); } catch {}
  return next;
}
export function getPaint(id) { return PAINTS.find(x => x.id === id) || PAINTS[4]; }
