import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarWidgets from "@/components/SidebarWidgets";
import { posts, getPostBySlug } from "@/data/posts";
import { getCategoryWidgets } from "@/data/widgets";

/* ── Static params for all known slugs ── */
export function generateStaticParams() {
    return posts.map((p) => ({ slug: p.slug }));
}

/* ── Dynamic metadata ── */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};
    return {
        title: `${post.title} — EZtravelZ`,
        description: post.excerpt,
    };
}

/* ── Page component ── */
export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    return (
        <div className={`min-h-screen flex flex-col relative ${['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining', 'titletown-usa-lambeau-field-nfl-pilgrimage', 'paws-and-away-pet-traveler-guide', 'holy-water-and-grape-bricks-prohibition-wine-trail', 'smoke-patience-butcher-paper-texas-bbq-road-trip'].includes(post.slug) ? 'bg-slate-950' : 'bg-slate-50'}`}>
            {/* Conditional Background Images */}
            {(['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining'].includes(post.slug) || post.slug === 'titletown-usa-lambeau-field-nfl-pilgrimage') && (
                <div
                    className={`fixed inset-0 z-0 bg-cover bg-center bg-gray-950 ${post.slug === 'titletown-usa-lambeau-field-nfl-pilgrimage' ? 'opacity-50' : 'opacity-60'}`}
                    style={{
                        backgroundImage: `url('/images/${['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining'].includes(post.slug) ? 'Stanley Hotel.png' : 'Lambeau.png'}')`
                    }}
                ></div>
            )}
            {post.slug === 'smoke-patience-butcher-paper-texas-bbq-road-trip' && (
                <div className="fixed inset-0 z-0 bg-[#0c0a09] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-700/40 via-[#1c1917]/90 to-black opacity-95"></div>
            )}

            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow">
                    {/* Hero */}
                    <section className="relative text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
                        {/* Background image */}
                        <Image
                            src={post.image}
                            alt={post.alt}
                            fill
                            className={`object-cover object-center ${['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining'].includes(post.slug) ? 'opacity-50' : ''}`}
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

                        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <span className={`inline-block text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 ${['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining'].includes(post.slug) ? 'bg-red-800' : post.slug === 'smoke-patience-butcher-paper-texas-bbq-road-trip' ? 'bg-amber-700' : 'bg-brand-500'
                                }`}>
                                {post.category}
                            </span>

                            {post.categorySlug === 'haunted-tours' && (
                                <div className="flex justify-center items-center mb-6">
                                    <a href="https://usghostadventures.com?tap_a=149596-26ae1d&ref=mju3ytb" target="_BLANK" rel="nofollow" className="inline-block transform hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl rounded-xl overflow-hidden">
                                        <img src="https://static.tapfiliate.com/676082e0abe2d313843644.jpg?a=149596-26ae1d" alt="US Ghost Adventures Affiliate Banner" />
                                    </a>
                                </div>
                            )}

                            <h1
                                className={`text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight ${['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining'].includes(post.slug)
                                    ? 'text-red-600 tracking-widest font-extrabold'
                                    : post.slug === 'smoke-patience-butcher-paper-texas-bbq-road-trip'
                                        ? 'hero-title text-orange-500'
                                        : 'hero-title'
                                    }`}
                                style={
                                    ['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining'].includes(post.slug)
                                        ? { fontFamily: "var(--font-creepster)", textShadow: "3px 3px 6px rgba(185, 28, 28, 0.4)" }
                                        : {}
                                }
                            >
                                {post.title}
                            </h1>
                            <time className="text-white/70 text-sm">
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </time>
                        </div>
                    </section>

                    {/* Article body */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                <div className={`backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 ${['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining'].includes(post.slug)
                                    ? 'bg-gray-900/90 border border-red-900/50'
                                    : post.slug === 'smoke-patience-butcher-paper-texas-bbq-road-trip'
                                        ? 'bg-stone-900/80 border border-stone-800'
                                        : post.slug === 'titletown-usa-lambeau-field-nfl-pilgrimage'
                                            ? 'bg-[#203731]/95 text-white border border-[#FFB612]/30'
                                            : post.slug === 'paws-and-away-pet-traveler-guide'
                                                ? 'bg-slate-900/90 border border-slate-700'
                                                : post.slug === 'holy-water-and-grape-bricks-prohibition-wine-trail'
                                                    ? 'bg-[#4a091e]/90 border border-rose-900/50'
                                                    : 'bg-white/80 text-slate-800'
                                    }`}>
                                    {post.content()}
                                </div>

                                {/* Back link */}
                                <div className="mt-10 text-center lg:text-left">
                                    <Link
                                        href="/blog"
                                        className={`inline-flex items-center gap-2 font-semibold transition-colors ${['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining'].includes(post.slug)
                                            ? 'text-red-500 hover:text-red-400'
                                            : post.slug === 'smoke-patience-butcher-paper-texas-bbq-road-trip'
                                                ? 'text-orange-500 hover:text-orange-400'
                                                : post.slug === 'titletown-usa-lambeau-field-nfl-pilgrimage'
                                                    ? 'text-[#FFB612] hover:text-[#FFB612]/80'
                                                    : post.slug === 'paws-and-away-pet-traveler-guide'
                                                        ? 'text-sky-400 hover:text-sky-300'
                                                        : post.slug === 'holy-water-and-grape-bricks-prohibition-wine-trail'
                                                            ? 'text-rose-300 hover:text-rose-200'
                                                            : 'text-brand-600 hover:text-brand-700'
                                            }`}
                                    >
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
                                            <path d="M19 12H5M12 19l-7-7 7-7" />
                                        </svg>
                                        Back to All Posts
                                    </Link>
                                </div>
                            </div>

                            {/* Right Sidebar Area */}
                            <div className="lg:w-1/3">
                                <SidebarWidgets widgets={getCategoryWidgets(post.categorySlug, post.slug)} />
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
