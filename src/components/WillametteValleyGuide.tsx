import React from 'react';

const wineries = [
    {
        name: "Eyrie Vineyards",
        note: "Where it all started. David Lett's pioneering estate in the Dundee Hills produced the 1975 South Block Reserve that shocked Paris and put Oregon on the world map. A pilgrimage stop for any serious Pinot Noir lover.",
        link: "https://www.eyrievineyards.com",
    },
    {
        name: "Domaine Drouhin Oregon",
        note: "The French arrived in 1988. Robert Drouhin, so moved by Oregon's potential after the 1979 Wine Olympics, purchased land in the Dundee Hills and brought Burgundian winemaking tradition to the valley. The Laurene Pinot Noir remains one of Oregon's most celebrated bottles.",
        link: "https://www.domainedrouhin.com",
    },
    {
        name: "Willamette Valley Vineyards",
        note: "Founded in 1983 and named one of America's Great Pinot Noir Producers by Wine Enthusiast Magazine. A landmark estate that helped define the valley's modern identity and labeling standards.",
        link: "https://www.wvv.com",
    },
    {
        name: "Ponzi Vineyards",
        note: "One of the original founding families of Oregon wine. Dick Ponzi planted his first vines in 1970 against all conventional wisdom and helped build the community standards that made the entire region possible.",
        link: "https://www.ponzivineyards.com",
    },
    {
        name: "Ken Wright Cellars",
        note: "Ken Wright pioneered the single vineyard concept in Oregon, bottling Pinot Noir from 13 distinct vineyard sites in the northern valley. His work defining six new Willamette AVAs fundamentally shaped how the region understands its own terroir.",
        link: "https://www.kenwrightcellars.com",
    },
    {
        name: "Domaine Serene",
        note: "One of the most decorated estates in the valley, regularly scoring 90 plus points from Wine Spectator and earning comparisons to Burgundy's premier cru producers. The Evenstad Reserve Pinot Noir is a benchmark bottle for the region.",
        link: "https://www.domaineserene.com",
    },
];

const tours = [
    {
        title: "Willamette Wine Tour from McMinnville (Tasting Fees Included)",
        description: "Full-day guided tour from McMinnville visiting premier Willamette Valley estates — tasting fees included. Expert local guide covers Oregon terroir, varietals, and vineyard history.",
        badge: "Best Seller",
        badgeColor: "bg-amber-500",
        link: "https://www.viator.com/tours/Oregon/Willamette-Valley-Wine-Tour-from-McMinnville/d5064-346224P5?pid=P00291237&mcid=42383&medium=link&campaign=Paris",
        image: "/images/Vineyard.png",
        cta: "Book on Viator",
    },
    {
        title: "Private Wine Tour for 1–5 People in Oregon",
        description: "A fully private Willamette Valley tasting experience for small groups of up to five. Skip the crowds and get exclusive access to boutique producers with a dedicated guide.",
        badge: "Top Rated",
        badgeColor: "bg-rose-600",
        link: "https://www.viator.com/tours/Portland/Wine-Tour-1-5-People/d5065-349363P1?pid=P00291237&mcid=42383&medium=link&campaign=Oregon",
        image: "/images/Wine glasses.png",
        cta: "Book on Viator",
    },
    {
        title: "Willamette Valley Wine & Whisky",
        description: "The best of both worlds — explore the Willamette Valley's character wineries and pair the experience with a whisky tasting stop for a genuinely unique Oregon afternoon.",
        badge: "Fan Favorite",
        badgeColor: "bg-emerald-600",
        link: "https://www.viator.com/tours/Portland/Willamette-Valley-Character-Wineries/d5065-120361P2?pid=P00291237&mcid=42383&medium=link&campaign=Oregon",
        image: "/images/Vineyard2.png",
        cta: "Book on Viator",
    },
];

const hotels = [
    {
        name: "The Dundee — A Trace Hotel",
        note: "A design-forward boutique hotel set in the heart of Oregon wine country in Dundee, steps from tasting rooms, galleries, and the celebrated farm-to-table dining the Willamette Valley is known for.",
        link: "https://expedia.stay22.com/eztravelz/ZRWSAvNdBN",
    },
    {
        name: "Atticus Hotel, McMinnville",
        note: "The most stylish boutique stay in the heart of McMinnville's vibrant wine district. Walking distance to tasting rooms, galleries, and exceptional dining.",
        link: "https://expedia.stay22.com/eztravelz/CrE20-tK8l",
    },
    {
        name: "The Black Walnut Inn & Vineyard",
        note: "A Tuscan-inspired inn perched in the Dundee Hills with sweeping valley views and its own vineyard. A true wine country retreat experience.",
        link: "https://expedia.stay22.com/eztravelz/t8Ncjj-m85",
    },
    {
        name: "McMinnville Hotels on Expedia",
        note: "Browse the full range of hotels, B&Bs, and vacation rentals across the Willamette Valley wine corridor — from Newberg to McMinnville to Carlton.",
        link: "https://www.expedia.com/Wine-Country-Oregon-Hotels.d6050932.Travel-Guide-Hotels",
    },
];

export default function WillametteValleyGuide() {
    return (
        <article className="max-w-3xl mx-auto px-8 py-12 md:p-12 text-white bg-[#37507a] rounded-3xl shadow-xl overflow-hidden border-2 border-white/10 backdrop-blur-md" style={{ boxShadow: '0 0 30px rgba(55,80,122,0.4)' }}>

            {/* Category Label */}
            <span className="text-[#fff0d4]/80 uppercase tracking-widest text-sm font-semibold">
                Wine Destinations
            </span>

            {/* Title */}
            <h2
                style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#fff0d4",
                    fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                    lineHeight: 1.2,
                }}
                className="mt-3 mb-4"
            >
                The Upstart That Shook Burgundy: Willamette Valley and the Rise of World Class Pinot Noir
            </h2>

            <p className="text-white/60 text-sm mb-8">
                Willamette Valley, Oregon · 700 Wineries · 11 Sub-AVAs · One of the World's Great Wine Regions
            </p>

            {/* Intro */}
            <p className="text-lg leading-relaxed mb-6">
                In 1965, a young winemaker named David Lett drove into Oregon's Willamette
                Valley with 3,000 vines and an idea that most people considered borderline
                absurd. The region was known for hazelnuts, not wine. His professors told
                him the climate was too cold. The experts told him Pinot Noir needed
                California sun. Lett had studied Burgundy's climate data closely and
                believed something that nobody in the American wine industry was ready to
                hear: that Oregon was more like France than California, and that its cool,
                long, patient growing season was not a liability. It was the whole point.
            </p>

            <p className="text-lg leading-relaxed mb-8">
                He planted anyway. A decade later, his 1975 Eyrie Vineyards South Block
                Reserve traveled to Paris and placed in the top tier of an international
                blind tasting against the finest Pinot Noirs in the world. The French
                judges were so unsettled that Robert Drouhin, one of Burgundy's most
                respected producers, called for a rematch. He invited six of his best
                bottles and six of the top foreign entrants, including Lett's. Eyrie
                finished second, beating all but one Drouhin wine. Suddenly, and
                permanently, Oregon was on the map.
            </p>

            {/* Image 1 — Hero vineyard */}
            <figure className="my-8 not-prose">
                <img
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=900&q=80"
                    alt="Rolling vineyard rows in the Willamette Valley, Oregon at golden hour"
                    className="w-full rounded-2xl object-cover h-72"
                />
                <figcaption className="text-white/50 text-xs text-center mt-2 italic">
                    Willamette Valley — where cool-climate perfection and volcanic soils created one of the world's great Pinot Noir regions.
                </figcaption>
            </figure>

            {/* The Land Section */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fff0d4" }}
                className="text-xl font-bold mb-4 mt-10"
            >
                What the Land Actually Is
            </div>

            <p className="text-lg leading-relaxed mb-6">
                The Willamette Valley is not beautiful by accident. Stretching more than
                100 miles from Portland to Eugene, flanked by the Coast Range to the west
                and the Cascades to the east, the valley sits in a naturally protected
                corridor that moderates everything. The Coast Range blocks the worst of
                the Pacific storms. The Cascades shield the valley from the arid heat of
                the high desert. What remains is a long, temperate growing season of warm
                days, cool nights, and gentle autumns. Pinot Noir, the most fickle and
                demanding grape on earth, requires precisely this. It rarely finds it
                outside of Burgundy. It found it here.
            </p>

            <p className="text-lg leading-relaxed mb-6">
                The soils tell an equally remarkable story. Ancient volcanic activity from
                the Cascades laid down iron-rich Jory soils in areas like the Dundee Hills,
                producing elegant, red-fruited Pinot Noir with fine tannins. Then, roughly
                13,000 years ago, a series of catastrophic Ice Age floods, known as the
                Missoula Floods, swept a wall of water up to 1,000 feet tall across the
                Pacific Northwest. When those floodwaters pooled in the Willamette Valley,
                they deposited layers of marine sediment over the volcanic base. The
                combination created complex, mineral-rich soil with exceptional drainage,
                the kind of geological layering that takes millennia to produce and cannot
                be engineered or replicated anywhere else on earth.
            </p>

            <p className="text-lg leading-relaxed mb-10">
                Three major soil families now define the valley's distinct sub-regions.
                Jory soils in the Dundee Hills yield precision and elegance. Marine
                sedimentary soils in Yamhill-Carlton produce darker, more structured wines
                with firmer grip. Laurelwood loess in the northern hills contributes lifted
                aromatics and refined texture. This geological diversity is why the valley
                supports eleven distinct AVAs, each with its own voice, despite sharing a
                broadly similar climate.
            </p>

            {/* Inline image 2 — barrel cellar */}
            <figure className="my-8 not-prose">
                <img
                    src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=80"
                    alt="Oak barrels aging Pinot Noir in a Willamette Valley winery cellar"
                    className="w-full rounded-2xl object-cover h-64"
                />
                <figcaption className="text-white/50 text-xs text-center mt-2 italic">
                    French oak barrels in a Willamette cellar — where cool patience transforms Oregon fruit into world-class Pinot Noir.
                </figcaption>
            </figure>

            {/* The Evolution Section */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fff0d4" }}
                className="text-xl font-bold mb-4 mt-10"
            >
                How It Evolved Into What It Is Today
            </div>

            <p className="text-lg leading-relaxed mb-6">
                The pioneers planted in the 1960s and 1970s knowing they were building
                something that would outlast them. David Lett, Dick Erath, Dick Ponzi,
                David Adelsheim, and the other founding families worked collectively to
                establish quality standards and advocate for strict truth-in-labeling
                laws. Oregon's resulting wine law requires that a bottle labeled Pinot Noir
                contain at least 90 percent Pinot grapes, versus the national standard of
                75 percent. A wine labeled Willamette Valley must contain at least 95
                percent valley-grown fruit. These were not marketing decisions. They were
                integrity decisions, and they set the foundation for everything that followed.
            </p>

            <p className="text-lg leading-relaxed mb-6">
                The French eventually came to them. Robert Drouhin purchased land in the
                Dundee Hills in 1988 and established Domaine Drouhin Oregon. The house of
                Louis Jadot followed. Dominique Lafon of Burgundy's most celebrated domaine
                arrived next. When the greatest names in French wine begin buying property
                in a region, the argument about quality is effectively over. The Willamette
                Valley had not imitated Burgundy. It had earned a seat at the same table.
            </p>

            <p className="text-lg leading-relaxed mb-10">
                Recent vintages have only deepened the valley's reputation. Since 2021,
                Wine Spectator reports, Willamette has seen a run of warm, dry growing
                seasons with no wildfire smoke concerns, producing Pinot Noir and
                Chardonnay that stand alongside the finest bottles from Burgundy and Sonoma.
                Prices for top producers now match those of world-class wines globally,
                and the valley's 700 wineries collectively account for 74 percent of all
                Oregon wine production.
            </p>

            {/* Wineries Section */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fff0d4" }}
                className="text-xl font-bold mb-5"
            >
                Wineries Worth the Drive
            </div>

            <div className="space-y-5 mb-12">
                {wineries.map((winery, i) => (
                    <div key={i} className="border-l-4 border-white/30 pl-5 py-1">
                        <p
                            style={{ fontFamily: "'Cinzel', serif", color: "#fff0d4" }}
                            className="font-bold text-base mb-2"
                        >
                            {winery.name}
                        </p>
                        <p className="text-white/90 text-base leading-relaxed mb-2">
                            {winery.note}
                        </p>
                        <a
                            href={winery.link}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            className="text-[#fff0d4] hover:text-white text-sm font-bold underline transition-colors duration-200"
                        >
                            Visit Site →
                        </a>
                    </div>
                ))}
            </div>

            {/* Image — Food and Wine Pairing */}
            <figure className="my-8 not-prose">
                <img
                    src="/images/willamette_wine_food.png"
                    alt="Elegantly plated Pacific Northwest dish with a glass of Willamette Valley Pinot Noir"
                    className="w-full rounded-2xl object-cover h-72"
                />
                <figcaption className="text-white/50 text-xs text-center mt-2 italic">
                    Willamette Valley fare is as celebrated as its wine — farm-to-table cuisine and Pinot Noir belong together.
                </figcaption>
            </figure>

            {/* ── TOURS SECTION ── */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fff0d4" }}
                className="text-xl font-bold mb-2 mt-2"
            >
                Book a Wine Country Experience
            </div>
            <p className="text-white/70 text-sm mb-6">
                Skip the guesswork. These highly-rated tours handle the driving, the pairings, and the insider access — so you can focus on the glass.
            </p>

            <div className="grid grid-cols-1 gap-5 mb-12">
                {tours.map((tour, i) => (
                    <a
                        key={i}
                        href={tour.link}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="group flex gap-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 no-underline"
                    >
                        <div className="w-28 flex-shrink-0 overflow-hidden">
                            <img
                                src={tour.image}
                                alt={tour.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col justify-center p-4 flex-1">
                            <span className={`inline-block self-start text-xs font-black uppercase tracking-widest text-white px-2 py-0.5 rounded-full mb-2 ${tour.badgeColor}`}>
                                {tour.badge}
                            </span>
                            <p style={{ fontFamily: "'Cinzel', serif" }} className="font-bold text-[#fff0d4] text-base mb-1 leading-snug">
                                {tour.title}
                            </p>
                            <p className="text-white/70 text-sm leading-relaxed mb-2">
                                {tour.description}
                            </p>
                            <span className="text-amber-400 text-sm font-semibold group-hover:text-amber-300 transition-colors">
                                {tour.cta} →
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            {/* Inline image 3 — tasting room */}
            <figure className="my-8 not-prose">
                <img
                    src="/images/Wine2.jpg"
                    alt="Elegant wine tasting room in the Willamette Valley"
                    className="w-full rounded-2xl object-cover h-64"
                />
                <figcaption className="text-white/50 text-xs text-center mt-2 italic">
                    Willamette Valley tasting rooms range from converted barns to architecturally stunning estates — each one worth the stop.
                </figcaption>
            </figure>

            {/* ── WHERE TO STAY ── */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fff0d4" }}
                className="text-xl font-bold mb-2 mt-10"
            >
                Where to Stay in Wine Country
            </div>
            <p className="text-white/70 text-sm mb-6">
                The valley's accommodations range from vineyard B&Bs to full-service luxury resorts. McMinnville is the best base — walking distance to restaurants, tasting rooms, and galleries.
            </p>

            <div className="space-y-4 mb-8">
                {hotels.map((hotel, i) => (
                    <div key={i} className="border-l-4 border-rose-400/50 pl-5 py-1">
                        <a
                            href={hotel.link}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            className="font-bold text-[#fff0d4] hover:text-white text-base underline transition-colors"
                        >
                            {hotel.name}
                        </a>
                        <p className="text-white/80 text-sm leading-relaxed mt-1">
                            {hotel.note}
                        </p>
                    </div>
                ))}
            </div>



            {/* Visitor Info */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fff0d4" }}
                className="text-xl font-bold mb-4"
            >
                Planning Your Visit
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-10 shadow-inner">
                <ul className="space-y-3 text-white text-base">
                    <li>📍 <strong>Location:</strong> The valley runs more than 100 miles from Portland south to Eugene, with most of the premier estates concentrated around Dundee, McMinnville, and Carlton.</li>
                    <li>✈️ <strong>Nearest airport:</strong> Portland International Airport (PDX), approximately 45 minutes from the Dundee Hills.</li>
                    <li>🍷 <strong>Best time to visit:</strong> Late spring through harvest in October. Harvest season brings the most activity, the freshest energy, and the chance to see winemaking in motion.</li>
                    <li>🗺️ <strong>Sub-AVAs to explore:</strong> Dundee Hills, Yamhill-Carlton, Eola-Amity Hills, Ribbon Ridge, and Chehalem Mountains each offer distinct wine personalities worth comparing side by side.</li>
                    <li>🏨 <strong>Stay:</strong> McMinnville offers boutique hotels and exceptional dining.{" "}<a href="https://expedia.stay22.com/eztravelz/flg9moh--n" target="_blank" rel="sponsored noopener noreferrer" className="text-[#38bdf8] underline hover:text-sky-300 transition-colors">La Bastide Bed &amp; Breakfast</a>{" "}sits directly in wine country and offers a charming, intimate stay for visitors exploring the valley.</li>
                    <li>🚗 <strong>Getting around:</strong> A designated driver or guided wine tour is strongly recommended. Distances between estates are short but the roads are rural and the pours are generous.</li>
                </ul>
            </div>

            {/* Closing */}
            <p className="text-lg leading-relaxed mb-10">
                David Lett earned the nickname Papa Pinot before his death in 2008. He
                lived long enough to see what his bet on Oregon became. The valley he
                planted into, against all advice and conventional wisdom, now draws
                comparison to the greatest wine regions on earth not as flattery, but as
                fact. The wines speak for themselves, and they have been speaking clearly
                for decades.
            </p>

            {/* Expedia Willamette Valley Hotel Search Widget */}
            <div className="rounded-2xl overflow-hidden border border-white/20 mb-8">
                <div className="bg-gradient-to-r from-[#1a1a6e] to-[#003580] px-6 py-8 flex flex-col items-center text-center gap-4">
                    <img src="/images/Expedia logo.png" alt="Expedia" className="h-7 object-contain" />
                    <p
                        style={{ fontFamily: "'Cinzel', serif", color: "#fff0d4", fontSize: "1.3rem", letterSpacing: "0.04em" }}
                        className="font-bold"
                    >
                        Find Hotels in Willamette Valley Wine Country
                    </p>
                    <p className="text-white/70 text-sm max-w-md">
                        Compare rates across Newberg, McMinnville, Carlton, and the Dundee Hills corridor.
                    </p>
                    <a
                        href="https://expedia.com/affiliates/hotel-search-willamette-valley.HqbYSGY"
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#fecc02] hover:bg-yellow-300 text-[#003580] font-black px-8 py-3 rounded-full transition-all duration-200 text-sm mt-1"
                    >
                        Search Hotels on Expedia →
                    </a>
                </div>
                <p className="text-white/40 text-[10px] uppercase tracking-wider text-center py-2 bg-black/30">
                    Sponsored · We may earn a commission at no extra cost to you
                </p>
            </div>

            {/* Viator Affiliate Link */}
            <div className="mt-8 text-center pt-8 border-t border-white/20">
                <p
                    style={{ fontFamily: "'Cinzel', serif", color: "#fff0d4" }}
                    className="text-xl font-bold mb-4"
                >
                    Book a Premium Wine Tour
                </p>
                <a
                    href="https://www.viator.com/Portland-attractions/Willamette-Valley/d5065-a8027?pid=P00291237&mcid=42383&medium=link&campaign=Oregon"
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="block overflow-hidden rounded-2xl group relative"
                >
                    <img
                        src="/images/Willamette.jpg"
                        alt="Premium Wine Tasting Tour"
                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <span className="bg-[#37507a] text-white font-bold px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-lg shadow-lg">
                            Book Now via Viator
                        </span>
                    </div>
                </a>
                <p className="text-white/50 text-xs italic mt-3">
                    We may earn a commission if you book through this link.
                </p>
            </div>

        </article>
    );
}
