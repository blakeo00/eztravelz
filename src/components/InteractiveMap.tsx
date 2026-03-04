'use client';

import React from 'react';

interface InteractiveMapProps {
    mapCode?: string;
}

export default function InteractiveMap({ mapCode }: InteractiveMapProps) {
    if (mapCode) {
        return (
            <div
                className="w-full interactive-map-container"
                dangerouslySetInnerHTML={{ __html: mapCode }}
            />
        );
    }

    // Default return is the Stay22 map
    return (
        <div className="w-full rounded-xl overflow-hidden shadow-md border border-brand-200 bg-white">
            <iframe
                id="stay22-widget"
                width="100%"
                height="428"
                src="https://stay22.com/embed/69a76dbfabe79180350d13cf"
                frameBorder="0"
                title="Stay22 Interactive Accommodations Map"
                className="w-full bg-slate-50"
            />
        </div>
    );
}
