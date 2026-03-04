import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarWidgets from "@/components/SidebarWidgets";
import { getCategoryWidgets } from "@/data/widgets";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Culinary Quests — EZtravelZ",
    description: "Travel for the food. From Texas BBQ road trips to street food crawls, explore the world one bite at a time.",
};

export default function CulinaryQuestsPage() {
    return (
        <div className="min-h-screen font-sans flex flex-col relative">
            {/* Background Image with 50% transparency */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-orange-50 opacity-50"
                style={{ backgroundImage: "url('/images/BBQ.png')" }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    {/* Hero section */}
                    <section className="bg-brand-600/90 text-white py-20 px-4 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            Culinary Quests
                        </h1>
                        <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto">
                            Some trips are planned around the sights. The best ones are planned around the food. These are the journeys worth traveling hungry.
                        </p>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                <article className="bg-white/95 rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12 backdrop-blur-sm">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Eat Your Way There</h2>
                                    <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">
                                        <p className="lead text-xl text-slate-700 font-medium">
                                            The best food doesn&apos;t come from restaurants with press teams. It comes from pit masters who wake up at 3 AM, from family-run trattorias that don&apos;t have a website, and from roadside stands that have been perfecting one dish for decades.
                                        </p>

                                        <p>
                                            Culinary travel is about chasing those experiences — the meals that only exist in a specific place, made by specific hands, using recipes that don&apos;t translate to a different zip code.
                                        </p>

                                        <h3>The Texas BBQ Trail</h3>
                                        <p>
                                            Three days, five stops, a few hundred miles of Hill Country. From Franklin Barbecue&apos;s legendary brisket in Austin to the century-old pits at Smitty&apos;s Market in Lockhart, the Texas BBQ trail is one of America&apos;s great culinary pilgrimages. Bring patience — the best lines are worth every minute.
                                        </p>

                                        <h3>Street Food Crawl: Mexico City</h3>
                                        <p>
                                            Mexico City is arguably the greatest street food city on the planet. From al pastor tacos carved off a spinning trompo to tlacoyos stuffed with blue corn and fava beans, every neighborhood has its own specialties. The Mercado de la Merced alone could occupy an entire weekend.
                                        </p>

                                        <h3>The Amalfi Coast, Italy</h3>
                                        <p>
                                            Lemon groves, fresh seafood, handmade pasta with views of the Mediterranean. The Amalfi Coast offers some of the most beautiful settings for a meal anywhere in the world. The key is wandering off the main tourist path and into the family-run restaurants that line the quieter stretches of coast.
                                        </p>

                                        <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 mt-10 not-prose">
                                            <p className="text-brand-900 font-medium m-0 text-base">
                                                <em>Full culinary travel guides with restaurant recommendations, driving itineraries, and seasonal tips are coming soon. Subscribe below to get notified when new guides drop.</em>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            {/* Right Sidebar Area */}
                            <div className="lg:w-1/3">
                                <SidebarWidgets widgets={getCategoryWidgets('culinary-quests')} />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
