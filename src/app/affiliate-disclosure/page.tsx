import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Affiliate Disclosure — EZtravelZ",
    description:
        "Learn about EZtravelZ's affiliate partnerships and how we fund free, high-quality travel guides.",
    alternates: {
        canonical: "https://eztravelz.com/affiliate-disclosure",
    },
};

export default function AffiliateDisclosurePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#fff0d4]">
                {/* Hero Banner */}
                <section className="relative bg-[#37507a] text-[#fff0d4] py-20 sm:py-28 border-b-4 border-[#38bdf8]/30">
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
                            <strong className="text-[#38bdf8]">Transparency is important to us.</strong>{" "}
                            EZtravelZ.com is a participant in various affiliate
                            marketing programs. This means that when you click on
                            links to various merchants on this site and make a
                            purchase, this can result in a commission that is
                            credited to this site.
                        </p>

                        {/* Programs */}
                        <div className="border-l-4 border-[#38bdf8] pl-6 bg-white/5 rounded-r-2xl py-6 pr-6">
                            <h2 className="text-xl font-bold text-white mb-3">
                                Our Affiliate Programs
                            </h2>
                            <p className="text-white/90">
                                Some of the affiliate programs we participate in
                                include, but are not limited to:
                            </p>
                            <ul className="mt-4 space-y-3">
                                {[
                                    { name: "Stay22", desc: "Hotel & accommodation search and booking" },
                                    { name: "Expedia", desc: "Hotels, flights, car rentals, and vacation packages" },
                                    { name: "Ticketmaster", desc: "Live events, concerts, and sports tickets" },
                                    { name: "US Ghost Adventures", desc: "Haunted tours and paranormal travel experiences" },
                                    { name: "Viator", desc: "Tours, experiences, and activities worldwide" },
                                    { name: "GetYourGuide", desc: "Day trips, guided tours, and local experiences" },
                                    { name: "Amazon Services LLC Associates Program", desc: "Travel gear, accessories, and essentials" },
                                ].map((program) => (
                                    <li
                                        key={program.name}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[#38bdf8] shrink-0 mt-2" />
                                        <span>
                                            <span className="font-bold text-white">{program.name}</span>
                                            <span className="text-white/70 text-sm block">{program.desc}</span>
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
                                <a
                                    href="mailto:info@eztravelz.com"
                                    className="text-[#38bdf8] font-bold underline underline-offset-4 hover:text-white transition-colors"
                                >
                                    contact us
                                </a>
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
