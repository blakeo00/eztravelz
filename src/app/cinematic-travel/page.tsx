import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarWidgets from "@/components/SidebarWidgets";
import FilmFestivalsGuide from "@/components/FilmFestivalsGuide";
import CannesGuide from "@/components/CannesGuide";
import { getCategoryWidgets } from "@/data/widgets";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cinematic Travel — EZtravelZ",
    description: "Travel to the real locations behind your favorite films and TV shows. Curated guides for the cinematic traveler.",
};

export default function CinematicTravelPage() {
    return (
        <div className="min-h-screen font-sans flex flex-col relative">
            {/* Background Image with 50% transparency */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-gray-950 opacity-60"
                style={{ backgroundImage: "url('/images/Movie.png')" }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    {/* Hero section */}
                    <section className="bg-yellow-900/90 text-white py-20 px-4 text-center">
                        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            Cinematic Travel
                        </h1>
                        <p className="text-lg md:text-xl text-yellow-200 max-w-2xl mx-auto">
                            Stand where your favorite scenes were filmed. From haunted hotels to epic landscapes, these are the real places behind the reel magic.
                        </p>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                {/* Cinematic Travel Guide */}
                                <FilmFestivalsGuide />
                                <CannesGuide />

                            </div>

                            {/* Right Sidebar Area */}
                            <div className="lg:w-1/3">
                                <SidebarWidgets widgets={getCategoryWidgets('cinematic-travel')} />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
