# CV Agent-Direction Rework — Implementation Spec (Path R)
**Date:** 2026-05-05
**Status:** Phase 2 — Implementation Ready (awaiting Chris approval before code edits)
**Target file(s):** `cv.html`, `css/cv.css`, `js/cv.js` (no JS changes for v1)
**Supersedes:** Path R adjustment of `2026-05-05-cv-agent-direction-rework-design.md` (Phase 1 brainstorm)

---

## Overview

Enrich and restructure existing `cv.html` so agent-direction reads as the page spine, not as a single section. Path R: keep ~80% of existing markup, expand `#how-i-work` into a 3-block structure (Approach + The Stack + Process), insert a new Selected Tooling section, add role-split rows to Notable Projects, re-order sections so AI-direction leads.

This is a **delta**, not a rebuild. Existing copy is strong (commits `81c0ed0`, `2e1510a`, `d7bbe85` already trimmed and tightened the AI prose). The locked Q1-Q4 + structural A from Phase 1 are achievable as additions on top.

Phase 1 brainstorm doc: `2026-05-05-cv-agent-direction-rework-design.md` (locked decisions, dig set, original proposal). Read first if you want the why.

---

## Path R Rationale

Phase 1 spec assumed a structural rebuild. Reading `cv.html` (472 lines) showed the existing structure is already most of the way there:
- Hero already says "Unity Developer · AI-Directed Engineer" + 3-line AI pitch.
- `#how-i-work` section already exists with strong copy (4 paragraphs, tools list, proof line).
- "AI Development Stack" already exists as a Skills sub-card.

Path R locked: enrich existing markup, restructure section flow, add NEW sections only where the locked Q1-Q4 require depth not currently surfaced (commands/memory/KB/Forge/audit pillars; worked example; Selected Tooling).

---

## Locked Decisions Recap (from Phase 1)

| Slot | Decision |
|------|----------|
| Reconcile | Target is `cv.html`, not `resume.html` |
| Q1 angle | Future-market: agent-direction as headline |
| Q2 scope | Rebuild → **enrich** (Path R adjustment) |
| Q3 depth | Full ecosystem (commands + memory + KB + Forge + audit) |
| Q4 pillars | All three at depth (cc-healer + DEEP-INDEX + audit grades) |
| Structural | A — story-led |
| Path | R — restructure + enrich |
| Q1 default | Osmani: paraphrase + adapt to actual flow |
| Q2 default | Selected Tooling: surface what's shareable, mark rest "in progress" |
| Q3 default | Worked example: meta — this very session arc |
| Q4 default | Visual ambition: schematic v1, dashboard v2 |

---

## Final Section Order (Re-Ordered)

```
1. Hero                               (unchanged markup)
2. How I Work with AI                 (EXPANDED — 3 sub-blocks)
   2a. Approach                       (existing copy, kept as opener)
   2b. The Stack                      (NEW — 5 pillars)
   2c. Process                        (NEW — worked example)
3. Selected Tooling                   (NEW — link-list to artifacts)
4. Notable Projects                   (existing + role-split row)
5. Experience (Work History)          (unchanged, demoted from slot 2 to slot 5)
6. Earlier Roles                      (unchanged, split out as own row)
7. Skills & Background                (existing, AI Stack card optionally trimmed)
8. Education                          (unchanged, split out as own row)
9. Contact + Recruiter Brief          (unchanged)
```

**Reorder rationale:** agent-direction reads as page spine (slots 2-4) before chronological work history. Recruiter scanning the print PDF still gets Experience prominently — print stylesheet hides Process and adjusts ordering for that medium.

---

## Section 1 — Hero (UNCHANGED)

Existing markup at `cv.html:91-103` preserved. The hero already does what locked Q1 requires.

**Optional refinement (defer-able):** swap the `hero-pitch` final line for a 1-link proof anchor if a stack artifact is shareable today (per §3 Selected Tooling). If no shareable artifact, leave existing copy.

---

## Section 2 — How I Work with AI (EXPANDED)

Existing `<section id="how-i-work">` at `cv.html:294-330` becomes the **container**. Internal markup restructured into 3 sub-blocks separated by visible dividers (1px orange-tinted top borders, matching existing `.cv-timeline` and `.edu-row` patterns).

### 2a. Approach (existing copy, kept verbatim)

Preserve current `.ai-block` markup (`cv.html:299-323`) and `.ai-pitch` (`cv.html:325-328`). This is the opening voice and stays as the entry point.

### 2b. The Stack (NEW)

Five pillars covering Q3 ecosystem. Schematic-style, lo-fi (per Q4 default).

**HTML markup** (insert after `.ai-pitch`, before `</section>` close at `cv.html:330`):

```html
<div class="ai-stack reveal">
  <h3 class="ai-stack-title">The Stack</h3>
  <p class="ai-stack-intro">
    What "AI-directed" actually means, in artifacts.
  </p>
  <div class="stack-pillars">
    <div class="stack-pillar">
      <h4 class="sp-name">Commands</h4>
      <p class="sp-desc">
        Custom slash-commands that route work &middot;
        <code>/_yours</code> for owned execution,
        <code>/_surf</code> for research,
        <code>/_think</code> for tradeoff analysis.
        Each carries pre-flight gates and decision policy.
      </p>
    </div>
    <div class="stack-pillar">
      <h4 class="sp-name">Memory</h4>
      <p class="sp-desc">
        Project-scoped + global persistent context.
        Past decisions, feedback rules, and project state survive between sessions.
      </p>
    </div>
    <div class="stack-pillar">
      <h4 class="sp-name">Knowledge Bases</h4>
      <p class="sp-desc">
        Anchor docs and research notes co-located with each project (<code>knowledge/research/</code>).
        Ground-truth references for AI agents working in-repo.
      </p>
    </div>
    <div class="stack-pillar">
      <h4 class="sp-name">Forge</h4>
      <p class="sp-desc">
        <!-- TBD: Chris fills in actual claudeforge / Forge tooling description -->
        [PLACEHOLDER &mdash; describe Forge artifact]
      </p>
    </div>
    <div class="stack-pillar">
      <h4 class="sp-name">Audit</h4>
      <p class="sp-desc">
        Review agents that catch what I&rsquo;d miss alone &middot;
        <strong>cc-healer</strong> for skill quality,
        <strong>DEEP-INDEX</strong> for context-coverage gaps,
        <strong>audit grades</strong> for plan-vs-output reconciliation.
      </p>
    </div>
  </div>
</div>
```

**Note on em-dashes:** the placeholder `&mdash;` above must be replaced with `&middot;` or rephrased before commit (em-dash policy per `feedback_portfolio_em_dash_purge.md`). I left `&mdash;` in only as a TBD marker so it's grep-able.

**CSS additions** (append to `css/cv.css`):

```css
/* The Stack — pillar grid */
.ai-stack {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(255,152,0,0.08);
}

.ai-stack-title {
  font-family: 'Anton', sans-serif;
  font-size: 1.4rem;
  letter-spacing: 1px;
  color: #f5f5f5;
  margin-bottom: 8px;
}

.ai-stack-intro {
  font-family: 'Raleway', sans-serif;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 24px;
  max-width: 580px;
}

.stack-pillars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.stack-pillar {
  padding: 16px 18px;
  border: 1px solid rgba(255,152,0,0.12);
  background: rgba(255,255,255,0.015);
  border-radius: 2px;
}

.stack-pillar .sp-name {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 3px;
  color: #ff9800;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.stack-pillar .sp-desc {
  font-family: 'Raleway', sans-serif;
  font-size: 0.85rem;
  color: #aaa;
  line-height: 1.6;
  margin: 0;
}

.stack-pillar .sp-desc code {
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 0.78rem;
  color: #ffb74d;
  background: rgba(255,152,0,0.06);
  padding: 1px 4px;
  border-radius: 2px;
}

.stack-pillar .sp-desc strong {
  color: #f5f5f5;
  font-weight: 700;
}
```

### 2c. Process (NEW)

One worked-example session arc (default: this very rework session, per Q3 default). Step-list format, 6 steps.

**HTML markup** (insert after `.ai-stack` block):

```html
<div class="ai-process reveal">
  <h3 class="ai-process-title">Process &middot; A Worked Example</h3>
  <p class="ai-process-intro">
    What a real session looks like, prompt to ship. Example: this CV rework itself.
  </p>
  <ol class="process-steps">
    <li>
      <strong>Brainstorm</strong> &middot;
      lock angle, scope, depth via decision-policy gates.
      Output: Phase 1 design doc.
    </li>
    <li>
      <strong>Research</strong> &middot;
      surf-and-dig on prior art (multi-agent CV layouts, agent-orchestration vocab).
      Output: tagged dig set with tier ratings.
    </li>
    <li>
      <strong>Reconcile</strong> &middot;
      anchor-verify against existing <code>cv.html</code>.
      Caught a fork mid-flight: rebuild &rarr; enrich.
      Output: Path R adjustment.
    </li>
    <li>
      <strong>Implementation spec</strong> &middot;
      Phase 2 doc with HTML/CSS deltas, print rules, scope flags.
      Output: this document.
    </li>
    <li>
      <strong>Code phase</strong> &middot;
      diff-by-diff edits, each reviewed before commit.
    </li>
    <li>
      <strong>Verify</strong> &middot;
      mobile breakpoints, print PDF export, accessibility check before merge.
    </li>
  </ol>
  <p class="ai-process-tail">
    Pattern: sequential pipeline + handoff chain.
    Audit trail at <code>docs/handoffs/2026-05-05-cv-rework-...</code>.
  </p>
</div>
```

**CSS additions:**

```css
/* Process — worked example */
.ai-process {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(255,152,0,0.08);
}

.ai-process-title {
  font-family: 'Anton', sans-serif;
  font-size: 1.4rem;
  letter-spacing: 1px;
  color: #f5f5f5;
  margin-bottom: 8px;
}

.ai-process-intro {
  font-family: 'Raleway', sans-serif;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 20px;
  max-width: 620px;
}

.process-steps {
  list-style: none;
  counter-reset: step;
  padding: 0;
  margin: 0;
}

.process-steps li {
  counter-increment: step;
  position: relative;
  padding-left: 40px;
  padding-bottom: 14px;
  font-family: 'Raleway', sans-serif;
  font-size: 0.9rem;
  color: #aaa;
  line-height: 1.65;
}

.process-steps li::before {
  content: counter(step);
  position: absolute;
  left: 0;
  top: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid rgba(255,152,0,0.4);
  font-family: 'Orbitron', sans-serif;
  font-size: 0.7rem;
  color: #ff9800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.process-steps li strong {
  color: #f5f5f5;
  font-weight: 700;
}

.process-steps li code {
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 0.78rem;
  color: #ffb74d;
  background: rgba(255,152,0,0.06);
  padding: 1px 4px;
  border-radius: 2px;
}

.ai-process-tail {
  font-family: 'Raleway', sans-serif;
  font-size: 0.85rem;
  color: #888;
  margin-top: 16px;
  font-style: italic;
}

.ai-process-tail code {
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 0.78rem;
  color: #aaa;
}
```

---

## Section 3 — Selected Tooling (NEW)

NEW section between How I Work with AI and Notable Projects. Inline link-list to shareable artifacts. Mark non-shareable items as "in progress" without link (per Q2 default).

**HTML markup** (insert as new `<section>` between `#how-i-work` close at `cv.html:330` and Skills section at `cv.html:333`):

```html
<section style="border-top: 1px solid rgba(255,152,0,0.08);">
  <div class="section-wrap">
    <p class="section-label reveal">Tooling</p>
    <h2 class="section-title reveal">Selected Tooling</h2>
    <p class="tooling-intro reveal">
      Concrete artifacts from the AI-directed setup. Open where shareable, otherwise marked.
    </p>
    <div class="tooling-list reveal">
      <div class="tool-item">
        <span class="tl-name">cc-healer</span>
        <span class="tl-detail">
          [TBD: 1-line description]
          <span class="tl-status">In progress</span>
        </span>
      </div>
      <div class="tool-item">
        <span class="tl-name">DEEP-INDEX</span>
        <span class="tl-detail">
          [TBD: 1-line description]
          <span class="tl-status">In progress</span>
        </span>
      </div>
      <div class="tool-item">
        <span class="tl-name">claudeforge</span>
        <span class="tl-detail">
          [TBD: 1-line description]
          <span class="tl-status">In progress</span>
        </span>
      </div>
      <div class="tool-item">
        <span class="tl-name">Audit grades</span>
        <span class="tl-detail">
          [TBD: 1-line description]
          <span class="tl-status">In progress</span>
        </span>
      </div>
    </div>
  </div>
</section>
```

**CSS additions:**

```css
/* Selected Tooling */
.tooling-intro {
  font-family: 'Raleway', sans-serif;
  font-size: 0.95rem;
  color: #aaa;
  margin-top: 8px;
  max-width: 620px;
}

.tooling-list {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tool-item {
  display: flex;
  gap: 16px;
  align-items: baseline;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255,152,0,0.06);
}

.tool-item:last-child { border-bottom: none; padding-bottom: 0; }

.tl-name {
  font-family: 'Anton', sans-serif;
  font-size: 1rem;
  color: #f5f5f5;
  letter-spacing: 0.5px;
  white-space: nowrap;
  min-width: 180px;
}

.tl-detail {
  font-family: 'Raleway', sans-serif;
  font-size: 0.88rem;
  line-height: 1.6;
  color: #999;
}

.tl-detail a { color: #ff9800; text-decoration: none; }
.tl-detail a:hover { color: #ffb74d; }

.tl-status {
  display: inline-block;
  margin-left: 8px;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 2px;
  color: #666;
  text-transform: uppercase;
  padding: 2px 8px;
  border: 1px solid #444;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .tool-item { flex-direction: column; gap: 4px; }
  .tl-name { min-width: auto; }
}
```

---

## Section 4 — Notable Projects (DELTA: role-split per project)

Existing `.pb-item` markup at `cv.html:248-286` extended with a role-split row.

**HTML delta** (per `.pb-item`, insert after closing `</span>` of `.pb-detail`):

```html
<span class="pb-roles">
  <span class="pb-role-mine">I did &middot; [scope]</span>
  <span class="pb-role-ai">AI-directed &middot; [scope, or "n/a &middot; pre-AI era"]</span>
  <span class="pb-role-out">Outcome &middot; [delivered, live, in-progress]</span>
</span>
```

For pre-AI projects (Caterham, Fraport, SITA work), `pb-role-ai` says `n/a &middot; pre-AI era` verbatim. This is the honest authorship-split disclosure (per Phase 1 anti-sycophancy hook).

**CSS additions:**

```css
/* Project role-split */
.pb-item {
  flex-wrap: wrap;
}

.pb-roles {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 6px;
  margin-left: 216px; /* aligns under .pb-detail; matches .pb-name min-width 200 + gap 16 */
  font-size: 0.78rem;
  font-family: 'Raleway', sans-serif;
  color: #777;
  width: 100%;
  flex-basis: 100%;
}

.pb-role-mine,
.pb-role-ai,
.pb-role-out {
  padding-left: 14px;
  position: relative;
}

.pb-role-mine::before { content: '\25B8'; position: absolute; left: 0; color: #ff9800; }
.pb-role-ai::before   { content: '\25B8'; position: absolute; left: 0; color: #4a7fc1; }
.pb-role-out::before  { content: '\25B8'; position: absolute; left: 0; color: #6c6; }

@media (max-width: 768px) {
  .pb-roles {
    margin-left: 0;
    font-size: 0.75rem;
  }
}
```

---

## Sections 5-9 (UNCHANGED, but reordered)

| Section | Source location pre-rework | New slot |
|---------|----------------------------|----------|
| Experience (Work History) | `cv.html:106-211` (`<section>` only the timeline portion) | Slot 5 (was slot 2) |
| Earlier Roles | `cv.html:213-237` (the `.edu-row` inside the Experience section) | Slot 6 (split into own `.section-wrap`) |
| Skills & Background | `cv.html:333-393` | Slot 7 |
| Education | `cv.html:395-407` (the `.edu-row` inside Skills) | Slot 8 (split into own `.section-wrap`) |
| Contact + Recruiter Brief | `cv.html:412-455` | Slot 9 |

**Optional Skills trim:** the "AI Development Stack" skill-card at `cv.html:358-369` overlaps with the new The Stack section. Recommend trimming this card to 2-3 strong tags only (`Spec-Driven Prompting`, `Diff Review & QA`, `MCP Servers & Custom Skills`) and let The Stack section carry the depth. Defer if Chris wants to keep the card as a tag-summary.

---

## Print Stylesheet Additions

Existing print rules at `css/cv.css:431-556` already hide `.ai-block` and `.ai-pitch`. Path R needs print rules for new sections.

| Block | Print? | Why |
|-------|--------|-----|
| 2a Approach | hidden (existing rule) | Already excluded |
| 2b The Stack | **show, simplified** | PDF should include the stack vocabulary |
| 2c Process | hidden | Process narrative is web-medium, doesn't fit a CV PDF |
| 3 Selected Tooling | **show** | Concrete artifacts belong on PDF |
| 4 Project role-split | **show** | Honesty hook is critical in PDF context |

**CSS additions** (append inside the `@media print { ... }` block):

```css
@media print {
  /* New: Approach already hidden via existing .ai-block rule */

  /* New: hide Process (web-only) */
  .ai-process { display: none !important; }

  /* New: simplify The Stack — single column, no borders */
  .ai-stack {
    page-break-inside: avoid;
    border-top: 1px solid #ccc !important;
  }
  .ai-stack-title { color: #000 !important; }
  .ai-stack-intro { color: #444 !important; }
  .stack-pillars {
    display: block !important;
    column-count: 2;
    column-gap: 16px;
  }
  .stack-pillar {
    border: none !important;
    background: transparent !important;
    padding: 0 0 12px !important;
    page-break-inside: avoid;
  }
  .stack-pillar .sp-name { color: #c46500 !important; }
  .stack-pillar .sp-desc { color: #222 !important; }
  .stack-pillar .sp-desc code,
  .stack-pillar .sp-desc strong {
    color: #000 !important;
    background: transparent !important;
  }

  /* New: Selected Tooling for print */
  .tooling-intro { color: #444 !important; }
  .tool-item {
    page-break-inside: avoid;
    border-bottom-color: #ccc !important;
  }
  .tl-name { color: #000 !important; }
  .tl-detail { color: #333 !important; }
  .tl-status {
    color: #666 !important;
    border-color: #999 !important;
  }

  /* New: Project role-split for print */
  .pb-roles {
    color: #444 !important;
    margin-left: 0 !important;
  }
  .pb-role-mine::before,
  .pb-role-ai::before,
  .pb-role-out::before {
    color: #c46500 !important;
  }
}
```

---

## JS Changes

**None required for v1.** All new sections are static markup. The existing `.reveal` IntersectionObserver in `js/cv.js:142-146` covers fade-in animation for new `.reveal`-tagged elements automatically.

**Optional v2:** if dashboard-style visualization upgrades happen (per Q4 v2 path), JS to drive interactive stack diagrams or process-step animation would be added then. Out of scope for this spec.

---

## Files Changed

| File | Change |
|------|--------|
| `cv.html` | Re-order sections; expand `#how-i-work` into Approach + Stack + Process; insert new Selected Tooling section; add `.pb-roles` row to each `.pb-item` |
| `css/cv.css` | Append CSS for `.ai-stack`, `.stack-pillar`, `.ai-process`, `.process-steps`, `.tooling-*`, `.pb-roles`; extend `@media print` block with new rules |
| `js/cv.js` | No changes |

---

## Constraints

- No edits to `portfolio.html` (Phase B, deferred).
- No new external dependencies (vanilla HTML/CSS/JS only).
- No 3D / heavy-animation hero.
- **No reintroducing em-dashes on `cv.html`** (memory: `feedback_portfolio_em_dash_purge.md`). Use `&middot;` for separators, `&ndash;` for date ranges, rephrase elsewhere.
- No verbatim Osmani quotes.
- Mobile-first; preserve existing 375 / 768 / 1280 breakpoints.
- Print/PDF export path stays clean — every new section has explicit print rules.

---

## Out-of-Scope Flags (Chris fills during code phase)

1. **Stack pillar copy for "Forge"** — placeholder in markup; Chris fills with actual claudeforge or equivalent description.
2. **Selected Tooling descriptions** — all four artifacts (cc-healer, DEEP-INDEX, claudeforge, audit grades) need 1-line descriptions + status (in-progress vs shareable URL).
3. **Process worked-example handoff link** — replace inline `<code>docs/handoffs/...</code>` text with link to actual handoff doc once stable.
4. **Project role-split content** — each `.pb-item` needs role-split filled per project. AI-era projects (post-2024) have real splits; pre-AI projects say `n/a &middot; pre-AI era` verbatim.
5. **Optional Skills AI-Stack card trim** — keep as 7-tag card or trim to 3 essentials? Defer call to code phase.
6. **`&mdash;` placeholder in The Stack Forge pillar** — must be replaced before commit.

---

## Estimated Scope

- HTML markup additions: ~110 lines (3 new sub-blocks + 1 new section + 9 role-split rows)
- CSS additions: ~140 lines (screen) + ~45 lines (print)
- JS changes: 0 lines
- Total file delta: ~295 net new lines across `cv.html` + `css/cv.css`

---

## Next Step

Chris reviews this spec then approves or overrides. On approval, code-edit phase begins on `cv.html` and `css/cv.css`. Phase 3 will be diff-by-diff implementation, each commit reviewed before moving to next.

If section ordering or any new-section design needs revision, edit this spec and re-approve before Phase 3.
