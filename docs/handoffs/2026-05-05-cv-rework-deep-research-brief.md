# Deep-Research Brief: CV Voice-Pass Rework

Date: 2026-05-05
From: portfolio session (cv.html voice-pass — batch 2 flagged as AI slop)
To: dev-workbench Claude (deep research instance)
Project: F:/DevCrow/portfolio/D3vCrow.github.io
Branch: portfolio
Stakes: critical — every number on cv.html is a claim Chris has to defend in interviews

---

## 1. Mission

Audit every numeric claim, conceptual claim, and unfilled TBD on cv.html that the portfolio session asserted or planned to assert. Replace asserted-without-grounding with evidence-grounded numbers, paraphrases with citation-traceable references, and TBD-Chris-fills with what's actually in his setup.

Output:
1. Research report (this file's sibling): `docs/handoffs/2026-05-05-cv-deep-research-report.md` — every claim, file paths checked, actual count, source quote where applicable, and verdict (verified / corrected / delete / Chris-only).
2. Return handoff: `docs/handoffs/2026-05-05-cv-rework-from-research-handoff.md` — self-contained brief telling the portfolio session what to rework, where, and with what evidence. Format spec at §10 below.

---

## 2. Why This Is Critical

Chris flagged batch 2 (commit `90073b4`) as AI slop. Diagnosis: portfolio session pulled numbers verbatim from a prior-session handoff (`docs/handoffs/2026-05-05-cv-voice-pass-audit-trail.md` "PER-PILLAR DATA" block) and asserted them on the live page without verifying any of them against the actual filesystem. That handoff was itself a draft — the numbers were proposed, not confirmed.

The bar for cv.html is "evidence over marketing" (Chris's locked tone direction). Asserted-but-unverified numbers fail that bar. Every number must trace to a real artifact: a directory listing, a file count, a commit hash, a specific named tool.

---

## 3. What's Already Committed (Anchors — Do Not Modify)

These are locked. Read them as ground truth for the voice/tone register. Don't propose changes here — only flag if a number inside conflicts with research findings.

### `d9347eb` — batch 1 voice pass
- `ai-block-para-2` (cv.html:303-309): "9 custom skills authored next to ~250 plugin skills installed, and 3 review agents (cc-healer, DEEP-INDEX, audit grades)"
- `ai-proof` (cv.html:319-323): "5 parallel research agents I dispatched in one session"
- `ai-pitch` (cv.html:333-336): declarative one-hire claim, no apology
- `skills-other-card` (cv.html:551): "Beyond Unity"

**Numbers in batch 1 that need verification too:** ~10 memory files, 9 custom skills, ~250 plugin skills, 3 review agents (cc-healer / DEEP-INDEX / audit grades), 5 parallel research agents this session.

### `90073b4` — batch 2 stack enrichment (ROLLBACK CANDIDATE)
- `ai-stack-intro`: "5 pillars · directing AI systems to do the majority of the work"
- 4 pillar N/P/C triplets (Commands / Memory / Knowledge Bases / Audit)
- New CSS: `.sp-meta` + `.sp-meta-label`

**Numbers to verify:** see §5 below — every N line + every C cadence claim is unverified.

---

## 4. Voice/Tone Constraints (Locked — Don't Re-Open)

These are non-negotiable framings the portfolio session enforces. Your research must produce content that fits these:

1. **Architecture-first, not co-pilot.** "I architect, AI executes within direction, I review every diff." NOT "I use AI tools as a co-pilot."
2. **Dual attribution.** Chris architects + reviews; AI executes throughput.
3. **Receipts, not claims.** Every assertion backed by an artifact (file path, count, commit, named tool).
4. **No apology framing.** Drop "Why it matters", "(via AI-directed)", parenthetical disclaimers.
5. **Volaris JD anchor phrase.** "Directing AI systems to do the majority of the work" is the literal recruiter-pattern-match for "AI-Directed Engineer". Keep it.
6. **No em-dashes on cv.html.** Per Chris memory `feedback_portfolio_em_dash_purge.md`, em-dashes (— or `&mdash;`) were purged in commit `541ca7e`. Use `&middot;`, `&ndash;`, or rephrase. Verify cv.html has zero em-dashes after rework.
7. **Concrete > abstract.** "Caterham configurator + senior VR contracts" beats "8+ years shipping production Unity". Prefer named projects.
8. **Osmani guarantor frame, paraphrased.** "Every diff is reviewed by me, the ultimate guarantor of quality." Don't quote verbatim — paraphrase per the Osmani 6 best practices article in the surf set.

---

## 5. Verification Tasks (Every Number Currently On cv.html)

For each below, do the actual count, name the artifacts, and report verdict.

### 5A. Custom skills count
**Asserted:** "9 custom skills authored" (ai-block-para-2 + Commands pillar).
**Audit:** list `~/.claude/skills/` (Windows: `C:\Users\Christophoros\.claude\skills\`). Count user-authored skills (exclude plugin skills). For each, capture: name, one-line purpose, last-modified date.
**Report:** actual count, list of names, verdict (matches 9 / off by N / which to name in the line).

### 5B. Installed plugin skills count
**Asserted:** "~250 plugin skills installed" (ai-block-para-2 + Commands pillar).
**Audit:** count installed plugin skills across all plugin directories. Likely paths: `~/.claude/plugins/`, settings.json plugin registry. The system-reminder list at session start included plugins like `superpowers:*`, `anthropic-skills:*`, `devcrow-game-workflow:*`, `cowork-plugin-management:*` — count those plus any others.
**Report:** actual count (round to nearest 10 if precise), top plugin namespaces by skill count.

### 5C. Project-scoped memory files
**Asserted:** "~10 files this project" (ai-block-para-2) + "~10 project-scoped" (Memory pillar N).
**Audit:** count files in `C:\Users\Christophoros\.claude\projects\F--DevCrow-portfolio-D3vCrow-github-io\memory\`. Cross-reference with `MEMORY.md` index (8 entries listed in initial-context CLAUDE.md block).
**Report:** actual count of memory files, MEMORY.md entry count, mismatch if any.

### 5D. Cross-project memory files
**Asserted:** "~152 cross-project (Dev workspace)" (Memory pillar N).
**Audit:** count memory files across all `~/.claude/projects/*/memory/` directories OR a Dev-wide memory location. The "Dev workspace" reference is unclear — probably `F:/DevCrow/Dev/` workspace memories. Find the actual location.
**Report:** actual count, location, verdict.

### 5E. Knowledge base counts
**Asserted:** "4 research notes + 13 handoff trails + 3 specs + 2 plans (this project)" (KB pillar N).
**Audit:** in `F:/DevCrow/portfolio/D3vCrow.github.io/`, count:
- `knowledge/research/*.md`
- `docs/handoffs/*.md`
- `docs/superpowers/specs/*.md` (or wherever specs live — search)
- `docs/superpowers/plans/*.md` (or wherever plans live)
**Report:** actual counts, paths, verdict.

### 5F. Review agents (3 named)
**Asserted:** "cc-healer · DEEP-INDEX · audit grades" (ai-block-para-2 + Audit pillar).
**Audit:** find actual definitions. Search for:
- `cc-healer` — likely an agent definition in `~/.claude/agents/` or a skill in `~/.claude/skills/`
- `DEEP-INDEX` — agent or skill name
- `audit grades` — pattern, skill, or agent
For each: capture exact name (case + hyphenation), one-line purpose, where it lives.
**Report:** verified names + purposes, OR if any don't exist → flag for replacement / deletion.

### 5G. "5 parallel research agents I dispatched in one session"
**Asserted:** ai-proof (cv.html:319-323).
**Audit:** verify against `knowledge/research/2026-05-05-ai-directed-engineer-market-signals.md` (the 5-dig surf — Augment + Osmani + Buteau + Ishir + Agentic-Eng-Jobs + Volaris JD). Count is 5 or 6 depending on how you count Volaris JD. Confirm session log / commit `ee2fd30` for the actual dispatch count.
**Report:** verified count + dig labels + verdict.

### 5H. Hero pitch claims
**Asserted:** "8+ years shipping production Unity, from Caterham configurator ownership to senior VR contracts" (cv.html:97-101).
**Audit:** verify "8+ years" against work history (cv.html Experience section) — earliest date there is FEB 2021 (Renderapp). That's only 5 years to 2026. Earlier Unity work needs to be confirmed (Pyles 3.5y per the unity.html role-trio? jam history?). "Caterham configurator ownership" verified by Renderapp role. "Senior VR contracts" verified by e-Point/Fraport entry.
**Report:** is "8+ years" defensible? If not, propose corrected number with sources.

---

## 6. Conceptual Claims Needing Grounding

Each of these is a paraphrase or principle the portfolio session asserted. For each, find the source citation in the surf set, verify the paraphrase, and either confirm or correct.

### 6A. Pillar Principles (4 confirmed pillars)
Currently asserted in `90073b4`:
- Commands P: "Clear contextual prompts as durable artifact" → source?
- Memory P: "Trust but verify across sessions" → source?
- KB P: "Ground-truth references over vibes" → source?
- Audit P: "Output per unit of human time, not velocity" → source?

**Audit:** these read like Osmani-derived 1-liners. Read `knowledge/research/2026-05-05-ai-directed-engineer-market-signals.md` Osmani section. Either ground each principle to a specific Osmani / Augment / Buteau passage (paraphrased, not quoted), or replace with actually-cited principles from the surf set.

### 6B. Pillar Cadences
- Commands C: "Skill quality reviewed via cc-healer" — depends on 5F (does cc-healer exist?)
- Memory C: "Memory consolidated end-of-week" — does Chris actually do this? Check for a scheduled task / cron / consolidation skill. The skills list mentioned `anthropic-skills:consolidate-memory` — confirm.
- KB C: "Co-located per project, audited per phase" — verify by checking project structure (research notes are in `knowledge/research/`, handoffs in `docs/handoffs/` — co-located is true; "audited per phase" needs evidence)
- Audit C: "Plan-vs-output reconciliation per phase" — find a real audit grade artifact to cite

**Report:** which cadences are real (cite artifact), which are aspirational (delete), which need rewording.

### 6C. Process steps (cv.html:447-483, 6 steps)
Currently:
1. Brainstorm — decision-policy gates → real (verify gate definitions exist)
2. Research — surf-and-dig → real (verify the technique name "multi-agent surf-and-dig" matches what Chris calls it)
3. Reconcile — anchor-verify → real (cite `feedback_research_repo_mismatch.md` or wherever defined)
4. Implementation spec — Phase 2 doc → real (cite actual spec path: `docs/superpowers/specs/2026-05-05-cv-agent-direction-rework-implementation.md` per handoff — verify file exists)
5. Code phase — diff-by-diff → real
6. Verify — breakpoints + print + a11y → real

**Audit:** for each step, confirm the technique name + verify the artifact cited. Step 4's spec file must be checked for existence. Step 2 should anchor to the 5-dig surf doc.

---

## 7. Forge — Pillar Definition (Currently Placeholder)

cv.html:392-396 has a placeholder. Handoff said "Chris fills". Don't make up content — but DO investigate whether something Chris already has would fit the "Forge" slot. Candidates to investigate:

- `superpowers:write-plan` / `superpowers:execute-plan` — workflow infrastructure
- A code-generation pipeline if one exists
- The `.superpowers/brainstorm/` directory pattern (visible in git status)
- A tooling-builder skill or agent that creates new tooling
- Anything in `~/.claude/skills/` that's about *creating* artifacts (not just routing or remembering)

**Report:** 2-3 best candidates for what Forge could be, each with: artifact path, what it does, why it fits a "Forge" framing. Final decision is Chris's, but give him real options.

---

## 8. The 6 Outstanding TBDs (From Prior Handoff)

Per `docs/handoffs/2026-05-05-cv-voice-pass-audit-trail.md` Blockers section:

1. **Forge pillar copy** → §7 above.
2. **4 Selected Tooling 1-liners + status** → IS THIS SECTION ON cv.html? Search the file. If not, where was it planned? Find the design doc reference. If section doesn't exist and isn't planned, mark "phantom TBD — no action needed".
3. **process-tail handoff link** → cv.html:485-489 has `docs/handoffs/2026-05-05-cv-rework-...` placeholder. Find the actual handoff filename to link (this brief becomes a candidate; or the audit trail).
4. **9 .pb-item role-splits** → cv.html:248-298 has Notable Projects. For each pb-item (Caterham, Hyundai Tucson, Subaru Solterra, Fraport VR, Thrion Arenas, Obsidian Moon, Super Pokémon Bros, Compare the Pokémons, Darn My Barn), determine: (a) was AI-direction used in delivery? (b) what role(s) did Chris hold? Pre-AI projects get "n/a · pre-AI era" tag. Reference: AI-direction adoption timeline — when did Chris start? Cross-check with commit history of his projects + memory files for adoption date.
5. **Skills AI-Stack card trim** → cv.html:537-546 has 7 tags currently. Decision is 7 vs 3 (taste call). Recommend a trim with rationale (which 3 tags carry the most signal).
6. **`&mdash;` placeholder scrub** → grep cv.html for `&mdash;` and `—` literal char. Report any hits.

---

## 9. Source Anchors To Read

Read these in order — they form the context for any rework decision.

### Project files (must read)
- `F:/DevCrow/portfolio/D3vCrow.github.io/cv.html` (full file — every section)
- `F:/DevCrow/portfolio/D3vCrow.github.io/css/cv.css` (visual conventions)
- `F:/DevCrow/portfolio/D3vCrow.github.io/CLAUDE.md` (project rules)
- `F:/DevCrow/portfolio/D3vCrow.github.io/knowledge/research/2026-05-05-ai-directed-engineer-market-signals.md` (the 5-dig surf — Augment + Osmani + Buteau + Ishir + Agentic-Eng-Jobs + Volaris JD anchor phrase). This is THE source for principles + cadences + framing.
- `F:/DevCrow/portfolio/D3vCrow.github.io/knowledge/research/2026-04-29-ai-slop-markers.md` (read this — it's literally about the failure mode that triggered this brief)
- `F:/DevCrow/portfolio/D3vCrow.github.io/knowledge/research/2026-05-01-portfolio-cv-best-practices.md`
- `F:/DevCrow/portfolio/D3vCrow.github.io/docs/handoffs/2026-05-05-cv-voice-pass-audit-trail.md` (this session's audit trail — full prior context)
- `F:/DevCrow/portfolio/D3vCrow.github.io/docs/handoffs/2026-05-05-cv-rework-agent-direction-angle-audit-trail.md`
- `F:/DevCrow/portfolio/D3vCrow.github.io/docs/superpowers/plans/2026-04-14-extreme-makeover.md` (overall makeover plan)
- `F:/DevCrow/portfolio/D3vCrow.github.io/docs/superpowers/specs/` (any spec files for this rework)

### Setup files (must read for verification)
- `C:\Users\Christophoros\.claude\CLAUDE.md` (global instructions — references review agents, decision policy, etc.)
- `C:\Users\Christophoros\.claude\skills\` (custom skills — count + names + purposes)
- `C:\Users\Christophoros\.claude\agents\` if exists (named agents like cc-healer / DEEP-INDEX)
- `C:\Users\Christophoros\.claude\plugins\` (plugin skill counts)
- `C:\Users\Christophoros\.claude\projects\F--DevCrow-portfolio-D3vCrow-github-io\memory\` (this project's memory)
- `C:\Users\Christophoros\.claude\projects\*\memory\` (cross-project memory file count)
- `F:/DevCrow/Dev/` workspace if it exists separately (cross-project memory may live here)
- `F:/DevCrow/Dev/docs/claude-output-conventions.md` (referenced by Chris's `/_yours` skill — pull principles from here)

### Memory files (must read for context + verification)
- `MEMORY.md` index (already loaded)
- All 8 referenced memory files for cross-checking claims:
  - user_profile.md
  - feedback_reply_style.md
  - feedback_collaboration_style.md
  - feedback_portfolio_em_dash_purge.md
  - project_portfolio_makeover.md
  - project_ai_ecosystem.md
  - project_ai_themes_revisit_trigger.md
  - project_portfolio_surfacing_direction.md
  - feedback_layout_verify_offsetwidth.md

### Git state
- `git log --oneline -50` on portfolio branch (see what's actually been done)
- `git log --oneline -100 main` (cross-reference older work)

---

## 10. Output Format Spec

### 10A. Research report
File: `F:/DevCrow/portfolio/D3vCrow.github.io/docs/handoffs/2026-05-05-cv-deep-research-report.md`

Structure:
```
# CV Voice-Pass Deep-Research Report

## Summary
[2-3 sentence verdict on each section: pass / corrections needed / rebuild]

## Verification Table
| Claim | Asserted | Actual | Source | Verdict |
|-------|----------|--------|--------|---------|
| 9 custom skills | ai-block-para-2 + Commands N | [N] | C:\...\skills\ listing | ✓ / change to N / delete |
| ... | ... | ... | ... | ... |

## Forge Candidates
[2-3 options with paths + fit-rationale]

## .pb-item Role-Splits (9 items)
[Per project: AI-direction yes/no, role(s), tag suggestion]

## Em-dash Scrub
[grep results]

## Conflicts Found
[any case where research findings contradict locked drafts in §3]
```

### 10B. Return handoff
File: `F:/DevCrow/portfolio/D3vCrow.github.io/docs/handoffs/2026-05-05-cv-rework-from-research-handoff.md`

Structure: self-contained brief the portfolio session can act on without re-reading the research report. Format:

```
# Rework Handoff: CV Voice-Pass (Post-Deep-Research)

## Context
[1 paragraph: where portfolio session left off, what got rolled back, what's verified]

## Reworks (Per Section)

### ai-block-para-2 (cv.html:303-309) — STATUS
[Either "verified, no change" or "rework with these exact numbers/words"]
[New text if rework needed, with citations inline]

### ai-stack-intro (cv.html:341)
...

### Commands pillar
[N/P/C with verified data]

### Memory pillar
...

### KB pillar
...

### Audit pillar
...

### Forge pillar
[Recommended content based on candidate findings, OR "Chris-only — these 2-3 options"]

### Process steps (each of 6)
...

### .pb-item role-splits
[Table: project | role | tag]

### Selected Tooling
[If section exists: 4 1-liners. If phantom: "skip — section not on cv.html"]

### Skills AI-Stack trim
[3-tag recommendation with rationale]

### Em-dash scrub
[Action: replace each found em-dash at line X with Y]

## Anti-Scope (Don't Touch)
- portfolio.html (Phase B, deferred)
- main branch
- 16 pre-existing WIP files (enumerate from §11 below)

## Decisions Locked (Don't Re-Open)
[carry forward from §3 + §4 of this brief]

## Recommended Commit Sequence
[1-3 commits with logical grouping]
```

---

## 11. Anti-Scope (Hard)

Do NOT modify:
- `portfolio.html` (Phase B, deferred)
- `unity.html` (separate scope)
- Any file outside the listed source anchors in §9
- The `main` branch (we're on `portfolio`)

Do NOT stage / commit / push. Research only. Output two markdown files. Don't run `git add`.

The 16 pre-existing WIP files (per portfolio session start git status):
- `.claude/settings.local.json` (modified)
- `.claude/_commit_msg.tmp`
- `.claude/worktrees/`
- `.superpowers/brainstorm/105060-1777975651/`
- `CLAUDE.md` (untracked at root — leave alone)
- 10 audit trails in `docs/handoffs/`
- `docs/superpowers/plans/2026-04-14-extreme-makeover.md`
- 2 untracked research notes in `knowledge/research/`

These are Chris's WIP from prior sessions. Read for context, don't touch.

---

## 12. Critical Constraints

- **No fabricated numbers.** If you can't count it, say "couldn't count — needs Chris confirmation" with the path you tried.
- **No paraphrases without citation.** If a principle line can't trace to a specific surf doc passage, mark it "needs replacement" not "verified".
- **No new TBDs.** If something is unknowable from the filesystem alone, escalate to Chris in the report — don't bake "TBD" into the rework handoff.
- **No em-dashes in your output.** This brief is going through a portfolio session that purged em-dashes — keep your reports em-dash-free too. Use `·` or `-` or rephrase.
- **No assumed adoption date for AI-direction.** The `.pb-item` role-split task hinges on knowing when Chris started AI-directed work. Find evidence (earliest commit using AI-direction patterns? earliest memory file? specific project?). If unfindable, escalate.

---

## 13. Time / Depth Budget

This is critical. Take the time. Read every source anchor in §9 before writing anything. The research report should be ~500-800 lines if done right (verification table alone has 20+ rows).

Better to flag "couldn't verify" 5 times than to assert a number. Chris reads receipts, not vibes.

---

## 14. Return Path

When done:
1. Save research report to path in §10A.
2. Save return handoff to path in §10B.
3. Return both file paths to Chris with a 3-bullet summary:
   - How many claims verified vs corrected vs deleted
   - Top 3 surprises (numbers way off, missing artifacts, conflicts with locked drafts)
   - What still needs Chris-only input

Chris feeds the return handoff back into the portfolio session, which executes the reworks.

---

End of brief.
