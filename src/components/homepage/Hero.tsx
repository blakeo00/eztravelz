import React from 'react';
import Button from '../shared/Button';

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden flex flex-col justify-center items-center px-[26px] py-[50px] md:py-[60px]" style={{ minHeight: '480px', height: '60vh' }}>
            {/* Background Image */}
            <img
                src="/images/Sunset 1.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Vignette Overlay */}
            <div 
                className="absolute inset-0 z-0" 
                style={{ background: 'linear-gradient(180deg, rgba(20,10,0,0.15) 0%, rgba(40,15,5,0.55) 70%, rgba(15,5,0,0.85) 100%)' }} 
            />

            {/* Content Stack */}
            <div className="relative z-10 flex flex-col items-center text-center">
                <span 
                    className="font-cinzel text-[48px] md:text-[56px]" 
                    style={{ color: '#F5C470' }}
                >
                    EZtravelZ
                </span>

                <h1 className="font-cinzel text-[22px] md:text-[28px] text-[var(--color-cream-base)] mt-[14px] md:mt-[18px]">
                    Travel Made Easy. Choose Your Adventure.
                </h1>

                <p className="font-cinzel italic text-[15px] text-[var(--color-cream-base)] opacity-80 mt-[16px]">
                    &ldquo;Travel far enough, you meet yourself.&rdquo;
                </p>

                <p className="font-cinzel text-[12px] text-[var(--color-cream-base)] opacity-55 mt-[4px]">
                    — David Mitchell
                </p>

                <div className="flex flex-col items-center gap-4 mt-[26px]">
                    <Button href="/talking-tours" variant="primary">
                        Explore Our Talking Tours
                    </Button>

                    {/* Tagline */}
                    <div className="flex flex-col items-center gap-2">
                        <div style={{ width: '40px', height: '1.5px', background: 'var(--color-gold-base)', borderRadius: '2px', opacity: 0.8 }} />
                        <p
                            className="font-cinzel text-center"
                            style={{
                                fontSize: '16px',
                                color: '#F5C470',
                                letterSpacing: '0.04em',
                                lineHeight: 1.65,
                                maxWidth: '520px',
                                textShadow: '0 1px 12px rgba(0,0,0,0.8), 0 0 30px rgba(245,196,112,0.25)',
                            }}
                        >
                            Hear the stories about the places you want to visit from the comfort of your home with just the click of your mouse.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
