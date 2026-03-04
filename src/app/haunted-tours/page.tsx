import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarWidgets from "@/components/SidebarWidgets";
import { getCategoryWidgets } from "@/data/widgets";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Haunted Tours & Ghost Adventures — EZtravelZ",
    description: "Explore the most chilling and historically rich haunted destinations. Book your ultimate ghost tour adventure today.",
};

export default function HauntedToursPage() {
    return (
        <div className="min-h-screen font-sans flex flex-col relative">
            {/* Background Image with 50% transparency */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-gray-50 opacity-50"
                style={{ backgroundImage: "url('/images/Spooky corodior.png')" }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    {/* Hero section */}
                    <section className="bg-brand-600/90 text-white py-20 px-4 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            Haunted Tours
                        </h1>
                        <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto">
                            Dare to explore the unknown? Discover the most chilling, historically rich haunted destinations across the country.
                        </p>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                <div className="bg-white/95 rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12 text-center backdrop-blur-sm">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Book Your Ghost Adventure</h2>
                                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
                                        Ready for a spine-tingling experience? We've partnered with US Ghost Adventures to bring you the best and most terrifying tours available. Book your tour below and prepare for a night you won't forget.
                                    </p>

                                    {/* Affiliate Link Centerpiece */}
                                    <div className="flex justify-center items-center py-6">
                                        <a href="https://usghostadventures.com/?tap_a=151137-ec41b6&ref=mju3ytb" target="_BLANK" rel="nofollow" className="inline-block transform hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl rounded-xl overflow-hidden">
                                            <img src="https://static.tapfiliate.com/67b8df97c1aa0267821125.jpg?a=151137-ec41b6" alt="US Ghost Adventures" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right Sidebar Area */}
                            <div className="lg:w-1/3">
                                <SidebarWidgets widgets={getCategoryWidgets('haunted-tours')} />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
