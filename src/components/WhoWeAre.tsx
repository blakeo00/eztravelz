// WhoWeAre.tsx
// "Who We Are" section — sits between the HeroSection and the niche grid.
// Left column: compact 2×4 niche card grid. Right column: About EZtravelZ text.
//
// TO UPDATE A NICHE CARD: edit src/data/featuredGuides.ts — do NOT change this file.

import Image from 'next/image';
import Link from 'next/link';
import { featuredGuides } from '@/data/featuredGuides';

export default function WhoWeAre() {
  return (
    <section className="w-full py-16 px-4 bg-[#fff0d4]">
      <div className="max-w-6xl mx-auto">

        {/* Two-column layout: niche cards left, text right */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">

          {/* Left column — Choose Your Passion mini-grid */}
          <div className="w-full lg:w-2/5 flex-shrink-0 flex flex-col">
            <p
              className="text-center font-bold mb-4 tracking-widest uppercase"
              style={{ color: '#37507a', fontSize: '0.75rem' }}
            >
              Current Guides
            </p>
            <div className="grid grid-cols-2 grid-rows-4 gap-3 flex-1">
              {featuredGuides.map((guide) => (
                <Link
                  key={guide.categorySlug}
                  href={guide.href}
                  className="group relative block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900 h-full min-h-[100px]"

                >
                  <Image
                    src={guide.cardImage}
                    alt={guide.cardImageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 px-3 pb-2.5">
                    <p className="text-white text-xs font-bold leading-snug drop-shadow-md">
                      {guide.title}
                    </p>
                  </div>
                  {/* Hover arrow */}
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right column — body text */}
          <div className="w-full lg:w-3/5">
            <h2
              className="font-bold mb-5 text-center"
              style={{ color: '#37507a', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
            >
              About EZtravelZ
            </h2>

            <p className="text-[#37507a]/90 leading-relaxed mb-4" style={{ fontSize: '1rem' }}>
              EZtravelZ is a niche travel magazine for travelers who are longing for meaningful travel
              experiences rather than just dealing with surface level tourism. While many of our
              recommendations include well known destinations, we go deeper, exploring the soul of each
              place to uncover the one of a kind lifetime experiences that lives in your memories well
              after you have returned home.
            </p>

            <p className="text-[#37507a]/90 leading-relaxed mb-4" style={{ fontSize: '1rem' }}>
              Our guides and articles are built to inform and entertain, with real logistics, honest
              detail, and the kind of specificity that actually helps you plan your dream journey.
            </p>

            <p className="text-[#37507a]/90 leading-relaxed mb-4" style={{ fontSize: '1rem' }}>
              We&rsquo;re based in Las Vegas, Nevada. If you think you already know{' '}
              <a href="/vegas-locals" className="underline hover:no-underline" style={{ color: '#38bdf8', fontWeight: '700' }}>Vegas Baby</a>, think
              again. <a href="/beyond-the-neon/spring-mountain-ranch" className="underline hover:no-underline" style={{ color: '#38bdf8', fontWeight: '700' }}>Beyond the Neon</a> of the Strip lies destinations worth discovering on their own
              merits. We cover it all, from hidden local gems to the iconic landmarks that draw millions
              every year.
            </p>

            <p className="text-[#37507a]/90 leading-relaxed mb-4" style={{ fontSize: '1rem' }}>
              We branch from there into six passion-driven niches.{' '}
              <a href="/pet-travel" className="underline hover:no-underline" style={{ color: '#38bdf8', fontWeight: '700' }}>Pet-friendly travel</a> takes you to destinations like Ocean Beach in San
              Diego and walks you through everything from dog friendly road trips to flying with a large
              dog, including the airline regulations and tips most travelers don&rsquo;t know until
              it&rsquo;s too late.{' '}
              <a href="/sports-travel" className="underline hover:no-underline" style={{ color: '#38bdf8', fontWeight: '700' }}>Sports travel</a> explores all things sports, from NFL game day travel guides
              to bucket list international sporting events like the FIFA World Cup and the once in a
              lifetime must see Olympic Games.{' '}
              <a href="/culinary-quests" className="underline hover:no-underline" style={{ color: '#38bdf8', fontWeight: '700' }}>Culinary travel</a> follows the food, from authentic food tours and
              farm-to-table dining experiences to regional and international road trips built entirely
              around what&rsquo;s on the plate.{' '}
              <a href="/wine-destinations" className="underline hover:no-underline" style={{ color: '#38bdf8', fontWeight: '700' }}>Wine and brewery travel</a> explores hidden gem vineyards, craft beer tours,
              the beautiful regions where they reside and the tasting rooms worth planning a trip
              around.{' '}
              <a href="/cinematic-travel" className="underline hover:no-underline" style={{ color: '#38bdf8', fontWeight: '700' }}>Cinematic travel</a> takes movie lovers to the actual filming locations of
              their favorite films, with guides to iconic film settings and the history and lore behind
              the scripts. For a spooky good time,{' '}
              <a href="/haunted-tours" className="underline hover:no-underline" style={{ color: '#38bdf8', fontWeight: '700' }}>haunted tours</a> is the go-to spot where history runs darkest. We cover
              hauntingly chilling overnight ghost hunting experiences, paranormal investigations, and
              the most genuinely supernatural places to visit in America and beyond.
            </p>

            <p className="text-[#37507a]/90 leading-relaxed mb-6" style={{ fontSize: '1rem' }}>
              Whatever your passion, EZtravelZ goes the extra mile to make sure your adventure starts
              informed, prepared, and ready for something real.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="https://newsletter.eztravelz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 shadow-md"
                style={{ background: 'linear-gradient(135deg, #38bdf8, #0284c7)', color: '#fff' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Sign Up for Our Newsletter
              </a>
              <a
                href="mailto:info@eztravelz.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm tracking-wide border-2 transition-all duration-200 hover:bg-[#37507a] hover:text-white hover:-translate-y-0.5"
                style={{ borderColor: '#38bdf8', color: '#38bdf8', background: 'transparent' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
