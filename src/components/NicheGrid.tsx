import Image from "next/image";
import Link from "next/link";

/**
 * Niche card data — each card acts as a portal to its spoke page.
 * Images sourced from Unsplash for placeholder purposes.
 */
const niches = [
    {
        title: "Paws & Passports",
        subtitle: "Pet-Friendly Travel",
        href: "/pet-travel",
        image:
            "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop",
        alt: "A happy golden retriever wearing a travel bandana on a scenic road trip",
    },
    {
        title: "Spirits & Specters",
        subtitle: "Haunted Destinations",
        href: "/haunted-tours",
        image:
            "https://images.unsplash.com/photo-1520531158340-44015069e78e?q=80&w=2069&auto=format&fit=crop",
        alt: "Moody, fog-covered historic architecture at dusk",
    },
    {
        title: "Vineyards & Vintages",
        subtitle: "Wine Tourism",
        href: "/wine-destinations",
        image:
            "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop",
        alt: "Sunlit vineyard rows stretching toward rolling hills",
    },
    {
        title: "Game Day Getaways",
        subtitle: "Sports & Event Travel",
        href: "/sports-travel",
        image:
            "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2070&auto=format&fit=crop",
        alt: "Energetic stadium crowd cheering during a live sports event",
    },
    {
        title: "Set-Jetting",
        subtitle: "Cinematic Travel",
        href: "/cinematic-travel",
        image:
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
        alt: "Vintage movie clapperboard on location",
    },
    {
        title: "Culinary Quests",
        subtitle: "Diet & Regional Eats",
        href: "/culinary-quests",
        image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
        alt: "A vibrant spread of colorful local cuisine on a rustic table",
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
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white drop-shadow-md">
                    Choose Your Passion
                </h2>
                <p className="text-white/80 text-center mb-14 max-w-lg mx-auto">
                    Every trip should match your vibe. Pick a niche and explore curated
                    guides built for the way you actually travel.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {niches.map((niche) => (
                        <Link
                            key={niche.href}
                            href={niche.href}
                            className="group relative block rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-2xl transition-shadow duration-300"
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
                                <h3 className="text-white text-2xl font-bold leading-tight">
                                    {niche.title}
                                </h3>
                                <p className="text-slate-200 text-sm mt-1">{niche.subtitle}</p>
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
