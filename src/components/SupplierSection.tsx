import React from "react";
import type { TravelPackage } from "@/data/packages";
import PackageCard from "./PackageCard";

/**
 * SupplierSection — A branded, themed wrapper for a group of PackageCards.
 *
 * Each supplier (Disney, Virgin, etc.) gets its own visual section with
 * accent colors, a title block, and a responsive card grid. This gives
 * each supplier the branded presentation their partner guidelines expect.
 */

interface SupplierSectionProps {
    supplier: "disney" | "virgin" | "custom";
    packages: TravelPackage[];
    formSectionId?: string;
}

const supplierConfig = {
    disney: {
        title: "Disney Destinations",
        tagline: "Where Magic Meets Meticulous Planning",
        description:
            "From the enchanted decks of Disney Cruise Line to the timeless wonder of Walt Disney World, these packages are designed for families and Disney devotees who want every detail handled — so you can focus on the magic.",
        accentColor: "#A78BFA",
        gradientFrom: "#1A1A6C",
        gradientTo: "#4B3F8F",
        icon: "✦",
    },
    virgin: {
        title: "Virgin Voyages",
        tagline: "Adults-Only. All-Inclusive. All Attitude.",
        description:
            "A cruise line that rewrote the rules — no buffets, no kids, no hidden fees. Virgin Voyages is for travelers who want world-class dining, festival-caliber entertainment, and the kind of relaxation that actually feels like a vacation.",
        accentColor: "#FB7185",
        gradientFrom: "#8B0015",
        gradientTo: "#E30613",
        icon: "⚓",
    },
    custom: {
        title: "Custom Experiences",
        tagline: "Your Vision, Our Expertise",
        description:
            "Have something specific in mind? We design bespoke itineraries tailored to your interests, timeline, and budget — backed by 40 years of hospitality experience.",
        accentColor: "var(--color-gold-base)",
        gradientFrom: "var(--color-navy-dark)",
        gradientTo: "var(--color-navy-base)",
        icon: "✈",
    },
};

export default function SupplierSection({
    supplier,
    packages,
    formSectionId = "trip-request",
}: SupplierSectionProps) {
    const config = supplierConfig[supplier];

    if (packages.length === 0) return null;

    return (
        <section className="relative py-16 sm:py-20 px-6 overflow-hidden">
            {/* Subtle background accent */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${config.gradientFrom} 0%, transparent 70%)`,
                }}
            />

            <div className="relative max-w-[1200px] mx-auto">
                {/* ── Section Header ───────────────────────── */}
                <div className="flex flex-col items-center text-center mb-12 gap-4">
                    {/* Decorative icon */}
                    <span
                        className="text-2xl"
                        style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))" }}
                    >
                        {config.icon}
                    </span>

                    {/* Accent rule */}
                    <div
                        style={{
                            width: "40px",
                            height: "2px",
                            background: config.accentColor,
                            borderRadius: "2px",
                        }}
                    />

                    <h2
                        className="font-cinzel text-[var(--color-cream-base)] leading-tight"
                        style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
                    >
                        {config.title}
                    </h2>

                    <p
                        className="font-cinzel italic text-[13px] tracking-wide"
                        style={{ color: config.accentColor }}
                    >
                        {config.tagline}
                    </p>

                    <p className="font-sans text-[var(--color-navy-text)] text-[14px] leading-relaxed max-w-[600px]">
                        {config.description}
                    </p>
                </div>

                {/* ── Package Cards Grid ───────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {packages.map((pkg) => (
                        <PackageCard
                            key={pkg.id}
                            pkg={pkg}
                            accentColor={config.accentColor}
                            formSectionId={formSectionId}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
