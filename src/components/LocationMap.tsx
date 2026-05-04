'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export interface MapLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  category: string;
  petPolicy: string;
}

export interface MapCategory {
  id: string;
  hex: string;
}

/* Custom pin marker, colored by category */
function makeMarkerIcon(hex: string, isSelected: boolean) {
  const size = isSelected ? 38 : 30;
  const inner = isSelected ? 14 : 10;
  return L.divIcon({
    className: 'ob-custom-marker',
    html: `
      <div style="
        position: relative;
        width: ${size}px;
        height: ${size}px;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          position: absolute;
          inset: 0;
          background: ${hex};
          opacity: ${isSelected ? 0.25 : 0.15};
          border-radius: 50%;
          animation: ${isSelected ? 'obPulse 1.6s ease-in-out infinite' : 'none'};
        "></div>
        <div style="
          width: ${size * 0.65}px;
          height: ${size * 0.65}px;
          background: ${hex};
          border: 3px solid #faf7f2;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: ${inner * 0.5}px;
            height: ${inner * 0.5}px;
            background: #faf7f2;
            border-radius: 50%;
          "></div>
        </div>
      </div>
      <style>
        @keyframes obPulse {
          0%, 100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.4); opacity: 0.1; }
        }
      </style>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
}

/* Auto-fit the map to visible markers when they change */
function FitBounds({ locations }: { locations: MapLocation[] }) {
  const map = useMap();
  useEffect(() => {
    if (locations.length === 0) return;
    if (locations.length === 1) {
      map.setView([locations[0].lat, locations[0].lng], 14);
      return;
    }
    const bounds = L.latLngBounds(locations.map((l) => [l.lat, l.lng]));
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
  }, [locations, map]);
  return null;
}

interface LocationMapProps {
  locations: MapLocation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  categories: MapCategory[];
}

export default function LocationMap({ locations, selectedId, onSelect, categories }: LocationMapProps) {
  const getColor = (category: string) =>
    categories.find((c) => c.id === category)?.hex || '#44403c';

  // Default view centered on Ocean Beach
  const defaultCenter: [number, number] = [32.73, -117.24];
  const defaultZoom = 12;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      scrollWheelZoom
      style={{ height: '100%', width: '100%', background: '#f5f0e8' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds locations={locations} />
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={[loc.lat, loc.lng]}
          icon={makeMarkerIcon(getColor(loc.category), loc.id === selectedId)}
          eventHandlers={{
            click: () => onSelect(loc.id),
          }}
        >
          <Popup>
            <div style={{ fontFamily: 'inherit', minWidth: '160px' }}>
              <strong style={{ fontSize: '14px', display: 'block', marginBottom: '2px' }}>
                {loc.name}
              </strong>
              <span style={{ fontSize: '12px', color: '#57534e' }}>{loc.petPolicy}</span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
