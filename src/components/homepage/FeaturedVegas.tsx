import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import Card from '../shared/Card';

const vegasCards = [
    {
        title: "Vegas Baby",
        subtitle: "The neon-lit canon. Casinos, residencies, the Strip on its own terms.",
        link: "/vegas-baby",
        image: "/images/Vegas Strip.png"
    },
    {
        title: "Beyond the Neon",
        subtitle: "Red Rock, ghost towns, desert silence. Vegas after the lights.",
        link: "/beyond-the-neon",
        image: "/images/Redrock 1.jpg"
    }
];

export default function FeaturedVegas() {
    return (
        <section className="bg-[var(--color-cream-base)] py-[30px] px-[26px]">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-6 text-left">
                    <Eyebrow variant="cream">Featured</Eyebrow>
                    <h2 className="font-cinzel text-[18px] text-[var(--color-cream-text)] mt-2">
                        Las Vegas, two ways
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {vegasCards.map((cat) => (
                        <Card key={cat.title} variant="cream" href={cat.link} className="flex-row items-center">
                            <div 
                                className="w-[100px] h-[100px] bg-cover bg-center shrink-0"
                                style={{ backgroundImage: `url('${cat.image}')` }}
                                role="img"
                                aria-label={cat.title}
                            />
                            <div className="px-3 py-3 md:px-[14px] md:py-[12px] flex-1">
                                <h3 className="font-cinzel text-[14px] text-[#2C1F0F]">
                                    {cat.title}
                                </h3>
                                <p className="font-sans text-[11px] text-[#7A6346] mt-1">
                                    {cat.subtitle}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
