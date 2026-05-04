import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';

export default function Newsletter() {
    return (
        <section className="bg-[var(--color-navy-base)] py-[60px] px-[26px]">
            <div className="max-w-[600px] mx-auto text-center">
                <div className="flex justify-center mb-2">
                    <Eyebrow variant="navy">The Dispatch</Eyebrow>
                </div>
                <h2 className="font-cinzel text-[24px] text-[var(--color-cream-base)] mb-3">
                    Notes from the road.
                </h2>
                <p className="font-sans text-[13px] text-[#A1B2C6] mb-8">
                    One email a week. No spam. Just the places worth knowing about.
                </p>
                
                <form 
                    action="https://newsletter.eztravelz.com" 
                    method="GET"
                    target="_blank"
                    className="flex flex-col sm:flex-row gap-3 max-w-[400px] mx-auto"
                >
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Your email address" 
                        required
                        className="flex-1 bg-[var(--color-navy-dark)] border border-[#325070] rounded-md px-4 py-2 text-[var(--color-cream-base)] placeholder-[#6A7F96] font-sans text-[13px] focus:outline-none focus:border-[var(--color-gold-base)] transition-colors"
                    />
                    <Button type="submit" variant="primary" className="w-full sm:w-auto">
                        Subscribe
                    </Button>
                </form>
            </div>
        </section>
    );
}
