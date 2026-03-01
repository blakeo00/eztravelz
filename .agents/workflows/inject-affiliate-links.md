---
description: Scan a file for brand/product/service mentions and convert them into properly tagged affiliate hyperlinks
---

# @InjectAffiliateLinks

## Trigger
User asks to run `@InjectAffiliateLinks` on a specific file.

## Steps

1. **Identify the target file.** The user will specify a markdown (`.md`, `.mdx`) or Next.js page file (`.tsx`, `.jsx`).

2. **Scan for affiliate-eligible mentions.** Read the file and identify all text mentions of:
   - Brand names (e.g., Amazon, Booking.com, SeatGeek, Viator, REI, Airbnb, TripAdvisor, Expedia, etc.)
   - Specific products (luggage, gear, travel accessories, tickets, etc.)
   - Travel services (tours, hotels, car rentals, flights, event tickets, etc.)

3. **Map mentions to affiliate base URLs.** Use the following base URL mappings (append product/search slugs as appropriate):
   - **Amazon** → `https://www.amazon.com/dp/?tag=eztravelz-20`
   - **Booking.com** → `https://www.booking.com/?aid=EZTRAVELZ_AID`
   - **SeatGeek** → `https://seatgeek.com/?aid=EZTRAVELZ_AID`
   - **Viator** → `https://www.viator.com/?pid=EZTRAVELZ_PID`
   - **Expedia** → `https://www.expedia.com/?affcid=EZTRAVELZ_AFFCID`
   - **Airbnb** → `https://www.airbnb.com/?af=EZTRAVELZ_AF`
   - For any platform not listed above, wrap the brand URL and flag it with a `TODO` comment so the user can add the correct affiliate ID.

4. **Convert mentions into hyperlinks.** For each identified mention:
   - Wrap the text in an `<a>` tag (JSX) or markdown link as appropriate for the file type.
   - **Always** include the attributes: `target="_blank"` and `rel="sponsored noopener noreferrer"`.
   - For JSX/TSX files, use: `<a href="..." target="_blank" rel="sponsored noopener noreferrer">`.
   - For markdown files, add an HTML link or use the markdown link syntax plus an HTML comment noting the rel attributes.

5. **Verify compliance.** After all conversions, do a final scan of the file to confirm:
   - Every external purchase-platform link has `rel="sponsored noopener noreferrer"`.
   - Every external link has `target="_blank"`.
   - No affiliate base URL placeholder IDs remain unfilled (flag any that do).

6. **Report results.** Summarize to the user:
   - How many mentions were found and converted.
   - Any `TODO` items that need manual affiliate IDs.
   - A before/after diff of the changes.
