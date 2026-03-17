# Gamer Timeline Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static `.gamer-collection` bento grid in `#content-gamer` with an interactive age-progression timeline — a bottom-anchored scrubber (1990–2025) that crossfades a cartoon character sprite and swaps era-specific game cards.

**Architecture:** Single-sprite CSS background-image approach (`background-size: 400% auto; background-position: X% bottom`) on two stacked divs enables smooth crossfades via class-toggling opacity. Four `.gamer-era-cards` groups pre-rendered in the DOM swap visibility on era change. Scrubber is a native `<input type="range">` with JS-driven fill gradient and floating year label.

**Tech Stack:** Vanilla HTML5, CSS3, ES6 JS. No build step, no dependencies. Files: `about.html`, `css/about.css`, `js/about.js`, `assets/gamer_ages.png`.

---

## Chunk 1: Asset Placement + HTML Structure

### Task 1: Place the image asset

**Files:**
- Create: `assets/gamer_ages.png`

- [ ] **Step 1.1: Copy the source image to assets/**

  Copy `ChatGPT_Image_Mar_17__2026__02_29_44_PM.png` (wherever it was saved — Downloads, Desktop, etc.) to the project:

  ```
  assets/gamer_ages.png
  ```

  The file must be at exactly this path relative to the project root. Verify it's there before continuing.

- [ ] **Step 1.2: Verify the image loads**

  Open `assets/gamer_ages.png` directly in a browser or file explorer to confirm it's a valid image showing 4 cartoon characters side by side (child, teen, young adult, adult — left to right).

---

### Task 2: Replace `#content-gamer` HTML

**Files:**
- Modify: `about.html` — replace inner content of `<div class="content" id="content-gamer">` (delete lines 448–615: the `.gamer-timeline` and `.gamer-collection` divs; keep the outer wrapper div at line 446 and its closing tag)

- [ ] **Step 2.1: Locate and delete the old gamer content**

  In `about.html`, find the block starting at:
  ```html
  <div class="content" id="content-gamer">
  ```
  Delete everything between the opening `<div class="content" id="content-gamer">` tag and its closing `</div>` (inclusive of `.gamer-timeline` and `.gamer-collection` divs). Keep the outer `<div class="content" id="content-gamer">` tag intact.

- [ ] **Step 2.2: Insert the new gamer timeline HTML**

  Replace the deleted content with the following (paste inside `<div class="content" id="content-gamer">`):

  ```html
  <h3 class="mobile-section-header">Gamer</h3>

  <div class="gamer-timeline-wrap">

    <h3 class="gamer-heading">Games that grew me, shaped me, and still inspire me</h3>

    <!-- Era label -->
    <div class="gamer-era-label" id="gamer-era-label">1990 – 1999 · Age 5</div>

    <!-- Character crossfade viewport -->
    <div class="gamer-char-viewport">
      <div class="gamer-char-img active" id="gamer-char-a" role="img" aria-label="Chris age 5"></div>
      <div class="gamer-char-img inactive" id="gamer-char-b" role="img" aria-label="Character"></div>
    </div>

    <!-- Era card groups — one group per era, only active group visible -->
    <div class="gamer-cards-row">

      <!-- Era 0: 1990–1999 -->
      <div class="gamer-era-cards active" data-era="0">
        <div class="game-card" tabindex="0" data-title="Super Mario Bros" data-year="1985">
          <img loading="lazy" src="assets/1990_mario.jpg" alt="Super Mario Bros">
        </div>
        <div class="game-card" tabindex="0" data-title="Prince of Persia" data-year="1989">
          <img loading="lazy" src="assets/1990_persia.jpg" alt="Prince of Persia">
        </div>
        <div class="game-card" tabindex="0" data-title="Lemmings" data-year="1991">
          <img loading="lazy" src="assets/1990_lemmings.jpg" alt="Lemmings">
        </div>
        <div class="game-card" tabindex="0" data-title="TMNT IV" data-year="1991">
          <img loading="lazy" src="assets/1990_TMNT.jpg" alt="Teenage Mutant Ninja Turtles IV">
        </div>
        <div class="game-card" tabindex="0" data-title="Street Fighter II" data-year="1991">
          <img loading="lazy" src="assets/1990_sf2.png" alt="Street Fighter II">
        </div>
        <div class="game-card" tabindex="0" data-title="Fate of Atlantis" data-year="1992">
          <img loading="lazy" src="assets/1990_atlantis.png" alt="Indiana Jones and the Fate of Atlantis">
        </div>
        <div class="game-card" tabindex="0" data-title="Super Mario Kart" data-year="1992">
          <img loading="lazy" src="assets/1990_mariokart.jpg" alt="Super Mario Kart">
        </div>
        <div class="game-card" tabindex="0" data-title="Wolfenstein 3D" data-year="1992">
          <img loading="lazy" src="assets/1990_wolf.jpg" alt="Wolfenstein 3D">
        </div>
        <div class="game-card" tabindex="0" data-title="Cadillacs & Dinosaurs" data-year="1993">
          <img loading="lazy" src="assets/1990_candilacs.jpg" alt="Cadillacs and Dinosaurs">
        </div>
        <div class="game-card" tabindex="0" data-title="Gabriel Knight" data-year="1993">
          <img loading="lazy" src="assets/1990_gabriel.jpg" alt="Gabriel Knight">
        </div>
        <div class="game-card" tabindex="0" data-title="Link's Awakening" data-year="1993">
          <img loading="lazy" src="assets/1990_zelda.jpg" alt="Link's Awakening">
        </div>
        <div class="game-card" tabindex="0" data-title="Pokémon Red/Blue" data-year="1996">
          <img loading="lazy" src="assets/1990_pokemon.jpg" alt="Pokémon Red/Blue">
        </div>
        <div class="game-card" tabindex="0" data-title="Broken Sword" data-year="1996">
          <img loading="lazy" src="assets/1990_broken.png" alt="Broken Sword">
        </div>
        <div class="game-card" tabindex="0" data-title="Curse of Monkey Island" data-year="1997">
          <img loading="lazy" src="assets/1990_monkey.jpg" alt="The Curse of Monkey Island">
        </div>
        <div class="game-card" tabindex="0" data-title="Theme Hospital" data-year="1997">
          <img loading="lazy" src="assets/1990_hospital.jpg" alt="Theme Hospital">
        </div>
        <div class="game-card" tabindex="0" data-title="Disney's Hercules" data-year="1997">
          <img loading="lazy" src="assets/1990_hercules.jpg" alt="Disney's Hercules">
        </div>
        <div class="game-card" tabindex="0" data-title="Tomba!" data-year="1997">
          <img loading="lazy" src="assets/1990_tomba.png" alt="Tomba!">
        </div>
        <div class="game-card" tabindex="0" data-title="Tekken 3" data-year="1997">
          <img loading="lazy" src="assets/1990_tekken3.png" alt="Tekken 3">
        </div>
        <div class="game-card" tabindex="0" data-title="Oddworld: Abe's Oddysee" data-year="1997">
          <img loading="lazy" src="assets/1990_abes.jpg" alt="Oddworld: Abe's Oddysee">
        </div>
        <div class="game-card" tabindex="0" data-title="Riven" data-year="1997">
          <img loading="lazy" src="assets/1990_riven.png" alt="Riven">
        </div>
        <div class="game-card" tabindex="0" data-title="The X-Files Game" data-year="1998">
          <img loading="lazy" src="assets/1990_xfiles.jpg" alt="The X-Files Game">
        </div>
        <div class="game-card" tabindex="0" data-title="Silent Hill" data-year="1999">
          <img loading="lazy" src="assets/1990_silent.jpg" alt="Silent Hill">
        </div>
        <div class="game-card" tabindex="0" data-title="Age of Empires II" data-year="1999">
          <img loading="lazy" src="assets/1990_aoe2.png" alt="Age of Empires II">
        </div>
        <div class="game-card" tabindex="0" data-title="Silver" data-year="1999">
          <img loading="lazy" src="assets/Silver.png" alt="Silver">
        </div>
        <div class="game-card" tabindex="0" data-title="Worms Armageddon" data-year="1999">
          <img loading="lazy" src="assets/worms.jpg" alt="Worms Armageddon">
        </div>
      </div>

      <!-- Era 1: 2000–2006 -->
      <div class="gamer-era-cards" data-era="1">
        <div class="game-card" tabindex="0" data-title="Lineage II" data-year="2000">
          <img loading="lazy" src="assets/LineageII.jpg" alt="Lineage II">
        </div>
        <div class="game-card" tabindex="0" data-title="Mafia" data-year="2000">
          <img loading="lazy" src="assets/mafia.jpg" alt="Mafia">
        </div>
        <div class="game-card" tabindex="0" data-title="WWF SmackDown! 2" data-year="2000">
          <img loading="lazy" src="assets/smackdown.png" alt="WWF SmackDown! 2">
        </div>
        <div class="game-card" tabindex="0" data-title="Tony Hawk's Pro Skater 2" data-year="2000">
          <img loading="lazy" src="assets/tonyhawk.jpg" alt="Tony Hawk's Pro Skater 2">
        </div>
        <div class="game-card" tabindex="0" data-title="Commandos 2" data-year="2001">
          <img loading="lazy" src="assets/Commandos2.jpg" alt="Commandos 2">
        </div>
        <div class="game-card" tabindex="0" data-title="Counter-Strike 1.6" data-year="2001">
          <img loading="lazy" src="assets/cs.jpg" alt="Counter-Strike 1.6">
        </div>
        <div class="game-card" tabindex="0" data-title="Alone in the Dark" data-year="2001">
          <img loading="lazy" src="assets/alone.jpg" alt="Alone in the Dark">
        </div>
        <div class="game-card" tabindex="0" data-title="Max Payne" data-year="2001">
          <img loading="lazy" src="assets/maxpayne.jpg" alt="Max Payne">
        </div>
        <div class="game-card" tabindex="0" data-title="Battle for Middle Earth" data-year="2002">
          <img loading="lazy" src="assets/bftme1.jpg" alt="Battle for Middle Earth">
        </div>
        <div class="game-card" tabindex="0" data-title="Warcraft III: Frozen Throne" data-year="2003">
          <img loading="lazy" src="assets/frozenthrone.jpg" alt="Warcraft III: The Frozen Throne">
        </div>
        <div class="game-card" tabindex="0" data-title="Puzzle Pirates" data-year="2003">
          <img loading="lazy" src="assets/puzzlepirates.jpg" alt="Puzzle Pirates">
        </div>
        <div class="game-card" tabindex="0" data-title="DotA" data-year="2005">
          <img loading="lazy" src="assets/dota.jpeg" alt="DotA">
        </div>
        <div class="game-card" tabindex="0" data-title="Grim Fandango Remastered" data-year="2006">
          <img loading="lazy" src="assets/grim.jpg" alt="Grim Fandango Remastered">
        </div>
      </div>

      <!-- Era 2: 2007–2016 -->
      <div class="gamer-era-cards" data-era="2">
        <div class="game-card" tabindex="0" data-title="League of Legends" data-year="2009">
          <img loading="lazy" src="assets/lol.jpg" alt="League of Legends">
        </div>
        <div class="game-card" tabindex="0" data-title="God of War III" data-year="2010">
          <img loading="lazy" src="assets/gow3.jpg" alt="God of War III">
        </div>
        <div class="game-card" tabindex="0" data-title="LIMBO" data-year="2010">
          <img loading="lazy" src="assets/limbo.jpg" alt="LIMBO">
        </div>
        <div class="game-card" tabindex="0" data-title="Dead Nation" data-year="2010">
          <img loading="lazy" src="assets/DeadNation.jpg" alt="Dead Nation">
        </div>
        <div class="game-card" tabindex="0" data-title="LOTR: War in the North" data-year="2011">
          <img loading="lazy" src="assets/witn.jpg" alt="War in the North">
        </div>
        <div class="game-card" tabindex="0" data-title="Diablo III" data-year="2012">
          <img loading="lazy" src="assets/diablo-iii.jpg" alt="Diablo III">
        </div>
        <div class="game-card" tabindex="0" data-title="The Last of Us" data-year="2013">
          <img loading="lazy" src="assets/lastofus.jpg" alt="The Last of Us">
        </div>
        <div class="game-card" tabindex="0" data-title="AC IV: Black Flag" data-year="2013">
          <img loading="lazy" src="assets/blackflag.jpg" alt="Assassin's Creed IV: Black Flag">
        </div>
        <div class="game-card" tabindex="0" data-title="Gauntlet" data-year="2014">
          <img loading="lazy" src="assets/gauntlet.jpg" alt="Gauntlet">
        </div>
        <div class="game-card" tabindex="0" data-title="The Witcher 3" data-year="2015">
          <img loading="lazy" src="assets/Witcher3.jpg" alt="The Witcher 3">
        </div>
        <div class="game-card" tabindex="0" data-title="Bloodborne" data-year="2015">
          <img loading="lazy" src="assets/bloodborne.jpg" alt="Bloodborne">
        </div>
        <div class="game-card" tabindex="0" data-title="Hunt: Showdown" data-year="2016">
          <img loading="lazy" src="assets/hunt.jpg" alt="Hunt: Showdown">
        </div>
        <div class="game-card" tabindex="0" data-title="Uncharted 4" data-year="2016">
          <img loading="lazy" src="assets/Uncharted.jpg" alt="Uncharted 4">
        </div>
      </div>

      <!-- Era 3: 2017–2025 -->
      <div class="gamer-era-cards" data-era="3">
        <div class="game-card" tabindex="0" data-title="Little Nightmares" data-year="2017">
          <img loading="lazy" src="assets/littlenightmares.jpg" alt="Little Nightmares">
        </div>
        <div class="game-card" tabindex="0" data-title="Detroit: Become Human" data-year="2018">
          <img loading="lazy" src="assets/detroit.jpg" alt="Detroit: Become Human">
        </div>
        <div class="game-card" tabindex="0" data-title="WoW: WotLK Classic" data-year="2022">
          <img loading="lazy" src="assets/WoW.jpg" alt="World of Warcraft: Wrath of the Lich King Classic">
        </div>
      </div>

    </div><!-- /.gamer-cards-row -->

    <!-- Scrubber — anchored at bottom -->
    <div class="gamer-scrubber-wrap">
      <span class="gamer-year-display" id="gamer-year-display">1995</span>
      <input
        type="range"
        class="gamer-slider"
        id="gamer-slider"
        min="1990"
        max="2025"
        value="1995"
        aria-label="Timeline scrubber — drag to explore eras"
      >
      <div class="gamer-ticks" aria-hidden="true">
        <div class="gamer-tick" style="left: 0%"><span>1990</span></div>
        <div class="gamer-tick" style="left: 28.6%"><span>2000</span></div>
        <div class="gamer-tick" style="left: 48.6%"><span>2007</span></div>
        <div class="gamer-tick" style="left: 77.1%"><span>2017</span></div>
        <div class="gamer-tick" style="left: 100%"><span>2025</span></div>
      </div>
    </div><!-- /.gamer-scrubber-wrap -->

  </div><!-- /.gamer-timeline-wrap -->
  ```

- [ ] **Step 2.3: Verify the HTML structure in browser**

  Open `about.html` via local server. Click the "Gamer" tab. Verify:
  - The heading text appears
  - An era label "1990 – 1999 · Age 5" is visible
  - A horizontal scrollable row of game cards appears (era 0, unstyled at this point)
  - A range slider appears at the bottom
  - No JS errors in console
  - Other tabs (Who am I?, Career, etc.) still work correctly

- [ ] **Step 2.4: Commit**

  ```bash
  git add about.html assets/gamer_ages.png
  git commit -m "feat: replace gamer grid with timeline HTML structure"
  ```

---

## Chunk 2: CSS — Timeline Components

### Task 3: Append gamer timeline CSS to `about.css`

**Files:**
- Modify: `css/about.css` — append to end of file

- [ ] **Step 3.1: Append the following CSS block to the end of `css/about.css`**

  ```css
  /* ============================================
     Gamer Timeline — Age Progression Slider
     ============================================ */

  .gamer-timeline-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    width: 100%;
    padding: 10px 0 20px;
  }

  .gamer-heading {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
    margin: 0 0 14px;
    letter-spacing: 0.5px;
    font-style: italic;
  }

  /* Era label — shows current era name above the character */
  .gamer-era-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.8rem;
    color: #ff9800;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 16px;
    text-shadow: 0 0 10px rgba(255, 152, 0, 0.4);
    transition: opacity 0.3s ease;
    min-height: 1.2em;
  }

  /*
   * Viewport height: spec says ~280px; plan uses 340px to give characters
   * more breathing room given the portrait crop. Adjust down to 280px if
   * it looks too tall in context.
   */
  /* Character sprite viewport — clips to show one character at a time */
  .gamer-char-viewport {
    position: relative;
    width: 260px;
    height: 340px;   /* spec: ~280px; increase if character is cut off */
    margin: 0 auto 20px;
    overflow: hidden;
    border-radius: 12px;
    /* subtle orange glow frame */
    box-shadow: 0 0 0 1px rgba(255, 152, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.5);
  }

  /*
   * NOTE: This plan uses <div> + background-position instead of the spec's
   * <img> + object-position approach. Both achieve the same crossfade result;
   * background-position gives more reliable sprite control for a portrait
   * viewport. If switching to the pre-split fallback (Appendix A), the
   * element type must change from <div> to <img> in about.html.
   */

  /* Two stacked layers for crossfade — driven entirely by class swap */
  .gamer-char-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/gamer_ages.png');
    background-repeat: no-repeat;
    /* 400% width = sprite spans 4× container → each 25% = one character */
    background-size: 400% auto;
    /* bottom-align so seated characters are fully visible */
    background-position: 0% bottom;
    transition: opacity 0.5s ease;
  }

  .gamer-char-img.active  { opacity: 1; }
  .gamer-char-img.inactive { opacity: 0; }

  /* Era-specific background-position — set by JS on the inactive layer before swap */
  /* These are not CSS classes; positions are set inline via JS: */
  /*   Era 0 (Age 5):  0% bottom     */
  /*   Era 1 (Age 15): 33.33% bottom */
  /*   Era 2 (Age 25): 66.67% bottom */
  /*   Era 3 (Age 35): 100% bottom   */

  /* Cards row — horizontally scrollable, hidden unless .active */
  .gamer-cards-row {
    width: 100%;
    position: relative;
    min-height: 160px;
    margin-bottom: 8px;
  }

  .gamer-era-cards {
    display: none;
    flex-direction: row;
    gap: 12px;
    padding: 12px 8px 16px;
    overflow-x: auto;
    scroll-behavior: smooth;
    /* Custom scrollbar */
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 152, 0, 0.4) rgba(255, 255, 255, 0.05);
    /* Fade edges to hint scrollability */
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%);
    mask-image: linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%);
  }

  .gamer-era-cards::-webkit-scrollbar {
    height: 4px;
  }

  .gamer-era-cards::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 2px;
  }

  .gamer-era-cards::-webkit-scrollbar-thumb {
    background: rgba(255, 152, 0, 0.4);
    border-radius: 2px;
  }

  .gamer-era-cards.active {
    display: flex;
    animation: fadeInUp 0.45s ease both;
  }

  /* Cards inside the scroll row — uniform size (no grid-span classes) */
  .gamer-era-cards .game-card {
    flex: 0 0 120px;
    width: 120px;
    height: 120px;
    aspect-ratio: 1 / 1;
  }

  /* Scrubber section */
  .gamer-scrubber-wrap {
    position: relative;
    width: 100%;
    max-width: 700px;
    padding: 28px 12px 10px;
    box-sizing: border-box;
  }

  /* Floating year readout above the thumb */
  .gamer-year-display {
    position: absolute;
    top: 4px;
    font-family: 'Orbitron', sans-serif;
    font-size: 0.75rem;
    color: #ff9800;
    letter-spacing: 2px;
    transform: translateX(-50%);
    pointer-events: none;
    text-shadow: 0 0 8px rgba(255, 152, 0, 0.5);
    transition: left 0.05s linear;
    white-space: nowrap;
  }

  /* Range input base */
  .gamer-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
    /* Fill updated by JS via style.background */
    background: rgba(255, 152, 0, 0.2);
    transition: background 0.1s linear;
  }

  /* WebKit thumb */
  .gamer-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ff9800;
    border: 2px solid #000;
    box-shadow: 0 0 8px rgba(255, 152, 0, 0.6);
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .gamer-slider::-webkit-slider-thumb:hover,
  .gamer-slider:active::-webkit-slider-thumb {
    transform: scale(1.25);
    box-shadow: 0 0 16px rgba(255, 152, 0, 0.9);
  }

  /* Firefox thumb */
  .gamer-slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ff9800;
    border: 2px solid #000;
    box-shadow: 0 0 8px rgba(255, 152, 0, 0.6);
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .gamer-slider::-moz-range-thumb:hover {
    transform: scale(1.25);
    box-shadow: 0 0 16px rgba(255, 152, 0, 0.9);
  }

  /* Firefox track fill */
  .gamer-slider::-moz-range-progress {
    background: #ff9800;
    height: 4px;
    border-radius: 2px;
  }

  /* Era tick marks below the slider */
  .gamer-ticks {
    position: relative;
    width: 100%;
    height: 20px;
    margin-top: 6px;
  }

  .gamer-tick {
    position: absolute;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  .gamer-tick::before {
    content: '';
    display: block;
    width: 1px;
    height: 6px;
    background: rgba(255, 152, 0, 0.5);
  }

  .gamer-tick span {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.55rem;
    color: rgba(255, 152, 0, 0.55);
    letter-spacing: 0.5px;
    white-space: nowrap;
  }

  /* First and last tick — don't clip at edges */
  .gamer-tick:first-child { transform: translateX(0); }
  .gamer-tick:last-child  { transform: translateX(-100%); }

  /* ============================================
     Gamer Timeline — Mobile Responsiveness
     ============================================ */

  @media (max-width: 768px) {
    .gamer-char-viewport {
      width: 200px;
      height: 260px;
    }

    .gamer-era-cards .game-card {
      flex: 0 0 100px;
      width: 100px;
      height: 100px;
    }

    .gamer-era-label {
      font-size: 0.7rem;
      letter-spacing: 1.5px;
    }

    .gamer-year-display {
      font-size: 0.65rem;
    }

    .gamer-tick span {
      font-size: 0.5rem;
    }

    .gamer-scrubber-wrap {
      padding: 26px 8px 8px;
    }
  }

  @media (max-width: 480px) {
    .gamer-char-viewport {
      width: 170px;
      height: 220px;
    }

    .gamer-era-cards .game-card {
      flex: 0 0 85px;
      width: 85px;
      height: 85px;
    }
  }
  ```

- [ ] **Step 3.2: Verify CSS in browser**

  Reload `about.html`, click the Gamer tab. Verify:
  - The character viewport box is visible (260px × 340px portrait box with orange glow border)
  - The sprite image renders inside it — if characters appear doubled or all 4 show at once, the `background-size: 400% auto` needs adjustment (see Step 3.3)
  - Era 0 game cards appear in a horizontal scrollable row below the viewport
  - The range scrubber is visible at the bottom with an orange thumb and dark track
  - Year label "1995" floats above the thumb
  - Era tick marks ("1990", "2000", "2007", "2017", "2025") appear below the track

- [ ] **Step 3.3: Sprite position calibration (if needed)**

  Open browser DevTools. On the `.gamer-char-img` element, try adjusting `background-size` values:
  - If all 4 characters show: `background-size: 400% auto` is correct — the `background-position` just needs JS to set it
  - If only partial character shows and others bleed in: the image pixel boundaries differ from the even 25% split — switch to the **pre-split fallback** (see Appendix A)
  - If image appears squashed: the sprite aspect ratio differs — try `background-size: 400% 100%` briefly to diagnose

- [ ] **Step 3.4: Commit**

  ```bash
  git add css/about.css
  git commit -m "feat: add gamer timeline CSS — viewport, cards, scrubber"
  ```

---

## Chunk 3: JavaScript — Timeline Logic

### Task 4: Add `initGamerTimeline()` to `about.js`

**Files:**
- Modify: `js/about.js`
  - Remove: lines 131–159 (mobile tap-toggle for `.game-card`)
  - Add: `initGamerTimeline()` function definition (before the second DOMContentLoaded listener's closing `}`), and call it from inside that same listener

- [ ] **Step 4.1: Remove the old mobile tap-toggle block**

  In `js/about.js`, find and delete the following block (lines 131–159 in the second `DOMContentLoaded` listener — the one starting at line 74):

  ```javascript
  // 4. Gamer Section: Mobile Tap Toggle
  const gameCards = document.querySelectorAll('.game-card');

  if (gameCards.length > 0) {
    gameCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // Only apply toggle logic on touch devices or small screens
        if (window.innerWidth <= 1024) {
          e.stopPropagation();

          const wasActive = card.classList.contains('is-active');

          // Clear all other active cards
          gameCards.forEach(c => c.classList.remove('is-active'));

          // Toggle current card
          if (!wasActive) {
            card.classList.add('is-active');
          }
        }
      });
    });

    // Close cards when clicking anywhere else
    document.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        gameCards.forEach(card => card.classList.remove('is-active'));
      }
    });
  }
  ```

  Do NOT touch the first `DOMContentLoaded` listener (line 39) — leave it as-is.

- [ ] **Step 4.2: Add `initGamerTimeline()` — define it as a standalone function**

  The spec says to define and call the function inside the second listener. This plan defines it at module scope (before the listener) and calls it from within — functionally identical, and easier to read. Add the following function **before** the second `DOMContentLoaded` listener (i.e., before `document.addEventListener("DOMContentLoaded", () => {` at line 74). Insert it at line 73 or so (after `showCategory`'s closing `};`):

  ```javascript
  // Gamer Timeline: Interactive age-progression slider
  function initGamerTimeline() {
    const slider = document.getElementById('gamer-slider');
    if (!slider) return; // not on this page

    const eraLabel      = document.getElementById('gamer-era-label');
    const yearDisplay   = document.getElementById('gamer-year-display');
    const charA         = document.getElementById('gamer-char-a');
    const charB         = document.getElementById('gamer-char-b');
    const eraCardGroups = document.querySelectorAll('.gamer-era-cards');

    const ERAS = [
      { start: 1990, end: 1999, label: '1990 – 1999 · Age 5',  bgPos: '0% bottom' },
      { start: 2000, end: 2006, label: '2000 – 2006 · Age 15', bgPos: '33.33% bottom' },
      { start: 2007, end: 2016, label: '2007 – 2016 · Age 25', bgPos: '66.67% bottom' },
      { start: 2017, end: 2025, label: '2017 – 2025 · Age 35', bgPos: '100% bottom' },
    ];

    const MIN = 1990;
    const MAX = 2025;
    const RANGE = MAX - MIN;

    function getEraIndex(year) {
      if (year <= 1999) return 0;
      if (year <= 2006) return 1;
      if (year <= 2016) return 2;
      return 3;
    }

    function updateFill(value) {
      const pct = ((value - MIN) / RANGE) * 100;
      slider.style.background =
        `linear-gradient(to right, #ff9800 ${pct}%, rgba(255,152,0,0.2) ${pct}%)`;
    }

    function updateYearDisplay(value) {
      const pct = ((value - MIN) / RANGE) * 100;
      // Offset to keep label centred over the thumb (thumb is ~10px radius = 20px wide)
      // Formula: pct% of slider width, minus thumb-half correction
      const thumbHalfPx = 10;
      const sliderWidth = slider.offsetWidth || 600;
      const leftPx = (pct / 100) * sliderWidth;
      const corrected = leftPx + (thumbHalfPx - (pct / 100) * 2 * thumbHalfPx);
      yearDisplay.style.left = corrected + 'px';
      yearDisplay.textContent = value;
    }

    let currentEra = 0;
    let isTransitioning = false;
    let pendingEra = -1; // stores the era requested during a transition

    function applyEra(newEra) {
      // Determine which layer is currently active
      const activeImg   = charA.classList.contains('active') ? charA : charB;
      const inactiveImg = activeImg === charA ? charB : charA;

      // Set the new background-position on the incoming layer BEFORE fading
      inactiveImg.style.backgroundPosition = ERAS[newEra].bgPos;
      inactiveImg.setAttribute('aria-label', `Chris ${ERAS[newEra].label}`);

      // Swap classes — CSS transition handles the fade, no inline opacity
      activeImg.classList.remove('active');
      activeImg.classList.add('inactive');
      inactiveImg.classList.remove('inactive');
      inactiveImg.classList.add('active');

      // Swap visible card group
      eraCardGroups.forEach((group, i) => {
        group.classList.toggle('active', i === newEra);
      });

      eraLabel.textContent = ERAS[newEra].label;
      currentEra = newEra;
    }

    function switchEra(newEra) {
      if (newEra === currentEra) return;

      if (isTransitioning) {
        // Store the request; apply it once the current transition finishes
        // This prevents rapid drag leaving character out of sync with year display
        pendingEra = newEra;
        return;
      }

      isTransitioning = true;
      pendingEra = -1;
      applyEra(newEra);

      // Unlock after CSS transition (500ms) + buffer; apply any pending era
      setTimeout(() => {
        isTransitioning = false;
        if (pendingEra !== -1 && pendingEra !== currentEra) {
          switchEra(pendingEra);
        }
      }, 520);
    }

    // Initialise to era 0 / year 1995
    charA.style.backgroundPosition = ERAS[0].bgPos;
    charB.style.backgroundPosition = ERAS[0].bgPos;
    updateFill(1995);
    updateYearDisplay(1995);

    // Scrubber events
    slider.addEventListener('input', () => {
      const val = parseInt(slider.value, 10);
      updateFill(val);
      updateYearDisplay(val);
      switchEra(getEraIndex(val));
    });

    // Re-position year label on window resize (slider width changes)
    window.addEventListener('resize', () => {
      updateYearDisplay(parseInt(slider.value, 10));
    });
  }
  ```

- [ ] **Step 4.3: Call `initGamerTimeline()` inside the second DOMContentLoaded**

  Inside the second `DOMContentLoaded` listener (starting at line 74), **append** the following call at the end of the callback, just before the closing `});`:

  ```javascript
  // 4. Gamer Timeline
  initGamerTimeline();
  ```

- [ ] **Step 4.4: Verify in browser — scrubber interaction**

  Open `about.html` in the local server, click the Gamer tab. Verify:
  - Slider starts at 1995, era label shows "1990 – 1999 · Age 5"
  - Dragging the slider right to ~2003 → era label changes to "2000 – 2006 · Age 15"
  - Character viewport crossfades smoothly (≈0.5s) to the teen character
  - Era 1 game cards (Lineage II, CS 1.6, Max Payne, etc.) fade in below
  - Continuing to drag right → era 2 and 3 switch similarly
  - Year display number updates live as you drag
  - Orange fill on slider track grows as you drag right
  - No console errors

- [ ] **Step 4.5: Verify — sprite position quality**

  With the slider at each era boundary, verify the character viewport shows the correct character clearly:
  - Era 0 (year 1990–1999): small child (blue shirt) should be centred/prominent
  - Era 1 (year 2000–2006): teen in red shirt with earphones
  - Era 2 (year 2007–2016): young adult in green shirt
  - Era 3 (year 2017–2025): adult with beard in blue shirt

  **If characters look poorly cropped** (e.g., half of one character and half of the next visible):
  Measure the actual character boundaries in the sprite (use any image editor or browser DevTools) and adjust the `bgPos` values in the `ERAS` array. The formula for custom positions is:
  `bgPos = 'X% bottom'` where `X = charCenterPx / (totalSpritePx - containerPx) * 100`

  If adjustment isn't clean, proceed to **Appendix A — Pre-split fallback**.

- [ ] **Step 4.6: Verify — mobile responsiveness**

  Resize browser to 375px wide (mobile). Verify:
  - Character viewport is 200px × 260px (or smaller at 480px breakpoint: 170px × 220px)
  - Game cards still scroll horizontally via touch swipe
  - Scrubber thumb is large enough to drag easily
  - Era label and year display are readable at smaller font sizes
  - No horizontal overflow / layout breaking

- [ ] **Step 4.7: Verify — other tabs unaffected**

  Click through "Who am I?", "Career (so far)", "Game Development", "Game Design", "Unity Core Engineer". Confirm each tab still shows its content correctly and the Unity animation still plays on the Unity Core Engineer tab.

- [ ] **Step 4.8: Commit**

  ```bash
  git add js/about.js
  git commit -m "feat: add gamer timeline JS — scrubber, crossfade, era switching"
  ```

---

### Task 5: Schema.org Person markup (bonus — separate from timeline)

> This is a quick independent win. Do it now while in `about.html`, or skip and do separately.

**Files:**
- Modify: `portfolio.html` (primary SEO landing page) — add to `<head>`

- [ ] **Step 5.1: Add Schema.org Person block to `portfolio.html` `<head>`**

  Add the following just before the closing `</head>` tag in `portfolio.html`:

  ```html
  <!-- Schema.org Person markup — helps search engines and AI crawlers -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Christoforos Papachristoforou",
    "alternateName": "Chris Papachristoforou",
    "url": "https://d3vcrow.github.io",
    "email": "chr.papachristoforou@gmail.com",
    "jobTitle": "Unity Developer",
    "description": "Unity developer and game designer with 7+ years of experience. Specialising in real-time 3D, render pipelines, custom editor tools, and C# systems architecture.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Athens",
      "addressCountry": "GR"
    },
    "sameAs": [
      "https://github.com/D3vCrow",
      "https://www.linkedin.com/in/christoforos-papachristoforou-a7b303157/",
      "https://d3vcrow.itch.io/"
    ],
    "knowsAbout": [
      "Unity", "C#", "Game Development", "Game Design",
      "HDRP", "URP", "Render Pipelines", "Performance Profiling",
      "Custom Editor Tools", "Python", "3D Rendering"
    ]
  }
  </script>
  ```

- [ ] **Step 5.2: Validate the markup**

  Open https://search.google.com/test/rich-results, paste `https://d3vcrow.github.io` (after deploying), or paste the raw JSON into https://validator.schema.org to confirm no errors.

- [ ] **Step 5.3: Commit**

  ```bash
  git add portfolio.html
  git commit -m "feat: add Schema.org Person structured data markup"
  ```

---

## Appendix A — Pre-Split Fallback

If CSS sprite positioning does not give clean character cropping, split the sprite into 4 PNGs:

1. Open `assets/gamer_ages.png` in any image editor (Photoshop, GIMP, Paint.NET, or use the browser Canvas API).
2. Measure the pixel x-boundaries of each character (roughly: 0–310, 310–640, 640–980, 980–1328 — measure to be precise).
3. Crop and export:
   - `assets/gamer-age5.png` (leftmost crop)
   - `assets/gamer-age15.png`
   - `assets/gamer-age25.png`
   - `assets/gamer-age35.png`
4. In `about.html`, change the two `.gamer-char-img` elements from `<div>` to `<img>`:
   ```html
   <img class="gamer-char-img active"  id="gamer-char-a" src="assets/gamer-age5.png"  alt="Chris age 5">
   <img class="gamer-char-img inactive" id="gamer-char-b" src="assets/gamer-age5.png" alt="Character">
   ```
5. In `about.css`, replace the `background-*` rules on `.gamer-char-img` with:
   ```css
   .gamer-char-img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; object-position: center bottom; transition: opacity 0.5s ease; }
   ```
6. In `about.js`, update `ERAS` to include `imgSrc` instead of `bgPos`, and replace `inactiveImg.style.backgroundPosition = ERAS[newEra].bgPos` with `inactiveImg.src = ERAS[newEra].imgSrc` in `applyEra()`.

---

## Final Checklist

- [ ] `assets/gamer_ages.png` exists
- [ ] `#content-gamer` in `about.html` contains the new timeline markup (no `.gamer-collection`, no size-variant classes on cards)
- [ ] All 54 game cards are present (25 + 13 + 13 + 3), distributed across 4 `.gamer-era-cards` groups
- [ ] New CSS appended to `css/about.css`, no existing rules modified
- [ ] `initGamerTimeline()` added to `js/about.js`, called from second DOMContentLoaded listener
- [ ] Old mobile tap-toggle block removed from `js/about.js`
- [ ] Scrubber crossfades character and swaps cards on era change
- [ ] All other tabs unaffected
- [ ] No console errors
- [ ] Mobile layout works at 375px
- [ ] Schema.org Person block added to `portfolio.html`
