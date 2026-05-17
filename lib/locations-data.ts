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
    lat: 35.71658959906685,
    lng: -0.5740586940519613,
    mapsUrl: 'https://maps.app.goo.gl/wc7eq8FF5vBtNgV87',
  },
  {
    id: 'loc2',
    label: 'Vitamine — Adresse 2',
    address: 'Oran, Algérie',
    lat: 35.72783366335251,
    lng: -0.585104882616263,
    mapsUrl: 'https://maps.app.goo.gl/8ZJSXcxFtXLYQtwM7',
  },
];
