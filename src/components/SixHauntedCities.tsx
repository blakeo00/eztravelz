// SixHauntedCities.tsx
// Drop this section into your haunted-tours page, above the existing Lizzie Borden post
// Matches the structure of the "Six Festivals Worth Flying For" section on /cinematic-travel

export default function SixHauntedCities() {
  const cities = [
    {
      emoji: "🎷",
      name: "New Orleans, Louisiana",
      season: "Year-Round · Best October – February",
      location: "New Orleans, Louisiana",
      description:
        "Three centuries of plague, war, voodoo, and violence have left a residue in New Orleans that no amount of tourism can dilute. The French Quarter sits on top of former cemeteries. St. Louis Cathedral faces a plaza where public executions drew crowds. The LaLaurie Mansion on Royal Street, where one of the most documented cases of torture in American history was discovered in 1834, still stands — and still unsettles. Ghost tours here don't manufacture atmosphere. The city does that entirely on its own.",
      bookText: "Book a New Orleans Ghost Tour →",
      bookUrl:
        "https://usghostadventures.com/ghost-tours/new-orleans/?tap_a=149596-26ae1d&ref=mju3ytb",
    },
    {
      emoji: "🌿",
      name: "Savannah, Georgia",
      season: "Year-Round · Best September – November",
      location: "Savannah, Georgia",
      description:
        "Savannah is regularly cited as the most haunted city in America, and the case is not hard to make. The city was built over its own dead. Bodies displaced during construction still lie beneath Forsyth Park, Colonial Park Cemetery, and the foundations of private homes that have been occupied for two hundred years. The Mercer Williams House, the Marshall House Hotel — which served as a Civil War hospital and kept the amputated limbs in the basement — and the cobblestone squares at night combine to create a place that feels haunted even in full daylight.",
      bookText: "Book a Savannah Ghost Tour →",
      bookUrl:
        "https://usghostadventures.com/ghost-tours/savannah/?tap_a=149596-26ae1d&ref=mju3ytb",
    },
    {
      emoji: "🧙",
      name: "Salem, Massachusetts",
      season: "Year-Round · Best October",
      location: "Salem, Massachusetts",
      description:
        "Salem carries the weight of 1692 everywhere you look. Twenty people were executed for witchcraft. An entire community tore itself apart under pressure, suspicion, and fear. The Witch Trials Memorial, the Proctor's Ledge execution site, and the Peabody Essex Museum hold the documented history. The ghost tours hold everything the documents left out. October transforms Salem into a full month of programming, walking tours, and candlelit evenings that draw visitors from around the world. But Salem in February — quiet, cold, and almost entirely yours — is its own kind of unforgettable.",
      bookText: "Book a Salem Ghost Tour →",
      bookUrl:
        "https://usghostadventures.com/ghost-tours/salem/?tap_a=149596-26ae1d&ref=mju3ytb",
    },
    {
      emoji: "⚔️",
      name: "Gettysburg, Pennsylvania",
      season: "Year-Round · Best May – October",
      location: "Gettysburg, Pennsylvania",
      description:
        "More Americans died at Gettysburg in three days in July 1863 than in the entire War of 1812. The battlefield draws more paranormal investigators annually than almost anywhere else in the country, and the volume and consistency of reported phenomena — apparitions on Cemetery Ridge, voices in the Triangular Field, figures at the windows of the Farnsworth House — have made it the most documented haunted location in American history. The overnight ghost tours here cover the battlefield after dark, when the monuments are lit only by moonlight and the quiet is complete.",
      bookText: "Book a Gettysburg Ghost Tour →",
      bookUrl:
        "https://usghostadventures.com/ghost-tours/gettysburg/?tap_a=149596-26ae1d&ref=mju3ytb",
    },
    {
      emoji: "🌺",
      name: "St. Augustine, Florida",
      season: "Year-Round · Best October – March",
      location: "St. Augustine, Florida",
      description:
        "Founded by Spanish settlers in 1565, St. Augustine is the oldest continuously occupied European settlement in the United States, which means it has had more time than anywhere else in the country to accumulate its dead. The Old Jail, the Castillo de San Marcos, the Huguenot Cemetery, and the Flagler College campus — originally a hotel built in 1888 — have all produced decades of consistent paranormal reports. Walking the city at night, with its narrow streets and gas lamps and the smell of salt air off the Matanzas River, the history doesn't feel past. It feels present.",
      bookText: "Book a St. Augustine Ghost Tour →",
      bookUrl:
        "https://usghostadventures.com/ghost-tours/st-augustine/?tap_a=149596-26ae1d&ref=mju3ytb",
    },
    {
      emoji: "🌹",
      name: "San Antonio, Texas",
      season: "Year-Round · Best September – December",
      location: "San Antonio, Texas",
      description:
        "The Alamo is the most visited site in Texas, and it is also one of the most reported haunted locations in the state. The 1836 battle killed more than 200 Texan defenders in a matter of hours, and the site has documented paranormal activity going back to the days of the Mexican Army, whose soldiers reportedly refused orders to demolish it after the battle because of what they said they encountered inside. The River Walk turns atmospheric after dark, the Spanish Governor's Palace carries four centuries of colonial history, and San Antonio's ghost tours connect all of it into a single evening that earns the early alarm the next morning.",
      bookText: "Book a San Antonio Ghost Tour →",
      bookUrl:
        "https://usghostadventures.com/ghost-tours/san-antonio/?tap_a=149596-26ae1d&ref=mju3ytb",
    },
  ];

  return (
    <section className="bg-gray-900/90 rounded-3xl shadow-2xl overflow-hidden border border-purple-700/50 p-8 md:p-12 backdrop-blur-sm mb-12" style={{ boxShadow: '0 0 30px rgba(147, 51, 234, 0.15)' }}>
      {/* Section Header */}
      <h2 className="text-4xl font-extrabold mt-3 mb-2 leading-tight text-red-500" style={{ fontFamily: "var(--font-creepster)" }}>
        Six Haunted Cities Worth Traveling For
      </h2>

      {/* Tagline */}
      <p className="text-sm text-gray-500 mb-6">
        Year-Round · Louisiana, Georgia, Massachusetts, Pennsylvania, Florida,
        Texas · The Cities That Never Let Their Dead Go
      </p>

      {/* Intro */}
      <p className="text-lg leading-relaxed mb-10 text-gray-300">
        Some cities wear their history visibly. Others bury it, and then spend
        centuries letting it surface in the dark. The six cities below have
        something in common: documented paranormal activity that predates the
        tourism, a depth of human history that explains rather than
        manufactures the atmosphere, and ghost tours that treat the dead with
        the seriousness they deserve. These are not haunted houses with jump
        scares. These are places where something happened, and where that
        something hasn't entirely finished happening.
      </p>

      {/* City Entries */}
      <div className="space-y-10">
        {cities.map((city, index) => (
          <div key={index} className="border-t border-purple-700/50 pt-8">
            {/* Emoji + Name */}
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl">{city.emoji}</span>
              <h3 className="text-2xl font-bold text-gray-100">{city.name}</h3>
            </div>

            {/* Season + Location */}
            <p className="text-purple-300/70 text-sm mb-3">
              {city.season} &nbsp;·&nbsp; {city.location}
            </p>

            {/* Description */}
            <p className="text-lg leading-relaxed mb-4 text-gray-300">
              {city.description}
            </p>

            {/* Booking Link */}
            <a
              href={city.bookUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-block text-sm font-semibold underline underline-offset-4 text-purple-400 hover:text-purple-300 transition-colors"
            >
              {city.bookText}
            </a>
          </div>
        ))}
      </div>

      {/* Closing Paragraph */}
      <p className="text-lg leading-relaxed mt-12 border-t border-purple-700/50 pt-10 text-gray-300">
        Every city on this list has layers that a single night won't exhaust.
        The best ghost tours are the ones that send you home with more questions
        than you arrived with, and all six of these do exactly that. Book early
        for October. Bring a good coat for the evening tours. And pay attention
        to whatever your instincts tell you when you're standing somewhere that
        feels older than it should.
      </p>

      {/* US Ghost Adventures CTA Banner */}
      <div className="mt-10 bg-black/40 rounded-lg p-6 text-center border border-purple-900/50">
        <p className="text-sm font-semibold mb-3 text-gray-300">
          Ready to book your ghost adventure?
        </p>
        <a
          href="https://usghostadventures.com?tap_a=149596-26ae1d&ref=mju3ytb"
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="inline-block transform hover:scale-105 transition-transform duration-300"
        >
          <img
            src="https://static.tapfiliate.com/67b8df97c1aa0267821125.jpg?a=151137-ec41b6"
            alt="US Ghost Adventures — Book Ghost Tours Nationwide"
            className="mx-auto max-w-sm w-full rounded-lg"
          />
        </a>
      </div>
    </section>
  );
}
