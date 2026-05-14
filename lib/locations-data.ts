export type Location = {
  id: string;
  label: string;
  address: string;
  // Approximate coordinates around Oran — update with the exact lat/lng once known.
  lat: number;
  lng: number;
  mapsUrl: string;
};

export const LOCATIONS: Location[] = [
  {
    id: 'loc1',
    label: 'Vitamine — Adresse 1',
    address: 'Oran, Algérie',
    lat: 35.71633788730301,
    lng: -0.57408332707383,
    mapsUrl: 'https://share.google/h2WvYKhxQe8aet5MS',
  },
  {
    id: 'loc2',
    label: 'Vitamine — Adresse 2',
    address: 'Oran, Algérie',
    lat: 35.727764235486745,
    lng: -0.5850405078401849,
    mapsUrl: 'https://share.google/BbwM74IcjrZid5nAc',
  },
];
