import React from 'react';

interface AmazonProductCardProps {
    title: string;
    description: string;
    imageUrl: string;
    affiliateLink: string;
    /** Display price, e.g. "$49.99" */
    price?: string;
    /** Original price before discount, e.g. "$79.99" */
    originalPrice?: string;
    /** Star rating out of 5, e.g. 4.5 */
    rating?: number;
    /** Number of reviews, e.g. 2847 */
    reviewCount?: number;
    /** Show the Prime badge */
    isPrime?: boolean;
    /** Optional badge like "Amazon's Choice" or "Best Seller" */
    badge?: 'amazons-choice' | 'best-seller' | 'limited-deal';
    /** Coupon text, e.g. "Save 15% with coupon" */
    coupon?: string;
    /** Compact sidebar layout — smaller image, tighter spacing */
    compact?: boolean;
}

function StarRating({ rating, reviewCount, small }: { rating: number; reviewCount?: number; small?: boolean }) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.3 && rating % 1 <= 0.7;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    const starClass = small ? 'w-3 h-3' : 'w-4 h-4';

    return (
        <div className="flex items-center gap-1">
            <div className="flex items-center" aria-label={`${rating} out of 5 stars`}>
                {Array.from({ length: fullStars }).map((_, i) => (
                    <svg key={`full-${i}`} className={`${starClass} text-amber-400`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
                {hasHalf && (
                    <svg className={`${starClass} text-amber-400`} viewBox="0 0 20 20">
                        <defs>
                            <linearGradient id="halfGrad">
                                <stop offset="50%" stopColor="currentColor" />
                                <stop offset="50%" stopColor="#D1D5DB" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#halfGrad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                )}
                {Array.from({ length: emptyStars }).map((_, i) => (
                    <svg key={`empty-${i}`} className={`${starClass} text-gray-300`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            {reviewCount !== undefined && (
                <span className={`${small ? 'text-[11px]' : 'text-sm'} text-sky-700`}>
                    {reviewCount.toLocaleString()}
                </span>
            )}
        </div>
    );
}

function BadgeLabel({ badge, small }: { badge: 'amazons-choice' | 'best-seller' | 'limited-deal'; small?: boolean }) {
    const config = {
        'amazons-choice': { label: "Amazon's Choice", bg: 'bg-[#232F3E]', text: 'text-white', accent: 'text-amber-400' },
        'best-seller': { label: 'Best Seller', bg: 'bg-[#FF9900]', text: 'text-white', accent: '' },
        'limited-deal': { label: 'Limited time deal', bg: 'bg-red-600', text: 'text-white', accent: '' },
    };
    const c = config[badge];
    return (
        <span className={`inline-flex items-center gap-1 ${c.bg} ${c.text} ${small ? 'text-[9px] px-1.5 py-0.5' : 'text-xs px-2.5 py-1'} font-bold rounded-sm`}>
            {badge === 'amazons-choice' && (
                <svg className={`${small ? 'w-2.5 h-2.5' : 'w-3 h-3'} ${c.accent}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            )}
            {c.label}
        </span>
    );
}

/* ------------------------------------------------------------------ */
/*  COMPACT LAYOUT  — horizontal card for sidebar stacking            */
/* ------------------------------------------------------------------ */
function CompactCard({
    title, imageUrl, affiliateLink, price, originalPrice,
    rating, reviewCount, isPrime, badge,
}: AmazonProductCardProps) {
    return (
        <a
            href={affiliateLink}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="flex bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200 overflow-hidden group"
        >
            {/* Thumbnail */}
            <div className="relative w-24 min-w-[96px] bg-white flex items-center justify-center p-2 border-r border-slate-100 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={imageUrl}
                    alt={title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
                {badge && (
                    <div className="absolute top-1 left-1">
                        <BadgeLabel badge={badge} small />
                    </div>
                )}
            </div>

            {/* Details */}
            <div className="flex-1 p-2.5 min-w-0 flex flex-col justify-between gap-1">
                <h3 className="text-xs font-medium leading-tight text-slate-800 group-hover:text-orange-700 transition-colors line-clamp-2">
                    {title}
                </h3>

                {rating !== undefined && (
                    <StarRating rating={rating} reviewCount={reviewCount} small />
                )}

                <div className="flex items-baseline gap-1.5 flex-wrap">
                    {price && <span className="text-sm font-bold text-slate-900">{price}</span>}
                    {originalPrice && (
                        <span className="text-[11px] text-slate-400 line-through">{originalPrice}</span>
                    )}
                </div>

                <div className="flex items-center gap-1.5">
                    {isPrime && (
                        <span className="text-[10px] font-bold text-[#00A8E1]">prime</span>
                    )}
                    <span className="text-[10px] text-amber-600 font-semibold group-hover:text-amber-700">
                        View on Amazon →
                    </span>
                </div>
            </div>
        </a>
    );
}

/* ------------------------------------------------------------------ */
/*  FULL LAYOUT — original large vertical card                         */
/* ------------------------------------------------------------------ */
function FullCard({
    title, description, imageUrl, affiliateLink, price, originalPrice,
    rating, reviewCount, isPrime, badge, coupon,
}: AmazonProductCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden max-w-sm mx-auto group">
            {/* Product Image */}
            <a
                href={affiliateLink}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block relative bg-white p-6 border-b border-slate-100"
            >
                <div className="relative w-full h-56 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={imageUrl}
                        alt={title}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                {badge && (
                    <div className="absolute top-3 left-3">
                        <BadgeLabel badge={badge} />
                    </div>
                )}
            </a>

            {/* Product Details */}
            <div className="p-5 space-y-3">
                <a
                    href={affiliateLink}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="block text-slate-800 hover:text-orange-700 transition-colors"
                >
                    <h3 className="text-base font-medium leading-snug line-clamp-2">{title}</h3>
                </a>

                {rating !== undefined && (
                    <StarRating rating={rating} reviewCount={reviewCount} />
                )}

                {price && (
                    <div className="space-y-0.5">
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-slate-900">{price}</span>
                            {originalPrice && (
                                <span className="text-sm text-slate-400 line-through">{originalPrice}</span>
                            )}
                        </div>
                        {originalPrice && price && (
                            <div className="text-sm text-red-700 font-medium">
                                Save {calculateDiscount(originalPrice, price)}
                            </div>
                        )}
                    </div>
                )}

                {coupon && (
                    <div className="flex items-center gap-1.5 text-sm">
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-green-700 font-medium">{coupon}</span>
                    </div>
                )}

                {isPrime && (
                    <div className="flex items-center gap-1">
                        <svg className="h-[18px]" viewBox="0 0 72 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 14.4C1.6 12.5 0 10 0 7.1 0 3.2 3.2 0 7.1 0c2.9 0 5.4 1.6 6.7 4" stroke="#00A8E1" strokeWidth="1.5" fill="none" />
                            <path d="M2 16.5C4.8 18.4 8.1 19.5 11.6 19.5c4.9 0 9.4-2 12.7-5.2" stroke="#00A8E1" strokeWidth="1.5" fill="none" />
                            <text x="16" y="14" fontSize="14" fontWeight="bold" fill="#00A8E1" fontFamily="Arial">prime</text>
                        </svg>
                        <span className="text-xs text-slate-500">FREE delivery</span>
                    </div>
                )}

                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {description}
                </p>

                <a
                    href={affiliateLink}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-b from-amber-300 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold py-3 px-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md text-sm mt-2"
                >
                    View on Amazon
                </a>

                <p className="text-[10px] text-slate-400 text-center leading-tight mt-1">
                    As an Amazon Associate, we earn from qualifying purchases.
                </p>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  PUBLIC COMPONENT                                                   */
/* ------------------------------------------------------------------ */
export default function AmazonProductCard(props: AmazonProductCardProps) {
    if (props.compact) {
        return <CompactCard {...props} />;
    }
    return <FullCard {...props} />;
}

/** Calculate the percentage discount between two price strings */
function calculateDiscount(original: string, current: string): string {
    const origNum = parseFloat(original.replace(/[^0-9.]/g, ''));
    const currNum = parseFloat(current.replace(/[^0-9.]/g, ''));
    if (isNaN(origNum) || isNaN(currNum) || origNum === 0) return '';
    const pct = Math.round(((origNum - currNum) / origNum) * 100);
    return `${pct}%`;
}
