"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
    {
        category: "Pet Travel",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1400&q=80",
    },
    {
        category: "Haunted Tours",
        image: "https://images.unsplash.com/photo-1508361727343-ca787442dcd7?w=1400&q=80",
    },
    {
        category: "Wine & Brewery Destinations",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1400&q=80",
    },
    {
        category: "Sports Travel",
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1400&q=80",
    },
    {
        category: "Cinematic Travel",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&q=80",
    },
    {
        category: "Culinary Quests",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80",
    },
];

export default function HeroCarousel() {
    const scrollToNiches = () => {
        document.getElementById("niches")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* ── Swiper background ── */}
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                className="absolute inset-0 w-full h-full"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i} className="relative w-full h-full">
                        <img
                            src={slide.image}
                            alt={slide.category}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Blue gradient overlay — preserves brand colour */}
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/55 to-blue-950/85" />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* ── Hero text — centred, floating above the slides ── */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
                {/* Category pills */}
                <div className="mb-6 flex gap-2 flex-wrap justify-center">
                    {slides.map((slide, i) => (
                        <span
                            key={i}
                            className="text-blue-200 uppercase tracking-widest text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/40"
                        >
                            {slide.category}
                        </span>
                    ))}
                </div>

                <h1
                    className="text-white font-extrabold leading-tight mb-6"
                    style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
                >
                    Travel Made Easy.
                    <br />
                    Choose Your Adventure.
                </h1>

                <p className="text-blue-100 text-lg md:text-xl max-w-2xl mb-10 opacity-90 leading-relaxed">
                    Stop settling for generic vacations. We curate unique travel
                    experiences tailored to your passions, from pet-friendly stays to
                    haunted history tours.
                </p>

                <button
                    onClick={scrollToNiches}
                    className="pointer-events-auto inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-900/50 cursor-pointer"
                >
                    Start Exploring
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
