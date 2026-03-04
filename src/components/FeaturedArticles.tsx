/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { posts } from "@/data/posts";

/**
 * FeaturedArticles Component
 * Shows the most recent blog post from EACH category on the homepage.
 * When a new post is added to a category, only the latest one appears here;
 * older posts remain accessible via the full blog listing page.
 */
export default function FeaturedArticles() {
    // Get the most recent post from each category
    const categoryOrder = [
        "Pet Travel",
        "Haunted Tours",
        "Wine Destinations",
        "Sports Travel",
        "Cinematic Travel",
        "Culinary Quests",
    ];

    const featured = categoryOrder
        .map((cat) => posts.find((p) => p.category === cat))
        .filter(Boolean) as typeof posts;

    return (
        <section id="articles" className="relative py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-md">From the Blog</h2>
                <p className="text-white/80 mb-14 max-w-lg">
                    Real stories, real logistics, real advice — written from experience, not a press release.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featured.map((post) => (
                        <article
                            key={post.slug}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            {/* Thumbnail */}
                            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={post.image}
                                    alt={post.alt}
                                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <span className="text-brand-600 font-semibold text-xs uppercase tracking-wider mb-1.5">
                                    {post.category}
                                </span>
                                <h3 className="text-base font-bold leading-snug mb-2 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${post.slug}`}
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

                {/* View All link */}
                <div className="mt-12 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                    >
                        View All Posts
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
