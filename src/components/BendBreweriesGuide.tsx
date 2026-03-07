const breweries = [
    {
        name: "Deschutes Brewery",
        vibe: "The Original. The Legend.",
        description: "Deschutes is where it all began. Open since 1988, this is the brewery that put Bend on the craft beer map. The Black Butte Porter and the Jubelale are Oregon icons. The Bend Public House on Bond Street is warm, welcoming, and always packed with a mix of locals and visitors who know exactly what they are doing.",
        mustTry: "Black Butte Porter",
        link: "https://www.deschutesbrewery.com",
    },
    {
        name: "Crux Fermentation Project",
        vibe: "The Beer Garden with a Mountain View.",
        description: "Housed in a converted transmission repair shop, Crux is one of those rare places that earns its reputation every single time. The outdoor Craft Beer Park has views of the Cascade Mountains that pair beautifully with their experimental barrel-aged series. Watch for anything labeled BANISHED on the menu. Those are the special barrel-aged releases, and they are worth every extra minute of patience.",
        mustTry: "Any BANISHED barrel-aged release",
        link: "https://cruxfermentation.com/",
    },
    {
        name: "Terranaut Beer",
        vibe: "The Newest Star in Town.",
        description: "Terranaut only opened in 2024 and has already won Small Brewery of the Year at the Oregon Beer Awards. USA Today named it one of America's best new breweries in 2026. The atmosphere is easygoing, the vinyl collection is a nice touch, and the rotating tap list moves between classics and genuinely adventurous creations involving ingredients like Mexican chocolate and pineapple. This one is a must.",
        mustTry: "Rotating seasonal, ask the bartender",
        link: "https://www.terranautbeer.com/",
    },
    {
        name: "Boneyard Beer",
        vibe: "No Frills. All Flavor.",
        description: "Boneyard does not spend a lot of energy on atmosphere and that is entirely the point. The beer does all the talking. Their RPM IPA has become one of the most recognized craft IPAs in the Pacific Northwest. The tasting room is small, casual, and beloved by locals who have been coming here for years. Go for the beer. Stay because you forgot to leave.",
        mustTry: "RPM IPA",
        link: "https://boneyardbeer.com",
    },
    {
        name: "Ale Apothecary",
        vibe: "The Most Unique Pint in Oregon.",
        description: "Ale Apothecary uses only wild airborne yeasts native to the Bend area, meaning every batch is genuinely one of a kind. These are small-batch barrel-aged wild ales that taste like the Oregon forest in liquid form. This is not a place to pound pints. This is a place to sit down, slow down, and pay attention to something extraordinary in a glass.",
        mustTry: "Any wild barrel-aged ale on current rotation",
        link: "https://thealeapothecary.com",
    },
    {
        name: "GoodLife Brewing",
        vibe: "The Great Outdoor Biergarten.",
        description: "GoodLife captures the spirit of Bend in a single pint. The Southside tasting room has a spacious outdoor Biergarten that fills up on sunny afternoons with mountain bikers and hikers who earned their beer. New management took over in 2025 with fresh investment and improvements underway. This is a spot on the rise.",
        mustTry: "Sweet As Pacific Ale",
        link: "https://goodlifebrewing.com",
    },
];

export default function BendBreweriesGuide() {
    return (
        <article className="max-w-3xl mx-auto px-8 py-12 md:p-12 text-slate-300 bg-slate-900/90 rounded-3xl shadow-xl overflow-hidden border border-slate-800 backdrop-blur-md mt-12">

            {/* Category Label */}
            <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">
                Brewery Destinations
            </span>

            {/* Title */}
            <h2
                style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#fcd34d",
                    fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                    lineHeight: 1.2,
                }}
                className="mt-3 mb-4"
            >
                Bend, Oregon: Where the Mountains End and the Beer Begins
            </h2>

            <p className="text-slate-400 text-sm mb-8">
                Bend, Oregon · 30+ Breweries · Craft Beer Capital of the Pacific Northwest
            </p>

            {/* Intro */}
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Bend, Oregon is one of those rare places where the outdoor life and the
                drinking life are not separate things. They are the same thing. You spend
                a morning hiking the Deschutes River Trail or riding the Phil's Trail
                network through the pines, and by early afternoon a cold pint of something
                exceptional is the only logical conclusion. With more than 30 breweries
                operating in and around the city, Bend has quietly become the craft beer
                capital of the Pacific Northwest.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                This is not a city with a few good taprooms. This is a city that has built
                an entire culture around the idea that great beer and great adventure belong
                together. Here is where to start.
            </p>

            {/* Image 1 */}
            <img
                src="/images/brewery.png"
                alt="Craft brewery taproom with outdoor seating and mountain views in Bend, Oregon"
                className="w-full rounded-2xl mb-10 object-cover h-72"
            />

            {/* Breweries */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fcd34d" }}
                className="text-xl font-bold mb-5"
            >
                The Breweries Worth Your Time
            </div>

            <div className="space-y-5 mb-12">
                {breweries.map((brewery, i) => (
                    <div key={i} className="border-l-4 border-amber-600 pl-5 py-1">
                        <p
                            style={{ fontFamily: "'Cinzel', serif", color: "#fcd34d" }}
                            className="font-bold text-base mb-0.5"
                        >
                            {brewery.name}
                        </p>
                        <p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-2">
                            {brewery.vibe}
                        </p>
                        <p className="text-slate-300 text-base leading-relaxed mb-2">
                            {brewery.description}
                        </p>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="text-slate-400 text-sm">
                                Must Try: <span className="font-semibold text-slate-200">{brewery.mustTry}</span>
                            </p>
                            <a
                                href={brewery.link}
                                target="_blank"
                                rel="sponsored noopener noreferrer"
                                className="text-amber-500 hover:text-amber-400 text-sm font-semibold transition-colors duration-200"
                            >
                                Visit Site →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bend Ale Trail */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fcd34d" }}
                className="text-xl font-bold mb-4"
            >
                The Bend Ale Trail
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Launched in 2010 as the first beer trail in the American West, the Bend
                Ale Trail now covers more than 30 breweries and tasting rooms spread
                across seven territories, reaching from Sisters to Redmond to Prineville
                and everywhere in between. Pick up a free collectible passport at the
                Bend Visitor Center, or use the free web-based app, and collect a stamp
                at each brewery you visit. Complete a territory and win a prize. Complete
                all seven and the story gets significantly better.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-10">
                Each territory pairs brewery stops with nearby outdoor activities, so you
                are never just drinking. You are drinking in context, which is a much
                finer thing.
            </p>

            {/* Bend Brews and Beyond */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fcd34d" }}
                className="text-xl font-bold mb-4"
            >
                Bend Brews and Beyond, May 23, 2026
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-10">
                On Saturday, May 23, 2026, Drake Park in downtown Bend hosts Bend Brews
                and Beyond, bringing more than 50 Oregon breweries, cideries, and
                non-alcoholic beverage makers to the riverfront for a single day of
                tasting and live music. New this year is a dedicated Hempgarten for
                hemp-derived beverages, and the Bend Bands and Brewers Bash, where
                local bands collaborate with breweries to create beers that taste like
                their music sounds. Attendance is capped at 5,000. Early bird tickets
                are $26 and include admission, a souvenir mug, and five drink tokens.
                The festival benefits the Oregon Brewers Guild, one of the oldest craft
                brewers associations in the country.
            </p>

            {/* Summer Arts */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fcd34d" }}
                className="text-xl font-bold mb-4"
            >
                Summer Arts in Bend
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Bend is not all beer and bikes. The city has a genuine and growing arts
                identity that comes alive every summer across multiple festivals and venues.
            </p>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 mb-10">
                <ul className="space-y-4 text-slate-300 text-base">
                    <li>
                        <strong style={{ color: "#fcd34d" }}>Bend Summer Festival, May 29 – 31, 2026.</strong>
                        <span> Central Oregon's longest running arts and crafts festival, now in its 30th year. More than 80 regional and national artisans line Bond Street across seven city blocks in downtown Bend, alongside live music stages, local food vendors, a Family Fun Zone, and pop-up performances all weekend. Attendance averages over 70,000 people. Free to attend. The 2026 beneficiary is MountainStar Family Relief Nursery.</span>
                    </li>
                    <li>
                        <strong style={{ color: "#fcd34d" }}>Sunriver Music Festival, August 2026.</strong>
                        <span> Now in its 49th season, this beloved classical and pops festival presents orchestral concerts, chamber music, solo recitals, and family-friendly performances at Sunriver Resort, Bend's Tower Theatre, and outdoor venues throughout the region. A Young Artists Scholarship competition runs alongside the main programming.</span>
                    </li>
                    <li>
                        <strong style={{ color: "#fcd34d" }}>Balloons Over Bend, July 24, 2026.</strong>
                        <span> Hot air balloons launch at dawn over the high desert landscape in one of the most visually stunning events on the Bend summer calendar. A Night Glow event and family activities round out the weekend.</span>
                    </li>
                    <li>
                        <strong style={{ color: "#fcd34d" }}>Cascade School of Music.</strong>
                        <span> Bend's community music school runs summer programs, workshops, and student performances throughout the season, contributing to the city's year-round creative fabric.</span>
                    </li>
                </ul>
            </div>

            {/* Image 2 */}
            <img
                src="/images/Hike.png"
                alt="Floating and kayaking the Deschutes River through Bend, Oregon in summer"
                className="w-full rounded-2xl mb-10 object-cover h-72"
            />

            {/* River Recreation */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fcd34d" }}
                className="text-xl font-bold mb-4"
            >
                Life on the Deschutes River
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The Deschutes River is the beating heart of Bend's summer. Flowing 252
                miles from its headwaters at Little Lava Lake high in the Cascades, it
                carves right through the center of town and draws over 250,000 people
                onto the water every single year. From Memorial Day through Labor Day,
                the stretch between Riverbend Park and Drake Park transforms into one of
                the most joyful one-and-a-half miles in the American West. Here is what
                the river offers.
            </p>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 mb-10">
                <ul className="space-y-4 text-slate-300 text-base">
                    <li>
                        <strong style={{ color: "#fcd34d" }}>Floating the River.</strong>
                        <span> The classic Bend summer experience. Rent a tube from Tumalo Creek Kayak and Canoe, which includes a life jacket and round-trip shuttle service. The full float from Riverbend Park to Drake Park takes approximately 90 minutes and passes through the Old Mill District before arriving at the Whitewater Park. A shorter 45-minute option exits before the rapids. The Ride the River shuttle runs from mid-June through Labor Day for $5 per person.</span>
                    </li>
                    <li>
                        <strong style={{ color: "#fcd34d" }}>Bend Whitewater Park.</strong>
                        <span> Opened in 2015 near the Old Mill District, this is the only whitewater play park in Oregon and the first of its kind in the Pacific Northwest. Three parallel channels serve different skill levels. The Fish Ladder is gentle and family-friendly. The center Whitewater Channel is fast-moving and designed for surfers, kayakers, and experienced paddleboarders. The waves are adjustable, controlled remotely, so conditions shift from day to day.</span>
                    </li>
                    <li>
                        <strong style={{ color: "#fcd34d" }}>Stand-Up Paddleboarding and Kayaking.</strong>
                        <span> SUP rentals and kayak rentals are available through Tumalo Creek Kayak and Canoe at approximately $40 for two hours solo, $80 for a tandem kayak. Outside Magazine named Bend and Central Oregon the best place in the world to paddleboard in 2014, citing the combination of alpine lakes and the gentle Deschutes River flow.</span>
                    </li>
                    <li>
                        <strong style={{ color: "#fcd34d" }}>Wildlife on the Water.</strong>
                        <span> The Habitat Channel at the Whitewater Park protects otters, beaver, trout, bald eagles, and osprey. Look up on the banks for tall poles with osprey nests. Free rental binoculars are available at the Old Mill District for riverside birdwatching.</span>
                    </li>
                    <li>
                        <strong style={{ color: "#fcd34d" }}>Cycle Pub Tours.</strong>
                        <span> The Cycle Pub of Bend runs a 14-seat pedal-powered bar through the brewery district. Passengers drink and pedal simultaneously through downtown. If you attend Bend Brews and Beyond and arrive by paddleboard, tube, or kayak, you receive a bonus drink token at the festival valet.</span>
                    </li>
                </ul>
            </div>

            {/* Viator Affiliate Link */}
            <div className="mb-12 relative group rounded-2xl overflow-hidden shadow-lg border border-slate-700/50">
                <a
                    href="https://vi.me/AKnuA"
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="block w-full"
                >
                    <div className="relative h-80 w-full overflow-hidden">
                        <img
                            src="/images/bend.png"
                            alt="Explore Bend Tours and Activities"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="inline-block px-3 py-1 bg-amber-500/90 text-slate-900 text-xs font-black uppercase tracking-widest rounded-full mb-3 shadow-lg">
                                Top Rated Tour
                            </span>
                            <h3 style={{ fontFamily: "'Cinzel', serif" }} className="text-3xl font-bold text-white mb-2 drop-shadow-md">
                                Discover the Best of Bend
                            </h3>
                            <div className="flex items-center gap-3">
                                <p className="text-amber-400 font-medium drop-shadow-sm flex items-center">
                                    <span className="mr-1">Book on Viator</span>
                                    <span className="text-lg">→</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <div className="bg-slate-800 px-6 py-3 border-t border-slate-700 flex justify-between items-center">
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Free cancellation available
                    </span>
                    <span className="text-slate-500 text-[10px] uppercase tracking-wider">Advertisement</span>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 text-center">
                <p
                    style={{
                        fontFamily: "'Cinzel', serif",
                        color: "#fcd34d",
                        fontSize: "1.4rem",
                        letterSpacing: "0.04em",
                    }}
                    className="mb-3 font-bold"
                >
                    Start Your Bend Ale Trail Adventure
                </p>
                <a
                    href="https://bendaletrail.com"
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="inline-block bg-amber-600 hover:bg-amber-500 text-slate-900 font-bold px-8 py-3 rounded-full transition-colors duration-200"
                >
                    Explore the Bend Ale Trail →
                </a>
            </div>

        </article>
    );
}
