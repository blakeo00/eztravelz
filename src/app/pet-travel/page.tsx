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
        <div className="min-h-screen font-sans flex flex-col bg-[#fdfaf6]">
            {/* Header */}
            <Header />

            {/* Hero Image */}
            <div className="w-full relative h-[300px] md:h-[480px] border-b-4 border-[#e07b2a]">
                <Image
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1400&q=80"
                    alt="Happy dog running freely on a sunny California beach"
                    fill
                    priority
                    className="object-cover"
                    unoptimized
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <main className="flex-grow max-w-[1200px] mx-auto px-4 py-12 md:py-16 w-full">
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
                </main>

                <Footer />
            </div>
        </div>
    );
}
