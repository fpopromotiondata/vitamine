export type Review = {
  name: string;
  initial: string;
  date: string;
  rating: number;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    name: 'Jawed',
    initial: 'J',
    date: 'il y a 9 mois · Sur place',
    rating: 5,
    text: "L'ambiance est calme et apaisante ; l'intérieur a un air frais, et les jus fraîchement pressés sont merveilleux à boire pendant cette chaleur estivale étouffante. L'endroit est propre. Je le recommande et j'y retournerai.",
  },
  {
    name: 'RéDa Hs',
    initial: 'R',
    date: 'il y a 2 ans · Sur place',
    rating: 5,
    text: "J'adore les salades de fruits que Vitamine fait ; ils ajoutent des morceaux croustillants et de la glace, ce qui leur donne un goût exceptionnel. Même leurs jus naturels sont bons. Je recommande l'endroit.",
  },
  {
    name: 'Fouad B',
    initial: 'F',
    date: 'il y a 1 an · Sur place',
    rating: 5,
    text: 'Produits de qualité, service rapide, propreté, bonne ambiance, parfois très fréquenté.',
  },
  {
    name: 'Sab-Mood',
    initial: 'S',
    date: 'il y a 3 ans · Sur place',
    rating: 5,
    text: "J'y suis allé avec des amis ; c'était un après-midi très chaud, alors quand nous sommes entrés, nous nous sommes rapidement sentis rafraîchis et à l'aise ! Surtout après avoir essayé leurs smoothies et jus de fruits — ils étaient délicieux ! Les crêpes Nutella étaient bonnes aussi. Vous ne serez vraiment pas déçus.",
  },
  {
    name: 'Laetitia BER',
    initial: 'L',
    date: 'il y a 1 an · Sur place',
    rating: 5,
    text: "Endroit calme et propre. Les salades de fruits excellentes.",
  },
];
