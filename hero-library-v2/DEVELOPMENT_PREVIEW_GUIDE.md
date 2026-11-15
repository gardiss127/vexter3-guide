# Hero Library V2 — isolated development preview

**Source:** `gardiss127/vexter3-guide`, branch `hero-library-fresh-start-2026-11-11`  
**Entry page:** `/hero-library-v2/index.html`  
**Safety:** Do not deploy to the existing production Netlify site, change its branch settings, merge into `main`, or edit the original JPEGs.

## Recommended: separate Netlify Drop site

1. Download the ZIP of the **development branch**, not `main`: https://github.com/gardiss127/vexter3-guide/archive/refs/heads/hero-library-fresh-start-2026-11-11.zip
2. Unzip it. Open the extracted repository folder (the folder containing `hero-library-v2`, `IMG_1287.jpeg`, etc.). **Do not upload only `hero-library-v2`**: 26 portrait references point to JPEGs in the repository root.
3. In Netlify, create a **new, separate site** using manual deploy / Netlify Drop. Upload the entire extracted repository folder. Do not select or update the existing VEXTER3 site.
4. Open `https://<new-preview-site>.netlify.app/hero-library-v2/`. The root URL may be blank because the V2 page is in a subfolder. The exact site hostname is assigned by Netlify; do not assume it in advance.
5. Keep the new preview URL private where possible, or remove the temporary site after review. Manual deploys are snapshots; subsequent GitHub commits require a fresh manual upload.

## Browser acceptance checklist

- Desktop: 27 cards; portraits uncropped; each card opens its matching hero profile; close button, backdrop, and Escape work; no broken images.
- Filters: name search, faction Warrior/Ranger/Warlock, UR/SSR rarity, and combinations; empty-state message; counts update correctly.
- Mobile: two-column cards at narrow widths; portrait details remain visible; controls fit without horizontal page scrolling; long tables scroll horizontally inside the profile; overlay can scroll and close.
- Accessibility: keyboard Tab cycles within open dialog; focus returns to the card on close; text and buttons remain legible.
- Content: compare several profiles against approved Markdown, especially numbered skill priorities, team-composition tables, and Exclusive Weapon/Awakening statuses.

## Known limits

Repository source and asset-path QA have passed (27 portraits, 27 profiles, 27 manifest matches). This guide does **not** certify rendered browser behavior. Review the actual temporary site before authorizing publication.
