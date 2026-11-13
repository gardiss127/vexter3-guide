# V2 French Fixes — Approved for release preparation (2026-11-13)

Owner reviewed the French fixes preview and said "Looks good."

The reviewed package is `VEXTER3_V2_French_Translation_Fixes_Preview.zip` (local preview; **not yet committed as expanded site files**).

- 27 English hero profiles remain approved and unchanged.
- 27 French-language profiles in `hero-library-v2/profiles-fr/` are condensed translations, not line-by-line replicas.
- Rate My Squad French slot labels, investments, factions/roles, and generated advice.
- Mobile header compacted.
- Site-wide EN/FR preference maintained.

## Release gate
**Do not merge to main.** Pages publishes from `main` at `/(root)`. The branch is not deployable until the expanded contents of the reviewed ZIP are added at repository root on this branch and checked. The GitHub checkpoint's existing ZIPs are archival backups only. Browser QA remains outstanding.

After files are committed and verified, open a PR from `website-v2-release-prep-2026-11-13` to `main`; only merge after explicit launch approval.
