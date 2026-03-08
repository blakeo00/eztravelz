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
                    <section className="relative overflow-hidden bg-sky-700/95 text-white pt-32 pb-20 px-4 text-center border-b-4 border-sky-800">
                        {/* Paw Prints Background Overlay */}
                        <div className="absolute inset-0 z-0 pointer-events-none">
                            <Image src="/images/paw.png" alt="Paw print" width={64} height={64} className="absolute top-28 left-[10%] transform -rotate-12 opacity-90 invert" />
                            <Image src="/images/paw.png" alt="Paw print" width={48} height={48} className="absolute bottom-10 left-[20%] transform rotate-12 opacity-90 invert" />
                            <Image src="/images/paw.png" alt="Paw print" width={56} height={56} className="absolute top-32 right-[20%] transform rotate-45 opacity-90 invert" />
                            <Image src="/images/paw.png" alt="Paw print" width={72} height={72} className="absolute bottom-8 right-[10%] transform -rotate-45 opacity-90 invert" />
                        </div>
                        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                            <h1 className="hero-title text-white font-extrabold mb-6 font-serif">
                                Paws & Passports
                            </h1>
                            <p className="text-lg md:text-xl text-sky-100 break-words max-w-2xl mx-auto font-medium">
                                Discover dog-friendly destinations, accommodations, and adventures for you and your furry best friend.
                            </p>
                        </div>
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
