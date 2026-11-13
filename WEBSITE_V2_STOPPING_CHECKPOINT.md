# VEXTER3 Website V2 — Approved Work Checkpoint (2026-11-13)

**Status: PAUSED — development only. DO NOT merge into `main`, publish, or deploy without explicit user approval.**

## Approved features
1. **Hero Library V2 — APPROVED, FROZEN.** 27 hero cards with approved original portraits, qualitative profiles, positioning, faction and role data. This checkpoint branch was created from `hero-library-fresh-start-2026-11-11` and therefore **contains the Hero Library V2 source and assets** under `hero-library-v2/`. Approved commit previously recorded: `e9a4793c78699735a09a0d1bc9a62587b480ab13`.
2. **Events Library V2 — APPROVED AS A LOCAL PREVIEW, NOT YET COMMITTED TO THIS BRANCH.** Twelve event guides; cards show one language at a time; EN/FR site-wide preference saved across navigation; navigation and mobile improvements. Do not alter approved strategies. Exclude Recluse Merchant. Local package: `VEXTER3_Events_Library_V2_English_French_Switch_Preview.zip`.
3. **Rate My Squad — PvP Edition — APPROVED AS A LOCAL PROTOTYPE, NOT YET COMMITTED TO THIS BRANCH.** 27 heroes, SSR/UR support, 2 front + 3 back positions, owned-hero roster, three simple investment tiers, explainable role/position/faction advice, and distinct immediate versus future UR suggestions. Local package: `VEXTER3_Rate_My_Squad_PvP_Prototype.zip`.

## Integration preview
Local package: `VEXTER3_Website_V2_Integration_Preview.zip`. It includes shared navigation, Events Library and Rate My Squad. **It is not release-ready:** the approved Hero Library source/portraits must be integrated from `hero-library-v2/` (not the older copy); squad reports need French translation and browser QA. Full site integration is pending.

## Resume checklist
- Transfer the three approved local preview ZIPs into this development branch, or otherwise add their extracted contents without replacing the approved Hero Library V2.
- Integrate the Hero Library V2, preserving all 27 portraits/profiles and original contain-fit display.
- Make all pages, including Rate My Squad recommendations, respect the site-wide EN/FR toggle.
- Test all links, assets, desktop/mobile layouts, language persistence, SSR-heavy and mixed PvP scenarios.
- Show user a complete integrated preview; obtain **explicit launch approval** before touching `main` or production.

## Critical honesty about preservation
This GitHub checkpoint currently preserves the **full approved Hero Library V2** and this **state/next-steps record**. The Events Library and Rate My Squad files remain in their local preview ZIPs and are **not yet backed up in GitHub**. Do not mistake this checkpoint for a full three-feature GitHub backup.
