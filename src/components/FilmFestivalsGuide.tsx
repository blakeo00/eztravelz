import Image from "next/image";

const festivals = [
    {
        name: "Cannes Film Festival",
        location: "Cannes, France",
        dates: "May 12 – May 23",
        flag: "🇫🇷",
        description: "The most prestigious film festival on earth. Every May, the French Riviera becomes the center of the cinematic universe, drawing the world's greatest filmmakers, stars, and storytellers to compete for the legendary Palme d'Or.",
        link: "https://www.festival-cannes.com/en",
    },
    {
        name: "Tribeca Film Festival",
        location: "New York, USA",
        dates: "June 10 – June 21",
        flag: "🗽",
        description: "Founded in 2002 to celebrate the resilience of lower Manhattan, Tribeca has grown into one of America's most vital independent film events. Bold voices, diverse perspectives, and the unmistakable energy of New York City.",
        link: "https://tribecafilm.com/festival",
    },
    {
        name: "Venice International Film Festival",
        location: "Venice, Italy",
        dates: "August 26 – September 5",
        flag: "🇮🇹",
        description: "The oldest film festival in the world, running since 1932. Cinema among the canals of Venice is an experience unlike any other, and the Golden Lion award remains one of the most coveted honors in all of filmmaking.",
        link: "https://www.labiennale.org/en/cinema",
    },
    {
        name: "Telluride Film Festival",
        location: "Telluride, Colorado",
        dates: "September 4 – September 7",
        flag: "🏔️",
        description: "Four focused days at high altitude in the Colorado mountains. Telluride announces no program in advance, which keeps the atmosphere electric and the attention on the films themselves. This is where serious awards contenders quietly announce their arrival.",
        link: "https://telluridefilmfestival.org",
    },
    {
        name: "Toronto International Film Festival",
        location: "Toronto, Canada",
        dates: "September 10 – September 20",
        flag: "🇨🇦",
        description: "One of the most influential festivals in the world. TIFF draws enormous crowds, major studio premieres, and independent discoveries in equal measure. The People's Choice Award here has predicted the Academy Award for Best Picture more than once.",
        link: "https://www.tiff.net",
    },
    {
        name: "New York Film Festival",
        location: "New York, USA",
        dates: "September 25 – October 11",
        flag: "🎬",
        description: "Curated with precision and an uncompromising commitment to artistic excellence, NYFF does not chase volume. It chases greatness. Only a small selection of films earn a slot each year, making every screening a genuine event.",
        link: "https://www.filmlinc.org/nyff2026",
    },
];

export default function FilmFestivalsGuide() {
    return (
        <article className="bg-gray-900/90 rounded-3xl shadow-2xl overflow-hidden border border-yellow-600/50 p-8 md:p-12 backdrop-blur-sm mt-8" style={{ boxShadow: '0 0 30px rgba(255, 215, 0, 0.15)' }}>

            {/* Category Label */}
            <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">
                Cinematic Travel
            </span>

            {/* Title */}
            <h2
                style={{
                    fontFamily: "var(--font-cinzel), 'Cinzel', serif",
                    color: "#FFD700",
                    fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                    lineHeight: 1.2,
                }}
                className="mt-3 mb-4"
            >
                Six Festivals Worth Flying For in 2026
            </h2>

            <p className="text-yellow-300/70 text-sm mb-8">
                May – October 2026 · France, Italy, USA, Canada · The Season Cinema Lives For
            </p>

            {/* Intro */}
            <p className="text-lg leading-relaxed mb-10 text-gray-300">
                Some people plan their travel around landmarks and beaches. Others follow the
                films. From the sun-soaked steps of the Palais in Cannes to the intimate
                mountain screens of Telluride, the second half of 2026 offers a remarkable
                run of festivals for anyone who believes that cinema is reason enough to
                buy a plane ticket. Here are six worth planning your year around.
            </p>

            {/* Festival Cards */}
            <div className="space-y-5 mb-10">
                {festivals.map((fest, i) => (
                    <div
                        key={i}
                        className="bg-gray-800 border border-gray-700 rounded-2xl p-5 hover:border-yellow-600/50 transition-colors duration-200"
                    >
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">{fest.flag}</span>
                                <p
                                    style={{
                                        fontFamily: "var(--font-cinzel), 'Cinzel', serif",
                                        color: "#FFD700",
                                        fontSize: "1.05rem",
                                        fontWeight: "700",
                                        letterSpacing: "0.03em",
                                    }}
                                >
                                    {fest.name}
                                </p>
                            </div>
                            <span className="text-xs font-semibold text-yellow-500 bg-yellow-950/50 border border-yellow-600/30 px-3 py-1 rounded-full whitespace-nowrap">
                                {fest.dates}
                            </span>
                        </div>

                        <p className="text-gray-400 text-xs font-medium mb-3 uppercase tracking-wide ml-8">
                            {fest.location}
                        </p>

                        <p className="text-gray-300 text-base leading-relaxed mb-3">
                            {fest.description}
                        </p>

                        <a
                            href={fest.link}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            className="inline-block text-yellow-500 hover:text-yellow-400 text-sm font-semibold transition-colors duration-200"
                        >
                            Visit Official Site →
                        </a>
                    </div>
                ))}
            </div>

            {/* Closing */}
            <p className="text-lg leading-relaxed mb-10 text-gray-300">
                Each of these festivals offers something no streaming platform can replicate.
                A room full of strangers watching the same story at the same moment, in a city
                that has given itself over entirely to the art of film. That experience is
                worth the trip every single time.
            </p>

            {/* CTA & Viator Linking */}
            <div className="bg-yellow-950/50 border border-yellow-600/50 rounded-2xl p-6 text-center">
                <div className="relative w-full h-64 sm:h-80 md:h-[350px] mb-6 rounded-xl overflow-hidden shadow-lg border border-yellow-600/30">
                    <Image
                        src="/images/Cannes.png"
                        alt="Canned Film Festival Riviera View"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                    />
                </div>

                <div className="mt-8 pt-6 border-t border-yellow-600/30">
                    <p className="text-gray-300 mb-4 font-medium">Visiting Cannes? Make it a Dream Day on the French Riviera:</p>
                    <a
                        href="https://www.viator.com/tours/Cannes/French-Riviera-PRIVATE-Dream-Day-Nice-Monaco-and-Villefranche/d786-472303P3?pid=P00291237&mcid=42383&medium=link&campaign=Blog-Cannes"
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="inline-flex items-center justify-center bg-[#00A698] hover:bg-[#008f82] text-white font-bold px-8 py-3 rounded-full transition-colors duration-200"
                    >
                        Book Cannes Riviera Tour →
                    </a>
                </div>
            </div>

        </article>
    );
}
