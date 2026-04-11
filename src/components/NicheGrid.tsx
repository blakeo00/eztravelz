import Image from "next/image";
import Link from "next/link";
import ExpediaWidget from "./ExpediaWidget";

/**
 * Niche card data — each card acts as a portal to its spoke page.
 * Images sourced from Unsplash for placeholder purposes.
 */
const niches = [
    {
        title: "Paws & Passports",
        subtitle: "Pet-Friendly Travel",
        articleTitle: "Paws, Waves & Freedom: The Original Dog Beach",
        href: "/pet-travel",
        image:
            "/images/Pet Airport.png",
        alt: "A small dog at the airport ready for a trip",
    },
    {
        title: "Spirits & Specters",
        subtitle: "Haunted Destinations",
        articleTitle: "Six Haunted Cities / Forty Whacks & A House That Never Forgot",
        href: "/haunted-tours",
        image:
            "/images/Spooky corodior.png",
        alt: "A spooky corridor in a supposedly haunted location",
    },
    {
        title: "Vineyards & Vintages",
        subtitle: "Wine Tourism",
        articleTitle: "Willamette Valley Wine Guide / Bend Breweries",
        href: "/wine-destinations",
        image:
            "/images/Wine glasses.png",
        alt: "Two wine glasses with a vineyard in the background",
    },
    {
        title: "Game Day Getaways",
        subtitle: "Sports & Event Travel",
        articleTitle: "A Guide to the 2026 FIFA World Cup",
        href: "/sports-travel",
        image:
            "/images/Lambeau.png",
        alt: "A view of Lambeau Field",
    },
    {
        title: "Set-Jetting",
        subtitle: "Cinematic Travel",
        articleTitle: "A Guide to Cannes / Six 2026 Film Festivals",
        href: "/cinematic-travel",
        image:
            "/images/Stanley Hotel 3.jpg",
        alt: "A view of the historic Stanley Hotel",
    },
    {
        title: "Culinary Quests",
        subtitle: "Diet & Regional Eats",
        articleTitle: "Paris On A Plate / Dans Le Noir",
        href: "/culinary-quests",
        image:
            "/images/Toast.png",
        alt: "A delicious and vibrant spread with toast",
    },
];

/**
 * NicheGrid Component
 * 3×2 responsive grid of large, clickable image cards — the core hub navigation.
 */
export default function NicheGrid() {
    return (
        <section id="niches" className="relative py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Expedia Search Widget */}
                <ExpediaWidget />

                {/* Ticketmaster Affiliate Banner */}
                <div className="w-full mb-14 mt-6">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 via-blue-800 to-indigo-900 group">
                        {/* Decorative pattern overlay */}
                        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-indigo-500 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>
                        
                        <div className="relative px-6 py-10 sm:px-12 sm:py-14 flex flex-col md:flex-row items-center justify-between z-10 w-full gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3">Live Events, Unforgettable Memories</h3>
                                <p className="text-blue-100 max-w-2xl text-lg">Secure your seats to the hottest concerts, sports games, theater performances, and family shows in any destination you choose.</p>
                            </div>
                            <a
                                href="https://ticketmaster.evyy.net/c/7157806/264167/4272?u=https%3A%2F%2Fwww.ticketmaster.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 bg-white text-blue-700 hover:bg-gray-50 hover:text-blue-800 font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] text-lg inline-flex items-center gap-3 backdrop-blur-sm"
                            >
                                Search Ticketmaster
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <h2 className="section-heading text-3xl sm:text-4xl font-bold text-center mb-4 text-white drop-shadow-md">
                    Choose Your Passion
                </h2>
                <p className="hero-subtitle text-white/80 text-center mb-14 max-w-lg mx-auto">
                    Every trip should match your vibe. Pick a niche and explore curated
                    guides built for the way you actually travel.
                </p>

                {/* Vegas split band — Vegas Baby + Beyond the Neon */}
                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* Vegas Baby */}
                    <Link
                        href="/vegas-locals"
                        className="group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 bg-slate-900 ring-1 ring-inset ring-white/10 min-h-[300px] sm:min-h-[320px]"
                    >
                        <Image
                            src="/images/Vegas Strip.png"
                            alt="Las Vegas Strip lit up at night"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="section-heading text-white text-2xl font-bold leading-tight">Vegas Baby</h3>
                            <p className="text-slate-200 text-sm mt-1">What Vegas Locals Know</p>
                            <p className="text-white/60 text-xs mt-1 italic">What&apos;s Inside: Sphere: The Ultimate Experience</p>
                        </div>
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                        </div>
                    </Link>

                    {/* Beyond the Neon */}
                    <Link
                        href="/beyond-the-neon/six-free-things"
                        className="group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 bg-slate-900 ring-1 ring-inset ring-white/10 min-h-[300px] sm:min-h-[320px]"
                    >
                        <Image
                            src="/images/Downtown.jpg"
                            alt="Downtown Las Vegas that is Beyond the Neon, off the Vegas Strip"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="section-heading text-white text-2xl font-bold leading-tight">Beyond The Neon</h3>
                            <p className="text-slate-200 text-sm mt-1">Off the Vegas Strip</p>
                            <p className="text-white/60 text-xs mt-1 italic">What&apos;s Inside: Six Free Things to Do in Vegas</p>
                        </div>
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                        </div>
                    </Link>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {niches.map((niche) => (
                        <Link
                            key={niche.href}
                            href={niche.href}
                            className="group relative block rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-2xl transition-shadow duration-300 bg-slate-900 ring-1 ring-inset ring-white/10"
                        >
                            {/* Card Image */}
                            <Image
                                src={niche.image}
                                alt={niche.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay + Text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="section-heading text-white text-2xl font-bold leading-tight">
                                    {niche.title}
                                </h3>
                                <p className="text-slate-200 text-sm mt-1">{niche.subtitle}</p>
                                <p className="text-white/60 text-xs mt-1 italic">What&apos;s Inside: {niche.articleTitle}</p>
                            </div>

                            {/* Hover indicator */}
                            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
