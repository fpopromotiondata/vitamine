import { FRUIT_IMG, type FruitKey } from './fruit-images';

export type MenuItem = { name: string; price: number };
export type MenuCategory = {
  id: string;
  title: string;
  icon: FruitKey;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: 'salades',
    title: 'Salades de fruits',
    icon: 'saladBowl',
    items: [
      { name: 'Salade Vitamine', price: 350 },
      { name: 'Salade Tropicale', price: 400 },
      { name: 'Salade Royale', price: 450 },
      { name: 'Salade Exotique', price: 400 },
      { name: 'Salade Mix Fruits', price: 350 },
      { name: 'Salade Spéciale Maison', price: 500 },
      { name: 'Salade aux fruits secs', price: 450 },
      { name: 'Salade Chantilly', price: 400 },
      { name: 'Salade Glace + Fruits', price: 500 },
    ],
  },
  {
    id: 'cocktails',
    title: 'Cocktails de fruits',
    icon: 'cocktail',
    items: [
      { name: 'Cocktail Vitamine', price: 400 },
      { name: 'Cocktail Tropical', price: 450 },
      { name: 'Cocktail Spécial', price: 500 },
      { name: 'Cocktail Royal', price: 500 },
      { name: 'Cocktail Mix', price: 400 },
      { name: 'Cocktail Exotique', price: 450 },
      { name: 'Cocktail Énergie', price: 500 },
      { name: 'Cocktail Détox', price: 500 },
    ],
  },
  {
    id: 'milkshakes',
    title: 'Milkshakes',
    icon: 'glass',
    items: [
      { name: 'Milkshake Fraise', price: 350 },
      { name: 'Milkshake Banane', price: 350 },
      { name: 'Milkshake Vanille', price: 300 },
      { name: 'Milkshake Chocolat', price: 350 },
      { name: 'Milkshake Oreo', price: 400 },
      { name: 'Milkshake Nutella', price: 400 },
      { name: 'Milkshake Caramel', price: 350 },
      { name: 'Milkshake Pistache', price: 400 },
      { name: 'Milkshake Café', price: 350 },
      { name: 'Milkshake Mangue', price: 400 },
    ],
  },
  {
    id: 'crepes',
    title: 'Crêpes & Gaufres',
    icon: 'pancake',
    items: [
      { name: 'Crêpe Sucre', price: 150 },
      { name: 'Crêpe Confiture', price: 200 },
      { name: 'Crêpe Nutella', price: 250 },
      { name: 'Crêpe Banane Nutella', price: 350 },
      { name: 'Crêpe Fraise', price: 350 },
      { name: 'Crêpe Fruits', price: 400 },
      { name: 'Crêpe Spéciale Maison', price: 450 },
      { name: 'Gaufre Sucre', price: 200 },
      { name: 'Gaufre Nutella', price: 300 },
      { name: 'Gaufre Chantilly', price: 300 },
      { name: 'Gaufre Fruits', price: 400 },
      { name: 'Gaufre Spéciale', price: 450 },
    ],
  },
  {
    id: 'jus',
    title: 'Jus pressés',
    icon: 'orange',
    items: [
      { name: 'Orange', price: 200 },
      { name: 'Citron', price: 200 },
      { name: 'Pomme', price: 200 },
      { name: 'Carotte', price: 200 },
      { name: 'Fraise', price: 250 },
      { name: 'Banane', price: 250 },
      { name: 'Pastèque', price: 250 },
      { name: 'Melon', price: 250 },
      { name: 'Mangue', price: 300 },
      { name: 'Ananas', price: 300 },
      { name: 'Kiwi', price: 300 },
      { name: 'Mix de fruits', price: 350 },
    ],
  },
  {
    id: 'bouteilles',
    title: 'Bouteilles de jus',
    icon: 'bottle',
    items: [
      { name: 'Orange 500 ml', price: 250 },
      { name: 'Citron 500 ml', price: 250 },
      { name: 'Pomme 500 ml', price: 250 },
      { name: 'Fraise 500 ml', price: 300 },
      { name: 'Multi-fruits 500 ml', price: 350 },
      { name: 'Detox vert 500 ml', price: 400 },
      { name: 'Énergie 500 ml', price: 400 },
      { name: 'Tropical 500 ml', price: 400 },
    ],
  },
];

export const totalMenuItems = MENU.reduce((sum, c) => sum + c.items.length, 0);

// Resolve icon URL helper
export function iconFor(cat: MenuCategory) {
  return FRUIT_IMG[cat.icon];
}
