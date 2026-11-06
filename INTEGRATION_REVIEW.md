# VEXTER3 1.0 — Integration review

## Original live site
- The `main` branch contains a single `index.html` file (17,351,430 bytes).
- That file is the published guide. It has **not** been overwritten or deleted.

## Proposed replacement package
- Multipage handbook: 15 HTML pages.
- Separate `hero-library/` with 26 hero profiles, skill data, JavaScript, styles and images.
- Shared `assets/` directory with the handbook images.
- English/French interface.

## Migration risks and checks
- The original is a self-contained HTML page; the new site uses multiple relative paths. Do not replace only `index.html`.
- Compare original sections and embedded images with their multipage equivalents before merging.
- Verify the Hero Library on the deployed preview and test language switching, navigation, search, filters, and images.
- Confirm hero skill descriptions against the user-provided screenshots. Translation completion does not prove factual accuracy.
- Only Marlena, Cynthia and Annie currently have Awakening. Preserve confirmed exclusive weapons for Daskal, Louis and Ulfrid; Annie has no exclusive weapon.

## Release plan
1. Upload and review the complete multipage package on this branch.
2. Test on a GitHub Pages preview or other static host.
3. Open a pull request for review.
4. Merge to `main` only after approval.

**Status:** Review branch prepared. The new site files have not yet been uploaded to GitHub. The live guide is unchanged.
