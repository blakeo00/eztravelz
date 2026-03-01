---
description: Scaffold a new niche category page (spoke) in the Next.js App Router with placeholder content and homepage navigation link
---

# @GenerateNicheSpoke

## Trigger
User asks to build a new category using `@GenerateNicheSpoke` and provides the niche name (e.g., "Cinematic Travel", "Culinary Quests", "Pet-Friendly Adventures").

## Steps

1. **Determine the niche slug.** Convert the requested niche name into a URL-safe slug (e.g., "Culinary Quests" → `culinary-quests`).

2. **Create the App Router directory.** Create a new directory at:
   ```
   src/app/<niche-slug>/
   ```

3. **Generate the landing page.** Create `src/app/<niche-slug>/page.tsx` using the existing `<SpokeTemplate />` component (or the project's equivalent spoke layout). The page must include:
   - **SEO metadata** via Next.js `metadata` export:
     - A compelling `title` tag specific to the niche.
     - A `description` under 160 characters.
   - **Proper heading hierarchy** (`H1` for the niche title, `H2`s for sub-sections).
   - **Placeholder image cards** — at least 3 cards, each with:
     - A descriptive placeholder image (use `/placeholder.svg` or a relevant Unsplash `next/image` source).
     - A niche-relevant title and short description following the project's experience-driven, no-cliché tone.
   - **Three dummy article titles** relevant to the niche, styled as clickable card links pointing to `#` (to be wired up later). Examples for "Culinary Quests":
     - "How to Hunt Down the Best Kolache Stops on a Texas Road Trip"
     - "A Keto Traveler's Survival Guide to Airport Food Courts"
     - "Why Your Next Tailgate Needs a Cast-Iron Skillet"

4. **Update homepage navigation.** Locate the main navigation component (e.g., `<Header />` or the homepage `<NicheGrid />`). Add a new entry linking to `/<niche-slug>` with the niche display name.

// turbo
5. **Verify the build.** Run `npm run build` (or `next build`) to confirm there are no compilation or routing errors with the new page.

6. **Report results.** Summarize to the user:
   - The files created and modified.
   - The URL path for the new spoke page.
   - Any follow-up actions needed (e.g., replacing placeholder images, wiring up article routes).
