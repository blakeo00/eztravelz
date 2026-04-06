import Link from 'next/link';
import Image from 'next/image';

// ---------------------------------------------------------------------------
// Article data
// ---------------------------------------------------------------------------
const featuredArticle = {
  href: '/blog/paws-and-away-pet-traveler-guide',
  img: '/images/Dog on vacation.png',
  alt: 'A happy dog on vacation looking out a car window',
  niche: 'Paws & Passports',
  nicheColor: 'bg-amber-100 text-amber-800',
  title: 'Paws & Away: What Every Pet Traveler Needs to Know Before They Book That Ticket',
  excerpt:
    'From airline rules and service animal regulations to road trip safety and Amtrak policies — the complete, no-fluff guide to traveling with your pet in 2026.',
};

const gridArticles = [
  {
    href: '/blog/stanley-hotel-where-the-nightmare-became-the-novel',
    img: '/images/Spooky corodior.png',
    alt: 'A dark atmospheric corridor in a historic hotel',
    niche: 'Spirits & Specters',
    nicheColor: 'bg-purple-100 text-purple-800',
    title: 'Ghost Trails: The Stanley Hotel — Where the Nightmare Became the Novel',
  },
  {
    href: '/blog/holy-water-and-grape-bricks-prohibition-wine-trail',
    img: '/images/Vineyard2.png',
    alt: 'Aged wine barrels in a dimly lit historic cellar',
    niche: 'Vineyards & Vintages',
    nicheColor: 'bg-orange-100 text-orange-800',
    title: 'Holy Water and Grape Bricks — How God Saved American Wine',
  },
  {
    href: '/blog/titletown-usa-lambeau-field-nfl-pilgrimage',
    img: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=2070&auto=format&fit=crop',
    alt: 'A packed football stadium under dramatic lights on a crisp game night',
    niche: 'Game Day Getaways',
    nicheColor: 'bg-green-100 text-green-800',
    title: 'Titletown, USA: Why a Trip to Lambeau Field Is the NFL\'s Most Sacred Pilgrimage',
  },
  {
    href: '/blog/reel-roads-room-217-the-shining',
    img: '/images/Movie.png',
    alt: 'A vintage film camera on a dramatic mountain road',
    niche: 'Set-Jetting',
    nicheColor: 'bg-blue-100 text-blue-800',
    title: 'Reel Roads: Room 217 and the Hotel That Dreamed Up The Shining',
  },
  {
    href: '/blog/smoke-patience-butcher-paper-texas-bbq-road-trip',
    img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070&auto=format&fit=crop',
    alt: 'Smoked brisket sliced on butcher paper with a dark peppery bark',
    niche: 'Culinary Quests',
    nicheColor: 'bg-red-100 text-red-800',
    title: 'Smoke, Patience, and Butcher Paper: A Texas BBQ Road Trip Worth Every Mile',
  },
  {
    href: '/blog/vegas-locals-guide',
    img: '/images/Mob.jpg',
    alt: 'Fremont Street in Las Vegas lit up at night',
    niche: 'Vegas Baby',
    nicheColor: 'bg-teal-100 text-teal-800',
    title: 'Six Haunted Hotspots in Las Vegas Worth Losing Sleep Over',
  },
  // -----------------------------------------------------------------------
  // Beyond the Neon — Six Free Things
  // -----------------------------------------------------------------------
  {
    href: '/beyond-the-neon/six-free-things',
    img: '/images/Downtown.jpg',
    alt: 'Fremont Street in Downtown Las Vegas',
    niche: 'Beyond the Neon',
    nicheColor: 'bg-teal-100 text-teal-800',
    title: 'Six or More Free (Or Nearly Free) Things to Do in Las Vegas',
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function FromTheBlog() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">

      {/* Section header */}
      <div className="flex items-baseline justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-white">From the Blog</h2>
          <p className="text-white/70 text-sm">
            Real stories, real logistics, real advice — written from experience,
            not a press release.
          </p>
        </div>
        <Link
          href="/blog"
          className="text-sm text-white/80 hover:text-white hover:underline whitespace-nowrap ml-6 font-medium"
        >
          View all posts →
        </Link>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Featured article — top row                                         */}
      {/* ----------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">

        {/* Featured card — spans 3 of 5 columns */}
        <Link
          href={featuredArticle.href}
          className="lg:col-span-3 flex flex-col group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-slate-900"
        >
          <div className="relative h-56 shrink-0">
            <Image
              src={featuredArticle.img}
              alt={featuredArticle.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
          <div className="p-5 bg-white flex-1 flex flex-col">
            <span className={`w-fit inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${featuredArticle.nicheColor}`}>
              {featuredArticle.niche}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-3">
              {featuredArticle.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {featuredArticle.excerpt}
            </p>
            <span className="mt-auto pt-2 text-sm text-[#1A7A7A] font-medium">
              Read more →
            </span>
          </div>
        </Link>

        {/* Right column — two stacked cards spanning 2 of 5 columns */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {gridArticles.slice(0, 2).map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group flex flex-col flex-1 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-slate-900"
            >
              <div className="relative h-32 shrink-0">
                <Image
                  src={article.img}
                  alt={article.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="p-4 bg-white flex-1 flex flex-col">
                <span className={`w-fit inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 ${article.nicheColor}`}>
                  {article.niche}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-2">
                  {article.title}
                </h3>
                <span className="mt-auto pt-2 text-xs text-[#1A7A7A] font-medium">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 3-column grid — articles 3–5                                        */}
      {/* ----------------------------------------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gridArticles.slice(2, 5).map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-slate-900"
          >
            <div className="relative h-44 shrink-0">
              <Image
                src={article.img}
                alt={article.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 bg-white flex-1 flex flex-col">
              <span className={`w-fit inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 ${article.nicheColor}`}>
                {article.niche}
              </span>
              <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-3">
                {article.title}
              </h3>
              <span className="mt-auto pt-2 text-xs text-[#1A7A7A] font-medium">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 2-column row — Vegas Baby + Beyond the Neon                         */}
      {/* ----------------------------------------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {gridArticles.slice(5).map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-slate-900"
          >
            <div className="relative h-44 shrink-0">
              <Image
                src={article.img}
                alt={article.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="p-4 bg-white flex-1 flex flex-col">
              <span className={`w-fit inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 ${article.nicheColor}`}>
                {article.niche}
              </span>
              <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-3">
                {article.title}
              </h3>
              <span className="mt-auto pt-2 text-xs text-[#1A7A7A] font-medium">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* View all link */}
      <div className="text-center mt-10">
        <Link
          href="/blog"
          className="inline-block px-7 py-2.5 rounded-full border border-white text-white text-sm font-medium hover:bg-white hover:text-gray-900 transition-colors"
        >
          View all posts
        </Link>
      </div>

    </section>
  );
}
