// HeroSection.tsx
// Drop-in replacement for the existing carousel hero.

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '75vh', minHeight: '500px', maxHeight: '800px' }}>

      {/* Hero Image */}
      <img
        src="/images/Sunset 1.jpg"
        alt="Scenic mountain landscape representing niche travel experiences with EZtravelZ"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-16 md:pt-20">

        {/* Niche label above headline */}
        <span
          className="tracking-widest font-bold mb-3"
          style={{ color: '#FFD700', letterSpacing: '0.1em', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-playfair), serif' }}
        >
          EZtravelZ
        </span>

        {/* Main headline */}
        <h1 className="hero-title text-white font-bold leading-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: '780px' }}
        >
          Travel Made Easy.{' '}
          <span style={{ color: '#FFD700' }}>Choose Your Adventure.</span>
        </h1>

        {/* Subline */}
        <p className="hero-subtitle text-white/80 mb-7 italic"
          style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', maxWidth: '650px' }}
        >
          &ldquo;Travel far enough, you meet yourself.&rdquo; <br className="hidden md:block" />- David Mitchell
        </p>

        {/* CTA button */}
        <a
          href="#niches"
          className="inline-block font-semibold rounded-sm px-8 py-3 transition-all duration-200 hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: '#FFD700', color: '#152238', letterSpacing: '0.05em' }}
        >
          Start Exploring
        </a>
      </div>
    </section>
  )
}
