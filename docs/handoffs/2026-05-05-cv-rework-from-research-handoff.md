# Rework Handoff: CV Voice-Pass (Post-Deep-Research)

**Date:** 2026-05-05
**For:** portfolio-session Claude (next session, executing the rework on `portfolio` branch)
**From:** dev-workbench Claude (deep-research instance)
**Source:** verified findings in companion file `docs/handoffs/2026-05-05-cv-deep-research-report.md`

This handoff is self-contained. You should not need to re-read the research report to execute the reworks. Every number below is filesystem-verified. Section anchors reference current `cv.html` line numbers (file is 624 lines as of 2026-05-05).

---

## Context

The portfolio session reached batch 2 of the cv.html voice pass (commit `90073b4`) and Chris flagged it as AI slop: numbers were pulled from a draft handoff and asserted live without filesystem checks. The deep-research instance ran 8 mechanical filesystem audits and 5 parallel research digs to ground every claim.

Bottom line: the structure is sound, the framing is sound, but three sets of numbers are wrong and one principle has no source. Everything else needs minor tightening only. Three items are Chris-only escalations the portfolio session should NOT auto-resolve.

The 6 Process steps + 4 of 4 Pillar Principles + 3 of 4 Pillar Cadences are OK or near-OK. The Forge pillar has 3 honest candidates. The 9 .pb-item role-splits have an evidence-based answer. The em-dash policy is intact (zero rendered).

---

## Reworks (per section)

### ai-block-para-2 (cv.html:303-309) - REWORK REQUIRED

**Current (commit `d9347eb`, batch 1):**
> "...persistent memory across sessions (~10 files this project), 9 custom skills authored next to ~250 plugin skills installed, and 3 review agents (cc-healer, DEEP-INDEX, audit grades) that catch what I'd miss alone."

**Issues:**
- "~10 files this project": close (actual 8). Acceptable rounding.
- "9 custom skills authored": technically correct for `~/.claude/skills/` (9 SKILL.md packages) but undersells. Chris's own 2026-05-04 skills audit at `F:/DevCrow/Dev/knowledge/research/2026-05-04-skills-audit.md` line 11 says: "35 skill files total" (34 commands + 1 SKILL.md `/_optimize`). A recruiter checking the count finds 9 in `skills/` and ignores 41 slash commands in `commands/`.
- "~250 plugin skills installed": WRONG. Actual = 66 SKILL.md (`find ~/.claude/plugins -name 'SKILL.md' | wc -l = 66`). The 250-ish number plausibly came from confusing all-`.md` files (369) with skills.
- "3 review agents (cc-healer · DEEP-INDEX · audit grades)": all 3 mischaracterized. cc-healer is a Phase 0 spec at `F:/DevCrow/Dev/docs/cc-healer-v1-spec.md` (build gate 2026-05-10), not a working agent. DEEP-INDEX is a 102-line memory tier index file at `~/.claude/projects/F--DevCrow-Dev/memory/DEEP-INDEX.md`, not an agent. "audit grades" is the `/_grade` slash command, a per-artifact rubric, not an agent.

**Chris-only escalation BEFORE rework:** the "3 review agents" reframe needs Chris's pick from 3 options:
- (a) drop the count, name real review patterns: "weekly memory audits, /_grade rubric per artifact, per-phase audit trails"
- (b) keep "3" but say "3 review patterns" not "3 review agents": "weekly memory audit, /_grade per artifact, per-phase reconciliation"
- (c) strip the line entirely; let the Audit pillar copy below carry the depth

**Recommended replacement (assumes Chris picks option b):**
> "...persistent memory across sessions (8 project-scoped, 151 cross-project), 35 custom skills authored next to 66 plugin skills installed, and 3 review patterns (weekly memory audit, `/_grade` rubric per artifact, per-phase reconciliation) that catch what I'd miss alone."

**Receipt anchors for each claim in the recommended replacement:**
- `8 project-scoped`: count `~/.claude/projects/F--DevCrow-portfolio-D3vCrow-github-io/memory/*.md` (excluding MEMORY.md index + .bak)
- `151 cross-project`: `find ~/.claude/projects/F--DevCrow-Dev/memory -name '*.md' | wc -l`
- `35 custom skills`: cited in `F:/DevCrow/Dev/knowledge/research/2026-05-04-skills-audit.md` line 11
- `66 plugin skills`: `find ~/.claude/plugins -name 'SKILL.md' | wc -l`
- `weekly memory audit`: `~/.claude/skills/memory-audit/SKILL.md` + audit_weekly_*.md snapshots
- `/_grade rubric`: `~/.claude/commands/_grade.md`
- `per-phase reconciliation`: 15 `*-audit-trail.md` files in `docs/handoffs/`

If Chris picks (a) or (c), restructure accordingly.

---

### Hero pitch (cv.html:97-101) - VERIFIED, NO CHANGE

**Current (commit `dc280d5`):**
> "8+ years shipping production Unity, from Caterham configurator ownership to senior VR contracts. Outside Unity, I direct AI through an environment I built and tuned over a year of production work. I write the spec, review every diff, ship what I can explain."

**"8+ years shipping production Unity":** defensible. Earliest documented Unity work = Heavy Rotten Souls 2018 origin per `knowledge/research/2026-05-03-early-projects-dossier.md` § 7. Greater Game (Pyles, 2019-2020, Lead Developer credit) is the earliest "shipping production" anchor. 2018 to 2026 = 8 yr Unity exposure; 2019-2026 = 7 yr shipping production. Unity.html commit `ce4c42a` already locks the "8+" framing for cross-page consistency. KEEP at "8+".

**"Tuned over a year of production work":** RESOLVED 2026-05-05 per Chris testimony. Anchor: Python Automations at `F:/DevCrow/Python/Automations`. Multi-tool progression ChatGPT, then Antigravity, then Cursor, then Claude Code. Repo git-init 2026-03-16 ("Initial commit: Python Automations Toolbox"); active AI-triage feature work through 2026-05-01. Pre-git-init multi-tool work extends the timeline earlier. The "environment I built and tuned" language fits the multi-tool progression: each new AI coding tool got integrated. KEEP as-is.

---

### ai-proof (cv.html:319-323) - VERIFIED, NO CHANGE

**Current (commit `d9347eb`):**
> "...The framing for this section came from 5 parallel research agents I dispatched in one session. The setup gets sharper per project."

Verified via commit `ee2fd30` and surf doc metadata at `knowledge/research/2026-05-05-ai-directed-engineer-market-signals.md` line 2 ("Source: /_surf research, 5 parallel digs"). KEEP as-is.

---

### ai-pitch (cv.html:325-330) - VERIFIED, NO CHANGE

> "One hire delivers Unity, web, and tooling, with production quality holding because the direction is mine. I architect and review; AI handles the throughput."

Voice-locked in batch 1 per the deep-research brief §3. KEEP.

---

### ai-stack-intro (cv.html:333-335) - VERIFIED, NO CHANGE

> "5 pillars · directing AI systems to do the majority of the work."

Volaris JD anchor phrase intact. "5 pillars" matches the rendered structure. KEEP.

---

### Commands pillar (cv.html:337-351) - REWORK REQUIRED

**N (Number)** line 347:
- **Current:** "9 custom skills authored, ~250 plugin skills installed"
- **New:** `"35 custom skills authored, 66 plugin skills installed"`
- Receipts: see ai-block-para-2 above.

**P (Principle)** line 348:
- **Current:** "Clear contextual prompts as durable artifact"
- **Verdict:** ✓ verbatim paraphrase from surf doc line 42 (Osmani #1) + line 73 ("Context engineering artifacts (CLAUDE.md, system prompts, ADRs) publicly visible").
- KEEP

**C (Cadence)** line 349:
- **Current:** "Skill quality reviewed via cc-healer"
- **Issue:** cc-healer is unbuilt (Phase 0 spec, build gate 2026-05-10).
- **New (preferred):** `"Skill quality reviewed via /_grade rubric"` (cited: `~/.claude/commands/_grade.md`, real, ships today)
- **New (alternative if Chris wants the codename):** `"Skill quality reviewed via cc-healer (ships 2026-05-10)"` (date-qualified; weaker for a CV, reviewers will probe)

The `/_grade` rewording is the receipt-grade pick.

---

### Memory pillar (cv.html:353-363) - LIGHT REWORK

**N (Number)** line 359:
- **Current:** "~10 project-scoped, ~152 cross-project"
- **New:** `"8 project-scoped, 151 cross-project"` (or keep "~10, ~152" if rounding is the voice; both defensible)
- Receipts as above.

**P (Principle)** line 360:
- **Current:** "Trust but verify across sessions"
- **Verdict:** ⚠ "Trust but verify" is verbatim from surf doc lines 39 + 43 (Osmani #2). The "across sessions" extension is unsourced (surf doc applies the phrase to AI-output review, not cross-session memory).
- **Options:**
  - (a) KEEP as-is and treat "across sessions" as Chris's extension (acceptable for a CV).
  - (b) TIGHTEN to `"Trust but verify AI outputs"` (verbatim cite) for strict receipt-grade.
- Recommend (a) unless Chris wants strict-cite.

**C (Cadence)** line 361:
- **Current:** "Memory consolidated end-of-week"
- **Verdict:** ✓ real (`~/.claude/skills/memory-audit/SKILL.md` + 7 weekly snapshots `audit_weekly_2026-04-12`, `-04-15`, `-04-19`, `-04-26`, `-04-27`)
- KEEP

---

### KB pillar (cv.html:365-375) - REWORK REQUIRED

**N (Number)** line 371:
- **Current:** "4 research notes, 13 handoff trails, 3 specs, 2 plans (this project)"
- **New:** `"5 research notes, 15 handoff trails, 3 specs, 2 plans (this project)"`
- Receipts:
  - 5 research files: `Glob knowledge/research/*.md` returns 5 (2026-04-29, 2026-05-01, 2026-05-03 dossier, 2026-05-03 narrative, 2026-05-05 market signals)
  - 15 handoff files: `Glob docs/handoffs/*.md` returns 15 (will grow to 17 today)
  - 3 specs ✓
  - 2 plans ✓
- **Caveat:** the handoff count is moving. Counts will be 17 by end-of-day after this report + handoff land. Chris may prefer "running per-phase audit trail" framing without a hard count to avoid same-day staleness.

**P (Principle)** line 372:
- **Current:** "Ground-truth references over vibes"
- **Issue:** ✗ no source. "Ground-truth" / "vibes" vocabulary doesn't appear in the surf doc.
- **New (cited):** `"Receipts over claims, numbers with cadence"` (from surf doc line 116: "These are the receipts. The pattern from research: claims need numbers; numbers need cadence")
- The replacement also ties cleanly to the N+C structure already on the page.

**C (Cadence)** line 373:
- **Current:** "Co-located per project, audited per phase"
- **Verdict:** ✓ real (co-located: `knowledge/research/`, `_inbox/`, `docs/handoffs/`, `docs/superpowers/specs/`, `plans/` all in-repo. Per-phase: 15 `*-audit-trail.md` files).
- KEEP

---

### Forge pillar (cv.html:377-382) - FILL FROM CANDIDATES

**Current placeholder copy:**
> "[Placeholder · describe Forge artifact]"

**Recommended (today, with cc-healer in build):**

```html
<div class="stack-pillar">
  <h4 class="sp-name">Forge</h4>
  <p class="sp-desc">
    Tooling I scaffold out of session work &middot;
    <code>save-skill</code> writes a fresh SKILL.md from the current workflow,
    <code>skill-creator</code> polishes and measures it.
    Forge bench grows skill by skill.
  </p>
  <ul class="sp-meta">
    <li><span class="sp-meta-label">N</span> 2 bench tools shipping, 1 product (cc-healer) in build</li>
    <li><span class="sp-meta-label">P</span> Do once, scaffold, run forever</li>
    <li><span class="sp-meta-label">C</span> Forge new tool when a manual workflow recurs 3+ times</li>
  </ul>
</div>
```

**Receipts:**
- save-skill: `~/.claude/skills/save-skill/SKILL.md`
- skill-creator: `anthropic-skills:skill-creator` plugin
- cc-healer in build: `F:/DevCrow/Dev/docs/cc-healer-v1-spec.md` (Phase 0 setup; Phase 1 build gate 2026-05-10) + memory `~/.claude/projects/F--DevCrow-Dev/memory/project_devcrow_forge_seed_cc_healer_2026-05-01.md`

**Recommended (post-2026-05-10, after cc-healer Phase 1 ships):** swap the lead to cc-healer, demote save-skill / skill-creator to supporting bench tools.

**Anti-pattern:** do NOT promote cc-healer as shipped today. Spec status is unambiguous: Phase 0, build gated.

**Don't conflate (gotcha):** the writer slash commands `/_save`, `/_remember`, `/_keep`, `/_learn` write *memory*, not new tooling. They belong under Memory pillar, not Forge.

---

### Audit pillar (cv.html:384-396) - REWORK REQUIRED

**Prose** lines 386-390:
- **Current:** "Review agents that catch what I'd miss alone · cc-healer for skill quality, DEEP-INDEX for context-coverage gaps, audit grades for plan-vs-output reconciliation."
- **Issues:** all 3 named items are mischaracterized as "agents" (see ai-block-para-2 above).
- **New (assumes Chris picks option b in ai-block-para-2):**

```
Review patterns that catch what I'd miss alone &middot;
weekly memory audit for stale references and broken links,
<code>/_grade</code> rubric per artifact for correctness/completeness/clarity/risk/fit,
per-phase audit trails for plan-vs-output reconciliation.
```

If Chris picks option (a) or (c) for ai-block-para-2, mirror the choice here.

**N (Number)** line 392:
- **Current:** "3 named review agents"
- **New:** `"3 review patterns"` (mirrors the prose reframe)

**P (Principle)** line 393:
- **Current:** "Output per unit of human time, not velocity"
- **Verdict:** ✓ near-verbatim from surf doc line 68
- KEEP

**C (Cadence)** line 394:
- **Current:** "Plan-vs-output reconciliation per phase"
- **Verdict:** ✓ real (`/_grade` skill + plan-then-audit pairs visible across `docs/handoffs/` 2026-05-01 through 2026-05-05)
- KEEP

---

### Process steps (cv.html:436-466) - LIGHT REWORK ON STEP 4

5 of 6 steps are technique-correct as written. Only step 4 has a load-bearing fix.

**Step 1 (Brainstorm)** line 437-441: KEEP. Optional embed: cite Phase 1 design doc path (`docs/superpowers/specs/2026-05-05-cv-agent-direction-rework-design.md`).

**Step 2 (Research)** line 442-446: KEEP. Optional embed per the DIRECTION-REWRITE comment at cv.html:420-421:
- New text: `"surf-and-dig on prior art (5 parallel digs this session). Output: knowledge/research/2026-05-05-ai-directed-engineer-market-signals.md"`

**Step 3 (Reconcile)** line 447-452: KEEP. Optional embed: "Path R adjustment (locked in implementation spec L19-27)".

**Step 4 (Implementation spec)** line 453-457 - REWORK:
- **Current:** "Output: implementation-ready design doc."
- **Issue:** generic, no path cited.
- **New (per DIRECTION-REWRITE comment cv.html:424-426):**

```
<strong>Implementation spec</strong> &middot;
Phase 2 doc with HTML/CSS deltas, print rules, scope flags.
Output: implementation-ready spec at <code>docs/superpowers/specs/2026-05-05-cv-agent-direction-rework-implementation.md</code>.
```

This is the load-bearing fix. The path exists (verified, 676 lines).

**Step 5 (Code phase)** line 458-461: KEEP. Optional embed: cite one commit hash (`90073b4`) for receipt-grade.

**Step 6 (Verify)** line 462-465: KEEP. Optional embed per DIRECTION-REWRITE cv.html:429:
- New text: `"mobile breakpoints (375/768/1280), print PDF export, accessibility check before merge."`

---

### Process tail (cv.html:475-479) - LIGHT REWORK

**Current:**
> "Pattern: sequential pipeline + handoff chain.
> Audit trail at `docs/handoffs/2026-05-05-cv-rework-...`."

**Issue:** TBD code-string. The actual handoff doc to link is `docs/handoffs/2026-05-05-cv-phase-3-scaffold-audit-trail.md` (committed) or this rework handoff itself once it lands.

**New:**
```
Pattern: sequential pipeline &middot; every phase produces an audit trail.
Latest at <code>docs/handoffs/2026-05-05-cv-phase-3-scaffold-audit-trail.md</code>.
```

Optional anchor (per DIRECTION-REWRITE cv.html:472-473): "every Phase produces an audit trail handoff doc" is a discipline marker recruiters notice.

---

### .pb-item role-splits (cv.html:248-286) - 9 ROWS

Per the spec at `docs/superpowers/specs/2026-05-05-cv-agent-direction-rework-implementation.md` § Section 4 (line 474), each `.pb-item` gets a `<span class="pb-roles">` row with three lines: `I did`, `AI-directed`, `Outcome`.

AI-direction cutoff is **2026-04-11** (earliest documented Rook artifact). Pre-cutoff projects get `n/a · pre-AI era`. Active-in-2026 projects get a real split.

| # | Project | I did | AI-directed | Outcome |
|---|---|---|---|---|
| 1 | Caterham | sole owner, full pipeline, 4+ yr | n/a · pre-AI era for delivery; post-2026-04 maintenance only | live |
| 2 | Hyundai Tucson | solo: assets, build, configs, QC | n/a · pre-AI era | delivered |
| 3 | Subaru Solterra | solo: assets, build, configs, QC | n/a · pre-AI era | delivered |
| 4 | Fraport VR | senior contract, shared-VR Quest 3 | n/a · pre-AI era | delivered |
| 5 | Thrion Arenas | solo dev, 4 champions, FMOD, PlayFab, modular arch | architecture reviews + targeted refactors under my spec | in-progress |
| 6 | Obsidian Moon | cutscene system, visual revamp, player feedback | n/a · pre-AI era for the bulk; final-polish overlap only | live on Steam |
| 7 | Super Pokémon Bros | solo Unity delivery, reworked + expanded for Pokefest 3 | n/a · pre-AI era | delivered (20k+ visitors) |
| 8 | Compare the Pokémons | solo, concept to delivery, paid contract | n/a · pre-AI era | delivered (20k+ visitors) |
| 9 | Darn! My Barn! | solo-shipped in 17 days | n/a · pre-AI era | delivered (live on Itch.io) |

**Chris-only escalation for projects 1, 5, 6:** the splits assume the documented AI cutoff (2026-04-11). If Chris has a defensible earlier AI-direction date for any of these projects (especially Caterham maintenance work or Obsidian Moon final polish), update the corresponding `AI-directed` line.

---

### Selected Tooling (NEW SECTION - cv.html does not currently have it)

The deep-research brief §8 task 2 asks: "IS THIS SECTION ON cv.html? Search the file."

**Answer: NO.** Selected Tooling is described in the implementation spec (`2026-05-05-cv-agent-direction-rework-implementation.md` § Section 3, lines 357-471) as a NEW section to insert between How I Work with AI and Notable Projects. It was scaffolded in batch 1 plans but not yet committed.

If the portfolio session decides to ship Selected Tooling in this voice-pass, the spec at section 3 has the markup template + 4 placeholder rows (cc-healer, DEEP-INDEX, claudeforge, Audit grades) all marked "in progress".

**Caveat:** the spec's 4 placeholder rows reuse the same fictional/mischaracterized names as ai-block-para-2. If the section ships, the row content needs the same reframe:
- Replace `cc-healer · [TBD] · in progress` with: `cc-healer · workspace health-check CLI · in build (Phase 0; ships 2026-05-10)`
- Replace `DEEP-INDEX · [TBD] · in progress` with: `DEEP-INDEX · lazy-loaded memory tier index · shipping in personal use`
- Replace `claudeforge · [TBD] · in progress` with: drop entirely (no real artifact named claudeforge in setup) OR replace with `save-skill · scaffold reusable tooling out of session work · shipping`
- Replace `Audit grades · [TBD] · in progress` with: `/_grade · 5x3 rubric per artifact · shipping`

**Phantom-TBD verdict:** the section is planned but not yet shipped. Chris can defer to a later commit; not a load-bearing slop fix.

---

### Skills AI-Stack card trim (cv.html:512-521) - 7 vs 3 TAG DECISION

**Current 7 tags:**
1. Claude Code (strong)
2. Spec-Driven Prompting (strong)
3. Diff Review & QA (strong)
4. Claude API · Cursor
5. ChatGPT / GPT-5
6. MCP Servers & Custom Skills
7. Midjourney / Sora

**Decision:** trim or keep, taste call.

**Recommended 3-tag trim (highest signal):**
- Claude Code (strong)
- Spec-Driven Prompting (strong)
- Diff Review & QA (strong)

Rationale: these 3 carry the most agent-direction signal. Cursor/ChatGPT/Midjourney are common-tool tags every AI-aware applicant has. The 3 strong-tagged items match the page's voice ("I write the spec. AI writes the code. I review every diff."). Defensible recommendation, not a hard call.

**Defer-able:** if Chris wants the comprehensive "I use everything" framing, KEEP the 7-tag layout. The trim is a polish decision, not a slop fix.

---

### Em-dash scrub - NO ACTION REQUIRED

An em-dash grep on `cv.html` (covering both literal char and HTML entity name) found 13 hits, all inside `<!-- DIRECTION-REWRITE -->` HTML comments at lines 404, 407, 414, 418, 420, 422, 424, 427, 428, 429, 468, 473.

**Rendered output is clean.** The DIRECTION-REWRITE blocks containing the em-dashes are scheduled for removal during this voice-pass rework anyway. After the rework, re-run the em-dash grep on `cv.html` to confirm post-cleanup zero count.

---

## Anti-Scope (Don't Touch)

- `portfolio.html` (Phase B, deferred)
- `unity.html` (separate scope)
- `main` branch (we're on `portfolio`)
- Any file outside the `cv.html` + `css/cv.css` + this rework scope

The 16 pre-existing WIP files in the portfolio session start git status are Chris's prior work. Read for context only, don't stage.

**Hard:** no `git add`, no `git commit`, no `git push` until the rework is reviewed.

---

## Decisions Locked (don't re-open)

Carrying forward from the deep-research brief §3 + §4:

1. **Architecture-first, not co-pilot.** "I architect, AI executes within direction, I review every diff."
2. **Dual attribution.** Chris architects + reviews; AI executes throughput.
3. **Receipts, not claims.** Every assertion backed by an artifact.
4. **No apology framing.** Drop "Why it matters", "(via AI-directed)", parenthetical disclaimers.
5. **Volaris JD anchor phrase intact:** "Directing AI systems to do the majority of the work" stays.
6. **No em-dashes on cv.html.** Use `&middot;`, `&ndash;`, or rephrase.
7. **Concrete > abstract.** Named projects beat generic claims.
8. **Osmani guarantor frame, paraphrased.** Not verbatim quote.
9. **8+ years framing on cv.html** (matches unity.html commit `ce4c42a`).
10. **5 pillars structure** (Commands · Memory · KB · Forge · Audit). Locked.
11. **Path R: enrich + restructure, not rebuild.** Locked in implementation spec.

---

## Chris-Only Escalations (true blockers)

The portfolio session should NOT auto-resolve these:

1. ~~**Hero pitch "tuned over a year of production work"** (cv.html:99)~~ RESOLVED 2026-05-05: Python Automations + multi-tool history anchors the claim. KEEP as-is.
2. **"3 review agents" reframe** (cv.html:308 + cv.html:386-390 + cv.html:392): Chris picks (a) drop count + name patterns, (b) say "3 review patterns", or (c) strip the line. Recommendation in this handoff assumes (b).
3. **Pillar Memory P-line "Trust but verify across sessions"** (cv.html:360): Chris picks (a) keep "across sessions" extension or (b) tighten to "Trust but verify AI outputs" (verbatim cite).
4. **Skills AI-Stack 7-tag vs 3-tag** (cv.html:512-521): Chris's taste call. Recommendation in this handoff is 3-tag.

The portfolio session should pause on items 2-4 before editing the corresponding line. Item 1 is closed.

---

## Recommended Commit Sequence

3 logical commits:

**Commit 1: receipt corrections (no Chris-only items)**
- ai-block-para-2: number fixes (8 / 151 / 35 / 66) + 3-review-patterns reframe (assumes Chris approved option b)
- Commands pillar N: 35 / 66
- Memory pillar N: 8 / 151 (or keep ~10 / ~152 if rounding wins)
- KB pillar N: 5 / 15 / 3 / 2
- KB pillar P: replace with cited line
- Audit pillar prose: 3 review patterns reframe
- Audit pillar N: 3 review patterns
- Process step 4: cite implementation spec path
- Process tail: link to phase-3-scaffold audit trail
- Forge pillar: fill from candidates (save-skill + skill-creator + cc-healer in build)

**Commit 2: 9 .pb-item role-splits**
- All 9 rows per the table above

**Commit 3: Chris-only items (after escalation resolved)**
- Memory pillar P (if Chris picks tightening option)
- Skills AI-Stack trim (if Chris picks 3-tag)
- (Hero pitch is already resolved 2026-05-05 with Python Automations anchor; no rework needed there.)

If Chris wants tighter atomic commits, split commit 1 into per-pillar commits.

---

## Verification After Rework

Before Chris reviews the rendered page:

1. Em-dash grep on `cv.html` (covering both literal char and HTML entity name) returns zero hits (rendered + comments).
2. Render at 375 / 768 / 1280 breakpoints.
3. Print PDF export passes (Stack 2-col layout, Process hidden, Selected Tooling shown if shipped).
4. `git log --oneline portfolio` shows the planned commits in order.
5. Lighthouse a11y score holds at the prior baseline.

---

## File Anchor List (everything cited in this handoff)

| Reference | Path | What it backs |
|---|---|---|
| Surf doc | `knowledge/research/2026-05-05-ai-directed-engineer-market-signals.md` | Pillar Principles + 5-dig + Volaris anchor |
| Slop markers | `knowledge/research/2026-04-29-ai-slop-markers.md` | Em-dash policy |
| Best practices | `knowledge/research/2026-05-01-portfolio-cv-best-practices.md` | Print rules, a11y, breakpoints |
| Early projects dossier | `knowledge/research/2026-05-03-early-projects-dossier.md` | 8+ years defensibility, project history |
| Phase 1 design | `docs/superpowers/specs/2026-05-05-cv-agent-direction-rework-design.md` | Process step 1 artifact |
| Phase 2 spec | `docs/superpowers/specs/2026-05-05-cv-agent-direction-rework-implementation.md` | Process step 4 artifact, Section 3-4 markup |
| cc-healer spec | `F:/DevCrow/Dev/docs/cc-healer-v1-spec.md` | cc-healer Phase 0 status |
| Skills audit | `F:/DevCrow/Dev/knowledge/research/2026-05-04-skills-audit.md` | "35 skill files total" anchor |
| /_grade | `~/.claude/commands/_grade.md` | Audit pillar cadence + Commands pillar cadence rewording |
| memory-audit | `~/.claude/skills/memory-audit/SKILL.md` | Memory pillar cadence |
| save-skill | `~/.claude/skills/save-skill/SKILL.md` | Forge candidate 1 |
| Forge seed memory | `~/.claude/projects/F--DevCrow-Dev/memory/project_devcrow_forge_seed_cc_healer_2026-05-01.md` | Chris's "DevCrow Forge" framing |
| Phase 3 scaffold trail | `docs/handoffs/2026-05-05-cv-phase-3-scaffold-audit-trail.md` | Process tail link target |
| Companion research report | `docs/handoffs/2026-05-05-cv-deep-research-report.md` | Full verification table + audit method |

---

End of handoff.
