// WhoWeAre.tsx
// "Who We Are" section — sits between the HeroSection and the niche grid.
// Uses the site's sky background (transparent) with light text for contrast.

export default function WhoWeAre() {
  return (
    <section className="w-full py-16 px-4 bg-[#fff0d4]">
      <div className="max-w-6xl mx-auto">



        {/* Two-column layout: images left, text right */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left column — stacked images */}
          <div className="flex flex-col gap-4 w-full lg:w-2/5 flex-shrink-0">
            <img
              src="/images/Mountain.jpg"
              alt="Scenic mountain landscape representing EZtravelZ niche travel experiences"
              className="w-full rounded-sm object-cover shadow-lg"
              style={{ height: '240px' }}
            />
            <img
              src="/images/Fountain.jpg"
              alt="Beautiful fountain representing EZtravelZ travel destinations"
              className="w-full rounded-sm object-cover shadow-lg"
              style={{ height: '240px' }}
            />
            <img
              src="/images/Tahoe.jpg"
              alt="Scenic view of Lake Tahoe"
              className="w-full rounded-sm object-cover shadow-lg"
              style={{ height: '240px' }}
            />
            <img
              src="/images/Bistro.jpg"
              alt="A cozy bistro dining experience"
              className="w-full rounded-sm object-cover shadow-lg"
              style={{ height: '240px' }}
            />
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
              <a href="/vegas-locals" className="underline hover:no-underline" style={{ color: '#b8860b', fontWeight: '700' }}>Vegas Baby</a>, think
              again. <a href="/beyond-the-neon/spring-mountain-ranch" className="underline hover:no-underline" style={{ color: '#b8860b', fontWeight: '700' }}>Beyond the Neon</a> of the Strip lies destinations worth discovering on their own
              merits. We cover it all, from hidden local gems to the iconic landmarks that draw millions
              every year.
            </p>

            <p className="text-[#37507a]/90 leading-relaxed mb-4" style={{ fontSize: '1rem' }}>
              We branch from there into six passion-driven niches.{' '}
              <a href="/pet-travel" className="underline hover:no-underline" style={{ color: '#b8860b', fontWeight: '700' }}>Pet-friendly travel</a> takes you to destinations like Ocean Beach in San
              Diego and walks you through everything from dog friendly road trips to flying with a large
              dog, including the airline regulations and tips most travelers don&rsquo;t know until
              it&rsquo;s too late.{' '}
              <a href="/sports-travel" className="underline hover:no-underline" style={{ color: '#b8860b', fontWeight: '700' }}>Sports travel</a> explores all things sports, from NFL game day travel guides
              to bucket list international sporting events like the FIFA World Cup and the once in a
              lifetime must see Olympic Games.{' '}
              <a href="/culinary-quests" className="underline hover:no-underline" style={{ color: '#b8860b', fontWeight: '700' }}>Culinary travel</a> follows the food, from authentic food tours and
              farm-to-table dining experiences to regional and international road trips built entirely
              around what&rsquo;s on the plate.{' '}
              <a href="/wine-destinations" className="underline hover:no-underline" style={{ color: '#b8860b', fontWeight: '700' }}>Wine and brewery travel</a> explores hidden gem vineyards, craft beer tours,
              the beautiful regions where they reside and the tasting rooms worth planning a trip
              around.{' '}
              <a href="/cinematic-travel" className="underline hover:no-underline" style={{ color: '#b8860b', fontWeight: '700' }}>Cinematic travel</a> takes movie lovers to the actual filming locations of
              their favorite films, with guides to iconic film settings and the history and lore behind
              the scripts. For a spooky good time,{' '}
              <a href="/haunted-tours" className="underline hover:no-underline" style={{ color: '#b8860b', fontWeight: '700' }}>haunted tours</a> is the go-to spot where history runs darkest. We cover
              hauntingly chilling overnight ghost hunting experiences, paranormal investigations, and
              the most genuinely supernatural places to visit in America and beyond.
            </p>

            <p className="text-[#37507a]/90 leading-relaxed mb-6" style={{ fontSize: '1rem' }}>
              Whatever your passion, EZtravelZ goes the extra mile to make sure your adventure starts
              informed, prepared, and ready for something real.
            </p>

            {/* Contact / newsletter line */}
            <p className="text-[#37507a]/70 text-sm mb-6 leading-relaxed">
              For the latest news, destination guides, and travel finds,{' '}
              <a
                href="https://newsletter.eztravelz.com"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="underline hover:no-underline"
                style={{ color: '#b8860b', fontWeight: '600' }}
              >
                sign up for our newsletter
              </a>
              . Questions or comments? Reach us at{' '}
              <a
                href="mailto:info@eztravelz.com"
                className="underline hover:no-underline"
                style={{ color: '#b8860b', fontWeight: '600' }}
              >
                info@eztravelz.com
              </a>
              .
            </p>

            {/* CTA link */}
            <a
              href="#niches"
              className="inline-block font-semibold text-sm uppercase tracking-wider transition-all duration-200 hover:opacity-75"
              style={{ color: '#b8860b', borderBottom: '2px solid #b8860b', paddingBottom: '2px' }}
            >
              Explore Our Niches &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
