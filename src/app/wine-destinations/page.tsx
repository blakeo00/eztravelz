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
    description: "Explore the world's most breathtaking wine regions and craft breweries. From Napa Valley to local taprooms, discover curated guides for the tasting traveler.",
};

export default function WineDestinationsPage() {
    return (
        <div className="min-h-screen font-sans flex flex-col relative">
            {/* Background Image with 50% transparency */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-amber-50 opacity-50"
                style={{ backgroundImage: "url('/images/Vineyard.png')" }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    {/* Hero section */}
                    <section className="bg-rose-950/95 text-white py-20 px-4 text-center border-b border-rose-900/50">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            Wine &amp; Brewery Destinations
                        </h1>
                        <p className="text-lg md:text-xl text-rose-200 max-w-2xl mx-auto">
                            Sip your way through the world&apos;s most storied wine regions and craft breweries, from sun-drenched valleys to local taprooms.
                        </p>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                <div className="bg-slate-900/90 rounded-3xl shadow-xl border border-slate-800 backdrop-blur-md p-8 mb-12 text-center">
                                    <h2
                                        className="text-4xl md:text-5xl font-bold text-amber-500 flex flex-col items-center gap-2"
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
