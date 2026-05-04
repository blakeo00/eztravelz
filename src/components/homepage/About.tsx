import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';

export default function About() {
    return (
        <section className="bg-[var(--color-cream-base)] pt-[38px] pb-[32px] px-[26px]">
            <div className="max-w-[700px] mx-auto text-center flex flex-col items-center">
                <Eyebrow variant="cream">About EZtravelZ</Eyebrow>
                
                <h2 className="font-cinzel text-[24px] text-[var(--color-cream-text)] mt-2 mb-4 leading-tight">
                    A travel magazine for wanderlust in all of us
                </h2>
                
                <p className="text-[var(--color-cream-text)] font-sans text-[15px] leading-[1.65] mb-8">
                    EZtravelZ is a niche travel magazine for travelers who are longing for meaningful travel experiences rather than just dealing with surface level tourism.
                </p>
                
                <Button href="/about" variant="ghost-warm">
                    More about us
                </Button>
            </div>
        </section>
    );
}
