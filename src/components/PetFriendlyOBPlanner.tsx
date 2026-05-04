'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import {
  Clock,
  Dog,
  AlertTriangle,
  Waves,
  Mountain,
  Utensils,
  Navigation,
  MapPin,
  Phone,
  Camera,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const MAPS_KEY = process.env.NEXT_PUBLIC_MAPS_KEY ?? '';

function streetViewUrl(lat: number, lng: number) {
  return `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${lat},${lng}&fov=90&pitch=10&key=${MAPS_KEY}`;
}
import type { MapLocation, MapCategory } from './LocationMap';

/* ---------------------------------------------------------------------------
   Location data
   --------------------------------------------------------------------------- */

interface Location extends MapLocation {
  arrivalTime: string;
  duration: string;
  hours: string;
  address: string;
  phone: string | null;
  website: string | null;
  placeId: string;
  notes: string;
  tideNote: string | null;
}

const LOCATIONS: Location[] = [
  {
    id: 'newbreak',
    name: 'Newbreak Coffee & Cafe',
    category: 'dining',
    lat: 32.748925,
    lng: -117.251825,
    arrivalTime: '7:30 AM',
    duration: '60 min',
    hours: '7:00 AM to 2:00 PM daily',
    petPolicy: 'Leashed pups on outdoor patio',
    address: '1959 Abbott St, San Diego, CA 92107',
    phone: '619-224-6666',
    website: 'https://www.newbreakcafe.com/',
    placeId: 'ChIJBUOisDuq3oARubmW1MpnA-Y',
    notes:
      'Water bowls usually out, breakfast burrito and lavender latte are the order. Closes at 2 PM so this is strictly a morning stop.',
    tideNote: null,
  },
  {
    id: 'fiesta-island',
    name: 'Fiesta Island',
    category: 'off-leash',
    lat: 32.7713078,
    lng: -117.2159781,
    arrivalTime: '9:00 AM',
    duration: '90 min',
    hours: '4:00 AM to 10:00 PM daily',
    petPolicy: 'Off-leash (FIDO area, south end)',
    address: '1590 E Mission Bay Dr, San Diego, CA 92109',
    phone: '619-525-8213',
    website: null,
    placeId: 'ChIJAc7gW4eq3oARd2ZNz1Wd9d4',
    notes:
      'Fenced off-leash FIDO zone plus miles of open beach. No shade anywhere, so hit it in the morning when it is still cool. Free parking, fresh-water rinse stations on the loop.',
    tideNote: null,
  },
  {
    id: 'dog-beach',
    name: 'Ocean Beach Dog Beach',
    category: 'off-leash',
    lat: 32.7559746,
    lng: -117.2511508,
    arrivalTime: '11:00 AM',
    duration: '90 min',
    hours: 'Open 24 hours',
    petPolicy: 'Off-leash within designated boundaries',
    address: 'Dog Beach, San Diego, CA 92107',
    phone: null,
    website: null,
    placeId: 'ChIJObYoTc6r3oARWZ3Y1mYb43k',
    notes:
      'The original 24-hour off-leash beach. Dogs run, swim, and play freely north of the jetty where the San Diego River meets the ocean. Best at low tide when the sand flats stretch out. Rinse-off showers at the lot.',
    tideNote: 'Shines at low tide under 2 ft',
  },
  {
    id: 'mikes-taco',
    name: "Mike's Taco Club",
    category: 'dining',
    lat: 32.7476233,
    lng: -117.2520227,
    arrivalTime: '12:45 PM',
    duration: '45 min',
    hours: '9:00 AM to 9:00 PM (10 PM Fri & Sat)',
    petPolicy: 'Leashed pups at outdoor benches only',
    address: '5060 Newport Ave, San Diego, CA 92107',
    phone: null,
    website: 'https://www.mikestacoclub.com/',
    placeId: 'ChIJ9TBxRTqq3oARfDBVt6kOMLE',
    notes:
      'Grab-and-go taco counter with limited outdoor seating. Order the Trifecta Taco or grilled fish taco. If the benches are taken, walk your order two blocks to the OB Pier and eat there with your pup.',
    tideNote: null,
  },
  {
    id: 'sunset-cliffs',
    name: 'Sunset Cliffs Natural Park',
    category: 'hike',
    lat: 32.715915,
    lng: -117.2551679,
    arrivalTime: '2:00 PM',
    duration: '90 min',
    hours: 'Open 24 hours',
    petPolicy: 'On-leash only (6-ft max)',
    address: 'Ladera St, San Diego, CA 92107',
    phone: '619-525-8213',
    website: null,
    placeId: 'ChIJA65lSMOr3oARFZHgtdTySeo',
    notes:
      'Clifftop paths with constant ocean views. Keep pups leashed at all times. Cliff edges are unstable and there have been pet fatalities here. Stick to the main trail from Ladera Street heading south. No shade, bring water.',
    tideNote: null,
  },
  {
    id: 'cabrillo',
    name: 'Point Loma Tide Pools',
    category: 'no-dogs',
    lat: 32.6687607,
    lng: -117.2452555,
    arrivalTime: '4:00 PM',
    duration: '45 min',
    hours: '9:00 AM to 4:30 PM daily',
    petPolicy: 'No pets allowed (service animals only)',
    address: 'Lands End Rd, San Diego, CA 92106',
    phone: '619-557-5450',
    website: null,
    placeId: 'ChIJt4Yxpzis3oARNqPli2pGGIs',
    notes:
      'Flagged for honesty: pets are not permitted inside Cabrillo National Monument. Service animals only. Two options: skip this and stretch Sunset Cliffs, or one human visits while the other stays in the shaded lot with the pup. Park fee $20 per vehicle.',
    tideNote: 'Worth the trip at minus tides under 0.7 ft',
  },
  {
    id: 'pizza-port',
    name: 'Pizza Port Ocean Beach',
    category: 'dining',
    lat: 32.747995,
    lng: -117.2503534,
    arrivalTime: '5:30 PM',
    duration: '45 min',
    hours: '11:00 AM to 10:00 PM (11 PM Fri & Sat)',
    petPolicy: 'Leashed pups on back patio and sidewalk',
    address: '1956 Bacon St, San Diego, CA 92107',
    phone: '619-224-4700',
    website: 'https://pizzaport.com/',
    placeId: 'ChIJ49IcJjqq3oARUvM7xWSU6AM',
    notes:
      'Slice-by-slice pizza, West Coast IPAs on tap. Back patio and sidewalk tables welcome leashed pups. Energy runs high between kids, surfers, and other dogs, so your pup should be cool with commotion.',
    tideNote: null,
  },
  {
    id: 'ob-brewery',
    name: 'Ocean Beach Brewery',
    category: 'dining',
    lat: 32.7472516,
    lng: -117.2519524,
    arrivalTime: '6:30 PM',
    duration: '90 min',
    hours: '11:00 AM to 9:00 PM (10 PM Fri & Sat)',
    petPolicy: 'Leashed pups on rooftop and patio',
    address: '5041 Newport Ave, San Diego, CA 92107',
    phone: '619-955-8053',
    website: 'https://obbrewingco.com/',
    placeId: 'ChIJ1WF0Qzqq3oARTwB0dK8YZLU',
    notes:
      'Rooftop faces due west for sunset. Staff brings water bowls. Cilantro burger and a hard kombucha is the move. Happy hour deals until 6 PM on weekdays.',
    tideNote: null,
  },
];

/* ---------------------------------------------------------------------------
   Category definitions (shared with map for consistent colors)
   --------------------------------------------------------------------------- */

interface Category extends MapCategory {
  label: string;
  icon: LucideIcon;
}

const CATEGORIES: Category[] = [
  { id: 'all', label: 'Everything', icon: Dog, hex: '#44403c' },
  { id: 'off-leash', label: 'Off-Leash', icon: Waves, hex: '#0891b2' },
  { id: 'hike', label: 'Hikes & Views', icon: Mountain, hex: '#b45309' },
  { id: 'dining', label: 'Dog-Friendly Dining', icon: Utensils, hex: '#be123c' },
  { id: 'no-dogs', label: 'No Dogs Allowed', icon: AlertTriangle, hex: '#991b1b' },
];

/* ---------------------------------------------------------------------------
   Dynamic map import (Leaflet needs window)
   --------------------------------------------------------------------------- */

const LocationMap = dynamic(() => import('./LocationMap'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: '100%',
        width: '100%',
        minHeight: '500px',
        background: '#e7e5e4',
        animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
      }}
    />
  ),
});

/* ---------------------------------------------------------------------------
   Main planner component — embeds cleanly inside DogBeachArticle
   --------------------------------------------------------------------------- */

export default function PetFriendlyOBPlanner() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return LOCATIONS;
    return LOCATIONS.filter((loc) => loc.category === activeFilter);
  }, [activeFilter]);

  const activeCategory = CATEGORIES.find((c) => c.id === activeFilter)!;

  return (
    <div
      style={{
        background: '#faf7f2',
        color: '#1c1917',
        fontFamily: 'inherit',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.3)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
      }}
    >
      {/* ---------- Header ---------- */}
      <div
        style={{
          borderBottom: '1px solid #e7e5e4',
          padding: '24px 28px 20px',
          background: '#37507a',
          color: '#fff',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#fcd34d',
            fontWeight: 700,
            marginBottom: '8px',
          }}
        >
          Interactive Day Planner
        </p>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px', fontFamily: 'Georgia, serif' }}>
          🐾 Pet-Friendly OB — 8 Stops, One Perfect Day
        </h2>
        <p style={{ fontSize: '14px', color: '#dbeafe', lineHeight: 1.6, margin: 0 }}>
          Click a filter to find stops by type, then tap any card to highlight it on the map.
        </p>
      </div>

      {/* ---------- Filter chips ---------- */}
      <div
        style={{
          padding: '12px 16px',
          overflowX: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderBottom: '1px solid #e7e5e4',
          background: '#fff',
          position: 'sticky',
          top: 0,
          zIndex: 20,
        }}
      >
        <span
          style={{
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#78716c',
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          Filter
        </span>
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const active = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '999px',
                border: `1px solid ${active ? '#1c1917' : '#d6d3d1'}`,
                background: active ? '#1c1917' : '#fff',
                color: active ? '#faf7f2' : '#44403c',
                fontSize: '13px',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'all 0.15s',
              }}
            >
              <Icon size={13} strokeWidth={2} />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* ---------- Map + Itinerary split ---------- */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}
      >
        {/* Map column */}
        <div
          style={{
            height: '420px',
            borderBottom: '1px solid #e7e5e4',
          }}
        >
          <LocationMap
            locations={filtered}
            selectedId={selectedId}
            onSelect={setSelectedId}
            categories={CATEGORIES}
          />
        </div>

        {/* Itinerary column */}
        <div style={{ padding: '20px', maxHeight: '420px', overflowY: 'auto', background: '#faf7f2' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}
          >
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', margin: 0 }}>
              {activeFilter === 'all' ? 'The full day' : activeCategory.label}
            </h3>
            <span style={{ fontSize: '13px', color: '#78716c' }}>
              {filtered.length} {filtered.length === 1 ? 'stop' : 'stops'}
            </span>
          </div>

          {filtered.length === 0 ? (
            <p style={{ color: '#78716c', fontStyle: 'italic', fontSize: '14px' }}>
              No stops match this filter.
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filtered.map((loc, i) => (
                <LocationCard
                  key={loc.id}
                  location={loc}
                  index={activeFilter === 'all' ? i + 1 : null}
                  isSelected={loc.id === selectedId}
                  onSelect={() => setSelectedId(loc.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ---------- Footer note ---------- */}
      <div
        style={{
          borderTop: '1px solid #e7e5e4',
          padding: '16px 20px',
          background: 'rgba(255,255,255,0.5)',
        }}
      >
        <p style={{ fontSize: '13px', color: '#57534e', lineHeight: 1.6, margin: 0 }}>
          <strong>Tide tip:</strong> Pull up the NOAA San Diego tide chart before you head out. Dog Beach and
          the Point Loma tide pools both reward a low tide under two feet. Pack a collapsible water bowl, a
          spare leash, and a towel for the car.
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Location card
   --------------------------------------------------------------------------- */

function LocationCard({
  location,
  index,
  isSelected,
  onSelect,
}: {
  location: Location;
  index: number | null;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const category = CATEGORIES.find((c) => c.id === location.category)!;
  const Icon = category.icon;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}&destination_place_id=${location.placeId}`;
  const [imgError, setImgError] = useState(false);
  const svUrl = streetViewUrl(location.lat, location.lng);

  return (
    <article
      onClick={onSelect}
      style={{
        cursor: 'pointer',
        borderRadius: '14px',
        border: `1px solid ${isSelected ? '#1c1917' : '#e7e5e4'}`,
        background: '#fff',
        boxShadow: isSelected ? '0 4px 16px rgba(0,0,0,0.12)' : 'none',
        transition: 'all 0.15s',
        outline: isSelected ? '1px solid #1c1917' : 'none',
        overflow: 'hidden',
      }}
    >
      {/* Street View thumbnail */}
      {MAPS_KEY && !imgError ? (
        <div style={{ position: 'relative', width: '100%', height: '140px', background: '#e7e5e4', flexShrink: 0 }}>
          <img
            src={svUrl}
            alt={`Street view of ${location.name}`}
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              background: 'rgba(0,0,0,0.55)',
              color: '#fff',
              fontSize: '10px',
              padding: '3px 6px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            <Camera size={10} />
            Street View
          </div>
        </div>
      ) : (
        <div
          style={{
            width: '100%',
            height: '80px',
            background: `${category.hex}10`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon size={28} color={category.hex} strokeWidth={1.5} />
        </div>
      )}
      <div style={{ padding: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          {index !== null && (
            <div
              style={{
                flexShrink: 0,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontFamily: 'Georgia, serif',
                backgroundColor: `${category.hex}20`,
                color: category.hex,
              }}
            >
              {index}
            </div>
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            {location.arrivalTime && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#78716c',
                  marginBottom: '4px',
                  fontWeight: 700,
                }}
              >
                <Clock size={10} strokeWidth={2.5} />
                <span>
                  {location.arrivalTime} · {location.duration}
                </span>
              </div>
            )}
            <h4
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '16px',
                lineHeight: 1.3,
                marginBottom: '6px',
                color: '#1c1917',
              }}
            >
              {location.name}
            </h4>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '10px',
                fontWeight: 600,
                padding: '3px 8px',
                borderRadius: '999px',
                marginBottom: '8px',
                backgroundColor: `${category.hex}18`,
                color: category.hex,
              }}
            >
              <Icon size={10} strokeWidth={2.5} />
              {category.label}
            </div>
            <p style={{ fontSize: '13px', color: '#44403c', lineHeight: 1.55, margin: 0 }}>
              {location.notes}
            </p>

            {location.tideNote && (
              <div
                style={{
                  marginTop: '10px',
                  fontSize: '12px',
                  background: '#ecfeff',
                  color: '#164e63',
                  border: '1px solid #cffafe',
                  borderRadius: '8px',
                  padding: '6px 10px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <Waves size={11} />
                {location.tideNote}
              </div>
            )}

            <dl style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <dt style={{ color: '#78716c', width: '68px', flexShrink: 0, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, paddingTop: '1px' }}>
                  Pet policy
                </dt>
                <dd style={{ color: '#1c1917', fontWeight: 600, margin: 0 }}>{location.petPolicy}</dd>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <dt style={{ color: '#78716c', width: '68px', flexShrink: 0, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, paddingTop: '1px' }}>
                  Hours
                </dt>
                <dd style={{ color: '#1c1917', margin: 0 }}>{location.hours}</dd>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <dt style={{ color: '#78716c', width: '68px', flexShrink: 0, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, paddingTop: '1px' }}>
                  Address
                </dt>
                <dd style={{ color: '#1c1917', margin: 0 }}>{location.address}</dd>
              </div>
            </dl>

            <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#b45309',
                  textDecoration: 'none',
                }}
              >
                <Navigation size={13} />
                Get directions
              </a>
              {location.website && (
                <a
                  href={location.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#0891b2',
                    textDecoration: 'none',
                  }}
                >
                  <MapPin size={13} />
                  Visit website
                </a>
              )}
              {location.phone && (
                <a
                  href={`tel:${location.phone}`}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '13px',
                    color: '#78716c',
                    textDecoration: 'none',
                  }}
                >
                  <Phone size={13} />
                  {location.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
