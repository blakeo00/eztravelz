'use client';

import React, { useEffect, useRef } from 'react';

export default function FlightSearchWidget() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clear if re-rendering in StrictMode to prevent duplicate widgets
        containerRef.current.innerHTML = '';

        const script = document.createElement('script');
        script.src = "https://tpwgts.com/content?currency=usd&campaign_id=100&promo_id=4054&zoom=2&height=500&width=800&light=%230f172a&secondary=%2394a3b8&primary=%2338bdf8&scrollwheel=true&show_logo=false&disable_zoom=false&draggable=true&radius=1&only_direct=false&round_trip=true&value_max=1000000&value_min=0&origin=LAS&locale=en&search_host=www.aviasales.com%2Fsearch&powered_by=true&lng=-115.172816&lat=36.114646&shmarker=417314.417314&trs=215716&theme=dark";
        script.async = true;
        script.charset = "utf-8";

        containerRef.current.appendChild(script);

    }, []);

    return (
        <section className="py-16 bg-slate-900 border-t border-slate-800">
            <div className="max-w-[850px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="section-heading text-3xl md:text-4xl text-white mb-4">
                        Search Global Flights
                    </h2>
                    <p className="hero-subtitle text-lg text-slate-400">
                        Interactive route map to discover the best airfare deals around the globe.
                    </p>
                </div>

                <div className="flex justify-center rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
                    <div
                        ref={containerRef}
                        className="w-full min-h-[500px]"
                        style={{ filter: "invert(90%) hue-rotate(180deg) brightness(1.1) contrast(1.1)" }}
                    >
                        {/* the tpwgts widget script injects content here */}
                    </div>
                </div>
            </div>
        </section>
    );
}
