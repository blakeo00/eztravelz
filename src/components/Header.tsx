"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Niche navigation links used in both desktop nav and mobile menu.
 */
const niches = [
    { label: "Pet Travel", href: "/pet-travel" },
    { label: "Haunted Tours", href: "/haunted-tours" },
    { label: "Wine & Brewery Destinations", href: "/wine-destinations" },
    { label: "Sports Travel", href: "/sports-travel" },
    { label: "Cinematic Travel", href: "/cinematic-travel" },
    { label: "Culinary Quests", href: "/culinary-quests" },
];

/**
 * Header Component
 * Sticky navigation bar with EZtravelZ logo, desktop inline links,
 * and a hamburger menu for mobile viewports.
 */
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm"
                : "bg-white/60 backdrop-blur-sm"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24 md:h-20">
                {/* ---- Logo ---- */}
                <Link href="/" className="flex items-center group">
                    <Image
                        src="/images/Logo 3.png"
                        alt="EZtravelZ Logo"
                        width={160}
                        height={40}
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* ---- Desktop Navigation ---- */}
                <nav className="hidden md:flex items-center gap-6">
                    {niches.map((n) => (
                        <Link
                            key={n.href}
                            href={n.href}
                            className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
                        >
                            {n.label}
                        </Link>
                    ))}
                </nav>

                {/* ---- Mobile Hamburger ---- */}
                <button
                    aria-label="Toggle menu"
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMobileOpen((prev) => !prev)}
                >
                    <span
                        className={`block w-6 h-0.5 bg-slate-800 transition-transform duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-slate-800 transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-slate-800 transition-transform duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {/* ---- Mobile Slide-Down Menu ---- */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md ${mobileOpen ? "max-h-96 border-b border-slate-200" : "max-h-0"
                    }`}
            >
                <nav className="flex flex-col gap-1 px-4 py-4">
                    {niches.map((n) => (
                        <Link
                            key={n.href}
                            href={n.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-2 px-3 rounded-lg text-slate-700 hover:bg-brand-50 hover:text-brand-600 font-medium transition-colors"
                        >
                            {n.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
