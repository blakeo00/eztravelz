import React from "react";
import Link from "next/link";
import { featuredPackages } from "@/data/packages";

/**
 * SignatureShowcase
 * ─────────────────
 * Premium homepage section highlighting Signature Travel packages.
 * Positioned after About — this is the first thing visitors see after
 * the hero, establishing EZtravelZ as a travel advisory service.
 */
export default function SignatureShowcase() {
    return (
        <section
            className="relative py-14 sm:py-16 px-6 overflow-hidden"
            style={{ background: "var(--color-navy-base)" }}
        >
            {/* Subtle glow ornaments */}
            <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(214,201,160,0.08) 0%, transparent 70%)",
                }}
            />
            <div
                className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(214,201,160,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
                {/* ── Eyebrow ── */}
                <div className="flex flex-col items-center gap-3 mb-6">
                    <div
                        style={{
                            width: "40px",
                            height: "2px",
                            background: "var(--color-gold-base)",
                            borderRadius: "2px",
                        }}
                    />
                    <span className="font-cinzel uppercase text-[10px] tracking-[0.24em] text-[var(--color-gold-base)]">
                        Signature Travel
                    </span>
                </div>

                {/* ── Heading ── */}
                <h2
                    className="font-cinzel text-center text-[var(--color-cream-base)] leading-tight mb-3"
                    style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)" }}
                >
                    Your Next Trip,{" "}
                    <span style={{ color: "var(--color-gold-base)" }}>
                        Personally Crafted
                    </span>
                </h2>
                <p className="font-sans text-center text-[var(--color-cream-base)] opacity-75 max-w-[540px] text-[14px] leading-relaxed mb-8">
                    Curated Disney, Virgin Voyages, and luxury vacation packages —
                    designed by an advisor with 40 years of hospitality expertise.
                </p>

                {/* ── Trust Credentials ── */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10">
                    {[
                        { icon: "🏨", text: "40 Years Hospitality" },
                        { icon: "🤝", text: "BNT Travel Group" },
                        { icon: "✨", text: "Personalized Itineraries" },
                    ].map((item) => (
                        <div
                            key={item.text}
                            className="flex items-center gap-1.5"
                        >
                            <span className="text-sm">{item.icon}</span>
                            <span
                                className="font-cinzel uppercase text-[8px] tracking-[0.12em]"
                                style={{
                                    color: "var(--color-cream-base)",
                                    opacity: 0.6,
                                }}
                            >
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>

                {/* ── Featured Package Cards ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-10">
                    {featuredPackages.map((pkg) => {
                        // Supplier-specific accent
                        const accent =
                            pkg.supplier === "disney"
                                ? "rgba(113,86,172,0.85)"
                                : "rgba(190,30,45,0.85)";
                        const badge =
                            pkg.supplier === "disney"
                                ? "✦ Disney Destinations"
                                : "⚓ Virgin Voyages";

                        return (
                            <div
                                key={pkg.id}
                                className="group relative rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
                                style={{
                                    borderColor: "rgba(255,255,255,0.08)",
                                    background:
                                        "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)",
                                }}
                            >
                                {/* Image area with gradient placeholder */}
                                <div
                                    className="relative w-full overflow-hidden"
                                    style={{ height: "180px" }}
                                >
                                    {/* Gradient placeholder — replaced by real images later */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background:
                                                pkg.supplier === "disney"
                                                    ? "linear-gradient(135deg, #1a0a3e 0%, #4a2d8f 50%, #7156ac 100%)"
                                                    : "linear-gradient(135deg, #2a0a0e 0%, #8b1e2f 50%, #be1e2d 100%)",
                                        }}
                                    />
                                    {/* Supplier badge */}
                                    <div
                                        className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-white font-cinzel uppercase text-[8px] tracking-[0.1em] backdrop-blur-sm"
                                        style={{
                                            background: accent,
                                            border: "1px solid rgba(255,255,255,0.15)",
                                        }}
                                    >
                                        {badge}
                                    </div>
                                    {/* Duration pill */}
                                    <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 rounded bg-black/50 backdrop-blur-sm">
                                        <span className="font-cinzel text-[8px] text-white uppercase tracking-[0.08em]">
                                            {pkg.duration}
                                        </span>
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="px-4 py-4 flex flex-col gap-2">
                                    <h3 className="font-cinzel text-[13px] text-[var(--color-cream-base)] leading-snug group-hover:text-[var(--color-gold-base)] transition-colors duration-200">
                                        {pkg.title}
                                    </h3>
                                    <p className="font-sans text-[11px] text-[var(--color-cream-base)] opacity-55 leading-relaxed">
                                        {pkg.subtitle}
                                    </p>
                                    {/* Top 2 highlights */}
                                    <ul className="flex flex-col gap-1 mt-1">
                                        {pkg.highlights.slice(0, 2).map((h) => (
                                            <li
                                                key={h}
                                                className="flex items-start gap-1.5"
                                            >
                                                <span
                                                    className="text-[8px] mt-[2px]"
                                                    style={{
                                                        color: "var(--color-gold-base)",
                                                    }}
                                                >
                                                    ✦
                                                </span>
                                                <span className="font-sans text-[10px] text-[var(--color-cream-base)] opacity-65 leading-snug">
                                                    {h}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── CTA ── */}
                <Link
                    href="/signature-travel"
                    className="font-cinzel uppercase text-[10px] tracking-[0.2em] px-8 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2"
                    style={{
                        background: "var(--color-gold-base)",
                        color: "var(--color-navy-dark)",
                        fontWeight: 700,
                    }}
                >
                    Explore All Packages
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
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
        </section>
    );
}
