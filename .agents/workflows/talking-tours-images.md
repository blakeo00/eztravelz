---
description: Rules for sourcing, validating, and configuring images used on the Talking Tours interactive map
---

# Talking Tours Image Standards

## Trigger
Follow these rules whenever adding, replacing, or troubleshooting images on the Talking Tours map (`GlobalTourMap.tsx` / `locations.json`).

## Image Requirements

### Sourcing
1. **Always use landscape-oriented photos** (wider than tall). Never use portrait or square images.
2. **Prefer wide-angle or mid-range shots** that show the full landmark with surrounding context (sky, water, street, landscape). Avoid tight close-ups that crop the subject at the edges.
3. **Minimum resolution**: 1200px wide. Ideal: **1400×700** (2:1 aspect ratio).
4. **Never run images through bulk resizing tools** (e.g., BulkResizePhotos.com) — these pad images with gray/white bars instead of cropping.

### Validation Checklist
Before adding an image to `locations.json`, verify ALL of the following:

- [ ] **Orientation**: Image is landscape (width > height)
- [ ] **No padding**: No white, gray, or black bars baked into the file on any edge
- [ ] **Subject framing**: The main landmark is fully visible and not cut off at any edge. At least 10-15% margin of background/context should surround the subject on all sides.
- [ ] **Aspect ratio check**: If the image aspect ratio differs significantly from 2:1 (e.g., 16:9, 3:2), confirm that cropping to 2:1 via `object-fit: cover` won't cut off the main subject. If it will, use `imagePosition` to shift the focal point.

### Dimensional Check (run this)
After placing an image in `public/images/`, run this PowerShell command to verify dimensions:
```powershell
Add-Type -AssemblyName System.Drawing; $img = [System.Drawing.Image]::FromFile("FULL_PATH"); "$($img.Width)x$($img.Height) — ratio $('{0:N2}' -f ($img.Width/$img.Height)):1"; $img.Dispose()
```
- **Pass**: Ratio between 1.50:1 and 2.50:1, width ≥ 1200px
- **Fail**: Ratio below 1.30:1 (too square/portrait) or any dimension under 800px

## Configuration in locations.json

### Basic entry (ideal 2:1 image)
```json
"image": "/images/Example.jpg"
```

### When subject is off-center vertically (e.g., too much sky)
```json
"image": "/images/Example.jpg",
"imagePosition": "center 70%"
```
Common values:
- `"center 30%"` — shift up (show more bottom, less sky)
- `"center 50%"` — default center
- `"center 70%"` — shift down (show more top/sky, less ground)
- `"left center"` or `"right center"` — horizontal shift

### When subject is off-center horizontally
```json
"image": "/images/Example.jpg",
"imagePosition": "left center"
```

### Last resort: imageScale (only for padded legacy images)
```json
"image": "/images/Example.jpg",
"imageScale": 1.5
```
⚠️ **Avoid using imageScale for new images.** It exists only as a workaround for legacy padded files that cannot be replaced. Always prefer sourcing a proper landscape image instead.

## Visual Review Process
After adding any new image to the map:
1. Open the Talking Tours page in the local dev browser
2. Navigate to the specific city and stop
3. Confirm the landmark is **fully visible**, **not cut off**, and **centered** in the image frame
4. Check on both desktop and a narrow viewport (~400px) to ensure `object-fit: cover` doesn't crop the subject poorly at different sizes
5. If the image looks too zoomed or the subject is clipped, adjust `imagePosition` first — only use `imageScale` as a last resort

## Quick Reference

| Scenario | Fix |
|---|---|
| Image looks perfect | Just set `"image"` path |
| Too much sky showing | `"imagePosition": "center 30%"` |
| Subject cut off at bottom | `"imagePosition": "center 70%"` |
| Subject cut off on left | `"imagePosition": "right center"` |
| Legacy image with padding bars | `"imageScale": 1.5–2.0` (temporary — replace file when possible) |
| Image is portrait/square | **Do not use.** Find a landscape alternative. |
