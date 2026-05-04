// WorldCupGuide.tsx
// Long-form travel guide: 2026 FIFA World Cup — Mexico City, Miami, New York/New Jersey

export default function WorldCupGuide() {
    return (
        <article
            className="bg-[#37507a] rounded-3xl shadow-2xl overflow-hidden border-2 border-white/20 p-8 md:p-12 backdrop-blur-sm"
            style={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.3)" }}
        >
            {/* Category Label */}
            <span className="text-white uppercase tracking-widest text-sm font-semibold">
                Sports Travel
            </span>

            {/* Title */}
            <h2
                style={{
                    fontFamily: "var(--font-bebas)",
                    color: "#ffffff",
                    fontSize: "clamp(2.2rem, 6vw, 4rem)",
                    fontWeight: "normal",
                    letterSpacing: "0.06em",
                    lineHeight: 1.15,
                }}
                className="mt-3 mb-4"
            >
                The World Is Coming To Your Backyard. A Guide To The 2026 FIFA World Cup
            </h2>

            <p className="text-white/60 text-sm mb-8">
                June 11 – July 19, 2026 · USA, Canada &amp; Mexico · 48 Teams · 104 Matches
            </p>

            {/* Hero Image */}
            <img
                src="/images/Metlife2.jpg"
                alt="MetLife Stadium — Home of the 2026 FIFA World Cup Final"
                className="w-full rounded-2xl mb-8 object-cover border border-white/20 shadow-lg"
            />

            {/* Opening paragraphs */}
            <p className="text-lg leading-relaxed mb-6 text-white">
                Once every four years the entire planet stops and watches the same thing. No
                other event comes close, not the Super Bowl, not the Olympics, not anything.
                And this summer, for the first time in history, three nations are sharing that
                honour. The 2026 FIFA World Cup kicks off on June 11th at the legendary
                Estadio Azteca in Mexico City and doesn&apos;t stop until July 19th, when the
                final whistle blows at MetLife Stadium in New Jersey with the whole world
                holding its breath. Sixteen host cities. Forty-eight nations. One hundred and
                four matches. This isn&apos;t just a tournament. It&apos;s the largest World
                Cup ever staged, and it&apos;s happening right here in North America.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-white">
                For the traveling fan, the logistics are unlike anything that came before. The
                United States alone hosts eleven cities: Los Angeles, Miami, Atlanta, Dallas,
                Houston, Seattle, Philadelphia, Boston, Kansas City, the San Francisco Bay
                Area, and the New York metropolitan area. Canada brings Toronto and Vancouver.
                Mexico adds Guadalajara, Monterrey, and Mexico City. FIFA has divided the
                continent into three geographic regions — Western, Central, and Eastern — so
                fans can realistically follow their team through multiple group stage matches
                without crossing an ocean between games. Road-tripping the Western bracket
                from LA up to Seattle for back-to-back group stage matches? That is a summer
                story worth telling for the rest of your life.
            </p>

            <p className="text-lg leading-relaxed mb-10 text-white">
                This guide is built around the three moments that matter most: where it
                begins, where the tournament finds its full heart, and where it ends. Mexico
                City for the opening. Miami for the mid-tournament fire. New York and New
                Jersey for the Final.
            </p>

            {/* ── MEXICO CITY ── */}
            <h3
                style={{
                    fontFamily: "var(--font-bebas)",
                    color: "#fff0d4",
                    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                    fontWeight: "normal",
                    letterSpacing: "0.08em",
                }}
                className="mb-2 border-t border-white/20 pt-8"
            >
                The Opening: Mexico City — June 11
            </h3>

            <p className="text-lg leading-relaxed mb-6 text-white">
                There is a reason the tournament begins here. Estadio Azteca is the only
                stadium in history to have hosted two FIFA World Cup Finals, in 1970 and 1986,
                and on June 11th it becomes the first stadium in history to host three World
                Cup opening ceremonies. That is not a marketing claim. That is 87,000 people
                in the building where Pelé lifted the trophy, where Maradona scored the Hand
                of God, and where this summer&apos;s story begins.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-white">
                Mexico City sits at 2,240 meters above sea level, which is higher than most
                visitors expect. Arrive at least two days before any match. Drink water from
                the moment you land. Skip the alcohol on your first night. The altitude
                fatigue that catches travelers off guard in the first 24 to 48 hours is real,
                and missing kickoff because your head is pounding is not how this trip should
                start.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-white">
                <strong className="text-[#fff0d4]">The stadium logistics.</strong> Estadio
                Azteca sits in the southern part of the city in the Santa Úrsula district of
                Coyoacán. The surrounding roads, particularly Calzada de Tlalpan and
                Periférico, become parking lots when 87,000 people exit at once. Do not rent
                a car. Take the Metro Line 2 to Tasqueña station and connect to the Tren
                Ligero light rail directly to the stadium. Uber and Didi are widely available
                and affordable in Mexico City, but on match days build in 90 minutes of travel
                time minimum and do not rely on rideshare for the return trip. Leave from
                Tasqueña.
            </p>

            {/* Inline Image — Mexico City */}
            <img
                src="/images/Pitch.png"
                alt="Football pitch ready for a World Cup match"
                className="w-full rounded-2xl mb-8 object-cover border border-white/20 shadow-lg"
            />

            <h4
                style={{ fontFamily: "var(--font-bebas)", color: "#fff0d4", fontSize: "1.5rem", letterSpacing: "0.06em", fontWeight: "normal" }}
                className="mb-3 mt-4"
            >
                Where to Stay in Mexico City
            </h4>

            <p className="text-lg leading-relaxed mb-4 text-white">
                The honest choice comes down to what kind of trip you want. If you are here
                purely to get to the stadium and back, staying in Tlalpan or Coyoacán puts
                you close to the Tren Ligero with shorter commutes. If you want to actually
                experience Mexico City between matches — and you should — the neighborhoods of
                Polanco, Condesa, and Roma Norte are where the city&apos;s best restaurants,
                cafes, nightlife, and street life live.
            </p>

            <ul className="space-y-4 mb-8 text-white text-base leading-relaxed">
                <li>
                    <strong className="text-[#fff0d4]">Luxury tier:</strong> The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/jRzKG3iTo0" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        Four Seasons Mexico City
                    </a>{" "}
                    on Paseo de la Reforma is the city&apos;s benchmark luxury property. It announced a dedicated 2026 World Cup shuttle service from the hotel directly to the stadium. The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/dh4yYZNIEw" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        St. Regis Mexico City
                    </a>{" "}
                    on the same boulevard is the alternative for travelers who want the full luxury experience.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Mid-range:</strong> The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/6IYcamgfxo" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        Camino Real Polanco
                    </a>{" "}
                    and{" "}
                    <a href="https://expedia.stay22.com/eztravelz/tzzz0NLtoT" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        Presidente InterContinental Mexico City
                    </a>{" "}
                    are both well-located in Polanco with reliable infrastructure, English-speaking staff, and proximity to the neighborhood&apos;s restaurant scene.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Practical:</strong> Coyoacán itself, the neighborhood directly surrounding the stadium, has smaller hotels and apartments that make the post-match logistics genuinely simple. You will be home in twenty minutes regardless of what time the match ends.
                </li>
            </ul>

            <h4
                style={{ fontFamily: "var(--font-bebas)", color: "#fff0d4", fontSize: "1.5rem", letterSpacing: "0.06em", fontWeight: "normal" }}
                className="mb-3"
            >
                What to Do Between Matches
            </h4>

            <p className="text-lg leading-relaxed mb-4 text-white">
                Mexico City has more than 150 museums, a historic center built on top of
                ancient Aztec ruins, and neighborhoods that reward slow walking and no agenda.
                The essentials, in order of importance:
            </p>

            <ul className="space-y-3 mb-6 text-white text-base leading-relaxed list-none">
                <li>
                    <strong className="text-[#fff0d4]">The Zócalo and Templo Mayor</strong> put
                    you at the heart of what this city actually is. The massive main plaza is
                    surrounded by the Metropolitan Cathedral and the ruins of the Templo Mayor,
                    the great Aztec pyramid excavated right in the city center.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">The National Museum of Anthropology</strong>{" "}
                    in Chapultepec Park is one of the finest museums in the world. The collection
                    of pre-Columbian artifacts and the famous Aztec Sun Stone all live here. Allow
                    half a day minimum.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Coyoacán</strong> is the neighborhood
                    surrounding the stadium and one of the most beautiful corners of Mexico City.
                    The Frida Kahlo Museum — La Casa Azul — is here, and it is as extraordinary as
                    its reputation.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Roma and Condesa</strong> are where you
                    eat, drink, and walk. Mezcal bars, bookstores, art deco architecture, and the
                    Mexico City that people come back for.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Teotihuacán</strong> is an hour northeast.
                    The Pyramids of the Sun and the Moon are among the most significant
                    archaeological sites in the Americas. Go early.
                </li>
            </ul>

            {/* Mexico City Tour CTAs */}
            <div className="space-y-3 mb-10">
                <a href="https://www.viator.com/tours/Mexico-City/d628-ttd?pid=P00291237&mcid=42383&medium=link&campaign=Blog-WorldCup" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-3 bg-[#fff0d4]/15 hover:bg-[#fff0d4]/25 border border-white/20 rounded-xl px-5 py-3 text-white font-semibold transition-colors duration-200 text-sm">
                    <span className="text-xl">🏛️</span>
                    Book the Teotihuacán Early Morning Tour with Hotel Pickup →
                </a>
                <a href="https://www.viator.com/tours/Mexico-City/Mexico-City-Super-Saver-Coyoacan-and-Frida-Kahlo-Museum-plus-Xochimilco-and-National-University/d628-5885MEXSUPER1?pid=P00291237&mcid=42383&medium=link&campaign=Blog-WorldCup" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-3 bg-[#fff0d4]/15 hover:bg-[#fff0d4]/25 border border-white/20 rounded-xl px-5 py-3 text-white font-semibold transition-colors duration-200 text-sm">
                    <span className="text-xl">🎨</span>
                    Book the Frida Kahlo Museum, Coyoacán &amp; Xochimilco Combo Tour →
                </a>
                <a href="https://www.viator.com/Mexico-City/d628-ttd?pid=P00291237&mcid=42383&medium=link&campaign=Blog-WorldCup" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-3 bg-[#fff0d4]/15 hover:bg-[#fff0d4]/25 border border-white/20 rounded-xl px-5 py-3 text-white font-semibold transition-colors duration-200 text-sm">
                    <span className="text-xl">🌮</span>
                    Book the Mexico City Food Tour — Roma &amp; Condesa →
                </a>
            </div>

            {/* ── MIAMI ── */}
            <h3
                style={{
                    fontFamily: "var(--font-bebas)",
                    color: "#fff0d4",
                    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                    fontWeight: "normal",
                    letterSpacing: "0.08em",
                }}
                className="mb-2 border-t border-white/20 pt-8"
            >
                The Middle: Miami — June 15 to July 18
            </h3>

            <p className="text-lg leading-relaxed mb-6 text-white">
                Miami is hosting seven matches at Hard Rock Stadium across the entire
                tournament, including group-stage games featuring Brazil, Portugal, Uruguay,
                and Colombia, plus a Round of 32, a Quarterfinal, and the Bronze Final on
                July 18. No other American city outside New York has more at stake during
                the knockout rounds, and no other host city will have more international fan
                energy in its streets.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-white">
                Hard Rock Stadium sits in Miami Gardens, about 15 miles north of downtown.
                On a normal day that is 20 to 35 minutes by car. On match day with 65,000
                fans converging, plan for 45 to 75 minutes and never assume a rideshare will
                be waiting when you exit. The smartest transport option in Miami is the
                Brightline train from Miami Central Station to Aventura Station, then the
                Stadium Connect shuttle to the venue. Fixed price, no surge, no guesswork.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-white">
                The official FIFA Fan Festival runs at Bayfront Park in Downtown Miami for
                the full tournament — free to enter, with massive screens, live music, and
                international food from every nation in the draw. Thirty thousand people.
                Waterfront. Non-stop from June 15. You do not need a ticket to have a
                genuinely great day in Miami during this tournament.
            </p>

            {/* Ticketmaster Affiliate Banner */}
            <a
                href="https://ticketmaster.evyy.net/c/7157806/264167/4272?u=https%3A%2F%2Fwww.ticketmaster.com"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block mb-8 rounded-2xl overflow-hidden border border-white/20 shadow-lg group"
            >
                <div
                    className="relative flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-7"
                    style={{ background: "linear-gradient(135deg, #026cdf 0%, #001e5a 100%)" }}
                >
                    {/* Left — Ticketmaster logo + copy */}
                    <div className="flex items-center gap-5">
                        <div className="flex-shrink-0 bg-white rounded-xl px-4 py-2 shadow-md">
                            <img
                                src="/images/Ticketmaster.jpg"
                                alt="Ticketmaster"
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                        <div>
                            <p className="text-white font-bold text-lg leading-tight">
                                Get Your World Cup Tickets
                            </p>
                            <p className="text-white/70 text-sm mt-1">
                                Official tickets for every match — secure, guaranteed
                            </p>
                        </div>
                    </div>
                    {/* Right — CTA button */}
                    <div className="flex-shrink-0">
                        <span className="inline-block bg-[#026cdf] group-hover:bg-[#0055c4] border-2 border-white text-white font-bold px-7 py-3 rounded-full transition-colors duration-200 text-sm tracking-wide">
                            Find Tickets →
                        </span>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                    <div className="absolute bottom-0 left-1/3 w-24 h-24 rounded-full bg-white/5 translate-y-1/2 pointer-events-none" />
                </div>
            </a>

            <h4
                style={{ fontFamily: "var(--font-bebas)", color: "#fff0d4", fontSize: "1.5rem", letterSpacing: "0.06em", fontWeight: "normal" }}
                className="mb-3 mt-4"
            >
                Where to Stay in Miami
            </h4>

            <ul className="space-y-4 mb-8 text-white text-base leading-relaxed">
                <li>
                    <strong className="text-[#fff0d4]">Miami Beach</strong> is where the
                    international fan energy will be loudest. Brazilian supporters, Portuguese fans,
                    and South American travelers will fill South Beach for the full tournament. The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/eT8yrVeJMC" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        Faena Hotel Miami Beach
                    </a>{" "}
                    is the landmark luxury address, with oceanfront suites and Forbes Five-Star
                    service. The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/UKZwIldPR0" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        St. Regis Bal Harbour Resort
                    </a>{" "}
                    offers beachfront luxury with a calmer atmosphere.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Brickell</strong> offers a smarter balance
                    for fans attending multiple matches. The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/b4VnrevTTf" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        EAST Miami
                    </a>{" "}
                    in Brickell is the most consistently recommended hotel for World Cup travelers
                    — walkable dining, Metrorail access, and a 35 to 45 minute match-day commute.
                    The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/9SCkBb7uey" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        SLS LUX Brickell
                    </a>{" "}
                    adds trendier energy with in-house nightlife.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Near the stadium:</strong> The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/nKanVFse--" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        Hilton Aventura
                    </a>{" "}
                    is the closest major hotel to Hard Rock Stadium, roughly 20 minutes in normal
                    traffic. For fans attending multiple matches who want zero logistics stress on
                    game days, it is the practical choice.
                </li>
            </ul>

            <h4
                style={{ fontFamily: "var(--font-bebas)", color: "#fff0d4", fontSize: "1.5rem", letterSpacing: "0.06em", fontWeight: "normal" }}
                className="mb-3"
            >
                What to Do Between Matches in Miami
            </h4>

            <p className="text-lg leading-relaxed mb-6 text-white">
                Miami&apos;s appeal between matches is not subtle. Ocean Drive and the Art
                Deco Historic District on South Beach are the postcard version of the city,
                worth experiencing once. Wynwood is the more interesting afternoon — a
                neighborhood that turned industrial warehouse space into one of the most
                significant street art destinations in the world. The Wynwood Walls are the
                centerpiece, but the galleries, restaurants, and bars in the surrounding
                blocks are the real reason to spend an afternoon there.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-white">
                Little Havana along Calle Ocho is where the city&apos;s Cuban heritage lives
                most visibly — the ventanitas serving cafecito and Cuban sandwiches, the
                domino players at Maximo Gomez Park. El Farolito and Versailles are both
                institutions worth eating at. For the beach days between matches, nothing
                beats a morning on the sand at South Beach before the crowds arrive.
            </p>

            {/* Miami Tour CTAs */}
            <div className="space-y-3 mb-10">
                <a href="https://www.viator.com/Miami-tours/Food-Tours/d662-g6-c80?pid=P00291237&mcid=42383&medium=link&campaign=Blog-WorldCup" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-3 bg-[#fff0d4]/15 hover:bg-[#fff0d4]/25 border border-white/20 rounded-xl px-5 py-3 text-white font-semibold transition-colors duration-200 text-sm">
                    <span className="text-xl">🎨</span>
                    Book the Wynwood Food and Street Art Walking Tour →
                </a>
                <a href="https://www.viator.com/tours/Miami/City-Tour-Miami-PLUS/d662-72789P1?pid=P00291237&mcid=42383&medium=link&campaign=Blog-WorldCup" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-3 bg-[#fff0d4]/15 hover:bg-[#fff0d4]/25 border border-white/20 rounded-xl px-5 py-3 text-white font-semibold transition-colors duration-200 text-sm">
                    <span className="text-xl">⛵</span>
                    Book the Miami City Tour plus Biscayne Bay Boat Tour →
                </a>
                <a href="https://www.viator.com/tours/Miami/City-Tour-Miami-Combo-Everglades-Tour-Boat-Tour/d662-72789P3?pid=P00291237&mcid=42383&medium=link&campaign=Blog-WorldCup" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-3 bg-[#fff0d4]/15 hover:bg-[#fff0d4]/25 border border-white/20 rounded-xl px-5 py-3 text-white font-semibold transition-colors duration-200 text-sm">
                    <span className="text-xl">🐊</span>
                    Book the Everglades Airboat and Miami City Combo →
                </a>
            </div>

            {/* ── NEW YORK / NEW JERSEY ── */}
            <h3
                style={{
                    fontFamily: "var(--font-bebas)",
                    color: "#fff0d4",
                    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                    fontWeight: "normal",
                    letterSpacing: "0.08em",
                }}
                className="mb-2 border-t border-white/20 pt-8"
            >
                The Final: New York / New Jersey — July 19
            </h3>

            <p className="text-lg leading-relaxed mb-6 text-white">
                MetLife Stadium in East Rutherford, New Jersey hosts the World Cup Final on
                July 19th. The stadium holds 82,500 fans, making it one of the largest venues
                in the entire tournament, and on the day of the Final it will be the most
                watched piece of real estate on the planet. Tickets for the Final start at
                just over $2,000 for the lowest tier. If you are coming to New York to be in
                the city when the world watches — that is also entirely worth doing. Every bar,
                every screen, every rooftop in Manhattan will be showing it.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-white">
                <strong className="text-[#fff0d4]">Getting to MetLife.</strong> Do not drive.
                NJ Transit runs the Meadowlands Rail Line directly from Penn Station to the
                stadium on match days in approximately 30 minutes. This is the correct answer
                for Final day. Arrive two to three hours early for knockout matches and enjoy
                the pre-match experience rather than fighting traffic.
            </p>

            {/* Amazon Product Banner — Trionda Soccer Ball */}
            <a
                href="https://amzn.to/3N3GOTu"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block mb-8 rounded-2xl overflow-hidden border border-white/20 shadow-lg group"
            >
                <div
                    className="relative flex flex-col md:flex-row items-center gap-0"
                    style={{ background: "linear-gradient(135deg, #001e5a 0%, #37507a 60%, #026cdf 100%)" }}
                >
                    {/* Ball image — large, flush left */}
                    <div className="flex-shrink-0 flex items-center justify-center bg-white/10 md:w-56 w-full md:h-auto h-48">
                        <img
                            src="https://m.media-amazon.com/images/I/71BirAZbzXL._AC_SL1500_.jpg"
                            alt="adidas FIFA World Cup 26 Trionda Soccer Ball"
                            className="h-40 w-40 object-contain drop-shadow-xl"
                        />
                    </div>
                    {/* Text content */}
                    <div className="flex-1 px-7 py-6">
                        <p className="text-white/60 text-xs uppercase tracking-widest mb-1 font-semibold">Official Match Ball</p>
                        <p className="text-white font-bold text-xl leading-snug mb-2">
                            adidas FIFA World Cup 26™ Trionda Soccer Ball
                        </p>
                        {/* Stars */}
                        <div className="flex items-center gap-1 mb-3">
                            {[1,2,3,4].map(i => (
                                <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            ))}
                            <svg className="w-4 h-4" viewBox="0 0 20 20">
                                <defs><linearGradient id="half"><stop offset="60%" stopColor="#facc15"/><stop offset="60%" stopColor="#ffffff" stopOpacity="0.3"/></linearGradient></defs>
                                <path fill="url(#half)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <span className="text-white/60 text-xs ml-1">4.6</span>
                        </div>
                        <p className="text-white text-2xl font-bold mb-4">$34.98 <span className="text-sm font-normal text-white/60">with Prime</span></p>
                        <span className="inline-block bg-[#FF9900] group-hover:bg-[#e88a00] text-black font-bold px-6 py-2.5 rounded-full transition-colors duration-200 text-sm tracking-wide">
                            View on Amazon →
                        </span>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                    <div className="absolute bottom-0 left-1/2 w-24 h-24 rounded-full bg-white/5 translate-y-1/2 pointer-events-none" />
                </div>
            </a>

            <h4
                style={{ fontFamily: "var(--font-bebas)", color: "#fff0d4", fontSize: "1.5rem", letterSpacing: "0.06em", fontWeight: "normal" }}
                className="mb-3 mt-4"
            >
                Where to Stay for the Final
            </h4>

            <ul className="space-y-4 mb-8 text-white text-base leading-relaxed">
                <li>
                    <strong className="text-[#fff0d4]">Manhattan (recommended):</strong> Any hotel
                    within walking distance of Penn Station puts you on the direct NJ Transit
                    Meadowlands Rail Line. The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/4e_x-IDwcl" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        Crowne Plaza HY36 Midtown
                    </a>{" "}
                    is less than 5 minutes on foot from Penn Station with unusually spacious rooms.
                    The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/qiIdKyZKN9" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        Knickerbocker Hotel
                    </a>{" "}
                    at Times Square sits one minute from Penn Station with one of the best rooftop
                    bars in Midtown — exactly where you want to be after the Final whistle.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Luxury Manhattan:</strong> The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/ASwPKUUkAs" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        Ritz-Carlton New York, NoMad
                    </a>{" "}
                    is a 10-minute walk to Penn Station with a 50th-floor bar and José Andrés
                    dining. The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/ohAsqeJ-du" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        Hotel Edison Times Square
                    </a>{" "}
                    is the value-conscious option — a historic Art Deco property 15 minutes from
                    Penn Station.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Near the stadium:</strong> The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/TQV06MTFqI" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        Hampton Inn Carlstadt
                    </a>{" "}
                    sits directly across the highway from MetLife — as close as you can get without
                    camping in the parking lot. Free breakfast, on-site parking, and the NJ Transit
                    163 bus stops at the front door. The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/BX53GSXHNG" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        Hyatt Regency Jersey City on the Hudson
                    </a>{" "}
                    offers PATH train access into Lower Manhattan, waterfront dining, and Manhattan
                    skyline views.
                </li>
            </ul>

            <h4
                style={{ fontFamily: "var(--font-bebas)", color: "#fff0d4", fontSize: "1.5rem", letterSpacing: "0.06em", fontWeight: "normal" }}
                className="mb-3"
            >
                What to Do While You&apos;re in New York
            </h4>

            <p className="text-lg leading-relaxed mb-6 text-white">
                The World Cup Final is on a Sunday. Most international fans will be in New
                York for at least three to four days around that weekend. Central Park is 843
                acres in the middle of Manhattan, and the lawn areas will be alive with
                informal fan gatherings during Final week in a way the city rarely experiences.
                The High Line, the elevated park built on a former rail line on Manhattan&apos;s
                west side, runs from the Meatpacking District to Hudson Yards — one of the
                most pleasant walks in the city. From the southern end you can see the New
                Jersey shore across the river, and on a clear evening the distance to the
                stadium is surprisingly comprehensible.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-white">
                For a genuine New York meal before the Final: Joe&apos;s Pizza on Carmine
                Street in the West Village is the standard by which New York pizza is
                measured, and a slice there the evening before the Final is a small, specific
                thing that will sit well in your memory.
            </p>

            {/* New York Tour CTAs */}
            <div className="space-y-3 mb-10">
                <a href="https://www.viator.com/tours/New-York-City/Central-Park-Walking-Tour/d687-134104P1?pid=P00291237&mcid=42383&medium=link&campaign=Blog-WorldCup" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-3 bg-[#fff0d4]/15 hover:bg-[#fff0d4]/25 border border-white/20 rounded-xl px-5 py-3 text-white font-semibold transition-colors duration-200 text-sm">
                    <span className="text-xl">🌿</span>
                    Book the Central Park Guided Walking Tour →
                </a>
                <a href="https://www.viator.com/tours/New-York-City/Secrets-of-Hudson-Yards-HighLine-and-Vessel/d687-5250P30?pid=P00291237&mcid=42383&medium=link&campaign=Blog-WorldCup" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-3 bg-[#fff0d4]/15 hover:bg-[#fff0d4]/25 border border-white/20 rounded-xl px-5 py-3 text-white font-semibold transition-colors duration-200 text-sm">
                    <span className="text-xl">🏙️</span>
                    Book the High Line and Hudson Yards Walking Tour →
                </a>
            </div>

            {/* ── MEXICO SAFETY ── */}
            <h3
                style={{
                    fontFamily: "var(--font-bebas)",
                    color: "#fff0d4",
                    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                    fontWeight: "normal",
                    letterSpacing: "0.08em",
                }}
                className="mb-2 border-t border-white/20 pt-8"
            >
                Traveling in Mexico: What You Need to Know Before You Go
            </h3>

            <p className="text-lg leading-relaxed mb-4 text-white">
                Mexico City is one of the great cities on earth and will be an extraordinary
                host for the World Cup. It is also a city where knowing a few things in
                advance makes a genuine difference in how smoothly your trip goes.
            </p>

            <ul className="space-y-4 mb-8 text-white text-base leading-relaxed">
                <li>
                    <strong className="text-[#fff0d4]">Advisory context:</strong> The U.S. State
                    Department currently carries Mexico under a Level 2 advisory — the same level
                    assigned to France, Germany, and the United Kingdom. The neighborhoods where
                    visitors will spend their time during the tournament — Polanco, Condesa, Roma
                    Norte, and Coyoacán — are well-patrolled and considered among the safer areas
                    in the city.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Transportation is the most important safety variable.</strong>{" "}
                    Do not hail taxis off the street. Use Uber or Didi exclusively. Before getting
                    into any vehicle, confirm the driver&apos;s name, license plate, and vehicle
                    model in the app. This takes ten seconds and is worth doing every time.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Do not rent a car.</strong> Mexico City
                    traffic is already among the most complex in North America. On match days a
                    rental car becomes a very expensive liability.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Keep valuables out of sight.</strong>{" "}
                    Pickpocketing and phone snatching in crowded areas are the most common issues.
                    Use a money belt for your passport and extra cash.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Enroll in STEP.</strong> The Smart Traveler
                    Enrollment Program at{" "}
                    <a href="https://step.state.gov" target="_blank" rel="noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        step.state.gov
                    </a>{" "}
                    registers you with the nearest U.S. Embassy. Five minutes. Costs nothing. Every
                    American traveling to Mexico should do this.
                </li>
            </ul>

            {/* ── US ENTRY ── */}
            <h3
                style={{
                    fontFamily: "var(--font-bebas)",
                    color: "#fff0d4",
                    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                    fontWeight: "normal",
                    letterSpacing: "0.08em",
                }}
                className="mb-2 border-t border-white/20 pt-8"
            >
                Entering the United States: What International Visitors Need to Know in 2026
            </h3>

            <p className="text-lg leading-relaxed mb-4 text-white">
                The United States is hosting the majority of this tournament, and the welcome
                at the stadiums will be genuine. The entry process at the border and airports,
                however, operates under a significantly different environment than it did four
                years ago — international visitors should understand the current landscape
                before they travel.
            </p>

            <ul className="space-y-4 mb-8 text-white text-base leading-relaxed">
                <li>
                    <strong className="text-[#fff0d4]">Check your visa and ESTA status now.</strong>{" "}
                    Visa Waiver Program travelers need a valid ESTA authorization before boarding.
                    Apply at{" "}
                    <a href="https://esta.cbp.dhs.gov" target="_blank" rel="noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        esta.cbp.dhs.gov
                    </a>{" "}
                    at least 72 hours before departure. If your passport has changed since your last
                    ESTA, you need a new one.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Travel restrictions apply.</strong> As of
                    January 1, 2026, a Presidential Proclamation restricts or fully suspends entry
                    for nationals of a significant number of countries. Verify your specific status
                    at{" "}
                    <a href="https://travel.state.gov" target="_blank" rel="noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        travel.state.gov
                    </a>{" "}
                    well in advance if you or anyone traveling with you may be affected.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Biometric screening applies to all non-U.S. citizens,</strong>{" "}
                    including Canadian visitors. CBP collects facial biometric data from all
                    non-citizens at entry and exit. Expect this at every port of entry.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Secondary inspection is more common.</strong>{" "}
                    If sent to secondary inspection, remain calm, answer questions honestly, and do
                    not argue. Coming prepared with accurate, consistent documentation remains the
                    most reliable path through any port of entry.
                </li>
            </ul>

            {/* ── REST OF THE MAP ── */}
            <h3
                style={{
                    fontFamily: "var(--font-bebas)",
                    color: "#fff0d4",
                    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                    fontWeight: "normal",
                    letterSpacing: "0.08em",
                }}
                className="mb-2 border-t border-white/20 pt-8"
            >
                The Rest of the Map
            </h3>

            <p className="text-lg leading-relaxed mb-4 text-white">
                Sixteen cities means that wherever your team is playing, there is a host city
                worth building a trip around. A few worth knowing:
            </p>

            <ul className="space-y-4 mb-10 text-white text-base leading-relaxed">
                <li>
                    <strong className="text-[#fff0d4]">Los Angeles</strong> (SoFi Stadium,
                    Inglewood) — one of the tournament&apos;s premium venues. The K Line Metro
                    connects downtown LA to Inglewood. Use it on match days.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Dallas</strong> (AT&amp;T Stadium,
                    Arlington) — hosts a semifinal. The{" "}
                    <a href="https://expedia.stay22.com/eztravelz/z-XXIzKwrI" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        Joule
                    </a>{" "}
                    and{" "}
                    <a href="https://expedia.stay22.com/eztravelz/yfCQpBCbGl" target="_blank" rel="nofollow noopener noreferrer" className="underline text-[#38bdf8] hover:text-white transition-colors">
                        Rosewood Mansion on Turtle Creek
                    </a>{" "}
                    are the high-end anchors in Dallas for the tournament.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Seattle</strong> (Lumen Field) — the most
                    walkable World Cup venue in the tournament. Steps from Pike Place Market and
                    the waterfront. If your team draws Seattle group stage matches, this is one of
                    the better pure travel experiences available.
                </li>
                <li>
                    <strong className="text-[#fff0d4]">Toronto</strong> (BMO Field) — Canada&apos;s
                    largest city during a summer sporting event of this scale will be extraordinary.
                    The waterfront, neighborhoods, and food scene are all worth building time around
                    beyond the matches.
                </li>
            </ul>

            {/* ── NEED TO KNOW BOX ── */}
            <div className="bg-[#fff0d4]/10 border border-white/20 rounded-2xl p-6 mb-8">
                <p
                    style={{
                        fontFamily: "var(--font-bebas)",
                        color: "#fff0d4",
                        fontSize: "1.6rem",
                        letterSpacing: "0.06em",
                        fontWeight: "normal",
                    }}
                    className="mb-4"
                >
                    Need To Know
                </p>
                <ul className="space-y-2 text-white text-sm leading-relaxed">
                    <li>⚽ <strong>Opening Match:</strong> June 11 · Mexico vs. South Africa · Estadio Azteca, Mexico City</li>
                    <li>🏆 <strong>Final:</strong> July 19 · MetLife Stadium, East Rutherford, New Jersey</li>
                    <li>🇺🇸 <strong>US Host Cities:</strong> LA · Miami · Dallas · Houston · Atlanta · Seattle · Philly · Boston · KC · SF Bay Area · NY/NJ</li>
                    <li>🇨🇦 <strong>Canada:</strong> Toronto · Vancouver</li>
                    <li>🇲🇽 <strong>Mexico:</strong> Mexico City · Guadalajara · Monterrey</li>
                    <li>🎟️ <strong>Tickets:</strong> Via FIFA.com only. Final tickets start above $2,000. Only buy through official channels.</li>
                    <li>🏔️ <strong>Mexico City altitude:</strong> 2,240 meters. Arrive two days early. Hydrate on arrival.</li>
                    <li>🚂 <strong>Stadium transport:</strong> Tren Ligero to Azteca · Brightline to Aventura + shuttle to Hard Rock · NJ Transit from Penn Station to MetLife</li>
                </ul>
            </div>

            {/* ── CTA ── */}
            <div className="bg-[#fff0d4]/10 border border-white/20 rounded-2xl p-6 text-center">
                <p
                    style={{
                        fontFamily: "var(--font-bebas)",
                        color: "#fff0d4",
                        fontSize: "1.6rem",
                        letterSpacing: "0.06em",
                        fontWeight: "normal",
                    }}
                    className="mb-3"
                >
                    Grab Your Spot Before The Whistle Blows
                </p>
                <a
                    href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="inline-block bg-[#fff0d4] hover:bg-white text-[#37507a] font-bold px-8 py-3 rounded-full transition-colors duration-200"
                >
                    Plan Your World Cup Trip →
                </a>
            </div>

            {/* Disclaimer */}
            <p className="text-white/40 text-xs text-center mt-8 leading-relaxed">
                Ticket purchasing for all matches is exclusively through FIFA.com. Hotel prices for World Cup dates are subject to significant demand increases. Book refundable rates early and confirm closer to match confirmation. Always verify transportation options directly with your host city&apos;s transit authority as schedules and shuttle services will be finalized as the tournament approaches.
            </p>
        </article>
    );
}
