import React from 'react';
import ExpediaWidget from '../ExpediaWidget';
import TalkingTourFeature from './TalkingTourFeature';

export default function PlanTheLogistics() {
    return (
        <section className="bg-[var(--color-navy-base)] py-[30px] px-[26px] border-t-2 border-[var(--color-gold-base)]/40">
            <div className="max-w-[1200px] mx-auto">

                <div className="flex flex-col gap-8">
                    {/* Expedia Search Widget */}
                    <div className="w-full">
                        <ExpediaWidget />
                    </div>

                    {/* Talking Tour Feature Destination */}
                    <div className="w-full">
                        <TalkingTourFeature />
                    </div>

                    {/* Ticketmaster Affiliate Banner */}
                    <div className="w-full">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 via-blue-800 to-indigo-900 group">
                            {/* Decorative pattern overlay */}
                            <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-indigo-500 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>
                            
                            <div className="relative px-6 py-10 sm:px-12 sm:py-14 flex flex-col md:flex-row items-center justify-between z-10 w-full gap-8">
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3">Live Events, Unforgettable Memories</h3>
                                    <p className="text-blue-100 max-w-2xl text-lg">Secure your seats to the hottest concerts, sports games, theater performances, and family shows in any destination you choose.</p>
                                </div>
                                <a
                                    href="https://ticketmaster.evyy.net/c/7157806/264167/4272?u=https%3A%2F%2Fwww.ticketmaster.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 bg-white text-blue-700 hover:bg-gray-50 hover:text-blue-800 font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] text-lg inline-flex items-center gap-3 backdrop-blur-sm"
                                >
                                    Search Ticketmaster
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
