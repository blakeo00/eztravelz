"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts, getCategories } from "@/data/posts";

export default function BlogPage() {
    const categories = getCategories();
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filtered = activeCategory
        ? posts.filter((p) => p.category === activeCategory)
        : posts;

    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero */}
                <section className="relative bg-gradient-to-br from-brand-600 via-brand-500 to-blue-500 text-white py-20 sm:py-28">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                            The EZtravelZ Blog
                        </h1>
                        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
                            Real stories, real logistics, real advice, written from
                            experience.
                        </p>
                    </div>
                </section>

                {/* Filter + Grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    {/* Category pills */}
                    <div className="flex flex-wrap gap-3 mb-12 justify-center">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === null
                                ? "bg-brand-500 text-white shadow-md"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                        >
                            All
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() =>
                                    setActiveCategory(
                                        activeCategory === cat ? null : cat
                                    )
                                }
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === cat
                                    ? "bg-brand-500 text-white shadow-md"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Post grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                                <article className="bg-white rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-300 flex flex-col flex-1">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.alt}
                                            fill
                                            unoptimized
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-brand-600 font-semibold text-xs uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                            <span className="text-slate-300">•</span>
                                            <time className="text-slate-400 text-xs">
                                                {new Date(post.date).toLocaleDateString("en-US", {
                                                    month: "long",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </time>
                                        </div>
                                        <h2 className="text-lg font-bold leading-snug mb-3 group-hover:text-brand-600 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm transition-colors mt-auto">
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
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <p className="text-center text-slate-400 py-12">
                            No posts in this category yet, check back soon!
                        </p>
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
}
