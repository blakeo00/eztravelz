import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarWidgets from "@/components/SidebarWidgets";
import WorldCupGuide from "@/components/WorldCupGuide";
import { getCategoryWidgets } from "@/data/widgets";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "2026 FIFA World Cup Fan Travel Guide — EZtravelZ",
    description: "The complete fan's travel guide to the 2026 FIFA World Cup. Where to stay in Mexico City, Miami, and New York, how to get to the stadiums, and what to do between matches.",
    alternates: {
        canonical: "https://eztravelz.com/sports-travel",
    },
    openGraph: {
        type: "website",
        url: "https://eztravelz.com/sports-travel",
        siteName: "EZtravelZ",
        title: "2026 FIFA World Cup Fan Travel Guide — EZtravelZ",
        description: "Mexico City for the opening. Miami for the mid-tournament fire. New York for the Final. The complete fan travel guide to World Cup 2026.",
        images: [
            {
                url: "https://eztravelz.com/images/FIFA.png",
                width: 1200,
                height: 630,
                alt: "2026 FIFA World Cup — USA, Canada & Mexico",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "2026 FIFA World Cup Fan Travel Guide — EZtravelZ",
        description: "Mexico City. Miami. New York. The complete fan travel guide to World Cup 2026 from EZtravelZ.",
        images: ["https://eztravelz.com/images/FIFA.png"],
    },
};

export default function SportsTravelPage() {
    return (
        <div className="min-h-screen font-sans flex flex-col relative bg-[#fff0d4]">

            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    {/* Hero section */}
                    <section className="relative py-20 px-4 text-center overflow-hidden bg-black">
                        {/* Background Image with 75% transparency */}
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center opacity-75"
                            style={{ backgroundImage: "url('/images/Stands.png')" }}
                        ></div>
                        <div className="absolute inset-0 z-0 bg-black/40"></div>

                        <div className="relative z-10">
                            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg">
                                Sports Travel & Events
                            </h1>
                            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                                Follow your favorite teams across the globe and turn every game day into an unforgettable adventure.
                            </p>
                        </div>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            <div className="lg:w-2/3">
                                {/* World Cup 2026 Guide */}
                                <WorldCupGuide />
                            </div>

                            {/* Right Sidebar Area */}
                            <div className="lg:w-1/3">
                                <SidebarWidgets widgets={getCategoryWidgets('sports-travel')} />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
