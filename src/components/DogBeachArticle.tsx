import React from 'react';
import Image from 'next/image';

export default function DogBeachArticle() {
    return (
        <article className="w-full">
            {/* Category Tag */}
            <span className="inline-block bg-[#e07b2a] text-white text-xs font-semibold tracking-widest uppercase py-1 px-3 rounded-full mb-5">
                Pet Travel
            </span>

            {/* Article Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-slate-900 mb-4">
                Paws, Waves &amp; Freedom: A Complete Guide to The Original Dog Beach in San Diego
            </h1>

            {/* Meta Bar */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 border-b border-slate-200 pb-5 mb-8">
                <span>By Niche Travel Staff</span>
                <span className="opacity-40">|</span>
                <span>Ocean Beach, San Diego, CA</span>
                <span className="opacity-40">|</span>
                <span>Pet Travel</span>
            </div>

            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-a:text-[#e07b2a] hover:prose-a:text-[#c46922]">
                <p className="lead text-xl text-slate-700 font-medium">
                    If there is one destination that every dog-owning traveler needs to add to their bucket list, it is The Original Dog Beach in San Diego, California. This iconic stretch of sand is nationally famous and recognized as one of the first official leash-free beaches in the entire United States, and it is unlike anywhere else you and your dog will ever visit together.
                </p>

                <h2 className="text-2xl mt-10 mb-3 pb-1.5 border-b-2 border-[#fdf0e3]">A Legendary Patch of Sand</h2>
                <p>
                    Tucked into the laid-back neighborhood of Ocean Beach at the northern end of the community, Dog Beach sits at the end of Interstate 8 at the mouth of the San Diego River. What makes this place extraordinary is its deeply rooted community spirit. In 1972, passionate local residents petitioned the city and claimed this stretch of sand. It was officially adopted by the Ocean Beach Town Council{"'"}s Dog Beach Committee to protect it as a community asset for future generations.
                </p>
                <p>
                    Unlike most beaches that squeeze dogs into restricted windows of time, Dog Beach is open 24 hours a day, seven days a week, making it San Diego{"'"}s only around-the-clock off-leash beach. On any given morning, you will find dogs of every size charging into the Pacific surf, surfers catching the Dog Beach break, and pet owners swapping stories in that easygoing, salty-air way that only happens in a true beach town.
                </p>

                <div className="border-l-4 border-[#e07b2a] bg-[#fdf0e3] p-5 my-8 rounded-r-xl">
                    <p className="font-serif text-xl text-slate-900 m-0 italic">
                        "The community here has long embraced a melting pot mentality, welcoming people and dogs of all sizes, shapes, colors, creeds, and breeds."
                    </p>
                </div>

                <h2 className="text-2xl mt-10 mb-3 pb-1.5 border-b-2 border-[#fdf0e3]">The OB Vibe: More Than Just a Beach</h2>
                <p>
                    Ocean Beach, affectionately known as "OB" by locals, is one of Southern California{"'"}s last genuinely bohemian beach towns, and Dog Beach sits right at the heart of that personality. The sport of surfing was introduced to San Diego at Ocean Beach in 1916, and by 1966 the neighborhood hosted the World Surfing Championship. That same free-spirited energy pulses through Dog Beach today, welcoming dogs and their humans from all over the world.
                </p>
                <p>
                    The beach also features a calmer inlet near the river mouth that is well suited for smaller or more timid pups who are not quite ready to take on full ocean waves. Whether your dog is an ocean veteran or a first-time beachgoer, Dog Beach has a corner for every comfort level.
                </p>

                {/* Inline Image */}
                <figure className="my-10 rounded-xl overflow-hidden shadow-lg border border-slate-100 not-prose">
                    <div className="relative w-full h-64 md:h-96">
                        <Image
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
                            alt="Golden California beach with gentle waves at sunset near Ocean Beach San Diego"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 800px"
                            unoptimized
                        />
                    </div>
                    <figcaption className="text-sm text-slate-500 text-center bg-[#fdf0e3] py-3 px-4 m-0">
                        The serene Pacific shoreline near Ocean Beach, San Diego. A beach town unlike any other.
                    </figcaption>
                </figure>

                <h2 className="text-2xl mt-10 mb-3 pb-1.5 border-b-2 border-[#fdf0e3]">Before You Leave: The Dog Beach Dog Wash</h2>
                <p>
                    No trip to Dog Beach is complete without a stop at the legendary Dog Beach Dog Wash, located just two short blocks away at 4933 Voltaire Street. This self-service dog grooming spot provides warm water, aloe shampoo, conditioner, towels, grooming tools, and even a blow dryer station, so you do not have to worry about sandy, salty pups riding home in your car. No appointment is needed, and the staff is known for being genuinely helpful and enthusiastic about dogs.
                </p>

                <h2 className="text-2xl mt-10 mb-3 pb-1.5 border-b-2 border-[#fdf0e3]">Where to Stay With Your Dog</h2>
                <p>Staying close to the action makes all the difference. The Ocean Beach area offers excellent pet-friendly lodging options for every style of traveler.</p>

                {/* Lodging Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8 not-prose">
                    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                        <div className="text-3xl mb-2">🏨</div>
                        <h3 className="font-serif text-lg text-slate-900 font-bold mb-1">Ocean Villa Inn on Dog Beach</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Located directly across the street from Dog Beach, this property features a fenced dog run, grassy walking space, a luxurious dog wash, tile floors, and complimentary treats in the lobby.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#fdf0e3] text-[#e07b2a] py-1 px-3 rounded-full">Directly on Beach</span>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                        <div className="text-3xl mb-2">🌊</div>
                        <h3 className="font-serif text-lg text-slate-900 font-bold mb-1">Ocean Beach Hotel</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Situated at 5080 Newport Avenue with beach access, all ground-floor patio rooms welcome up to two dogs at no extra fee. Expect stunning patio views of the Pacific.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#fdf0e3] text-[#e07b2a] py-1 px-3 rounded-full">No Pet Fee</span>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                        <div className="text-3xl mb-2">⛵</div>
                        <h3 className="font-serif text-lg text-slate-900 font-bold mb-1">The Dana at Mission Bay</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            A short drive away, this waterfront resort welcomes up to two dogs per room with no weight restriction and offers serene walking paths along Mission Bay Aquatic Park.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#fdf0e3] text-[#e07b2a] py-1 px-3 rounded-full">No Weight Limit</span>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                        <div className="text-3xl mb-2">🌴</div>
                        <h3 className="font-serif text-lg text-slate-900 font-bold mb-1">Bahia Resort Hotel</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            A beloved Mission Bay resort that consistently earns top ratings for its dog-friendly atmosphere and generous amenities for guests traveling with pets.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#fdf0e3] text-[#e07b2a] py-1 px-3 rounded-full">Top Rated</span>
                    </div>
                </div>

                <h2 className="text-2xl mt-10 mb-3 pb-1.5 border-b-2 border-[#fdf0e3]">Where to Eat With Your Pup</h2>
                <p>Ocean Beach has a delightful collection of dog-welcoming eateries, most within a short walk of the sand.</p>

                {/* Dining Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8 not-prose">
                    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                        <div className="text-3xl mb-2">🍔</div>
                        <h3 className="font-serif text-lg text-slate-900 font-bold mb-1">South Beach Bar &amp; Grille</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Sits right on the beach and serves seafood, burgers, and local favorites from a dog-friendly patio with direct ocean views.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#fdf0e3] text-[#e07b2a] py-1 px-3 rounded-full">Oceanfront Patio</span>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                        <div className="text-3xl mb-2">🏄</div>
                        <h3 className="font-serif text-lg text-slate-900 font-bold mb-1">OB Surf Lodge</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            A spacious dog-friendly patio with a direct view of the surf. The perfect spot to decompress after a big beach session with your pup.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#fdf0e3] text-[#e07b2a] py-1 px-3 rounded-full">Surf Views</span>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                        <div className="text-3xl mb-2">🥞</div>
                        <h3 className="font-serif text-lg text-slate-900 font-bold mb-1">Breakfast Republic</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            A popular brunch destination with a dog-friendly upstairs patio, perfect for a post-beach Bloody Mary and a well-earned meal.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#fdf0e3] text-[#e07b2a] py-1 px-3 rounded-full">Weekend Brunch</span>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                        <div className="text-3xl mb-2">☕</div>
                        <h3 className="font-serif text-lg text-slate-900 font-bold mb-1">Lazy Hummingbird Coffee</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            A charming local coffee and tea house just blocks from Dog Beach, offering a dog-friendly patio ideal for a morning ritual before hitting the sand.
                        </p>
                        <span className="inline-block text-[0.7rem] font-bold tracking-wider uppercase bg-[#fdf0e3] text-[#e07b2a] py-1 px-3 rounded-full">Coffee Shop</span>
                    </div>
                </div>

                {/* Tips Box */}
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 my-10 not-prose">
                    <h3 className="font-serif text-xl text-sky-700 font-bold mb-3">🐾 Tips for Your Visit</h3>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700 text-base">
                        <li>Weekends get crowded. Early mornings on weekdays offer the most open space and the best experience for shy or reactive dogs.</li>
                        <li>Bring fresh water for your dog. Ocean water and sand create a fast recipe for a very thirsty pup.</li>
                        <li>Head to Dog Beach Dog Wash immediately after your beach session so sandy fur does not become a road trip problem.</li>
                        <li>The calmer inlet near the river mouth is ideal for puppies or small breeds experiencing ocean waves for the first time.</li>
                        <li>Parking along Voltaire Street fills up fast on weekends. Arrive before 8 AM for the easiest spot.</li>
                    </ul>
                </div>

                <p>
                    The Original Dog Beach is not merely a place to let your dog run free. It is a living piece of American pet culture, a community landmark born from the love and determination of locals who believed their dogs deserved a piece of the California dream too. Pack the leash away, roll down the windows, and point the car toward Ocean Beach. Your dog will thank you for it.
                </p>

            </div>

            {/* Closing CTA */}
            <div className="text-center bg-[#e07b2a] text-white p-10 rounded-xl mt-12 mb-4 shadow-lg">
                <h2 className="font-serif text-3xl font-bold mb-3">Ready to Plan Your Dog Beach Getaway?</h2>
                <p className="text-white/90 mb-6 text-lg">Explore more pet-friendly destinations across the country in our growing travel guide collection.</p>
                <a href="/pet-travel" className="inline-block bg-white text-[#e07b2a] font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-slate-50 transition-all duration-200">
                    Browse Pet Travel Guides
                </a>
            </div>

        </article>
    );
}
