import React from 'react';

const DansLeNoirArticle = () => {
    return (
        <article className="mt-16 bg-[#ff6f61]/95 text-slate-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-black backdrop-blur-sm font-sans" style={{ boxShadow: '0 0 30px rgba(255, 111, 97, 0.25)' }}>
            {/* Meta/Style Note: The provided HTML used custom Google Fonts. 
          To match the EZtravelZ Next.js setup, we rely on the global Tailwind classes and 
          adjust the custom CSS classes into Tailwind utility classes where possible, 
          while maintaining the requested aesthetic. */}

            {/* Hero image: atmospheric Paris evening street */}
            <img
                className="w-full max-h-[480px] object-cover border-b-4 border-black grayscale-[20%]"
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&q=80"
                alt="Moody evening street scene in Paris with glowing restaurant lights"
                loading="eager"
            />

            <div className="max-w-[780px] mx-auto my-12 px-6">

                <span className="inline-block bg-white/40 border border-slate-900/20 text-slate-900 text-xs font-bold tracking-[0.1em] uppercase py-1.5 px-3.5 rounded-full mb-5">
                    City Dining
                </span>

                <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] leading-[1.2] mb-4 text-slate-900 font-bold">
                    Dining in the Dark: Paris’s Most Unusual Culinary Experience
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-800 font-medium border-b border-slate-900/10 pb-5 mb-8">
                    <span>Paris, France</span>
                    <span className="opacity-40">|</span>
                    <span>Unusual Dining</span>
                </div>

                <div className="text-[1.0625rem] leading-[1.75] text-slate-900 font-medium">
                    <p className="mb-6">
                        Paris is full of candlelit bistros and grand Michelin temples, yet one of the city’s most unusual meals happens where you cannot see a single thing on your plate. At Dans le Noir, a pioneering restaurant in the Marais, guests step into complete darkness and let their other senses take control while visually impaired servers guide every moment of the evening.
                    </p>

                    <h2 className="font-serif text-[1.6rem] mt-10 mb-3.5 pb-1.5 border-b-2 border-slate-900/20 text-slate-900 font-bold">Welcome to the Black Room</h2>
                    <p className="mb-6">
                        Dans le Noir sits at 51 Rue Quincampoix in the fourth arrondissement, a short walk from the Centre Pompidou in a neighborhood known for its nightlife and narrow medieval streets. The concept is simple and radical. You leave your phone and all light sources in a locker, choose a surprise menu in a softly lit lounge, then follow your server in a single file line into a pitch black dining room where you cannot even see your own hand.
                    </p>
                    <p className="mb-6">
                        The dining room can seat around sixty guests at once, and every server is blind or visually impaired. They are experts at navigating the space and at helping you find your glass, your cutlery, and even your chair. Instead of reading a menu with your eyes, you taste your way through a creative bistronomic meal and try to guess what is on each plate as the flavors unfold.
                    </p>

                    <div className="border-2 border-black bg-white/30 text-slate-900 p-5 my-8 rounded-xl">
                        <p className="font-serif text-[1.15rem] italic m-0">
                            "It feels like a cross between a theater performance and a dinner party, with your own senses cast in the leading role."
                        </p>
                    </div>

                    <h2 className="font-serif text-[1.6rem] mt-10 mb-3.5 pb-1.5 border-b-2 border-slate-900/20 text-slate-900 font-bold">How Dining in the Dark Changes Taste</h2>
                    <p className="mb-6">
                        When sight disappears, your brain leans heavily on smell, texture, and sound. At Dans le Noir, that shift is intentional. The kitchen sends out seasonal surprise menus that might pair familiar ingredients with unexpected spices or temperatures, and because you cannot see the food, you tend to eat more slowly, paying attention to each bite. Many diners report that they can suddenly distinguish subtle herbs, different textures of vegetables, or the richness of the sauce more clearly than in a normal restaurant.
                    </p>
                    <p className="mb-6">
                        The restaurant also promises to accommodate dietary restrictions. Before you enter the dark room, you choose a broad category of menu such as meat, fish, vegetarian, or vegan, and list any allergies or strong dislikes. From there, the team builds a mystery plate around your boundaries. Only when you return to the light at the end of the meal do you see photos and descriptions of what you actually ate, often with a few surprises compared to your guesses.
                    </p>

                    {/* Inline image: Paris */}
                    <figure className="my-10 rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.18)] border-2 border-black">
                        <img
                            src="/images/Paris.jpg"
                            alt="Paris"
                            className="w-full object-cover max-h-[420px]"
                            loading="lazy"
                        />
                        <figcaption className="text-[0.8125rem] text-slate-800 font-bold text-center bg-white/40 py-2.5 px-4 font-mono uppercase tracking-wider">
                            Before the lights go out, guests choose a surprise menu in the softly lit lounge at Dans le Noir in Paris.
                        </figcaption>
                    </figure>

                    <h2 className="font-serif text-[1.6rem] mt-10 mb-3.5 pb-1.5 border-b-2 border-slate-900/20 text-slate-900 font-bold">A Social Experiment as Much as a Meal</h2>
                    <p className="mb-6">
                        In the dark, the usual visual shortcuts disappear. You do not know how anyone at the table is dressed, how old they are, or where they are from. That lack of visual cues often leads to more open conversation, and many guests find themselves talking more deeply with their companions or even with strangers at nearby tables. It becomes part restaurant, part social experiment, and part empathy exercise for what daily life is like without sight.
                    </p>
                    <p className="mb-6">
                        The staff will quietly coach you through the awkward parts. They show you how to find your glass without spilling, how to pass bread, and what to do if you drop a fork. Laughter is part of the experience, and the room hums with the sound of clinking cutlery and surprised reactions as people try to identify what they are tasting in total darkness.
                    </p>

                    <h2 className="font-serif text-[1.6rem] mt-10 mb-3.5 pb-1.5 border-b-2 border-slate-900/20 text-slate-900 font-bold">Behind the Concept</h2>
                    <p className="mb-6">
                        Dans le Noir first opened in Paris in the early 2000s and has become one of the city’s most recognized unusual restaurants, inspiring sister locations in several countries and launching collaborations with airlines, wineries, and brands curious about sensory experiences. For more than twenty years, it has focused on creative, responsible cuisine and on hiring blind and visually impaired staff as the heart of the concept.
                    </p>
                    <p className="mb-6">
                        The restaurant describes the experience as a moment of total disconnection from visual overload. By removing sight for a few hours, they invite guests to focus on flavor, conversation, and the human connection with their guides. It is not simply a gimmick. It is a way of asking what dining means when you strip away presentation and rely entirely on trust and taste.
                    </p>

                    <h2 className="font-serif text-[1.6rem] mt-10 mb-3.5 pb-1.5 border-b-2 border-slate-900/20 text-slate-900 font-bold">Practical Details: How to Book</h2>
                    <p className="mb-6">
                        Reservations are strongly recommended, especially on weekends and holidays, because the black room can only host a limited number of seatings per night. You choose your menu style in advance and can add options such as wine pairings or cocktails. The restaurant is centrally located near the Rambuteau métro stop, so it is easy to pair with an afternoon at the Centre Pompidou or an evening stroll through the Marais.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">
                        <div className="bg-white/30 border-2 border-black rounded-xl p-5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-200">
                            <div className="text-2xl mb-2">📍</div>
                            <h3 className="font-serif text-[1.05rem] mb-1.5 text-slate-900 font-bold">Where You Are Going</h3>
                            <p className="text-[0.875rem] text-slate-800 mb-0 font-medium">Dans le Noir is located at 51 Rue Quincampoix in the fourth arrondissement, a lively area filled with galleries, cafés, and late night energy.</p>
                            <span className="inline-block text-[0.7rem] font-bold tracking-[0.08em] uppercase bg-slate-900/10 text-slate-900 py-0.5 px-2 rounded-full mt-2.5 border border-slate-900/20">Marais Quarter</span>
                        </div>
                        <div className="bg-white/30 border-2 border-black rounded-xl p-5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-200">
                            <div className="text-2xl mb-2">🕒</div>
                            <h3 className="font-serif text-[1.05rem] mb-1.5 text-slate-900 font-bold">What to Expect</h3>
                            <p className="text-[0.875rem] text-slate-800 mb-0 font-medium">Plan on about two hours inside the dark room, including a multi course surprise menu, guidance from your server, and a reveal of the dishes afterward.</p>
                            <span className="inline-block text-[0.7rem] font-bold tracking-[0.08em] uppercase bg-slate-900/10 text-slate-900 py-0.5 px-2 rounded-full mt-2.5 border border-slate-900/20">Evening Experience</span>
                        </div>
                        <div className="bg-white/30 border-2 border-black rounded-xl p-5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-200">
                            <div className="text-2xl mb-2">👃</div>
                            <h3 className="font-serif text-[1.05rem] mb-1.5 text-slate-900 font-bold">Who Will Love It</h3>
                            <p className="text-[0.875rem] text-slate-800 mb-0 font-medium">Curious food travelers, couples seeking a memorable date, and anyone interested in sensory experiments or inclusive experiences guided by blind hosts.</p>
                            <span className="inline-block text-[0.7rem] font-bold tracking-[0.08em] uppercase bg-slate-900/10 text-slate-900 py-0.5 px-2 rounded-full mt-2.5 border border-slate-900/20">For Curious Foodies</span>
                        </div>
                    </div>

                    {/* Second inline image: Paris skyline at night */}
                    <figure className="my-10 rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.18)] border-2 border-black">
                        <img
                            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80"
                            alt="Night view of Paris with the Eiffel Tower glowing above the city"
                            className="w-full object-cover max-h-[420px]"
                            loading="lazy"
                        />
                        <figcaption className="text-[0.8125rem] text-slate-800 font-bold text-center bg-white/40 py-2.5 px-4 font-mono uppercase tracking-wider">
                            After your dark dinner, step back into the City of Light and see Paris with freshly tuned senses.
                        </figcaption>
                    </figure>

                    <div className="bg-white/30 border-2 border-black rounded-xl p-6 my-8 text-slate-900 font-medium">
                        <h3 className="font-serif text-[1.1rem] font-bold mb-3 text-slate-900">Tips for Your Night in the Dark</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="text-[0.9375rem]">Arrive a little early to settle into the lounge and store your phone and valuables before entering the dark room.</li>
                            <li className="text-[0.9375rem]">Wear something comfortable and skip delicate fabrics that might not appreciate a minor spill in the dark.</li>
                            <li className="text-[0.9375rem]">Keep an open mind about the surprise menu and treat the guessing game as part of the fun!</li>
                        </ul>
                    </div>

                </div>
            </div>
        </article>
    );
};

export default DansLeNoirArticle;
