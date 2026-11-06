# VEXTER3 — Review status (November 2026)

**Do not merge yet.** The live GitHub Pages site remains on `main`.

## Verified
- The publishing package contains **16 HTML files** (15 handbook pages plus Hero Library entry page).
- All internal `href` and `src` file targets in the package resolve to files included in the package (no missing targets in static link audit).
- The Hero Library dataset contains **26 records**.
- `hero-library/app.js` loads `heroes.json` via fetch, which requires an HTTP server. Opening the HTML directly as a `file://` URL may not work.
- The review branch includes the corrected `assets/` and `hero-library/` directories.
- The review branch main stylesheet was restored from the publishing package.

## Not verified
- Real browser behavior: this execution environment blocks local HTTP browser navigation (`ERR_BLOCKED_BY_ADMINISTRATOR`).
- Visual/mobile layout and search/filter/language switching.
- Line-by-line comparison with the 17.35 MB original single-file live guide.
- Hero skill factual accuracy and translation quality.

## Safest manual preview
Do **not** change the GitHub Pages publishing branch or merge this PR merely to preview it.

On a computer with Python installed:
1. Download this branch as ZIP via **Code → Download ZIP** and extract it.
2. Open a terminal in the extracted repository folder.
3. Run `python -m http.server 8000` (Windows may require `py -m http.server 8000`).
4. Open `http://localhost:8000/` in a browser.
5. Check Home, Hero Library, English/French, search/filter, a hero profile, images, and mobile browser sizing.

A temporary external static hosting preview is another option, but avoid uploading a public guide without deciding to make the preview public.
