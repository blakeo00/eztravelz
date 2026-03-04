import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarWidgets from "@/components/SidebarWidgets";
import { getCategoryWidgets } from "@/data/widgets";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Set-Jetting: Cinematic Travel — EZtravelZ",
    description: "Travel to the real locations behind your favorite films and TV shows. Curated guides for the cinematic traveler.",
};

export default function CinematicTravelPage() {
    return (
        <div className="min-h-screen font-sans flex flex-col relative">
            {/* Background Image with 50% transparency */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-slate-50 opacity-50"
                style={{ backgroundImage: "url('/images/Movie.png')" }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    {/* Hero section */}
                    <section className="bg-brand-600/90 text-white py-20 px-4 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            Set-Jetting
                        </h1>
                        <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto">
                            Stand where your favorite scenes were filmed. From haunted hotels to epic landscapes, these are the real places behind the reel magic.
                        </p>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                <article className="bg-white/95 rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12 backdrop-blur-sm">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Travel the Screen</h2>
                                    <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">
                                        <p className="lead text-xl text-slate-700 font-medium">
                                            Set-jetting — traveling to real-world filming locations — has become one of the fastest-growing travel trends in the world. And for good reason: standing in the place where your favorite scene was shot hits differently than watching it on a screen.
                                        </p>

                                        <p>
                                            Whether it&apos;s the misty corridors of a Colorado hotel that inspired Stephen King, the sweeping New Zealand landscapes that became Middle-earth, or the sun-drenched Italian coastline from a hit HBO series, cinematic travel turns passive watching into active experience.
                                        </p>

                                        <h3>The Stanley Hotel — Estes Park, Colorado</h3>
                                        <p>
                                            The grand white Georgian Revival hotel that inspired <em>The Shining</em>. Stephen King stayed in Room 217 in 1974 and dreamed the nightmare that became one of the most famous horror novels ever written. The hotel still runs ghost tours and plays Kubrick&apos;s film on a continuous loop in every room.
                                        </p>

                                        <h3>Hobbiton — Matamata, New Zealand</h3>
                                        <p>
                                            Peter Jackson&apos;s permanent set for the Shire from <em>The Lord of the Rings</em> and <em>The Hobbit</em> trilogies is the world&apos;s most visited filming location. The 12-acre set features 44 hobbit holes, the Green Dragon Inn, and rolling green countryside that looks exactly like it does on screen.
                                        </p>

                                        <h3>Dubrovnik, Croatia</h3>
                                        <p>
                                            Known to millions as King&apos;s Landing from <em>Game of Thrones</em>, Dubrovnik&apos;s medieval walls and limestone streets are stunning in their own right. Walking tours trace the exact paths of Cersei&apos;s walk of shame, Joffrey&apos;s balcony, and the Red Keep.
                                        </p>

                                        <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 mt-10 not-prose">
                                            <p className="text-brand-900 font-medium m-0 text-base">
                                                <em>Full cinematic travel guides — with driving directions, hotel picks near filming locations, and behind-the-scenes history — are coming soon. Check back often or subscribe below.</em>
                                            </p>
                                        </div>
                                    </div>
                                </article>
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
