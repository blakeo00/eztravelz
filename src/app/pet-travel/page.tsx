import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InteractiveMap from '@/components/InteractiveMap';
import SidebarWidgets from '@/components/SidebarWidgets';
import { getCategoryWidgets } from '@/data/widgets';
export const metadata: Metadata = {
    title: 'Pet Travel Guide | EZtravelZ',
    description: 'The ultimate guide to pet-friendly properties. Discover the best resorts for you and your four-legged companion.',
};

export default function PetTravelPage() {
    return (
        <div className="min-h-screen font-sans flex flex-col relative">
            {/* Background Image with 50% transparency */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-slate-50 opacity-50"
                style={{ backgroundImage: "url('/images/Vegas Strip.png')" }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />

                <main className="flex-grow max-w-7xl mx-auto px-4 py-12 md:py-16 w-full">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Main Content Area */}
                        <div className="lg:w-2/3">
                            <article className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-100">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-8 font-serif text-center sm:text-left">
                                    Pet Friendly Hotels on the Vegas Strip
                                </h1>

                                {/* Map displayed prominently on top of the guide */}
                                <div className="mb-12 rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                    <InteractiveMap />
                                </div>

                                <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">
                                    <p className="lead text-xl text-slate-700 font-medium">
                                        While the flashing lights of a crowded casino floor might not sound like the ideal environment for a pet, the city has evolved dramatically in recent years. Today, some of the most luxurious properties in town roll out the red carpet for four-legged guests.
                                    </p>

                                    <p>
                                        Whether you are flying in for a long weekend or just booking a quiet local staycation to escape the desert heat, finding the right pet-friendly resort is the key to a stress-free trip. Here is a breakdown of the best options across the valley.
                                    </p>

                                    <h2>Luxury on the Strip</h2>
                                    <p>If you want to be in the center of the action, you don{"'"}t have to sacrifice pet accommodations.</p>

                                    <ul>
                                        <li>
                                            <strong><a href="https://cosmopolitanlasvegas.mgmresorts.com/en/hotel.html" target="_blank" rel="sponsored noopener noreferrer">The Cosmopolitan of Las Vegas</a>:</strong> A polished, 5-star property right in the heart of the Strip. They are famously dog-friendly, offering dedicated dog runs and a special welcome box featuring treats and toys.
                                        </li>
                                        <li>
                                            <strong><a href="https://mandalaybay.mgmresorts.com/en/hotel.html" target="_blank" rel="sponsored noopener noreferrer">Mandalay Bay</a>:</strong> Located on the south end of the Strip, this elegant casino hotel provides a true resort feel. Their pet program includes a specialized room service menu just for animals.
                                        </li>
                                        <li>
                                            <strong><a href="https://www.caesars.com/linq/hotel" target="_blank" rel="sponsored noopener noreferrer">The LINQ Hotel & Experience</a>:</strong> A vibrant, centrally located option surrounded by outdoor dining and entertainment spaces. The open-air LINQ Promenade makes it incredibly easy to step outside for a quick, safe walk.
                                        </li>
                                    </ul>

                                    <h2>Off-Strip Escapes</h2>
                                    <p>If the flashing lights of Las Vegas Boulevard are too stimulating for your companion, the surrounding neighborhoods offer fantastic, quieter alternatives.</p>
                                    <ul>
                                        <li>
                                            <strong><a href="https://www.vacationvillageresorts.com/grandview_las_vegas/accommodations.html" target="_blank" rel="sponsored noopener noreferrer">The Grandview at Las Vegas</a>:</strong> Located further south, this property offers unfussy suites with full kitchens. It is highly practical for longer stays or travelers who prefer a relaxed environment away from the gaming floors, with plenty of desert landscaping for morning walks.
                                        </li>
                                    </ul>

                                    <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 mt-10 not-prose">
                                        <p className="text-brand-900 font-medium m-0 text-base">
                                            <em>Always remember to call the front desk after booking to confirm their specific weight limits and pet fees, as these policies frequently update.</em>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        {/* Right Sidebar Area */}
                        <div className="lg:w-1/3">
                            <SidebarWidgets widgets={getCategoryWidgets('pet-travel')} />
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}
