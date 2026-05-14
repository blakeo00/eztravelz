"use client";

import Link from "next/link";
import { headerLinks } from "./Header";

const MAGAZINE_LINKS = [
    { label: "Signature Travel", href: "/signature-travel" },
    { label: "All Articles", href: "/all-articles" },
    { label: "The Mission", href: "/about" },
    { label: "Contact", href: "mailto:info@eztravelz.com" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
];

const SOCIAL_LINKS = [
    { label: "Instagram", href: "https://www.instagram.com/the_eztravelz/" },
    { label: "Pinterest", href: "https://www.pinterest.com/blakeo007/" },
    { label: "Substack", href: "https://substack.com/" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
    return (
        <div>
            <h3 className="font-cinzel text-[14px] text-[var(--color-gold-base)] mb-4">
                {title}
            </h3>
            <ul className="flex flex-col gap-2">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            className="font-sans text-[11px] text-[var(--color-cream-base)] hover:text-[var(--color-gold-base)] transition-colors"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="bg-[var(--color-navy-base)] border-t border-[var(--color-gold-base)] border-opacity-20 px-[26px] pt-[60px] pb-[30px]">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    
                    {/* Col 1: Brand */}
                    <div>
                        <Link href="/" className="inline-block mb-3">
                            <span className="font-cinzel text-[18px] text-[var(--color-cream-base)]">
                                EZtravelZ
                            </span>
                        </Link>
                        <p className="font-sans text-[11px] text-[#A1B2C6] max-w-[200px]">
                            Not everywhere. Just the places that matter.
                        </p>
                    </div>

                    {/* Col 2: Destinations */}
                    <FooterColumn title="Destinations" links={headerLinks} />

                    {/* Col 3: The Magazine */}
                    <FooterColumn title="The Magazine" links={MAGAZINE_LINKS} />

                    {/* Col 4: Social */}
                    <FooterColumn title="Social" links={SOCIAL_LINKS} />

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#325070] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[11px] text-[#6A7F96]">
                    <p>© {new Date().getFullYear()} EZtravelZ. All rights reserved.</p>
                    <p>
                        EZtravelZ participates in affiliate programs.{" "}
                        <Link href="/affiliate-disclosure" className="text-[var(--color-gold-base)] hover:text-[var(--color-cream-base)] transition-colors underline">
                            Disclosure
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
