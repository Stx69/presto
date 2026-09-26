# Post-implementation — codex fix loop

Codex session `01a0def8-017c-76d1-a9d2-61c3d3cd3049` (GPT-6 Astra, `high`), over `b46898f..HEAD`.

## Round 1 — `findings`

| # | Finding | Verdict | Why / fix |
| --- | --- | --- | --- |
| 1 | [Medium] "Merge or close" the open pin PR, then re-run: closing drops that PR's versions (a presto-only re-run carries no noir) | **Adopted** (verified: presto-only selection emits no noir version) | Error message and runbook say merge; closing needs the manual fallback to carry its versions |
| 2 | [Medium] `published` filter misses `bunfig.toml`, whose isolated linker the swap script's paths depend on | **Adopted**, widened to `.bun-version` on the same reasoning | Both added to the filter and to the contract test's required list; neither is written by the Aztec updater |
| 3 | [Medium] `CLOUDFLARE_DEPLOYMENT.md` states fork exclusion as fact and omits the cutover sequence the plan assigned it | **Adopted** (the plan's Phase 4 did list "cutover order") | Fork exclusion labelled unverified; a five-step cutover section added (control, fork check with stop rule, merge, delayed token revocation) |
| 4 | [Low] File headers of `playground-pin.ts` and `workers-build.ts` narrate deployment mechanics | **Adopted** | Trimmed to usage/contract and the production-only invariant |
