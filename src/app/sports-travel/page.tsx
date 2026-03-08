import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TicketWidget from "@/components/TicketWidget";
import SidebarWidgets from "@/components/SidebarWidgets";
import { getCategoryWidgets } from "@/data/widgets";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sports Travel & Events — EZtravelZ",
    description: "Your ultimate guide to combining your passion for sports with unforgettable travel experiences. Need tickets? We've got you covered.",
};

export default function SportsTravelPage() {
    return (
        <div className="min-h-screen font-sans flex flex-col relative">
            {/* Background Image with 50% transparency */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-gray-950 opacity-50"
                style={{ backgroundImage: "url('/images/Pitch.png')" }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    {/* Hero section */}
                    <section className="bg-brand-600 text-white py-20 px-4 text-center">
                        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            Sports Travel & Events
                        </h1>
                        <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto">
                            Follow your favorite teams across the globe and turn every game day into an unforgettable adventure.
                        </p>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                {/* World Cup 2026 Article */}
                                <article className="bg-gray-900/90 rounded-3xl shadow-2xl overflow-hidden border border-green-700/50 p-8 md:p-12 backdrop-blur-sm" style={{ boxShadow: '0 0 30px rgba(22, 101, 52, 0.15)' }}>

                                    <span className="text-green-400 uppercase tracking-widest text-sm font-semibold">
                                        Sports Travel
                                    </span>

                                    <h2
                                        style={{
                                            fontFamily: "var(--font-bebas)",
                                            color: "#22c55e",
                                            fontSize: "clamp(2.2rem, 6vw, 4rem)",
                                            fontWeight: "normal",
                                            letterSpacing: "0.06em",
                                            lineHeight: 1.15,
                                        }}
                                        className="mt-3 mb-4"
                                    >
                                        The World Is Coming To Your Backyard. A Guide To The 2026 FIFA World Cup
                                    </h2>

                                    <p className="text-green-300/70 text-sm mb-8">
                                        June 11 – July 19, 2026 · USA, Canada &amp; Mexico · 48 Teams · 104 Matches
                                    </p>

                                    <img
                                        src="/images/FIFA.png"
                                        alt="2026 FIFA World Cup — USA, Canada & Mexico"
                                        className="w-full rounded-2xl mb-8 object-cover"
                                    />

                                    <p className="text-lg leading-relaxed mb-6 text-gray-300">
                                        Once every four years the entire planet stops and watches the same thing.
                                        No other event comes close, not the Super Bowl, not the Olympics, not
                                        anything. And this summer, for the first time in history, three nations
                                        are sharing that honour. The 2026 FIFA World Cup kicks off on June 11th
                                        at the legendary Estadio Azteca in Mexico City and doesn&apos;t stop until
                                        July 19th, when the final whistle blows at MetLife Stadium in New Jersey
                                        with the whole world holding its breath. Sixteen host cities. Forty-eight
                                        nations. One hundred and four matches. This isn&apos;t just a tournament.
                                        It&apos;s the largest World Cup ever staged, and it&apos;s happening right here in
                                        North America.
                                    </p>

                                    <p className="text-lg leading-relaxed mb-6 text-gray-300">
                                        For the traveling fan, the logistics are unlike anything that came before.
                                        The United States alone hosts eleven cities: Los Angeles, Miami, Atlanta,
                                        Dallas, Houston, Seattle, Philadelphia, Boston, Kansas City, the San
                                        Francisco Bay Area, and the New York metropolitan area. Canada brings
                                        Toronto and Vancouver to the table. Mexico adds Guadalajara, Monterrey,
                                        and Mexico City. FIFA has divided the continent into three geographic
                                        regions, Western, Central, and Eastern, so fans can actually follow
                                        their team across multiple matches without flying halfway around the world
                                        between games. Road-tripping the Western bracket from LA up to Seattle
                                        for back-to-back group stage matches? That is a summer story worth telling
                                        for the rest of your life.
                                    </p>

                                    <p className="text-lg leading-relaxed mb-8 text-gray-300">
                                        Tickets are still moving through FIFA&apos;s official portal, with a last-minute
                                        batch expected in early April, so if you haven&apos;t locked in yet, the window
                                        is narrow but not closed. Beyond the matches themselves, each host city is
                                        rolling out fan zones, cultural activations, and watch parties that turn the
                                        entire surrounding area into a month-long celebration. You don&apos;t even need
                                        a ticket to feel it. Whether you&apos;re pitchside at the Azteca for the opener,
                                        watching the US squad at SoFi Stadium in Inglewood on June 12th, or simply
                                        finding a barstool with a good screen somewhere in downtown Miami while
                                        Brazil and Argentina tear the bracket apart. This summer belongs to the
                                        beautiful game. Don&apos;t sleep on it.
                                    </p>

                                    {/* Quick Facts Box */}
                                    <div className="bg-green-950/50 border border-green-700/50 rounded-2xl p-6 mb-8">
                                        <p
                                            style={{
                                                fontFamily: "var(--font-bebas)",
                                                color: "#22c55e",
                                                fontSize: "1.6rem",
                                                letterSpacing: "0.06em",
                                                fontWeight: "normal",
                                            }}
                                            className="mb-4"
                                        >
                                            Need To Know
                                        </p>
                                        <ul className="space-y-2 text-gray-300 text-base">
                                            <li>⚽ <strong>Opening Match:</strong> June 11, Mexico vs. South Africa, Estadio Azteca, Mexico City</li>
                                            <li>🏆 <strong>Final:</strong> July 19, MetLife Stadium, East Rutherford, New Jersey</li>
                                            <li>🇺🇸 <strong>US Host Cities:</strong> LA · Miami · Dallas · Houston · Atlanta · Seattle · Philly · Boston · KC · SF Bay Area · NY/NJ</li>
                                            <li>🇨🇦 <strong>Canada:</strong> Toronto · Vancouver</li>
                                            <li>🇲🇽 <strong>Mexico:</strong> Mexico City · Guadalajara · Monterrey</li>
                                            <li>🎟️ <strong>Tickets:</strong> Last-minute batch expected early April via FIFA.com</li>
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <div className="bg-green-950/50 border border-green-700/50 rounded-2xl p-6 text-center">
                                        <p
                                            style={{
                                                fontFamily: "var(--font-bebas)",
                                                color: "#22c55e",
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
                                            className="inline-block bg-green-700 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full transition-colors duration-200"
                                        >
                                            Plan Your World Cup Trip →
                                        </a>
                                    </div>

                                </article>

                                {/* Ticket Widget */}
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-2 md:p-4 mt-8">
                                    <h3 className="text-xl font-bold text-center text-gray-900 mb-3 border-b pb-3">Search For Tickets</h3>
                                    <TicketWidget
                                        id="ticket-network-widget-search"
                                        src="https://tpwgts.com/content?promo_id=8505&campaign_id=72&powered_by=true&footer_color=%23ffffff&search_text=Search%20by%20artist%2C%20team%2C%20event%2C%20etc...&icon_color=%230077ff&title_color=%23ffffff&title=Need%20tickets%3F&bg_color=%23112266&shmarker=417314.417314&trs=215716"
                                    />
                                </div>
                            </div>

                            {/* Right Sidebar Area */}
                            <div className="lg:w-1/3">
                                <SidebarWidgets widgets={getCategoryWidgets('sports-travel')} />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
