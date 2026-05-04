import React from 'react';
import Link from 'next/link';
import { posts } from '@/data/posts';

const categories = [
    { label: "Vegas Baby", subtitle: "Sphere: The Ultimate Experience Inside Las Vegas' Most Ambitious Entertainment Venue yet.", link: "/vegas-locals", image: "/images/Sphere.png", postsCategory: "Vegas Baby" },
    { label: "Beyond the Neon", subtitle: "Day trips worth leaving the Strip behind.", link: "/beyond-the-neon", image: "/images/Vegas 2.png", postsCategory: "Beyond the Neon", noHub: true },
    { label: "Pet Travel", subtitle: "Paws & Passports — adventures with your four-legged co-pilot.", link: "/pet-travel", image: "/images/Dog on vacation.png", postsCategory: "Pet Travel" },
    { label: "Haunted Tours", subtitle: "Six Haunted Cities Worth Traveling For", link: "/haunted-tours", image: "/images/Cemsalem.jpg", postsCategory: "Haunted Tours" },
    { label: "Wine & Brewery", subtitle: "Oregon: A Mecca of Wine and Beer", link: "/wine-destinations", image: "/images/Wine.jpg", postsCategory: "Wine & Brewery Destinations" },
    { label: "Sports Travel", subtitle: "Game Day Getaways — the world's greatest stadiums.", link: "/sports-travel", image: "/images/Soccer.jpg", postsCategory: "Sports Travel", noHub: true },
    { label: "Cinematic Travel", subtitle: "So You Want to Go to Cannes for the Film Festival. Here's What You Need to Know", link: "/cinematic-travel", image: "/images/Cannes 2.jpg", postsCategory: "Cinematic Travel" },
    { label: "Culinary Quests", subtitle: "Food road trips worth every detour.", link: "/culinary-quests", image: "/images/Parisday.jpg", postsCategory: "Culinary Quests", noHub: true },
];

function Card({ href, image, pill, title, isCat = false }: { href: string; image: string; pill: string; title: string; isCat?: boolean }) {
    return (
        <Link href={href} className="group flex flex-col rounded-lg overflow-hidden border border-[var(--color-navy-base)]/20 hover:border-[var(--color-navy-base)]/40 bg-[var(--color-cream-base)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
            {/* Fixed image height — all cards identical so text starts at the same point */}
            <div className="w-full bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url('${image}')`, height: '170px' }} />
            <div className="px-2 py-2 flex flex-col gap-0.5">
                <span className={`font-cinzel text-[7px] uppercase tracking-[0.14em] ${isCat ? 'text-[var(--color-gold-base)]' : 'text-[var(--color-navy-base)]/40'}`}>{pill}</span>
                <h3 className="font-cinzel text-[9.5px] leading-snug text-[var(--color-navy-base)] group-hover:text-[var(--color-gold-base)] transition-colors duration-200 line-clamp-2">{title}</h3>
            </div>
        </Link>
    );
}

/** Center promo card — navy background with cream/gold text */
function PromoCard() {
    return (
        <div
            className="flex flex-col items-center justify-center gap-4 rounded-lg px-4 py-5 text-center"
            style={{
                background: 'var(--color-navy-base)',
                border: '1.5px solid var(--color-navy-dark)',
                borderRadius: '8px',
            }}
        >
            {/* Decorative gold rule */}
            <div style={{ width: '32px', height: '1.5px', background: 'var(--color-gold-base)', borderRadius: '2px' }} />

            {/* Contributor block */}
            <div className="flex flex-col items-center gap-2">
                <p
                    className="font-cinzel leading-snug"
                    style={{ fontSize: '8.5px', color: 'var(--color-navy-text)', letterSpacing: '0.03em', maxWidth: '160px' }}
                >
                    We&apos;re looking for passionate travelers to share their experiences with our readers.
                </p>
                <a
                    href="mailto:info@eztravelz.com?subject=I'd Love to Contribute"
                    className="font-cinzel uppercase transition-all duration-200 hover:opacity-80 hover:-translate-y-[1px]"
                    style={{
                        fontSize: '6.5px',
                        padding: '5px 12px',
                        border: '1px solid var(--color-gold-base)',
                        borderRadius: '3px',
                        color: 'var(--color-gold-base)',
                        background: 'transparent',
                        textDecoration: 'none',
                        letterSpacing: '0.14em',
                    }}
                >
                    Become a Contributor
                </a>
            </div>

            {/* Thin divider */}
            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }} />

            {/* Newsletter block */}
            <div className="flex flex-col items-center gap-2">
                <p
                    className="font-cinzel leading-snug"
                    style={{ fontSize: '8.5px', color: 'var(--color-navy-text)', letterSpacing: '0.03em', maxWidth: '160px' }}
                >
                    Subscribe for up-to-date travel guides, destination tips &amp; insider info.
                </p>
                <a
                    href="https://newsletter.eztravelz.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-cinzel uppercase transition-all duration-200 hover:brightness-110 hover:-translate-y-[1px]"
                    style={{
                        fontSize: '6.5px',
                        padding: '5px 12px',
                        borderRadius: '3px',
                        color: 'var(--color-navy-dark)',
                        background: 'var(--color-gold-base)',
                        textDecoration: 'none',
                        letterSpacing: '0.14em',
                        fontWeight: 600,
                    }}
                >
                    Subscribe Free
                </a>
            </div>

            {/* Decorative gold rule */}
            <div style={{ width: '32px', height: '1.5px', background: 'var(--color-gold-base)', borderRadius: '2px' }} />
        </div>
    );
}

/** Blank center slot for rows without assigned content */
function BlankSlot() {
    return (
        <div
            style={{
                border: '1px dashed rgba(44,72,117,0.10)',
                borderRadius: '8px',
                minHeight: '80px',
            }}
        />
    );
}

/** Ticketmaster affiliate promo — row 1 center */
function TicketmasterCard() {
    return (
        <a
            href="https://ticketmaster.evyy.net/c/7157806/264167/4272?u=https%3A%2F%2Fwww.ticketmaster.com"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex flex-col items-center justify-center gap-3 rounded-lg px-4 py-5 text-center no-underline transition-all duration-200 hover:brightness-110 hover:-translate-y-[2px]"
            style={{
                background: 'linear-gradient(160deg, #0a2342 0%, var(--color-navy-base) 60%, #0d3060 100%)',
                border: '1.5px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                textDecoration: 'none',
            }}
        >
            {/* Ticketmaster logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/images/Ticketmaster.png"
                alt="Ticketmaster"
                style={{ width: '110px', height: 'auto', objectFit: 'contain' }}
            />

            {/* Headline */}
            <p
                className="font-cinzel"
                style={{ fontSize: '9px', color: '#ffffff', letterSpacing: '0.06em', lineHeight: 1.3, maxWidth: '150px', margin: 0 }}
            >
                Find Tickets to the Events You Love
            </p>

            {/* Body copy */}
            <p
                className="font-cinzel"
                style={{ fontSize: '7.5px', color: 'var(--color-navy-text)', letterSpacing: '0.02em', lineHeight: 1.5, maxWidth: '160px', margin: 0 }}
            >
                Concerts, sports, theater &amp; more — all in one place.
            </p>

            {/* CTA pill */}
            <span
                className="font-cinzel uppercase"
                style={{
                    fontSize: '6.5px',
                    padding: '5px 14px',
                    borderRadius: '3px',
                    color: 'var(--color-navy-dark)',
                    background: 'var(--color-gold-base)',
                    letterSpacing: '0.14em',
                    fontWeight: 600,
                }}
            >
                Shop Tickets
            </span>

            {/* Disclosure */}
            <span style={{ fontSize: '6px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>
                Affiliate link
            </span>
        </a>
    );
}
/** Amazon product card — Ray-Ban Meta smart glasses (row 2) */
function AmazonProductCard() {
    return (
        <a
            href="https://amzn.to/4sizBOc"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex flex-col rounded-lg overflow-hidden no-underline transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
            style={{
                background: 'var(--color-navy-base)',
                border: '1.5px solid var(--color-navy-dark)',
                borderRadius: '8px',
                textDecoration: 'none',
            }}
        >
            {/* Product image */}
            <div style={{ background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://m.media-amazon.com/images/I/61EMsYRC0wL._SL1500_.jpg"
                    alt="Ray-Ban Meta Smart Glasses"
                    style={{ width: '100%', maxHeight: '110px', objectFit: 'contain' }}
                />
            </div>

            {/* Card body */}
            <div className="flex flex-col gap-1.5 px-3 py-2.5" style={{ flex: 1 }}>

                {/* Product name */}
                <p
                    className="font-cinzel leading-snug line-clamp-2"
                    style={{ fontSize: '7.5px', color: 'var(--color-navy-text)', margin: 0, letterSpacing: '0.02em' }}
                >
                    Ray-Ban Meta Smart AI Glasses — 12MP Camera, Open-Ear Audio, Bluetooth
                </p>

                {/* Star rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ color: '#FF9900', fontSize: '9px', letterSpacing: '-1px' }}>★★★★</span>
                    <span style={{ color: '#FF9900', fontSize: '9px', opacity: 0.4 }}>★</span>
                    <span style={{ fontSize: '7px', color: 'var(--color-navy-subtle)', fontFamily: 'inherit' }}>4.2</span>
                </div>

                {/* Price + Prime row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff', fontFamily: 'inherit' }}>
                        $299<span style={{ fontSize: '7px', verticalAlign: 'super' }}>00</span>
                    </span>
                    {/* Prime badge */}
                    <span
                        style={{
                            fontSize: '6px',
                            fontWeight: 700,
                            color: '#ffffff',
                            background: '#00A8E0',
                            borderRadius: '2px',
                            padding: '1.5px 5px',
                            letterSpacing: '0.06em',
                            fontFamily: 'inherit',
                        }}
                    >
                        prime
                    </span>
                </div>

                {/* CTA */}
                <span
                    className="font-cinzel uppercase text-center"
                    style={{
                        marginTop: '2px',
                        fontSize: '6.5px',
                        padding: '5px 8px',
                        borderRadius: '3px',
                        color: 'var(--color-navy-dark)',
                        background: '#FF9900',
                        letterSpacing: '0.12em',
                        fontWeight: 700,
                        display: 'block',
                    }}
                >
                    View on Amazon
                </span>

                {/* Disclosure */}
                <span style={{ fontSize: '5.5px', color: 'rgba(255,255,255,0.3)', textAlign: 'center', letterSpacing: '0.04em' }}>
                    Affiliate link · Prices may vary
                </span>
            </div>
        </a>
    );
}

/** Hotels.com affiliate banner card — row 3 center */
function HotelsCard() {
    return (
        <a
            href="https://www.hotels.com"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex flex-col items-center justify-center gap-3 rounded-lg px-4 text-center no-underline transition-all duration-200 hover:brightness-110 hover:-translate-y-[2px]"
            style={{
                background: 'linear-gradient(160deg, #0a2342 0%, var(--color-navy-base) 60%, #0d3060 100%)',
                border: '1.5px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                textDecoration: 'none',
                height: '100%',
                minHeight: '180px',
            }}
        >
            {/* Hotels.com branded wordmark */}
            <span
                className="font-cinzel"
                style={{ fontSize: '15px', fontWeight: 700, color: '#D5001F', letterSpacing: '0.04em', textShadow: '0 1px 8px rgba(0,0,0,0.5)', lineHeight: 1 }}
            >
                Hotels.com
            </span>

            {/* Headline */}
            <p
                className="font-cinzel"
                style={{ fontSize: '9px', color: '#ffffff', letterSpacing: '0.06em', lineHeight: 1.3, maxWidth: '150px', margin: 0 }}
            >
                Find the Perfect Stay for Every Trip
            </p>

            {/* Body copy */}
            <p
                className="font-cinzel"
                style={{ fontSize: '7.5px', color: 'var(--color-navy-text)', letterSpacing: '0.02em', lineHeight: 1.5, maxWidth: '160px', margin: 0 }}
            >
                Hotels, vacation rentals &amp; more — member prices available.
            </p>

            {/* CTA pill */}
            <span
                className="font-cinzel uppercase"
                style={{
                    fontSize: '6.5px',
                    padding: '5px 14px',
                    borderRadius: '3px',
                    color: '#ffffff',
                    background: '#D5001F',
                    letterSpacing: '0.14em',
                    fontWeight: 700,
                }}
            >
                Search Hotels
            </span>

            {/* Disclosure */}
            <span style={{ fontSize: '6px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>
                Affiliate link
            </span>
        </a>
    );
}


const rows = [
    [categories[0], categories[1]], // Vegas Baby | Beyond the Neon
    [categories[2], categories[3]], // Pet Travel | Haunted Tours
    [categories[4], categories[5]], // Wine & Brewery | Sports Travel
    [categories[6], categories[7]], // Cinematic Travel | Culinary Quests
];

export default function ContentGrid() {
    const postsByCategory: Record<string, typeof posts> = {};
    for (const cat of categories) {
        postsByCategory[cat.postsCategory] = posts.filter(p => p.category === cat.postsCategory);
    }

    return (
        <>
            <style>{`
                .cg-labels {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 8px;
                    margin-bottom: 6px;
                }
                .cg-cards {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 8px;
                }
                @media (max-width: 639px) {
                    .cg-labels {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    .cg-label-left,
                    .cg-label-right {
                        grid-column: span 1 !important;
                    }
                    .cg-label-center {
                        display: none !important;
                    }
                    .cg-cards {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    .cg-center {
                        grid-column: 1 / -1 !important;
                        max-height: 220px;
                    }
                    /* Scale up affiliate card internals at full mobile width */
                    .cg-center p,
                    .cg-center span.cg-card-headline {
                        max-width: 100% !important;
                        font-size: 11px !important;
                    }
                    .cg-center .cg-card-body {
                        font-size: 9.5px !important;
                    }
                    .cg-center .cg-card-cta {
                        font-size: 9px !important;
                        padding: 7px 18px !important;
                    }
                    /* Amazon image stays proportional */
                    .cg-center img[alt="Ray-Ban Meta Smart Glasses"] {
                        max-height: 90px !important;
                    }
                }
            `}</style>

            <section id="explore" className="bg-[var(--color-cream-base)] py-10 px-5 border-t border-[var(--color-gold-base)]/30">
                <div className="max-w-[1200px] mx-auto flex flex-col">
                    {rows.map(([left, right], rowIdx) => {
                        const leftPosts = postsByCategory[left.postsCategory] || [];
                        const rightPosts = postsByCategory[right.postsCategory] || [];

                        return (
                            <React.Fragment key={rowIdx}>
                                {rowIdx > 0 && (
                                    <div style={{ height: '1px', background: 'rgba(44,72,117,0.15)', margin: '18px 0' }} />
                                )}

                                {/* Labels row */}
                                <div className="cg-labels">
                                    <div className="cg-label-left" style={{ gridColumn: 'span 2', fontFamily: 'var(--font-cinzel, serif)', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--color-navy-base)', textAlign: 'center' }}>
                                        {left.label}
                                    </div>
                                    <div className="cg-label-center" /> {/* center — no label */}
                                    <div className="cg-label-right" style={{ gridColumn: 'span 2', fontFamily: 'var(--font-cinzel, serif)', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--color-navy-base)', textAlign: 'center' }}>
                                        {right.label}
                                    </div>
                                </div>

                                {/* Cards row — 5 col desktop / 2 col mobile with center spanning full width */}
                                <div className="cg-cards">

                                    {/* Left group */}
                                    {left.noHub ? (
                                        <>
                                            {leftPosts[0] && <Card href={leftPosts[0].href || `/${leftPosts[0].categorySlug}/${leftPosts[0].slug}`} image={leftPosts[0].cardImage} pill={leftPosts[0].category} title={leftPosts[0].title} />}
                                            {leftPosts[1] && <Card href={leftPosts[1].href || `/${leftPosts[1].categorySlug}/${leftPosts[1].slug}`} image={leftPosts[1].cardImage} pill={leftPosts[1].category} title={leftPosts[1].title} />}
                                        </>
                                    ) : (
                                        <>
                                            <Card isCat href={left.link} image={left.image} pill={left.label} title={left.subtitle} />
                                            {leftPosts[0] && <Card href={leftPosts[0].href || `/${leftPosts[0].categorySlug}/${leftPosts[0].slug}`} image={leftPosts[0].cardImage} pill={leftPosts[0].category} title={leftPosts[0].title} />}
                                        </>
                                    )}

                                    {/* Center — unique affiliate card per row, spans full width on mobile */}
                                    <div className="cg-center" style={{ display: 'flex', flexDirection: 'column' }}>
                                        {rowIdx === 0 ? <PromoCard /> : rowIdx === 1 ? <TicketmasterCard /> : rowIdx === 2 ? <AmazonProductCard /> : <HotelsCard />}
                                    </div>

                                    {/* Right group */}
                                    {right.noHub ? (
                                        <>
                                            {rightPosts[0] && <Card href={rightPosts[0].href || `/${rightPosts[0].categorySlug}/${rightPosts[0].slug}`} image={rightPosts[0].cardImage} pill={rightPosts[0].category} title={rightPosts[0].title} />}
                                            {rightPosts[1] && <Card href={rightPosts[1].href || `/${rightPosts[1].categorySlug}/${rightPosts[1].slug}`} image={rightPosts[1].cardImage} pill={rightPosts[1].category} title={rightPosts[1].title} />}
                                        </>
                                    ) : (
                                        <>
                                            <Card isCat href={right.link} image={right.image} pill={right.label} title={right.subtitle} />
                                            {rightPosts[0] && <Card href={rightPosts[0].href || `/${rightPosts[0].categorySlug}/${rightPosts[0].slug}`} image={rightPosts[0].cardImage} pill={rightPosts[0].category} title={rightPosts[0].title} />}
                                        </>
                                    )}
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
