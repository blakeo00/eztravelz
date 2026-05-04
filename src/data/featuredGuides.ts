/**
 * featuredGuides.ts
 * -----------------
 * Single source of truth for the "Current Guides" grid on the homepage.
 *
 * HOW TO UPDATE:
 *  1. Write the new guide and add it to posts.tsx (so it appears in the blog).
 *  2. Update the matching entry below:
 *       - title:          exact article title
 *       - cardImage:      first meaningful body image in the new article
 *       - cardImageAlt:   descriptive alt text for accessibility
 *       - href:           the URL the card should link to
 *  3. Run `npm run build` and deploy.
 *
 * The OLD article is automatically archived — it remains accessible from
 * the niche category page and the /blog listing. Nothing is deleted.
 *
 * ENTRY ORDER:  Vegas Baby → Beyond The Neon → Pet Travel → Sports Travel →
 *               Culinary Quests → Wine & Brewery → Cinematic Travel → Haunted Tours
 */

export interface FeaturedGuide {
  /** Matches the categorySlug in posts.tsx — used for future auto-linking */
  categorySlug: string;
  /** URL the card links to (category page or direct article path) */
  href: string;
  /** Exact title of the currently featured article */
  title: string;
  /** First meaningful body image of the currently featured article */
  cardImage: string;
  /** Alt text for the card image */
  cardImageAlt: string;
}

export const featuredGuides: FeaturedGuide[] = [
  {
    categorySlug: 'vegas-locals',
    href: '/vegas-locals',
    title: 'Sphere: The Ultimate Experience',
    cardImage: '/images/Sphere.png',
    cardImageAlt: 'The Sphere in Las Vegas — a 366-foot glowing architectural landmark',
  },
  {
    categorySlug: 'beyond-the-neon',
    href: '/beyond-the-neon/six-free-things',
    title: 'Six or More Free (Or Nearly Free) Things to Do in Las Vegas',
    cardImage: '/images/Lobby3.jpg',
    cardImageAlt: 'Beyond the Neon — a hidden-gem Las Vegas interior',
  },
  {
    categorySlug: 'pet-travel',
    href: '/pet-travel',
    title: 'Paws, Waves & Freedom: A Complete Guide to The Original Dog Beach in San Diego',
    cardImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    cardImageAlt: 'Golden California beach with gentle waves at sunset near Ocean Beach San Diego',
  },
  {
    categorySlug: 'sports-travel',
    href: '/sports-travel',
    title: 'The World Is Coming To Your Backyard: A Guide To The 2026 FIFA World Cup',
    cardImage: '/images/Metlife2.jpg',
    cardImageAlt: 'MetLife Stadium — home of the 2026 FIFA World Cup Final',
  },
  {
    categorySlug: 'culinary-quests',
    href: '/culinary-quests',
    title: 'Six Unusual but Unusually Fabulous Dining Experiences in Paris',
    cardImage: '/images/Paris.jpg',
    cardImageAlt: 'A nighttime view of Paris — culinary travel destination',
  },
  {
    categorySlug: 'wine-destinations',
    href: '/wine-destinations',
    title: "The Upstart That Shook Burgundy: Willamette Valley and the Rise of World Class Pinot Noir",
    cardImage: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80',
    cardImageAlt: 'Rolling vineyard rows in the Willamette Valley, Oregon at golden hour',
  },
  {
    categorySlug: 'cinematic-travel',
    href: '/cinematic-travel',
    title: "So You Want to Go to Cannes for the Film Festival. Here's What You Need to Know.",
    cardImage: '/images/Cannes 3.jpg',
    cardImageAlt: 'Cannes Film Festival — La Croisette waterfront',
  },
  {
    categorySlug: 'haunted-tours',
    href: '/haunted-tours',
    title: "America's Six Most Haunted Cities: A Field Guide to the Places That Never Quite Let Go",
    cardImage: '/images/new_orleans_haunted.png',
    cardImageAlt: "New Orleans haunted city — gas lamps and misty gothic architecture at night",
  },
];
