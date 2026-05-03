---
title: Unity portfolio narrative integration — hire-material patterns + voice absorption from main:about.html
date: 2026-05-03
type: research
verify_by: 2026-08-01
tags: [portfolio, unity, narrative, hire-signal, voice, recruiter-scan, option-b]
---

# Unity Portfolio Narrative Integration

## Question restated
For the unity.html rework on the portfolio branch (Option B — absorb main:about.html personal narrative AND keep project showcase, hire-material grade), what are the evidence-backed patterns for: (Q1) Unity-specific portfolio expectations, (Q2) hire-material vs credential signals recruiters weigh in 2025-2026, (Q3) Chris's actual writing voice extracted from main:about.html, (Q4) origin-story surfacing without bloating the project showcase, (Q5) section-flow IA beyond the structural concerns covered in 2026-05-01-portfolio-cv-best-practices.md, (Q7) recruiter scan patterns specific to portfolio review? (Q6 already covered in 2026-04-29-ai-slop-markers.md.)

## TL;DR
- The hire-vs-skip flip happens in 8-11 seconds on first scan, F-pattern dominant on desktop, vertical-only on mobile. 80% of viewing time stays in the top third. The hero plus the first project card carry the entire decision; everything below is for the candidate who already passed the gate.
- 2026 recruiter skepticism on AI-authenticity is now a load-bearing constraint. Portfolios reading like LLM marketing copy get penalized harder than ones with rough-but-genuine voice. Chris's main:about.html voice (origin scenes, dates, real names, Greek context, emotional honesty) is a competitive differentiator vs the polished-but-flat current unity.html hero. Use it.
- Origin-story integration is woven, not stacked. Pro pattern is one anchored opening sentence plus per-card "why this mattered to me" microbeats. Not a separate 1000-word about section bolted onto the project page. The unity.html absorb should fold whoami + gamedev tabs into ~150 words at the top + per-card 1-line voice tags, not transplant the about.html flat.

## Findings

### 1. Unity-specific portfolio patterns (Q1)
Established Unity dev portfolios converge on a consistent shape:
- Cinematic hero with one short identity sentence (KaitoMajima, Bithell Games)
- 5-8 strong projects max, not 14-15 like current unity.html. Quality-over-quantity is the universal recruiter consensus
- Gameplay video on every card is table stakes. Live links + deep-dive pages for top 2-3
- Tech-stack chips per card are floor-level. What differentiates is one *named system* per project ("radial-drag combo selector", "Verlet-rope fishing", "modifier-key punch grid")
- Bithell's site shows that one identity sentence + visual proof beats any amount of skill-chip listing. Brenda Romero's all-black-and-white minimalism and Jenova Chen's timeline both work because the *projects* speak

For Chris specifically: 14 cards is too many for hire-material first-scan. Either prune to ~8 or visually deprioritize so the F-pattern hits the strongest 5-6 first.

### 2. Hire-material vs credential signals (Q2)
Data shifts since 2024:
- 75% of recruiters expect skills-based hiring as top 2025 priority
- Portfolio review predicts 12-month performance with 67% accuracy vs 34% for credential filtering
- ~10 seconds to decide hire-or-skip on portfolio first-scan (some studies say 8-11s)
- Hire signals (strong → weak): demonstrable shipped product → real-world problem-solving on actual issues → diverse projects → clear code → degree
- Skip signals: vapid project copy ("Built X using Y"), missing gameplay video, no shipped link, AI-detector positives in hero copy

For Chris: shipped product (Caterham 4+ years live, Obsidian Moon on Steam, Itch.io game) is the strongest signal he has. Lead with it. The 8-year arc and origin story matter for the candidate who scrolled past the hero, not for the gate.

### 3. Voice extraction from main:about.html (Q3, workspace evidence)
Verified voice traits (direct from the file):
- First-person, direct, warm, never marketing-speak
- Origin scenes anchored to specific moments (Warcraft 3 editor moment letting orcs escape an Alliance attack; Hero Quest mod for friends; Dimitris pivoting to 3D after COVID)
- Dates as story beats (2017 Game Salad → 2018 Unity → 2019 Greater Game funding fell through → 2020 Pyles birth → 2024 Greek island → Jan 2025 17-day jam with 3-month-old twins)
- Concrete numbers (5000 hours, 17 days, 3.5 years)
- Emotional honesty ("I was hurt and disappointed", "It might sound childish, but I'm still following that dream")
- Names real people + outcomes (Pyles collaborators now at Blizzard + Creative Assembly)
- Cultural anchor (early-2000s Greece "saying you wanted to make games felt unrealistic"; Greek island inspired by grandparents)
- Low-key humility ("Although short, it reflects my creativity...")

Current unity.html hero ("Eight Years. Still Curious." + "I came to Unity in 2018 to make games and stayed because the rabbit holes kept getting deeper") is on-brand but generic. The about.html voice is more distinctive and crucially harder to LLM-fake.

### 4. Origin-story surfacing without bloat (Q4)
Pro pattern from design / narrative-portfolio research:
- Weave, don't stack. Origin shouldn't be a separate "About Me" section bolted on. It should be the first sentence of the hero + microbeats embedded in each project card ("inspired by [moment]", "started after [event]")
- Kill the bio-page-on-the-portfolio pattern. Recruiters skip dedicated about sections in tech portfolios; they want context inside the work
- For game devs the origin matters more than for generic web devs because games are an emotional medium. But only ~2 sentences worth, not the full arc
- Reflection over claim: "I asked if they wanted me to make a quest. They said yes. We played it in one sitting." beats "I am a passionate game designer with X years of experience"

For unity.html absorb: take the Warcraft 3 editor moment + the Pyles Studio origin (Dimitris + 3.5 years + 5000 hours) + the 17-day jam (life-with-twins context) and use them as ~3 microbeats at hero / section-intro level. Don't transplant the whoami panel.

### 5. Section-flow IA (Q5, beyond structural)
Beyond the JSON-LD / print / breakpoints already covered in 2026-05-01-portfolio-cv-best-practices.md, the narrative IA pattern:
1. Hero (8-second-decision)
2. Strongest commercial / shipped (proves the hire signal)
3. Origin microbeat (transitions reader from "this person ships" to "this person cares")
4. Studio work (proves collaboration + scale)
5. Solo lab (proves curiosity + range)
6. Per-card "why this matters" microbeat (carries the narrative through)
7. Footer = contact, no dedicated bio section

Current unity.html order: Hero → Skill Matrix → Commercial → Pyles → Solo Lab. The Skill Matrix in slot 2 burns prime real estate on a chip-list, and recruiters skip chip-lists. Move it after Commercial OR fold into a "tech stack at a glance" strip beside the hero.

### 6. Recruiter scan patterns (Q7)
- Desktop (64% of reviews): F-pattern, 8.2s avg first scan; some 2025 studies show 11.2s
- Mobile (36%): vertical-only, ~6.1s, two-column layouts shrink or break
- 80% of viewing time stays in the top third
- Bottom 30% often completely ignored on first scan
- Median total review (after pass): 1m 34s, spent verifying named achievements + role titles + clickthrough

Implications for unity.html:
- Hero must answer "should I keep reading" in 8 seconds. Currently the Theros video + "Eight Years. Still Curious." + 4 lines of subtext does this OK but the subtext is too long for F-scan
- First project card after hero must be the strongest. Caterham (4+ years live, real client, full pipeline) is the right pick, currently in slot 1 of Commercial. Good
- 14 project cards = bottom 6-7 will be skimmed-or-skipped on first scan. Either cut or visually deprioritize
- Mobile: skill matrix as a 4-tier nested chip grid likely collapses badly on 375px. Verify responsive behavior or move

## Cross-references
- AI-slop avoidance: `knowledge/research/2026-04-29-ai-slop-markers.md` (Q6, em-dash purge already enforced in active HTML per memory rule)
- Structural foundations (JSON-LD / print / dark / breakpoints): `knowledge/research/2026-05-01-portfolio-cv-best-practices.md`
- Per-project content + soul hooks + skills delta: `knowledge/research/2026-05-03-early-projects-dossier.md`

## Sources

### Workspace
- `git show main:about.html` (568 lines, voice + content anchor)
- `F:\DevCrow\portfolio\D3vCrow.github.io\unity.html` (current portfolio, 677 lines)
- `knowledge/research/2026-04-29-ai-slop-markers.md`
- `knowledge/research/2026-05-01-portfolio-cv-best-practices.md`
- `knowledge/research/2026-05-03-early-projects-dossier.md`

### External (10, deep mode cap)
1. [Game Developer Portfolios: 15+ Well-Designed Examples](https://www.sitebuilderreport.com/inspiration/game-developer-portfolios) — Bithell, Brenda Romero, Jenova Chen patterns
2. [Petr Zavodny Unity portfolio](https://www.petrzavodny.com/portfolio/details/games/) — Unity dev portfolio reference
3. [Eduardo Alexander (KaitoMajima) Unity portfolio](https://kaitomajima.webflow.io/) — cinematic-hero pattern
4. [From Credential Screening to Portfolio Review (Higher Education Lab)](https://parisschoolofentrepreneurship.medium.com/from-credential-screening-to-portfolio-review-how-top-companies-changed-hiring-e7409ef18d17) — 67% vs 34% accuracy data
5. [Technical Hiring Best Practices 2025 (daily.dev Recruiter)](https://recruiter.daily.dev/resources/technical-hiring-best-practices-2025-what-changed) — skills-over-credentials shift
6. [Junior Dev Resume & Portfolio in the Age of AI (dev.to, Dhruv Joshi)](https://dev.to/dhruvjoshi9/junior-dev-resume-portfolio-in-the-age-of-ai-what-recruiters-care-about-in-2025-26c7) — 2026 AI-authenticity skepticism
7. [Crafting a Narrative: Mastering Storytelling in Your Design Portfolio (Dribbble)](https://dribbble.com/stories/2024/03/18/crafting-a-narrative-mastering-storytelling-in-your-design-portfolio) — narrative integration pattern
8. [How to Make a Narrative Design Portfolio That'll Get You Hired (gamedesignskills)](https://gamedesignskills.com/game-design/narrative-design-portfolio/) — game-specific narrative portfolio
9. [UX Case Study Structure (uxfol.io)](https://blog.uxfol.io/ux-case-study-structure/) — hierarchy + signal prioritization
10. [Resume Eye-Tracking Study: 6 Fixation Points (ResumeHeatMap)](https://resumeheatmap.com/eye-tracking-study) — 2026 F-pattern + scan times

## Open questions / next probes
- Is 8 cards (down from 14) the right cut, or does the 3-tier visual grouping (Commercial / Studio / Solo Lab) absorb the count cost? Worth one user-test or recruiter ping to validate.
- Skill Matrix placement: kill, move-after-Commercial, or fold-into-hero-strip? Affects narrative continuity vs scan efficiency.
- Mobile responsive verification on the skills-tier grid at 375px not yet probed (separate Playwright check, deferred).
- Origin microbeat phrasing: should the Warcraft 3 moment go in hero, before Solo Lab, or both? Pick during /_think pass.
