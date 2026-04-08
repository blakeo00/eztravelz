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
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            type: "article",
            url: `https://eztravelz.com/blog/${post.slug}`,
            siteName: "EZtravelZ",
            title: `${post.title} — EZtravelZ`,
            description: post.excerpt,
        },
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
        <div className={`min-h-screen flex flex-col relative ${post.slug === 'vegas-locals-guide' ? 'bg-[#89D4FF]' : ['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining'].includes(post.slug) ? 'bg-[#848484]' : post.slug === 'titletown-usa-lambeau-field-nfl-pilgrimage' ? 'bg-[#A57C00]' : post.slug === 'holy-water-and-grape-bricks-prohibition-wine-trail' ? 'bg-[#f9c1c0]' : 'bg-[#fff0d4]'}`}>
            {/* Conditional Background Images */}



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
                            <span className={`inline-block text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 ${['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining'].includes(post.slug) ? 'bg-red-800' : 'bg-[#2c4875]'
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
                                className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 drop-shadow-lg ${['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining'].includes(post.slug)
                                    ? 'text-red-600'
                                    : 'hero-title text-[#fff0d4]'
                                    }`}
                                style={
                                    ['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining'].includes(post.slug)
                                        ? { fontFamily: "var(--font-creepster)", textShadow: "3px 3px 6px rgba(185, 28, 28, 0.4)" }
                                        : post.slug === 'vegas-locals-guide'
                                            ? { fontFamily: "'Playfair Display', serif" }
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
                                <div
                                    className={`backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 ${
                                        post.slug === 'vegas-locals-guide'
                                            ? 'text-slate-900'
                                            : ['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining'].includes(post.slug)
                                        ? 'bg-gray-900/90 border border-red-900/50'
                                        : post.slug === 'titletown-usa-lambeau-field-nfl-pilgrimage'
                                            ? 'bg-[#203731]/95 text-white border border-[#FFB612]/30'
                                            : post.slug === 'holy-water-and-grape-bricks-prohibition-wine-trail'
                                                ? 'bg-[#4a091e]/90 border border-rose-900/50'
                                                : 'bg-[#2c4875]/95 text-slate-50 border-2 border-slate-700 shadow-[0_0_30px_rgba(44,72,117,0.25)]'
                                        }`}
                                    style={post.slug === 'vegas-locals-guide' ? {
                                        border: '5px solid transparent',
                                        backgroundImage: 'linear-gradient(rgba(253,255,182,0.95), rgba(253,255,182,0.95)), linear-gradient(135deg, #00e5ff, #ff00ff, #00e5ff, #ff00ff, #00e5ff)',
                                        backgroundOrigin: 'border-box',
                                        backgroundClip: 'padding-box, border-box',
                                        boxShadow: '0 0 8px #00e5ff, 0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(0, 229, 255, 0.25), inset 0 0 12px rgba(0, 229, 255, 0.08)',
                                    } : undefined}
                                >
                                    {post.content()}
                                </div>

                                {/* Back link */}
                                <div className="mt-10 text-center lg:text-left">
                                    <Link
                                        href="/blog"
                                        className={`inline-flex items-center gap-2 font-semibold transition-colors ${['stanley-hotel-where-the-nightmare-became-the-novel', 'reel-roads-room-217-the-shining'].includes(post.slug)
                                            ? 'text-red-500 hover:text-red-400'
                                            : post.slug === 'titletown-usa-lambeau-field-nfl-pilgrimage'
                                                ? 'text-[#FFB612] hover:text-[#FFB612]/80'
                                                : post.slug === 'vegas-locals-guide'
                                                    ? 'text-[#7d12ff] hover:text-[#4b0b99]'
                                                    : post.slug === 'holy-water-and-grape-bricks-prohibition-wine-trail'
                                                        ? 'text-rose-300 hover:text-rose-200'
                                                        : 'text-[#2c4875] hover:text-[#1e3459]'
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
