import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarWidgets from "@/components/SidebarWidgets";
import { getCategoryWidgets } from "@/data/widgets";
import Image from "next/image";
import type { Metadata } from "next";
import WillametteValleyGuide from "@/components/WillametteValleyGuide";
import BendBreweriesGuide from "@/components/BendBreweriesGuide";

export const metadata: Metadata = {
    title: "Wine & Brewery Destinations — EZtravelZ",
    description: "Explore the world's most breathtaking wine regions and craft breweries. From Oregon's Willamette Valley to Bend's thriving taproom scene — curated guides for the tasting traveler.",
    alternates: {
        canonical: "https://eztravelz.com/wine-destinations",
    },
    openGraph: {
        type: "website",
        url: "https://eztravelz.com/wine-destinations",
        siteName: "EZtravelZ",
        title: "Wine & Brewery Destinations — EZtravelZ",
        description: "Explore breathtaking wine regions and craft breweries. Oregon's Willamette Valley, Bend taprooms, Napa Valley, and beyond.",
        images: [
            {
                url: "https://eztravelz.com/images/Willamette.jpg",
                width: 1200,
                height: 630,
                alt: "Oregon's Willamette Valley wine country",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Wine & Brewery Destinations — EZtravelZ",
        description: "Willamette Valley, Bend breweries, Napa and more. Curated tasting travel guides from EZtravelZ.",
        images: ["https://eztravelz.com/images/Willamette.jpg"],
    },
};

export default function WineDestinationsPage() {
    return (
        <div className="min-h-screen font-sans flex flex-col relative bg-[#fff0d4]">
            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    {/* Hero section */}
                    <section className="relative text-white py-20 px-4 text-center border-b border-rose-900/50 overflow-hidden bg-black/50">
                        <div 
                            className="absolute inset-0 z-0 bg-cover bg-center opacity-75"
                            style={{ backgroundImage: "url('/images/Willamette.jpg')" }}
                        ></div>
                        <div className="relative z-10">
                            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                Wine &amp; Brewery Destinations
                            </h1>
                            <p className="text-lg md:text-xl text-rose-200 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
                                Sip your way through the world&apos;s most storied wine regions and craft breweries, from sun-drenched valleys to local taprooms.
                            </p>
                        </div>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                <div className="bg-[#37507a] rounded-3xl shadow-2xl border-2 border-white/20 backdrop-blur-sm p-8 mb-12 text-center" style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.3)' }}>
                                    <h2
                                        className="text-4xl md:text-5xl font-bold text-white flex flex-col items-center gap-2"
                                        style={{ fontFamily: "'Cinzel', serif" }}
                                    >
                                        <span>Oregon:</span>
                                        <span>A Mecca of Wine and Beer</span>
                                    </h2>
                                </div>
                                <WillametteValleyGuide />
                                <BendBreweriesGuide />
                            </div>

                            {/* Right Sidebar Area */}
                            <div className="lg:w-1/3">
                                <SidebarWidgets widgets={getCategoryWidgets('wine-destinations')} />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
