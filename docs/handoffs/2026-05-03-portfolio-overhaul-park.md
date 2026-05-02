# Portfolio Overhaul — Parked 2026-05-03

## Status
**PARKED.** Project is on hold. Chris started this as a showcase-project pass, stopped because of overlapping workload from **Obsidian Moon** (Steam title contract) and **Caterham** (live OEM configurator work). Will return to it; no fixed resume date.

## Why this doc exists
The dossier (`knowledge/research/2026-05-03-early-projects-dossier.md`) captures the *raw findings*. This doc captures the *direction synthesis* — what we'd do next if we picked it back up. Together they're the resume kit.

## Branch state
- **Branch:** `portfolio` (off `makeover`)
- **Commits this session:**
  - `d3be7c7` — knowledge: add dossier of 7 early Unity projects + skills delta
  - `d40ab73` — knowledge: lock dossier open questions (DMB framing resolved, 4 binds default)
  - This handoff doc adds one more.
- **Not pushed.** Local-only.
- **Not merged into makeover or main.** When resuming, decide whether to keep iterating on `portfolio` or rebase.

## Resume checklist (start here on next session)
1. Read this doc.
2. Read `knowledge/research/2026-05-03-early-projects-dossier.md` (the dossier).
3. Confirm Chris still wants **Option B** below (or override).
4. Run `/_plan option B` to generate the implementation plan.
5. Execute plan. First commit lands on `portfolio` branch.

## Locked direction — Option B
*"Locked plan: cards + skills + 3 detail pages."*

### Scope
- **Rewrite all 7 project cards on `unity.html`** with named systems (no generic "A* / wave logic" copy).
- **Restore Greater Game card** (Pyles Studio mobile quiz, dropped by makeover, has YouTube `ldTZRpw-oGg`).
- **Add Hack&Slash card** as a new entry (active 2024+ Unity 6.2 combat lab).
- **Reframe Darn! My Barn! card**: action shooter, NOT farm management (current copy is wrong — Chris confirmed 2026-05-03).
- **Skills matrix update**: 4 new chips + 1 tier bump.
- **3 detail pages** at the same level as `caterham.html` (NOT in nav — link from card "Deep Dive" buttons).

### The 7 cards — placement + framing

| # | Card | Section | Action | Key named system to lead with |
|---|---|---|---|---|
| 1 | Caterham Car Configurator | Commercial | Keep | (already detail page) |
| 2 | Fraport VR Experience | Commercial | Keep | Shared 2-user VR (Quest 3) |
| 3 | Obsidian Moon | Commercial | Keep | Custom cutscene system |
| 4 | Super Pokemon Bros | Commercial | Keep | (Pokefest 2) |
| 5 | Compare the Pokemons | Commercial | Keep | (Pokefest 3) |
| 6 | **Greater Game** | Pyles Studio | **RESTORE** | Photon multiplayer rooms + avatar customizer + daily rewards (mobile quiz, 2019-2020, YT `ldTZRpw-oGg`, Lead Developer credit) |
| 7 | Thrion Arenas | Pyles Studio | Keep | (already strong copy) |
| 8 | **Island Project (IslandP)** | Pyles Studio | **REWRITE** | Verlet-rope fishing + thirst survival (event-driven) + `[BurstCompile]` character mechanics (lead with one of the three) |
| 9 | Thrion Showcase video | Pyles Studio | Keep | (YouTube embed) |
| 10 | Darn! My Barn! | Solo Lab | **REWRITE — framing** | 2D twin-stick action vs farm-monster bosses (Bull/Cow/Chicken). DOTS crowd avoidance + SOAP event arch. NOT "farm management". Anchor: *"Hell came to the barn"*. |
| 11 | Thrion Prototype | Solo Lab | Keep | (already accurate for 2020) |
| 12 | **Post-Apocalyptic Driving (HRS)** | Solo Lab | **REWRITE** | Drive-AND-on-foot dual mode + object-pooled zombies + mobile virtual joystick. Custom RWD car physics. NOT just "tire friction". |
| 13 | **Fantasy Tower Defence (TD Lab)** | Solo Lab | **REWRITE** | 5 champion classes (Archer / Fire / Ice / Poison wizards) with distinct kits + NodeBehavior turret state machine + WaveSpawner / UnitBuilder. NOT just "A*". |
| 14 | **Vintage Boxing (YipMan)** | Solo Lab | **REWRITE** | Modifier-key punch grid (8 outputs from 4 keys × 2 buttons) + cursor-targeted Animation Rigging. NOT just "IK". |
| 15 | **Hack&Slash** | Solo Lab | **NEW** | Radial-drag combo selector + Timeline-driven boss phases. Unity 6.2, active. |
| 16 | HDRP Technical Showcase | Solo Lab | Keep | (YouTube embed) |

**Section ordering within Solo Lab (recommended for impact):**
- Lead with Hack&Slash (newest, strongest "creativity" hook)
- Then TD Lab (rewritten, multi-element design depth)
- Then Vintage Boxing (modifier-key novelty)
- Then Darn! My Barn! (corrected framing, action vibe)
- Then HRS Post-Apo (dual-mode novelty)
- Then Thrion Prototype (chronological anchor)
- Close with HDRP Showcase (existing video closer)

### Skills matrix update
**4 chips to add:**
1. **DOTS / Burst** — Familiar tier (single chip). Sources: IslandP `[BurstCompile]`, Cowboy/D!MB! ProjectDawn DOTS.
2. **Animation Rigging** — Very Experienced tier (split out from "Animation (Mecanim/Blend Trees)"). Sources: Hack&Slash MultiAimConstraint, Vintage Boxing Rig + raycast targets.
3. **2D Pipeline (PSB / 2D Animator)** — Experienced tier. Source: Cowboy/D!MB! Bull.psb, sprite shadows, 2D animator controllers.
4. **VR / XR (Meta Quest 3)** — Experienced tier. Source: Fraport contract.

**1 tier bump:**
- **Photon (PUN)** — bump from "Multiplayer (Familiar)" to its own chip in Experienced tier. Justification: Greater Game shipped full lobby/rooms/listings/player-listing flow.

**Final matrix shape:** 5 Production / 9 Very-Exp / 9 Experienced / 1-2 Familiar (depending on whether the catch-all "Multiplayer (Netcode/Mirror)" stays in Familiar after Photon splits out — recommend keeping a generic Multiplayer chip in Familiar and adding Photon explicitly to Experienced).

**Verdict on balance:** OK, not top-heavy. If concerned, move "Animation (Mecanim/Blend Trees)" from Very-Exp down to Experienced now that Animation Rigging carries the Very-Exp flag.

### 3 detail pages
**Caterham pattern. NOT added to nav. Linked via "Deep Dive" button on each card.**

1. **`/hack-slash.html`** — angle: *"Combat input as expression"*. Radial-drag combo selector breakdown, Timeline + Signal boss phase architecture, Animation Rigging camera-pitch aim offset. Newest project = strongest "current craft" signal.
2. **`/island.html`** — angle: *"The world has rules"*. Verlet-rope fishing physics, thirst event-driven survival, Burst-compiled character mechanics, Singleton typology (DDOL/Dominant/Regulator). Pyles Studio anchor.
3. **`/td-lab.html`** — angle: *"Five champions, five kits"*. Per-champion kit breakdown (Fire/Ice/Poison wizards + Archer + Warrior), NodeBehavior turret state machine, WaveSpawner / UnitBuilder full meta-loop.

**Optional 4th** (deferred): `/post-apo.html` for Heavy Rotten Souls dual-mode story.

### Sequencing — recommended order of work
1. **Card rewrites + Greater Game restore + Darn! My Barn! reframe** (single PR-sized commit). Highest visible-improvement-per-effort. Lands the corrected framing first.
2. **Skills matrix update** (small commit, low risk).
3. **Detail page 1: Hack&Slash** (most current, strongest hooks).
4. **Detail page 2: Island Project** (Pyles Studio, broadest system showcase).
5. **Detail page 3: TD Lab** (champion design depth).
6. **(Optional) Detail page 4: Post-Apo** if Chris wants the dual-mode novelty surfaced.

Each step is its own commit, each commit is reversible.

## Locked binds + resolved questions

### Resolved
- ✅ **Darn! My Barn! framing** — action shooter, NOT farm management (Chris confirmed 2026-05-03).

### Default-locked (override on resume if changed mind)
- 🔒 **Hack&Slash card placement** — Solo Lab section, leads the section.
- 🔒 **Detail pages** — 3 (Hack&Slash + IslandP + TD Lab); HRS optional 4th.
- 🔒 **Greater Game year** — `2019-2020`.
- 🔒 **DOTS/Burst chip naming** — single chip "DOTS / Burst".
- 🔒 **Photon split** — keep generic "Multiplayer (Netcode/Mirror)" in Familiar, add separate "Photon (PUN)" chip in Experienced.

## Soul-keeps (preserve from current portfolio when rewriting)
- The honest "lab" framing for Solo Lab — don't market-speak it into "Showcase".
- Year tags on cards (`2018`, `2019`, `2020`) — they communicate longevity better than any "X+ years experience" stat.
- Short eyebrow labels on sections (`Solo Lab`, `Studio`, `Commercial`).
- The "every system written by hand" voice — already in current hero, deepen rather than replace.
- YouTube embed pattern for video proof (Greater Game, Thrion showcase, HDRP showcase all use it).

## DO-NOT list
- **DO NOT** re-import Y2K-style `[INFO]` / `[DATA]` tech-decals + corner-decal divs from the original `projects.html`. They were dropped deliberately by the makeover.
- **DO NOT** add detail pages to the top-level nav. The 3-page nav (Home / CV / Unity) is sacrosanct per memory `project_portfolio_makeover.md`. Detail pages live off card "Deep Dive" links only, like Caterham.
- **DO NOT** introduce em-dashes in active HTML pages. They were purged in commit `541ca7e`. Memory: `feedback_portfolio_em_dash_purge.md`.

## Open question (surfaced during synthesis, not in dossier)
- **Section structure for Hack&Slash placement:** dossier defaults to "Solo Lab" but Hack&Slash is *active* (2024+) — pairs awkwardly with 2018 Post-Apo / 2019 Boxing. Optional refinement: introduce a small fourth section header `Active Labs` containing just Hack&Slash, sitting above `Solo Lab` (older experiments). ~5 lines of HTML/CSS. **Default = single Solo Lab, Hack&Slash leads.** Decide on resume.

## References
- **Dossier:** `knowledge/research/2026-05-03-early-projects-dossier.md` (commit `d3be7c7` + `d40ab73`)
- **Memory:** `project_portfolio_makeover.md` (3-page philosophy, conventions, stack)
- **Original portfolio (for soul-keeps):** `git show 6a29ba0:projects.html` — has the original Y2K tech-decals, Greater Game entry with YT `ldTZRpw-oGg`, original Solo Lab framing
- **Current portfolio:** `unity.html` (commit `b00ec6c`)
- **Unity 6.2 evidence (Hack&Slash):** `F:\DevCrow\Thrion Unity Files\Hack&Slash\ProjectSettings\ProjectVersion.txt` → `m_EditorVersion: 6000.2.7f2`
- **Skills matrix anchor:** `unity.html` lines 196-255

## When you resume
- One-line ping to Chris: *"Resuming portfolio overhaul. Read `docs/handoffs/2026-05-03-portfolio-overhaul-park.md`. Still option B, or has anything changed?"*
- If still option B → `/_plan option B` → execute.
- If something changed (e.g. priorities shifted, more projects to surface, new Unity work since) → re-run `/_research --deep` on the new folders, update dossier, then synthesize.
