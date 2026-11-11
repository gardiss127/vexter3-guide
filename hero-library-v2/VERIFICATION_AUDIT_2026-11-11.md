# Hero Library V2 — Verification Audit (2026-11-11)

**Branch:** `hero-library-fresh-start-2026-11-11`
**Scope:** Ten user-approved V2 hero records. This audit is not a certification that their complete approved contents have been independently verified against the original messages and images.
**Live website:** Do not modify `main` without explicit approval.

| Hero | Markdown record | Exact original portrait committed to V2 | Source-fidelity / remaining work |
|---|---|---|---|
| Arthur | Saved | No | Substantial approved text; compare against source |
| Marlena | Saved | No | Substantial approved text; compare Awakening details and source |
| Harper | Saved | No | Substantial approved text; compare against source |
| Zoya | Saved | No | Substantial recovered text; compare against source |
| Daskal | Saved | No | Battle Will and Deadly Pierce effects incomplete; verify weapon and approved text |
| Shadow | Saved | No | Recovered detailed skills; verify against original approval |
| Cynthia | Saved | No | Exact approved skill upgrade ranking missing |
| Louis | Saved | No | Exact approved skill upgrade ranking and weapon 7/9-star details missing |
| Bell | Saved | No | Substantial recovered text; compare against source |
| Red Lady | Saved | No | Substantial recovered text; compare against source |

## Completion requirements
1. Retrieve each original portrait from the original user-uploaded image, never from legacy hero library, search results or generated substitutes.
2. Commit the exact portrait binary in V2 assets and update each profile's image reference.
3. Compare all ten saved Markdown profiles with their explicit user-approved original drafts, preserving descriptions, skill order, weapon/Awakening eligibility, and corrections.
4. Recover Daskal's missing two skill descriptions, Cynthia and Louis's exact skill rankings, and Louis's remaining weapon effects **from source**, not guesses.
5. Confirm no Investment Notes, no copied variable damage percentages, and two tanks + two DPS + support in recommended team.
6. Re-check repository tree and each referenced portrait; mark a profile verified only when both content and image are confirmed.

**Status:** 10/10 Markdown records; 0/10 original portrait assets; full ten-profile verification **NOT COMPLETE**.

## Next step
Recover original conversation image files and approved text. If they are inaccessible in current tools, ask the user to reattach them rather than inventing or substituting.
