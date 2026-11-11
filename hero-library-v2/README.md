# Hero Library V2 — clean rebuild

Status: 10 approved hero records preserved; full source-fidelity and portrait verification pending

This is the sole working directory for the new Hero Library. Start with UR heroes, one at a time. No profile, portrait, skill text, translation, or asset from the legacy `hero-library/` folder or old preview ZIPs may be copied or treated as approved. Obtain user-supplied original portrait and screenshots for each new profile, write the profile, obtain explicit approval, and save that approved version here before moving on.

## Approval workflow
1. Original portrait and screenshots supplied by user.
2. Draft role, skills (qualitative; no exact damage percentages), priorities, gear, synergy, exclusive weapon, Awakening and applicable milestone descriptions.
3. User reviews and explicitly approves.
4. Save approved profile and portrait to `hero-library-v2/` with status and date.
5. No changes to live `main` without explicit permission.

## Isolation
The inherited `hero-library/` directory on this branch belongs to the existing live website and is **legacy material only**. It is not a source for V2. The old review branch and old Netlify ZIPs are superseded. New V2 content must be authored only under `hero-library-v2/` until publication is separately authorized.

Approved V2 profile records: **10** — Arthur, Marlena, Harper, Zoya, Daskal, Shadow, Cynthia, Louis, Bell, Red Lady.

**Verification status:** All ten Markdown records exist. Exact original portraits are not yet committed to V2. Daskal has two incomplete skill descriptions, Cynthia and Louis have unrecovered approved skill rankings, and Louis has incomplete weapon details. Other recovered profiles still require source comparison. See `VERIFICATION_AUDIT_2026-11-11.md`.

**Workflow:** After each approval, save the full approved profile and exact original portrait to this branch, verify both, then proceed.
