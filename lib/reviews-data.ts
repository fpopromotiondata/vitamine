export type Review = {
  name: string;
  initial: string;
  date: string;
  rating: number;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    name: 'Client Google',
    initial: 'A',
    date: 'il y a 9 mois · Sur place',
    rating: 5,
    text: "L'ambiance est calme et apaisante ; l'intérieur a un air frais, et les jus fraîchement pressés sont merveilleux à boire pendant cette chaleur estivale étouffante. L'endroit est propre. Je le recommande et j'y retournerai.",
  },
  {
    name: 'Client Google',
    initial: 'S',
    date: 'Avis vérifié',
    rating: 5,
    text: "J'adore les salades de fruits que Vitamine fait ; ils ajoutent des morceaux croustillants et de la glace, ce qui leur donne un goût exceptionnel. Même leurs jus naturels sont bons. Je recommande l'endroit.",
  },
  {
    name: 'Client Google',
    initial: 'M',
    date: 'Avis vérifié',
    rating: 5,
    text: 'Produits de qualité, service rapide, propreté, bonne ambiance, parfois très fréquenté.',
  },
  {
    name: 'Client Google',
    initial: 'K',
    date: 'Avis vérifié',
    rating: 5,
    text: "J'y suis allé avec des amis ; c'était un après-midi très chaud, alors quand nous sommes entrés, nous nous sommes rapidement sentis rafraîchis et à l'aise ! Surtout après avoir essayé leurs smoothies et jus de fruits — ils étaient délicieux ! Les crêpes Nutella étaient bonnes aussi. Vous ne serez vraiment pas déçus.",
  },
];
