'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LOCATIONS } from '@/lib/locations-data';

// Glowing-dot pin: small solid dot + soft pulsing halo, anchored at the dot's centre.
const dotPin = L.divIcon({
  className: 'vitamine-dot',
  html: `
    <div class="vd-wrap">
      <span class="vd-halo"></span>
      <span class="vd-halo vd-halo--delay"></span>
      <span class="vd-core"></span>
    </div>
  `,
  iconSize: [80, 80],
  iconAnchor: [40, 40],
  popupAnchor: [0, -16],
});

// Leaflet often computes the wrong size when its container is mounted via a
// dynamic import or starts with 0×0 dimensions. This invalidates the size on
// mount and after a tick so tiles actually paint.
function InvalidateSize() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
    const t = setTimeout(() => map.invalidateSize(), 200);
    return () => clearTimeout(t);
  }, [map]);
  return null;
}

export default function LocationMap() {
  const center: [number, number] = [LOCATIONS[0].lat, LOCATIONS[0].lng];

  return (
    <MapContainer
      center={center}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
      className="z-0"
      zoomControl={false}
    >
      <InvalidateSize />

      {/* CartoDB Voyager (no labels) — minimal, low-saturation base map.
          Free, no API key needed; attribution required. */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
        subdomains={['a', 'b', 'c', 'd']}
        maxZoom={20}
      />
      {/* Labels-only overlay painted on top so place names stay readable */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png"
        subdomains={['a', 'b', 'c', 'd']}
        maxZoom={20}
      />

      {LOCATIONS.map(loc => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={dotPin}>
          <Popup className="vitamine-popup">
            <div className="vp-pop">
              <div className="vp-pop-num">Vitamine</div>
              <div className="vp-pop-row">
                <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="vp-pop-cta">
                  Itinéraire →
                </a>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
