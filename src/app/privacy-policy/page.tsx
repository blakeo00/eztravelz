import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy — EZtravelZ",
    description:
        "Learn how EZtravelZ collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Banner */}
                <section className="relative bg-gradient-to-br from-brand-600 via-brand-500 to-blue-500 text-white py-20 sm:py-28">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
                            Your privacy is a top priority.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 space-y-8 text-slate-700 leading-relaxed">
                        {/* Last Updated */}
                        <p className="text-sm text-slate-500 font-medium">
                            Last Updated: March 2026
                        </p>

                        {/* Intro */}
                        <p className="text-lg">
                            At EZtravelZ, your privacy is a top priority. This
                            Privacy Policy outlines the types of personal
                            information we receive and collect when you visit
                            EZtravelZ.com and how we safeguard your information.
                        </p>

                        {/* Information We Collect */}
                        <div className="border-l-4 border-brand-500 pl-6 bg-brand-50 rounded-r-2xl py-6 pr-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-3">
                                Information We Collect
                            </h2>
                            <p>
                                We only collect personal information (like your
                                name and email address) when you voluntarily
                                subscribe to our newsletter. We use this
                                information solely to send you the travel guides
                                and updates you requested.
                            </p>
                        </div>

                        {/* Log Files and Cookies */}
                        <div className="border-l-4 border-blue-400 pl-6 bg-blue-50 rounded-r-2xl py-6 pr-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-3">
                                Log Files &amp; Cookies
                            </h2>
                            <p>
                                Like many other websites, we use log files and
                                cookies to analyze trends, administer the site,
                                and track user movement to improve the user
                                experience. This data is not linked to any
                                information that is personally identifiable.
                            </p>
                        </div>

                        {/* Third-Party Links */}
                        <div className="border-l-4 border-amber-400 pl-6 bg-amber-50 rounded-r-2xl py-6 pr-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-3">
                                Third-Party Links
                            </h2>
                            <p>
                                Our website contains links to other sites
                                (including our affiliate partners). Please be
                                aware that we are not responsible for the content
                                or privacy practices of such other sites.
                            </p>
                        </div>

                        {/* Commitment */}
                        <div className="bg-slate-50 rounded-2xl p-6 text-center">
                            <p className="text-slate-800 font-semibold">
                                We will never sell, rent, or share your personal
                                information with third parties without your
                                consent.
                            </p>
                        </div>

                        {/* Contact */}
                        <p className="text-center text-slate-500 text-sm">
                            Questions?{" "}
                            <Link
                                href="/#contact"
                                className="text-brand-600 font-semibold underline underline-offset-2 hover:text-brand-700 transition-colors"
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
