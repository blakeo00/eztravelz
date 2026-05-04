---
description: Core operating rules for EZtravelz development — tech stack, affiliate/SEO, component architecture, and content guidelines
---

# Core Operating Rules

## 1. Tech Stack Strictness

- **Next.js only.** Do not suggest or write code using standard React (Create React App), Vue, or plain HTML/CSS unless explicitly requested.
- **App Router.** All routing must use the Next.js App Router methodology.
- **Tailwind CSS only.** Styling must be handled exclusively through Tailwind CSS utility classes. Avoid creating custom CSS files unless absolutely necessary for complex animations.

## 2. Affiliate & SEO Protocol

- **Affiliate links.** Every external link pointing to a purchasing platform (Amazon, SeatGeek, Booking.com, Viator, etc.) must include the attributes `target="_blank"` and `rel="sponsored noopener noreferrer"`. This is legally and functionally required for affiliate tracking.
- **SEO metadata.** Every page must include:
  - A compelling `<title>` tag
  - A `<meta name="description">` under 160 characters
  - Structured semantic HTML with proper `H1`, `H2`, and `H3` hierarchies

## 3. Component Architecture

- **Hub and Spoke design.** The Homepage (Hub) must remain lightweight. Category pages (Spokes) must be built as reusable template components.
- **No monolithic files.** Never build files thousands of lines long. Break the UI into small, reusable Next.js components (e.g., `<Header />`, `<NicheGrid />`, `<ArticleCard />`, `<Footer />`).

## 4. Content & Tone Guidelines

- **Tone.** When drafting placeholder content, refining articles, or writing UI copy, maintain a **practical, experience-driven** tone.
- **Specificity.** Inject highly specific, realistic examples to populate the layout. Use scenarios like:
  - The logistics of flying with a 7-year-old cat named Sassy
  - Finding Keto-friendly meals or authentic Southern cooking while on a road trip
  - Mapping out tailgate logistics for a Green Bay Packers game
  - Navigating the haunted history tours of Las Vegas
- **No clichés.** Avoid generic travel clichés.

## 5. Talking Tours Map

- **Alphabetical city cards.** The city selector sidebar must always display cities in alphabetical order. This is handled automatically via `.sort()` in `GlobalTourMap.tsx`, but when adding new cities to `locations.json`, verify the sidebar renders them in A→Z order.
- **Affiliate URL format.** All Viator tour links must include tracking parameters: `pid=P00291237&mcid=42383&medium=link&campaign=<CityName>`.
- **Image positioning.** If a new tour image crops poorly at `object-position: top center` (the default), add `imagePosition` and/or `imageSize` fields to the location entry in `locations.json` to override the crop (e.g., `"imagePosition": "center center"`, `"imageSize": "contain"`).
- **Data file.** All city/tour data lives in `src/data/locations.json`. Images are served from `public/images/` and referenced as `/images/filename.jpg`.
