import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Terms of Service — EZtravelZ",
    description:
        "Read the terms and conditions governing your use of EZtravelZ.com.",
};

export default function TermsOfServicePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Banner */}
                <section className="relative bg-gradient-to-br from-brand-600 via-brand-500 to-blue-500 text-white py-20 sm:py-28">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
                            Please read these terms carefully before using our
                            site.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 space-y-10 text-slate-700 leading-relaxed">
                        {/* Last Updated */}
                        <p className="text-sm text-slate-500 font-medium">
                            Last Updated: March 2026
                        </p>

                        {/* 1. Agreement to Terms */}
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">
                                1. Agreement to Terms
                            </h2>
                            <p>
                                By accessing or using EZtravelZ.com (the
                                &ldquo;Site&rdquo;), you agree to be bound by
                                these Terms of Service. If you do not agree with
                                all of these terms, you are expressly prohibited
                                from using the Site and must discontinue use
                                immediately.
                            </p>
                        </div>

                        {/* 2. Intellectual Property */}
                        <div className="border-l-4 border-brand-500 pl-6 bg-brand-50 rounded-r-2xl py-6 pr-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-3">
                                2. Intellectual Property Rights
                            </h2>
                            <p>
                                Unless otherwise indicated, the Site is our
                                proprietary property. All source code, databases,
                                functionality, software, website designs, audio,
                                video, text, photographs, and graphics on the
                                Site (collectively, the &ldquo;Content&rdquo;)
                                are owned or controlled by us, and are protected
                                by copyright and trademark laws. You may not
                                reproduce, distribute, or create derivative works
                                from our Content without explicit permission.
                            </p>
                        </div>

                        {/* 3. Third-Party Websites */}
                        <div className="border-l-4 border-blue-400 pl-6 bg-blue-50 rounded-r-2xl py-6 pr-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-3">
                                3. Third-Party Websites &amp; Affiliate Links
                            </h2>
                            <p className="mb-3">
                                The Site contains links to other websites
                                (&ldquo;Third-Party Websites&rdquo;) as well as
                                articles, photographs, text, graphics, pictures,
                                designs, video, information, and other content
                                originating from third parties.
                            </p>
                            <p>
                                EZtravelZ is a participant in various affiliate
                                networks. We may earn a commission if you click
                                on a link and make a purchase through these
                                Third-Party Websites. We do not investigate,
                                monitor, or check Third-Party Websites for
                                accuracy, appropriateness, or completeness, and
                                we are not responsible for any purchases made
                                through them.
                            </p>
                        </div>

                        {/* 4. User Representation */}
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">
                                4. User Representation
                            </h2>
                            <p className="mb-3">
                                By using the Site, you represent and warrant
                                that:
                            </p>
                            <ul className="space-y-2">
                                {[
                                    "All information you submit (such as newsletter signups) will be true, accurate, current, and complete.",
                                    "You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.",
                                    "You will not use the Site for any illegal or unauthorized purpose.",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="w-2 h-2 mt-2 rounded-full bg-brand-500 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 5. Limitation of Liability */}
                        <div className="border-l-4 border-amber-400 pl-6 bg-amber-50 rounded-r-2xl py-6 pr-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-3">
                                5. Limitation of Liability
                            </h2>
                            <p>
                                In no event will we or our directors, employees,
                                or agents be liable to you or any third party for
                                any direct, indirect, consequential, exemplary,
                                incidental, special, or punitive damages arising
                                from your use of the Site or reliance on any
                                information provided on the Site. Travel
                                logistics, entry requirements, and business
                                operations change frequently; you are responsible
                                for verifying all travel details independently
                                before booking.
                            </p>
                        </div>

                        {/* 6. Contact Us */}
                        <div className="bg-slate-50 rounded-2xl p-6 text-center">
                            <h2 className="text-lg font-bold text-slate-900 mb-2">
                                6. Contact Us
                            </h2>
                            <p className="text-slate-600">
                                To resolve a complaint or receive further
                                information regarding the use of the Site,
                                please{" "}
                                <Link
                                    href="/#contact"
                                    className="text-brand-600 font-semibold underline underline-offset-2 hover:text-brand-700 transition-colors"
                                >
                                    contact us
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
