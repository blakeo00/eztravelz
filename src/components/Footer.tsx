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
                                src="/images/logo5.jpg"
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
                    <div className="bg-dark-800 rounded-2xl p-8 text-center">
                        <h3 className="text-lg font-bold mb-2">Stay in the Loop!</h3>
                        <p className="text-slate-400 text-sm mb-6">
                            Subscribe to the EZtravelZ newsletter for exclusive guides exploring the world.
                        </p>
                        <div className="flex justify-center my-8">
                            <a 
                                href="https://newsletter.eztravelz.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Join the EZtravelZ Insider
                            </a>
                        </div>
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
