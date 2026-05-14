import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkWithUs from "@/components/WorkWithUs";
import SupplierSection from "@/components/SupplierSection";
import TernTripForm from "@/components/TernTripForm";

import { disneyPackages, virginPackages } from "@/data/packages";

// ─── SEO ─────────────────────────────────────────────────────────

export const metadata: Metadata = {
    title: "Signature Travel — Curated Vacation Packages | EZtravelZ",
    description:
        "Browse curated Disney, Virgin Voyages, and luxury vacation packages crafted by a travel advisor with 40 years of hospitality experience. Start planning your dream trip today.",
    alternates: {
        canonical: "/signature-travel",
    },
    openGraph: {
        title: "Signature Travel — Curated Vacation Packages | EZtravelZ",
        description:
            "Browse curated Disney, Virgin Voyages, and luxury vacation packages crafted by a travel advisor with 40 years of hospitality experience.",
        url: "https://eztravelz.com/signature-travel",
        siteName: "EZtravelZ",
        type: "website",
    },
};

// ─── Page ────────────────────────────────────────────────────────

export default function SignatureTravelPage() {
    return (
        <>
            <Header />

            <main className="min-h-screen">

                {/* ═══════════════════════════════════════════════
                    HERO
                ═══════════════════════════════════════════════ */}
                <section
                    className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
                    style={{ minHeight: "520px", paddingTop: "96px", paddingBottom: "72px" }}
                >
                    {/* Background — reuse an existing cinematic travel image */}
                    <Image
                        src="/images/Sunset 1.jpg"
                        alt="Sunset over a tropical destination"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                    {/* Dark overlay for text legibility */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(15,31,56,0.82) 0%, rgba(15,31,56,0.55) 40%, rgba(15,31,56,0.85) 100%)",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-5 max-w-[700px] mx-auto">
                        {/* Eyebrow */}
                        <div className="flex flex-col items-center gap-3">
                            <div
                                style={{
                                    width: "40px",
                                    height: "2px",
                                    background: "var(--color-gold-base)",
                                    borderRadius: "2px",
                                }}
                            />
                            <span className="font-cinzel uppercase text-[10px] tracking-[0.24em] text-[var(--color-gold-base)]">
                                EZtravelZ Signature Collection
                            </span>
                        </div>

                        {/* Heading */}
                        <h1
                            className="font-cinzel text-[var(--color-cream-base)] leading-tight"
                            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
                        >
                            Signature{" "}
                            <span style={{ color: "var(--color-gold-base)" }}>Travel</span>
                        </h1>

                        {/* Subtitle */}
                        <p
                            className="font-sans text-[var(--color-cream-base)] opacity-80 leading-relaxed max-w-[520px]"
                            style={{ fontSize: "16px" }}
                        >
                            Curated vacation packages from the world&apos;s most iconic travel brands —
                            personally crafted by an advisor with 40 years of hospitality expertise.
                            Browse, be inspired, and let&apos;s build your perfect trip.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                            <a
                                href="#packages"
                                className="font-cinzel uppercase text-[10px] tracking-[0.2em] px-7 py-3 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 shadow-lg"
                                style={{
                                    background: "var(--color-gold-base)",
                                    color: "var(--color-navy-dark)",
                                    fontWeight: 600,
                                }}
                            >
                                Browse Packages
                            </a>
                            <a
                                href="#trip-request"
                                className="font-cinzel uppercase text-[10px] tracking-[0.2em] px-7 py-3 rounded-lg border transition-all duration-200 hover:-translate-y-0.5"
                                style={{
                                    borderColor: "var(--color-cream-base)",
                                    color: "var(--color-cream-base)",
                                }}
                            >
                                Start Planning
                            </a>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════
                    TRUST BAR
                ═══════════════════════════════════════════════ */}
                <section
                    className="py-6 px-6 border-y"
                    style={{
                        background: "var(--color-cream-base)",
                        borderColor: "rgba(217,179,106,0.3)",
                    }}
                >
                    <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
                        {[
                            { icon: "🏨", text: "40 Years in Hospitality" },
                            { icon: "🤝", text: "Independent Advisor — BNT Travel Group" },
                            { icon: "✨", text: "Personalized Itineraries" },
                            { icon: "🛡️", text: "Trusted Supplier Partnerships" },
                        ].map((item) => (
                            <div
                                key={item.text}
                                className="flex items-center gap-2"
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="font-cinzel uppercase text-[9px] tracking-[0.14em] text-[var(--color-navy-base)]">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════
                    INTRO TEXT
                ═══════════════════════════════════════════════ */}
                <section
                    className="py-14 sm:py-16 px-6"
                    style={{ background: "var(--color-navy-base)" }}
                >
                    <div className="max-w-[760px] mx-auto text-center flex flex-col items-center gap-5">
                        <div
                            style={{
                                width: "32px",
                                height: "1.5px",
                                background: "var(--color-gold-base)",
                                borderRadius: "2px",
                            }}
                        />
                        <h2
                            className="font-cinzel text-[var(--color-cream-base)]"
                            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
                        >
                            How It Works
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4 text-center">
                            {[
                                {
                                    step: "01",
                                    title: "Browse",
                                    desc: "Explore curated packages from Disney and Virgin Voyages — each one hand-selected for its quality and experience.",
                                },
                                {
                                    step: "02",
                                    title: "Preview",
                                    desc: "View the full professional itinerary to see exactly what's included — day by day, experience by experience.",
                                },
                                {
                                    step: "03",
                                    title: "Inquire",
                                    desc: "Submit a quick trip request and I'll follow up personally with a customized plan tailored to your needs.",
                                },
                            ].map((item) => (
                                <div key={item.step} className="flex flex-col items-center gap-3">
                                    <span
                                        className="font-cinzel text-[28px] font-bold"
                                        style={{ color: "var(--color-gold-base)", opacity: 0.5 }}
                                    >
                                        {item.step}
                                    </span>
                                    <h3 className="font-cinzel text-[var(--color-cream-base)] text-[14px] uppercase tracking-[0.12em]">
                                        {item.title}
                                    </h3>
                                    <p className="font-sans text-[var(--color-navy-text)] text-[13px] leading-relaxed max-w-[220px]">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════
                    PACKAGE SECTIONS
                ═══════════════════════════════════════════════ */}
                <div
                    id="packages"
                    style={{ background: "var(--color-navy-dark)" }}
                >
                    {/* Disney Section */}
                    <SupplierSection
                        supplier="disney"
                        packages={disneyPackages}
                    />

                    {/* Divider */}
                    <div className="max-w-[200px] mx-auto" style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />

                    {/* Virgin Voyages Section */}
                    <SupplierSection
                        supplier="virgin"
                        packages={virginPackages}
                    />
                </div>

                {/* ═══════════════════════════════════════════════
                    TERN TRIP REQUEST FORM
                ═══════════════════════════════════════════════ */}
                <TernTripForm
                    ternFormUrl="" /* Replace with your Tern Trip Request Form URL */
                    embedMode={false}
                />

                {/* ═══════════════════════════════════════════════
                    WORK WITH US (existing shared CTA)
                ═══════════════════════════════════════════════ */}
                <WorkWithUs />

            </main>

            <Footer />
        </>
    );
}
