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
                className="fixed inset-0 z-0 bg-cover bg-center bg-gray-950 opacity-60"
                style={{ backgroundImage: "url('/images/Spooky corodior.png')" }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    {/* Hero section */}
                    <section className="bg-black/95 text-red-600 pt-24 pb-20 px-4 text-center relative border-b border-red-900/50 overflow-hidden">
                        <div className="relative z-10">
                            <h1
                                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-widest mb-6"
                                style={{ fontFamily: "var(--font-creepster)", textShadow: "3px 3px 6px rgba(185, 28, 28, 0.4)" }}
                            >
                                Haunted Tours
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
                                Dare to explore the unknown? Discover the most chilling, historically rich haunted destinations across the country.
                            </p>
                        </div>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                {/* Lizzie Borden Article */}
                                <article className="bg-gray-900/90 rounded-3xl shadow-2xl overflow-hidden border border-purple-700/50 p-8 md:p-12 backdrop-blur-sm" style={{ boxShadow: '0 0 30px rgba(147, 51, 234, 0.15)' }}>

                                    <span className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
                                        Haunted Tours
                                    </span>

                                    <h2 className="text-4xl font-extrabold mt-3 mb-4 leading-tight text-red-500" style={{ fontFamily: "var(--font-creepster)" }}>
                                        Forty Whacks, And A House That Never Forgot
                                    </h2>

                                    <p className="text-purple-300/70 text-sm mb-8">
                                        Fall River, Massachusetts · Est. 1892 · Open Year-Round
                                    </p>

                                    <img
                                        src="/images/borden.jpg"
                                        alt="The Lizzie Borden House — Fall River, Massachusetts"
                                        className="w-full rounded-2xl mb-8 object-cover h-72"
                                    />

                                    <p className="text-lg leading-relaxed mb-6 text-gray-300">
                                        On the morning of August 4th, 1892, something unspeakable happened inside
                                        a quiet Victorian home at 92 Second Street in Fall River, Massachusetts.
                                        Andrew and Abby Borden were found brutally murdered, and their daughter
                                        Lizzie, the most likely suspect, walked free. The case was never truly solved.
                                        The axe was never conclusively traced. And the house? The house held onto
                                        everything. More than 130 years later, the Lizzie Borden Bed &amp; Breakfast stands
                                        exactly where the bodies fell, and guests still check in, lights off, hoping
                                        to feel what the walls remember.
                                    </p>

                                    <p className="text-lg leading-relaxed mb-6 text-gray-300">
                                        What visitors report inside is difficult to explain away. Cold spots appear
                                        without draft or ventilation shift. Disembodied footsteps echo on the staircase
                                        at 3 a.m. The unmistakable feeling of being watched settles over Abby&apos;s guest
                                        room, the very room where she was found face-down on the floor. Shadow figures
                                        have been photographed in doorways. EMF meters spike near the sitting room where
                                        Andrew Borden&apos;s body was discovered, still wearing his boots, still on the couch.
                                        Paranormal investigators from across the country call this one of the most
                                        legitimately active sites in New England, not because of legend, but because
                                        of what their equipment keeps picking up.
                                    </p>

                                    <img
                                        src="/images/Lizzie2.jpg"
                                        alt="Inside the Lizzie Borden House"
                                        className="w-full rounded-2xl mb-8 object-cover h-72"
                                    />

                                    <p className="text-lg leading-relaxed mb-8 text-gray-300">
                                        You can sleep here. That&apos;s the part that separates Lizzie&apos;s house from every
                                        haunted tour in America. You don&apos;t just walk through, you stay the night.
                                        Book the Abby Borden room if you&apos;re serious. Lie in the dark. Listen. The house
                                        has a way of making believers out of skeptics by morning. Whatever happened here,
                                        whatever energy soaked into the floorboards that summer, it has never fully left.
                                        Fall River remembers. And if you&apos;re brave enough to visit, you will too.
                                    </p>

                                    {/* CTA — US Ghost Adventures Affiliate */}
                                    <div className="mt-8 text-center">
                                        <a
                                            href="https://usghostadventures.com?tap_a=149596-26ae1d&ref=mju3ytb"
                                            target="_blank"
                                            rel="nofollow noopener noreferrer"
                                            className="inline-block transform hover:scale-105 transition-transform duration-300 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl"
                                        >
                                            <img
                                                src="https://static.tapfiliate.com/676082e0abe2d313843644.jpg?a=149596-26ae1d"
                                                alt="US Ghost Adventures"
                                                className="w-full rounded-xl"
                                            />
                                        </a>
                                    </div>

                                </article>

                                {/* Ghost Tour Widget — Compact */}
                                <div className="bg-gray-900/90 rounded-2xl shadow-xl overflow-hidden border border-purple-700/50 p-4 md:p-6 mt-8 text-center backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-purple-200 mb-4">Book Your Ghost Adventure</h3>
                                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-sm">
                                        We&apos;ve partnered with US Ghost Adventures to bring you the most terrifying tours available.
                                    </p>
                                    <div className="flex justify-center items-center py-2">
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
