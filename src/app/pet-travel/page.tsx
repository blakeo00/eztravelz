import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SidebarWidgets from '@/components/SidebarWidgets';
import { getCategoryWidgets } from '@/data/widgets';
import DogBeachArticle from '@/components/DogBeachArticle';

export const metadata: Metadata = {
    title: 'Paws, Waves & Freedom: The Original Dog Beach | EZtravelZ',
    description: "The Original Dog Beach in Ocean Beach, San Diego is the nation's first off-leash beach. Discover the history, pet-friendly hotels, and dog-welcoming restaurants nearby.",
};

export default function PetTravelPage() {
    return (
        <div className="min-h-screen font-sans flex flex-col relative bg-slate-950">
            {/* Background Image with transparency */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-slate-950 opacity-40 mix-blend-overlay"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1400&q=80')" }}
            ></div>
            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    {/* Hero section */}
                    <section className="bg-[#e07b2a]/90 text-white py-20 px-4 text-center border-b-4 border-[#c46922]">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-serif">
                            The Original Dog Beach
                        </h1>
                        <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto">
                            Ocean Beach, San Diego, CA. The nation's first off-leash beach.
                        </p>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                <DogBeachArticle />
                            </div>

                            {/* Right Sidebar Area */}
                            <div className="lg:w-1/3">
                                <SidebarWidgets widgets={getCategoryWidgets('pet-travel')} />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
