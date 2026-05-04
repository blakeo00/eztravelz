"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts, getCategories } from "@/data/posts";
import HotelsWidget from "@/components/homepage/HotelsWidget";

/* ── Hub category cards (match the ContentGrid categories array) ─── */
interface HubEntry {
    type: "hub";
    slug: string;
    title: string;
    cardImage: string;
    category: string;
    href: string;
}

interface ArticleEntry {
    type: "article";
    slug: string;
    title: string;
    cardImage: string;
    category: string;
    href: string;
}

type Entry = HubEntry | ArticleEntry;

const hubCards: HubEntry[] = [
    {
        type: "hub",
        slug: "hub-vegas-baby",
        title: "Sphere: The Ultimate Experience Inside Las Vegas' Most Ambitious Entertainment Venue Yet",
        cardImage: "/images/Sphere.png",
        category: "Vegas Baby",
        href: "/vegas-locals",
    },

    {
        type: "hub",
        slug: "hub-pet-travel",
        title: "Paws & Passports — Adventures With Your Four-Legged Co-Pilot",
        cardImage: "/images/Dog on vacation.png",
        category: "Pet Travel",
        href: "/pet-travel",
    },
    {
        type: "hub",
        slug: "hub-haunted-tours",
        title: "Six Haunted Cities Worth Traveling For",
        cardImage: "/images/Cemsalem.jpg",
        category: "Haunted Tours",
        href: "/haunted-tours",
    },
    {
        type: "hub",
        slug: "hub-wine-brewery",
        title: "Oregon: A Mecca of Wine and Beer",
        cardImage: "/images/Wine.jpg",
        category: "Wine & Brewery Destinations",
        href: "/wine-destinations",
    },

    {
        type: "hub",
        slug: "hub-cinematic-travel",
        title: "So You Want to Go to Cannes for the Film Festival. Here's What You Need to Know",
        cardImage: "/images/Cannes 2.jpg",
        category: "Cinematic Travel",
        href: "/cinematic-travel",
    },

];

export default function BlogPage() {
    const articleCategories = getCategories();
    // All unique categories: hubs + articles combined, deduplicated
    const allCategories = Array.from(
        new Set([...hubCards.map((h) => h.category), ...articleCategories])
    );

    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    // Build unified entry list: hubs first, then articles
    const allEntries: Entry[] = [
        ...hubCards,
        ...posts.map((p) => ({
            type: "article" as const,
            slug: p.slug,
            title: p.title,
            cardImage: p.cardImage,
            category: p.category,
            href: p.href ?? `/${p.categorySlug}/${p.slug}`,
        })),
    ];

    const filtered = activeCategory
        ? allEntries.filter((e) => e.category === activeCategory)
        : allEntries;

    return (
        <>
            <Header />
            <main className="min-h-screen bg-[var(--color-cream-base)]">

                {/* ── Hero ─────────────────────────────────────────── */}
                <section
                    className="relative flex flex-col items-center justify-center text-center px-6 py-16"
                    style={{
                        background: 'var(--color-navy-base)',
                        borderBottom: '1px solid rgba(var(--color-gold-rgb, 214,193,120),0.3)',
                        paddingTop: '96px',
                    }}
                >
                    <div style={{ width: '36px', height: '1.5px', background: 'var(--color-gold-base)', borderRadius: '2px', marginBottom: '14px' }} />
                    <span className="font-cinzel uppercase text-[10px] tracking-[0.22em] text-[var(--color-gold-base)] mb-3">
                        EZtravelZ
                    </span>
                    <h1 className="font-cinzel text-[32px] md:text-[42px] text-[var(--color-cream-base)] leading-tight mb-4">
                        All Articles &amp; Guides
                    </h1>
                    <p className="font-sans text-[14px] md:text-[15px] text-[var(--color-cream-base)] opacity-70 max-w-[520px] leading-relaxed">
                        Every destination guide, travel story, and insider tip — all in one place.
                    </p>
                </section>

                {/* ── Category Filter ───────────────────────────────── */}
                <section className="bg-[var(--color-navy-dark)] border-b border-[var(--color-gold-base)]/20 px-6 py-4 sticky top-[60px] z-40">
                    <div className="max-w-[1200px] mx-auto flex flex-wrap gap-2 justify-center">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className="font-cinzel uppercase text-[9px] tracking-[0.16em] px-4 py-1.5 rounded transition-all duration-200"
                            style={{
                                background: activeCategory === null ? 'var(--color-gold-base)' : 'transparent',
                                color: activeCategory === null ? 'var(--color-navy-dark)' : 'var(--color-cream-base)',
                                border: '1px solid',
                                borderColor: activeCategory === null ? 'var(--color-gold-base)' : 'rgba(255,255,255,0.2)',
                                fontWeight: activeCategory === null ? 700 : 400,
                            }}
                        >
                            All ({allEntries.length})
                        </button>
                        {allCategories.map((cat) => {
                            const count = allEntries.filter((e) => e.category === cat).length;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                                    className="font-cinzel uppercase text-[9px] tracking-[0.16em] px-4 py-1.5 rounded transition-all duration-200"
                                    style={{
                                        background: activeCategory === cat ? 'var(--color-gold-base)' : 'transparent',
                                        color: activeCategory === cat ? 'var(--color-navy-dark)' : 'var(--color-cream-base)',
                                        border: '1px solid',
                                        borderColor: activeCategory === cat ? 'var(--color-gold-base)' : 'rgba(255,255,255,0.2)',
                                        fontWeight: activeCategory === cat ? 700 : 400,
                                    }}
                                >
                                    {cat} ({count})
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* ── Article Grid ──────────────────────────────────── */}
                <section className="max-w-[1200px] mx-auto px-5 py-10">
                    {filtered.length === 0 && (
                        <p className="text-center font-cinzel text-[12px] text-[var(--color-navy-base)]/50 py-16 tracking-widest uppercase">
                            No articles in this category yet — check back soon.
                        </p>
                    )}

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                            gap: '10px',
                        }}
                    >
                        {filtered.map((entry) => (
                            <Link
                                key={entry.slug}
                                href={entry.href}
                                className="group flex flex-col rounded-lg overflow-hidden border border-[var(--color-navy-base)]/20 hover:border-[var(--color-navy-base)]/40 bg-[var(--color-cream-base)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
                            >
                                {/* Card image */}
                                <div
                                    className="w-full bg-cover bg-center flex-shrink-0"
                                    style={{
                                        backgroundImage: `url('${entry.cardImage}')`,
                                        height: '130px',
                                    }}
                                />
                                {/* Card text */}
                                <div className="px-2 py-2 flex flex-col gap-0.5">
                                    <span
                                        className="font-cinzel text-[7px] uppercase tracking-[0.14em]"
                                        style={{
                                            color: entry.type === 'hub'
                                                ? 'var(--color-gold-base)'
                                                : 'rgba(44,72,117,0.45)',
                                        }}
                                    >
                                        {entry.category}{entry.type === 'hub' ? ' — Guide' : ''}
                                    </span>
                                    <h2 className="font-cinzel text-[9.5px] leading-snug text-[var(--color-navy-base)] group-hover:text-[var(--color-gold-base)] transition-colors duration-200 line-clamp-3">
                                        {entry.title}
                                    </h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ── Expedia Widget ────────────────────────────── */}
                <section className="max-w-[1200px] mx-auto px-5 pb-12">
                    <div className="flex flex-col items-center gap-2">
                        <span className="font-cinzel uppercase text-[9px] tracking-[0.18em] text-[var(--color-navy-base)]/50">
                            Find Your Stay
                        </span>
                        <div style={{ maxWidth: '520px', width: '100%' }}>
                            <HotelsWidget />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
