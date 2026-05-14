"use client";

import Image from "next/image";
import type { TravelPackage } from "@/data/packages";

/**
 * PackageCard — A premium travel package card for the Signature Travel page.
 *
 * Displays a supplier-branded hero image, package highlights, duration,
 * and two CTAs: one to view the full Tern itinerary, one to inquire.
 *
 * Follows the existing NicheGrid card pattern (full-bleed image, gradient
 * overlay, hover lift) but adapted for a travel-agency context.
 */

const supplierBadge: Record<string, { label: string; color: string; bg: string }> = {
    disney: { label: "Disney", color: "#1A1A6C", bg: "rgba(200, 170, 255, 0.9)" },
    virgin: { label: "Virgin Voyages", color: "#ffffff", bg: "rgba(227, 6, 19, 0.9)" },
    custom: { label: "EZtravelZ", color: "#1F4368", bg: "rgba(217, 179, 106, 0.9)" },
};

interface PackageCardProps {
    pkg: TravelPackage;
    accentColor?: string;
    formSectionId?: string;
}

export default function PackageCard({ pkg, accentColor = "var(--color-gold-base)", formSectionId = "trip-request" }: PackageCardProps) {
    const badge = supplierBadge[pkg.supplier] || supplierBadge.custom;
    const hasImage = pkg.image && !pkg.image.includes("placeholder");
    const hasItinerary = !!pkg.ternItineraryUrl;

    // Smooth scroll to the form section
    const handleInquire = () => {
        const el = document.getElementById(formSectionId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="group relative flex flex-col rounded-2xl overflow-hidden bg-[var(--color-navy-base)] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
            {/* ── Hero Image ──────────────────────────────── */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-[var(--color-navy-base)] to-[var(--color-navy-dark)]">
                {hasImage ? (
                    <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                ) : (
                    /* Elegant gradient placeholder when no supplier image exists */
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    pkg.supplier === "disney"
                                        ? "linear-gradient(135deg, #1A1A6C 0%, #4B3F8F 40%, #6D5BA8 70%, #C8AAFF 100%)"
                                        : pkg.supplier === "virgin"
                                        ? "linear-gradient(135deg, #8B0015 0%, #E30613 40%, #FF4D5A 70%, #FFA0A8 100%)"
                                        : "linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy-base) 50%, var(--color-gold-base) 100%)",
                            }}
                        />
                        {/* Decorative wave pattern */}
                        <svg
                            className="absolute bottom-0 left-0 right-0 opacity-10"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            style={{ height: "40px", width: "100%" }}
                        >
                            <path
                                d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
                                fill="white"
                            />
                        </svg>
                        <span className="relative font-cinzel text-white/40 text-sm tracking-widest uppercase">
                            {pkg.supplier === "disney" ? "✦ Disney ✦" : pkg.supplier === "virgin" ? "⚓ Virgin Voyages" : "✈ EZtravelZ"}
                        </span>
                    </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-base)] via-transparent to-transparent opacity-60" />

                {/* Supplier badge */}
                <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                    style={{ background: badge.bg, color: badge.color }}
                >
                    {badge.label}
                </div>

                {/* Duration pill */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium tracking-wide">
                    {pkg.duration}
                </div>
            </div>

            {/* ── Card Body ───────────────────────────────── */}
            <div className="flex flex-col flex-1 px-5 py-5 gap-3">
                {/* Title */}
                <div>
                    <h3 className="font-cinzel text-[var(--color-cream-base)] text-[15px] leading-snug mb-1">
                        {pkg.title}
                    </h3>
                    <p className="font-sans text-[var(--color-navy-text)] text-[12px] leading-relaxed">
                        {pkg.subtitle}
                    </p>
                </div>

                {/* Highlights */}
                <ul className="flex flex-col gap-1.5 flex-1">
                    {pkg.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11.5px] text-[var(--color-navy-text)] leading-snug">
                            <span style={{ color: accentColor, fontSize: "8px", marginTop: "3px", flexShrink: 0 }}>◆</span>
                            <span>{h}</span>
                        </li>
                    ))}
                </ul>

                {/* Price teaser */}
                {pkg.priceFrom && (
                    <p className="font-cinzel text-[11px] tracking-wide" style={{ color: accentColor }}>
                        {pkg.priceFrom}
                    </p>
                )}

                {/* CTAs */}
                <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                    {hasItinerary && (
                        <a
                            href={pkg.ternItineraryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-cinzel uppercase text-[9px] tracking-[0.16em] text-center py-2.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                            style={{
                                background: accentColor,
                                color: "var(--color-navy-dark)",
                                fontWeight: 600,
                            }}
                        >
                            View Full Itinerary
                        </a>
                    )}
                    <button
                        onClick={handleInquire}
                        className="font-cinzel uppercase text-[9px] tracking-[0.16em] text-center py-2.5 rounded-lg border transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                            borderColor: accentColor,
                            color: accentColor,
                            background: "transparent",
                        }}
                    >
                        Inquire About This Trip
                    </button>
                </div>
            </div>
        </div>
    );
}
