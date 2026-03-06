export default function CannesGuide() {
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
                So You Want to Go to Cannes for the Film Festival. Here's What You Need to Know.
            </h2>

            <p className="text-yellow-300/70 text-sm mb-8">
                Cannes, France · May 12 – May 23, 2026 · 79th Edition
            </p>

            {/* Intro */}
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Every May, a small resort city on the French Riviera becomes the most
                watched piece of real estate on the planet. The Cannes Film Festival is
                not just a film festival. It is the film festival. The one that every
                director dreams of, every distributor hustles toward, and every cinematic
                traveler puts at the top of their list at least once in their life. The
                79th edition runs May 12 through May 23, 2026, and if you have ever
                thought about making the trip, this is the year to stop thinking and start
                booking.
            </p>

            <p className="text-lg leading-relaxed mb-10 text-gray-300">
                Before you go, there are some things worth knowing. The festival is larger,
                stranger, more electric, and more accessible than most people assume. Here
                is your honest guide to what it actually is, and how to make the most of it.
            </p>

            {/* Facts Section */}
            <div
                style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#FFD700" }}
                className="text-xl font-bold mb-5"
            >
                The Facts Worth Knowing
            </div>

            <div className="space-y-5 mb-10">

                {[
                    {
                        heading: "It Was Born Out of Protest.",
                        body: "Cannes exists because fascism ruined Venice. In 1938, Mussolini and Hitler strong-armed the Venice Film Festival jury into awarding their own films the top prizes. French, British, and American jurors walked out in protest, and France decided to build its own festival from scratch, one free of political interference. The first edition was scheduled for September 1939. Germany invaded Poland on opening day, and the whole thing was cancelled. The festival finally launched properly in 1946.",
                    },
                    {
                        heading: "The Palme d'Or Is Made of 18-Carat Gold.",
                        body: "The highest prize in world cinema is a golden palm branch worth approximately 20,000 euros. Two reserve awards are made each year in case of a tie or an accident. The award was introduced in 1955, replacing the Grand Prix as the top honor.",
                    },
                    {
                        heading: "The Town Population Triples.",
                        body: "Cannes normally has around 73,700 residents. During the festival, that number swells past 200,000. More than 35,000 film professionals and festival-goers climb those famous 24 steps each year, joined by around 5,000 journalists. The festival is the most publicized cultural event in the world after the Olympic Games.",
                    },
                    {
                        heading: "The Red Carpet Tradition Is Newer Than You Think.",
                        body: "The famous red carpet was not introduced until 1987. The current Palais des Festivals et des Congres, home of those iconic steps, only opened in 1983. Before that, a much smaller building hosted the entire event.",
                    },
                    {
                        heading: "Every Screening Begins the Same Way.",
                        body: "Before every film at Cannes, the same piece of music plays. It is an excerpt from Aquarium, part of Carnival of the Animals by French composer Camille Saint-Saens. The moment it begins, you know exactly where you are.",
                    },
                    {
                        heading: "You Do Not Need a Ticket to Experience It.",
                        body: "Most people assume Cannes is impossible to attend without industry credentials. That is not entirely true. Every evening at nightfall, classic and cult films are screened for free on Mace beach, right next to the Palais des Festivals. The setting is the Mediterranean at dusk. The experience is unforgettable.",
                    },
                    {
                        heading: "The Sidewalk Trick Actually Works.",
                        body: "Every day in front of the Palais, people hold up handwritten signs asking for a spare invitation to that day's screening. Film professionals receive a quota of tickets for each film. If they do not use them, their allocation for future screenings gets reduced. So they give them away. Patience, a good sign, and the right moment at the right entrance can get you inside.",
                    },
                    {
                        heading: "La Croisette Is the Real Stage.",
                        body: "The famous boulevard running along the seafront is where the festival truly lives between screenings. Luxury hotels, outdoor cafes, pop-up pavilions from every major film country, and the constant electric possibility of walking past someone who made one of your favorite films. The Croisette during festival week is unlike any street on earth.",
                    },
                    {
                        heading: "The 2026 Jury President Is a Cinema Legend.",
                        body: "South Korean filmmaker Park Chan-wook, director of Oldboy and The Handmaiden, will preside over the main competition jury. Expected films in competition include new work from Steven Spielberg, Terrence Malick, Joel Coen, Pedro Almodovar, and Alejandro Gonzalez Inarritu. The official selection will be announced in mid-April.",
                    },
                ].map((fact, i) => (
                    <div
                        key={i}
                        className="border-l-4 border-yellow-600/50 pl-5 py-1"
                    >
                        <p
                            style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#FFD700" }}
                            className="font-bold text-base mb-1"
                        >
                            {fact.heading}
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed">
                            {fact.body}
                        </p>
                    </div>
                ))}
            </div>

            {/* Practical Info */}
            <div
                style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#FFD700" }}
                className="text-xl font-bold mb-5"
            >
                Practical Things to Know Before You Go
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 mb-10">
                <ul className="space-y-3 text-gray-300 text-base">
                    <li>✈️ <strong>Nearest airport:</strong> Nice Cote d'Azur (NCE), approximately 30 minutes from Cannes by train or bus.</li>
                    <li>🏨 <strong>Book accommodation early:</strong> Hotel prices during festival week are among the highest in Europe. The towns of Antibes and Nice offer more affordable nearby options.</li>
                    <li>👗 <strong>Dress code:</strong> The red carpet requires formal attire. Flat shoes were famously banned in 2015, though the rule is inconsistently enforced. Smart casual is fine everywhere else.</li>
                    <li>🎟️ <strong>Public screenings:</strong> Free beach screenings begin at nightfall on Mace beach. Arrive early for a good spot.</li>
                    <li>📅 <strong>Dates:</strong> May 12 – May 23, 2026.</li>
                    <li>🌐 <strong>Official site:</strong> <a href="https://www.festival-cannes.com/en" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">festival-cannes.com</a></li>
                </ul>
            </div>

            {/* Closing */}
            <p className="text-lg leading-relaxed mb-10 text-gray-300">
                Cannes is glamorous, yes. It is also genuinely accessible to anyone who
                plans ahead and shows up curious. The free beach screenings alone are
                worth the trip. Add the Croisette in full festival bloom, the possibility
                of a spare ticket appearing in your hand at exactly the right moment, and
                the knowledge that you are standing in the place where cinema has been
                celebrated longer and louder than anywhere else on earth. That is a
                travel experience that does not need a red carpet to feel extraordinary.
            </p>

            {/* CTA */}
            <div className="bg-yellow-950/50 border border-yellow-600/50 rounded-2xl p-6 text-center">
                <p
                    style={{
                        fontFamily: "var(--font-cinzel), 'Cinzel', serif",
                        color: "#FFD700",
                        fontSize: "1.4rem",
                        letterSpacing: "0.04em",
                    }}
                    className="mb-3 font-bold"
                >
                    Plan Your Cannes Experience
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                    <a
                        href="https://www.festival-cannes.com/en"
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="inline-block bg-yellow-600 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full transition-colors duration-200"
                    >
                        Visit the Official Cannes Website →
                    </a>
                </div>
            </div>

        </article>
    );
}
