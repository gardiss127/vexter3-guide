# Hero Library V2 — clean rebuild

**Current build: 27 saved hero profiles, 27 individually approved original portraits, and a standalone review webpage (`index.html`) with card grid, filters, and clickable profiles.**

This is the isolated working directory for the Hero Library rebuild on `hero-library-fresh-start-2026-11-11`. All ten written profiles were reviewed one by one and their final approval was recorded in their individual Markdown files.

**Approved heroes:** Arthur, Marlena, Harper, Zoya, Daskal, Shadow, Cynthia, Louis, Bell, Red Lady.

**Audit:** [Written Profile Verification Audit](VERIFICATION_AUDIT_2026-11-11.md).

## Mandatory approval-and-save rule

When the user says **"looks good"** about a hero's written profile, treat it as **final approval**. Immediately commit that complete approved profile to this same repository (`gardiss127/vexter3-guide`), branch (`hero-library-fresh-start-2026-11-11`), and directory (`hero-library-v2/profiles/`). Confirm that the GitHub commit succeeded **before** presenting or beginning review of the next hero. Do not accumulate unsaved approvals, silently change approved wording, overwrite another approved profile without permission, or modify `main`. If the commit fails, explicitly report the failure and do not claim the profile was saved.

## Portraits are the final phase

Finish reviewing, approving, and immediately saving **all written hero profiles** before beginning any portrait work. Missing portrait assets must **not block written-profile approval or saving**. After the written profiles are complete, attach and verify the exact original user-supplied portraits as a separate final phase. Do not generate or substitute portraits, and do not change the live `main` branch without explicit authorization.

## Preserved requirements
- Qualitative skill descriptions without variable damage percentages or level-dependent hero ATK values.
- Five skills, recommended skill order, role-appropriate gear, squad synergy, and accurate Exclusive Weapon/Awakening status.
- No Investment Notes section.
- Preserve approved written text; changes require explicit user approval.

## Current preview status
- All 27 original portraits were already uploaded by the user and are linked to the corresponding saved profiles; see [portrait manifest](PORTRAIT_ASSET_MANIFEST_2026-11-11.md).
- A standalone [Hero Library review webpage](index.html) is committed to this isolated branch, with clickable cards, search, filters, and profile views.
- The review webpage has been updated for all 27 approved portraits, with uncropped `object-fit: contain` artwork, clickable profile cards, search and filters, numbered lists, team tables, and keyboard dialog handling. It is **not yet deployed or browser-tested**. The GitHub file viewer shows source, not the rendered webpage.
- Website integration and publication have not been authorized.
- Legacy `hero-library/` content and old preview ZIPs are not approved sources for V2.

**Do not change `main` or the live website without explicit user approval.**

## Final user approval — 2026-11-12

**Status: COMPLETE / USER-APPROVED / HOLD FOR FUTURE INTEGRATION.** The user reviewed the separate Hero Library V2 preview and confirmed they are happy with the result. Treat the 27 approved hero profiles, 27 original portraits, card layout, and functionality as the completed checkpoint. No additional edits are requested. **Do not merge into `main`, modify the existing live website, or publish/integrate V2 until the user explicitly authorizes that step.**
