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

export default function WillametteValleyGuide() {
    return (
        <article className="max-w-3xl mx-auto px-8 py-12 md:p-12 text-slate-300 bg-slate-900/90 rounded-3xl shadow-xl overflow-hidden border border-slate-800 backdrop-blur-md">

            {/* Category Label */}
            <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">
                Wine Destinations
            </span>

            {/* Title */}
            <h2
                style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#fcd34d", // amber-300
                    fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                    lineHeight: 1.2,
                }}
                className="mt-3 mb-4"
            >
                The Upstart That Shook Burgundy: Willamette Valley and the Rise of World Class Pinot Noir
            </h2>

            <p className="text-slate-400 text-sm mb-8">
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

            {/* Image 1 */}
            <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=900&q=80"
                alt="Rolling vineyard rows in the Willamette Valley, Oregon at golden hour"
                className="w-full rounded-2xl mb-10 object-cover h-72"
            />

            {/* The Land Section */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fcd34d" }}
                className="text-xl font-bold mb-4"
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

            {/* The Evolution Section */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fcd34d" }}
                className="text-xl font-bold mb-4"
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

            {/* Image 2 */}
            <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=80"
                alt="Oak barrels aging Pinot Noir in a Willamette Valley winery cellar"
                className="w-full rounded-2xl mb-10 object-cover h-72"
            />

            {/* Wineries Section */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fcd34d" }}
                className="text-xl font-bold mb-5"
            >
                Wineries Worth the Drive
            </div>

            <div className="space-y-5 mb-12">
                {wineries.map((winery, i) => (
                    <div key={i} className="border-l-4 border-amber-600 pl-5 py-1">
                        <p
                            style={{ fontFamily: "'Cinzel', serif", color: "#fcd34d" }}
                            className="font-bold text-base mb-2"
                        >
                            {winery.name}
                        </p>
                        <p className="text-slate-300 text-base leading-relaxed mb-2">
                            {winery.note}
                        </p>
                        <a
                            href={winery.link}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            className="text-amber-500 hover:text-amber-400 text-sm font-semibold transition-colors duration-200"
                        >
                            Visit Site →
                        </a>
                    </div>
                ))}
            </div>

            {/* Visitor Info */}
            <div
                style={{ fontFamily: "'Cinzel', serif", color: "#fcd34d" }}
                className="text-xl font-bold mb-4"
            >
                Planning Your Visit
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 mb-10">
                <ul className="space-y-3 text-slate-300 text-base">
                    <li>📍 <strong>Location:</strong> The valley runs more than 100 miles from Portland south to Eugene, with most of the premier estates concentrated around Dundee, McMinnville, and Carlton.</li>
                    <li>✈️ <strong>Nearest airport:</strong> Portland International Airport (PDX), approximately 45 minutes from the Dundee Hills.</li>
                    <li>🍷 <strong>Best time to visit:</strong> Late spring through harvest in October. Harvest season brings the most activity, the freshest energy, and the chance to see winemaking in motion.</li>
                    <li>🗺️ <strong>Sub-AVAs to explore:</strong> Dundee Hills, Yamhill-Carlton, Eola-Amity Hills, Ribbon Ridge, and Chehalem Mountains each offer distinct wine personalities worth comparing side by side.</li>
                    <li>🏨 <strong>Stay:</strong> McMinnville offers boutique hotels and exceptional dining. The Allison Inn and Spa in Newberg sits directly in wine country and remains the valley's premier luxury property.</li>
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
                    Explore Willamette Valley Wine Country
                </p>
                <a
                    href="https://www.willamettewines.com"
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="inline-block bg-amber-600 hover:bg-amber-500 text-slate-900 font-bold px-8 py-3 rounded-full transition-colors duration-200"
                >
                    Plan Your Wine Country Visit →
                </a>
            </div>

            {/* Viator Affiliate Link */}
            <div className="mt-8 text-center pt-8 border-t border-slate-800">
                <p
                    style={{ fontFamily: "'Cinzel', serif", color: "#fcd34d" }}
                    className="text-xl font-bold mb-4"
                >
                    Book a Premium Wine Tour
                </p>
                <a
                    href="https://vi.me/K4SG4"
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
                        <span className="bg-amber-600 text-slate-900 font-bold px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-lg shadow-lg">
                            Book Now via Viator
                        </span>
                    </div>
                </a>
                <p className="text-slate-400 text-xs italic mt-3">
                    We may earn a commission if you book through this link.
                </p>
            </div>

        </article>
    );
}
