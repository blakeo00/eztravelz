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
            {/* Background Image with 50% transparency */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: "url('/images/Paris Night.png')" }}
            ></div>
            {/* Dark overlay for dark mode */}
            <div className="fixed inset-0 z-0 bg-black/40"></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    {/* Hero section */}
                    <section className="bg-gray-900/90 text-white py-20 px-4 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            Culinary Quests
                        </h1>
                        <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
                            Some trips are planned around the sights. The best ones are planned around the food. These are the journeys worth traveling hungry.
                        </p>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                <article className="bg-gray-900/90 rounded-3xl shadow-2xl overflow-hidden border border-blue-700/50 p-8 md:p-12 backdrop-blur-sm" style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.15)' }}>

                                    <span className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
                                        Culinary Quests
                                    </span>

                                    <h2 className="text-4xl font-extrabold mt-3 mb-8 leading-tight text-white">
                                        Paris On A Plate. Where Every Meal Feels Like A Memory
                                    </h2>

                                    {/* Image 1 */}
                                    <img
                                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80"
                                        alt="Elegant Paris bistro dining"
                                        className="w-full rounded-2xl mb-8 object-cover h-72"
                                    />

                                    <p className="text-lg leading-relaxed mb-6 text-gray-300">
                                        Paris doesn&apos;t just feed you. It seduces you, one course at a time. From the
                                        first crack of a perfectly lacquered duck confit at a candlelit bistro on the
                                        Left Bank, to the unhurried ritual of a café au lait and a still-warm croissant
                                        at a zinc-topped counter while the city slowly wakes around you, dining in Paris
                                        is never just about the food. It&apos;s about the moment the food lives inside. The
                                        French didn&apos;t invent cuisine. They turned it into a philosophy.
                                    </p>

                                    <p className="text-lg leading-relaxed mb-6 text-gray-300">
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
                                        className="w-full rounded-2xl mb-8 object-cover h-72"
                                    />

                                    <p className="text-lg leading-relaxed text-gray-300">
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
                                <div className="bg-gray-900/90 rounded-2xl shadow-2xl overflow-hidden border border-blue-700/50 p-6 md:p-8 mt-8 backdrop-blur-sm text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">Explore Paris Experiences</h3>
                                    <p className="text-gray-400 mb-5 text-base">Curated food tours, cooking classes, and culinary adventures in the City of Light.</p>
                                    <a
                                        href="https://www.viator.com/partner-shop/eztravelz/Paris-2026?medium=link&medium_version=shop&campaign=Paris"
                                        target="_blank"
                                        rel="sponsored noopener noreferrer"
                                        className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-full transition-colors duration-200 text-lg shadow-md hover:shadow-lg"
                                    >
                                        Browse Paris Tours & Activities →
                                    </a>
                                    <p className="text-xs text-gray-500 mt-3">Powered by Viator</p>
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
