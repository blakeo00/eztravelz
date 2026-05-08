---
description: Streamlined workflow for adding new cities and tour stops to the Talking Tours interactive map
---

# @AddTalkingTourCities

## Trigger
User wants to add one or more new cities to the Talking Tours map (`locations.json`).

## User Input Format
The user provides city data in any of these formats. Parse flexibly — the user does NOT need to match this exactly:

### Minimum Required Per City
```
CITY: [City Name]
COORDINATES: [lat, lng]

STOPS:
1. [Stop Name] | [lat, lng] | [vibe text] | [Viator tour URL]
2. [Stop Name] | [lat, lng] | [vibe text] | [Viator tour URL]
...
```

### Optional City Fields (agent fills defaults if missing)
| Field | Default if missing |
|---|---|
| `emoji` | Agent picks a fitting emoji |
| `tagline` | Agent writes one (~6 words, atmospheric, no clichés) |
| `zoom` | `13` (use `12` for spread-out cities, `14` for compact) |
| `color` | Agent picks a unique hex that doesn't clash with existing cities |
| `pageLink` | Omit from JSON |
| `pageLinkLabel` | Omit from JSON |

### Optional Stop Fields (agent fills defaults if missing)
| Field | Default if missing |
|---|---|
| `tour emoji` | Agent picks one relevant to the tour |
| `tour name` | Extract from Viator URL page title or let user specify |
| `vibe` | Agent writes atmospheric 1-2 sentence description |
| `image` | Use Street View (leave `image` field out of JSON) |
| `imagePosition` | Only add if image needs adjustment after visual review |

## Steps

### 1. Parse & Validate Input
- Extract all city and stop data from the user's message
- Flag any missing **required** fields (city name, coordinates, stop names, stop coordinates)
- Fill in all optional fields with intelligent defaults
- Generate a `city.id` from the name: lowercase, hyphenated (e.g., "Buenos Aires" → `buenos-aires`)
- Generate `location.id` from stop name: lowercase, underscored (e.g., "La Boca" → `la_boca`)

### 2. Check for Duplicates
- Compare new city IDs against existing cities in `locations.json`
- Alert user if any duplicate IDs are found

### 3. Handle Images
**The user downloads images themselves.** Agent responsibilities:

- Ask the user to place images in `public/images/` with short descriptive filenames
- If the user has already placed images, validate them:

// turbo
```powershell
# Validate image dimensions for each image file
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("FULL_PATH")
"$($img.Width)x$($img.Height) — ratio $('{0:N2}' -f ($img.Width/$img.Height)):1"
$img.Dispose()
```

**Pass criteria:**
- Width ≥ 1200px
- Aspect ratio between 1.50:1 and 2.50:1 (landscape)
- No white/gray/black padding bars

**If no image provided for a stop:** omit the `image` field entirely (component falls back to Street View)

### 4. Format Affiliate URLs
All Viator tour URLs must follow this pattern:
```
http://vi.me/[SHORT_CODE]?pid=P00291237&mcid=42383&medium=link&campaign=[CampaignTag]
```
- If user provides a full viator.com URL, convert to the `vi.me` short link format if possible, or use the URL as-is with the affiliate params appended
- `campaign` tag = city name, no spaces (e.g., `BuenosAires`, `CapeTown`)

### 5. Build JSON Entries
For each city, construct a JSON block following this exact structure:
```json
{
  "id": "city-slug",
  "name": "City Name",
  "emoji": "🎭",
  "tagline": "Short atmospheric tagline",
  "coords": { "lat": 0.0000, "lng": 0.0000 },
  "zoom": 13,
  "color": "#hex",
  "locations": [
    {
      "id": "stop_slug",
      "name": "Stop Name",
      "coords": { "lat": 0.0000, "lng": 0.0000 },
      "vibe": "Atmospheric description, 1-2 sentences.",
      "tours": [
        {
          "name": "Tour Display Name",
          "url": "http://vi.me/...",
          "emoji": "🎯"
        }
      ],
      "image": "/images/Filename.jpg"
    }
  ]
}
```

**Only include these optional fields when needed:**
- `"pageLink"` / `"pageLinkLabel"` — only if the city links to an existing EZtravelz guide
- `"imagePosition"` — only if the image subject is off-center after visual review
- `"imageScale"` — **avoid for new images**, legacy workaround only

### 6. Insert into locations.json
- Add new city objects to the `cities` array in `src/data/locations.json`
- Cities are sorted alphabetically by `id` — insert in the correct position
- Use the `replace_file_content` or `multi_replace_file_content` tool to splice in new entries at the right location

### 7. Validate JSON
// turbo
```powershell
# Confirm JSON is valid after editing
node -e "JSON.parse(require('fs').readFileSync('src/data/locations.json','utf8')); console.log('JSON valid')"
```

### 8. Visual Verification (if dev server is running)
- Open the Talking Tours page in browser
- Navigate to each new city
- Click through each stop and verify:
  - Image displays correctly (no cropping issues)
  - Map pins land at the right coordinates
  - Tour affiliate links are present
  - Vibe text renders properly
- If image needs adjustment, apply `imagePosition` fix

### 9. Report Results
Summarize:
- Number of cities added (new total out of 50 goal)
- Number of stops added
- Any stops missing images (using Street View fallback)
- Any `imagePosition` adjustments needed after visual review
- Reminder: run `npm run clean` if dev server feels sluggish

## Performance Notes
- **Clean cache before large batches:** If adding 3+ cities at once, run `npm run clean` first
- **Batch size:** 3 cities per session is ideal to keep processing fast
- **File size awareness:** `locations.json` is currently ~112 KB with 32 cities. At 50 cities it will be ~175 KB — still well within acceptable limits
- **Image count:** `public/images/` has 526 files (781 MB). Consider using WebP format for new images to save space

## Quick Reference: Existing Colors in Use
Check `locations.json` before assigning a color to avoid visual conflicts on the map.
