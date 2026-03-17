# Gamer Timeline — Design Spec
**Date:** 2026-03-17
**Status:** Approved
**Target file(s):** `about.html`, `css/about.css`, `js/about.js`, `assets/gamer_ages.png`

---

## Overview

Replace the static `.gamer-collection` bento grid in `#content-gamer` with an interactive age-progression timeline. A horizontal scrubber spans 1990–2025. Dragging it crossfades a cartoon character illustration (4 age stages) and swaps a set of era-specific game cards. The character stays centered and prominent. The scrubber lives at the bottom.

---

## Layout (top to bottom)

```
[ Heading: "Games that grew me, shaped me, and still inspire me" ]
[ Era label: "1990 – 1999 · Age 5"                               ]
[ Character viewport (crossfading sprite)                         ]
[ Game cards row (horizontally scrollable)                        ]
[ Scrubber + year readout + era tick marks                        ]
```

---

## Image Asset

**File:** `assets/gamer_ages.png`
Source: `ChatGPT_Image_Mar_17__2026__02_29_44_PM.png` — a 1328 × ~771 px sprite sheet with 4 cartoon characters sitting side-by-side (left to right: Age 5, 15, 25, 35).

### Character viewport (CSS clipping approach)

- Container: `.gamer-char-viewport` — fixed height (~280px desktop, ~200px mobile), `overflow: hidden`, `position: relative`
- Two `<img class="gamer-char-img">` elements stacked `position: absolute; top: 0; left: 0; width: 100%; height: 100%`
- Each img: `width: 400%; object-fit: cover; object-position: <x> center`
- Four `object-position` x-values (one per era), derived from measured character boundaries:

| Era index | Age | `object-position` x |
|-----------|-----|----------------------|
| 0 | 5  | `0%`   |
| 1 | 15 | `33.3%` |
| 2 | 25 | `66.6%` |
| 3 | 35 | `100%`  |

- **Crossfade:** On era change, the "next" img gets its `object-position` set, then `opacity` transitions from 0 → 1 (CSS `transition: opacity 0.5s ease`). The "current" img simultaneously fades out. Roles swap after transition ends.
- **Fallback:** If the single-sprite clipping produces poor results (unequal character widths), split into 4 PNGs: `assets/gamer-age5.png`, `gamer-age15.png`, `gamer-age25.png`, `gamer-age35.png` — and swap `src` instead of `object-position`.

---

## Era Definitions

| Index | Year range | Age label | Character |
|-------|------------|-----------|-----------|
| 0 | 1990 – 1999 | Age 5  | Leftmost (small child, blue shirt) |
| 1 | 2000 – 2006 | Age 15 | Second (teen, red shirt, earphones) |
| 2 | 2007 – 2016 | Age 25 | Third (young adult, green shirt) |
| 3 | 2017 – 2025 | Age 35 | Rightmost (adult, blue shirt, beard) |

---

## Game Data (by era)

### Era 0 — 1990–1999 (25 games)
| Title | Year | Asset |
|---|---|---|
| Super Mario Bros | 1985 | `assets/1990_mario.jpg` |
| Prince of Persia | 1989 | `assets/1990_persia.jpg` |
| Lemmings | 1991 | `assets/1990_lemmings.jpg` |
| TMNT IV | 1991 | `assets/1990_TMNT.jpg` |
| Street Fighter II | 1991 | `assets/1990_sf2.png` |
| Fate of Atlantis | 1992 | `assets/1990_atlantis.png` |
| Super Mario Kart | 1992 | `assets/1990_mariokart.jpg` |
| Wolfenstein 3D | 1992 | `assets/1990_wolf.jpg` |
| Cadillacs & Dinosaurs | 1993 | `assets/1990_candilacs.jpg` |
| Gabriel Knight | 1993 | `assets/1990_gabriel.jpg` |
| Link's Awakening | 1993 | `assets/1990_zelda.jpg` |
| Pokémon Red/Blue | 1996 | `assets/1990_pokemon.jpg` |
| Broken Sword | 1996 | `assets/1990_broken.png` |
| Curse of Monkey Island | 1997 | `assets/1990_monkey.jpg` |
| Theme Hospital | 1997 | `assets/1990_hospital.jpg` |
| Disney's Hercules | 1997 | `assets/1990_hercules.jpg` |
| Tomba! | 1997 | `assets/1990_tomba.png` |
| Tekken 3 | 1997 | `assets/1990_tekken3.png` |
| Oddworld: Abe's Oddysee | 1997 | `assets/1990_abes.jpg` |
| Riven | 1997 | `assets/1990_riven.png` |
| The X-Files Game | 1998 | `assets/1990_xfiles.jpg` |
| Silent Hill | 1999 | `assets/1990_silent.jpg` |
| Age of Empires II | 1999 | `assets/1990_aoe2.png` |
| Silver | 1999 | `assets/Silver.png` |
| Worms Armageddon | 1999 | `assets/worms.jpg` |

### Era 1 — 2000–2006 (13 games)
| Title | Year | Asset |
|---|---|---|
| Lineage II | 2000 | `assets/LineageII.jpg` |
| Mafia | 2000 | `assets/mafia.jpg` |
| WWF SmackDown! 2 | 2000 | `assets/smackdown.png` |
| Tony Hawk's Pro Skater 2 | 2000 | `assets/tonyhawk.jpg` |
| Commandos 2 | 2001 | `assets/Commandos2.jpg` |
| Counter-Strike 1.6 | 2001 | `assets/cs.jpg` |
| Alone in the Dark | 2001 | `assets/alone.jpg` |
| Max Payne | 2001 | `assets/maxpayne.jpg` |
| Battle for Middle Earth | 2002 | `assets/bftme1.jpg` |
| Warcraft III: Frozen Throne | 2003 | `assets/frozenthrone.jpg` |
| Puzzle Pirates | 2003 | `assets/puzzlepirates.jpg` |
| DotA | 2005 | `assets/dota.jpeg` |
| Grim Fandango Remastered | 2006 | `assets/grim.jpg` |

### Era 2 — 2007–2016 (13 games)
| Title | Year | Asset |
|---|---|---|
| League of Legends | 2009 | `assets/lol.jpg` |
| God of War III | 2010 | `assets/gow3.jpg` |
| LIMBO | 2010 | `assets/limbo.jpg` |
| Dead Nation | 2010 | `assets/DeadNation.jpg` |
| LOTR: War in the North | 2011 | `assets/witn.jpg` |
| Diablo III | 2012 | `assets/diablo-iii.jpg` |
| The Last of Us | 2013 | `assets/lastofus.jpg` |
| AC IV: Black Flag | 2013 | `assets/blackflag.jpg` |
| Gauntlet | 2014 | `assets/gauntlet.jpg` |
| The Witcher 3 | 2015 | `assets/Witcher3.jpg` |
| Bloodborne | 2015 | `assets/bloodborne.jpg` |
| Hunt: Showdown | 2016 | `assets/hunt.jpg` |
| Uncharted 4 | 2016 | `assets/Uncharted.jpg` |

### Era 3 — 2017–2025 (3 games)
| Title | Year | Asset |
|---|---|---|
| Little Nightmares | 2017 | `assets/littlenightmares.jpg` |
| Detroit: Become Human | 2018 | `assets/detroit.jpg` |
| WoW: WotLK Classic | 2022 | `assets/WoW.jpg` |

---

## Scrubber Component

- `<input type="range" id="gamer-slider" min="1990" max="2025" value="1995">`
- Live year readout: `<span class="gamer-year-display">` — positioned above the slider thumb, `left` calculated in JS as `((value - min) / (max - min)) * 100%` accounting for thumb width offset
- Era tick marks: thin vertical lines + labels at `1990`, `2000`, `2007`, `2017`, `2025`
- Custom CSS styling: dark track, orange filled portion (JS-updated `background: linear-gradient(to right, #ff9800 X%, rgba(255,152,0,0.2) X%)`), orange circular thumb with `box-shadow` glow on `:hover`/`:active`

---

## Era Label

`<div class="gamer-era-label">` — updates on every slider `input` event.
Format: `"1990 – 1999 · Age 5"` — font: Orbitron, orange, centered above the character.

---

## JS Logic (`js/about.js`)

New function `initGamerTimeline()`:

```
1. Build era lookup: year → era index (simple range checks)
2. Set slider initial value to 1995 → era 0 active on load
3. On slider `input`:
   a. Update year display position and text
   b. Update scrubber fill gradient
   c. Determine current era index
   d. If era changed:
      - Update era label text
      - Trigger character crossfade (swap opacity on two img elements)
      - Hide old .gamer-era-cards group, show new one (add/remove .active class)
4. Character crossfade:
   - "next" img: set object-position, transition opacity 0→1
   - "current" img: transition opacity 1→0
   - After 500ms: swap roles (which is "current", which is "next")
5. Card group swap: remove .active from old group, add .active + animate to new group
```

Remove old mobile tap-toggle logic for `.game-card` from the `DOMContentLoaded` block (no longer relevant — cards no longer overlap in the new layout).

Called from `DOMContentLoaded` after existing `showAboutContent(0)` call.

---

## CSS (`css/about.css`) — New Classes

```
.gamer-timeline-wrap       — outer flex column container for the whole section
.gamer-era-label           — Orbitron, orange, centered, ~0.85rem, letter-spacing
.gamer-char-viewport       — fixed height 280px (200px mobile), overflow:hidden, relative
.gamer-char-img            — position:absolute, top/left 0, width:100%, height:100%, object-fit:cover
.gamer-char-img.active     — opacity:1; transition:opacity 0.5s ease
.gamer-char-img.inactive   — opacity:0
.gamer-cards-row           — overflow-x:auto, display:flex, gap:12px, padding:16px 4px, scrollbar styled
.gamer-era-cards           — display:none (hidden); display:flex + fadeInUp animation when .active
.gamer-scrubber-wrap       — position:relative, padding:24px 0 8px, width:100%
.gamer-year-display        — position:absolute, top:0, transform:translateX(-50%), Orbitron, orange
.gamer-slider              — full-width range input, custom thumb/track styles
.gamer-ticks               — flex row with tick marks at era boundaries
.gamer-tick                — thin orange line + small label below
```

The existing `.game-card` CSS (hover effects, border, `::after` HUD) is **fully preserved** — cards render identically inside the new scrollable row. `.gamer-collection` grid CSS becomes unused but is left in place (harmless).

---

## Files Changed

| File | Change |
|------|--------|
| `about.html` | Replace `#content-gamer` inner content entirely |
| `css/about.css` | Append new gamer timeline CSS classes |
| `js/about.js` | Add `initGamerTimeline()`, remove old game-card tap-toggle, call init from DOMContentLoaded |
| `assets/gamer_ages.png` | New file — copy of `ChatGPT_Image_Mar_17__2026__02_29_44_PM.png` |

---

## Constraints

- Do not modify any other tab content or `showAboutContent()` logic
- Do not change existing `.game-card` CSS
- All new CSS in `about.css` only; all new JS in `about.js` only
- No external libraries; vanilla JS + CSS only
- Must work on mobile (touch scrubber, horizontal card scroll)
- Heading text must remain: `"Games that grew me, shaped me, and still inspire me"`
