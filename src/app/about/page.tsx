"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkWithUs from "@/components/WorkWithUs";

/**
 * Cookie Consent Banner
 * Shown once on first visit; dismissed state persisted in localStorage.
 */
function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem("ez-cookie-consent");
        if (!accepted) setVisible(true);
    }, []);

    const accept = () => {
        localStorage.setItem("ez-cookie-consent", "true");
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem("ez-cookie-consent", "declined");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[999] p-4 sm:p-6">
            <div
                className="max-w-4xl mx-auto rounded-2xl shadow-2xl border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                style={{ background: "rgba(21, 34, 56, 0.97)", backdropFilter: "blur(16px)" }}
            >
                <div className="text-4xl flex-shrink-0">🍪</div>
                <div className="flex-1">
                    <p className="font-cinzel font-semibold mb-1 text-sm text-[var(--color-cream-base)]">
                        We use cookies to improve your experience
                    </p>
                    <p className="text-[var(--color-navy-text)] text-xs leading-relaxed">
                        EZtravelZ uses cookies to enhance your browsing experience, analyze site traffic,
                        and support our affiliate partnerships.{" "}
                        <Link href="/privacy-policy" className="text-[var(--color-gold-base)] underline hover:opacity-80 transition-opacity">
                            Privacy Policy.
                        </Link>
                    </p>
                </div>
                <div className="flex gap-3 flex-shrink-0 self-stretch sm:self-center">
                    <button
                        onClick={decline}
                        className="px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-[var(--color-navy-text)] hover:border-white/40 hover:text-white transition-all duration-200 font-cinzel uppercase tracking-widest"
                    >
                        Decline
                    </button>
                    <button
                        onClick={accept}
                        className="px-5 py-2 rounded-full text-xs font-bold text-[var(--color-navy-dark)] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 shadow-lg font-cinzel uppercase tracking-widest"
                        style={{ background: "var(--color-gold-base)" }}
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
}

const pillars = [
    {
        icon: "🎰",
        title: "Vegas Baby",
        desc: "Las Vegas for people who want more than the Strip. We uncover the history, the hidden haunts, and the local culture that most visitors never find.",
        href: "/vegas-locals",
        article: { label: "Six Haunted Hotspots in Las Vegas", href: "/vegas-locals/vegas-locals-guide" },
    },
    {
        icon: "✨",
        title: "Beyond the Neon",
        desc: "The Las Vegas that exists outside the casino corridor — state parks, small towns, and day trips that start the moment you leave the Strip behind.",
        href: "/beyond-the-neon",
        article: { label: "Six Free Things to Do in Las Vegas", href: "/beyond-the-neon/six-free-things" },
    },
    {
        icon: "🐾",
        title: "Pet-Friendly Travel",
        desc: "Guides for travelers who refuse to leave their animals behind — from airline regulations to road trip safety and the best pet-welcoming destinations.",
        href: "/pet-travel",
        article: { label: "Paws & Away: What Every Pet Traveler Needs to Know", href: "/pet-travel/paws-and-away-pet-traveler-guide" },
    },
    {
        icon: "👻",
        title: "Haunted Tours",
        desc: "Where history and mystery overlap. We explore the legends, documented accounts, and overnight experiences that make certain places impossible to forget.",
        href: "/haunted-tours",
        article: { label: "The Stanley Hotel — Where the Nightmare Became the Novel", href: "/haunted-tours/stanley-hotel-where-the-nightmare-became-the-novel" },
    },
    {
        icon: "🍷",
        title: "Wine & Brewery Destinations",
        desc: "Tasting rooms, craft breweries, and wine trails worth building an entire trip around — with the history and the terroir that makes each glass taste like somewhere.",
        href: "/wine-destinations",
        article: { label: "Holy Water and Grape Bricks — How God Saved American Wine", href: "/wine-destinations/holy-water-and-grape-bricks-prohibition-wine-trail" },
    },
    {
        icon: "🏟️",
        title: "Sports Travel",
        desc: "Game-day pilgrimages to the world's greatest stadiums and the bucket-list sporting events — from Lambeau Field to the FIFA World Cup — that define a fan's life.",
        href: "/sports-travel",
        article: { label: "Titletown, USA: A Pilgrimage to Lambeau Field", href: "/sports-travel/titletown-usa-lambeau-field-nfl-pilgrimage" },
    },
    {
        icon: "🎬",
        title: "Cinematic Travel",
        desc: "The real locations behind iconic films. We cover the history, the access, and what it actually feels like to stand where the camera once rolled.",
        href: "/cinematic-travel",
        article: { label: "Room 217 and the Hotel That Dreamed Up The Shining", href: "/cinematic-travel/reel-roads-room-217-the-shining" },
    },
    {
        icon: "🍽️",
        title: "Culinary Quests",
        desc: "For travelers who plan the whole trip around the meal — regional food cultures, standout dining experiences, and the road trips built entirely around what's on the plate.",
        href: "/culinary-quests",
        article: { label: "Smoke, Patience, and Butcher Paper: A Texas BBQ Road Trip", href: "/culinary-quests/smoke-patience-butcher-paper-texas-bbq-road-trip" },
    },
];

export default function AboutPage() {
    return (
        <>
            <Header />

            <main className="min-h-screen" style={{ background: "var(--color-cream-base)" }}>

                {/* ── Hero ─────────────────────────────────────────── */}
                <section className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
                    style={{ minHeight: '420px', paddingTop: '96px', paddingBottom: '64px' }}
                >
                    <Image
                        src="/images/Redrock.jpg"
                        alt="Red rock canyon landscape"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,31,56,0.78) 0%, rgba(15,31,56,0.62) 50%, rgba(15,31,56,0.80) 100%)" }} />

                    <div className="relative z-10 flex flex-col items-center gap-4 max-w-[680px] mx-auto">
                        <div style={{ width: '36px', height: '1.5px', background: 'var(--color-gold-base)', borderRadius: '2px' }} />
                        <span className="font-cinzel uppercase text-[10px] tracking-[0.22em] text-[var(--color-gold-base)]">
                            Who We Are
                        </span>
                        <h1 className="font-cinzel text-[var(--color-cream-base)] leading-tight"
                            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                            Travel That Goes<br />
                            <span style={{ color: 'var(--color-gold-base)' }}>Deeper Than the Destination</span>
                        </h1>
                        <p className="font-sans text-[var(--color-cream-base)] opacity-75 leading-relaxed max-w-[480px]"
                            style={{ fontSize: '15px' }}>
                            EZtravelZ is a niche travel magazine for people who want meaning on their trips —
                            not just a checked box on a bucket list.
                        </p>
                    </div>
                </section>

                {/* ── Mission ──────────────────────────────────────── */}
                <section className="py-16 sm:py-20 px-6" style={{ background: 'var(--color-navy-base)' }}>
                    <div className="max-w-[760px] mx-auto flex flex-col gap-6">
                        <div className="flex flex-col items-center gap-3 text-center mb-2">
                            <div style={{ width: '32px', height: '1.5px', background: 'var(--color-gold-base)', borderRadius: '2px' }} />
                            <h2 className="font-cinzel text-[var(--color-cream-base)]" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}>
                                Our Mission
                            </h2>
                        </div>

                        <p className="font-sans leading-relaxed text-[var(--color-navy-text)]" style={{ fontSize: '15px' }}>
                            While many of our recommendations include well-known destinations, we go deeper — exploring
                            the soul of each place to uncover the once-in-a-lifetime experiences that live in your
                            memory long after you have returned home.
                        </p>
                        <p className="font-sans leading-relaxed text-[var(--color-navy-text)]" style={{ fontSize: '15px' }}>
                            Our <Link href="/blog" className="text-[var(--color-gold-base)] underline hover:opacity-80 transition-opacity">guides and articles</Link> are
                            built to inform and entertain, with real logistics, honest detail, and the kind of
                            specificity that actually helps you plan. We don&apos;t recycle press releases. We write
                            the guide we wish existed before we made the trip ourselves.
                        </p>
                        <p className="font-sans leading-relaxed text-[var(--color-navy-text)]" style={{ fontSize: '15px' }}>
                            We&apos;re based in Las Vegas, Nevada. If you think you already know{" "}
                            <Link href="/vegas-locals" className="text-[var(--color-gold-base)] underline hover:opacity-80 transition-opacity">Vegas Baby</Link>,
                            think again. And{" "}
                            <Link href="/beyond-the-neon" className="text-[var(--color-gold-base)] underline hover:opacity-80 transition-opacity">Beyond the Neon</Link>{" "}
                            of the Strip lies a Nevada worth discovering on its own merits — state parks,
                            historical sites, and day trips that most visitors never know to look for.
                        </p>
                        <p className="font-sans leading-relaxed text-[var(--color-navy-text)]" style={{ fontSize: '15px' }}>
                            From there we branch into eight passion-driven niches:{" "}
                            <Link href="/pet-travel" className="text-[var(--color-gold-base)] underline hover:opacity-80 transition-opacity">pet-friendly travel</Link>,{" "}
                            <Link href="/sports-travel" className="text-[var(--color-gold-base)] underline hover:opacity-80 transition-opacity">sports travel</Link>,{" "}
                            <Link href="/culinary-quests" className="text-[var(--color-gold-base)] underline hover:opacity-80 transition-opacity">culinary quests</Link>,{" "}
                            <Link href="/wine-destinations" className="text-[var(--color-gold-base)] underline hover:opacity-80 transition-opacity">wine & brewery destinations</Link>,{" "}
                            <Link href="/cinematic-travel" className="text-[var(--color-gold-base)] underline hover:opacity-80 transition-opacity">cinematic travel</Link>, and{" "}
                            <Link href="/haunted-tours" className="text-[var(--color-gold-base)] underline hover:opacity-80 transition-opacity">haunted tours</Link>.
                            Whatever your passion, EZtravelZ goes the extra mile to make sure your adventure
                            starts informed, prepared, and ready for something real.
                        </p>

                        {/* Talking Tours callout */}
                        <div className="rounded-lg px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[var(--color-gold-base)]/30"
                            style={{ background: 'rgba(255,255,255,0.04)' }}>
                            <span style={{ fontSize: '28px' }}>🎧</span>
                            <div className="flex-1">
                                <p className="font-cinzel text-[var(--color-gold-base)] text-[11px] uppercase tracking-[0.14em] mb-1">
                                    Now Available
                                </p>
                                <p className="font-sans text-[var(--color-cream-base)] text-[14px] leading-snug mb-2">
                                    <strong>Talking Tours</strong> — hear the stories of the places you want to visit from the comfort
                                    of your home, with just the click of your mouse.
                                </p>
                                <Link href="/talking-tours"
                                    className="font-cinzel uppercase text-[9px] tracking-[0.16em] text-[var(--color-gold-base)] underline hover:opacity-80 transition-opacity">
                                    Explore Talking Tours →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Pillar Categories ─────────────────────────────── */}
                <section className="py-16 sm:py-20 px-6" style={{ background: 'var(--color-cream-base)' }}>
                    <div className="max-w-[1200px] mx-auto">
                        <div className="flex flex-col items-center gap-3 text-center mb-12">
                            <div style={{ width: '32px', height: '1.5px', background: 'var(--color-gold-base)', borderRadius: '2px' }} />
                            <h2 className="font-cinzel text-[var(--color-navy-base)]" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}>
                                What We Cover
                            </h2>
                            <p className="font-sans text-[var(--color-navy-base)]/60 max-w-[480px] leading-relaxed" style={{ fontSize: '14px' }}>
                                Eight passion-driven niches, each built because generic travel advice wasn&apos;t good enough.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {pillars.map((p) => (
                                <div
                                    key={p.href}
                                    className="flex flex-col gap-3 rounded-lg p-5 border border-[var(--color-navy-base)]/15 bg-white/60"
                                >
                                    <div style={{ fontSize: '26px' }}>{p.icon}</div>
                                    <h3 className="font-cinzel text-[var(--color-navy-base)] text-[11px] uppercase tracking-[0.12em]">
                                        {p.title}
                                    </h3>
                                    <p className="font-sans text-[var(--color-navy-base)]/70 text-[12.5px] leading-relaxed flex-1">
                                        {p.desc}
                                    </p>
                                    <div className="flex flex-col gap-1.5 pt-1 border-t border-[var(--color-navy-base)]/10">
                                        <Link
                                            href={p.article.href}
                                            className="font-sans text-[11.5px] text-[var(--color-navy-base)] hover:text-[var(--color-gold-base)] transition-colors leading-snug underline underline-offset-2"
                                        >
                                            {p.article.label}
                                        </Link>
                                        <Link
                                            href={p.href}
                                            className="font-cinzel uppercase text-[9px] tracking-[0.14em] text-[var(--color-gold-base)] hover:opacity-80 transition-opacity"
                                        >
                                            All {p.title} →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Cookies & Privacy ─────────────────────────────── */}
                <section className="py-16 sm:py-20 px-6" style={{ background: 'var(--color-navy-base)' }}>
                    <div className="max-w-[760px] mx-auto">
                        <div className="flex flex-col items-center gap-3 text-center mb-10">
                            <div style={{ width: '32px', height: '1.5px', background: 'var(--color-gold-base)', borderRadius: '2px' }} />
                            <h2 className="font-cinzel text-[var(--color-cream-base)]" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}>
                                Cookies &amp; Your Privacy
                            </h2>
                        </div>

                        <div className="rounded-lg border border-white/10 p-8 space-y-5 font-sans text-[var(--color-navy-text)] leading-relaxed"
                            style={{ background: 'rgba(255,255,255,0.04)', fontSize: '14px' }}>
                            <p>EZtravelZ uses cookies to make your experience better and to keep the lights on. Here&apos;s exactly what we use and why:</p>
                            <ul className="space-y-4 list-none">
                                {[
                                    { icon: "⚙️", label: "Essential cookies", desc: "These run the site — things like remembering this consent notice. They cannot be turned off." },
                                    { icon: "📊", label: "Analytics cookies", desc: "We use anonymous analytics (Google Analytics) to understand which guides are most useful so we can write more of what you actually want." },
                                    { icon: "💼", label: "Affiliate & advertising cookies", desc: "Some links on EZtravelZ are affiliate links to partners like Amazon, Viator, Expedia, and Hotels.com. These partners may set cookies to track referrals. We earn a small commission if you make a purchase — at no extra cost to you.", link: { text: "Affiliate Disclosure", href: "/affiliate-disclosure" } },
                                ].map((item) => (
                                    <li key={item.label} className="flex gap-3 items-start">
                                        <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                                        <span>
                                            <strong className="text-[var(--color-cream-base)]">{item.label}:</strong>{" "}
                                            {item.desc}
                                            {item.link && (
                                                <>
                                                    {" "}See our full{" "}
                                                    <Link href={item.link.href} className="text-[var(--color-gold-base)] underline hover:opacity-80 transition-opacity">
                                                        {item.link.text}
                                                    </Link>.
                                                </>
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                You can clear or block cookies at any time through your browser settings. Read our full{" "}
                                <Link href="/privacy-policy" className="text-[var(--color-gold-base)] underline hover:opacity-80 transition-opacity">
                                    Privacy Policy
                                </Link>{" "}
                                for complete details.
                            </p>
                        </div>
                    </div>
                </section>

                <WorkWithUs />

            </main>

            <Footer />
            <CookieConsent />
        </>
    );
}
