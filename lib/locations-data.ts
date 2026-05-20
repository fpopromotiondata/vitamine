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
    label: 'Vitamine',
    address: 'Oran, Algérie',
    lat: 35.71658959906685,
    lng: -0.5740586940519613,
    mapsUrl: 'https://maps.app.goo.gl/wc7eq8FF5vBtNgV87',
  },
];
