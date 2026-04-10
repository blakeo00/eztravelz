import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarWidgets from "@/components/SidebarWidgets";
import DansLeNoirArticle from "@/components/DansLeNoirArticle";

import { getCategoryWidgets } from "@/data/widgets";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Culinary Quests — EZtravelZ",
    description: "Travel for the food. From Texas BBQ road trips to street food crawls, explore the world one bite at a time.",
};

export default function CulinaryQuestsPage() {
    return (
        <div className="min-h-screen font-sans flex flex-col relative">
            {/* Background Gradient */}
            <div className="fixed inset-0 z-0 bg-[#fff0d4]"></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    {/* Hero section */}
                    <section className="relative text-white py-20 px-4 min-h-[300px] flex flex-col justify-center items-center text-center border-b-2 border-black overflow-hidden">
                        {/* Background Image with 75% Opacity */}
                        <div 
                            className="absolute inset-0 z-0 opacity-75 bg-center bg-cover"
                            style={{ backgroundImage: "url('/images/Dinner.png')" }}
                        ></div>
                        {/* Dark Overlay for better text readability */}
                        <div className="absolute inset-0 z-10 bg-black/40"></div>
                        
                        <div className="relative z-20 w-full">
                            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
                                Culinary Quests
                            </h1>
                            <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-md">
                                Some trips are planned around the sights. The best ones are planned around the food. These are the journeys worth traveling hungry.
                            </p>
                        </div>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                <article className="bg-[#37507a] rounded-3xl shadow-2xl overflow-hidden border-2 border-white/20 p-8 md:p-12 backdrop-blur-sm" style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.3)' }}>

                                    <span className="text-white uppercase tracking-widest text-sm font-bold">
                                        Culinary Quests
                                    </span>

                                    <h2 className="text-4xl font-extrabold mt-3 mb-8 leading-tight text-white">
                                        Paris On A Plate. Where Every Meal Feels Like A Memory
                                    </h2>

                                    {/* Image 1 */}
                                    <img
                                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80"
                                        alt="Elegant Paris bistro dining"
                                        className="w-full rounded-2xl mb-8 object-cover h-72 border-2 border-black"
                                    />

                                    <p className="text-lg leading-relaxed mb-6 text-white font-medium">
                                        Paris doesn&apos;t just feed you. It seduces you, one course at a time. From the
                                        first crack of a perfectly lacquered duck confit at a candlelit bistro on the
                                        Left Bank, to the unhurried ritual of a café au lait and a still-warm croissant
                                        at a zinc-topped counter while the city slowly wakes around you, dining in Paris
                                        is never just about the food. It&apos;s about the moment the food lives inside. The
                                        French didn&apos;t invent cuisine. They turned it into a philosophy.
                                    </p>

                                    <p className="text-lg leading-relaxed mb-6 text-white font-medium">
                                        The city rewards the curious and the unhurried. Skip the tourist traps draped
                                        in chalkboard menus written in broken English, and instead duck into the narrow
                                        arrondissements where locals have been eating at the same tables for generations.
                                        In Le Marais, hole-in-the-wall brasseries serve steak frites that could make a
                                        grown traveler weep quietly. In Montmartre, tiny wine bars pour natural Burgundies
                                        by the glass while the sun drops gold across the cobblestones outside.
                                    </p>

                                    {/* Image 2 */}
                                    <img
                                        src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=80"
                                        alt="Fresh croissants at a Paris café"
                                        className="w-full rounded-2xl mb-8 object-cover h-72 border-2 border-black"
                                    />

                                    <p className="text-lg leading-relaxed text-white font-medium">
                                        And then there&apos;s the market culture. The Marché d&apos;Aligre on a Saturday morning
                                        is nothing short of a religious experience, vendors calling out over towers of
                                        aged cheese, loose-leaf herbs, and blood oranges stacked like small suns. Buy
                                        something. Eat it right there on the street, without a plate or a plan. That,
                                        more than any Michelin star, is the real Paris on a plate. Some cities feed your
                                        body. Paris feeds something harder to name, and you&apos;ll spend years trying to
                                        get back to it.
                                    </p>

                                </article>

                                {/* Viator Paris Experiences Link */}
                                <div className="bg-[#37507a] rounded-2xl shadow-2xl overflow-hidden border-2 border-white/20 p-6 md:p-8 mt-8 backdrop-blur-sm text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">Explore Paris Experiences</h3>
                                    <p className="text-white font-medium mb-5 text-base">Curated food tours, cooking classes, and culinary adventures in the City of Light.</p>
                                    <a
                                        href="https://www.viator.com/partner-shop/eztravelz/Paris-2026?medium=link&medium_version=shop&campaign=Paris"
                                        target="_blank"
                                        rel="sponsored noopener noreferrer"
                                        className="inline-block bg-[#fff0d4] hover:bg-white text-[#37507a] font-bold px-8 py-3 rounded-full transition-colors duration-200 text-lg shadow-md hover:shadow-lg"
                                    >
                                        Browse Paris Tours & Activities →
                                    </a>
                                    <p className="text-xs text-white font-medium mt-3">Powered by Viator</p>
                                </div>

                                <DansLeNoirArticle />
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
