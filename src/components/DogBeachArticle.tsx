import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PetFriendlyOBPlanner from './PetFriendlyOBPlanner';

export default function DogBeachArticle() {
    return (
        <article className="bg-[#37507a] text-white rounded-3xl shadow-2xl overflow-hidden border-2 border-white/20 p-8 md:p-12 mb-12 backdrop-blur-sm" style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.3)' }}>
            {/* Category Tag */}
            <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase py-1 px-3 rounded-full mb-5">
                Pet Travel
            </span>

            {/* Article Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-white font-bold mb-4">
                Paws, Waves &amp; Freedom: A Complete Guide to The Original Dog Beach in San Diego
            </h1>

            {/* Meta Bar */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white font-medium border-b border-white/20 pb-5 mb-8">
                <span>Ocean Beach, San Diego, CA</span>
                <span className="opacity-40">|</span>
                <span>Pet Travel</span>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-headings:font-bold prose-a:text-blue-300 hover:prose-a:text-blue-200 text-white">

                {/* Opening paragraph */}
                <p className="lead text-xl text-white font-medium">
                    Park at the north end of Voltaire Street, follow the sound of barking, and you&apos;ll find the patch of sand that started it all. The Original Dog Beach in Ocean Beach, California, has welcomed off-leash dogs since 1972, when it became the first officially designated leash-free beach in the United States. More than fifty years later, it remains one of the most beloved stretches of coastline in the country, and the single best reason to bring your dog to San Diego.
                </p>

                {/* ── Interactive Day Planner Map ── */}
                <div className="not-prose my-10">
                    <PetFriendlyOBPlanner />
                </div>

                {/* ── A Legendary Patch of Sand ── */}
                <h2 className="text-2xl mt-10 mb-3 pb-1.5 border-b-2 border-white/20 text-white">A Legendary Patch of Sand</h2>
                <p>
                    Dog Beach sits at the mouth of the San Diego River, where freshwater marshland meets the Pacific. The northern section of Ocean Beach — roughly from the jetty to the riverbank — is off-leash twenty-four hours a day, every day of the year. That is not a loophole or a concession. It is codified city policy, fiercely protected by the Ocean Beach Town Council&apos;s Dog Beach Committee, a group of volunteers who have spent decades making sure this place stays exactly as it is.
                </p>
                <p>
                    The beach itself is wide and flat, with a gentle shore break that makes it one of the safer beaches in San Diego for nervous swimmers, senior dogs, and puppies seeing the ocean for the first time. At low tide, the sand flats stretch out toward the horizon and you can walk nearly to the jetty. At high tide, the usable beach compresses to a narrower band, which is worth knowing before you load the car.
                </p>

                {/* Beach dogs image */}
                <figure className="my-8 rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.18)] border-2 border-white/20 not-prose">
                    <div className="relative w-full h-64 md:h-96">
                        <Image
                            src="/images/dog_beach_sunny.png"
                            alt="Happy dogs running off-leash on Ocean Beach, San Diego"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>
                    <figcaption className="text-[0.8125rem] text-white font-bold text-center bg-white/10 py-2.5 px-4 font-mono uppercase tracking-wider m-0">
                        Off-leash and loving it — Ocean Beach Dog Beach, San Diego
                    </figcaption>
                </figure>

                <div className="border-2 border-white/20 bg-white/10 p-5 my-8 rounded-xl text-white">
                    <p className="font-serif text-xl m-0 italic">
                        &ldquo;The community here has long embraced a melting pot mentality, welcoming people and dogs of all sizes, shapes, colors, creeds, and breeds.&rdquo;
                    </p>
                </div>

                {/* ── Reading the Tide and the Clock ── */}
                <h2 className="text-2xl mt-10 mb-3 pb-1.5 border-b-2 border-white/20 text-white">Reading the Tide and the Clock</h2>
                <p>
                    Two variables decide what kind of day you&apos;ll have: the tide and the hour.
                </p>
                <p>
                    Low tide under two feet gives you the widest beach and the best swimming. You can pull up the NOAA San Diego tide chart the morning of your visit, and if there&apos;s a minus tide in the forecast, reshuffle your day to catch it. High tide days still work, but the off-leash area shrinks and energetic dogs get more tangled with each other in the smaller footprint.
                </p>
                <p>
                    Mornings reward you twice. The sand stays cool, the parking lot has turnover, and the out-of-towners are still finishing their coffee. Between 7 AM and 10 AM on weekdays is the local sweet spot. Weekends fill by 9 AM in summer, closer to 10 AM in winter. Sunset sessions are magic in their own way, especially October through March when the sun drops straight into the water off the jetty.
                </p>
                <p>
                    A few conditions to avoid: red tide blooms, when the water turns rust-colored and some dogs get skin irritation; post-storm runoff days when the San Diego River flushes debris into the surf zone; and the rare big-swell winter day when the shore break turns punishing. The county posts water-quality advisories at{' '}
                    <a href="https://www.sdbeachinfo.com/" target="_blank" rel="noopener noreferrer">sdbeachinfo.com</a>,
                    worth a glance before you head out.
                </p>


                {/* ── The OB Vibes ── */}
                <h2 className="text-2xl mt-10 mb-3 pb-1.5 border-b-2 border-white/20 text-white">The OB Vibe: More Than Just a Beach</h2>
                <p>
                    Ocean Beach, affectionately known as OB by locals, is one of Southern California&apos;s last genuinely bohemian beach towns. Dog Beach is woven into its personality the way the pier and the surf break are. Surfing has deep roots here, and the neighborhood&apos;s independent streak shows up everywhere: hand-painted storefronts, vintage shops, surf boards propped against doorways, and the Wednesday farmers market that runs year-round along Newport Avenue.
                </p>

                {/* OB2 image — linked to Viator walking tour */}
                <figure className="my-8 rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.18)] border-2 border-white/20 not-prose">
                    <a href="https://vi.me/ylkXa" target="_blank" rel="sponsored noopener noreferrer" className="block">
                        <div className="relative w-full h-64 md:h-96">
                            <Image
                                src="/images/OB2.jpg"
                                alt="Ocean Beach neighborhood street scene in San Diego — start your walking tour here"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 800px"
                            />
                        </div>
                        <figcaption className="text-[0.8125rem] text-white font-bold text-center bg-white/10 py-2.5 px-4 font-mono uppercase tracking-wider m-0">
                            Explore Ocean Beach with a local guide — dog-friendly walking tours available ↗
                        </figcaption>
                    </a>
                </figure>


                <p>
                    If you want the OB deep-dive with a local storyteller, the{' '}
                    <a href="https://vi.me/ylkXa" target="_blank" rel="sponsored noopener noreferrer">Ocean Beach San Diego Walking Tour Experience</a>{' '}
                    is one of the rare guided tours that welcomes dogs. The operators ask only that you follow San Diego&apos;s leash laws when you&apos;re off the sand and pick up after your pup. It&apos;s a strong way to pair the beach visit with the neighborhood stories, the hidden murals, and the spots that don&apos;t make the main travel guides.
                </p>

                {/* ── Dog Wash ── */}
                <h2 className="text-2xl mt-10 mb-3 pb-1.5 border-b-2 border-white/20 text-white">Before You Leave: The Dog Beach Dog Wash</h2>
                <p>
                    No trip to Dog Beach is complete without a stop at the Dog Beach Dog Wash on Voltaire, a short block from the sand. The self-service wash provides waist-high tubs, warm water, shampoo, conditioner, towels, grooming tools, and a blow dryer for post-beach cleanup. Salty wet pups do not belong in rental cars or hotel rooms, and the wash is inexpensive, genuinely dog-loving, and open daily. Time your visit before noon or after 4 PM on weekends to avoid the line.
                </p>

                {/* ── Where to Stay ── */}
                <h2 className="text-2xl mt-10 mb-3 pb-1.5 border-b-2 border-white/20 text-white">Where to Stay With Your Dog</h2>
                <p>
                    Staying close to the action matters. The Ocean Beach area offers excellent pet-friendly lodging for every style of traveler. Each property has its own fee structure and size limits, so confirm when booking.
                </p>

                {/* Lodging Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8 not-prose">
                    <a href="https://expedia.stay22.com/eztravelz/uYRP1KxA9c" target="_blank" rel="noopener noreferrer" className="block group bg-white/10 border-2 border-white/20 rounded-xl p-5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
                        <div className="text-3xl mb-2">🏨</div>
                        <h3 className="font-serif text-lg text-white font-bold mb-1 transition-colors">Ocean Villa Inn on Dog Beach</h3>
                        <p className="text-[0.875rem] text-white mb-3 font-medium">
                            Located directly across the street from Dog Beach, this property features a fenced dog run, grassy walking space, a luxurious dog wash, tile floors, and complimentary treats in the lobby.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#37507a] border border-white/20 text-white py-1 px-3 rounded-full">Directly on Beach</span>
                    </a>

                    <a href="https://expedia.stay22.com/eztravelz/KKRpHdsq_O" target="_blank" rel="noopener noreferrer" className="block group bg-white/10 border-2 border-white/20 rounded-xl p-5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
                        <div className="text-3xl mb-2">🌊</div>
                        <h3 className="font-serif text-lg text-white font-bold mb-1 transition-colors">Ocean Beach Hotel</h3>
                        <p className="text-[0.875rem] text-white mb-3 font-medium">
                            Situated at 5080 Newport Avenue with beach access, all ground-floor patio rooms welcome up to two dogs at no extra fee. Expect stunning patio views of the Pacific.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#37507a] border border-white/20 text-white py-1 px-3 rounded-full">No Pet Fee</span>
                    </a>

                    <a href="https://expedia.stay22.com/eztravelz/yrB6Y7TElT" target="_blank" rel="noopener noreferrer" className="block group bg-white/10 border-2 border-white/20 rounded-xl p-5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
                        <div className="text-3xl mb-2">⛵</div>
                        <h3 className="font-serif text-lg text-white font-bold mb-1 transition-colors">The Dana at Mission Bay</h3>
                        <p className="text-[0.875rem] text-white mb-3 font-medium">
                            A short drive away, this waterfront resort welcomes up to two dogs per room with no weight restriction and offers serene walking paths along Mission Bay Aquatic Park.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#37507a] border border-white/20 text-white py-1 px-3 rounded-full">No Weight Limit</span>
                    </a>

                    <a href="https://expedia.stay22.com/eztravelz/hT2oUhxn6H" target="_blank" rel="noopener noreferrer" className="block group bg-white/10 border-2 border-white/20 rounded-xl p-5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
                        <div className="text-3xl mb-2">🌴</div>
                        <h3 className="font-serif text-lg text-white font-bold mb-1 transition-colors">Bahia Resort Hotel</h3>
                        <p className="text-[0.875rem] text-white mb-3 font-medium">
                            A beloved Mission Bay resort that consistently earns top ratings for its dog-friendly atmosphere and generous amenities for guests traveling with pets.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#37507a] border border-white/20 text-white py-1 px-3 rounded-full">Top Rated</span>
                    </a>
                </div>

                {/* ── Where to Eat ── */}
                <h2 className="text-2xl mt-10 mb-3 pb-1.5 border-b-2 border-white/20 text-white">Where to Eat With Your Pup</h2>
                <p>
                    Ocean Beach&apos;s dining scene is shaped by its beach-town ethos: most of the best spots have an outdoor patio and none of them will blink at a well-behaved pup at your feet.
                </p>

                {/* Patio dining image */}
                <figure className="my-8 rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.18)] border-2 border-white/20 not-prose">
                    <div className="relative w-full h-64 md:h-96">
                        <Image
                            src="/images/dog_patio_dining.png"
                            alt="Patrons dining with their dogs on a sunny outdoor patio in Ocean Beach"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>
                    <figcaption className="text-[0.8125rem] text-white font-bold text-center bg-white/10 py-2.5 px-4 font-mono uppercase tracking-wider m-0">
                        Pups welcome at the table — dog-friendly dining is OB&apos;s default setting
                    </figcaption>
                </figure>

                {/* Dining Cards — matched to Interactive Map stops */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8 not-prose">
                    <a href="https://www.newbreakcafe.com/" target="_blank" rel="noopener noreferrer" className="block group bg-white/10 border-2 border-white/20 rounded-xl p-5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
                        <div className="text-3xl mb-2">☕</div>
                        <h3 className="font-serif text-lg text-white font-bold mb-1 transition-colors">Newbreak Coffee &amp; Cafe</h3>
                        <p className="text-[0.875rem] text-white mb-3 font-medium">
                            Water bowls on the patio, a breakfast burrito worth waking up for, and a lavender latte to match. Opens at 7 AM — the perfect pre-beach fuel stop.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#37507a] border border-white/20 text-white py-1 px-3 rounded-full">Leashed Patio · 7 AM Open</span>
                    </a>

                    <a href="https://www.mikestacoclub.com/" target="_blank" rel="noopener noreferrer" className="block group bg-white/10 border-2 border-white/20 rounded-xl p-5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
                        <div className="text-3xl mb-2">🌮</div>
                        <h3 className="font-serif text-lg text-white font-bold mb-1 transition-colors">Mike&apos;s Taco Club</h3>
                        <p className="text-[0.875rem] text-white mb-3 font-medium">
                            Grab-and-go taco counter on Newport Ave. Order the Trifecta Taco or the grilled fish. If the benches are taken, walk two blocks to the OB Pier and eat there with your pup.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#37507a] border border-white/20 text-white py-1 px-3 rounded-full">Leashed Outdoor Benches</span>
                    </a>

                    <a href="https://pizzaport.com/" target="_blank" rel="noopener noreferrer" className="block group bg-white/10 border-2 border-white/20 rounded-xl p-5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
                        <div className="text-3xl mb-2">🍕</div>
                        <h3 className="font-serif text-lg text-white font-bold mb-1 transition-colors">Pizza Port Ocean Beach</h3>
                        <p className="text-[0.875rem] text-white mb-3 font-medium">
                            Slice-by-slice pizza and West Coast IPAs on tap. The back patio and sidewalk tables welcome leashed pups — just know the energy runs high with kids, surfers, and other dogs.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#37507a] border border-white/20 text-white py-1 px-3 rounded-full">Back Patio &amp; Sidewalk</span>
                    </a>

                    <a href="https://obbrewingco.com/" target="_blank" rel="noopener noreferrer" className="block group bg-white/10 border-2 border-white/20 rounded-xl p-5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
                        <div className="text-3xl mb-2">🍺</div>
                        <h3 className="font-serif text-lg text-white font-bold mb-1 transition-colors">Ocean Beach Brewery</h3>
                        <p className="text-[0.875rem] text-white mb-3 font-medium">
                            Rooftop faces due west — the best sunset seat in OB. Staff brings water bowls without asking. Cilantro burger, hard kombucha, happy hour until 6 PM on weekdays.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#37507a] border border-white/20 text-white py-1 px-3 rounded-full">Rooftop &amp; Patio · Dogs Welcome</span>
                    </a>
                </div>

                {/* ── Tips for Your Visit ── */}
                <h2 className="text-2xl mt-10 mb-3 pb-1.5 border-b-2 border-white/20 text-white">Tips for Your Visit</h2>
                <p>A few honest specifics that make the day better:</p>

                <div className="bg-white/10 border-2 border-white/20 rounded-xl p-6 my-6 not-prose">
                    <ul className="list-disc pl-5 space-y-2 text-white text-base font-medium">
                        <li><strong>Mornings before 9 AM</strong> are the truest version of Dog Beach. Everything else is busier.</li>
                        <li><strong>Bring fresh water.</strong> The river mouth is brackish and some dogs drink enthusiastically. A collapsible bowl lives permanently in my car.</li>
                        <li><strong>Parking fills early.</strong> The main lot is free but turns over fast. Street parking on Voltaire and West Point Loma Boulevard is your backup.</li>
                        <li><strong>Minus tides are gold.</strong> Anything under two feet gives you the widest beach and the best swim.</li>
                        <li><strong>Sand gets hot in summer.</strong> Check with the back of your hand before letting your pup loose. Early morning and late afternoon keep paws safe.</li>
                        <li><strong>Cash for the Dog Wash.</strong> Card readers exist but cash is faster.</li>
                        <li>For a complete guide to traveling with your pet, including airline policies and road trip tips, read our <Link href="/blog/paws-and-away-pet-traveler-guide" className="text-blue-300 hover:text-blue-200 underline font-bold">Paws &amp; Away</Link> guide.</li>
                    </ul>
                </div>

                {/* ── Why It Matters ── */}
                <h2 className="text-2xl mt-10 mb-3 pb-1.5 border-b-2 border-white/20 text-white">Why It Matters</h2>
                <p>
                    The Original Dog Beach is not just a place to let your dog run. It is a living piece of American pet culture, a community landmark born from the love and determination of locals who believed their dogs deserved a piece of the California dream too. Pack the leash for the drive, roll the windows down, and point the car toward Ocean Beach. Your dog will thank you for it.
                </p>

            </div>

            {/* Closing CTA — Beaches & Bluffs Coastal Driving Tour */}
            <div className="mt-12 mb-4 text-center">
                <a
                    href="https://vi.me/xLCo4"
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="block group relative rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 transition-all duration-300"
                >
                    <img
                        src="/images/Tour.jpg"
                        alt="Beaches & Bluffs: San Diego's Ultimate Coastal Driving Tour"
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </a>
                <p className="mt-3 text-[0.875rem] font-bold italic text-white">
                    Beaches &amp; Bluffs: San Diego&apos;s Ultimate Coastal Driving Tour — click to book on Viator
                </p>
            </div>


        </article>
    );
}
