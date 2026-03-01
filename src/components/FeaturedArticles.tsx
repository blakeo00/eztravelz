import Image from "next/image";
import Link from "next/link";

/**
 * Article data — exact titles from the original prompt, with
 * descriptive excerpts and thumbnail images.
 */
const articles = [
    {
        slug: "green-bay-packers-pilgrimage",
        title:
            "Planning the Ultimate Pilgrimage to Watch the Green Bay Packers",
        excerpt:
            "From securing tickets at Lambeau Field to mapping out the best tailgate spots, here's everything you need to plan a game-day trip that goes way beyond the stadium.",
        category: "Sports Travel",
        image:
            "https://images.unsplash.com/photo-1521731978332-9e9e714bdd20?q=80&w=2074&auto=format&fit=crop",
        alt: "Football fans tailing at a stadium parking lot",
    },
    {
        slug: "oscar-nominee-filming-locations",
        title:
            "Tracking Down the Real-Life Locations of This Year's Oscar Nominees",
        excerpt:
            "Set-jetting is the new sightseeing. We traced the filming locations of the biggest Oscar contenders so you can walk the same streets as the stars.",
        category: "Cinematic Travel",
        image:
            "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
        alt: "A cinematic alley with dramatic lighting",
    },
    {
        slug: "keto-diet-deep-south",
        title:
            "How to Maintain a Strict Keto Diet While Traveling the Deep South",
        excerpt:
            "BBQ joints and biscuit houses at every turn? No problem. Here's how we kept it keto from Nashville to New Orleans without missing a single good meal.",
        category: "Culinary Quests",
        image:
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2074&auto=format&fit=crop",
        alt: "A perfectly grilled steak with fresh greens on a rustic plate",
    },
];

/**
 * FeaturedArticles Component
 * Three article cards with thumbnails, excerpts, and Read More buttons.
 */
export default function FeaturedArticles() {
    return (
        <section id="articles" className="relative py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-md">Latest Guides</h2>
                <p className="text-white/80 mb-14 max-w-lg">
                    Deep-dive travel guides written from real experience — no fluff, no
                    generic top-10 lists.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <article
                            key={article.slug}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            {/* Thumbnail */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <span className="text-brand-600 font-semibold text-xs uppercase tracking-wider mb-2">
                                    {article.category}
                                </span>
                                <h3 className="text-lg font-bold leading-snug mb-3">
                                    {article.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                                    {article.excerpt}
                                </p>
                                <Link
                                    href={`/articles/${article.slug}`}
                                    className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors group"
                                >
                                    Read More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="group-hover:translate-x-1 transition-transform"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
