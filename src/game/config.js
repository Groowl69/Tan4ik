// ============================================================
// «СТАЛЬНОЙ ПОЛИГОН» — конфиг: классы танков, статы, кампания
// ============================================================

export const ARENA = 118; // полуразмер арены
export const MAX_LEVEL = 45;
export const MAX_STAT = 8;

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const rand = (a, b) => a + Math.random() * (b - a);
export const randInt = (a, b) => Math.floor(rand(a, b + 1));
export const dist2 = (ax, az, bx, bz) => {
  const dx = ax - bx, dz = az - bz;
  return dx * dx + dz * dz;
};
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// XP, нужный для перехода с уровня lvl на lvl+1
export function xpNeed(lvl) {
  return Math.floor(12 * Math.pow(lvl, 1.25) + 10);
}

// ---------- 7 характеристик (клавиши 1–7) ----------
export const STATS = [
  { key: 'regen',  name: 'Регенерация' },
  { key: 'maxhp',  name: 'Прочность' },
  { key: 'body',   name: 'Урон корпусом' },
  { key: 'bspeed', name: 'Скор. снарядов' },
  { key: 'bdmg',   name: 'Урон снарядов' },
  { key: 'reload', name: 'Перезарядка' },
  { key: 'move',   name: 'Ходовая' },
];

// ---------- Ветки развития ----------
// Ствол: a — угол°, off — боковое смещение, l — длина, w — калибр,
//        d — урон, s — скорость пули, spread — разброс, n — кол-во пуль,
//        phase — сдвиг фазы перезарядки (0..1), recoil — отдача-тяга
export const CLASSES = [
  {
    id: 'basic', name: 'Базовый танк', tier: 1, parent: null, reload: 0.9,
    desc: 'Серийная машина «Пионер». С неё начинается путь каждого кадетa.',
    barrels: [{ a: 0, l: 1.15, w: 1, d: 1, s: 1 }],
  },

  // ===== ВЕТКА 1: ТВИН =====
  {
    id: 'twin', name: 'Твин', tier: 2, parent: 'basic', reload: 0.82,
    desc: 'Спаренные стволы — вдвое больше свинца, вдвое меньше шансов у цели.',
    mods: { bdmg: 0.72 },
    barrels: [
      { a: 0, off: 0.5, l: 1.1, w: 0.92, d: 1, s: 1 },
      { a: 0, off: -0.5, l: 1.1, w: 0.92, d: 1, s: 1, phase: 0.5 },
    ],
  },
  {
    id: 'triplet', name: 'Триплет', tier: 3, parent: 'twin', reload: 0.95,
    desc: 'Три ствола с каскадным темпом. Плотность огня за гранью приличия.',
    mods: { bdmg: 0.6 },
    barrels: [
      { a: 0, off: 0.55, l: 1.05, w: 0.85, d: 1, s: 1 },
      { a: 0, off: -0.55, l: 1.05, w: 0.85, d: 1, s: 1, phase: 0.5 },
      { a: 0, l: 1.3, w: 0.9, d: 1.1, s: 1.08, phase: 0.25 },
    ],
  },
  {
    id: 'twinflank', name: 'Твин-Фланг', tier: 3, parent: 'twin', reload: 0.95,
    desc: 'Две спарки — вперёд и назад. Слепых зон больше не существует.',
    mods: { bdmg: 0.58 },
    barrels: [
      { a: 0, off: 0.5, l: 1.05, w: 0.85, d: 1, s: 1 },
      { a: 0, off: -0.5, l: 1.05, w: 0.85, d: 1, s: 1, phase: 0.5 },
      { a: 180, off: 0.5, l: 1.05, w: 0.85, d: 1, s: 1, phase: 0.25 },
      { a: 180, off: -0.5, l: 1.05, w: 0.85, d: 1, s: 1, phase: 0.75 },
    ],
  },

  // ===== ВЕТКА 2: СНАЙПЕР =====
  {
    id: 'sniper', name: 'Снайпер', tier: 2, parent: 'basic', reload: 1.3,
    desc: 'Длинный ствол, настильный полёт. Фигуры умирают, не поняв откуда.',
    mods: { bdmg: 1.3, bspeed: 1.4 },
    barrels: [{ a: 0, l: 1.75, w: 0.95, d: 1, s: 1 }],
  },
  {
    id: 'hunter', name: 'Хантер', tier: 3, parent: 'sniper', reload: 1.3,
    desc: 'Два снаряда след в след: первый вскрывает броню, второй добирает.',
    mods: { bdmg: 1.05, bspeed: 1.35 },
    barrels: [
      { a: 0, l: 1.5, w: 1.05, d: 0.95, s: 1 },
      { a: 0, l: 1.2, w: 0.72, d: 0.75, s: 1.18, phase: 0.35 },
    ],
  },
  {
    id: 'assassin', name: 'Ассасин', tier: 3, parent: 'sniper', reload: 1.7,
    desc: 'Рельсотворный ствол. Пуля уходит за горизонт раньше, чем звук.',
    mods: { bdmg: 1.55, bspeed: 1.8 },
    barrels: [{ a: 0, l: 2.0, w: 0.85, d: 1, s: 1 }],
  },

  // ===== ВЕТКА 3: ПУЛЕМЁТ =====
  {
    id: 'gunner', name: 'Пулемёт', tier: 2, parent: 'basic', reload: 0.52,
    desc: 'Широкий раструб и бешеный темп. Точность — не про это.',
    mods: { bdmg: 0.55, bspeed: 0.95 },
    barrels: [{ a: 0, l: 1.05, w: 1.2, d: 1, s: 1, spread: 0.13 }],
  },
  {
    id: 'sprayer', name: 'Спрейер', tier: 3, parent: 'gunner', reload: 0.4,
    desc: 'Два раструба в противофазе. Стена огня, не прекращающаяся никогда.',
    mods: { bdmg: 0.48, bspeed: 1.0 },
    barrels: [
      { a: 0, off: 0.42, l: 1.0, w: 1.05, d: 0.8, s: 0.95, spread: 0.17 },
      { a: 0, off: -0.42, l: 1.3, w: 0.9, d: 0.9, s: 1.15, spread: 0.1, phase: 0.5 },
    ],
  },
  {
    id: 'spread', name: 'Веер', tier: 3, parent: 'gunner', reload: 1.15,
    desc: 'Пять стволов дугой. Коридор смерти шириной с улицу.',
    mods: { bdmg: 0.42 },
    barrels: [-40, -20, 0, 20, 40].map((a, i) => ({ a, l: i === 2 ? 1.2 : 1.0, w: 0.7, d: 1, s: 1, spread: 0.05 })),
  },

  // ===== ВЕТКА 4: ФЛАНГ =====
  {
    id: 'flank', name: 'Фланг-Гвард', tier: 2, parent: 'basic', reload: 0.95,
    desc: 'Задний ствол для тех, кто любит заходить в спину. И для тех, кому заходят.',
    mods: { bdmg: 0.8 },
    barrels: [
      { a: 0, l: 1.1, w: 0.95, d: 1, s: 1 },
      { a: 180, l: 1.1, w: 0.95, d: 1, s: 1, phase: 0.5 },
    ],
  },
  {
    id: 'quad', name: 'Квад-танк', tier: 3, parent: 'flank', reload: 1.0,
    desc: 'Четыре ствола по сторонам света. Куда бы ни посмотрел — там ствол.',
    mods: { bdmg: 0.62 },
    barrels: [
      { a: 0, l: 1.1, w: 0.95, d: 1, s: 1 },
      { a: 90, l: 1.1, w: 0.95, d: 1, s: 1, phase: 0.25 },
      { a: 180, l: 1.1, w: 0.95, d: 1, s: 1, phase: 0.5 },
      { a: 270, l: 1.1, w: 0.95, d: 1, s: 1, phase: 0.75 },
    ],
  },
  {
    id: 'triangle', name: 'Трай-Энгл', tier: 3, parent: 'flank', reload: 1.0,
    desc: 'Задние стволы работают как ускорители. Догонит даже ветер.',
    special: 'recoil', mods: { bdmg: 0.7, move: 1.3 },
    barrels: [
      { a: 0, l: 1.2, w: 1.0, d: 1.1, s: 1 },
      { a: 150, l: 1.0, w: 0.9, d: 0.6, s: 1, recoil: 1 },
      { a: 210, l: 1.0, w: 0.9, d: 0.6, s: 1, recoil: 1, phase: 0.5 },
    ],
  },

  // ===== ВЕТКА 5: ТРОЙНОЙ ЗАЛП =====
  {
    id: 'triple', name: 'Тройной залп', tier: 2, parent: 'basic', reload: 1.0,
    desc: 'Веер из трёх стволов. Центр — в цель, края — по совести.',
    mods: { bdmg: 0.66 },
    barrels: [
      { a: 0, l: 1.25, w: 0.95, d: 1.1, s: 1 },
      { a: 26, l: 1.05, w: 0.9, d: 0.9, s: 0.98 },
      { a: -26, l: 1.05, w: 0.9, d: 0.9, s: 0.98 },
    ],
  },
  {
    id: 'penta', name: 'Пента', tier: 3, parent: 'triple', reload: 1.2,
    desc: 'Пять стволов веером. Передняя полусфера простреливается насквозь.',
    mods: { bdmg: 0.5 },
    barrels: [-50, -25, 0, 25, 50].map((a, i) => ({ a, l: i === 2 ? 1.25 : 1.02, w: 0.85, d: 1, s: 1, spread: 0.04 })),
  },
  {
    id: 'crossfire', name: 'Перекрёсток', tier: 3, parent: 'triple', reload: 1.15,
    desc: 'Шесть стволов: три вперёд, три назад. Смертельная симметрия.',
    mods: { bdmg: 0.48 },
    barrels: [
      { a: 0, l: 1.2, w: 0.85, d: 1.05, s: 1 },
      { a: 30, l: 1.0, w: 0.8, d: 0.85, s: 1 },
      { a: -30, l: 1.0, w: 0.8, d: 0.85, s: 1 },
      { a: 180, l: 1.2, w: 0.85, d: 1.05, s: 1, phase: 0.5 },
      { a: 150, l: 1.0, w: 0.8, d: 0.85, s: 1, phase: 0.5 },
      { a: 210, l: 1.0, w: 0.8, d: 0.85, s: 1, phase: 0.5 },
    ],
  },

  // ===== ВЕТКА 6: РАЗРУШИТЕЛЬ =====
  {
    id: 'destroyer', name: 'Разрушитель', tier: 2, parent: 'basic', reload: 2.4,
    desc: 'Один снаряд размером с гараж. Медленно. Громко. Окончательно.',
    mods: { bdmg: 3.4, bspeed: 0.78 },
    barrels: [{ a: 0, l: 1.3, w: 2.1, d: 1, s: 1 }],
  },
  {
    id: 'annihilator', name: 'Аннигилятор', tier: 3, parent: 'destroyer', reload: 3.0,
    desc: 'Снаряд-«куб смерти». Отдача сдвигает танк, а цели — из списка живых.',
    mods: { bdmg: 4.6, bspeed: 0.74 },
    barrels: [{ a: 0, l: 1.35, w: 2.6, d: 1, s: 1 }],
  },
  {
    id: 'hybrid', name: 'Гибрид', tier: 3, parent: 'destroyer', reload: 2.5,
    desc: 'Тяжёлое орудие плюс три дрона-пастуха. Овцы целы, волки — нет.',
    mods: { bdmg: 2.9, bspeed: 0.8 }, droneCount: 3,
    barrels: [{ a: 0, l: 1.3, w: 1.9, d: 1, s: 1 }],
  },

  // ===== ВЕТКА 7: КРУШИЛА =====
  {
    id: 'smasher', name: 'Крушила', tier: 2, parent: 'basic', reload: 1.4,
    desc: 'Броня вместо оружия. Соприкосновение с корпусом — ошибка противника.',
    special: 'melee', mods: { bdmg: 0.35, body: 3.0, hp: 1.35, move: 1.1 },
    barrels: [{ a: 0, l: 0.7, w: 0.7, d: 1, s: 0.9 }],
  },
  {
    id: 'spike', name: 'Шип', tier: 3, parent: 'smasher', reload: 1.5,
    desc: 'Восемь таранных шипов. Теперь обниматься с ним опасно вдвойне.',
    special: 'melee', mods: { bdmg: 0.3, body: 4.2, hp: 1.45, move: 1.08 },
    barrels: [{ a: 0, l: 0.6, w: 0.65, d: 1, s: 0.9 }],
  },
  {
    id: 'landmine', name: 'Мина', tier: 3, parent: 'smasher', reload: 1.6,
    desc: 'Максимальная броня, максимальная скорость сближения. Сам себе снаряд.',
    special: 'melee', mods: { bdmg: 0.25, body: 5.0, hp: 1.6, move: 1.22 },
    barrels: [{ a: 0, l: 0.55, w: 0.6, d: 1, s: 0.85 }],
  },

  // ===== ВЕТКА 8: ВЛАДЫКА =====
  {
    id: 'overlord', name: 'Владыка', tier: 2, parent: 'basic', reload: 1.6,
    desc: 'Шесть дронов-клинков. Сам не стреляет — приказы отдаёт свита.',
    special: 'drones', droneCount: 6, mods: { bdmg: 0.35 },
    barrels: [{ a: 0, l: 0.65, w: 0.75, d: 1, s: 0.9 }],
  },
  {
    id: 'overseer', name: 'Надзиратель', tier: 3, parent: 'overlord', reload: 1.6,
    desc: 'Восемь дронов. Стая, которая не прощает одиночек.',
    special: 'drones', droneCount: 8, mods: { bdmg: 0.3 },
    barrels: [{ a: 0, l: 0.6, w: 0.7, d: 1, s: 0.9 }],
  },
  {
    id: 'battleship', name: 'Линкор', tier: 3, parent: 'overlord', reload: 0.75,
    desc: 'Четыре ствола, в каждом залпе — рой мелких пуль. Шквал во все стороны.',
    mods: { bdmg: 0.32, bspeed: 1.1 },
    barrels: [
      { a: 0, l: 1.1, w: 0.95, d: 1, s: 1, n: 3, spread: 0.16 },
      { a: 90, l: 1.1, w: 0.95, d: 1, s: 1, n: 3, spread: 0.16, phase: 0.25 },
      { a: 180, l: 1.1, w: 0.95, d: 1, s: 1, n: 3, spread: 0.16, phase: 0.5 },
      { a: 270, l: 1.1, w: 0.95, d: 1, s: 1, n: 3, spread: 0.16, phase: 0.75 },
    ],
  },

  // ===== ВЕТКА 9: ТЯЖАЧ =====
  {
    id: 'heavy', name: 'Тяжач', tier: 2, parent: 'basic', reload: 1.6,
    desc: 'Утолщённая броня и фугасный ствол. Ходит медленно, бьёт наотмашь.',
    mods: { bdmg: 1.6, bspeed: 0.9, hp: 1.3, move: 0.92, body: 1.25 },
    barrels: [{ a: 0, l: 1.2, w: 1.45, d: 1, s: 1 }],
  },
  {
    id: 'juggernaut', name: 'Джаггернаут', tier: 3, parent: 'heavy', reload: 1.6,
    desc: 'Два фугасных ствола и броня крепостной стены. Сносит всё, что не ушло.',
    mods: { bdmg: 1.45, bspeed: 0.9, hp: 1.55, move: 0.85, body: 1.4 },
    barrels: [
      { a: 0, off: 0.55, l: 1.25, w: 1.3, d: 1, s: 1 },
      { a: 0, off: -0.55, l: 1.25, w: 1.3, d: 1, s: 1, phase: 0.5 },
    ],
  },
  {
    id: 'ram', name: 'Таран', tier: 3, parent: 'heavy', reload: 1.3,
    desc: 'Гибрид артиллерии и тарана: разгон, удар, фугас в упор, ещё разгон.',
    special: 'melee', mods: { bdmg: 0.9, bspeed: 0.95, body: 3.2, hp: 1.35, move: 1.25 },
    barrels: [{ a: 0, l: 0.85, w: 1.05, d: 1, s: 1 }],
  },

  // ===== ВЕТКА 10: ИНЖЕНЕР =====
  {
    id: 'engineer', name: 'Инженер', tier: 2, parent: 'basic', reload: 1.1,
    desc: 'Лёгкое орудие и минные заграждения. Территорию он сдаёт только вместе с врагами.',
    special: 'traps', trapCount: 8, mods: { bdmg: 0.65 },
    barrels: [{ a: 0, l: 1.0, w: 0.9, d: 1, s: 1 }],
  },
  {
    id: 'trapper', name: 'Ловушник', tier: 3, parent: 'engineer', reload: 1.2,
    desc: 'Усиленные мины с увеличенным зарядом. Поле боя становится его крепостью.',
    special: 'traps', trapCount: 12, trapPower: 1.8, mods: { bdmg: 0.55 },
    barrels: [{ a: 0, l: 0.9, w: 0.85, d: 1, s: 1 }],
  },
  {
    id: 'autoturret', name: 'Автотурель', tier: 3, parent: 'engineer', reload: 1.0,
    desc: 'Основное орудие плюс автономная турель. Целей много — рук теперь тоже.',
    special: 'auto', mods: { bdmg: 0.75 },
    barrels: [{ a: 0, l: 1.15, w: 0.95, d: 1, s: 1 }],
  },
];

export const getClassById = (id) => CLASSES.find((c) => c.id === id);
export const getChildren = (id) => CLASSES.filter((c) => c.parent === id);
export const tier2Classes = () => CLASSES.filter((c) => c.tier === 2);

// ---------- Типы фигур ----------
export const SHAPES = {
  square:   { name: 'Квадрат',  hp: 30,  dmg: 12, xp: 15,  speed: 3.4, size: 1.05, color: 0xffd166, sides: 4, aggro: 7 },
  triangle: { name: 'Треугольник', hp: 55, dmg: 18, xp: 35, speed: 4.8, size: 1.1, color: 0xff5d5d, sides: 3, aggro: 30 },
  diamond:  { name: 'Ромб-стрелок', hp: 95, dmg: 22, xp: 55, speed: 3.6, size: 1.15, color: 0xff9f43, sides: 4, aggro: 45, shooter: true },
  pentagon: { name: 'Пентагон', hp: 150, dmg: 28, xp: 90,  speed: 2.5, size: 1.65, color: 0x6f8bff, sides: 5, aggro: 16 },
  hexagon:  { name: 'Гексагон', hp: 330, dmg: 38, xp: 200, speed: 2.1, size: 2.1,  color: 0xb06bff, sides: 6, aggro: 22 },
  droneE:   { name: 'Дрон',     hp: 60,  dmg: 15, xp: 28,  speed: 7.5, size: 0.75, color: 0xff7ab8, sides: 0, aggro: 999 },
  tankE:    { name: 'Боевая машина', hp: 420, dmg: 30, xp: 120, speed: 3.8, size: 1.35, color: 0xa8b4c4, sides: 4, aggro: 70, tank: true },
};

// ---------- Кампания: 6 глав, у каждой — волны и босс ----------
export const CHAPTERS = [
  {
    title: 'Полигон', tag: 'Глава 1', bossKey: 'guard',
    story: [
      'Кадет, на связи штаб «Полигона». Учебные мишени сорвались с креплений и начали размножаться.',
      'Квадраты, треугольники — пока мелочь. Зачисти сектор и не забывай вкладывать очки в системы танка.',
      'Данные телеметрии засекли крупную цель. Разведка называет её «Квадрат-Страж». Уничтожь её.',
    ],
    waves: [
      { square: 5 },
      { square: 5, triangle: 2 },
      { square: 4, triangle: 4 },
    ],
  },
  {
    title: 'Ржавые поля', tag: 'Глава 2', bossKey: 'gear',
    story: [
      'Страж был лишь маяком. Сигнал ушёл вглубь полигона — и там проснулись «Ржавые поля».',
      'Здесь фигур больше, и они злее. Пентагоны держат строй, треугольники атакуют с флангов.',
      'В центре сектора крутится нечто огромное. Механики прозвали его «Шестернёй». Разбери её.',
    ],
    waves: [
      { square: 6, triangle: 3 },
      { triangle: 5, square: 4 },
      { pentagon: 2, triangle: 4, square: 4 },
    ],
  },
  {
    title: 'Гекс-зона', tag: 'Глава 3', bossKey: 'hive',
    story: [
      '«Шестерня» перед отключением передала координаты Гекс-зоны — склада тяжёлых фигур.',
      'Внимание: замечены ромбы-стрелки. Держи дистанцию и используй укрытия.',
      'Зону охраняет «Страж Улья». Он призывает подкрепление — сначала разбей свиту.',
    ],
    waves: [
      { pentagon: 3, triangle: 5 },
      { pentagon: 4, diamond: 3 },
      { hexagon: 1, pentagon: 4, triangle: 4 },
    ],
  },
  {
    title: 'Ангар дронов', tag: 'Глава 4', bossKey: 'mother',
    story: [
      'За Гекс-зоной — ангар. «ГЕНЕЗИС» собирает здесь рои дронов, и конвейер не останавливается.',
      'Дроны быстрые и кусаются. Не дай себя окружить — двигайся, кадет, двигайся.',
      'Источником роя признана «Дрон-Матка». Отруби голову — и конвейер встанет.',
    ],
    waves: [
      { droneE: 8 },
      { droneE: 10, diamond: 3 },
      { droneE: 8, pentagon: 4 },
    ],
  },
  {
    title: 'Кладбище машин', tag: 'Глава 5', bossKey: 'hunter',
    story: [
      'Здесь лежат танки прошлых кадетов. «ГЕНЕЗИС» перепрошил их и поставил в строй против тебя.',
      'Машины стреляют прицельно. Следи за стволами и не стой на линии огня.',
      'Во главе колонны — «Прототип „Охотник“». Он создан, чтобы охотиться на таких, как ты.',
    ],
    waves: [
      { tankE: 3, triangle: 4 },
      { tankE: 4, diamond: 4 },
      { tankE: 5, pentagon: 3 },
    ],
  },
  {
    title: 'Ядро', tag: 'Финал', bossKey: 'core',
    story: [
      'Это сердце «ГЕНЕЗИСА». Дальше дорог нет — только вперёд, кадет.',
      'Ядро охраняет всё, что система успела собрать: фигуры, дроны, машины. Прорвись.',
      'Когда Ядро падёт — полигон снова станет учебным. Если останешься в живых, разумеется.',
    ],
    waves: [
      { pentagon: 4, hexagon: 2, droneE: 6 },
      { tankE: 4, diamond: 5, droneE: 6 },
    ],
  },
];

export const BOSSES = {
  guard:  { name: 'Квадрат-Страж',       hp: 1300, dmg: 42, xp: 700,  size: 3.4, color: 0xffc53d, sides: 4 },
  gear:   { name: 'Шестерня',            hp: 2200, dmg: 46, xp: 1200, size: 3.8, color: 0xff8f3d, sides: 5 },
  hive:   { name: 'Страж Улья',          hp: 3400, dmg: 50, xp: 1900, size: 4.2, color: 0x9d6bff, sides: 6 },
  mother: { name: 'Дрон-Матка',          hp: 4600, dmg: 54, xp: 2700, size: 4.0, color: 0xff5fa8, sides: 0 },
  hunter: { name: 'Прототип «Охотник»',  hp: 6000, dmg: 58, xp: 3800, size: 2.6, color: 0xe8edf5, sides: 4 },
  core:   { name: 'Ядро «ГЕНЕЗИС»',      hp: 9500, dmg: 64, xp: 6000, size: 5.0, color: 0xff4757, sides: 6 },
};
