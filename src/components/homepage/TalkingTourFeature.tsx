"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
    {
        src: "/images/Reno.jpg",
        alt: "Downtown Reno — Virginia Street Arch",
        caption: "Downtown Reno",
    },
    {
        src: "/images/Renoriv.jpg",
        alt: "Truckee River Riverwalk District, Reno",
        caption: "Reno Riverwalk District",
    },
    {
        src: "/images/MS.jpg",
        alt: "Lake Tahoe Emerald Bay Scenic Cruise",
        caption: "Lake Tahoe — Emerald Bay",
    },
    {
        src: "/images/Crybay.jpg",
        alt: "Incline Village Crystal Bay, North Lake Tahoe",
        caption: "Incline Village / Crystal Bay",
    },
    {
        src: "/images/VC.jpg",
        alt: "Virginia City Historic Mining Town, Nevada",
        caption: "Virginia City",
    },
];

const AUTO_ADVANCE_MS = 4500;

export default function TalkingTourFeature() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    const next = useCallback(() => setActive((i) => (i + 1) % SLIDES.length), []);
    const prev = useCallback(() => setActive((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

    useEffect(() => {
        if (paused) return;
        const t = setInterval(next, AUTO_ADVANCE_MS);
        return () => clearInterval(t);
    }, [paused, next]);

    return (
        <div
            className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-gold-base)]/30"
            style={{ background: "linear-gradient(135deg, #0c1f35 0%, #162840 60%, #1a3050 100%)" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* ── Header ── */}
            <div className="px-6 pt-4 pb-2 text-center">
                <p
                    className="font-cinzel uppercase text-[10px] tracking-[0.2em] mb-1"
                    style={{ color: "var(--color-gold-base)" }}
                >
                    Talking Tour Feature Destination
                </p>
                <h2
                    className="font-cinzel text-[var(--color-cream-base)] leading-tight"
                    style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", fontWeight: 700 }}
                >
                    The EZtravelZ Talking Tour Feature Destination
                </h2>
                <div
                    className="mx-auto mt-1.5"
                    style={{ width: "48px", height: "2px", background: "var(--color-gold-base)", borderRadius: "2px" }}
                />
            </div>

            {/* ── Carousel ── */}
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                {SLIDES.map((slide, i) => (
                    <div
                        key={slide.src}
                        className="absolute inset-0 transition-opacity duration-700"
                        style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            className="object-cover"
                            priority={i === 0}
                            sizes="(max-width: 1200px) 100vw, 1200px"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,25,45,0.7) 0%, transparent 55%)" }} />
                        {/* Caption */}
                        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 z-10">
                            <span
                                className="font-cinzel text-[var(--color-cream-base)] text-[11px] uppercase tracking-[0.16em]"
                                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
                            >
                                {slide.caption}
                            </span>
                        </div>
                    </div>
                ))}

                {/* Prev / Next arrows */}
                <button
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                    {SLIDES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className="rounded-full transition-all duration-300"
                            style={{
                                width: i === active ? "20px" : "7px",
                                height: "7px",
                                background: i === active ? "var(--color-gold-base)" : "rgba(255,255,255,0.45)",
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* ── Description + CTA ── */}
            <div className="px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                    <h3
                        className="font-cinzel text-[var(--color-gold-base)] mb-2"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", fontWeight: 600 }}
                    >
                        Reno &amp; Lake Tahoe, Nevada
                    </h3>
                    <p
                        className="font-sans leading-relaxed"
                        style={{ color: "var(--color-cream-base)", opacity: 0.8, fontSize: "14px", maxWidth: "640px" }}
                    >
                        From the neon arch on Virginia Street to the impossible blue of Emerald Bay, 
                        Reno and Lake Tahoe offer two completely different worlds within a single tank of gas. 
                        Raft the Truckee, charter a sunset boat on the North Shore, and step back to 1880 in 
                        Virginia City — all with our interactive audio-guided Talking Tour.
                    </p>
                </div>
                <Link
                    href="/talking-tours"
                    className="shrink-0 font-cinzel uppercase text-[10px] tracking-[0.16em] px-7 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2"
                    style={{
                        background: "var(--color-gold-base)",
                        color: "var(--color-navy-dark)",
                        fontWeight: 700,
                    }}
                >
                    Explore on Talking Tours
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
