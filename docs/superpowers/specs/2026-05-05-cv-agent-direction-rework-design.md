# CV Agent-Direction Rework — Design Spec
**Date:** 2026-05-05
**Status:** Phase 1 — Brainstorm. **Superseded by Path R adjustment in `2026-05-05-cv-agent-direction-rework-implementation.md`** (anchor-verify against `cv.html` forked the original "rebuild" framing into "enrich + restructure" — see implementation spec for the locked Path R shape). This doc kept as historical brainstorm + dig-set reference.
**Target file(s):** `cv.html` (root, 472 lines)
**Phase B (deferred):** `portfolio.html` — out of scope this round

---

## Overview

Rework `cv.html` to lead with agent-direction / meta-tooling as the headline framing, anchored in Chris's actual stack (commands ecosystem, memory, knowledge bases, Forge, audit tools). Structural pattern A: story-led — narrative arc through the page, prints clean, mobile-clean.

This is a **deliberate rebuild**, not a reversal of the AI-section trim in commits `2e1510a` + `d7bbe85`. Those commits cleared runway by removing AI prose that wasn't pulling weight; they didn't close the door on AI-as-headline. The rework re-introduces AI-direction at a different load-bearing level: as the spine, not as a sidebar.

`resume.html` is a 12-line redirect on the `portfolio` branch and is NOT the target — six anchors confirmed (branch state, recent commits, project memory, makeover plan, redirect file content, file deltas).

---

## Locked Decisions

| Slot | Decision | Source |
|------|----------|--------|
| Reconcile | Target is `cv.html`, not `resume.html` | 6 anchors agreed |
| Q1 — angle | Future-market: agent-direction as headline | `/_yours` prior turn |
| Q2 — scope | Rebuild `cv.html` spine | `/_yours` prior turn |
| Q3 — depth | Full ecosystem (commands + memory + KB + Forge + audit) | `/_yours` prior turn |
| Q4 — pillars | All three at depth (cc-healer + DEEP-INDEX + audit grades) | `/_yours` prior turn |
| Structural | A — story-led | This spec, Tier-1 dig validated |

Pattern C (split-rail sticky) deferred as v2 evolution path. Pattern B (career-led) excluded — contradicts AI-section-trim direction.

---

## Research Synthesis (Dig Set)

### High-fit — The Code Agent Orchestra (Addy Osmani)

URL: https://addyosmani.com/blog/code-agent-orchestra/

**Core reframe:** conductor → orchestrator. "You used to pair with one AI. Now you manage an agent team." Plan, spawn, verify, integrate. Metric reframe: "agent teams managed" beats "lines written."

**Adoption call:** scaffold yes, quote no. Use the framing as bones; voice it as Chris. Verbatim quoting reads as derivative.

**Visual patterns Chris already has artifacts for:**
- Dashboard screenshots (DEEP-INDEX, audit grades)
- Kanban / task-state viz (cc-healer)
- Git worktree diagrams (peer-session namespacing)

### Medium-fit — Claude Design 3D Helix (Ileana Marcut)

URL: https://ileanamarcut.substack.com/p/claude-design

**Calibration role:** ambition-ceiling reference. Framing portable, visualization is not.

**Anti-pattern lesson:** 3D interactive hero, animation-heavy aesthetics. Chris's audience (tech leads, hiring managers, collaborators) reads fast; structural A is print-clean by construction. Don't import the Helix.

**Adoptable:** narrative pattern Problem → exploration → system → reflection → deliverables. "Guided authorship, not automation" framing as anti-sycophancy guard.

### Pattern vocab — Azure AI Agent Orchestration Patterns

URL: https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns

**Named patterns:** sequential, concurrent, group chat, handoff, magentic.

**Maps onto Chris's stack:**
- Sequential pipeline → audit → spec → impl chain
- Handoff → skill chains (`/_surf` → `/_think` → `/_yours`)
- Orchestrator-worker (implied) → Chris as orchestrator, agents as workers

**Use:** vocabulary for the Process section, not structural inspiration.

### Dropped — DEV.to "Redesigning My Portfolio with Claude Code"

URL: https://dev.to/saidmounaim/redesigning-my-portfolio-with-claude-code-frontend-design-skill-1njc

Content too thin. Describes the redesign workflow, no usable section structure or visual patterns. Genre proof, not prior art.

---

## Proposed Spine — Structural A (Story-Led)

Top-to-bottom narrative. Each section earns its place via specific artifacts from Chris's actual work.

```
[ 1. Hero             orchestrator framing, 1-line proof link        ]
[ 2. Origin           Unity dev → AI direction, authorship-split     ]
[ 3. The Stack        memory / commands / KB / Forge / audit         ]
[ 4. Process          how I direct, one worked session arc           ]
[ 5. Selected Work    projects with role-split (Chris / AI / outcome)]
[ 6. Selected Tooling ecosystem artifacts surfaceable as links       ]
[ 7. CTA / Contact    work invitation                                ]
```

### Section 1 — Hero

- **Headline:** orchestrator framing in Chris's voice. NOT a verbatim Osmani quote.
- **Sub:** 2026 reality, not aspirational. Concrete: "I direct agent teams to ship production code. I write the plan and verify the output."
- **Proof:** 1-line link to most-impressive artifact (DEEP-INDEX or cc-healer).
- **Visual:** schematic of the stack OR a single dashboard screenshot. NO 3D. NO heavy animation.

### Section 2 — Origin

- **Beats:** Unity dev (real, decade+ expertise) → discovery of AI-directed workflow → current setup.
- **Honesty hook:** explicit authorship-split. "I write the plan and verify the output. AI writes most of the code." Direct application of Marcut's "guided authorship, not automation" framing.

### Section 3 — The Stack

**Pillars (per Q3 ecosystem decision):**
- **Commands** — `/_yours`, `/_surf`, `/_think`, `/_handoff`, others. Brief description + when used.
- **Memory** — project-scoped + global, with one concrete example (e.g., `feedback_portfolio_em_dash_purge.md`).
- **Knowledge bases** — `knowledge/research/`, anchor docs.
- **Forge** — claudeforge or equivalent (TBD per Open Q2).
- **Audit** — cc-healer, DEEP-INDEX, audit grades.

**Visual:** schematic or dashboard. Each pillar links to one artifact (repo, README, or screenshot).

### Section 4 — Process

- **Worked example:** one real session arc, end-to-end. Candidate from recent handoffs (see Open Q3).
- **Pattern names referenced:** orchestrator-worker, sequential pipeline, handoff (Azure vocab), in passing — not as the headline.

### Section 5 — Selected Work

**Projects (per Q4 three-pillar depth):**
- Caterham renderer
- Thrion Arena
- Portfolio rebuild itself (meta — the artifact you're reading is the deliverable)

**Per-project structure:**
- 1-line elevator
- "I did" / "AI did" / "Outcome" — explicit role split
- Link to artifact (repo, demo, or detail page)

### Section 6 — Selected Tooling

Open-sourceable / showable artifacts from the stack. Each links to a repo, spec, or README. Candidates:
- `cc-healer`
- `DEEP-INDEX`
- `claudeforge`
- Audit grade rubric
- Specific high-impact skills

**Cut criterion:** if an artifact isn't shareable yet, defer. Don't fake-link.

### Section 7 — CTA

Contact + work invitation. Match home page CTA voice (commit `81c0ed0`).

---

## Layout / Visual Choices

| Concern | Decision |
|---------|----------|
| Mobile-first | Yes (375 / 768 / 1280 breakpoints, per project `CLAUDE.md`) |
| Print-clean | Yes — story-led A is print-friendly by construction |
| Animation | Minimal — no hero animation, simple fade-in only |
| 3D / interactive viz | NO (Marcut ambition-ceiling lesson) |
| Visual style | Schematic / dashboard screenshots over decorative imagery |
| Em-dashes on `cv.html` | Forbidden (memory: `feedback_portfolio_em_dash_purge.md`) |
| Typography | Match existing portfolio system; no new fonts |
| Color | Use existing `:root` custom properties; no new palette |
| External deps | None (vanilla HTML/CSS/JS only, per project `CLAUDE.md`) |

---

## Anti-Scope

- No code edits to `cv.html` until Chris approves this spec.
- No touching `portfolio.html` (Phase B, deferred).
- No reintroducing em-dashes on `cv.html`.
- No new external dependencies.
- No 3D / heavy-animation hero.
- No verbatim Osmani quotes.

---

## Open Questions for Chris

1. **Osmani framing depth.** Use his Plan/Spawn/Verify/Integrate as the Process section's structural backbone (paraphrased), or only borrow the vocabulary and structure Process around your own workflow narrative? **Default:** paraphrase + adapt to actual flow.

2. **Selected Tooling section (§6).** Surface specific artifacts now (cc-healer, DEEP-INDEX, claudeforge, audit grades), or defer to v2 until each is more shareable? **Default:** surface what's shareable today, mark the rest as "in progress" with no link.

3. **Worked example (§4).** Pick which real session arc? Candidates from recent handoffs:
   - `2026-05-01-portfolio-audit-extension`
   - `2026-05-03-option-b-execution`
   - `2026-05-04-home-bridge-framing`
   - `2026-05-05-cv-rework-agent-direction-angle` (this very one — most meta)
   **Default:** the meta one. It's recent, it demonstrates the system live, and the page-you're-reading IS the deliverable.

4. **Visual ambition.** Schematic diagrams (lo-fi, fast) vs styled dashboards (mid-fi, more time, more impact)? **Default:** schematic for v1, dashboard upgrade as a Phase-2 follow-up.

---

## Next Step

Chris reviews this spec and answers the four open questions (or overrides any locked decision). On approval, this moves to:

- **Phase 2 — Implementation spec** (CSS classes, exact section markup, JS where needed) — modeled after `2026-03-17-gamer-timeline-design.md` format.
- **Phase 3 — Code-edit phase** on `cv.html`.

If overridden, re-spec from the locked-decisions block down.
