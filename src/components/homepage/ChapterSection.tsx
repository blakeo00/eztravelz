import React from "react";
import Link from "next/link";
import { posts, type BlogPost } from "@/data/posts";
import { featuredGuides, type FeaturedGuide } from "@/data/featuredGuides";

// ─── Chapter Definitions ────────────────────────────────────────

export interface ChapterDef {
    /** Roman numeral displayed as faded chapter number */
    numeral: string;
    /** Bold chapter title — the "book name" for this niche */
    title: string;
    /** Short tagline */
    tagline: string;
    /** Route to the niche spoke page */
    href: string;
    /** Category slug from posts.tsx — used to filter articles */
    categorySlug: string;
    /** The post category label used in posts.tsx (may differ from title) */
    postsCategory: string;
    /** Hero image for the chapter header */
    image: string;
}

/**
 * Ordered list of chapters.
 * The dual Vegas chapter is handled specially in the ChapterGrid below.
 */
export const chapters: ChapterDef[] = [
    {
        numeral: "I",
        title: "Vegas Baby & Beyond the Neon",
        tagline: "Sin City two ways — the neon-lit Strip and the silence beyond it",
        href: "/vegas-locals",
        categorySlug: "vegas-locals",
        postsCategory: "Vegas Baby",
        image: "/images/Vegas Strip.png",
    },
    {
        numeral: "II",
        title: "Spirits & Specters",
        tagline: "Haunted destinations and ghost trails worth losing sleep over",
        href: "/haunted-tours",
        categorySlug: "haunted-tours",
        postsCategory: "Haunted Tours",
        image: "/images/Cemsalem.jpg",
    },
    {
        numeral: "III",
        title: "Game Day Getaways",
        tagline: "Stadiums, championships, and the pilgrimages that define sports travel",
        href: "/sports-travel",
        categorySlug: "sports-travel",
        postsCategory: "Sports Travel",
        image: "/images/Soccer.jpg",
    },
    {
        numeral: "IV",
        title: "Paws & Passports",
        tagline: "Adventures with your four-legged co-pilot — guides, rules, and gear",
        href: "/pet-travel",
        categorySlug: "pet-travel",
        postsCategory: "Pet Travel",
        image: "/images/Dog on vacation.png",
    },
    {
        numeral: "V",
        title: "Culinary Quests",
        tagline: "Food road trips, hidden dining, and detours worth every mile",
        href: "/culinary-quests",
        categorySlug: "culinary-quests",
        postsCategory: "Culinary Quests",
        image: "/images/Parisday.jpg",
    },
    {
        numeral: "VI",
        title: "Vineyards & Vintages",
        tagline: "Wine trails, craft breweries, and the stories behind the bottles",
        href: "/wine-destinations",
        categorySlug: "wine-destinations",
        postsCategory: "Wine & Brewery Destinations",
        image: "/images/Wine.jpg",
    },
    {
        numeral: "VII",
        title: "Set-Jetting",
        tagline: "Cinematic travel — the places behind the scenes worth visiting in person",
        href: "/cinematic-travel",
        categorySlug: "cinematic-travel",
        postsCategory: "Cinematic Travel",
        image: "/images/Stanley Hotel 3.jpg",
    },
];

// ─── Single Chapter Section ─────────────────────────────────────

interface ChapterSectionProps {
    chapter: ChapterDef;
    /** "cream" or "navy" for alternating backgrounds */
    variant: "cream" | "navy";
}

function ChapterSection({ chapter, variant }: ChapterSectionProps) {
    const isCream = variant === "cream";

    // Find the featured guide for this category
    const guide: FeaturedGuide | undefined = featuredGuides.find(
        (g) => g.categorySlug === chapter.categorySlug
    );

    // Also find the Beyond-the-Neon guide for the Vegas dual chapter
    const beyondGuide: FeaturedGuide | undefined =
        chapter.categorySlug === "vegas-locals"
            ? featuredGuides.find((g) => g.categorySlug === "beyond-the-neon")
            : undefined;

    // Get all posts for this category (and beyond-the-neon for Vegas)
    const categoryPosts: BlogPost[] = posts.filter(
        (p) =>
            p.category === chapter.postsCategory ||
            (chapter.categorySlug === "vegas-locals" &&
                p.category === "Beyond the Neon")
    );

    // The featured article — prefer the guide's article, fall back to first post
    const featuredHref = guide?.href || `/${chapter.categorySlug}`;
    const featuredImage = guide?.cardImage || chapter.image;
    const featuredTitle = guide?.title || chapter.title;

    // Remaining articles (exclude the featured one by title match)
    const remainingPosts = categoryPosts.filter(
        (p) => p.title !== featuredTitle
    );

    // Colors based on variant
    const bg = isCream ? "var(--color-cream-base)" : "var(--color-navy-base)";
    const textPrimary = isCream
        ? "var(--color-navy-base)"
        : "var(--color-cream-base)";
    const textSecondary = isCream ? "#7A6346" : "var(--color-navy-text)";
    const numeralColor = isCream
        ? "rgba(44,72,117,0.07)"
        : "rgba(214,201,160,0.06)";
    const borderColor = isCream
        ? "rgba(44,72,117,0.12)"
        : "rgba(255,255,255,0.08)";
    const cardBg = isCream
        ? "rgba(255,255,255,0.5)"
        : "rgba(255,255,255,0.03)";

    return (
        <section className="relative py-12 sm:py-14 px-6 overflow-hidden" style={{ background: bg }}>
            {/* ── Giant faded numeral ── */}
            <div
                className="absolute font-cinzel font-bold pointer-events-none select-none"
                style={{
                    fontSize: "clamp(120px, 18vw, 220px)",
                    color: numeralColor,
                    top: "-10px",
                    right: "5%",
                    lineHeight: 1,
                }}
            >
                {chapter.numeral}
            </div>

            <div className="relative z-10 max-w-[1200px] mx-auto">
                {/* ── Chapter heading ── */}
                <div className="flex flex-col gap-1 mb-8">
                    <span
                        className="font-cinzel uppercase text-[9px] tracking-[0.2em]"
                        style={{ color: "var(--color-gold-base)" }}
                    >
                        Chapter {chapter.numeral}
                    </span>
                    <h2
                        className="font-cinzel leading-tight"
                        style={{
                            color: textPrimary,
                            fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                        }}
                    >
                        {chapter.title}
                    </h2>
                    <p
                        className="font-sans text-[13px] leading-relaxed mt-1 max-w-[500px]"
                        style={{ color: textSecondary }}
                    >
                        {chapter.tagline}
                    </p>
                </div>

                {/* ── Content: featured card + article list ── */}
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 items-start">
                    {/* Featured article — large card */}
                    <Link
                        href={featuredHref}
                        className="group block rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        style={{ borderColor: borderColor }}
                    >
                        <div
                            className="w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                            style={{
                                backgroundImage: `url('${featuredImage}')`,
                                height: "220px",
                            }}
                        />
                        <div
                            className="px-4 py-3.5"
                            style={{ background: cardBg }}
                        >
                            <span
                                className="font-cinzel uppercase text-[8px] tracking-[0.14em]"
                                style={{ color: "var(--color-gold-base)" }}
                            >
                                Featured
                            </span>
                            <h3
                                className="font-cinzel text-[14px] leading-snug mt-1 group-hover:text-[var(--color-gold-base)] transition-colors duration-200 line-clamp-2"
                                style={{ color: textPrimary }}
                            >
                                {featuredTitle}
                            </h3>
                        </div>
                    </Link>

                    {/* Additional featured for Vegas dual chapter */}
                    {beyondGuide && (
                        <Link
                            href={beyondGuide.href}
                            className="group block rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:hidden"
                            style={{ borderColor: borderColor }}
                        >
                            <div
                                className="w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                                style={{
                                    backgroundImage: `url('${beyondGuide.cardImage}')`,
                                    height: "180px",
                                }}
                            />
                            <div
                                className="px-4 py-3.5"
                                style={{ background: cardBg }}
                            >
                                <span
                                    className="font-cinzel uppercase text-[8px] tracking-[0.14em] text-[var(--color-gold-base)]"
                                >
                                    Beyond the Neon
                                </span>
                                <h3
                                    className="font-cinzel text-[13px] leading-snug mt-1 group-hover:text-[var(--color-gold-base)] transition-colors duration-200 line-clamp-2"
                                    style={{ color: textPrimary }}
                                >
                                    {beyondGuide.title}
                                </h3>
                            </div>
                        </Link>
                    )}

                    {/* Article list — compact sidebar */}
                    <div className="flex flex-col gap-3">
                        {/* Beyond-the-Neon card for desktop (Vegas chapter only) */}
                        {beyondGuide && (
                            <Link
                                href={beyondGuide.href}
                                className="group hidden md:flex items-center gap-3 rounded-lg overflow-hidden border transition-all duration-200 hover:-translate-y-0.5"
                                style={{
                                    borderColor: borderColor,
                                    background: cardBg,
                                }}
                            >
                                <div
                                    className="w-[80px] h-[60px] bg-cover bg-center shrink-0"
                                    style={{
                                        backgroundImage: `url('${beyondGuide.cardImage}')`,
                                    }}
                                />
                                <div className="py-2 pr-3 flex-1 min-w-0">
                                    <span
                                        className="font-cinzel uppercase text-[7px] tracking-[0.12em]"
                                        style={{ color: "var(--color-gold-base)" }}
                                    >
                                        Beyond the Neon
                                    </span>
                                    <h4
                                        className="font-cinzel text-[11px] leading-snug mt-0.5 group-hover:text-[var(--color-gold-base)] transition-colors duration-200 line-clamp-2"
                                        style={{ color: textPrimary }}
                                    >
                                        {beyondGuide.title}
                                    </h4>
                                </div>
                            </Link>
                        )}

                        {/* Remaining posts */}
                        {remainingPosts.slice(0, 4).map((post) => (
                            <Link
                                key={post.slug}
                                href={
                                    post.href ||
                                    `/${post.categorySlug}/${post.slug}`
                                }
                                className="group flex items-center gap-3 rounded-lg overflow-hidden border transition-all duration-200 hover:-translate-y-0.5"
                                style={{
                                    borderColor: borderColor,
                                    background: cardBg,
                                }}
                            >
                                <div
                                    className="w-[80px] h-[60px] bg-cover bg-center shrink-0"
                                    style={{
                                        backgroundImage: `url('${post.cardImage}')`,
                                    }}
                                />
                                <div className="py-2 pr-3 flex-1 min-w-0">
                                    <span
                                        className="font-cinzel uppercase text-[7px] tracking-[0.12em]"
                                        style={{ color: textSecondary }}
                                    >
                                        {post.category}
                                    </span>
                                    <h4
                                        className="font-cinzel text-[11px] leading-snug mt-0.5 group-hover:text-[var(--color-gold-base)] transition-colors duration-200 line-clamp-2"
                                        style={{ color: textPrimary }}
                                    >
                                        {post.title}
                                    </h4>
                                </div>
                            </Link>
                        ))}

                        {/* Chapter CTA */}
                        <Link
                            href={chapter.href}
                            className="font-cinzel uppercase text-[9px] tracking-[0.16em] flex items-center gap-1.5 mt-1 transition-colors duration-200 hover:text-[var(--color-gold-base)]"
                            style={{ color: textSecondary }}
                        >
                            Read the Full Chapter
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Exported Grid — renders all chapters ───────────────────────

export default function ChapterGrid() {
    return (
        <>
            {chapters.map((chapter, i) => (
                <ChapterSection
                    key={chapter.numeral}
                    chapter={chapter}
                    variant={i % 2 === 0 ? "cream" : "navy"}
                />
            ))}
        </>
    );
}
