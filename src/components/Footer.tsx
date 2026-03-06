"use client";

import Link from "next/link";
import Image from "next/image";

/**
 * Footer Component
 * Newsletter signup with the exact prompt copy, plus placeholder
 * links for Privacy Policy, Terms of Service, and Affiliate Disclosure.
 */
export default function Footer() {
    return (
        <footer className="bg-dark-900 text-white">
            {/* ---- Upper Footer ---- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Brand + Tagline */}
                    <div>
                        <Link href="/" className="flex items-center mb-4">
                            <Image
                                src="/images/Logo 3.png"
                                alt="EZtravelZ Logo"
                                width={160}
                                height={40}
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-slate-400 max-w-sm leading-relaxed">
                            Curated niche travel experiences for people who know what they
                            love, and want a trip that actually matches it.
                        </p>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="bg-dark-800 rounded-2xl p-8">
                        <h3 className="text-lg font-bold mb-2">Stay in the Loop</h3>
                        <p className="text-slate-400 text-sm mb-6">
                            Join the EZtravelZ Club for exclusive travel guides and packing
                            lists.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col sm:flex-row gap-3"
                        >
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="flex-1 px-4 py-3 rounded-xl bg-dark-950 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
                            />
                            <button
                                type="submit"
                                className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* ---- Bottom Bar ---- */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} EZtravelZ. All rights reserved.</p>
                    <nav className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">
                            Affiliate Disclosure
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
