import Link from "next/link";

/**
 * WorkWithUs — Shared CTA section replacing the Newsletter block site-wide.
 * Matches the cream/navy/gold design language from the About page.
 */
export default function WorkWithUs() {
    return (
        <section
            className="py-16 px-6"
            style={{ background: "var(--color-cream-base)" }}
        >
            <div className="max-w-[620px] mx-auto text-center flex flex-col items-center gap-5">
                {/* Gold rule */}
                <div
                    style={{
                        width: "32px",
                        height: "1.5px",
                        background: "var(--color-gold-base)",
                        borderRadius: "2px",
                    }}
                />

                <h2
                    className="font-cinzel text-[var(--color-navy-base)]"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
                >
                    Want to Work With Us?
                </h2>

                <p
                    className="font-sans text-[var(--color-navy-base)]/65 leading-relaxed"
                    style={{ fontSize: "15px" }}
                >
                    We&apos;re open to collaborations, press trips, content partnerships, and reader story
                    submissions. We also welcome{" "}
                    <a
                        href="mailto:info@eztravelz.com?subject=I'd Love to Contribute"
                        className="text-[var(--color-navy-base)] underline hover:text-[var(--color-gold-base)] transition-colors"
                    >
                        contributor pitches
                    </a>{" "}
                    from passionate travelers with a story worth telling. Drop us a line — we actually
                    read them.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="https://substack.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-cinzel uppercase text-[10px] tracking-[0.16em] px-7 py-3 rounded transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 shadow text-[var(--color-navy-dark)]"
                        style={{ background: "var(--color-gold-base)", fontWeight: 600 }}
                    >
                        Sign Up for Our Newsletter
                    </a>
                    <a
                        href="mailto:info@eztravelz.com"
                        className="font-cinzel uppercase text-[10px] tracking-[0.16em] px-7 py-3 rounded border transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                            borderColor: "var(--color-navy-base)",
                            color: "var(--color-navy-base)",
                        }}
                    >
                        Contact Us
                    </a>
                </div>

                {/* Quick links */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center mt-1">
                    {[
                        { label: "All Articles & Guides", href: "/blog" },
                        { label: "Talking Tours", href: "/talking-tours" },
                        { label: "Privacy Policy", href: "/privacy-policy" },
                        { label: "Terms of Service", href: "/terms-of-service" },
                        { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
                    ].map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="font-cinzel uppercase text-[8.5px] tracking-[0.14em] text-[var(--color-navy-base)]/45 hover:text-[var(--color-gold-base)] transition-colors"
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
