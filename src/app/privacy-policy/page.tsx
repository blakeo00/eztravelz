import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy — EZtravelZ",
    description:
        "Learn how EZtravelZ collects, uses, and protects your personal information.",
    alternates: {
        canonical: "https://eztravelz.com/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#fff0d4]">
                {/* Hero Banner */}
                <section className="relative bg-[#37507a] text-[#fff0d4] py-20 sm:py-28 border-b-4 border-amber-500/20">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-lg sm:text-xl text-[#fff0d4]/80 max-w-2xl mx-auto">
                            Your privacy is a top priority.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="bg-[#37507a] backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 space-y-8 text-[#fff0d4] leading-relaxed border-2 border-white/10">
                        {/* Last Updated */}
                        <p className="text-sm font-bold text-amber-400">
                            Last Updated: March 2026
                        </p>

                        {/* Intro */}
                        <p className="text-lg text-white">
                            At EZtravelZ, your privacy is a top priority. This
                            Privacy Policy outlines the types of personal
                            information we receive and collect when you visit
                            EZtravelZ.com and how we safeguard your information.
                        </p>

                        {/* Information We Collect */}
                        <div className="border-l-4 border-amber-400 pl-6 bg-white/5 rounded-r-2xl py-6 pr-6">
                            <h2 className="text-xl font-bold text-white mb-3">
                                Information We Collect
                            </h2>
                            <p className="text-white/90">
                                We only collect personal information (like your
                                name and email address) when you voluntarily
                                subscribe to our newsletter. We use this
                                information solely to send you the travel guides
                                and updates you requested.
                            </p>
                        </div>

                        {/* Log Files and Cookies */}
                        <div className="border-l-4 border-[#89D4FF] pl-6 bg-white/5 rounded-r-2xl py-6 pr-6">
                            <h2 className="text-xl font-bold text-white mb-3">
                                Log Files &amp; Cookies
                            </h2>
                            <p className="text-white/90">
                                Like many other websites, we use log files and
                                cookies to analyze trends, administer the site,
                                and track user movement to improve the user
                                experience. This data is not linked to any
                                information that is personally identifiable.
                            </p>
                        </div>

                        {/* Third-Party Links */}
                        <div className="border-l-4 border-[#f9c1c0] pl-6 bg-white/5 rounded-r-2xl py-6 pr-6">
                            <h2 className="text-xl font-bold text-white mb-3">
                                Third-Party Links
                            </h2>
                            <p className="text-white/90">
                                Our website contains links to other sites
                                (including our affiliate partners). Please be
                                aware that we are not responsible for the content
                                or privacy practices of such other sites.
                            </p>
                        </div>

                        {/* Commitment */}
                        <div className="bg-white/10 rounded-2xl p-6 text-center border p-6 border-white/20 shadow-inner">
                            <p className="text-white font-bold">
                                We will never sell, rent, or share your personal
                                information with third parties without your
                                consent.
                            </p>
                        </div>

                        {/* Contact */}
                        <p className="text-center text-white/80 text-sm">
                            Questions?{" "}
                            <Link
                                href="mailto:info@eztravelz.com"
                                className="text-[#38bdf8] font-bold underline underline-offset-4 hover:text-white transition-colors"
                            >
                                Contact us
                            </Link>
                            .
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
