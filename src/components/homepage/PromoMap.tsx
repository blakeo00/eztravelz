'use client';

import React from 'react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';

const MAPS_KEY = process.env.NEXT_PUBLIC_MAPS_KEY ?? '';

const MAP_STYLES = [
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#a8d5e5' }] },
  { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f5f0e8' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#d6c9a0' }] },
  { featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
  { featureType: 'administrative', elementType: 'labels.text.fill', stylers: [{ color: '#37507a' }] },
];

export default function PromoMap() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAPS_KEY
    });

    if (!isLoaded) {
        return <div className="w-full h-full bg-[#f5f0e8]" />;
    }

    return (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%', pointerEvents: 'none' }}
            center={{ lat: 20, lng: 0 }}
            zoom={1}
            options={{ 
                styles: MAP_STYLES, 
                disableDefaultUI: true, 
                gestureHandling: 'none',
                keyboardShortcuts: false
            }}
        />
    );
}
