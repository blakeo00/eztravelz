"use client";

/**
 * TernTripForm — Tern CRM Trip Request Form integration.
 *
 * Supports two modes:
 * 1. Embedded iframe — if Tern provides an embeddable form URL
 * 2. CTA link — a prominent styled section linking to the Tern form
 *
 * Set the `ternFormUrl` prop to the Tern form URL. If `embedMode` is true,
 * the form is rendered inside an iframe. Otherwise a styled CTA card is shown.
 *
 * The section id="trip-request" is the scroll target for PackageCard
 * "Inquire About This Trip" buttons.
 */

interface TernTripFormProps {
    /** Tern Trip Request Form URL */
    ternFormUrl?: string;
    /** Whether to embed as an iframe (true) or link out (false) */
    embedMode?: boolean;
}

export default function TernTripForm({
    ternFormUrl = "",
    embedMode = false,
}: TernTripFormProps) {
    const hasUrl = !!ternFormUrl;

    return (
        <section
            id="trip-request"
            className="relative py-16 sm:py-24 px-6"
            style={{ background: "var(--color-navy-base)" }}
        >
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-[0.04] pointer-events-none"
                style={{ background: "var(--color-gold-base)", filter: "blur(80px)", transform: "translate(-30%, -30%)" }} />
            <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-[0.04] pointer-events-none"
                style={{ background: "var(--color-gold-base)", filter: "blur(80px)", transform: "translate(30%, 30%)" }} />

            <div className="relative max-w-[800px] mx-auto flex flex-col items-center text-center gap-6">
                {/* Decorative rule */}
                <div
                    style={{
                        width: "40px",
                        height: "2px",
                        background: "var(--color-gold-base)",
                        borderRadius: "2px",
                    }}
                />

                <h2
                    className="font-cinzel text-[var(--color-cream-base)] leading-tight"
                    style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)" }}
                >
                    Ready to Make It{" "}
                    <span style={{ color: "var(--color-gold-base)" }}>Real</span>?
                </h2>

                <p className="font-sans text-[var(--color-navy-text)] text-[15px] leading-relaxed max-w-[560px]">
                    Whether you fell in love with a package above or have a dream trip of your own,
                    I&apos;ll put 40 years of hospitality expertise to work crafting your perfect itinerary.
                    Tell me what you&apos;re envisioning — and let&apos;s start planning.
                </p>

                {hasUrl && embedMode ? (
                    /* ── Embedded Form (iframe) ──────────────── */
                    <div className="w-full mt-4 rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <iframe
                            src={ternFormUrl}
                            title="Trip Request Form — Powered by Tern"
                            className="w-full border-0"
                            style={{ minHeight: "600px" }}
                            loading="lazy"
                        />
                    </div>
                ) : (
                    /* ── CTA Card (link mode) ─────────────────── */
                    <div className="w-full max-w-[480px] mt-4 rounded-xl p-8 flex flex-col items-center gap-5 ring-1 ring-[var(--color-gold-base)]/30"
                        style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                        {/* Trust icon */}
                        <div
                            className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                            style={{ background: "rgba(217,179,106,0.15)" }}
                        >
                            ✈️
                        </div>

                        <p className="font-cinzel text-[var(--color-cream-base)] text-[13px] leading-relaxed">
                            Complete a quick trip request form and I&apos;ll personally follow up
                            within 24 hours with tailored recommendations.
                        </p>

                        {hasUrl ? (
                            <a
                                href={ternFormUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-cinzel uppercase text-[11px] tracking-[0.18em] px-8 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2"
                                style={{
                                    background: "var(--color-gold-base)",
                                    color: "var(--color-navy-dark)",
                                    fontWeight: 600,
                                }}
                            >
                                Start Planning Your Trip
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                                </svg>
                            </a>
                        ) : (
                            /* Placeholder when no Tern URL is configured yet */
                            <a
                                href="mailto:info@eztravelz.com?subject=Trip Inquiry from EZtravelZ.com"
                                className="font-cinzel uppercase text-[11px] tracking-[0.18em] px-8 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2"
                                style={{
                                    background: "var(--color-gold-base)",
                                    color: "var(--color-navy-dark)",
                                    fontWeight: 600,
                                }}
                            >
                                Email Us to Start Planning
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                                </svg>
                            </a>
                        )}

                        <p className="font-sans text-[var(--color-navy-subtle)] text-[11px]">
                            Independent Travel Advisor · BNT Travel Group
                        </p>
                    </div>
                )}

                {/* Trust credentials */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4">
                    {[
                        "40 Years Hospitality Experience",
                        "Personalized Service",
                        "BNT Travel Group",
                    ].map((cred) => (
                        <span
                            key={cred}
                            className="font-cinzel uppercase text-[8px] tracking-[0.16em] text-[var(--color-navy-subtle)]"
                        >
                            {cred}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
