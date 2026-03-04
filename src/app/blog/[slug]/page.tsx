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
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero */}
                <section className="relative text-white py-20 sm:py-28 overflow-hidden">
                    {/* Background image */}
                    <Image
                        src={post.image}
                        alt={post.alt}
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

                    <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="inline-block bg-brand-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                            {post.category}
                        </span>

                        {post.categorySlug === 'haunted-tours' && (
                            <div className="flex justify-center items-center mb-6">
                                <a href="https://usghostadventures.com?tap_a=149596-26ae1d&ref=mju3ytb" target="_BLANK" rel="nofollow" className="inline-block transform hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl rounded-xl overflow-hidden">
                                    <img src="https://static.tapfiliate.com/676082e0abe2d313843644.jpg?a=149596-26ae1d" alt="US Ghost Adventures Affiliate Banner" />
                                </a>
                            </div>
                        )}

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
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
                            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 text-slate-800">
                                {post.content()}
                            </div>

                            {/* Back link */}
                            <div className="mt-10 text-center lg:text-left">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
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
                            <SidebarWidgets widgets={getCategoryWidgets(post.categorySlug)} />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
