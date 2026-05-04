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
    alternates: {
        canonical: "https://eztravelz.com/pet-travel",
    },
    openGraph: {
        type: "website",
        url: "https://eztravelz.com/pet-travel",
        siteName: "EZtravelZ",
        title: "Paws, Waves & Freedom: The Original Dog Beach | EZtravelZ",
        description: "The Original Dog Beach in Ocean Beach, San Diego is the nation's first off-leash beach. Discover the history, pet-friendly hotels, and restaurants nearby.",
        images: [
            {
                url: "https://eztravelz.com/images/Dog on hike.png",
                width: 1200,
                height: 630,
                alt: "Dog on a scenic hike — pet-friendly travel",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Paws, Waves & Freedom: The Original Dog Beach | EZtravelZ",
        description: "San Diego's Original Dog Beach — America's first off-leash beach. Pet-friendly hotels, restaurants, and travel tips.",
        images: ["https://eztravelz.com/images/Dog on hike.png"],
    },
};

export default function PetTravelPage() {
    return (
        <div className="min-h-screen font-sans flex flex-col relative bg-[#fff0d4]">
            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    {/* Hero section */}
                    <section className="relative overflow-hidden text-white pt-32 pb-20 px-4 text-center border-2 border-black">
                        {/* Background Image with 75% Opacity */}
                        <div 
                            className="absolute inset-0 z-0 opacity-75 bg-center bg-cover"
                            style={{ backgroundImage: "url('/images/Dog on hike.png')" }}
                        ></div>
                        {/* Dark Overlay for better text readability */}
                        <div className="absolute inset-0 z-10 bg-black/50"></div>

                        {/* Paw Prints Background Overlay */}
                        <div className="absolute inset-0 z-20 pointer-events-none">
                            <Image src="/images/Paw.png" alt="Paw print" width={64} height={64} className="absolute top-28 left-[10%] transform -rotate-12 opacity-50" />
                            <Image src="/images/Paw.png" alt="Paw print" width={48} height={48} className="absolute bottom-10 left-[20%] transform rotate-12 opacity-50" />
                            <Image src="/images/Paw.png" alt="Paw print" width={56} height={56} className="absolute top-32 right-[20%] transform rotate-45 opacity-50" />
                            <Image src="/images/Paw.png" alt="Paw print" width={72} height={72} className="absolute bottom-8 right-[10%] transform -rotate-45 opacity-50" />
                        </div>
                        <div className="relative z-30 flex flex-col items-center justify-center text-center px-4">
                            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl text-white font-extrabold mb-6 font-serif drop-shadow-lg tracking-tight">
                                Paws &amp; Passports
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-100 break-words max-w-2xl mx-auto font-medium drop-shadow-md">
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
