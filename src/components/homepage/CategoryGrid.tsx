import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import Card from '../shared/Card';

const categories = [
    {
        title: "Paws & Passports",
        subtitle: "Pet-friendly trails and stays",
        link: "/paws-and-passports",
        image: "/images/dog_beach_sunny.png",
        fallbackGradient: "linear-gradient(135deg, #D4A574, #8B6A4A)"
    },
    {
        title: "Spirits & Specters",
        subtitle: "Haunted destinations",
        link: "/spirits-and-specters",
        image: "/images/salem_haunted.png",
        fallbackGradient: "linear-gradient(135deg, #6B5B7B, #2C1F2C)"
    },
    {
        title: "Vineyards & Vintages",
        subtitle: "Wine trails, slow tasting rooms",
        link: "/vineyards-and-vintages",
        image: "/images/Vineyard.png",
        fallbackGradient: "linear-gradient(135deg, #A93D4F, #5C1F2C)"
    },
    {
        title: "Game Day Getaways",
        subtitle: "Stadium pilgrimages",
        link: "/game-day-getaways",
        image: "/images/Soccer.jpg",
        fallbackGradient: "linear-gradient(135deg, #3D6B4A, #1F3A28)"
    },
    {
        title: "Set-Jetting",
        subtitle: "Film and TV locations",
        link: "/set-jetting",
        image: "/images/Movie.png",
        fallbackGradient: "linear-gradient(135deg, #C99A5C, #6B4923)"
    },
    {
        title: "Culinary Quests",
        subtitle: "Food road trips worth the detour",
        link: "/culinary-quests",
        image: "/images/Dinner.png",
        fallbackGradient: "linear-gradient(135deg, #C77A3D, #6B3818)"
    }
];

export default function CategoryGrid() {
    return (
        <section id="categories" className="bg-[var(--color-cream-base)] py-[30px] px-[26px]">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mt-6 mb-6">
                    <Eyebrow variant="cream" className="mx-auto text-center">Choose your passion</Eyebrow>
                    <h2 className="font-cinzel text-[22px] text-[var(--color-cream-text)] mt-2">
                        Different ways to fall in love with a place
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {categories.map((cat) => (
                        <Card key={cat.title} variant="cream" href={cat.link}>
                            <div 
                                className="w-full h-[96px] bg-cover bg-center"
                                style={{ 
                                    backgroundImage: cat.image ? `url('${cat.image}')` : cat.fallbackGradient 
                                }}
                                role="img"
                                aria-label={cat.title}
                            />
                            <div className="px-3 pt-[11px] pb-[13px]">
                                <h3 className="font-cinzel font-medium text-[13px] text-[#2C1F0F]">
                                    {cat.title}
                                </h3>
                                <p className="font-sans text-[11px] text-[#7A6346] mt-[2px]">
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
