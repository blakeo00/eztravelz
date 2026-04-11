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
            <main className="min-h-screen bg-[#fff0d4]">
                {/* Hero Banner */}
                <section className="relative bg-[#37507a] text-[#fff0d4] py-20 sm:py-28 border-b-4 border-amber-500/20">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-lg sm:text-xl text-[#fff0d4]/80 max-w-2xl mx-auto">
                            Please read these terms carefully before using our
                            site.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="bg-[#37507a] backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 space-y-10 text-[#fff0d4] leading-relaxed border-2 border-white/10">
                        {/* Last Updated */}
                        <p className="text-sm font-bold text-amber-400">
                            Last Updated: March 2026
                        </p>

                        {/* 1. Agreement to Terms */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-3">
                                1. Agreement to Terms
                            </h2>
                            <p className="text-white/90">
                                By accessing or using EZtravelZ.com (the
                                &ldquo;Site&rdquo;), you agree to be bound by
                                these Terms of Service. If you do not agree with
                                all of these terms, you are expressly prohibited
                                from using the Site and must discontinue use
                                immediately.
                            </p>
                        </div>

                        {/* 2. Intellectual Property */}
                        <div className="border-l-4 border-amber-400 pl-6 bg-white/5 rounded-r-2xl py-6 pr-6">
                            <h2 className="text-xl font-bold text-white mb-3">
                                2. Intellectual Property Rights
                            </h2>
                            <p className="text-white/90">
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
                        <div className="border-l-4 border-[#89D4FF] pl-6 bg-white/5 rounded-r-2xl py-6 pr-6">
                            <h2 className="text-xl font-bold text-white mb-3">
                                3. Third-Party Websites &amp; Affiliate Links
                            </h2>
                            <p className="mb-3 text-white/90">
                                The Site contains links to other websites
                                (&ldquo;Third-Party Websites&rdquo;) as well as
                                articles, photographs, text, graphics, pictures,
                                designs, video, information, and other content
                                originating from third parties.
                            </p>
                            <p className="text-white/90">
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
                            <h2 className="text-xl font-bold text-white mb-3">
                                4. User Representation
                            </h2>
                            <p className="mb-3 text-white/90">
                                By using the Site, you represent and warrant
                                that:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "All information you submit (such as newsletter signups) will be true, accurate, current, and complete.",
                                    "You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.",
                                    "You will not use the Site for any illegal or unauthorized purpose.",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="w-2 h-2 mt-2 rounded-full bg-amber-400 shrink-0" />
                                        <span className="text-white shadow-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 5. Limitation of Liability */}
                        <div className="border-l-4 border-[#f9c1c0] pl-6 bg-white/5 rounded-r-2xl py-6 pr-6">
                            <h2 className="text-xl font-bold text-white mb-3">
                                5. Limitation of Liability
                            </h2>
                            <p className="text-white/90">
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
                        <div className="bg-white/10 rounded-2xl p-6 text-center border p-6 border-white/20 shadow-inner">
                            <h2 className="text-lg font-bold text-white mb-2">
                                6. Contact Us
                            </h2>
                            <p className="text-white/80">
                                To resolve a complaint or receive further
                                information regarding the use of the Site,
                                please{" "}
                                <Link
                                    href="/#contact"
                                    className="text-amber-400 font-bold underline underline-offset-4 hover:text-amber-300 transition-colors"
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
