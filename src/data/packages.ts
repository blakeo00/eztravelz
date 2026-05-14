/**
 * Signature Travel — Package Data
 *
 * Each object represents a bookable travel package displayed on the
 * /signature-travel landing page. To add a new package, simply add
 * a new object to the relevant array below.
 *
 * Once you have Tern public itinerary links and Trip Request Form URLs,
 * replace the placeholder strings below.
 */

export interface TravelPackage {
    id: string;
    supplier: "disney" | "virgin" | "custom";
    title: string;
    subtitle: string;
    highlights: string[];
    image: string;
    /** Tern public itinerary link — opens in a new tab */
    ternItineraryUrl?: string;
    /** Tern Trip Request Form URL — for direct inquiries */
    ternFormUrl: string;
    /** Optional price teaser shown on the card */
    priceFrom?: string;
    duration: string;
    tags: string[];
    /** If true, this package appears on the homepage Signature showcase */
    featured?: boolean;
}

// ─── Disney Packages ────────────────────────────────────────────

export const disneyPackages: TravelPackage[] = [
    {
        id: "disney-wish-western-caribbean",
        supplier: "disney",
        title: "Disney Wish — Western Caribbean",
        subtitle: "7-night sailing with Castaway Cay & Cozumel",
        highlights: [
            "Private island day at Castaway Cay",
            "Worlds of Marvel cinematic dining",
            "AquaMouse water attraction at sea",
            "Concierge-level stateroom options",
        ],
        image: "/supplier-assets/disney-wish-hero.jpg",
        ternItineraryUrl: "", // Replace with Tern public link
        ternFormUrl: "", // Replace with Tern Trip Request Form URL
        priceFrom: "Contact for pricing",
        duration: "7 Nights",
        tags: ["family", "cruise", "caribbean"],
        featured: true,
    },
    {
        id: "disney-fantasy-bahamian",
        supplier: "disney",
        title: "Disney Fantasy — Bahamian Escape",
        subtitle: "4-night getaway with two stops at Castaway Cay",
        highlights: [
            "Double Castaway Cay itinerary",
            "Animator's Palate interactive dining",
            "Bibbidi Bobbidi Boutique for kids",
            "Adult-exclusive Quiet Cove pool",
        ],
        image: "/supplier-assets/disney-fantasy-hero.jpg",
        ternItineraryUrl: "",
        ternFormUrl: "",
        priceFrom: "Contact for pricing",
        duration: "4 Nights",
        tags: ["family", "cruise", "bahamas", "short-getaway"],
    },
    {
        id: "disney-world-magic-kingdom",
        supplier: "disney",
        title: "Walt Disney World — Magic Kingdom Experience",
        subtitle: "5-night resort stay with park-hopper access",
        highlights: [
            "Deluxe resort accommodations",
            "Park Hopper Plus tickets included",
            "Lightning Lane Multi Pass",
            "Character dining reservations",
        ],
        image: "/supplier-assets/disney-world-hero.jpg",
        ternItineraryUrl: "",
        ternFormUrl: "",
        priceFrom: "Contact for pricing",
        duration: "5 Nights",
        tags: ["family", "theme-park", "florida"],
        featured: true,
    },
];

// ─── Virgin Voyages Packages ────────────────────────────────────

export const virginPackages: TravelPackage[] = [
    {
        id: "virgin-scarlet-lady-caribbean",
        supplier: "virgin",
        title: "Scarlet Lady — Fire & Sunset Soirées",
        subtitle: "5-night Caribbean voyage from Miami",
        highlights: [
            "The Beach Club at Bimini",
            "All dining included — no buffets",
            "Complimentary group fitness classes",
            "Festival-style entertainment nightly",
        ],
        image: "/supplier-assets/virgin-scarlet-lady-hero.jpg",
        ternItineraryUrl: "",
        ternFormUrl: "",
        priceFrom: "Contact for pricing",
        duration: "5 Nights",
        tags: ["adults-only", "cruise", "caribbean"],
        featured: true,
    },
    {
        id: "virgin-valiant-lady-mediterranean",
        supplier: "virgin",
        title: "Valiant Lady — Mediterranean Sailing",
        subtitle: "7-night Mediterranean voyage from Barcelona",
        highlights: [
            "Ports: Marseille, Cagliari, Palma de Mallorca",
            "The Manor — exclusive Rockstar-suite area",
            "Test Kitchen molecular gastronomy",
            "Squid Ink — experimental cocktail bar",
        ],
        image: "/supplier-assets/virgin-valiant-lady-hero.jpg",
        ternItineraryUrl: "",
        ternFormUrl: "",
        priceFrom: "Contact for pricing",
        duration: "7 Nights",
        tags: ["adults-only", "cruise", "mediterranean"],
    },
    {
        id: "virgin-resilient-lady-greek-isles",
        supplier: "virgin",
        title: "Resilient Lady — Greek Island Glow",
        subtitle: "6-night Adriatic & Greek Isles voyage",
        highlights: [
            "Ports: Dubrovnik, Corfu, Kotor",
            "Gunbae Korean BBQ dining",
            "Redemption Spa thermal suite",
            "Rooftop sunset yoga sessions",
        ],
        image: "/supplier-assets/virgin-resilient-lady-hero.jpg",
        ternItineraryUrl: "",
        ternFormUrl: "",
        priceFrom: "Contact for pricing",
        duration: "6 Nights",
        tags: ["adults-only", "cruise", "mediterranean", "greek-isles"],
    },
];

// ─── All packages (convenience export) ──────────────────────────

export const allPackages: TravelPackage[] = [
    ...disneyPackages,
    ...virginPackages,
];

/** Packages flagged for homepage showcase */
export const featuredPackages: TravelPackage[] = allPackages.filter(p => p.featured);
