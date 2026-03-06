import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarWidgets from "@/components/SidebarWidgets";
import { getCategoryWidgets } from "@/data/widgets";
import Image from "next/image";
import type { Metadata } from "next";

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
                    <section className="bg-brand-600/90 text-white py-20 px-4 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            Wine &amp; Brewery Destinations
                        </h1>
                        <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto">
                            Sip your way through the world&apos;s most storied wine regions and craft breweries, from sun-drenched valleys to local taprooms.
                        </p>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                <article className="bg-white/95 rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12 backdrop-blur-sm">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">A Toast to the Journey</h2>
                                    <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">
                                        <p className="lead text-xl text-slate-700 font-medium">
                                            Wine travel is about more than just the glass. It&apos;s about the valley the grapes grew in, the family that crushed them, and the story behind every bottle that made it to the table.
                                        </p>

                                        <p>
                                            Whether you&apos;re planning a weekend tasting tour in Sonoma County or a bucket-list harvest trip through Bordeaux, the best wine destinations reward curiosity as much as they reward your palate.
                                        </p>

                                        <h3>Napa &amp; Sonoma, California</h3>
                                        <p>
                                            America&apos;s most iconic wine region needs no introduction. Napa Valley packs over 400 wineries into a 30-mile corridor, ranging from grand estates like Robert Mondavi to hidden family operations accessible only by reservation. Sonoma County, just to the west, offers a more laid-back atmosphere with coastal pinot noirs and old-vine zinfandels.
                                        </p>

                                        <h3>Willamette Valley, Oregon</h3>
                                        <p>
                                            For lovers of Pinot Noir, Willamette Valley is a pilgrimage. Cool-climate vineyards draped across rolling hills produce some of the most expressive pinots outside of Burgundy. The town of McMinnville has become a food-and-wine destination in its own right, small, walkable, and packed with independent restaurants.
                                        </p>

                                        <h3>Hill Country, Texas</h3>
                                        <p>
                                            Texas wine country has been quietly building a reputation that surprises even seasoned travelers. The landscape around Fredericksburg is dotted with tasting rooms, and the region&apos;s Tempranillo and Mourvèdre varietals are earning national attention.
                                        </p>

                                        <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 mt-10 not-prose">
                                            <p className="text-brand-900 font-medium m-0 text-base">
                                                <em>Full destination guides with tasting itineraries, seasonal tips, and hotel recommendations are coming soon. Check back often or subscribe in the footer to get notified.</em>
                                            </p>
                                        </div>
                                    </div>
                                </article>
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
