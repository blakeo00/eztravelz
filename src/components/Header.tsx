"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Global Header Navigation
 */
export const headerLinks = [
    { label: "Vegas Baby", href: "/vegas-locals" },
    { label: "Beyond The Neon", href: "/beyond-the-neon" },
    { label: "Pet Travel", href: "/pet-travel" },
    { label: "Haunted Tours", href: "/haunted-tours" },
    { label: "Wine & Brewery", href: "/wine-destinations" },
    { label: "Sports Travel", href: "/sports-travel" },
    { label: "Cinematic Travel", href: "/cinematic-travel" },
    { label: "Culinary Quests", href: "/culinary-quests" },
    { label: "All Articles", href: "/blog" },
    { label: "Talking Tours", href: "/talking-tours" },
    { label: "About", href: "/about" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-navy-base)] border-b border-[#325070]">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[60px]">
                {/* ---- Logo — flush to corner, full navbar height ---- */}
                <Link href="/" className="flex items-center shrink-0 self-stretch">
                    <img src="/images/Logo%203.png" alt="EZtravelZ Logo" className="h-full w-auto object-contain" />
                </Link>

                {/* ---- Desktop Navigation ---- */}
                <nav className="hidden md:flex items-center gap-[14px] pr-[26px]">
                    {headerLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="font-sans text-[12px] font-medium text-[var(--color-cream-base)] hover:text-[var(--color-gold-base)] transition-colors whitespace-nowrap"
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* Search Icon Placeholder */}
                    <button aria-label="Search" className="text-[var(--color-cream-base)] hover:text-[var(--color-gold-base)] transition-colors ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                    </button>
                </nav>

                {/* ---- Mobile Hamburger ---- */}
                <button
                    aria-label="Toggle menu"
                    className="md:hidden flex flex-col gap-[5px] p-2 mr-[16px]"
                    onClick={() => setMobileOpen((prev) => !prev)}
                >
                    <span
                        className={`block w-[20px] h-[2px] bg-[var(--color-cream-base)] transition-transform duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block w-[20px] h-[2px] bg-[var(--color-cream-base)] transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block w-[20px] h-[2px] bg-[var(--color-cream-base)] transition-transform duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {/* ---- Mobile Slide-Down Menu ---- */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 bg-[var(--color-navy-dark)] ${mobileOpen ? "max-h-[500px] border-b border-[#325070]" : "max-h-0"
                    }`}
            >
                <nav className="flex flex-col px-[26px] py-4">
                    {headerLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-3 text-[var(--color-cream-base)] hover:text-[var(--color-gold-base)] font-sans text-[14px] font-medium tracking-wide border-b border-[#325070] last:border-0 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}

                </nav>
            </div>
        </header>
    );
}
