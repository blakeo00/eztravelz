import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Affiliate Disclosure — EZtravelZ",
    description:
        "Learn about EZtravelZ's affiliate partnerships and how we fund free, high-quality travel guides.",
};

export default function AffiliateDisclosurePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#fff0d4]">
                {/* Hero Banner */}
                <section className="relative bg-[#37507a] text-[#fff0d4] py-20 sm:py-28 border-b-4 border-amber-500/20">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                            Affiliate Disclosure
                        </h1>
                        <p className="text-lg sm:text-xl text-[#fff0d4]/80 max-w-2xl mx-auto">
                            Transparency is important to us.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="bg-[#37507a] backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 space-y-8 text-[#fff0d4] leading-relaxed border-2 border-white/10">
                        {/* Intro */}
                        <p className="text-lg text-white">
                            <strong className="text-amber-400">Transparency is important to us.</strong>{" "}
                            EZtravelZ.com is a participant in various affiliate
                            marketing programs. This means that when you click on
                            links to various merchants on this site and make a
                            purchase, this can result in a commission that is
                            credited to this site.
                        </p>

                        {/* Programs */}
                        <div className="border-l-4 border-amber-400 pl-6 bg-white/5 rounded-r-2xl py-6 pr-6">
                            <h2 className="text-xl font-bold text-white mb-3">
                                Our Affiliate Programs
                            </h2>
                            <p className="text-white/90">
                                Some of the affiliate programs we participate in
                                include, but are not limited to:
                            </p>
                            <ul className="mt-4 space-y-3">
                                {[
                                    "Travelpayouts",
                                    "Stay22",
                                    "Amazon Services LLC Associates Program",
                                    "Various booking platforms",
                                ].map((program) => (
                                    <li
                                        key={program}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                                        <span className="font-medium text-white shadow-sm">
                                            {program}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Value commitment */}
                        <p className="text-white/90">
                            We only recommend products, services, and gear that
                            we genuinely believe deliver value to our readers.
                            These commissions help keep EZtravelZ running and
                            allow us to continue providing free, high-quality
                            travel guides.
                        </p>

                        {/* Contact */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-inner">
                            <p className="text-white/80">
                                If you have any questions regarding our affiliate
                                partnerships, please{" "}
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
