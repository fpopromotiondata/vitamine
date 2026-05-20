import { FRUIT_IMG, type FruitKey } from './fruit-images';

export type MenuItem = { name: string; price?: number };
export type MenuCategory = {
  id: string;
  title: string;
  icon: FruitKey;
  items: MenuItem[];
  supplements?: { title: string; items: MenuItem[] };
};

export const MENU: MenuCategory[] = [
  {
    id: 'jus',
    title: 'Jus',
    icon: 'orange',
    items: [
      { name: 'Orange', price: 400 },
      { name: 'Citron', price: 400 },
      { name: 'Citron - Menthe', price: 400 },
      { name: 'Pastèque', price: 400 },
      { name: 'Orange - Citron', price: 400 },
      { name: 'Carotte', price: 400 },
      { name: 'Pomme', price: 400 },
      { name: 'Melon', price: 400 },
      { name: 'Pêche - Melon', price: 400 },
      { name: 'Grenade', price: 400 },
      { name: 'Mangue', price: 500 },
      { name: 'Kiwi', price: 500 },
      { name: 'Ananas', price: 500 },
      { name: 'Fraise', price: 500 },
    ],
  },
  {
    id: 'milkshakes',
    title: 'Milkshakes',
    icon: 'glass',
    items: [
      { name: 'Banane et lait', price: 400 },
      { name: 'Banane - Miel et lait', price: 450 },
      { name: 'Banane - Pêche et lait', price: 500 },
      { name: 'Banane - Avocat et lait', price: 750 },
      { name: 'Banane - Mangue et lait', price: 500 },
      { name: 'Banane - Nutella et lait', price: 500 },
      { name: 'Banane - Fraises et lait', price: 500 },
      { name: 'Banane - Chantilly - Nestlé et lait', price: 500 },
      { name: 'Banane - Twix - Nutella - Nestlé et lait', price: 700 },
      { name: 'Banane - Avocat - Miel - Fruits secs et lait', price: 900 },
      { name: 'Banane - Twix - Nutella - Nestlé - Lait - Chantilly', price: 600 },
      { name: 'Banane - Lait - Datte', price: 600 },
      { name: 'Banane - Lait - Datte - Fruits secs', price: 600 },
    ],
  },
  {
    id: 'salades',
    title: 'Salades de fruits',
    icon: 'saladBowl',
    items: [
      { name: 'Salade de fruits (mini)', price: 500 },
      { name: 'Salade de fruits (mini) et Kitkat', price: 600 },
      { name: 'Tutti fruiti', price: 550 },
      { name: 'Chocolamo', price: 500 },
      { name: 'Salade de fruits', price: 650 },
      { name: 'Salade de fruits diététique', price: 650 },
      { name: 'Salade de fruits V.I.P', price: 900 },
      { name: 'Salade de fruits et (Kitkat / Twix / Mars / Snickers)', price: 750 },
      { name: 'Banana split', price: 500 },
      { name: 'Salade de fruits — 02 personnes', price: 1050 },
      { name: 'Salade de fruits et (Kitkat / Twix / Mars / Snickers) — 02 personnes', price: 1200 },
    ],
  },
  {
    id: 'crepes',
    title: 'Crêpes & Gaufres',
    icon: 'pancake',
    items: [
      { name: 'La Nutella', price: 400 },
      { name: 'La Fraisy', price: 500 },
      { name: 'La Banana', price: 450 },
      { name: 'La Fruita', price: 550 },
      { name: 'La Nuts', price: 550 },
      { name: 'La Spéciale', price: 750 },
      { name: 'La 4 Choco', price: 700 },
    ],
    supplements: {
      title: 'Supplémentaire',
      items: [
        { name: 'Kitkat', price: 200 },
        { name: 'Mars', price: 200 },
        { name: 'Twix', price: 200 },
        { name: 'Bueno', price: 250 },
        { name: "M&M's", price: 250 },
      ],
    },
  },
  {
    id: 'cocktails',
    title: 'Cocktails de fruits',
    icon: 'cocktail',
    items: [
      { name: 'Banane - Orange et fraise', price: 500 },
      { name: 'Mixed cocktails', price: 500 },
      { name: 'Ananas et banane', price: 500 },
      { name: 'Fraise et mangue', price: 500 },
      { name: 'Banane - Orange et kiwi', price: 500 },
      { name: 'Mixed cocktail et Chantilly', price: 530 },
      { name: 'Cocktail avec morceaux de fruits', price: 600 },
      { name: 'Pomme - Banane - Orange', price: 500 },
    ],
  },
  {
    id: 'bouteilles',
    title: 'Bouteilles 1L',
    icon: 'bottle',
    items: [
      { name: 'Banane - Lait' },
      { name: 'Banane - Fraise - Lait' },
      { name: 'Cocktail' },
      { name: 'Banane - Avocat - Fruits secs' },
      { name: 'Orange' },
      { name: 'Citron - Menthe' },
      { name: 'Banane - Nutella - Lait' },
    ],
  },
];

export const totalMenuItems = MENU.reduce(
  (sum, c) => sum + c.items.length + (c.supplements?.items.length ?? 0),
  0,
);

// Resolve icon URL helper
export function iconFor(cat: MenuCategory) {
  return FRUIT_IMG[cat.icon];
}
