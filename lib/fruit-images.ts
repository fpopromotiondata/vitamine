// Microsoft Fluent UI Emoji — 3D rendered illustrations (look photo-realistic, not flat emoji).
// Served from the public Microsoft/fluentui-emoji GitHub repo via jsdelivr CDN.
// NOTE: folder casing matters — many multi-word names are "Title lowercase" (e.g. "Red apple").
const CDN = 'https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets';

export const FRUIT_IMG = {
  strawberry: `${CDN}/Strawberry/3D/strawberry_3d.png`,
  orange:     `${CDN}/Tangerine/3D/tangerine_3d.png`,
  lemon:      `${CDN}/Lemon/3D/lemon_3d.png`,
  banana:     `${CDN}/Banana/3D/banana_3d.png`,
  pineapple:  `${CDN}/Pineapple/3D/pineapple_3d.png`,
  apple:      `${CDN}/Red%20apple/3D/red_apple_3d.png`,
  greenApple: `${CDN}/Green%20apple/3D/green_apple_3d.png`,
  pear:       `${CDN}/Pear/3D/pear_3d.png`,
  mango:      `${CDN}/Mango/3D/mango_3d.png`,
  grapes:     `${CDN}/Grapes/3D/grapes_3d.png`,
  watermelon: `${CDN}/Watermelon/3D/watermelon_3d.png`,
  kiwi:       `${CDN}/Kiwi%20fruit/3D/kiwi_fruit_3d.png`,
  peach:      `${CDN}/Peach/3D/peach_3d.png`,
  cherries:   `${CDN}/Cherries/3D/cherries_3d.png`,
  coconut:    `${CDN}/Coconut/3D/coconut_3d.png`,
  blueberries:`${CDN}/Blueberries/3D/blueberries_3d.png`,
  melon:      `${CDN}/Melon/3D/melon_3d.png`,
  avocado:    `${CDN}/Avocado/3D/avocado_3d.png`,
  // category icons
  glass:      `${CDN}/Cup%20with%20straw/3D/cup_with_straw_3d.png`,
  pancake:    `${CDN}/Pancakes/3D/pancakes_3d.png`,
  cocktail:   `${CDN}/Tropical%20drink/3D/tropical_drink_3d.png`,
  bottle:     `${CDN}/Bottle%20with%20popping%20cork/3D/bottle_with_popping_cork_3d.png`,
  saladBowl:  `${CDN}/Green%20salad/3D/green_salad_3d.png`,
  iceCream:   `${CDN}/Ice%20cream/3D/ice_cream_3d.png`,
  honey:      `${CDN}/Honey%20pot/3D/honey_pot_3d.png`,
} as const;

export type FruitKey = keyof typeof FRUIT_IMG;
