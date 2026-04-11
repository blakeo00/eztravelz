export default function CannesGuide() {
    return (
        <article className="bg-[#37507a] rounded-3xl shadow-2xl overflow-hidden border-2 border-white/20 p-8 md:p-12 backdrop-blur-sm mt-8" style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.3)' }}>

            {/* Category Label */}
            <span className="text-white uppercase tracking-widest text-sm font-semibold">
                Cinematic Travel
            </span>

            {/* Title */}
            <h2
                style={{
                    fontFamily: "var(--font-cinzel), 'Cinzel', serif",
                    color: "#ffffff",
                    fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                    lineHeight: 1.2,
                }}
                className="mt-3 mb-4"
            >
                So You Want to Go to Cannes for the Film Festival. Here&apos;s What You Need to Know.
            </h2>

            <p className="text-white text-sm mb-8">
                Cannes, France · May 12 – May 23, 2026 · 79th Edition
            </p>

            {/* Intro */}
            <p className="text-lg leading-relaxed mb-6 text-white">
                Every May, a small resort city on the French Riviera becomes the most watched piece of real estate on the planet. The Cannes Film Festival is not just a film festival. It is the film festival. The one that every director dreams of, every distributor hustles toward, and every cinematic traveler puts at the top of their list at least once in their life. The 79th edition runs May 12 through May 23, 2026, and if you have ever thought about making the trip, this is the year to stop thinking and start booking.
            </p>
            {/* Inline hero image */}
            <div className="relative w-full h-64 sm:h-80 md:h-[380px] my-8 rounded-2xl overflow-hidden shadow-lg border border-white/20">
                <img
                    src="/images/Cannes 3.jpg"
                    alt="Cannes Film Festival — La Croisette"
                    className="w-full h-full object-cover"
                />
            </div>

            <p className="text-lg leading-relaxed mb-10 text-white">
                Before you go, there are some things worth knowing. The festival is larger, stranger, more electric, and more accessible than most people assume. Here is your honest guide to what it actually is, how to find a place to sleep and a proper meal, what to do between screenings, and how to make the most of the extraordinary stretch of coast surrounding it.
            </p>

            {/* Divider */}
            <hr className="border-white/20 mb-10" />

            {/* Facts Section */}
            <div
                style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
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
                        body: "The famous red carpet was not introduced until 1987. The current Palais des Festivals et des Congrès, home of those iconic steps, only opened in 1983. Before that, a much smaller building hosted the entire event.",
                    },
                    {
                        heading: "Every Screening Begins the Same Way.",
                        body: "Before every film at Cannes, the same piece of music plays. It is an excerpt from Aquarium, part of Carnival of the Animals by French composer Camille Saint-Saëns. The moment it begins, you know exactly where you are.",
                    },
                    {
                        heading: "You Do Not Need a Ticket to Experience It.",
                        body: "Most people assume Cannes is impossible to attend without industry credentials. That is not entirely true. Every evening at nightfall, classic and cult films are screened for free on Macé Beach, right next to the Palais des Festivals. The setting is the Mediterranean at dusk. The experience is unforgettable.",
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
                        body: "South Korean filmmaker Park Chan-wook, director of Oldboy and The Handmaiden, will preside over the main competition jury. Expected films in competition include new work from Steven Spielberg, Terrence Malick, Joel Coen, Pedro Almodóvar, and Alejandro González Iñárritu. The official selection will be announced in mid-April.",
                    },
                ].map((fact, i) => (
                    <div
                        key={i}
                        className="border-l-4 border-white/30 pl-5 py-1"
                    >
                        <p
                            style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
                            className="font-bold text-base mb-1"
                        >
                            {fact.heading}
                        </p>
                        <p className="text-white text-base leading-relaxed">
                            {fact.body}
                        </p>
                    </div>
                ))}
            </div>

            {/* Facts inline image */}
            <div className="relative w-full h-64 sm:h-80 md:h-[380px] mb-10 rounded-2xl overflow-hidden shadow-lg border border-white/20">
                <img
                    src="/images/Cannes Night.jpg"
                    alt="Cannes at Night — La Croisette"
                    className="w-full h-full object-cover"
                />
            </div>

            <hr className="border-white/20 mb-10" />

            {/* Where to Stay */}
            <div
                style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
                className="text-xl font-bold mb-2"
            >
                Where to Stay in Cannes
            </div>
            <p className="text-white text-base leading-relaxed mb-6">
                Finding a good room during the festival is its own sport. Prices spike dramatically and availability disappears fast. Standard rooms on La Croisette run between €250 and €400 per night during festival dates, and suites with sea views can push well past €800. Book as early as possible — most properties require a 50 percent non-refundable deposit for festival period stays.
            </p>

            <p
                style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
                className="font-bold text-base mb-4"
            >
                The Legendary Croisette Hotels
            </p>

            <div className="space-y-4 mb-8">
                {[
                    {
                        name: "Carlton Cannes, A Regent Hotel",
                        href: "https://expedia.stay22.com/eztravelz/2aN5nDBsb8",
                        body: "The hotel you recognize from every red carpet photograph. Built in 1911, it sits directly on La Croisette with its own private beach, an elegant Belle Époque façade, and the kind of lobby where film industry deals are conducted over afternoon coffee. Also famously the backdrop for a key scene in Hitchcock's To Catch a Thief, filmed here in 1955 with Cary Grant and Grace Kelly.",
                    },
                    {
                        name: "Hôtel Barrière Le Majestic Cannes",
                        href: "https://expedia.stay22.com/eztravelz/EVhIPnl0Er",
                        body: "Sits 361 feet from the Palais des Festivals and is, during the festival, one of the primary gathering spots for industry professionals. The rooftop pool, the private beach at Ciro's, and Fouquet's Cannes brasserie on the ground floor make it as much a place to be seen as a place to sleep.",
                    },
                    {
                        name: "Hôtel Martinez",
                        href: "https://expedia.stay22.com/eztravelz/c9HHMR3QLX",
                        body: "The Art Deco grand dame of the Croisette, part of the Unbound Collection by Hyatt. Its private beach terrace at La Plage du Martinez is one of the finest in Cannes, and the penthouse suites have hosted more than a few Palme d'Or winners over the decades.",
                    },
                ].map((hotel, i) => (
                    <div key={i} className="bg-[#fff0d4]/60 border border-white/20 rounded-2xl p-5">
                        <a
                            href={hotel.href}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif" }}
                            className="text-[#2c6fad] hover:text-[#1a4f7a] font-bold text-base underline block mb-2"
                        >
                            {hotel.name} →
                        </a>
                        <p className="text-white text-sm leading-relaxed">{hotel.body}</p>
                    </div>
                ))}
            </div>

            <p
                style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
                className="font-bold text-base mb-4"
            >
                The Smart Middle Ground
            </p>

            <div className="space-y-4 mb-8">
                {[
                    {
                        name: "Five Seas Hotel",
                        href: "https://expedia.stay22.com/eztravelz/60haf40d-T",
                        body: "Just steps from La Croisette and the Palais, with 45 spacious rooms and suites, a rooftop pool, and a design-forward interior that earns its boutique label without affectation. Staff here have a strong reputation for genuine helpfulness during a week when the whole city is operating at maximum pressure.",
                    },
                    {
                        name: "Hotel Splendid Cannes",
                        href: "https://expedia.stay22.com/eztravelz/NZgOIdrT8t",
                        body: "A reliable mid-Croisette address since 1871, sitting directly across from the Palais. Zero walking during peak screenings and a ringside view of the chaos and glamour that spills onto the boulevard each evening. Rooms are comfortable and well-priced relative to the location.",
                    },
                ].map((hotel, i) => (
                    <div key={i} className="bg-[#fff0d4]/60 border border-white/20 rounded-2xl p-5">
                        <a
                            href={hotel.href}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif" }}
                            className="text-[#2c6fad] hover:text-[#1a4f7a] font-bold text-base underline block mb-2"
                        >
                            {hotel.name} →
                        </a>
                        <p className="text-white text-sm leading-relaxed">{hotel.body}</p>
                    </div>
                ))}
            </div>

            <p className="text-white text-base leading-relaxed mb-10">
                <strong className="text-white">If you book late, look outward.</strong> The towns of Antibes and Juan-les-Pins offer real alternatives — a short train ride away, and neither carries the festival markup. Nice works in theory but the nightly commute back from late screenings makes it more effort than it&apos;s worth. Antibes is the better call.
            </p>

            <hr className="border-white/20 mb-10" />

            {/* Eat Like You Live There */}
            <div
                style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
                className="text-xl font-bold mb-5"
            >
                Eat Like You Live There
            </div>

            <p className="text-white text-base leading-relaxed mb-6">
                Cannes has a serious dining scene that most first-time visitors overlook in favor of hotel restaurants and obvious Croisette cafes. The best of the city is in its market, in the old quarter on the hill, and in a handful of rooms that the industry crowd finds its way to every year.
            </p>

            <div className="space-y-5 mb-10">
                {[
                    {
                        name: "Marché Forville",
                        detail: "Start here. The covered market near the Vieux Port runs Tuesday through Sunday mornings and supplies most of the better restaurants in the city. Fresh fish, local olive oil, charcuterie from across Provence, strawberries from the hill towns above Nice. Even if you are eating out every meal, walking through Forville at 9 a.m. with a coffee is one of the best introductions to what Cannes actually is.",
                    },
                    {
                        name: "Aux Bons Enfants · 10 Rue Meynadier",
                        detail: "Feeding locals since 1935, the third generation of the Giorsetti family still at the helm. Menu draws directly from Forville each morning: Provençal stews, Corsican cheeses, sole meunière, salmon tartare. Two important notes: cash only, and you cannot reserve. You walk in and ask.",
                    },
                    {
                        name: "Le Bistrot Gourmand · 10 Rue du Dr Pierre Gazagnaire",
                        detail: "Sourcing from Marché Forville every morning since 2007. The menu changes daily according to what came off the boats and the farmers' stalls. Bouillabaisse available on request and made with actual local fish. Open Tuesday–Saturday for lunch and dinner.",
                    },
                    {
                        name: "Table 22 · 8 Rue Saint-Antoine",
                        detail: "Sits in the cobblestone heart of Le Suquet. The menu is seasonal and changes regularly. The wine list is the best in Cannes by most serious accounts — deep in Burgundy and Rhône when the rest of the city is pouring commodity rosé. Worth booking well ahead.",
                    },
                    {
                        name: "Tredici · 13 Rue Louis Perrissol",
                        detail: "The neighborhood Italian that locals love and most guidebooks miss. Homemade pasta, excellent pizza, burrata worth ordering twice. The service is warm and unhurried, and the prices are honest.",
                    },
                    {
                        name: "Philcat · Promenade de la Pantiero",
                        detail: "For a quick lunch on the go. Pan bagnat — Nice-tradition sourdough roll stuffed with tuna, egg, anchovy, tomato, and salad. Seven euros, perfect, and what you want to be eating walking back from the Palais at noon.",
                    },
                ].map((place, i) => (
                    <div key={i} className="border-l-4 border-white/30 pl-5 py-1">
                        <p
                            style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
                            className="font-bold text-base mb-1"
                        >
                            {place.name}
                        </p>
                        <p className="text-white text-base leading-relaxed">{place.detail}</p>
                    </div>
                ))}
            </div>

            <hr className="border-white/20 mb-10" />

            {/* What to Do */}
            <div
                style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
                className="text-xl font-bold mb-5"
            >
                What to Do When You&apos;re Not at the Palais
            </div>

            <div className="space-y-5 mb-10">
                {[
                    {
                        name: "Le Suquet",
                        detail: "The medieval old quarter that climbs the hill above the Vieux Port. Cobblestone streets, genuinely old architecture, and a pace completely disconnected from the spectacle on the Croisette below. The Musée de la Castre at the top occupies a 12th-century castle keep with a remarkable collection of musical instruments and Provençal paintings. The view across the bay to the Lérins Islands from the tower is the best free view in Cannes.",
                    },
                    {
                        name: "La Malmaison · 47 Boulevard de la Croisette",
                        detail: "A small art gallery in what was once the grand salon of a 19th-century hotel. Rotating exhibitions lean toward 20th-century painting and photography, often with thematic connections to cinema during festival weeks. One of those places you walk past a dozen times before going in, then wish you had gone in sooner.",
                    },
                    {
                        name: "The Lérins Islands",
                        detail: "15 minutes offshore by ferry from the Vieux Port. Île Sainte-Marguerite is where the Man in the Iron Mask was allegedly imprisoned in the 17th-century Fort Royal. Île Saint-Honorat is home to a working Cistercian monastery where monks have been making wine and lavender honey since the 5th century. Both islands have walking paths through pine forests and clear water coves that feel like a different world.",
                    },
                ].map((place, i) => (
                    <div key={i} className="border-l-4 border-white/30 pl-5 py-1">
                        <p
                            style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
                            className="font-bold text-base mb-1"
                        >
                            {place.name}
                        </p>
                        <p className="text-white text-base leading-relaxed">{place.detail}</p>
                    </div>
                ))}
            </div>

            <div className="bg-[#fff0d4]/60 border border-white/20 rounded-2xl p-5 mb-10 text-center">
                <a
                    href="https://www.viator.com/Cannes-tours/Day-Trips-and-Excursions/d786-g5?pid=P00291237&mcid=42383&medium=link&campaign=Blog-Cannes"
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="inline-block bg-[#fff0d4] hover:bg-white text-[#37507a] font-bold px-8 py-3 rounded-full transition-colors duration-200"
                >
                    Book a Private Boat Tour to the Lérins Islands →
                </a>
            </div>

            <hr className="border-white/20 mb-10" />

            {/* Day Trips */}
            <div
                style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
                className="text-xl font-bold mb-5"
            >
                Day Trips Worth Taking
            </div>

            <p className="text-white text-base leading-relaxed mb-8">
                The French Riviera rewards anyone who builds in time beyond Cannes itself. The train system connects the coast efficiently, and most destinations worth seeing are within an hour of Cannes station.
            </p>

            {/* Day trips inline image */}
            <div className="relative w-full h-64 sm:h-80 md:h-[380px] mb-8 rounded-2xl overflow-hidden shadow-lg border border-white/20">
                <img
                    src="/images/Cannes 2.jpg"
                    alt="French Riviera — Day Trips from Cannes"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="space-y-8 mb-10">

                <div>
                    <p
                        style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
                        className="font-bold text-base mb-2"
                    >
                        Monaco and Èze
                    </p>
                    <p className="text-white text-base leading-relaxed mb-3">
                        The medieval hilltop village of Èze sits about 40 minutes by road from Cannes, perched at 430 meters above the Mediterranean. Pair it with Monaco — one square mile densely packed with things worth seeing: the Prince&apos;s Palace, Monaco Cathedral where Grace Kelly is buried, the Formula One Grand Prix circuit that becomes a public road every other day of the year, and the Monte Carlo Casino designed by Charles Garnier.
                    </p>
                    <a
                        href="https://www.viator.com/tours/Cannes/Monaco-and-Eze-Small-Group-Day-Trip-from-Cannes/d786-2356NCE10_CANNES?pid=P00291237&mcid=42383&medium=link&campaign=Blog-Cannes"
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="inline-block text-[#2c6fad] hover:text-[#1a4f7a] text-sm font-semibold transition-colors duration-200"
                    >
                        Book the Monaco and Èze Small Group Day Trip from Cannes →
                    </a>
                </div>

                <div>
                    <p
                        style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
                        className="font-bold text-base mb-2"
                    >
                        Antibes and Saint-Paul-de-Vence
                    </p>
                    <p className="text-white text-base leading-relaxed mb-3">
                        Antibes is 20 minutes east of Cannes by train — one of the most underrated towns on the entire Riviera. Port Vauban is the largest marina in Europe. The Musée Picasso in the Château Grimaldi houses a significant collection from when Picasso lived and worked here in 1946. From Antibes, Saint-Paul-de-Vence is 15 minutes inland — the Fondation Maeght just outside the village walls holds one of the finest collections of 20th-century modern art in Europe.
                    </p>
                    <a
                        href="https://www.viator.com/Cannes/Antibes/day-trips-d786-d21941?pid=P00291237&mcid=42383&medium=link&campaign=Blog-Cannes"
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="inline-block text-[#2c6fad] hover:text-[#1a4f7a] text-sm font-semibold transition-colors duration-200"
                    >
                        Book the Half-Day Cannes, Antibes and Saint-Paul-de-Vence Tour →
                    </a>
                </div>

                <div>
                    <p
                        style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
                        className="font-bold text-base mb-2"
                    >
                        Nice
                    </p>
                    <p className="text-white text-base leading-relaxed mb-3">
                        The capital of the Côte d&apos;Azur is 30 minutes from Cannes by train. The Vieux-Nice neighborhood is a maze of Baroque architecture and Ligurian-influenced facades, with a street market on Cours Saleya that runs every morning except Monday. The Musée Matisse and Musée National Marc Chagall are both in Nice and both excellent.
                    </p>
                    <a
                        href="https://www.viator.com/tours/Cannes/Cannes-Shore-Excursion-Eze-Monaco-and-Nice-Full-Day-Tour/d786-5419P87?pid=P00291237&mcid=42383&medium=link&campaign=Blog-Cannes"
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="inline-block text-[#2c6fad] hover:text-[#1a4f7a] text-sm font-semibold transition-colors duration-200"
                    >
                        Book the Full-Day French Riviera Tour from Cannes (Nice, Monaco, Èze) →
                    </a>
                </div>

            </div>

            <hr className="border-white/20 mb-10" />

            {/* Tours to Book */}
            <div
                style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
                className="text-xl font-bold mb-5"
            >
                Tours to Book Before You Go
            </div>

            <p className="text-white text-base leading-relaxed mb-6">
                The single best investment of planning time for first-time Cannes visitors is getting at least one guided experience booked before you arrive. During festival week, everything fills quickly, and the good guides and the good boats go first.
            </p>

            <div className="space-y-4 mb-10">
                <div className="bg-[#fff0d4]/60 border border-white/20 rounded-2xl p-5">
                    <p
                        style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#37507a" }}
                        className="font-bold text-base mb-2"
                    >
                        The French Riviera Dream Day
                    </p>
                    <p className="text-white text-sm leading-relaxed mb-3">
                        Private, full day — from Cannes along the coast to Nice, Monaco, and Villefranche. The tour for people who want to see the Riviera at its most cinematic in a single day, with a private driver and the flexibility to linger where the view earns it.
                    </p>
                    <a
                        href="https://www.viator.com/tours/Cannes/French-Riviera-PRIVATE-Dream-Day-Nice-Monaco-and-Villefranche/d786-472303P3?pid=P00291237&mcid=42383&medium=link&campaign=Blog-Cannes"
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="inline-block text-[#2c6fad] hover:text-[#1a4f7a] text-sm font-semibold transition-colors duration-200"
                    >
                        Book the French Riviera Private Dream Day →
                    </a>
                </div>

                <div className="bg-[#fff0d4]/60 border border-white/20 rounded-2xl p-5">
                    <p
                        style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#37507a" }}
                        className="font-bold text-base mb-2"
                    >
                        The Lérins Islands Private Boat Tour
                    </p>
                    <p className="text-white text-sm leading-relaxed mb-3">
                        Four hours offshore from the Cannes marina with a bilingual skipper, snorkeling gear and a stand-up paddleboard, and time to anchor in the clear-water coves of Île Sainte-Marguerite. During festival week, this is how you get a few hours of genuine quiet.
                    </p>
                    <a
                        href="https://www.viator.com/Cannes-tours/Day-Trips-and-Excursions/d786-g5?pid=P00291237&mcid=42383&medium=link&campaign=Blog-Cannes"
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="inline-block text-[#2c6fad] hover:text-[#1a4f7a] text-sm font-semibold transition-colors duration-200"
                    >
                        Book the Lérins Islands Private Boat Tour →
                    </a>
                </div>
            </div>

            <hr className="border-white/20 mb-10" />

            {/* Practical Info */}
            <div
                style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif", color: "#ffffff" }}
                className="text-xl font-bold mb-5"
            >
                Practical Things to Know Before You Go
            </div>

            <div className="bg-[#fff0d4]/60 border border-white/20 rounded-2xl p-6 mb-10">
                <ul className="space-y-3 text-white text-base">
                    <li>✈️ <strong>Nearest airport:</strong> Nice Côte d&apos;Azur (NCE), approximately 30 minutes from Cannes by train or bus. Taxis run ~€80; the train costs ~€5 and drops you at Cannes station, a 10-minute walk from La Croisette.</li>
                    <li>🏨 <strong>Book accommodation early:</strong> Hotel prices during festival week are among the highest in Europe. Most Croisette hotels require non-refundable deposits of 50–100% at reservation.</li>
                    <li>👗 <strong>Dress code:</strong> The red carpet requires formal attire. Smart casual is fine everywhere else. Flat shoes were famously banned in 2015, though the rule is inconsistently enforced.</li>
                    <li>🎟️ <strong>Free beach screenings:</strong> The Plage Macé screenings begin at nightfall each evening and are free to the public. Arrive at least an hour early. Films are often in the original language with French subtitles.</li>
                    <li>🚶 <strong>Getting around:</strong> Cannes is walkable. La Croisette, the Vieux Port, Marché Forville, and Le Suquet are all within 20 minutes on foot from the Palais.</li>
                    <li>🪧 <strong>The sidewalk sign:</strong> Post up near the Palais entrance with a handwritten sign an hour before the listed screening time. Be polite, be patient, have a genuine interest in the film if you get in.</li>
                    <li>📅 <strong>Dates:</strong> May 12 – May 23, 2026.</li>
                    <li>🌐 <strong>Official site:</strong> <a href="https://www.festival-cannes.com/en" target="_blank" rel="noopener noreferrer" className="text-[#2c6fad] hover:text-[#1a4f7a] underline">festival-cannes.com</a></li>
                </ul>
            </div>

            {/* Closing image */}
            <div className="relative w-full h-64 sm:h-80 md:h-[380px] mb-10 rounded-2xl overflow-hidden shadow-lg border border-white/20">
                <img
                    src="/images/Cannes 4.jpg"
                    alt="Cannes Film Festival — The Experience"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Closing */}
            <p className="text-lg leading-relaxed mb-8 text-white">
                Cannes is glamorous, yes. It is also genuinely accessible to anyone who plans ahead and shows up curious. The free beach screenings alone are worth the trip. Add the Croisette in full festival bloom, a morning in Marché Forville, an afternoon on the Lérins Islands, a proper bouillabaisse in Le Suquet, and a day trip along one of the most beautiful coastlines in the world, and you have something that does not need a red carpet or an industry badge to feel extraordinary.
            </p>
            <p className="text-lg leading-relaxed mb-10 text-white/80 italic">
                You are standing in the place where cinema has been celebrated longer and louder than anywhere else on earth. That is a travel experience that earns itself.
            </p>

            <p className="text-white/60 text-xs leading-relaxed">
                Policies and festival programming are subject to change. Always verify current requirements directly with <a href="https://www.festival-cannes.com/en" target="_blank" rel="noopener noreferrer" className="underline">festival-cannes.com</a> before booking.
            </p>

        </article>
    );
}
