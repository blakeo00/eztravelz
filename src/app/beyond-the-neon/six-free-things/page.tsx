import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarWidgets from "@/components/SidebarWidgets";
import { getCategoryWidgets } from "@/data/widgets";

export const metadata: Metadata = {
    title: "Six or More Free (Or Nearly Free) Things to Do in Las Vegas | EZtravelZ",
    description: "Discover hidden gems and local favorites in Las Vegas that are completely free or cost almost nothing. From Gilcrease Orchard to the Old Mormon Fort and beyond.",
    openGraph: {
        title: "Six or More Free (Or Nearly Free) Things to Do in Las Vegas",
    }
};

export default function SixFreeThingsArticle() {
    return (
        <div className="min-h-screen flex flex-col relative bg-[#fff0d4]">
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow">
                    {/* Hero */}
                    <section className="relative text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
                        <Image
                            src="/images/Downtown.jpg"
                            alt="Downtown Las Vegas"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

                        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <span className="inline-block text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 bg-[#2c4875]">
                                Beyond the Neon
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 drop-shadow-lg hero-title text-[#fff0d4]">
                                Six or More Free (Or Nearly Free) Things to Do in Las Vegas, That You Need to Know!
                            </h1>
                            <time className="text-white/70 text-sm">
                                {new Date().toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </time>
                        </div>
                    </section>

                    {/* Article body */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                <div className="backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 bg-[#ffffff] text-[#37507a] border-2 border-[#37507a]/20 shadow-[0_0_30px_rgba(44,72,117,0.25)] prose prose-lg max-w-none prose-headings:text-[#37507a] prose-p:text-[#37507a] prose-a:text-blue-600 hover:prose-a:text-[#37507a] prose-strong:text-[#37507a] prose-hr:border-[#37507a]/20">
                                    <p className="lead text-xl text-[#37507a] font-medium mb-8">
                                        Most people come to Las Vegas and never leave a quarter-mile radius of whatever casino hotel they&apos;re staying in. That&apos;s fine. The Strip delivers exactly what it promises. But if you live here, or if you&apos;re the kind of traveler who wants to see what a city actually is beneath the lights, Las Vegas has a version of itself that most visitors never find. These places are where locals actually enjoy spending their time. None of them will cost you much. A couple of them won&apos;t cost you anything at all.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-12 mb-6 text-[#37507a]">A Working Orchard and an Animal Sanctuary, Side by Side in the Desert</h2>

                                    <p>
                                        The single most surprising thing about Las Vegas, in my experience, is that you can spend a morning picking your own peaches from a tree while a rescued cockatoo tries to talk to you from across the street.
                                    </p>

                                    <figure className="my-10">
                                        <Image
                                            src="/images/Peaches.jpeg"
                                            alt="Peaches at Gilcrease Orchard"
                                            width={1200}
                                            height={675}
                                            className="w-full rounded-2xl shadow-xl"
                                        />
                                    </figure>

                                    <p>
                                        <a href="https://thegilcreaseorchard.org/" target="_blank" rel="noopener noreferrer">Gilcrease Orchard</a> sits in the northwest corner of the Las Vegas Valley at 7800 N. Tenaya Way, and it has been a working farm since the Gilcrease family put down roots here in 1920. Over a hundred years later, it spans sixty acres with more than eight thousand fruit trees, including apple, peach, pear, and pomegranate, plus rows of seasonal vegetables you can pick yourself and pay for by the pound. The apple cider is made on site from their own fruit and the donuts that go with it are not the kind of thing you forget quickly. Entry runs around eight dollars on peak days, which is genuinely the best eight dollars you&apos;ll spend in this city. Check their <a href="https://thegilcreaseorchard.org/" target="_blank" rel="noopener noreferrer">website</a> before you go, the orchard operates on a seasonal schedule and what&apos;s ready to pick changes throughout the year.
                                    </p>

                                    <p>
                                        Directly across the street is <a href="https://gilcrease.community/" target="_blank" rel="noopener noreferrer">Gilcrease Nature Sanctuary</a> at 8103 Racel St., a nonprofit rescue that has been giving permanent homes to abandoned and surrendered animals since 1979. More than five hundred animals live here, including parrots, cockatoos, African greys, peacocks, goats, miniature horses, alpacas, emus, ostriches, and large tortoises. Tours run Wednesday through Sunday and cost between $5 and $10 per person, with $5 Wednesdays for all ages, children under 3 are free. The cockatoo room alone is worth the trip. Those birds will talk to you, argue with you, and remember you better than most people you meet in a casino. If interested they always are looking for volunteers. Plan to spend a half-day between the two. Orchard in the morning while it&apos;s cool, sanctuary after. Bring water, wear closed-toe shoes at the orchard, and go on a weekday if you can. And when you&apos;re done, Floyd Lamb Park is less than ten minutes away, which means the most unexpected day trip in Las Vegas is already mapped out for you before you leave the northwest valley.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-12 mb-6 text-[#37507a]">Floyd Lamb Park, Where the Peacocks Don&apos;t Care Who You Are</h2>

                                    <p>
                                        From the Gilcrease properties, it&apos;s a short drive south to one of the most genuinely peaceful corners of the Las Vegas Valley. About twenty minutes northwest of the Strip, <a href="https://www.lasvegasnevada.gov/Residents/Parks-Facilities/Floyd-Lamb-Park" target="_blank" rel="noopener noreferrer">Floyd Lamb Park</a> at Tule Springs is where Las Vegas locals go when they need to remember the city has trees. The park surrounds a series of spring-fed ponds. The ponds contain species like rainbow trout, catfish, and bass, and anglers must comply with state regulations, including a limit of three fish per person, and a valid Nevada state fishing license is required to fish in the stocked ponds at Floyd Lamb Park. Peacocks that wander the grounds have been here long enough that they&apos;ve completely lost interest in being remarkable. They&apos;ll walk across the path in front of your car, settle onto a picnic table beside you, and regard you with the particular indifference of an animal that knows it lives somewhere beautiful. The Las Vegas Astronomical Society periodically holds stargazing events free of charge with a free park entry. It&apos;s one of the many family fun events that the park hosts.
                                    </p>

                                    <figure className="my-10">
                                        <Image
                                            src="/images/Peacock.jpg"
                                            alt="Peacock at Floyd Lamb Park"
                                            width={1200}
                                            height={675}
                                            className="w-full rounded-2xl shadow-xl"
                                        />
                                    </figure>

                                    <p>
                                        What most visitors don&apos;t know is that the ground beneath this park holds something extraordinary. Tule Springs was once a Pleistocene wetland, and the fossils recovered here include mammoths, camels, horses, and giant ground sloths that roamed this valley thousands of years ago. The park itself is peaceful and genuinely lovely, with cottonwood trees and walking paths that feel nothing like the city surrounding them. There is a $6 per vehicle entrance fee. Free Entry Days: May 15, 2026, July 4, 2026, September 12, 2026, September 26, 2026, October 30, 2026, November 26, 2026, and December 25, 2026. It&apos;s the kind of place you come for an hour and stay for three.
                                    </p>

                                    <p>
                                        Put these three together and you have a complete day that costs less than thirty dollars total, covers more genuine Las Vegas history than most guided tours, and involves absolutely zero slot machines.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-12 mb-6 text-[#37507a]">Container Park, Fergusons, and the Arts District — A Neighborhood Worth a Full Day and Night</h2>

                                    <p>
                                        The Fremont East neighborhood and the neighboring Arts District have been quietly becoming one of the more genuinely interesting parts of Las Vegas for the better part of a decade, and <a href="https://downtowncontainerpark.com/" target="_blank" rel="noopener noreferrer">Container Park</a> at 707 Fremont St. is the anchor of that transformation. The complex is built entirely from repurposed shipping containers and is free to enter. The praying mantis sculpture out front shoots actual fire on weekend evenings, which is exactly as good as it sounds.
                                    </p>

                                    <figure className="my-10">
                                        <Image
                                            src="/images/PM2.jpg"
                                            alt="Praying Mantis Sculpture at Container Park"
                                            width={1200}
                                            height={675}
                                            className="w-full rounded-2xl shadow-xl"
                                        />
                                    </figure>

                                    <p>
                                        Inside you&apos;ll find local shops, food vendors, a treehouse play area for kids, and an outdoor stage that hosts live music on weekends. The surrounding Fremont East corridor has great bars, fabulous restaurants, and artistic murals that go for blocks. Close by is another shopping and event destination, <a href="https://www.fergusonsdowntown.com/" target="_blank" rel="noopener noreferrer">Fergusons Downtown</a> at 1028 Fremont St. As they proclaim on their website, &ldquo;From the shops of local makers to restaurants and enchanting green space, Fergusons is a place where the community can connect, shop, eat, drink, stay, work, gather and explore.&rdquo; The original Fergusons Motel was built in the 1940s. Rather than tear it down, someone had the good sense to revitalize it into a community-centered block of locally owned businesses that now includes a local coffee roaster and cafe, chef-driven restaurants, vintage boutiques, a curated plant store, a crystal shop, a photographer&apos;s studio, kid workshops, and a rooftop space for co-working.
                                    </p>

                                    <figure className="my-10 bg-[#fff0d4]/50 p-4 rounded-2xl shadow-md border-2 border-[#37507a]/20">
                                        <Image
                                            src="/images/18a.jpg"
                                            alt="18b Arts District in Downtown Las Vegas"
                                            width={1200}
                                            height={800}
                                            className="w-full rounded-xl"
                                        />
                                        <figcaption className="text-center text-sm text-[#37507a] mt-4 font-medium italic">
                                            The thriving Arts District in Downtown Las Vegas
                                        </figcaption>
                                    </figure>

                                    <p>
                                        Down the road a bit is the <strong>18b Arts District</strong>, which takes its name from the original eighteen city blocks designated for arts and culture back in 1998 and has since grown well beyond them. In 2024 CNN called it &ldquo;the most exciting neighborhood in Las Vegas,&rdquo; while noting it remains largely unknown to tourists who spend most of their time on the Strip. The street art alleyways running through the district change constantly, with murals by local artists covering nearly every available surface, and the murals here tend to be genuinely good rather than decorative filler. You also will find a thriving mix of over 30 art galleries and studios, eclectic shops, nearly 40 restaurants and cafés, and more than 15 breweries and bars that bring the area to life. On the first Friday of every month the broader Arts District hosts First Friday, a street festival with local artists, vendors, and live music that is one of the genuinely great free nights out in Las Vegas and draws a crowd that is almost entirely local. It&apos;s a neighborhood that built itself into something worth visiting, and it still has the energy of a place that hasn&apos;t finished becoming itself yet. For a staycation, experience <a href="https://www.marriott.com/hotels/travel/lastp-the-english-hotel-las-vegas-a-tribute-portfolio-hotel/" target="_blank" rel="noopener noreferrer">The ENGLISH Hotel, Las Vegas, a Tribute Portfolio Hotel</a>, 21 and over, while enjoying First Friday and the great venues the Arts District has to offer.
                                    </p>

                                    <p>
                                        Getting around the area is easier than it used to be. The city runs a free shuttle called The Downtown Loop, fuchsia colored and hard to miss, that runs from Fremont Street through the Arts District with multiple stops. A new parking garage at Casino Center and Utah is expected to open by mid-2026 which will help considerably on busier nights. In the meantime, street parking on side streets and small lots throughout the district are findable if you arrive with a little patience. Park somewhere, put your phone away, and let the neighborhood show you what it is.
                                    </p>

                                    {/* CTA BLOCK 1 — Downtown Tour */}
                                    <div className="relative my-8 rounded-2xl bg-[#fff0d4]/50 border-2 border-[#37507a]/20 p-8 text-center shadow-lg transition-transform hover:-translate-y-1 duration-300 not-prose overflow-hidden group text-[#37507a]">
                                        <div className="relative z-10">
                                            <p className="text-xs text-[#2c4875] uppercase tracking-widest font-bold mb-2">
                                                While you&apos;re out there
                                            </p>
                                            <h3 className="text-xl font-bold text-[#37507a] mb-3 mt-0">
                                                Explore Downtown Las Vegas &amp; The Fremont Experience
                                            </h3>
                                            <p className="text-[#37507a] mb-6 max-w-2xl mx-auto font-medium">
                                                Discover incredible street art, fantastic food, and local culture on a guided tour of the Downtown and Arts District.
                                            </p>
                                            <a
                                                href="https://gyg.me/ETgD7E4R"
                                                target="_blank"
                                                rel="sponsored noopener noreferrer"
                                                className="inline-block px-8 py-3.5 rounded-full bg-[#37507a] text-white font-bold hover:bg-[#2c4875] hover:shadow-xl hover:scale-105 transition-all duration-300 no-underline"
                                            >
                                                Book Downtown Las Vegas Tour on GetYourGuide →
                                            </a>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-12 mb-6 text-[#37507a]">The Fremont Street Experience, Where the Night Has No Ceiling</h2>

                                    <figure className="my-10">
                                        <Image
                                            src="/images/Viva.jpg"
                                            alt="Fremont Street Viva Vision canopy"
                                            width={1200}
                                            height={675}
                                            className="w-full rounded-2xl shadow-xl"
                                        />
                                    </figure>

                                    <p>
                                        Let me be straightforward about something before we go any further. <a href="https://vegasexperience.com/" target="_blank" rel="noopener noreferrer">The Fremont Street Experience</a> is free to attend, genuinely spectacular, and not always appropriate for children or, frankly, for adults who prefer their evenings on the quieter side. Downtown Las Vegas after dark is loud, uninhibited, and delightfully unpredictable. Street performers work every corner. Drinks flow freely through the open-air promenade. The crowd on a Friday night is there to let loose and most of them are succeeding. If that sounds like your kind of evening, read on.
                                    </p>

                                    <p>
                                        What draws people here, and what earns its place on this list, is <a href="https://vegasexperience.com/the-canopy/" target="_blank" rel="noopener noreferrer">The Canopy</a>, officially known as Vegas&apos; Neon Sky. It stretches 1,375 feet overhead across five city blocks, suspended ninety feet above the pedestrian mall, and it is the largest LED display in the world. Every night starting at six, the lights on every building beneath it go dark, the music rises, and the entire ceiling comes alive with synchronized visuals in what the venue calls Music Reels, each one running about six minutes and paired to artists ranging from Imagine Dragons to Katy Perry to Stone Temple Pilots. Watching it for the first time, even if you&apos;ve lived in Las Vegas your whole life, is a genuine pause-and-stare moment. An open-air entertainment hub with free concerts and dazzling performances across three stages every single night. Downtown Las Vegas comes alive at Fremont Street Experience.
                                    </p>

                                    <p>
                                        Beyond the canopy, three stages run free live concerts every single night of the year covering everything from rock to country to tribute acts, and the caliber of what lands here regularly surprises people who assume free means modest. The SlotZilla zipline launches riders ninety feet above the crowd directly beneath the canopy, which costs money but is worth knowing about. The surrounding casinos — the Golden Nugget, Circa, the D — are all steps away if you want to extend the evening.
                                    </p>

                                    <p>
                                        Come after dark. Come on a weeknight if crowds aren&apos;t your thing. And if you&apos;re bringing someone who hasn&apos;t been before, don&apos;t tell them about the canopy in advance. Let them look up on their own.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-12 mb-6 text-[#37507a]">The Old Las Vegas Mormon Fort, and an Evening Worth Staying For</h2>

                                    <p>
                                        The oldest surviving structure in Nevada is a small adobe remnant. The <a href="https://parks.nv.gov/parks/old-las-vegas-mormon-fort" target="_blank" rel="noopener noreferrer">Old Las Vegas Mormon Fort</a> located at 500 E. Washington Ave. is tucked against a modern street in downtown Las Vegas, and almost no one driving past it knows what they&apos;re looking at. Built in 1855 by Mormon missionaries sent from Salt Lake City, the fort predates the Las Vegas most people know by about half a century. Archeological excavations of the fort site revealed pottery shards, stone tools and projectile points of both Anasazi and Paiute origin. A high concentration of artifacts was uncovered directly north of the northeastern fort bastion, suggesting the presence of a campsite that was intermittently used for centuries prior to the arrival of Euro-Americans. The site is a state historic park, admission costs about one dollar, and the quiet it carries in the middle of a busy city is something you have to experience to understand.
                                    </p>

                                    <figure className="my-10">
                                        <Image
                                            src="/images/Fort.jpg"
                                            alt="Old Las Vegas Mormon Fort"
                                            width={1200}
                                            height={675}
                                            className="w-full rounded-2xl shadow-xl hover:opacity-90 transition-opacity"
                                        />
                                    </figure>

                                    <p>
                                        <strong>Picnicking/Day Use:</strong> There are numerous picnic tables located within the park. Restrooms are available, along with a Museum and a Gift Shop. Programs: Information about program scheduling may be obtained from either park staff or kiosks. Upon request, special presentations can be arranged for groups.
                                    </p>

                                    <p>
                                        <strong>Park Hours:</strong> Tuesday – Saturday 8 a.m. – 4:30 p.m. (last admittance 4 p.m.) Closed Sunday &amp; Monday.<br />
                                        <strong>Office Hours:</strong> Tuesday – Saturday 8 a.m. – 4:30 p.m. Closed Sunday &amp; Monday.
                                    </p>

                                    <div className="my-10 rounded-2xl overflow-hidden shadow-xl not-prose">
                                        <iframe
                                            width="100%"
                                            height="500"
                                            src="https://www.youtube.com/embed/HH70RwdaSTs?si=QVNrsEY18eEUHMbT"
                                            title="Old Las Vegas Mormon Fort"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                            className="w-full"
                                        />
                                    </div>

                                    <p>
                                        If you time your visit right, the Neon Museum is less than ten minutes away at 770 Las Vegas Blvd. North. It&apos;s worth naming honestly: the Neon Museum charges significantly more than a dollar, with tickets typically running thirty dollars and up. But pairing the oldest building in Nevada with a graveyard of the city&apos;s most iconic signs — moving from 1855 to the golden age of Las Vegas neon — makes for one of the more genuinely memorable days this city offers. Plan the fort for late afternoon and the Neon Museum at dusk when the signs come alive against a darkening sky. Museum hours vary by season. It is advised to check the website to get more information and buy tickets.
                                    </p>

                                    {/* CTA BLOCK 2 — Helicopter & Neon Museum */}
                                    <div className="relative my-8 rounded-2xl bg-[#fff0d4]/50 border-2 border-[#37507a]/20 p-8 text-center shadow-lg transition-transform hover:-translate-y-1 duration-300 not-prose overflow-hidden group text-[#37507a]">
                                        <div className="relative z-10">
                                            <p className="text-xs text-[#2c4875] uppercase tracking-widest font-bold mb-2">
                                                Experience the Glow
                                            </p>
                                            <h3 className="text-xl font-bold text-[#37507a] mb-3 mt-0">
                                                Las Vegas Night Helicopter Flight &amp; Neon Museum
                                            </h3>
                                            <p className="text-[#37507a] mb-6 max-w-2xl mx-auto font-medium">
                                                Pair your trip through Las Vegas history with a view of the original neon signs and an amazing helicopter tour.
                                            </p>
                                            <a
                                                href="https://www.getyourguide.com/las-vegas-l58/las-vegas-night-helicopter-flight-with-neon-museum-ticket-t425051/?partner_id=8LNIBCT&utm_medium=online_publisher&cmp=Vegas"
                                                target="_blank"
                                                rel="sponsored noopener noreferrer"
                                                className="inline-block px-8 py-3.5 rounded-full bg-[#37507a] text-white font-bold hover:bg-[#2c4875] hover:shadow-xl hover:scale-105 transition-all duration-300 no-underline"
                                            >
                                                Book Helicopter Tour &amp; Neon Museum →
                                            </a>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-12 mb-6 text-[#37507a]">The Bellagio Conservatory, the Glass Ceiling Nobody Looks Up At, and the Sky Ceiling Next Door at Caesars</h2>

                                    <p>
                                        The Bellagio is not an off-the-Strip experience by any definition of the phrase. But the two things inside it that I want to tell you about are free, they are world-class, and the majority of people who walk past them every single day have no idea what they&apos;re seeing.
                                    </p>

                                    <p>
                                        <a href="https://bellagio.mgmresorts.com/en/entertainment/conservatory-botanical-garden.html" target="_blank" rel="noopener noreferrer">The Conservatory and Botanical Gardens</a> sits just inside the main entrance and is changed completely several times a year by a team of over one hundred horticulturists. The seasonal installations are elaborate to the point of being genuinely stunning, and they cost nothing to walk through.
                                    </p>

                                    <figure className="my-10">
                                        <Image
                                            src="/images/Belcon.jpg"
                                            alt="Bellagio Conservatory seasonal display"
                                            width={1200}
                                            height={675}
                                            className="w-full rounded-2xl shadow-xl"
                                        />
                                    </figure>

                                    <p>
                                        Before you get there, stop in the hotel lobby and look up. What&apos;s covering the ceiling above you is a work called &ldquo;Fiori di Como,&rdquo; a permanent installation of more than two thousand hand-blown glass flowers covering two thousand square feet, created by Dale Chihuly, arguably the most celebrated glass artist in the world. It is one of the significant pieces of public art in the American West, and most of the people walking beneath it are looking at their phones.
                                    </p>

                                    <figure className="my-10">
                                        <Image
                                            src="/images/Lobby3.jpg"
                                            alt="Dale Chihuly Fiori di Como glass ceiling at Bellagio"
                                            width={1200}
                                            height={675}
                                            className="w-full rounded-2xl shadow-xl"
                                        />
                                    </figure>

                                    <p>
                                        You don&apos;t have to gamble, spend a dollar, or even slow down if you don&apos;t want to. Walk in, look up, move through the conservatory, and walk back out. It takes twenty minutes and it&apos;s better than most things that cost a hundred dollars in this city. Sometimes the best version of a place is the free one, and at the Bellagio, that turns out to be true.
                                    </p>

                                    <p>
                                        Across the pedestrian bridge located in Caesars Palace is <a href="https://www.simon.com/mall/the-forum-shops-at-caesars-palace" target="_blank" rel="noopener noreferrer">The Forum Shops</a>, which according to their website are &ldquo;a must-see, all-encompassing experience at Caesars Palace. Las Vegas&apos; definitive luxury shopping destination. The Forum Shops include approximately 160 specialty stores and fine restaurants. Its lauded designer stores such as Louis Vuitton, Versace, Giorgio Armani, Valentino and Gucci represent some of the biggest names in fashion.&rdquo; It&apos;s hard to disagree, the shops are amazing.
                                    </p>

                                    <figure className="my-10">
                                        <Image
                                            src="/images/Ceasers.jpg"
                                            alt="Caesars Palace Forum Shops sky ceiling"
                                            width={1200}
                                            height={675}
                                            className="w-full rounded-2xl shadow-xl"
                                        />
                                    </figure>

                                    <p>
                                        As you walk under the iconic &ldquo;sky ceiling&rdquo; at The Forum Shops at Caesars Palace — introduced in 1992, it was a pioneering painted faux-sky designed by Sky Art by Karen Kristin — it revolutionized Las Vegas retail by simulating an outdoor Italian village atmosphere with lighting that cycles from dawn to dusk. As you wind through the shop you stumble on The Fall of Atlantis show at The Forum Shops at Caesars Palace, a free 7–10 minute animatronic performance featuring fire, water effects, and nine-foot talking statues. Located near the Cheesecake Factory, it runs Thursday through Monday, hourly from noon to 8 p.m. (dark Tuesdays/Wednesdays). Nearby is the amazing Atlantis Aquarium, a 50,000-gallon tank home to over 300 saltwater fish including sharks and stingrays, located right next to the Atlantis fountain, another worthwhile scenic stop.
                                    </p>

                                    <hr className="my-12 border-[#37507a]/20" />

                                    <div className="bg-[#fff0d4]/50 p-6 rounded-xl italic text-[#37507a] text-sm border-2 border-[#37507a]/20">
                                        <p className="m-0">
                                            Hours and seasonal schedules change throughout the year. Gilcrease Orchard and Gilcrease Nature Sanctuary both require checking their websites before visiting. The Neon Museum is best reserved online in advance at neonmuseum.org. Floyd Lamb Park and the Mormon Fort are open year round and both are best visited when the weather cooperates, which in Las Vegas means anytime that isn&apos;t July. The Fremont Street Experience Music Reels run at the top of every hour starting at six in the evening. Come after dark.
                                        </p>
                                    </div>
                                </div>

                                {/* Back link */}
                                <div className="mt-10 text-center lg:text-left">
                                    <Link
                                        href="/beyond-the-neon"
                                        className="inline-flex items-center gap-2 font-semibold transition-colors text-[#2c4875] hover:text-[#1e3459]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M19 12H5M12 19l-7-7 7-7" />
                                        </svg>
                                        Back to Beyond the Neon
                                    </Link>
                                </div>
                            </div>

                            {/* Right Sidebar Area */}
                            <div className="lg:w-1/3">
                                <SidebarWidgets widgets={getCategoryWidgets("beyond-the-neon", "six-free-things")} />
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
