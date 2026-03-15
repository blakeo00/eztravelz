import { ReactNode } from "react";
import Image from 'next/image';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    categorySlug: string;
    date: string;
    image: string;
    alt: string;
    content: () => ReactNode;
}

/**
 * Centralized blog post registry.
 * Ordered newest-first. Both the homepage "From the Blog" cards
 * and the /blog listing page pull from this array.
 */
export const posts: BlogPost[] = [
    {
        slug: "smoke-patience-butcher-paper-texas-bbq-road-trip",
        title: "Smoke, Patience, and Butcher Paper: A Texas BBQ Road Trip Worth Every Mile",
        excerpt: "Three days. Five stops. A few hundred miles of Hill Country. From Franklin\u2019s legendary brisket to the century-old pits at Smitty\u2019s, this is the road trip that earns every bite.",
        category: "Culinary Quests",
        categorySlug: "culinary-quests",
        date: "2026-03-01",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070&auto=format&fit=crop",
        alt: "Smoked brisket sliced on butcher paper with a dark peppery bark",
        content: texasBbqContent,
    },
    {
        slug: "holy-water-and-grape-bricks-prohibition-wine-trail",
        title: "Holy Water and Grape Bricks \u2014 How God (and a Few Creative Lies) Saved American Wine",
        excerpt: "On January 17, 1920, the U.S. outlawed wine. Some wineries survived on holy water, grape bricks with winking warning labels, and a quiet rail line to Al Capone\u2019s speakeasies. Here\u2019s where to visit them today.",
        category: "Wine & Brewery Destinations",
        categorySlug: "wine-destinations",
        date: "2026-03-01",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop",
        alt: "Rows of aged wine barrels in a dimly lit stone cellar",
        content: prohibitionWineContent,
    },
    {
        slug: "titletown-usa-lambeau-field-nfl-pilgrimage",
        title: "Titletown, USA: Why a Trip to Lambeau Field Is the NFL\u2019s Most Sacred Pilgrimage",
        excerpt: "Green Bay has 106,000 people, 13 NFL championships, and a stadium that hasn\u2019t had an empty seat since 1960. Some pilgrimages are worth the journey. This is one of them.",
        category: "Sports Travel",
        categorySlug: "sports-travel",
        date: "2026-03-01",
        image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=2070&auto=format&fit=crop",
        alt: "A packed football stadium under dramatic lights on a crisp game night",
        content: lambeauFieldContent,
    },
    {
        slug: "reel-roads-room-217-the-shining",
        title: "Reel Roads: Room 217 and the Hotel That Dreamed Up The Shining",
        excerpt: "A cinematic pilgrimage to the Stanley Hotel in Estes Park \u2014 the building where Stephen King\u2019s nightmare became America\u2019s most famous horror novel.",
        category: "Cinematic Travel",
        categorySlug: "cinematic-travel",
        date: "2026-03-01",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
        alt: "A dramatic film reel and movie theater corridor with moody cinematic lighting",
        content: reelRoadsContent,
    },
    {
        slug: "stanley-hotel-where-the-nightmare-became-the-novel",
        title: "Ghost Trails / Reel Roads: The Stanley Hotel \u2014 Where the Nightmare Became the Novel",
        excerpt: "The white Georgian Revival hotel at 7,800 feet that cured its builder\u2019s tuberculosis, inspired Stephen King\u2019s most famous nightmare, and has been collecting ghosts ever since.",
        category: "Haunted Tours",
        categorySlug: "haunted-tours",
        date: "2026-03-01",
        image: "/images/Spooky corodior.png",
        alt: "A spooky corridor in an old historic hotel.",
        content: stanleyHotelContent,
    },
    {
        slug: "paws-and-away-pet-traveler-guide",
        title: "Paws & Away: What Every Pet Traveler Needs to Know Before They Book That Ticket",
        excerpt: "From airline rules and service animal regulations to road trip safety and Amtrak policies \u2014 the complete, no-fluff guide to traveling with your pet in 2026.",
        category: "Pet Travel",
        categorySlug: "pet-travel",
        date: "2026-03-01",
        image: "/images/Dog on vacation.png",
        alt: "A happy dog on vacation looking out a car window",
        content: pawsAndAwayContent,
    },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
    return Array.from(new Set(posts.map((p) => p.category)));
}



function pawsAndAwayContent(): ReactNode {
    return (
        <div className="prose max-w-none prose-headings:text-slate-900 prose-p:text-slate-800 prose-a:text-sky-700 hover:prose-a:text-sky-600 prose-strong:text-slate-900 prose-p:leading-relaxed">
            <p>
                There{"\u2019"}s a moment every devoted pet parent knows {"\u2014"} the one where
                you{"\u2019"}re packing your bag and your dog is watching you with{" "}
                <em>those eyes</em>, the one that says <em>please don{"\u2019"}t leave me</em>.
                For a lot of us, the answer stopped being {"\u201C"}I have to{"\u201D"} a long time
                ago. We just take them with us.
            </p>
            <p>
                But traveling with a pet isn{"\u2019"}t simply a matter of love and good
                intentions. It{"\u2019"}s logistics, paperwork, timing, and a genuine
                understanding of the rules {"\u2014"} rules that, if you don{"\u2019"}t know them
                before you get to the airport, can unravel your entire trip in ways you
                won{"\u2019"}t see coming.
            </p>
            <p>
                Case in point: in early February 2026, a woman named Germirah Bryson arrived
                at the JetBlue counter inside Harry Reid International Airport in Las Vegas.
                She had her dog with her. What she didn{"\u2019"}t have was her dog registered as
                a passenger {"\u2014"} a step that has to be completed online, in advance, not at
                the counter. When a JetBlue agent explained this to her, she reportedly
                responded by tying the dog{"\u2019"}s leash to a luggage measurement device and
                said, {"\u201C"}Call animal control. I{"\u2019"}m not going to miss my flight.{"\u201D"}{" "}
                Walking toward security, she was arrested. The dog {"\u2014"} who quickly came to
                be named {"\u201C"}JetBlue{"\u201D"} by the ever-present internet {"\u2014"} was later
                adopted by one of the officers who responded to the scene.
            </p>
            <p>
                It{"\u2019"}s a story that{"\u2019"}s easy to react to with disbelief. But tucked
                inside the chaos is a warning that applies to all of us: not knowing the rules
                is not the same as being exempt from them. The good news is they{"\u2019"}re not
                complicated once you know where to look.
            </p>

            <h2>Flying with Your Pet: The Real Rules</h2>
            <p>
                Airlines separate pets into a few distinct categories, and the category your
                animal falls into determines everything {"\u2014"} which forms you fill out, how
                much you pay, and where your pet actually sits on the plane.
            </p>
            <p>
                <strong>Pets flying in the cabin</strong> are generally small animals, usually
                dogs or cats that fit in an approved soft-sided carrier under the seat in front
                of you. Most airlines cap this at around 20 pounds including the carrier,
                though policies vary. You{"\u2019"}ll pay a one-way fee that typically runs
                between $95 and $150 depending on the airline. You have to reserve the spot in
                advance, because there{"\u2019"}s a limit to how many pets are allowed in the
                cabin per flight {"\u2014"} usually two to four. This is the detail most people
                miss. You can{"\u2019"}t just show up with a carrier and assume that there is
                room available. It{"\u2019"}s best to call or book online before you even think
                about packing. Every major airline has a dedicated pet travel portal on their
                website {"\u2014"} here are direct links to the biggest carriers: {" "}
                <a href="https://www.delta.com/us/en/pet-travel/overview" target="_blank" rel="noopener noreferrer">Delta</a>,{" "}
                <a href="https://www.united.com/en/us/fly/travel/traveling-with-pets.html" target="_blank" rel="noopener noreferrer">United</a>,{" "}
                <a href="https://www.aa.com/i18n/travel-info/special-assistance/pets.jsp" target="_blank" rel="noopener noreferrer">American</a>,{" "}
                <a href="https://www.southwest.com/help/baggage/pet-policy" target="_blank" rel="noopener noreferrer">Southwest</a>,{" "}
                <a href="https://www.jetblue.com/travel-with-us/our-policies/traveling-with-pets" target="_blank" rel="noopener noreferrer">JetBlue</a>, and{" "}
                <a href="https://www.alaskaair.com/content/travel-info/policies/pets-traveling-with-pets" target="_blank" rel="noopener noreferrer">Alaska Airlines</a>.
                Use them early!
            </p>

            <div className="bg-white/50 p-6 rounded-xl my-8 border-2 border-black shadow-sm">
                <h3 className="text-slate-900 font-bold mb-2 mt-0">Top Pick for Cabin Travel</h3>
                <p className="text-slate-800 mb-4">
                    If you are navigating a busy TSA checkpoint with an anxious pet, a standard carrier won{"'"}t cut it. We highly recommend the <a href="https://amzn.to/4l6fBMC" target="_blank" rel="sponsored noopener noreferrer" className="text-sky-700 hover:text-sky-600 underline font-semibold">Sherpa Original Deluxe Travel Pet Carrier</a>. It{"'"}s airline approved and part of Sherpa{"'"}s Guaranteed On Board program, so you can fly with confidence knowing your carrier meets requirements. <span className="font-semibold text-green-600">$46.90</span> <span className="text-slate-500 line-through text-sm">$73.50</span>
                </p>
                <img
                    src="https://m.media-amazon.com/images/I/81gqQnt7waL._AC_SL1500_.jpg"
                    alt="Sherpa Original Deluxe Travel Pet Carrier, Airline Approved"
                    className="w-full h-auto rounded-lg shadow-md border-2 border-black"
                />
            </div>

            <p>
                <strong>Pets flying as cargo</strong> travel in the pressurized,
                temperature-controlled belly of the plane in an airline-approved hard crate.
                This is the option for larger dogs who can{"\u2019"}t fly in the cabin. It costs
                more, requires more documentation, and is not offered by every airline on every
                route {"\u2014"} especially during extreme heat or cold, which matters a great
                deal if you{"\u2019"}re flying into or out of a desert city in summer or an
                extremely cold area. Some airlines have suspended live animal cargo programs
                entirely, so confirming this directly with your carrier before you book is
                non-negotiable.
            </p>
            <p>
                One non-negotiable across the board: your pet needs to be current on
                vaccinations and you{"\u2019"}ll need documentation. Most airlines ask for a
                health certificate from your vet issued within ten days of travel. Some
                destinations {"\u2014"} especially international ones {"\u2014"} require additional
                testing, microchipping, and waiting periods that can span months. If
                you{"\u2019"}re planning a trip abroad with your pet, start researching at least
                six months out. Hawaii, the UK, Australia, and New Zealand have some of the
                strictest import rules in the world.
            </p>

            <h2>Service Animals, Emotional Support Animals, and the Gap Between Them</h2>
            <p>
                Service animals operate under a different framework entirely, and if you travel
                with one, or think you might, the rules have shifted significantly enough in
                the last few years that whatever you heard before 2021 may no longer apply.
            </p>
            <p>
                Under the U.S. Department of Transportation{"\u2019"}s revised rule, which took
                effect January 11, 2021, the only animals airlines are federally required to
                accommodate as service animals are <strong>dogs</strong> {"\u2014"} specifically,
                dogs that are individually trained to perform a task or do work directly
                related to a person{"\u2019"}s disability. That could be a guide dog, a seizure
                alert dog, a dog trained to interrupt self-harming behavior, or a dog that
                detects a diabetic emergency before the person can. What matters is the
                training {"\u2014"} specific, documented, task-based training. Not the vest. Not
                the registration card you bought online for thirty dollars. The training.
            </p>
            <p>
                Psychiatric service dogs {"\u2014"} trained to assist someone with a diagnosed
                mental health condition {"\u2014"} are treated the same as traditional service
                dogs under this rule. That{"\u2019"}s an important protection. But here is where
                a lot of people get lost: <strong>emotional support animals are not the same
                    thing as service animals</strong>, and they no longer receive the same federal
                protections.
            </p>
            <p>
                An emotional support animal, or ESA, is an animal that provides comfort,
                companionship, or calm to someone dealing with emotional or psychological
                challenges. The bond is real. The relief is real. But under the current DOT
                rule, providing comfort does not legally qualify as a {"\u201C"}task.{"\u201D"} And
                that distinction changes everything.
            </p>
            <p>
                Before 2021, passengers could fly with an ESA, often for free, with a letter
                from a licensed mental health professional. Airlines had to accept them. For a
                while, that letter was easy enough to obtain online, and the system became, to
                put it kindly, strained. There were peacocks at airport gates. A support
                squirrel. A full-size turkey. A pig on a cross-country flight. Airlines began
                reporting a 40 percent increase in cabin animals, along with a rising number of
                biting incidents and disruptions. The DOT received more than 15,000 public
                comments before issuing its revised rule; more than 3,000 of them specifically
                supported removing the ESA designation from service animal protections.
            </p>
            <p>
                Today, every major U.S. carrier {"\u2014"} Delta, United, American, Southwest,
                JetBlue, Alaska {"\u2014"} treats ESAs as pets. That means standard pet fees
                apply, standard carrier requirements apply, and the same advance booking rules
                apply. If you were counting on your ESA letter to get your dog into the cabin
                for free, that letter will not help you at a JetBlue counter anymore.
                You{"\u2019"}ll need to have registered your pet through the airline{"\u2019"}s
                standard pet program, paid the fee, and confirmed the reservation before you
                ever left the house.
            </p>
            <p>
                There is one narrow path that still offers broader accommodation: if your
                animal is a <strong>trained psychiatric service dog</strong> {"\u2014"} one that
                can perform specific, demonstrable tasks. You can file the DOT{"\u2019"}s required
                forms with your airline, typically 48 hours before departure. There are two
                federal forms you{"\u2019"}ll need to know about:
            </p>
            <p>
                <strong><a href="https://www.transportation.gov/individuals/aviation-consumer-protection/service-animals/Air_Transportation_Form" target="_blank" rel="noopener noreferrer">The DOT Service Animal Air Transportation Form</a></strong> (updated
                September 2024) is the primary document needed. It attests to your
                animal{"\u2019"}s training, health, vaccination status, and behavioral history.
                Every airline that requires documentation uses this form, though some airlines
                like Delta and American ask you to submit it through their own online portals.
                Check your specific carrier{"\u2019"}s service animal page for their submission
                process.
            </p>
            <p>
                If your flight is eight hours or longer, you{"\u2019"}ll also need the{" "}
                <strong><a href="https://www.transportation.gov/individuals/aviation-consumer-protection/service-animals/Relief_Form" target="_blank" rel="noopener noreferrer">DOT Service Animal Relief Attestation Form</a></strong>, which confirms
                the animal will not relieve itself in the cabin or can do so in a sanitary manner
                during a long flight, or that it can comfortably wait until landing. Both forms
                are fillable PDFs, and both should be submitted to the airline, not to the DOT
                itself.
            </p>
            <p>
                None of this means emotional support animals don{"\u2019"}t matter. For many
                people, they are profoundly meaningful companions. It just means the logistics
                have changed, and knowing that before you reach the check-in counter is the
                difference between a smooth departure and a very public, very stressful scene.
            </p>

            <h2>What Can Never Board a Plane</h2>
            <p>
                Even if you do everything right {"\u2014"} register in advance, get the health
                certificate, and book the pet spot {"\u2014"} there are animals that simply cannot
                fly commercially, regardless of how beloved they are. Some of these rules come
                from the DOT. Some are individual airline policies. Either way, they are firm.
            </p>
            <p>
                <strong>Snakes and reptiles</strong> occupy complicated territory. Some
                airlines permit small, non-venomous reptiles in the cabin. Venomous snakes are
                universally prohibited, large constrictors are universally prohibited, and most
                major carriers have banned all snakes from the passenger cabin entirely. Delta
                and United prohibit them with no exceptions. If you keep a reptile as a pet and
                need to transport them, cargo is usually the only commercial option, and
                policies vary enough that calling the airline directly is the only way to get a
                reliable answer.
            </p>
            <p>
                <strong>Rodents</strong> {"\u2014"} hamsters, rats, mice, and squirrels {"\u2014"}{" "}
                are banned from the cabin on most major U.S. carriers. A handful of airlines
                like Frontier allow small domestic rodents on certain domestic routes, but
                they{"\u2019"}re outliers. The reasoning comes down to containment risk. A hamster
                in a carrier might seem harmless, but an escaped rodent in a pressurized cabin
                at 35,000 feet is a very different situation.
            </p>
            <p>
                <strong>Ferrets</strong> are banned on all U.S. commercial flights, full stop.
                The DOT specifically lists them alongside snakes, reptiles, and spiders as
                animals that airlines are permitted to exclude entirely, and every major
                domestic carrier has done exactly that.
            </p>
            <p>
                <strong>Spiders and insects</strong> {"\u2014"} however much you love your
                tarantula {"\u2014"} are banned across the board. No airline, no route, no
                exception.
            </p>
            <p>
                <strong>Birds</strong> require a more careful explanation, because the rules
                are inconsistent. Small household birds {"\u2014"} a canary, a parakeet, a small
                dove {"\u2014"} are permitted in the cabin on some airlines for domestic flights.
                But large birds, birds of prey, parrots, macaws, and cockatoos are prohibited
                by most carriers. If you have a parrot who is your constant companion,
                you{"\u2019"}ll want to research specialist pet transport services rather than
                assuming any commercial carrier will accommodate them.
            </p>
            <p>
                <strong>Goats, pigs, and farm animals.</strong> Yes, all of this has been
                attempted {"\u2014"} and are prohibited everywhere. The fact that this had to be
                written into official airline policy is, in its own way, a remarkable piece of
                American travel history.
            </p>
            <p>
                <strong>Exotic and wild animals</strong> are where things get both complicated
                and genuinely important. If your pet is classified as an exotic species {"\u2014"}{" "}
                certain primates, hedgehogs, sugar gliders, kinkajous, large lizards {"\u2014"}{" "}
                there may be layers of regulation beyond any airline{"\u2019"}s policy: USDA
                permits, CITES documentation for internationally protected species, or outright
                import and export bans depending on your destination. If you{"\u2019"}ve adopted
                an unconventional pet and want to travel with them, the first call is not to
                the airline but to a licensed wildlife veterinarian or an international pet
                transport specialist.
            </p>
            <p>
                The bottom line: the more unusual your animal, the earlier you need to start
                researching, and the more directly you need to verify policies with both the
                airline and any relevant federal agencies.
            </p>

            <h2>On the Train: A Gentler Option</h2>
            <p>
                If flying feels like too much for your animal {"\u2014"} or for you {"\u2014"} trains
                are genuinely worth considering, and for many pets, this is a far more humane
                experience. <a href="https://www.amtrak.com/pets" target="_blank" rel="noopener noreferrer">Amtrak{"\u2019"}s pet program</a> allows small dogs and cats (up to 20
                pounds, carrier included) on most routes for a fee of around $29 each way. The
                train is limited to five to seven pets per train, so booking early matters.
                Trips have to be under seven hours under the current policy, which rules out
                coast-to-coast journeys but works beautifully for regional travel. Your pet
                stays in a carrier at your feet, you stay calm, and nobody ends up on the local
                news.
            </p>
            <p>
                The train environment tends to be gentler on animals than planes. Less altitude
                change, less pressure, less noise from engines at close range. For a dog who
                gets anxious in the air, a train through the Hudson Valley or along the
                California coast might actually be a lovely experience for both of you.
            </p>

            <h2>Road Trips: The Most Forgiving Option If Done Right</h2>
            <p>
                The car is where most pet travel happens, and it{"\u2019"}s also where the most
                preventable mistakes happen. Here{"\u2019"}s what actually makes a difference:
            </p>

            <div className="bg-slate-800 p-6 rounded-xl my-8 border border-slate-700">
                <h3 className="text-sky-400 font-bold mb-2 mt-0">Essential Road Trip Gear</h3>
                <p className="text-gray-300 mb-4">
                    A pet roaming free in the backseat is a major safety hazard on a long road trip. You need a heavy-duty, crash-tested travel harness that clips directly into your car{"'"}s seatbelt system. The <a href="https://www.amazon.com/s?k=Kurgo+Tru-Fit+Smart+Harness&tag=eztravelz-20" target="_blank" rel="sponsored noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline font-semibold">Kurgo Tru-Fit Smart Harness</a> is fully adjustable and rigorously tested to keep your dog secure during sudden stops.
                </p>
                <img
                    src="/images/Dog car harness.jpg"
                    alt="Kurgo Tru-Fit Smart Harness"
                    className="w-full h-auto rounded-lg shadow-md border border-brand-200"
                />
            </div>

            <p>
                <strong>Keep your pet secured.</strong> An unrestrained dog in a moving vehicle
                is a safety risk for everyone, not just the dog. Crash-tested harnesses, travel
                crates secured to the seat, and pet barriers all work. An unsecured 60-pound
                dog becomes a projectile in a sudden stop. That{"\u2019"}s not dramatic;
                that{"\u2019"}s physics.
            </p>
            <p>
                <strong>Plan your stops.</strong> Every two hours is a good rhythm {"\u2014"}{" "}
                gives a chance to stretch, drink water, and take a short walk. Dogs especially
                need this, both physically and emotionally. A pet who feels included in the
                journey, rather than just cargo in it, tends to travel much better.
            </p>
            <p>
                <strong>Never leave your pet in a parked car.</strong> On a 75-degree day, the
                inside of a parked car can reach 115 degrees within an hour. In Las Vegas in
                July, it happens faster than that. Many states have laws allowing bystanders to
                break a car window to rescue an animal in heat distress. It is never worth the
                risk.
            </p>
            <p>
                <strong>Talk to your vet before any long trip.</strong> Some animals genuinely
                don{"\u2019"}t travel well, and there are safe, vet-approved options for anxiety
                {"\u2014"} from calming supplements to prescription medications {"\u2014"} that can
                make the journey kinder for your pet. Don{"\u2019"}t try to figure this out at a
                rest stop in the middle of Nevada.
            </p>

            <h2>Before You Go: The Checklist That Actually Matters</h2>
            <p>
                Carry a copy of your pet{"\u2019"}s vaccination records and health certificate
                every time you travel, even if you don{"\u2019"}t think you{"\u2019"}ll need them.
                Bring enough of your pet{"\u2019"}s regular food for the entire trip plus a couple
                of extra days {"\u2014"} switching food mid-travel invites stomach problems at the
                worst possible moment. Pack a familiar blanket or toy. The smell of home is
                grounding for an animal in an unfamiliar place.
            </p>
            <p>
                If you{"\u2019"}re flying with a service animal, download and complete the{" "}
                <a href="https://www.transportation.gov/individuals/aviation-consumer-protection/service-animals/Air_Transportation_Form" target="_blank" rel="noopener noreferrer">DOT Service Animal Air Transportation Form</a> and submit it to your airline at least
                48 hours before departure. For flights over eight hours, have the{" "}
                <a href="https://www.transportation.gov/individuals/aviation-consumer-protection/service-animals/Relief_Form" target="_blank" rel="noopener noreferrer">DOT Relief Attestation Form</a> ready as well. If you{"\u2019"}re flying with a pet under the
                standard program, go directly to your airline{"\u2019"}s website and find their
                pet reservation portal.
            </p>
            <p>
                And if you{"\u2019"}re flying any airline, any route {"\u2014"} complete every
                registration step before you leave your house. Calling from the airport counter
                is too late. The reservation is the protection. The reservation is what keeps
                your dog on the plane and you on the right side of a viral news story.
            </p>
            <p>
                The woman in Las Vegas clearly loved her dog enough to bring him to the
                airport. Somewhere in the gap between love and preparation, things went
                terribly wrong {"\u2014"} for her, and almost for him. He got lucky. He got a
                good home and a name that trended on the internet for a week.
            </p>
            <p>Your pet deserves the same good outcome, just with a lot less drama getting there.</p>

            <hr />

            <p className="text-sm text-slate-500 italic">
                Policies for service animals, ESAs, and standard pet travel are subject to
                change. Always verify current requirements directly with your airline,{" "}
                <a href="https://www.amtrak.com/pets" target="_blank" rel="noopener noreferrer">Amtrak</a>,
                and the DOT{"\u2019"}s official{" "}
                <a href="https://www.transportation.gov/individuals/aviation-consumer-protection/service-animals" target="_blank" rel="noopener noreferrer">service animal resource page</a> before booking. Your
                veterinarian is your best first call for health certificates, travel anxiety,
                and any destination-specific requirements.
            </p>
        </div>
    );
}

function stanleyHotelContent(): ReactNode {
    return (
        <div className="prose prose-invert max-w-none prose-headings:text-red-500 prose-headings:font-[family:var(--font-creepster)] prose-headings:tracking-widest prose-p:text-gray-300 prose-a:text-red-400 hover:prose-a:text-red-300 prose-strong:text-white prose-p:leading-relaxed">
            <p className="text-sm text-red-500/70 font-medium uppercase tracking-wide">
                Estes Park, Colorado
            </p>

            <p>
                The man who invented the Stanley Steamer came to Estes Park in 1903 to die.
            </p>
            <p>
                Freelan Oscar Stanley had made his fortune twice over {"\u2014"} first by co-developing
                a dry photographic plate process with his identical twin brother Francis that they
                eventually sold to George Eastman for what would amount to tens of millions in
                today{"\u2019"}s dollars, then again by building one of the most celebrated
                steam-powered automobiles in the world. He was a genuine American inventor, the
                kind history produces once in a generation. And in the winter of 1903, his doctor
                told him tuberculosis would claim him within months.
            </p>
            <p>
                So F.O. Stanley went west, as Americans did then when they wanted clean air and a
                dignified exit. He and his wife Flora settled into a friend{"\u2019"}s cabin in
                Estes Park, Colorado, and something unexpected happened. The mountain air cured
                him. Completely. He gained 29 pounds that first summer and returned every year
                afterward, living to 91 and outlasting his own prognosis by nearly four decades.
            </p>

            <figure className="my-10 lg:my-14">
                <Image src="/images/Stanley Hotel.png" alt="The historic Stanley Hotel in Estes Park, Colorado" width={1200} height={800} className="w-full h-auto rounded-3xl shadow-2xl shadow-black/40 border border-white/10" />
            </figure>

            <p>
                Grateful to the valley that saved his life, Stanley decided to give something
                back. What he built was a white Georgian Revival hotel on a hillside at 7,800
                feet, with panoramic views of Lake Estes and the Rockies stretching in every
                direction. It opened on July 4, 1909, powered by Stanley{"\u2019"}s own
                hydroelectric plant {"\u2014"} one of the first fully electrified hotels in the
                world. Every room had a telephone. Running water flowed from Black Canyon Creek.
                Flora{"\u2019"}s piano sat in the concert hall, a gift from her husband to mark
                the opening, and for years guests reported hearing her play it beautifully.
            </p>
            <p>
                What Stanley almost certainly did not anticipate was that the hotel he built to
                celebrate life would spend most of its legacy in conversation with death.
            </p>

            <h2>The Accident That Started Everything</h2>
            <p>
                Two years after the doors opened, on the evening of June 25, 1911, a severe storm
                knocked out the Stanley{"\u2019"}s electrical power. The head housekeeper,
                Elizabeth Wilson, began making her rounds through the hotel, lighting gas lanterns
                in each room in preparation for the outage. What neither she nor anyone else knew
                was that a gas line on the second floor had been leaking. When Wilson entered Room
                217 and struck a match, the resulting explosion was heard over a mile away in the
                town of Estes Park. Witnesses reported seeing a bathtub launched into the air. An
                estimated ten percent of the hotel sustained damage. Elizabeth Wilson was blown
                clean through the floor and landed in the dining room below.
            </p>
            <p>
                She survived. That alone is remarkable. She recovered, returned to work, and by
                most accounts continued in her role at the Stanley until her death years later.
                But guests in Room 217 began reporting strange things not long after. Luggage
                moved. Lights switched on and off without explanation. Unmarried couples sleeping
                in the same bed described feeling a cold force pressing between them, as if
                someone deeply disapproving were trying to separate them. The reports have
                continued steadily for over a century.
            </p>
            <p>
                Today, the hotel{"\u2019"}s most requested accommodation is that very room, now
                officially called the Stephen King Suite. You cannot book it online. You have to
                call. And the waiting list for staying in October stretches months into the
                future.
            </p>

            <h2>The Ghosts That Predate the Legend</h2>
            <p>
                It would be easy to assume that the Stanley{"\u2019"}s haunted reputation was
                constructed backwards from Stephen King, retrofitted onto a hotel that needed a
                marketing angle. But the paranormal activity reported here predates King{"\u2019"}s
                visit by decades, and it covers nearly every floor of the building.
            </p>
            <p>
                F.O. Stanley himself is said to still keep an eye on things. Staff and guests have
                reported seeing a well-dressed man in the hotel bar late at night, someone who
                doesn{"\u2019"}t quite match any guest they can account for. His wife Flora is the
                more musical presence {"\u2014"} appearing in the concert hall she loved, sometimes
                as a visual apparition seated at the piano, sometimes as music that has no visible
                source.
            </p>
            <p>
                The fourth floor draws the most consistent paranormal attention and has the
                strangest explanation for it. In the Stanley{"\u2019"}s early years, wealthy families
                arrived for the summer season with their children and nannies in tow. The children
                dined separately in a windowless room. The nannies lived on the fourth floor.
                Guests today report children{"\u2019"}s laughter echoing in empty hallways, small
                figures glimpsed at the end of corridors, and lights that cycle on and off
                regardless of how many times the bulbs are checked. Room 401 is particularly well
                documented. When the <em>Ghost Hunters</em> television crew filmed there,
                investigator Jason Hawes woke from sleep to watch a locked closet door swing open
                by itself in an otherwise empty room.
            </p>
            <p>
                Room 407 belongs to a different kind of ghost entirely {"\u2014"} one reportedly
                seen peering through the window from outside, despite the fact that the room sits
                well above ground level. Local lore identifies this presence as Lord Dunraven, the
                Anglo-Irish nobleman who owned the land before Stanley bought it. Dunraven{"\u2019"}s
                history in Estes Park was controversial enough that when Stanley suggested naming
                the hotel after him, 180 residents of the town signed a petition written on
                buckskin asking him not to.
            </p>
            <p>
                The grand staircase in the main lobby has its own mythology. Some guests and
                psychics have described it as a vortex {"\u2014"} a place where the membrane between
                this world and whatever lies adjacent runs unusually thin. The photographs that
                come out of that staircase are, by any reasonable accounting, difficult to
                explain.
            </p>

            <h2>One Night, One Dream, One Novel</h2>
            <p>
                In late September of 1974, Stephen King and his wife Tabitha drove north from
                Boulder, where King was living while working on another project. The Stanley was
                about to close for the winter. By the time the Kings arrived, the staff had
                already begun the shutdown. The dining room tables were already set with
                upside-down chairs. Pre-recorded orchestra music played through speakers into an
                empty room. The Kings were the only guests in the entire hotel.
            </p>
            <p>
                They ate dinner alone, serenaded by music echoing through vacant corridors. Then
                they went upstairs to their room {"\u2014"} the only one that still had linens on
                the bed. Room 217.
            </p>
            <p>
                King has described what happened next in interviews and on his own website. He
                wandered the halls. He absorbed the atmosphere of an enormous, beautiful, utterly
                empty building in the mountains in late autumn. And when he finally slept, he
                dreamed of his three-year-old son running through the corridors screaming, being
                chased by a fire hose that had come alive.
            </p>
            <p>
                He woke in a panic, lit a cigarette, and sat at the window looking out at the
                Rockies. By the time the cigarette was finished, he had the bones of the book in
                his head. He wrote to a friend that the Stanley had seemed, as he walked its halls
                that night, {"\u201C"}the perfect, maybe the archetypical, setting for a ghost
                story.{"\u201D"}
            </p>
            <p>
                <em>The Shining</em> was published in 1977. It became one of King{"\u2019"}s most
                celebrated novels, the story of Jack Torrance, a writer who takes a caretaker job
                at an isolated mountain hotel called the Overlook and slowly descends into madness
                as the building{"\u2019"}s dark history takes hold of him. Room 217 features
                prominently. The novel{"\u2019"}s Danny Torrance, like the son King dreamed of, runs
                in terror through the hotel{"\u2019"}s corridors. The fire hose that strangled
                King{"\u2019"}s sleeping son became one of the book{"\u2019"}s most visceral horror
                devices.
            </p>

            <h2>Two Films, One Hotel, and a Director Who Never Visited</h2>
            <figure className="my-10 lg:my-14">
                <Image src="/images/Movie2.png" alt="Vintage film reels and cinematic equipment" width={1200} height={800} className="w-full h-auto rounded-3xl shadow-2xl shadow-black/40 border border-white/10" />
            </figure>
            <p>
                The story of <em>The Shining</em> on film is itself a study in two very different
                visions.
            </p>
            <p>
                Stanley Kubrick{"\u2019"}s 1980 adaptation is now considered one of the greatest
                horror films ever made, though it was a modest box office performer on release and
                King loathed it. Kubrick, working with a script that departed significantly from
                the novel, never filmed at the Stanley. His exterior Overlook was the Timberline
                Lodge on Mount Hood in Oregon. His interiors were constructed on soundstages at
                Elstree Studios in England, with design inspiration drawn partly from the Ahwahnee
                Hotel in Yosemite. The room where Jack Torrance{"\u2019"}s darkness crystallizes
                became Room 237 {"\u2014"} a number Kubrick changed at the request of the Timberline
                Lodge, whose management was concerned guests would refuse to book a room
                associated with a horror film. Room 237 does not exist at the Timberline Lodge.
                Room 217 does exist at the Stanley, and it books months in advance.
            </p>
            <p>
                King, dissatisfied with how far Kubrick had strayed from his story, took matters
                into his own hands in 1997. He wrote the screenplay for a three-part ABC miniseries
                himself and insisted on a crucial distinction from the Kubrick version: it would be
                filmed at the actual Stanley Hotel. The miniseries, directed by Mick Garris, is
                widely considered less artistically daring than Kubrick{"\u2019"}s film, but it gave
                the Stanley something Kubrick{"\u2019"}s version never did {"\u2014"} a permanent
                visual record of the building that started everything. Props from the production
                remain in the hotel{"\u2019"}s basement today, including the handbuilt dollhouse
                modeled after the Stanley itself.
            </p>
            <p>
                There is an interesting footnote that connects the two films through the hotel. A
                pet cemetery on the Stanley{"\u2019"}s grounds, where owners traditionally buried
                their animals, has reportedly produced its own ghost sightings over the years. A
                golden retriever named Cassie and a white cat named Camanche have been glimpsed
                wandering the rooms and grounds by guests who later discover the animals had been
                dead for years. King stayed in Room 217 in 1974. His novel <em>Pet Sematary</em>,
                about a cursed burial ground that returns animals and people from the dead, was
                published in 1983. Whether the hotel{"\u2019"}s animal graveyard planted a seed in
                his imagination no one can say. But it{"\u2019"}s the kind of detail that makes you
                sit with it for a while.
            </p>

            <h2>What It{"\u2019"}s Like to Go</h2>
            <p>
                The{" "}
                <a href="https://www.stanleyhotel.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Stanley Hotel</a>{" "}
                today is a fully restored, genuinely beautiful hotel that earns its reputation on
                both ends of the spectrum {"\u2014"} historic elegance and genuine atmosphere. It sits
                at the entrance to{" "}
                <a href="https://www.nps.gov/romo/index.htm" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Rocky Mountain National Park</a>,
                which means your days can involve elk at sunrise and alpine trails through country
                that stops your breath, and your evenings can involve a ghost tour through tunnels
                beneath a 116-year-old building where the lights go off and the only thing between
                you and whatever is down there is a guide with a flashlight and a story.
            </p>
            <p>
                The hotel runs several tour options. A 90-minute history and paranormal walking
                tour covers the public spaces, the tunnels, and the documented lore of each
                haunted location. A Night Ghost Tour goes deeper {"\u2014"} lights out {"\u2014"}
                into areas most day visitors never see. For the genuinely committed, a five-hour
                paranormal investigation gives you the run of the property with equipment and a
                lead investigator. All tours book online through the{" "}
                <a href="https://www.stanleyhotel.com/activities/hotel-tours" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">hotel{"\u2019"}s tour page</a>,
                and for October visits, booking several months ahead is not overcautious {"\u2014"}
                it{"\u2019"}s necessary.
            </p>
            <p>
                The spirited rooms {"\u2014"} 217, 401, 407, 418, and 428 {"\u2014"} are priced at a
                premium and book far in advance. Room 217 requires a phone reservation rather than
                online booking. If you want to sleep where Stephen King dreamed one of the most
                famous nightmares in American literary history, plan ahead. Every room in the main
                hotel has a channel that plays Kubrick{"\u2019"}s version of <em>The Shining</em>{" "}
                on a continuous loop, which is either a delightful amenity or a deeply unsettling
                one depending on your constitution.
            </p>
            <p>
                The hotel added a hedge maze to the front grounds in 2015, a nod to Kubrick{"\u2019"}s
                adaptation. It{"\u2019"}s worth noting that King{"\u2019"}s original novel featured
                topiary animals rather than a maze, so the hedge maze is actually a tribute to the
                film version that King publicly criticized. The hotel seems to enjoy this irony. So
                does the internet.
            </p>
            <p>
                Estes Park itself is worth building a full weekend around. The town sits at the
                gateway to Rocky Mountain National Park and has excellent restaurants, galleries,
                and the kind of unhurried mountain pace that reminds you why people have been
                making the trip since F.O. Stanley first drove his steam car up from Lyons in
                1903. In spring and fall, elk wander through the streets with complete indifference
                to traffic.
            </p>
            <p>
                The Stanley was acquired in May 2025 by a public-private partnership called The
                Stanley Partnership for Art Culture and Education, for a reported $400 million,
                with plans that include preserving the historic character of the property while
                expanding its cultural programming. As of now, the hotel continues to operate as
                it has, with all tours and overnight stays available.
            </p>

            <h2>Before You Go</h2>
            <p>
                <strong>Room 217 (the Stephen King Suite):</strong> Call the hotel directly at{" "}
                <a href="tel:+19705774000" className="text-sky-600 underline">(970) 577-4000</a>{" "}
                to check availability. Rates typically run $329 to $399 per night before taxes,
                and the room does not appear in the standard online booking system.
            </p>
            <p>
                <strong>Ghost and paranormal tours</strong> book through the{" "}
                <a href="https://www.stanleyhotel.com/activities/hotel-tours" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Stanley Hotel{"\u2019"}s official tour page</a>.
                Prices and availability vary by season. October books out first.
            </p>
            <p>
                The hotel sits at 333 Wonderview Avenue, Estes Park, Colorado, approximately 70
                miles northwest of Denver. The drive takes just over an hour and the road through
                Rocky Mountain National Park is one of the most remarkable approaches to any hotel
                in the country.
            </p>
            <p>
                If you{"\u2019"}re building an itinerary, pair the Stanley with a morning in the
                park {"\u2014"} elk are most visible at dawn and dusk {"\u2014"} and give yourself at
                least two nights. One to explore. One to listen.
            </p>
            <p>
                For a deeper look at the Stanley through a cinematic lens {"\u2014"} the filming
                locations, the rooms worth booking, the drive up, and how to plan a full
                pilgrimage {"\u2014"} our companion post,{" "}
                <a href="/blog/reel-roads-room-217-the-shining" className="text-sky-600 underline">Reel Roads: Room 217 and the Hotel That Dreamed Up The Shining</a>,
                covers the Stanley from the cinematic traveler{"\u2019"}s perspective.
            </p>

            <hr />

            <p className="text-sm text-slate-500 italic">
                <em>The Shining</em> (novel, 1977) and <em>Doctor Sleep</em> (2013) are both
                available wherever books are sold. Stanley Kubrick{"\u2019"}s 1980 film adaptation
                is streaming on{" "}
                <a href="https://www.max.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Max</a>.
                The 1997 Stephen King miniseries is available on{" "}
                <a href="https://www.peacocktv.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Peacock</a>.
                Watch both. They are entirely different experiences, and both are better for
                knowing where the story actually began.
            </p>
        </div>
    );
}

function reelRoadsContent(): ReactNode {
    return (
        <div className="prose prose-invert max-w-none prose-headings:text-red-500 prose-headings:font-[family:var(--font-creepster)] prose-headings:tracking-widest prose-p:text-gray-300 prose-a:text-red-400 hover:prose-a:text-red-300 prose-strong:text-white prose-p:leading-relaxed">
            <p className="text-sm text-red-500/70 font-medium uppercase tracking-wide">
                Estes Park, Colorado {"\u2014"} A Cinematic Pilgrimage to the Most Famous Haunted
                Hotel in American Literature
            </p>

            <p>
                Picture this. A struggling writer and his wife check into an enormous, nearly
                empty mountain hotel on the last night of the season. The staff is already packing
                up. The dining room tables are already stacked with upside-down chairs, and
                pre-recorded orchestra music plays into a room with no one in it. The couple eats
                alone. Then they go upstairs to the only room that still has sheets on the bed.
            </p>
            <p>
                That night, the writer has a nightmare so vivid and so specific that he wakes up
                drenched in sweat, lights a cigarette, stares out at the Rockies in the dark, and
                by the time the cigarette burns down to his fingers, he has the bones of one of
                the most celebrated horror novels ever written.
            </p>
            <p>
                This is not a scene from a movie. This happened in Room 217 of the{" "}
                <a href="https://www.stanleyhotel.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Stanley Hotel</a>{" "}
                in Estes Park, Colorado, in late September of 1974. The writer was Stephen King.
                The nightmare was about his three-year-old son being chased through the
                hotel{"\u2019"}s corridors by a fire hose that had come alive. The novel that grew
                from that single night was <em>The Shining</em>, published in 1977. And the hotel
                has never quite been the same since.
            </p>
            <p>
                If you{"\u2019"}re the kind of traveler who reads a book or watches a film and
                immediately wants to stand in the place where it happened, the Stanley Hotel is
                one of the great pilgrimages available to you. It is not a replica. It is not a
                theme park recreation. It is the actual building, still standing at 7,800 feet in
                the Colorado Rockies, still white against the mountain sky, still atmospheric in
                ways that are genuinely difficult to explain once you{"\u2019"}ve stood inside it.
            </p>

            <figure className="my-10 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-2 shadow-2xl">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                    <Image
                        src="/images/Stanley Hotel 2.png"
                        alt="The Stanley Hotel exterior"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    />
                </div>
                <figcaption className="mt-3 text-center text-sm font-medium italic text-gray-500">
                    The inspiration for the Overlook Hotel
                </figcaption>
            </figure>

            <h2>Two Films, One Hotel, and a Director Who Never Visited</h2>
            <p>
                Here is something every cinematic traveler should know before they book their
                room: Stanley Kubrick{"\u2019"}s 1980 film adaptation of <em>The Shining</em>,
                arguably the most famous horror film ever made, was not filmed at the Stanley
                Hotel.
            </p>
            <p>
                Kubrick{"\u2019"}s Overlook used the Timberline Lodge on Mount Hood in Oregon for
                its exterior shots, and built his interiors almost entirely on soundstages at
                Elstree Studios in England, drawing design inspiration from the Ahwahnee Hotel in
                Yosemite. The iconic carpeted hallways, the hedge maze, the ballroom, the great
                lounge where Jack Torrance unravels {"\u2014"} none of it was the Stanley. Kubrick
                even changed the pivotal room number from 217 to 237, reportedly at the request
                of the Timberline Lodge, whose management worried guests would be nervous about
                booking a room associated with supernatural horror. Room 237 does not exist at
                the Timberline. Room 217 does exist at the Stanley, and it is booked months in
                advance for every October on the calendar.
            </p>
            <p>
                Stephen King, famously unhappy with how far Kubrick had strayed from his source
                material, took matters into his own hands in 1997. He wrote the screenplay for a
                three-part ABC miniseries himself, and insisted on one condition that Kubrick
                never agreed to: it would be filmed at the actual Stanley Hotel. The miniseries,
                directed by Mick Garris, is considered by many to be less artistically daring
                than Kubrick{"\u2019"}s version, but it gave the Stanley something no other screen
                adaptation could: the real corridors, the real staircase, the real concert hall
                where Flora Stanley{"\u2019"}s piano still sits. Props from the production remain
                in the hotel{"\u2019"}s basement today, including the handbuilt dollhouse modeled
                after the building itself. Walking past it on the ghost tour is one of those
                small moments that catches you sideways.
            </p>

            <figure className="my-10 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-2 shadow-2xl">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                        src="/images/Movie2.png"
                        alt="Cinematic atmosphere"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    />
                </div>
                <figcaption className="mt-3 text-center text-sm font-medium italic text-gray-500">
                    The corridors of the Stanley Hotel retain a cinematic, eerie quality.
                </figcaption>
            </figure>
            <p>
                So what you{"\u2019"}re actually visiting at the Stanley is the place that started
                everything. Not the filming location of the famous movie, but the location that
                made the famous movie necessary. There is a meaningful difference.
            </p>

            <h2>What Staying Here Actually Feels Like</h2>
            <p>
                The Stanley is not a horror-themed hotel in the way that phrase might suggest. It
                doesn{"\u2019"}t assault you with jump scares or plastic skeletons. What it does
                is something more interesting and harder to manufacture: it creates atmosphere
                through genuine history and genuine architecture.
            </p>
            <p>
                The main building is a white Georgian Revival structure that opened on July 4,
                1909. It was one of the first fully electrified hotels in the world, built by
                Freelan Oscar Stanley, the inventor of the Stanley Steamer automobile, who came
                to Estes Park dying of tuberculosis and was cured by the mountain air. The bones
                of the building are original. The woodwork, the grand staircase, the concert hall
                with its vaulted ceilings and the piano F.O. gave his wife Flora as an opening
                gift {"\u2014"} all of it has been restored rather than replaced.
            </p>
            <p>
                Walking the corridors at night, particularly after the day tour groups have gone,
                is an experience that earns the word <em>atmospheric</em> without needing
                anything supernatural to back it up. The hallways are long and quiet. The building
                makes sounds that old buildings make. The altitude {"\u2014"} sitting at nearly
                8,000 feet {"\u2014"} affects people in subtle ways: a slight dizziness, a mild
                hypersensitivity, the kind of heightened state that makes everything feel slightly
                more charged than usual. Whether that{"\u2019"}s altitude or something else is
                for you to decide.
            </p>
            <p>
                Every room in the hotel has a channel dedicated to playing Kubrick{"\u2019"}s{" "}
                <em>The Shining</em> on continuous loop. Falling asleep with it on is either a
                delightful choice or a decision you will immediately regret. Most guests report
                it was both.
            </p>
            <p>
                The word {"\u201C"}REDRUM{"\u201D"} is still scrawled on an attic door. The
                hotel{"\u2019"}s hedge maze, a nod to Kubrick{"\u2019"}s film that actually
                doesn{"\u2019"}t appear in King{"\u2019"}s novel at all, was added to the front
                grounds in 2015 and is free to explore during daylight hours. King{"\u2019"}s book
                featured topiary animals rather than a maze, so the hedge maze is technically a
                tribute to the adaptation King openly criticized. The hotel seems to enjoy this
                irony. It has developed a healthy sense of humor about its own mythology.
            </p>

            <h2>The Rooms Worth Knowing</h2>
            <p>
                <strong>Room 217</strong>, now officially called the Stephen King Suite, is the
                one most people come for. It is on the second floor, has a private balcony
                overlooking the front of the property, and is furnished in a style that reflects
                the hotel{"\u2019"}s Edwardian origins. You cannot book it online. Call the hotel
                directly at{" "}
                <a href="tel:+19705774000" className="text-sky-600 underline">(970) 577-4000</a>{" "}
                to check availability. Rates run roughly $329 to $399 per night before taxes,
                and October dates are often gone months in advance.
            </p>
            <p>
                The fourth floor is where the hotel{"\u2019"}s paranormal activity is most
                consistently reported. Rooms 401, 407, 418, and 428 are all considered{" "}
                {"\u201C"}spirited rooms{"\u201D"} and are bookable through the hotel{"\u2019"}s
                website, priced at a premium. Room 401 features the famous locked closet that
                investigators from the <em>Ghost Hunters</em> television series documented
                opening on its own during a filmed stay. Room 407 is associated with Lord
                Dunraven, the controversial Anglo-Irish nobleman who owned the land before F.O.
                Stanley, and whose face has reportedly been seen in the window by guests. Room 418
                is where children{"\u2019"}s laughter has been heard in empty hallways for as long
                as anyone at the hotel can remember.
            </p>
            <p>
                For a deeper look at the full paranormal history of the property and all the
                spirits said to inhabit it, our Ghost Trails companion post,{" "}
                <a href="/blog/stanley-hotel-where-the-nightmare-became-the-novel" className="text-sky-600 underline">The Stanley Hotel: Where the Nightmare Became the Novel</a>,
                goes into the building{"\u2019"}s haunted lore in considerable depth {"\u2014"}
                including the 1911 gas explosion that created the most famous ghost in the
                building, Elizabeth Wilson, the housekeeper who still reportedly unpacks your
                luggage whether you asked her to or not.
            </p>

            <h2>The Tours: Which One Is Right for You</h2>
            <p>
                The Stanley runs several structured tour experiences, and for a cinematic
                traveler, these are worth planning around rather than treating as an afterthought.
            </p>
            <p>
                <strong>The History and Shining Tour</strong> runs during the day and covers the
                filming locations used in the 1997 miniseries, the areas of the hotel that
                inspired King{"\u2019"}s novel, significant rooms and spaces with documented
                connections to the story, and the basement displays that include miniseries props.
                This is the tour for people who want the literary and cinematic context without
                the lights-out paranormal focus. It runs roughly 90 minutes.
            </p>
            <p>
                <strong>The Night Ghost Tour</strong> goes deeper into the building with the
                lights down, covering the tunnels beneath the hotel, the most documented
                paranormal locations, and the layered human history behind each reported spirit.
                For travelers who want both the cinematic history and the genuine ghost hunting
                experience, this is the better choice.
            </p>
            <p>
                <strong>The Paranormal Investigation</strong> is a five-hour deep-dive with
                equipment and a lead investigator. This is for the committed, and it books out
                fast.
            </p>
            <p>
                All tours require advance booking through the{" "}
                <a href="https://www.stanleyhotel.com/activities/hotel-tours" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Stanley Hotel{"\u2019"}s official website</a>.
                Parking on the property runs $10 during peak season (May through October), and
                the hotel issues a token that converts to a $5 credit at their restaurants or
                bar. The tour walks cover approximately a mile and a quarter total, with some
                stairs, and the altitude genuinely affects some visitors {"\u2014"} so hydrating
                before you arrive is practical advice, not a formality.
            </p>

            <h2>When to Go</h2>
            <p>
                Each season at the Stanley offers something genuinely different, and the right
                choice depends on what you{"\u2019"}re after.
            </p>
            <p>
                <strong>September and October</strong> are the peak cinematic and paranormal
                seasons. The aspens turn gold in the surrounding mountains, the elk rut brings
                enormous bulls into the streets of Estes Park at dawn and dusk, the crowds thin
                compared to summer, and the atmosphere of the hotel in autumn feels closest to
                what King experienced on that 1974 night. October books out faster than any other
                month. If Halloween weekend is your target, plan at least six months ahead. This
                is not an exaggeration.
            </p>
            <p>
                <strong>Summer (June through August)</strong> is when the hotel and{" "}
                <a href="https://www.nps.gov/romo/index.htm" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Rocky Mountain National Park</a>{" "}
                are at their most accessible and most crowded. The scenery is extraordinary,
                wildflowers blanket the high country, and the hotel is fully alive with activity.
                Tour availability is excellent, and the town of Estes Park is fully operational.
                If you want the easiest, most convenient version of this trip, summer delivers.
                Just know that Room 217 and the fourth floor spirited rooms will require advance
                planning regardless of season.
            </p>
            <p>
                <strong>Winter</strong> offers the most atmospheric experience and the lowest
                rates. The hotel no longer closes for the season as it did in King{"\u2019"}s era,
                and a winter stay at the Stanley {"\u2014"} with snow on the Rockies and the
                corridors quiet in ways they aren{"\u2019"}t in warmer months {"\u2014"} is as close
                as you can get to the environment King actually inhabited that September night.
                Some tours operate on reduced schedules, so confirming availability before
                booking is worthwhile. The roads can require winter tires or four-wheel drive
                depending on conditions.
            </p>
            <p>
                <strong>Spring (April and May)</strong> is the overlooked sweet spot. Rates are
                lower, the crowds are smaller, wildlife is active as animals move back into lower
                elevations, and the hotel has a particular stillness to it that feels earned
                after a long Colorado winter.
            </p>

            <h2>Getting There: The Journey Is Part of the Story</h2>
            <p>
                The Stanley sits at 333 Wonderview Avenue in Estes Park, roughly 70 miles
                northwest of Denver. The drive typically takes between 90 minutes and two hours
                depending on traffic, though the hotel{"\u2019"}s own website notes that Denver
                traffic can stretch it to three hours on busy weekends. Give yourself time.
            </p>
            <p>
                The most direct route from Denver follows US-36 north through Boulder and Lyons
                before climbing into Estes Park. It{"\u2019"}s a straightforward, well-maintained
                road with no serious mountain passes, and it offers the mountain views developing
                gradually as you head north, which makes the final arrival into the Estes Valley
                feel like an unveiling. This is the recommended route if you{"\u2019"}re arriving
                for the first time or driving in winter conditions.
            </p>
            <p>
                The scenic route is the <strong>Peak to Peak Scenic Byway</strong>, Colorado
                State Highway 72, running south to north through the mountain communities of
                Black Hawk, Nederland, Ward, and Allenspark before connecting to Estes Park.
                Driven from south to north, the views improve as you go, with the Front Range
                opening up on your left in ways that make the entire drive feel like it was
                staged. Add an hour to your travel time and stop at Brainard Lake if it{"\u2019"}s
                open. You will not regret it.
            </p>
            <p>
                The <strong>Big Thompson Canyon</strong> approach via US-34 from Loveland is the
                third option, a dramatic canyon drive that follows the Big Thompson River through
                narrow rock walls before opening into the Estes Valley. The canyon is spectacular
                and one of the most memorable road approaches to any mountain destination in
                Colorado. Many locals recommend combining routes {"\u2014"} taking Peak to Peak up
                and Big Thompson Canyon back down {"\u2014"} which covers the best of both and
                gives you a genuine sense of the landscape surrounding the hotel.
            </p>
            <p>
                Without a car, the <strong>Estes Park Shuttle</strong> operates year-round with
                service from Denver and drops directly at the Stanley. Schedules vary seasonally,
                and the hotel{"\u2019"}s concierge can assist with details. If you{"\u2019"}re
                flying into Denver International Airport, car rentals are widely available, and
                the drive is genuinely part of the experience. Do not outsource it to a rideshare
                if you can help it. The road is part of the story.
            </p>
            <p>
                Once in Estes Park, the town{"\u2019"}s free seasonal shuttle system makes it
                easy to move between the hotel, downtown, and Rocky Mountain National Park
                without moving your car, which matters in summer when park road congestion can
                be significant.
            </p>

            <h2>Making the Most of Your Stay</h2>
            <p>
                Plan at least two nights. One is enough to see the hotel and take a tour. Two is
                enough to actually inhabit it {"\u2014"} to eat dinner in the Cascades Restaurant
                in the evening quiet, to explore the grounds in the blue hour before sunrise when
                the elk sometimes drift across the hillside below the hotel, to sit in the
                Whiskey Bar and let the building settle around you.
            </p>
            <p>
                If you{"\u2019"}re a reader, bring the novel. Not as a prop {"\u2014"} but as a
                companion. Reading King{"\u2019"}s descriptions of the Overlook while sitting in
                the room that inspired them is one of those experiences that collapses the
                distance between imagination and place in a way that{"\u2019"}s genuinely worth
                seeking out.
            </p>
            <p>
                If you{"\u2019"}re a film person, watch both versions before you go.
                Kubrick{"\u2019"}s 1980 film is available on{" "}
                <a href="https://www.max.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Max</a>.
                The 1997 King miniseries is on{" "}
                <a href="https://www.peacocktv.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Peacock</a>.
                They are entirely different experiences and they are both better for knowing where
                the story actually began. Standing in the hotel corridor that served as the
                miniseries set, or sitting in the concert hall where the production filmed its
                ballroom scenes, lands differently when you{"\u2019"}ve seen the footage.
            </p>
            <p>
                And if you find yourself curious about what the hotel is like for the people who
                come specifically for the paranormal {"\u2014"} rather than the cinematic
                history {"\u2014"} our Ghost Trails companion post,{" "}
                <a href="/blog/stanley-hotel-where-the-nightmare-became-the-novel" className="text-sky-600 underline">The Stanley Hotel: Where the Nightmare Became the Novel</a>,
                goes deep into the history of the hauntings, the documented phenomena, the
                specific rooms, and what ghost hunters actually experience when they spend a
                night here. The two experiences {"\u2014"} cinematic pilgrimage and paranormal
                investigation {"\u2014"} are not mutually exclusive. At the Stanley Hotel, they
                never have been.
            </p>

            <hr />

            <p className="text-sm text-slate-500 italic">
                Book rooms and tours directly through the{" "}
                <a href="https://www.stanleyhotel.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Stanley Hotel{"\u2019"}s official website</a>.
                For Room 217, call{" "}
                <a href="tel:+19705774000" className="text-sky-600 underline">(970) 577-4000</a>.
                Spirited rooms and October dates book months in advance.{" "}
                <a href="https://www.nps.gov/romo/index.htm" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Rocky Mountain National Park</a>{" "}
                requires a timed entry reservation permit during peak summer season, available
                through{" "}
                <a href="https://www.recreation.gov" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Recreation.gov</a>.
            </p>
        </div>
    );
}

function lambeauFieldContent(): ReactNode {
    return (
        <div className="prose prose-slate max-w-none prose-headings:text-white prose-p:text-slate-200 prose-strong:text-white prose-p:leading-relaxed">
            <p className="text-sm text-[#FFB612]/80 font-medium uppercase tracking-wide">
                Game Day Getaways | Green Bay, Wisconsin
            </p>

            <p>
                Green Bay, Wisconsin has a population of roughly 106,000 people. To put that in
                perspective, there are individual neighborhoods in Dallas, Los Angeles, and New
                York that hold more residents. By every reasonable measure of sports economics, a
                city this size should not have a major league football franchise, let alone the
                most storied one in the history of the game.
            </p>
            <p>And yet.</p>
            <p>
                The Green Bay Packers have won 13 NFL championships, more than any other team.
                They have sold out every home game since 1960. Their season ticket waiting list
                contains more names than the entire population of the city itself. People put
                their children{"\u2019"}s names on that list at birth. Not as a joke. As a genuine,
                long-term plan.
            </p>
            <p>
                When you walk through the gates at{" "}
                <a href="https://www.packers.com/lambeau-field" target="_blank" rel="noopener noreferrer" className="text-[#FFB612] hover:text-[#FFB612]/80 transition-colors underline">Lambeau Field</a>{" "}
                for the first time, you feel the weight of all of it. This is not a stadium. It
                is a cathedral, and the congregation has been showing up, faithfully, through
                blizzards and heartbreak and decades of Wisconsin winters, since before your
                parents were born.
            </p>

            <h2>The Story That Makes It All Mean Something</h2>
            <p>
                Curly Lambeau was 21 years old and working as a shipping clerk at the Indian
                Packing Company in 1919 when he talked his employer into giving him $500 for
                uniforms and equipment to start a football team. The condition was that the team
                carry the company{"\u2019"}s name. That is how the Green Bay Packers got their name,
                from a meat-packing plant, because a young man with a love of football and a
                persuasive streak asked his boss for money.
            </p>
            <p>
                The team nearly went bankrupt in 1922. Local businessmen bailed them out and
                restructured the franchise as a publicly owned nonprofit, a model so unusual that
                more than a hundred years later, it still exists nowhere else in American
                professional sports. Today, approximately 538,000 shareholders own pieces of the
                team. None of them can own more than 4% of total shares. None of them can profit
                from a sale. The stock cannot be traded on any exchange. What you get when you buy
                in is voting rights, an invitation to the annual meeting, and the right to say
                you own a piece of something that belongs to everyone.
            </p>
            <p>
                That ownership structure is why the Packers are still in Green Bay. Every other
                small-market team from the early NFL has either moved or disappeared. The Packers
                stayed because no single owner could pick them up and relocate them to a city
                with a bigger stadium deal. They belong to the people who love them, and the
                people who love them are not going to let them leave.
            </p>
            <p>
                Vince Lombardi arrived as head coach in 1959 and built a dynasty that won five
                championships in seven years, including the first two Super Bowls. The trophy they
                hand to the Super Bowl champion every February is called the Lombardi Trophy. The
                stadium was renamed in honor of Curly Lambeau, the founder who started it all
                with a $500 investment and a handshake, after his death in 1965.
            </p>
            <p>
                Thirteen championships. The most in league history. From a city the size of a
                mid-sized college town, with a team that nobody owns and everybody owns at the
                same time.
            </p>

            <h2>The Ice Bowl and the Frozen Tundra</h2>
            <p>
                No story about Lambeau Field is complete without December 31, 1967. The Packers
                hosted the Dallas Cowboys for the NFL Championship Game, the winner to advance to
                Super Bowl II. The night before the game, an Arctic front swept across Wisconsin.
                By kickoff, the temperature at the stadium had dropped to 13 degrees below zero.
                Wind chill puts the real feel somewhere around 36 degrees below. The heating
                system installed under the field to keep the turf from freezing had malfunctioned
                overnight. When the tarpaulin covering the field was pulled back that morning,
                moisture had seeped to the surface and locked solid.
            </p>
            <p>Fifty thousand people came anyway.</p>
            <p>
                They sat in the open stands, in temperatures colder than most people will ever
                experience outside of a walk-in freezer, and watched one of the most dramatic
                finishes in NFL history. The Cowboys led 17{"\u2013"}14 in the final minutes.
                Packers quarterback Bart Starr took the offense 68 yards down a field of frozen
                concrete, and with 16 seconds left, he called a timeout and walked to the
                sideline to talk to Lombardi. The play they had been running hadn{"\u2019"}t worked.
                Starr told Lombardi he wanted to try a quarterback sneak behind offensive lineman
                Jerry Kramer, trusting that his cleats could find enough grip on the ice to push
                through for one yard.
            </p>
            <p>
                Lombardi{"\u2019"}s response was immediate:{" "}
                {"\u201C"}Run it, and let{"\u2019"}s get the hell out of here.{"\u201D"}
            </p>
            <p>
                Starr scored. The Packers won 21{"\u2013"}17. Fifty thousand people in conditions
                that should have been physically unbearable cheered until they had no voices left.
            </p>
            <p>
                The {"\u201C"}Frozen Tundra{"\u201D"} nickname for Lambeau{"\u2019"}s field is not a
                marketing invention. It was earned on that afternoon, by those fifty thousand
                people, in that cold.
            </p>

            <h2>How to Actually Get There</h2>
            <p>
                Getting a ticket to a Packers home game is the first challenge, and it requires
                honesty about what you{"\u2019"}re working with. The official season ticket waiting
                list has been building since 1960, and the current wait for standard bowl seats is
                measured in decades, not years. You can add your name at{" "}
                <a href="https://www.packers.com" target="_blank" rel="noopener noreferrer" className="text-[#FFB612] hover:text-[#FFB612]/80 transition-colors underline">packers.com</a>,
                but do not plan a trip around that route unless you are genuinely playing the
                long game.
            </p>
            <p>
                The practical path is the secondary market.{" "}
                <a href="https://www.stubhub.com" target="_blank" rel="noopener noreferrer" className="text-[#FFB612] hover:text-[#FFB612]/80 transition-colors underline">StubHub</a>,{" "}
                <a href="https://www.seatgeek.com" target="_blank" rel="noopener noreferrer" className="text-[#FFB612] hover:text-[#FFB612]/80 transition-colors underline">SeatGeek</a>, and{" "}
                <a href="https://www.ticketmaster.com" target="_blank" rel="noopener noreferrer" className="text-[#FFB612] hover:text-[#FFB612]/80 transition-colors underline">Ticketmaster</a>{" "}
                resale all list Packers tickets throughout the season. Prices vary significantly
                based on opponent and timing. A mid-season game against a non-division rival in
                October will run considerably less than a late-season divisional matchup with
                playoff implications. Expect to pay somewhere between $150 and $300 for a decent
                seat in a normal week; rivalry games and December games near the playoffs can push
                well past that.
            </p>
            <p>
                One often-overlooked option: preseason games. They are cheaper, easier to get,
                and the atmosphere around the stadium on game day is nearly identical to the
                regular season. If your goal is to experience Lambeau Field, a preseason game
                delivers 90% of that experience at a fraction of the cost. The tailgate, the walk
                to the stadium, the stands, the cheesehead hats everywhere you look. It is all
                there.
            </p>
            <p>
                Green Bay is served by Austin Straubel International Airport (GRB), which offers
                connections through Chicago, Minneapolis, and Detroit. Many visitors also fly into
                Milwaukee or Chicago and make the drive north, which takes roughly two hours from
                Milwaukee and two and a half from Chicago{"\u2019"}s O{"\u2019"}Hare. The drive
                along Highway 41 through Wisconsin is flat and easy, and the moment you start
                seeing green and gold on every other car, you know you are close.
            </p>

            <div className="my-10">
                <Image
                    src="/images/Lambeau.png"
                    alt="Lambeau Field Exterior"
                    width={800}
                    height={500}
                    className="rounded-xl shadow-2xl mx-auto"
                />
            </div>

            <h2>The Titletown District</h2>
            <p>
                The Packers built the{" "}
                <a href="https://www.titletown.com" target="_blank" rel="noopener noreferrer" className="text-[#FFB612] hover:text-[#FFB612]/80 transition-colors underline">Titletown District</a>{" "}
                directly across from the stadium, and it changed the gameday experience for
                visitors significantly. The district is free to enter and open year-round, though
                game days are when it comes alive. Festivities start four hours before kickoff.
            </p>
            <p>
                Ariens Hill is the centerpiece, a tubing and sledding hill in winter that doubles
                as a panoramic viewing platform in warmer months. From the top, you can look
                directly across at the exterior of Lambeau Field. The 46 Below Cafe sits at the
                base of the hill, named as a tribute to the Ice Bowl wind chill, and serves
                comfort food and drinks before and after games. Up on the fifth floor of the
                Lodge Kohler hotel, Taverne in the Sky has open-flame rotisserie dishes and a
                terrace with a direct view of the stadium exterior. It is the kind of pregame
                meal that earns its price.
            </p>
            <p>
                The Titletown Football Field is a full-size field where fans can throw passes,
                run routes, or time their 40-yard dash on the official track. The game courts
                have ping pong, shuffleboard, and bocce. None of it costs anything to use.
            </p>
            <p>
                Hinterland Brewery, one of Green Bay{"\u2019"}s most decorated craft breweries,
                operates a full restaurant in the district and has been in the city for more than
                20 years. Their Wisconsin-sourced menu and locally made beers are worth a stop
                whether it{"\u2019"}s game day or not.
            </p>
            <p>
                Lodge Kohler itself is the best home base in the area if budget allows. It sits
                100 yards from the stadium, has a spa, and offers views of the field from multiple
                areas of the building. Rooms book up far in advance on game weekends, so plan
                accordingly.
            </p>

            <h2>Tailgating at the Frozen Tundra</h2>
            <p>
                The parking lots around Lambeau open four hours before kickoff. Lot pricing
                typically runs $20 to $40 depending on location and how close you park to the
                stadium. The Johnsonville Tailgate Village on the east side of the parking lot is
                the main communal hub, free to join, and exactly what you would want it to be:
                brats on grills, Leinenkugel{"\u2019"}s in cups, strangers in matching jerseys
                immediately treating you like an old friend.
            </p>
            <p>
                There is something specific about Packers tailgating that is worth naming. Green
                Bay fans carry a reputation, well-deserved, for what locals call{" "}
                {"\u201C"}Wisconsin nice.{"\u201D"} It is not a performance. People will offer you
                food. They will want to know where you traveled from. They will argue passionately
                about Rodgers or Favre or the {"\u2019"}96 season and then hand you another beer.
                The tailgate scene at Lambeau is as welcoming to first-timers as any in the NFL.
            </p>
            <div className="my-10">
                <Image
                    src="/images/santa.png"
                    alt="Santa at Lambeau Field"
                    width={800}
                    height={500}
                    className="rounded-xl shadow-2xl mx-auto"
                />
            </div>

            <h2>Packing for the Frozen Tundra</h2>
            <p>
                Weather demands preparation. Green Bay in September can be genuinely beautiful.
                Green Bay in December and January is something else entirely, and the stadium is
                open to the sky. Thermal base layers are not optional. Hand warmers in every
                pocket. Wool socks. Face protection for any game after Thanksgiving. The fans who
                look most comfortable in January games are not the ones who dressed like the Ice
                Bowl was a cautionary tale. They dressed like it was a real possibility.
            </p>
            <p>
                Lambeau Field went cashless in 2020, so bring a card for everything inside the
                stadium. Clear bags are required for entry. Tickets in 2025 are mobile only.
            </p>

            <h2>The Stadium Tour</h2>
            <p>
                If you are visiting on a non-game day, or want to go deeper than the stands allow
                on game day, the{" "}
                <a href="https://www.packershofandtours.com" target="_blank" rel="noopener noreferrer" className="text-[#FFB612] hover:text-[#FFB612]/80 transition-colors underline">Packers Hall of Fame and Stadium Tours</a>{" "}
                offers several options. The Classic Tour takes you through the team{"\u2019"}s
                history and into the stadium{"\u2019"}s most iconic areas. The Legendary Tour goes
                further, adding the locker room, the press box, and field-level access where you
                can stand on the same surface that Lombardi{"\u2019"}s teams played on. Tours run
                year-round and book up quickly, especially in fall and during the holidays.
                Reserve online well in advance.
            </p>
            <p>
                The Hall of Fame portion, accessible even without the stadium tour, walks through
                13 championships worth of trophies, game film, equipment, and the kind of
                artifacts that make the history tangible rather than abstract. The heating coil
                from the Ice Bowl is in there. Seeing it in person, knowing what it failed to do
                on December 31, 1967, is a quietly remarkable moment.
            </p>

            <h2>When to Go</h2>
            <p>
                The most atmospheric regular-season games are in late October through December,
                when the weather starts to reflect the Frozen Tundra reputation and the stakes of
                the NFC North race are usually fully in view. These are also the most expensive
                and logistically demanding games to attend.
            </p>
            <p>
                September and early October offer the most comfortable weather, easier parking,
                and still deliver a complete Lambeau experience. Home openers, in particular,
                carry a specific energy after a full offseason of anticipation.
            </p>
            <p>
                If flexibility allows, watch the schedule release in May and look for a late
                November home game against the Bears or the Vikings. The NFC North rivalry games
                at Lambeau in cold weather are as close to the ideal expression of this particular
                pilgrimage as anything on the NFL calendar.
            </p>
            <p>
                Green Bay is the smallest city in professional American sports. It has no skyline
                to speak of, no landmark beyond the stadium itself, and a population that could
                fit comfortably inside several NFL venues with room to spare. None of that has
                mattered for more than a hundred years, because what it has is a team that belongs
                to everyone who loves it, a history that was built by people who refused to let it
                disappear, and a stadium that has never once had an empty seat on game day since
                Vince Lombardi{"\u2019"}s first championship run.
            </p>
            <p>
                Some pilgrimages are worth the journey. This is one of them.
            </p>

            <hr className="border-[#FFB612]/30 my-8" />

            <p className="text-sm text-slate-300 italic">
                Lambeau Field is located at 1265 Lombardi Avenue, Green Bay, WI 54304. Stadium
                tours and Hall of Fame tickets:{" "}
                <a href="https://www.packershofandtours.com" target="_blank" rel="noopener noreferrer" className="text-[#FFB612] hover:text-[#FFB612]/80 transition-colors underline">packershofandtours.com</a>.
                Titletown District information:{" "}
                <a href="https://www.titletown.com" target="_blank" rel="noopener noreferrer" className="text-[#FFB612] hover:text-[#FFB612]/80 transition-colors underline">titletown.com</a>.
                Secondary market tickets:{" "}
                <a href="https://www.stubhub.com" target="_blank" rel="noopener noreferrer" className="text-[#FFB612] hover:text-[#FFB612]/80 transition-colors underline">StubHub</a>,{" "}
                <a href="https://www.seatgeek.com" target="_blank" rel="noopener noreferrer" className="text-[#FFB612] hover:text-[#FFB612]/80 transition-colors underline">SeatGeek</a>,{" "}
                <a href="https://www.ticketmaster.com" target="_blank" rel="noopener noreferrer" className="text-[#FFB612] hover:text-[#FFB612]/80 transition-colors underline">Ticketmaster</a>{" "}
                resale.
            </p>
        </div>
    );
}

function prohibitionWineContent(): ReactNode {
    return (
        <div className="prose prose-invert max-w-none prose-headings:text-rose-200 prose-p:text-gray-200 prose-a:text-rose-300 hover:prose-a:text-rose-200 prose-strong:text-white prose-p:leading-relaxed">
            <p className="text-sm text-rose-300 font-medium uppercase tracking-wide">
                Vine & Wander | The Wineries That Survived Prohibition
            </p>

            <p>
                On January 17, 1920, the United States government did something that would have
                seemed unthinkable to every Italian, French, and German immigrant who had spent
                the previous half-century planting vineyards across California: it outlawed their
                livelihood entirely.
            </p>
            <p>
                The 18th Amendment and its enforcing legislation, the Volstead Act, prohibited
                the manufacture, sale, and transportation of any beverage containing more than
                half of one percent alcohol. On the eve of Prohibition, California alone had 713
                bonded wineries, more than 120,000 acres under vine, and an industry worth tens
                of millions of dollars annually. By the time it was over, thirteen years later,
                fewer than 200 wineries remained. The rest were gone, their equipment sold for
                pennies, their vineyards torn up and replanted with prunes and pears by farmers
                who needed to eat.
            </p>
            <p>
                But some survived. And the story of how they did it involves the Catholic Church,
                a Frenchman who saw it all coming, wine compressed into bricks with warning labels
                that winked so hard they practically fell over, the most creative theology
                American rabbis never actually practiced, and one Napa Valley winery quietly
                supplying Al Capone{"\u2019"}s speakeasies by rail from Chicago.
            </p>
            <p>Pull up a chair. This one earns the glass.</p>

            <h2>The Man Who Saw It Coming</h2>
            <p>
                Georges de Latour was a French chemist from the Dordogne region who arrived in
                California in 1883 with a cream of tartar business and eventually found his way
                to Napa Valley by 1900. His wife Fernande reportedly exclaimed{" "}
                {"\u201C"}quel beau lieu{"\u201D"} when they first saw the land in Rutherford,
                which translates roughly as {"\u201C"}what a beautiful place,{"\u201D"} and that
                became the name of their vineyard. Beaulieu. BV. One of the most storied names
                in American wine.
            </p>
            <p>
                De Latour was, by every account, a man of uncommon foresight. He watched the
                temperance movement gather momentum for years before the 18th Amendment passed,
                and he began cultivating a relationship with the Catholic Church well before most
                winemakers had started to worry. His wife Fernande had strong ties to the diocese
                of San Francisco, and de Latour used those connections deliberately and
                intelligently. By 1908, Beaulieu was already producing wine for church use. By
                the time Prohibition struck in 1920, de Latour had secured a nationwide permit
                allowing him to produce altar wines for the Church across the country.
            </p>
            <p>
                While neighboring vineyards shuttered and sold their equipment at whatever price
                they could get, de Latour did the opposite. He bought it and expanded. He acquired
                failing wineries for pennies on the dollar, shipping his barrels marked{" "}
                {"\u201C"}FLOUR{"\u201D"} to protect them in transit, and by the end of Prohibition
                his business had grown fourfold. Beaulieu remained the national supplier of
                sacramental wines to the Catholic Church until 1978. The winery that survived on
                holy wine went on to produce some of the most celebrated Cabernet Sauvignon in
                American history.
            </p>
            <p>
                Today,{" "}
                <a href="https://www.bvwines.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Beaulieu Vineyard</a>{" "}
                sits at 1960 St. Helena Highway in Rutherford, Napa Valley. Tasting is available
                by appointment, and the Georges de Latour Private Reserve Cabernet, still bearing
                the founder{"\u2019"}s name, remains one of the benchmarks of Napa winemaking.
            </p>

            <figure className="my-10">
                <Image
                    src="/images/Napa.png"
                    alt="Scenic view of Napa Valley vineyards"
                    width={800}
                    height={500}
                    className="rounded-xl w-full object-cover shadow-lg border border-rose-900/30"
                />
                <figcaption className="text-center text-sm text-gray-400 mt-3 italic">
                    The rolling hills of Napa Valley, where some historic vines survived Prohibition.
                </figcaption>
            </figure>

            <h2>The Saint and the Speakeasy</h2>
            <p>
                On the opposite end of California, in Los Angeles, an Italian immigrant named
                Santo Cambianica founded the San Antonio Winery in 1917, three years before
                Prohibition began. At the time, there were roughly 90 wineries in the Los Angeles
                area. When Prohibition ended in 1933, six were still standing.
            </p>
            <p>
                Cambianica{"\u2019"}s survival strategy was not complicated. His winery was named
                for a Catholic saint. He was himself a devout Catholic with deep ties to the local
                parish. When Prohibition arrived, the Archdiocese of Los Angeles needed a reliable
                source of sacramental wine, and San Antonio Winery was, in name, spirit, and
                relationship, the obvious choice. The deal was struck. The winery kept making wine.
                Before Prohibition, San Antonio produced roughly 5,000 cases of red per year.
                When repeal came in 1933, that number had grown to 20,000 cases.
            </p>
            <p>
                <a href="https://www.sanantoniowinery.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">San Antonio Winery</a>{" "}
                is still operating today, and it has the remarkable distinction of being the last
                winery to operate within the city of Los Angeles. It is also the largest supplier
                of sacramental wine in the United States, continuing the practice that saved it
                over a century ago. Steve Riboli, great-nephew of the founder and longtime vice
                president of the winery, has described it simply:{" "}
                {"\u201C"}We were a faith-based company. Literally.{"\u201D"}
            </p>
            <p>
                The winery at 737 Lamar Street in Los Angeles is open for tastings and tours, and
                their story is worth an afternoon of your time.
            </p>

            <h2>The Warning Label That Winked</h2>
            <p>
                Not every winery had the foresight of de Latour or the clerical connections of
                Cambianica. Some found their survival in a different kind of creative reading of
                the law.
            </p>
            <p>
                The Volstead Act contained a provision that allowed the legal production of{" "}
                {"\u201C"}non-intoxicating{"\u201D"} fermented beverages at home, up to 200 gallons
                per household per year. The intention was to protect the vinegar and grape juice
                industries. What it actually did was create a booming market for something called
                the wine brick.
            </p>
            <p>
                <a href="https://www.beringer.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Beringer Vineyards</a>,
                founded in 1876 in St. Helena and still one of Napa{"\u2019"}s most beautiful
                estates, stayed alive during Prohibition partly through sacramental wine sales and
                partly through the wine brick trade. The Beringer Grape Brick was a block of
                concentrated grape juice sold as {"\u201C"}non-alcoholic juice production.{"\u201D"}{" "}
                Each brick came with printed instructions that included a remarkable warning:{" "}
                {"\u201C"}After dissolving the brick in a gallon of water, do not place the liquid
                in a jug away in the cupboard for twenty days, because then it would turn into
                wine.{"\u201D"}
            </p>
            <p>Read that again. The warning was actually the instruction manual.</p>
            <p>
                Nobody in government seemed particularly motivated to challenge the logic, and
                wine bricks sold by the millions. Varieties that could hold up to the month-long
                freight journey from California to eastern cities became the priority, which is
                part of why the thick-skinned, deeply colored Alicante Bouschet grape became oddly
                dominant during Prohibition. The delicate Pinot Noir and Chardonnay that California
                would later build its reputation on could not survive the trip as a brick. Alicante
                Bouschet could. This is one of the quieter, stranger ways Prohibition shaped
                American wine for decades after it ended, by putting inferior but durable grapes
                in the ground at the exact moment the industry{"\u2019"}s future direction was being
                decided.
            </p>
            <p>
                Beringer is now one of the most visited wine estates in Napa Valley, offering
                tastings in their 1876 Rhine House mansion.
            </p>

            <figure className="my-10">
                <Image
                    src="/images/Vineyard2.png"
                    alt="A vineyard with ripe grapes ready for harvest"
                    width={800}
                    height={500}
                    className="rounded-xl w-full object-cover shadow-lg border border-rose-900/30"
                />
                <figcaption className="text-center text-sm text-gray-400 mt-3 italic">
                    The thick-skinned Alicante Bouschet grape became dominant during Prohibition due to its durability.
                </figcaption>
            </figure>

            <h2>Irish Rabbis and the Fraud That Grew Too Large to Hide</h2>
            <p>
                The sacramental wine loophole was not exclusive to Catholics. The Volstead Act
                extended the same exemption to Jewish religious practice, where wine plays an
                equally essential ceremonial role. Local synagogues were permitted to obtain wine
                for sacramental purposes, and rabbis were authorized to certify that need.
            </p>
            <p>
                The problem was definitional. Catholic priests had institutional structure. A
                rabbi, in the early 20th century in America, was anyone who said they were a
                rabbi. And once that became clear to the general public, the results were
                predictably creative.
            </p>
            <p>
                Jewish congregations in San Francisco grew from roughly 80 families to 900
                families between 1920 and 1921 alone. Synagogue membership across the country
                exploded as ordinary citizens discovered that belonging to a congregation created
                access to wine. The number of practicing rabbis grew by a similar factor. A
                Senate committee investigation in 1926 found that hundreds of thousands of gallons
                of wine were being distributed by what its counsel described, memorably, as{" "}
                {"\u201C"}fictitious rabbis.{"\u201D"} The committee{"\u2019"}s report noted, to the
                apparent bewilderment of investigators, {"\u201C"}There are Irish rabbis and rabbis
                of every description.{"\u201D"}
            </p>
            <p>
                The Conference of Jewish Organizations formally condemned the practice and vowed
                to suppress the activity of {"\u201C"}pseudo rabbis,{"\u201D"} but the fraud had
                grown too entrenched and too useful to contain. By the time the government cracked
                down with tighter regulations on sacramental wine permits, the legitimate
                religious communities had been penalized at least as much as the fraudulent ones.
                It was, as Prohibition tended to be, a solution that created more problems than
                it addressed.
            </p>

            <h2>Al Capone{"\u2019"}s Wine Supplier</h2>
            <p>
                Not every winery that kept its lights on during Prohibition was doing so entirely
                within the law, and nowhere is this illustrated more vividly than at Pope Valley
                Winery in the northeastern hills of Napa.
            </p>
            <p>
                <a href="https://www.popevalleywinery.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Pope Valley Winery</a>{" "}
                was founded in 1897 as the Burgundy Winery and Olive Oil Factory by a Swiss
                farmer named Ed Haus. His son Sam, during his military service in the early 1900s,
                befriended a young man from Chicago. That connection, once Prohibition arrived,
                became the winery{"\u2019"}s lifeline. The Haus family began quietly producing wine
                and transporting it by horse cart down to Napa, where it boarded a train to
                Chicago to be served in Al Capone{"\u2019"}s speakeasies and brothels.
            </p>
            <p>
                The winery officially appeared to have ceased production during Prohibition, which
                made it somewhat easier to explain why they were able to reopen so swiftly once
                repeal came. Nobody asked too many questions. The underground railroad of
                California wine flowing to Capone{"\u2019"}s Chicago operations was one of the
                better-kept open secrets of the Prohibition era, until it wasn{"\u2019"}t, at which
                point the family decided the risk was no longer worth the reward and quietly
                stopped.
            </p>
            <p>
                Pope Valley Winery still operates today in the quiet hills northeast of Napa. It
                is a small, unassuming place, and all the better for it. The Capone connection is
                not heavily marketed but is not exactly hidden either.
            </p>

            <h2>America{"\u2019"}s Oldest Winery and the 500,000 Bottles It Was Waiting to Open</h2>
            <p>
                Far from California, in the Hudson Valley of New York, the oldest continually
                operating winery in the United States was playing its own long game.
            </p>
            <p>
                <a href="https://www.brotherhood-winery.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Brotherhood Winery</a>{" "}
                in Washingtonville, New York, was founded by a French Huguenot named Jean Jaques,
                who dug his first underground cellars in 1839. Those cellars still exist, hand-cut
                into the rock beneath the property, and they are still in use today. Brotherhood
                survived Prohibition the same way many of its California counterparts did, by
                pivoting to sacramental and medicinal wines under new ownership. What makes their
                Prohibition story particularly satisfying is its ending.
            </p>
            <p>
                When Prohibition was repealed on December 5, 1933, Brotherhood released its stock
                of 1915 champagne, wines that had been cellared quietly for nearly two decades,
                waiting. The number was approximately 500,000 bottles. Imagine the corks being
                pulled on that particular day, all at once, in the stone cellars beneath the
                Hudson Valley hillside.
            </p>
            <p>
                The winery{"\u2019"}s recorded history notes, with evident amusement, that the
                clergy population in the Washingtonville area grew substantially during the
                thirteen years of Prohibition. They don{"\u2019"}t say exactly how substantially,
                but the implication is clear enough.
            </p>
            <p>
                Brotherhood claims another distinction worth noting: the Farrell family, who took
                ownership during Prohibition and guided the winery out the other side, are credited
                with essentially inventing wine tourism as an American concept, beginning to offer
                visitor facilities and tours in the postwar era before the practice was common
                anywhere.
            </p>
            <p>
                Brotherhood Winery at 100 Brotherhood Plaza Drive in Washingtonville, New York,
                is open for tours and tastings year-round. Their underground cellars alone are
                worth the trip.
            </p>

            <h2>What Prohibition Left Behind</h2>
            <p>
                When repeal finally came in December 1933, the damage to American wine was not
                immediately visible but proved lasting. Of the 713 California wineries that
                existed in 1920, fewer than 200 survived. The expertise that had been accumulated
                over decades walked out the door with the winemakers who found other professions
                and never came back. The vineyards that produced Cabernet Sauvignon, Pinot Noir,
                and Chardonnay had largely been ripped out and replaced with hardier, less
                distinguished varieties. The state that Prohibition left California{"\u2019"}s wine
                country in {"\u2014"} total hectares of Cabernet Sauvignon below 325 acres,
                Chardonnay down to barely 120 acres {"\u2014"} made the rebuilding process a
                matter not of years but of generations.
            </p>
            <p>
                The quality wines California eventually produced, the ones that would stun French
                judges at a blind tasting in Paris in 1976, were built on the slow, painstaking
                replanting of what Prohibition had destroyed. The winemakers who made that
                possible were working, often without realizing it, to finish what a Frenchman
                named Georges de Latour had started in Rutherford in 1900, the quiet, persistent
                belief that California could make wine worth taking seriously.
            </p>
            <p>
                He was right, of course. It just took a lot longer than it should have. And it
                required a fair number of people to become, briefly and creatively, men of the
                cloth.
            </p>

            <h2>Planning Your Prohibition Wine Trail</h2>
            <p>
                Several of the wineries that survived this era are still open and deeply worth
                visiting. A few suggestions for building your own pilgrimage.
            </p>
            <p>
                <strong>Napa Valley</strong> is the natural anchor, with{" "}
                <a href="https://www.bvwines.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Beaulieu Vineyard</a>{" "}
                in Rutherford and the{" "}
                <a href="https://www.beringer.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Beringer Rhine House</a>{" "}
                in St. Helena both offering historic settings alongside serious wine. Allow at
                least a full day. The valley is compact but the tasting rooms are numerous, so
                pace yourself. Summer weekends are crowded. Spring and fall weekdays are the sweet
                spot.
            </p>
            <p>
                <strong>Los Angeles</strong> often surprises visitors who don{"\u2019"}t know{" "}
                <a href="https://www.sanantoniowinery.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">San Antonio Winery</a>{" "}
                exists. Tucked into an industrial neighborhood in Lincoln Heights, it is the most
                improbable but most historically resonant stop on any Southern California wine
                itinerary. They offer tours that walk through the winery{"\u2019"}s full history,
                including the Prohibition years.
            </p>
            <p>
                <strong>Hudson Valley, New York</strong> is anchored by{" "}
                <a href="https://www.brotherhood-winery.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Brotherhood Winery</a>{" "}
                and is increasingly surrounded by a genuine regional wine scene. The underground
                cellars at Brotherhood are among the most atmospheric spaces in American wine, and
                the train from New York Penn Station to Salisbury Mills-Cornwall puts you within a
                short drive of the property. Allow a weekend and explore the broader Hudson Valley
                wine trail while you{"\u2019"}re there.
            </p>

            <div className="my-10 text-center bg-[#4a091e]/50 border border-rose-900/50 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-rose-100 mb-4 mt-0">Taste the History</h3>
                <p className="text-rose-200/90 mb-6 max-w-lg mx-auto">
                    Ready to explore these legendary vineyards yourself? Discover the best exclusive tastings and guided tours in the region.
                </p>
                <a
                    href="https://www.viator.com/Napa-and-Sonoma/d914-ttd?pid=P00291237&mcid=42383&medium=link&campaign=Napa"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center bg-rose-700 hover:bg-rose-600 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-rose-900/50 hover:-translate-y-0.5 no-underline"
                >
                    Book Napa & Sonoma Tours on Viator
                </a>
            </div>

            <hr />

            <p className="text-sm text-slate-500 italic">
                Tasting room hours and reservation requirements change seasonally. Always confirm
                directly with the winery before visiting. Featured wineries:{" "}
                <a href="https://www.bvwines.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Beaulieu Vineyard</a>,{" "}
                <a href="https://www.sanantoniowinery.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">San Antonio Winery</a>,{" "}
                <a href="https://www.beringer.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Beringer Vineyards</a>,{" "}
                <a href="https://www.popevalleywinery.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Pope Valley Winery</a>,{" "}
                <a href="https://www.brotherhood-winery.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Brotherhood Winery</a>.
            </p>
        </div>
    );
}

function texasBbqContent(): ReactNode {
    return (
        <div className="prose max-w-none prose-headings:text-slate-900 prose-p:text-slate-800 prose-a:text-blue-700 prose-a:underline hover:prose-a:text-blue-800 prose-strong:text-slate-900 prose-p:leading-relaxed">
            <p className="text-sm text-amber-500 font-medium uppercase tracking-wide">
                Fork & Wander | Central Texas
            </p>

            <p>
                Before there was a restaurant, before there was a pit, before there was even a
                menu, there was a German butcher in Central Texas with a problem. Meat that
                didn{"\u2019"}t sell by the end of the week would spoil. So he smoked it. He smoked
                it low, over post oak wood, with salt and black pepper and nothing else, because
                that was the tradition he brought from the old country. He wrapped what came off
                the fire in butcher paper and sold it to whoever came through the door.
            </p>
            <p>
                The Black and Hispanic cotton pickers who worked the surrounding fields were his
                best customers. They ate it standing up, off the paper, with pickles and crackers
                grabbed from the shelves. No sauce. No ceremony. Just fire and time and meat.
            </p>
            <p>
                That was the 1880s. The German and Czech immigrants who settled Central Texas
                during the mid-19th century established what would become the pit barbecue
                tradition along the Chisholm Trail in Lockhart, Luling, and Taylor. What began as
                a practical solution to refrigeration is now the most influential barbecue style
                in the world. People fly from London, Sydney, and Tokyo to eat it. They stand in
                line for five hours in Texas summer heat for a plate of it. They debate its finer
                points with the kind of intensity normally reserved for religion and football.
            </p>
            <p>
                This road trip exists because that level of devotion deserves to be understood
                from the inside. Three days. Five stops. A few hundred miles of Texas Hill Country
                and Blackland Prairie. And more smoke in your clothes than you{"\u2019"}ll get out
                in a single wash.
            </p>

            <h2>The Philosophy, Before the Food</h2>
            <p>
                Central Texas barbecue has a defining idea behind it, and understanding it makes
                everything taste better.
            </p>
            <p>
                The philosophy is restraint. Meat was seasoned minimally, usually just salt and
                black pepper, to showcase quality and technique rather than mask flaws. It was
                cooked low and slow over indirect heat using post oak, which burns cleanly without
                overpowering beef. No marinades. No rubs built from a dozen spices. No sauce
                slathered over everything to hide what{"\u2019"}s underneath. The smoke and the meat
                and the patience are supposed to be enough, and when it{"\u2019"}s done right, they
                are more than enough.
            </p>
            <p>
                The butcher logic behind it meant selling meat by weight, wrapped in red butcher
                paper, with sides and bread picked up along the line. That presentation persists
                in the classic joints today. You don{"\u2019"}t sit down and order from a waiter.
                You walk a cafeteria line, tell the person behind the counter what you want, watch
                them slice it in front of you, and carry it to a communal table on a tray or a
                sheet of paper. It is profoundly unpretentious, and that is precisely the point.
            </p>
            <p>
                Brisket is the test. It is the hardest cut to smoke correctly, the one that
                separates the serious joints from the casual ones. A properly smoked brisket has a
                dark, peppery bark on the outside, a pink smoke ring just beneath, and a center so
                soft and moist it barely holds together when you lift it. The fat renders
                completely into the meat. A bad brisket is dry, grey, and slightly bitter. Most
                briskets are bad brisket. The places on this trip do not serve bad brisket.
            </p>

            <figure className="my-10">
                <Image
                    src="/images/BBQ.png"
                    alt="A spread of slow-smoked Texas barbecue on butcher paper"
                    width={800}
                    height={500}
                    className="rounded-xl w-full object-cover shadow-sm border-2 border-black"
                />
                <figcaption className="text-center text-sm text-slate-800 mt-3 italic">
                    The reward for patience: perfectly smoked brisket and sausage served on butcher paper.
                </figcaption>
            </figure>

            <h2>Stop One: Austin {"\u2014"} Franklin Barbecue</h2>
            <p>
                <a href="https://franklinbbq.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Franklin Barbecue</a>{" "}
                at 900 E. 11th Street is where this road trip begins, not because it{"\u2019"}s the
                oldest or most historically significant stop, but because it is the conversation
                everyone is having right now, and that conversation is worth joining.
            </p>
            <p>
                Aaron Franklin opened a food trailer in 2009 in a vacant lot behind his friend
                {"\u2019"}s coffee roastery, and his following grew so fast that in less than a year
                it could be compared to some of the oldest joints in Texas. He moved to a
                brick-and-mortar location in East Austin in 2011. He went on to receive the James
                Beard Foundation Award for Best Chef in 2015, the first pitmaster ever to win it,
                along with recognition from Texas Monthly and Bon Appetit as the best barbecue in
                America.
            </p>
            <p>
                Anthony Bourdain waited in line and ate here and said it was the finest brisket he
                had ever had. President Obama came and skipped the line. Most of us cannot skip
                the line.
            </p>
            <p>
                Franklin is open Tuesday through Sunday from 11 a.m. until sold out, which usually
                happens around noon to 2:30 p.m. People line up as early as 6:30 a.m. The wait
                runs between two and five hours depending on the day and season. Weekdays are
                shorter. Weekends during events like SXSW or Austin City Limits are the longest.
                Bring a camp chair, bring something to read, and bring company if you have it.
                The line has its own culture: strangers share food, swap stories about other
                BBQ pilgrimage destinations they{"\u2019"}ve made, and form the kind of easy
                camaraderie that only happens when everyone around you is there for the exact same
                reason.
            </p>
            <p>
                For those who genuinely cannot devote half a day to lunch, Franklin offers online
                pre-orders with a five-pound minimum, allowing you to skip the line entirely and
                pick up at a designated time. If you{"\u2019"}re traveling as a couple, split an
                order with another pair to hit the minimum.
            </p>
            <p>
                What to order: fatty brisket, beef rib if it{"\u2019"}s on that day, and the
                jalapeño cheddar sausage. The turkey surprises people. Get a slice of pie for
                dessert.
            </p>

            <h2>Stop Two: Lexington {"\u2014"} Snow{"\u2019"}s BBQ</h2>
            <p>
                If Franklin is the current champion,{" "}
                <a href="https://snowsbbq.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Snow{"\u2019"}s</a>{" "}
                is the legend who held the belt before him, and the story behind it is the better
                one.
            </p>
            <p>
                Snow{"\u2019"}s BBQ is open only on Saturdays, from 8 a.m. until they run out of
                meat, often around noon. The unusual hours were originally kept to take advantage
                of a weekly Saturday livestock auction nearby. It sits in Lexington, a town of
                roughly 1,100 people, about 50 miles east of Austin. Texas Monthly named it the
                number-one barbecue joint in Texas in 2008 and again in 2017, and the New Yorker
                declared it the best Texas barbecue in the world.
            </p>
            <p>
                The reason people come is Tootsie Tomanetz. She is the pitmaster, a woman who
                has been smoking meat in Central Texas since 1967, who arrives at the restaurant
                every Saturday morning at 3 a.m. to start the fires, wraps the brisket in butcher
                paper around 6 or 7 a.m., and tends it until service begins. During the week, she
                works as a custodian at a school in Giddings. On Saturday mornings, she is the
                best barbecue cook in Texas.
            </p>
            <p>
                She was featured in the first episode of Netflix{"\u2019"}s Chef{"\u2019"}s Table:
                BBQ in 2020, which brought an entirely new wave of devotees to Lexington. People
                now arrive before dawn. Some are there by 4 a.m. to secure a spot.
            </p>
            <p>
                The brisket at Snow{"\u2019"}s is softer and more yielding than Franklin
                {"\u2019"}s. The pork steak, two inches thick, is its own argument. Get the banana
                pudding.
            </p>
            <p>
                Build your Saturday itinerary around Snow{"\u2019"}s: arrive no later than 6 a.m.
                to guarantee meat, eat breakfast there, and then continue south toward Lockhart
                while everything else is still digesting.
            </p>

            <h2>Stop Three: Lockhart {"\u2014"} The Barbecue Capital of Texas</h2>
            <p>
                The Texas state legislature officially named Lockhart the Barbecue Capital of
                Texas in 2003. That is not an honorary title. Lockhart has three of the most
                important BBQ joints in the state within a few blocks of each other, and each
                one represents a distinct lineage.
            </p>
            <p>
                <a href="https://kreuzmarket.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Kreuz Market</a>{" "}
                (619 N. Colorado St.) is the origin point. Charles Kreuz Sr. cemented the
                no-sauce, meat-first ethos that defines Central Texas barbecue, a legacy
                influencing generations of pitmasters. In 1999, the operation moved to a larger
                building after a family dispute. The new facility is enormous, with high ceilings,
                long communal tables, and pits that can be viewed through the serving line. They
                still don{"\u2019"}t offer forks. They still don{"\u2019"}t offer sauce. Those are
                not oversights.
            </p>
            <p>
                <a href="https://smittysmarket.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Smitty{"\u2019"}s Market</a>{" "}
                (208 S. Commerce St.) operates in the original Kreuz building, which means it has
                the original pits, including one that has been burning continuously for over a
                century. Walking into the pit room at Smitty{"\u2019"}s is unlike anything else on
                this trip. The walls are black with decades of accumulated smoke. The heat comes
                off the pits in visible waves. It smells like the purest expression of what
                Central Texas BBQ is, before any of it reaches your plate.
            </p>
            <p>
                <a href="https://blacksbbq.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Black{"\u2019"}s Barbecue</a>{" "}
                (215 N. Main St.) has been family-owned since 1932, making it the oldest
                continuously family-owned barbecue restaurant in Texas. The beef ribs at Black
                {"\u2019"}s are genuinely stunning. Order them if they{"\u2019"}re available.
            </p>
            <p>
                The honest approach in Lockhart is to eat small portions across all three. This is
                easier said than done, but it{"\u2019"}s the only way to give each place its due.
                Split plates if you{"\u2019"}re traveling with a partner. Pace yourself.
            </p>

            <figure className="my-10">
                <Image
                    src="/images/Smokehouse.png"
                    alt="A rustic Texas smokehouse with plumes of oak smoke"
                    width={800}
                    height={500}
                    className="rounded-xl w-full object-cover shadow-sm border-2 border-black"
                />
                <figcaption className="text-center text-sm text-slate-800 mt-3 italic">
                    The unmistakable sight (and smell) of an authentic Central Texas smokehouse at work.
                </figcaption>
            </figure>

            <h2>Stop Four: Luling {"\u2014"} City Market</h2>
            <p>
                Twenty miles south of Lockhart on Highway 183, Luling is a small oil town that
                does not look, from the outside, like a destination for serious food. The main
                street has pump jacks shaped like cartoon characters. The watermelon capital of
                Texas sign is still up from the last festival. City Market is behind a door that
                looks like it opens into a storage room.
            </p>
            <p>
                It does, in a sense. City Market at 633 E. Davis St. is a single room with a pit
                room attached, where the smoke comes through a pass-through window and the meat is
                sliced right in front of you. The sausage here, coarse and peppery with a snappy
                natural casing, is considered by many serious eaters to be the best in the state.
                The brisket is excellent. The dining room has long communal tables and no pretense
                whatsoever.
            </p>
            <p>
                What Luling offers that Lockhart doesn{"\u2019"}t is quiet. By the time you
                {"\u2019"}ve been through Kreuz, Smitty{"\u2019"}s, and Black{"\u2019"}s, the
                relative calm of City Market, its smaller crowds and deliberate unhurriedness,
                feels like the right place to slow down and actually think about what you
                {"\u2019"}ve been tasting.
            </p>
            <p>
                City Market is open Monday through Saturday. Get there before 1 p.m. to avoid
                running into the sold-out window on the sausage.
            </p>

            <h2>Stop Five: Taylor {"\u2014"} Louie Mueller Barbecue</h2>
            <p>
                The road trip ends about an hour north of Austin in Taylor, at{" "}
                <a href="https://louiemuellerbarbecue.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Louie Mueller Barbecue</a>{" "}
                on 206 W. 2nd Street, which may be the single most atmospheric BBQ joint in
                Texas.
            </p>
            <p>
                The restaurant operates in a former gymnasium. The ceilings are high. The walls
                are covered in faded pennants and old photos, and everything {"\u2014"} the walls,
                the ceiling, the tables {"\u2014"} carries the deep amber-brown patina of decades
                of oak smoke. It is one of the few places in Texas where the room itself tells as
                much of the story as the food does.
            </p>
            <p>
                Wayne Mueller, Louie{"\u2019"}s grandson, runs the operation now. The beef rib is
                the signature. It is enormous, the size of a small roast, covered in a black crust
                of pepper and smoke, yielding to the bone when you pull at it. It is the kind of
                thing that makes you understand, viscerally, why people plan entire trips around a
                single meal.
            </p>
            <p>Arrive by 11 a.m. The beef ribs sell out.</p>

            <h2>The Logistics</h2>
            <p>
                This trip works best over three days, with Austin as a base for the first night
                and a hotel in Lockhart or Luling for the second. The full loop from Austin covers
                roughly 200 miles round-trip.
            </p>
            <p>
                The critical timing consideration is Snow{"\u2019"}s, which is Saturday-only. Build
                the entire trip around whichever Saturday works for you and work backward. Snow
                {"\u2019"}s on Saturday morning, Lockhart in the afternoon, Luling the following
                morning, Taylor on the way back into Austin. Franklin can be the Wednesday or
                Thursday before, giving your stomach time to reset.
            </p>
            <p>
                Pack antacids. Bring layers in winter. Wear clothes you don{"\u2019"}t mind
                smelling like smoke for the rest of the trip, because you will. Drink water and
                pace yourself. Nobody wins at Texas BBQ by rushing.
            </p>
            <p>
                One more thing worth knowing: at every stop on this trip, from the line at Franklin
                to the pit room at Smitty{"\u2019"}s to the communal tables at City Market, you
                will end up talking to strangers. That is not incidental to the experience. It is
                the experience. Texas barbecue has always been community food, eaten standing up
                off butcher paper, with whoever happened to be there that day. Show up with an
                appetite and an open table.
            </p>

            <div className="my-12 p-1 border-2 border-black rounded-2xl bg-white/30 shadow-sm relative overflow-hidden group">
                <a
                    href="https://www.viator.com/tours/Austin/Locals-Know-BBQ-Food-Tour-Austin-Texas/d5021-5580780P1?pid=P00291237&mcid=42383&medium=link&campaign=BBQ"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block"
                >
                    <figure className="m-0 relative">
                        <Image
                            src="/images/Brisket.png"
                            alt="Book a Locals Know BBQ Food Tour in Austin"
                            width={800}
                            height={500}
                            className="rounded-xl w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] border-2 border-black"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 border-2 border-black">
                            <span className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-1">Authentic Experience</span>
                            <span className="text-white text-2xl font-serif">Book the Locals Know BBQ Food Tour on Viator &rarr;</span>
                        </div>
                    </figure>
                </a>
            </div>

            <hr />

            <p className="text-sm text-slate-500 italic">
                <a href="https://franklinbbq.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Franklin Barbecue</a>:
                900 E. 11th St., Austin, Tues{"\u2013"}Sun until sold out.{" "}
                <a href="https://snowsbbq.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Snow{"\u2019"}s BBQ</a>:
                516 Main St., Lexington, Saturdays 8 a.m. until sold out.{" "}
                <a href="https://kreuzmarket.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Kreuz Market</a>:
                619 N. Colorado St., Lockhart.{" "}
                <a href="https://smittysmarket.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Smitty{"\u2019"}s Market</a>:
                208 S. Commerce St., Lockhart.{" "}
                <a href="https://blacksbbq.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Black{"\u2019"}s Barbecue</a>:
                215 N. Main St., Lockhart.{" "}
                City Market: 633 E. Davis St., Luling.{" "}
                <a href="https://louiemuellerbarbecue.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Louie Mueller Barbecue</a>:
                206 W. 2nd St., Taylor.
            </p>
        </div>
    );
}
