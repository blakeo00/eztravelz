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
                                <div className="backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 bg-[#2c4875]/95 text-slate-50 border-2 border-slate-700 shadow-[0_0_30px_rgba(44,72,117,0.25)] prose prose-lg max-w-none prose-headings:text-white prose-p:text-slate-100 prose-a:text-[#89D4FF] hover:prose-a:text-[#fff0d4] prose-strong:text-white prose-hr:border-slate-600">
                                    <p className="lead text-xl text-slate-400 font-medium mb-8">
                                        Most people come to Las Vegas and never leave a quarter-mile radius of whatever casino hotel they're staying in. That's fine. The Strip delivers exactly what it promises. But if you live here, or if you're the kind of traveler who wants to see what a city actually is beneath the lights, Las Vegas has a version of itself that most visitors never find.
                                    </p>
                                    
                                    <p>
                                        These places are where locals actually enjoy spending their time. None of them will cost you much. A couple of them won't cost you anything at all.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">A Working Orchard and an Animal Sanctuary, Side by Side in the Desert</h2>
                                    
                                    <p>
                                        The single most surprising thing about Las Vegas, in my experience, is that you can spend a morning picking your own peaches from a tree while a rescued cockatoo tries to talk to you from across the street.
                                    </p>

                                    <figure className="my-10">
                                        <Image 
                                            src="/images/Peaches.jpeg" 
                                            alt="Peaches" 
                                            width={1200} 
                                            height={675} 
                                            className="w-full rounded-2xl shadow-xl"
                                        />
                                    </figure>

                                    <p>
                                        <a href="https://thegilcreaseorchard.org/" target="_blank" rel="noopener noreferrer">Gilcrease Orchard</a> sits in the northwest corner of the Las Vegas Valley at 7800 N. Tenaya Way, and it has been a working farm since the Gilcrease family put down roots here in 1920. Over a hundred years later, it spans sixty acres with more than eight thousand fruit trees... The apple cider is made on site from their own fruit and the donuts that go with it are not the kind of thing you forget quickly. Entry runs around eight dollars on peak days, which is genuinely the best eight dollars you'll spend in this city. Check their <a href="https://thegilcreaseorchard.org/" target="_blank" rel="noopener noreferrer">website</a> before you go.
                                    </p>

                                    <p>
                                        Directly across the street is <a href="https://gilcrease.community/" target="_blank" rel="noopener noreferrer">Gilcrease Nature Sanctuary</a> at 8103 Racel St., a nonprofit rescue that has been giving permanent homes to abandoned and surrendered animals since 1979... Tours run Wednesday through Sunday and cost between $5 and $10 per person. The cockatoo room alone is worth the trip.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Floyd Lamb Park, Where the Peacocks Don't Care Who You Are</h2>

                                    <p>
                                        About twenty minutes northwest of the Strip, <a href="https://www.lasvegasnevada.gov/Residents/Parks-Facilities/Floyd-Lamb-Park" target="_blank" rel="noopener noreferrer">Floyd Lamb Park</a> at Tule Springs is where Las Vegas locals go when they need to remember the city has trees. The park surrounds a series of spring-fed ponds... Peacocks that wander the grounds have been here long enough that they've completely lost interest in being remarkable.
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
                                        Tule Springs was once a Pleistocene wetland, and the fossils recovered here include mammoths, camels, horses, and giant ground sloths... There is a $6 per vehicle entrance fee.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Container Park, Fergusons, and the Arts District</h2>

                                    <p>
                                        The Fremont East neighborhood and the neighboring Arts District have been quietly becoming one of the more genuinely interesting parts of Las Vegas for the better part of a decade, and <a href="https://downtowncontainerpark.com/" target="_blank" rel="noopener noreferrer">Container Park</a> at 707 Fremont St. is the anchor of that transformation. The complex is built entirely from repurposed shipping containers and is free to enter.
                                    </p>

                                    <figure className="my-10">
                                        <Image 
                                            src="/images/PM2.jpg" 
                                            alt="Praying Mantis Sculpture" 
                                            width={1200} 
                                            height={675} 
                                            className="w-full rounded-2xl shadow-xl"
                                        />
                                    </figure>

                                    <p>
                                        Close by is another shopping and event destination, <a href="https://www.fergusonsdowntown.com/" target="_blank" rel="noopener noreferrer">Fergusons Downtown</a>. The original Fergusons Motel was built in the 1940s. Rather than tear it down, someone had the good sense to revitalize it into a community-centered block of locally owned businesses...
                                    </p>

                                    <figure className="my-10 bg-[#1e3459] p-4 rounded-2xl shadow-md border border-slate-600">
                                        <Image 
                                            src="/images/18a.jpg" 
                                            alt="18b Arts District" 
                                            width={1200} 
                                            height={800} 
                                            className="w-full rounded-xl"
                                        />
                                        <figcaption className="text-center text-sm text-slate-300 mt-4 font-medium italic">
                                            The thriving Arts District in Downtown Las Vegas
                                        </figcaption>
                                    </figure>

                                    {/* CTA BLOCK 1 */}
                                    <div className="relative my-8 rounded-2xl bg-slate-900 border border-white/20 p-8 text-center shadow-lg transition-transform hover:-translate-y-1 duration-300 not-prose overflow-hidden group">
                                        <Image
                                            src="/images/Crawl.jpg"
                                            alt="Downtown Las Vegas Tour"
                                            fill
                                            className="object-cover object-center opacity-25"
                                        />
                                        <div className="relative z-10">
                                            <p className="text-xs text-[#89D4FF] uppercase tracking-widest font-bold mb-2 drop-shadow-md">
                                                While you're out there
                                            </p>
                                            <h3 className="text-xl font-bold text-white mb-3 mt-0 drop-shadow-md">
                                                Explore Downtown Las Vegas & The Fremont Experience
                                            </h3>
                                            <p className="text-slate-200 mb-6 max-w-2xl mx-auto drop-shadow-md">
                                                Discover incredible street art, fantastic food, and local culture on a guided tour of the Downtown and Arts District.
                                            </p>
                                            <a
                                                href="https://gyg.me/ETgD7E4R"
                                                target="_blank"
                                                rel="sponsored noopener noreferrer"
                                                className="inline-block px-8 py-3.5 rounded-full bg-[#1A7A7A] text-white font-bold hover:bg-[#145f5f] hover:shadow-xl hover:scale-105 transition-all duration-300 no-underline"
                                            >
                                                Book Downtown Las Vegas Tour on GetYourGuide →
                                            </a>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">The Fremont Street Experience, Where the Night Has No Ceiling</h2>

                                    <figure className="my-10">
                                        <Image 
                                            src="/images/Viva.jpg" 
                                            alt="Fremont Street Viva Vision" 
                                            width={1200} 
                                            height={675} 
                                            className="w-full rounded-2xl shadow-xl"
                                        />
                                    </figure>

                                    <p>
                                        <a href="https://vegasexperience.com/" target="_blank" rel="noopener noreferrer">The Fremont Street Experience</a> is free to attend, genuinely spectacular, and not always appropriate for children... What draws people here is <a href="https://vegasexperience.com/the-canopy/" target="_blank" rel="noopener noreferrer">The Canopy</a>, officially known as Vegas' Neon Sky. It stretches 1,375 feet overhead and is the largest LED display in the world.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">The Old Las Vegas Mormon Fort</h2>

                                    <p>
                                        The oldest surviving structure in Nevada is a small adobe remnant, the <a href="https://parks.nv.gov/parks/old-las-vegas-mormon-fort" target="_blank" rel="noopener noreferrer">Old Las Vegas Mormon Fort</a> located at 500 E. Washington Ave. Built in 1855, the fort predates the Las Vegas most people know by about half a century.
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

                                    {/* CTA BLOCK 2 */}
                                    <div className="relative my-8 rounded-2xl bg-slate-900 border border-white/20 p-8 text-center shadow-lg transition-transform hover:-translate-y-1 duration-300 not-prose overflow-hidden group">
                                        <Image
                                            src="/images/helicopter.jpg"
                                            alt="Las Vegas Night Helicopter Flight"
                                            fill
                                            className="object-cover object-center opacity-25"
                                        />
                                        <div className="relative z-10">
                                            <p className="text-xs text-[#89D4FF] uppercase tracking-widest font-bold mb-2 drop-shadow-md">
                                                Experience the Glow
                                            </p>
                                            <h3 className="text-xl font-bold text-white mb-3 mt-0 drop-shadow-md">
                                                Las Vegas Night Helicopter Flight & Neon Museum
                                            </h3>
                                            <p className="text-slate-200 mb-6 max-w-2xl mx-auto drop-shadow-md">
                                                Pair your trip through Las Vegas history with a view of the original neon signs and an amazing helicopter tour.
                                            </p>
                                            <a
                                                href="https://www.getyourguide.com/las-vegas-l58/las-vegas-night-helicopter-flight-with-neon-museum-ticket-t425051/?partner_id=8LNIBCT&utm_medium=online_publisher&cmp=Vegas"
                                                target="_blank"
                                                rel="sponsored noopener noreferrer"
                                                className="inline-block px-8 py-3.5 rounded-full bg-[#1A7A7A] text-white font-bold hover:bg-[#145f5f] hover:shadow-xl hover:scale-105 transition-all duration-300 no-underline"
                                            >
                                                Book Helicopter Tour & Neon Museum →
                                            </a>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-12 mb-6 text-white">The Bellagio Conservatory and Caesars Forum Shops</h2>

                                    <p>
                                        <a href="https://bellagio.mgmresorts.com/en/entertainment/conservatory-botanical-garden.html" target="_blank" rel="noopener noreferrer">The Bellagio Conservatory and Botanical Gardens</a> sits just inside the main entrance and is changed completely several times a year. The seasonal installations are elaborate to the point of being genuinely stunning, and they cost nothing to walk through.
                                    </p>

                                    <figure className="my-10">
                                        <Image 
                                            src="/images/Belcon.jpg" 
                                            alt="Bellagio Conservatory" 
                                            width={1200} 
                                            height={675} 
                                            className="w-full rounded-2xl shadow-xl"
                                        />
                                    </figure>

                                    <p>
                                        Before you get there, stop in the hotel lobby and look up. What's covering the ceiling above you is "Fiori di Como," a permanent installation of more than two thousand hand-blown glass flowers created by Dale Chihuly.
                                    </p>

                                    <figure className="my-10">
                                        <Image 
                                            src="/images/Lobby3.jpg" 
                                            alt="Dale Chihuly glass ceiling at Bellagio" 
                                            width={1200} 
                                            height={675} 
                                            className="w-full rounded-2xl shadow-xl"
                                        />
                                    </figure>

                                    <figure className="my-10">
                                        <Image 
                                            src="/images/Ceasers.jpg" 
                                            alt="Caesars Palace Shops Ceiling" 
                                            width={1200} 
                                            height={675} 
                                            className="w-full rounded-2xl shadow-xl"
                                        />
                                    </figure>

                                    <p>
                                        Across the pedestrian bridge located in Caesars Palace is The Forum Shops. As you walk under the iconic "sky ceiling" at The Forum Shops, you simulate an outdoor Italian village atmosphere with lighting that cycles from dawn to dusk. Don't miss The Fall of Atlantis show, a free animatronic performance.
                                    </p>

                                    <hr className="my-12 border-slate-600" />

                                    <div className="bg-[#1e3459] p-6 rounded-xl italic text-slate-300 text-sm">
                                        <p className="m-0">
                                            Hours and seasonal schedules change throughout the year. Gilcrease Orchard and Gilcrease Nature Sanctuary both require checking their websites before visiting. The Neon Museum is best reserved online in advance at neonmuseum.org.
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
