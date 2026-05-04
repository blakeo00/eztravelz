import React from 'react';
import Link from 'next/link';
import Eyebrow from '../shared/Eyebrow';
import CategoryPill from '../shared/CategoryPill';
import { posts } from '@/data/posts';

export default function Guides() {
    // Get the 6 most recent posts
    const latestPosts = posts.slice(0, 6);

    return (
        <section className="bg-[var(--color-cream-base)] py-[40px] px-[26px]">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-8 text-left">
                    <Eyebrow variant="cream">Guides & Dispatches</Eyebrow>
                    <h2 className="font-cinzel text-[18px] text-[#2C1F0F] mt-2">
                        Latest from the road
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {latestPosts.map((post) => (
                        <Link key={post.slug} href={`/${post.categorySlug}/${post.slug}`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-base)] rounded-lg">
                            <div className="flex flex-col h-full">
                                <div 
                                    className="w-full aspect-video bg-cover bg-center rounded-lg mb-4"
                                    style={{ backgroundImage: `url('${post.cardImage}')` }}
                                    role="img"
                                    aria-label={post.alt}
                                />
                                <div className="mb-2">
                                    <CategoryPill>{post.category}</CategoryPill>
                                </div>
                                <h3 className="font-cinzel text-[16px] text-[var(--color-navy-base)] mb-2 group-hover:text-[var(--color-gold-base)] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="font-sans text-[11px] text-[#7A6346] line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
