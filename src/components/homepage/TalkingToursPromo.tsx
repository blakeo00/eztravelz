'use client';

import React from 'react';
import Link from 'next/link';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';


export default function TalkingToursPromo() {
    return (
        <section className="bg-[var(--color-navy-base)] border-t border-[var(--color-gold-base)] border-opacity-30 py-[36px] px-[26px]">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Left Column: Content */}
                <div>
                    <Eyebrow variant="navy">EZtravelZ talking tours</Eyebrow>
                    <h2 className="font-cinzel text-[26px] md:text-[32px] text-[var(--color-cream-base)] mt-3 leading-tight">
                        Take a Tour from your Chair
                    </h2>
                    <p className="font-sans text-[14px] md:text-[15px] text-[var(--color-cream-base)] opacity-90 mt-4 mb-8 max-w-[480px] leading-relaxed">
                        Hear the stories about the places you want to visit from the comfort of your home. Click on the Map to start your Journey
                    </p>
                    <Button href="/talking-tours" variant="primary" className="px-6 py-3">
                        Open the map
                    </Button>
                </div>

                {/* Right Column: Visual Interactive Map Box */}
                <Link 
                    href="/talking-tours"
                    className="group relative bg-[var(--color-cream-base)] border border-[var(--color-gold-base)] border-opacity-30 rounded-xl h-[320px] p-[20px] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-opacity-100 hover:shadow-[0_0_30px_rgba(214,201,160,0.3)] hover:-translate-y-1 block"
                >
                    {/* Background subtle gradient on hover */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,201,160,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />
                    
                    <div className="flex justify-between items-start z-20 relative">
                        <span className="font-cinzel text-[10px] uppercase text-[var(--color-navy-light)] font-bold tracking-[0.2em] transition-colors duration-300 group-hover:text-[var(--color-navy-base)] bg-[rgba(255,255,255,0.7)] backdrop-blur-sm px-2 py-1 rounded">
                            Interactive Map
                        </span>
                        <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-2 text-[var(--color-cream-base)] text-[10px] font-cinzel uppercase tracking-wider bg-[var(--color-navy-base)] px-3 py-1 rounded-full border border-[var(--color-gold-base)] border-opacity-30 shadow-lg">
                            Launch Tour <span>→</span>
                        </div>
                    </div>
                    
                    {/* Worldmap background image */}
                    <div className="absolute inset-0 z-0 transition-opacity duration-500">
                        <img
                            src="/images/Worldmap.jpg"
                            alt="World map"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    
                    {/* Overlay to ensure clicks pass through to the Link and map can't be interacted with */}
                    <div className="absolute inset-0 z-30 bg-transparent" />
                </Link>

            </div>
        </section>
    );
}
