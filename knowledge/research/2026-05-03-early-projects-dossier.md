---
title: Early Unity Projects — Dossier (7 folders, presentation hooks + skills delta)
date: 2026-05-03
type: research
verify_by: 2026-08-01
tags: [portfolio, unity, projects, makeover, dossier]
---

# Early Unity Projects — Dossier

## Question restated
For 7 early Unity project folders on disk, build a once-and-for-all reference of mechanics, code highlights, soul hooks, and current-portfolio correlation, plus a Unity-skills delta vs the current `unity.html` skills table. Feeds the portfolio overhaul handoff.

## TL;DR
- All 7 folders are correlated. 4 already-on-portfolio entries are **severely undersold** by the current cards (YipMan, TD Lab, IslandP, Heavy Rotten Souls). 1 was **dropped by the makeover and needs restoring** (Greater Game). 1 is **new and earns its own card** (Hack&Slash). 1 has a **framing mismatch**: Cowboy vs Hell is Darn! My Barn! but the code is 2D twin-stick action, not "farm management" — needs reconciliation.
- Skills delta: 4 missing chips (DOTS/Burst, Animation Rigging, 2D Pipeline, VR/XR), 1 chip likely under-tier'd (Photon → bump from Familiar to Experienced given Greater Game's production-level usage).
- The strongest "creativity + engineering" hooks across the 7: radial-drag combo selector (Hack&Slash), Verlet-rope fishing + Burst-compiled survival (IslandP), modifier-key punch grid via Animation Rigging targets (Vintage Boxing), multi-element champion TD with NodeBehavior state machine (TD Lab), drive-and-on-foot dual mode + object-pooled zombie waves (Post-Apo), full Photon-multiplayer mobile quiz with avatar customization (Greater Game).

---

## 1. Hack&Slash — NEW ENTRY
- **Path:** `F:\DevCrow\Thrion Unity Files\Hack&Slash`
- **Unity:** 6000.2.7f2 (Unity 6.2 — most recent of the 7)
- **Type / genre:** Third-person hack-and-slash combat lab with timeline-driven boss fights
- **Status:** Active prototype (Chris confirmed: "active solo hack-and-slash lab")
- **Correlation:** No current portfolio entry. **Treat as its own card.**

### Mechanics & systems
- Radial combo selector: mouse-drag Y-axis snaps to up/center/down, queue-based combo execution (`Queue<int>`), DOTween-animated cursor, cooldown ring fill amount
- Camera-pitch-driven aim offset: `MultiAimConstraint` data offset interpolated by `cameraTransform.eulerAngles.x` clamped to `±maxOffset`
- Phase-based boss fights via Unity Timeline + Signal ScriptableObjects (`ActivateControlsSignal`, `DeactivateControlsSignal`, `EnterPhase2`, `Boar intro.playable`, `Enter Phase 2 Timeline.playable`)
- Custom Input System actions (`RPGInputActions`)
- Generic singleton pattern (`Singleton<T>`)
- Fog-of-war texture (`FogOfWarTexture.asset`)

### Code highlights
- `AttackSelectorUI.cs` (167 lines): drag threshold detection, attack queue, performing-combo coroutine, cooldown UI ring
- `AimControl.cs` (47 lines): clean Lerp-based aim offset rig
- `PlayerDamageReceiver.cs`, `Singleton.cs` (generic), `InputSystem_Actions.cs`

### Asset workflow / middleware
- JohnStairs RCC (Realistic Character Controller) for motor
- Blaze AI (premium AI behavior pack)
- FImpossible Creations animation tools
- AYellowpaper SerializedCollections (typed collections in inspector)
- Magic Light Probes (lighting tooling)
- KriptoFX VolumetricBloodFX, Realistic Effects Pack 3
- HighlightPlus (selection/outline FX)
- EasyWallCollider, ComponentNames

### Visual / vibe
- Scene library leans medieval/fantasy (`MedievalVampireKnight.unity`, `LongswordAnimsetPro`)
- Boss-encounter framing — Boar boss with phase intro

### Soul hooks
- **Radial-drag combo input** is genuinely uncommon (most hack-and-slash uses button presses, not drag-to-pick)
- **Timeline + Signal-driven boss phase transitions** = professional cinematic flow
- Newest project on disk — proof Chris is still actively building/iterating in Unity

### Presentation hook candidates
1. *"Combat input as expression"* — radial drag selector, queue-based combos, cooldown ring (1 short clip + 1 named system)
2. *"Boss fights, scripted"* — Timeline + Signals + phase transitions (clip of phase 2 swap)

---

## 2. IslandP_Collab — Island Project (Pyles Studio)
- **Path:** `F:\DevCrow\Thrion Unity Files\IslandP_Collab`
- **Unity:** 6000.0.26f1 (Unity 6.0 LTS)
- **Type / genre:** Open-world RPG / survival with fishing + village exploration
- **Status:** Active studio project
- **Correlation:** Maps to current "Island Project" card (Pyles Studio section). **Currently undersold.**

### Mechanics & systems
- Thirst survival system (event-driven `OnThirstChanged`, range threshold for `isThirsty`, decrease-over-time coroutine)
- Verlet-rope fishing line (`VerletLine.CastLine / ReelInLine / ResetLine`), with `FishingManager` minigame setup + catch attempt
- Push/pull rigidbody interactions (layer-mask gated, horizontal-only push direction, force-impulse)
- Animator layer weight blending (state machine: Inactive/Increasing/Decreasing) for pickup overlay
- Singleton family: `DDOL_Singleton`, `DominantSingleton`, `RegulatorSingleton`, generic `Singleton<T>` (Unity 6 advanced single-instance patterns)
- AI waypoint navigation (`AIWaypointNavigator`)
- TextMesh Pro message queue HUD with scrolling text (`Brain_Manager`)
- Global command routing (`GlobalCommands_Manager`)

### Code highlights
- `CharacterMechanics.cs` (~240 lines, `[BurstCompile]`): thirst, fishing, push, layer-weight blending — single-class ownership of player surface mechanics
- `Brain_Manager.cs`: queue + coroutine + last-message-dedup HUD
- 4 distinct Singleton implementations under `Code Architecture/`

### Asset workflow / middleware
- Bakery (high-quality lightmap baker, multiple modes: directional / SH / RNM / MonoSH)
- Deform (mesh deformation)
- FMOD audio
- Easy Save 3 (persistence)
- Sirenix Odin Inspector (`[Title]`, `[ReadOnly]`, `[Range]` attributes used)
- BetterHierarchy
- JohnStairs RCC

### Visual / vibe
- Houses, village, LOD scenes — large terrain with terrain layers ("Dry And Dirty Grassy Ground")
- Custom animations folder

### Soul hooks
- **Verlet-rope fishing line** = handcrafted physics, not asset-store
- **Burst-compiled character mechanics** = production-grade perf attention
- **Singleton typology** (DDOL/Dominant/Regulator/generic) = Chris taking architecture seriously

### Presentation hook candidates
1. *"The world has rules"* — thirst as event-driven survival, Verlet-rope fishing, push physics — the *systems* of a living world
2. *"Architected to scale"* — Singleton family + Brain_Manager queue + GlobalCommands routing — code architecture story

### Detail-page potential
**Yes** — this is one of the 3 strongest candidates for a `/island.html` detail page (alongside Hack&Slash and TD Lab).

---

## 3. Cowboy vs Hell = Darn! My Barn! — REWRITE FRAMING
- **Path:** `F:\DevCrow\Thrion Unity Files\Cowboy vs Hell`
- **Unity:** 6000.0.26f1 (Unity 6.0 LTS)
- **Type / genre:** 2D top-down twin-stick shooter with farm-themed bosses (Bull, Cow, Chicken)
- **Status:** Published (GGJ 2024), 17-day solo dev
- **Correlation:** Maps to current "Darn! My Barn!" card. **Framing resolved 2026-05-03 (Chris): the actual game is an action shooter, not "farm management" as the current card claims. The current portfolio framing is wrong and must be rewritten.**

### Mechanics & systems
- Twin-stick character with hands as separate bones (`HandsScript`, `HandDamaged` left + right, `HandGun`)
- Bullet variants (`HandGunBullets`, `FMJBullets`, `BulletDestroyer`, `ReloadBulletScipt`)
- Weapon feel: smoke after fire (`SmokeAfterFireScript`, `SmokePos`), camera shake (`CameraShake`), sprite shadow (`SpriteShadow`), blood splash decay (`DestroyBloodsplash`)
- Enemies: `ZombieBasics`, `ZombieBasicsAnim`, `BodyPart` (dismemberment?), `BounceOnCollision`
- Boss enemies: Bull, Cow, Chicken — each has regular + boss prefab + animator
- 2D crowd avoidance via `ProjectDawn.LocalAvoidance` (DOTS-based)
- Event-driven architecture via `Obvious.Soap` (ScriptableObject events + variables)

### Code highlights
- Hand-as-separate-script split (left/right damaged independently)
- DOTS local avoidance for swarm performance
- SOAP for decoupled event communication

### Asset workflow / middleware
- DOTween Pro (tweening + timeline integration)
- FronkonGames Artistic Tonemapper (post-FX)
- Obvious.Soap (event-architecture middleware)
- ProjectDawn.LocalAvoidance (DOTS package)
- ARPG Effects (Magic effect demos)
- 2D pipeline: PSB Photoshop import (`Bull.psb`, `Bull 1.psb`), 2D animator controllers per enemy, 2D animations

### Visual / vibe
- Image sequence recordings (`Image Sequence_001_*.jpg`) — frame-by-frame proof footage
- Cartoonish farm enemies turned hostile

### Soul hooks
- **Dual-hand shooter combat** with independent damage state per hand
- **DOTS crowd avoidance** for cheap swarms
- **SOAP architecture** = scalable event-driven design taken seriously

### Presentation hook candidates
1. *"Hell came to the barn"* — 2D twin-stick action with farm-monster bosses (clip: vs. Bull boss)
2. *"Built to swarm"* — DOTS local avoidance + SOAP events for performance + maintainability

### Resolved 2026-05-03
Chris confirmed the actual game is an action shooter; the current "farm management" framing is wrong. Rewrite the card around twin-stick action vs. farm-monster bosses. Suggested anchor: *"Hell came to the barn"* (presentation hook #1).

---

## 4. Greater Game Official — RESTORE TO PORTFOLIO
- **Path:** `F:\DevCrow\Backup CP\Projects\Greater Game Official`
- **Unity:** 6000.0.26f1 (Unity 6.0 LTS)
- **Type / genre:** Mobile quiz / comparison game with multiplayer, avatar customization, leveling economy
- **Status:** Production-grade Pyles Studio commercial project
- **Correlation:** Was on the original `projects.html` (Solo Lab category, "[INFO]" tagged, YouTube `ldTZRpw-oGg`, "Lead Developer", "Shift to design-first architecture"). **Dropped by the 3-page makeover. Restore.**

### Mechanics & systems
- Compare-the-objects gameplay loop: present 2 options, pick higher value, time pressure (12s timer, clock SFX at <10.25s, final tone at <0.3s)
- Stamina meter (countdown 30s, decrements stamina counter)
- XP / leveling (`expGap = playerLevel * 100`, fireworks + level-up sound on level)
- Bonus True/False questions every 5 regular questions
- Daily rewards system (`DailyBonusSystem`, `DailyRewards`)
- Cloud-saved progress via PlayerPrefs (`CloudStamina`, `CloudCoins`, `CloudExp`, `CloudLevel`, `CloudPaint`)
- Paint currency for skipping questions
- Photon multiplayer: room creation, room listing, current room scene, player listing UI
- Avatar customization: mouth changer, body characteristics, color picker (HSV), characteristic options, change-avatar flow
- Performance stats tracking (`PerfomanceStats.CorrectComp / WrongComp / CorrectTOF / WrongTOF`)

### Code highlights
- `GamePlayManager.cs` (~540 lines): full game loop owner — timer, stamina, questions/bonus, cloud sync
- `PhotonScripts/`: Connection, CreateOrJoinRoomScene, CreateRoomUI, CurrentRoomScene, ManagerRoomsFM, PlayerListing, PlayerListingUI, RoomListing, RoomListingUI
- Greek code comments throughout (e.g. `// xronometro optiko efe` = "stopwatch optical effect", `// kovei ena stamina kathe fora pou patas skip` = "cuts stamina each time you press skip") — natural-language workflow signal

### Asset workflow / middleware
- HSV-Color-Picker-Unity-master
- AlphaRaycaster (UI raycast filtering)
- FullTiltBoogie (animation/tweening package?)
- FreeButtonSet (UI library)

### Visual / vibe
- Mobile portrait orientation (scene `Portrait.unity`)
- Avatar creator with body/color/characteristic mix-and-match
- Daily bonus + gold coin reward UI

### Soul hooks
- **Full mobile production pipeline** — multiplayer rooms + database content + monetization (paint currency) + cloud progress + daily rewards
- **Lead Developer credit** with design-first architecture shift (per original portfolio framing)
- **Photon networking shipped** — bumps the multiplayer skill from "Familiar" to "Experienced"

### Presentation hook candidates
1. *"Mobile, social, online"* — Photon multiplayer rooms + avatar customization + daily rewards (clip from YT `ldTZRpw-oGg`)
2. *"Lead Developer credit"* — design-first architecture shift, full game loop owner (use the existing original-portfolio framing as anchor)

### Recommended card framing for restoration
Match the format of other Pyles Studio cards: video media (YouTube `ldTZRpw-oGg`), tags `Unity / Mobile / Photon PUN / Pyles Studio / Lead Developer`, year `2019-2020`, description ~3 sentences covering quiz loop + Photon multiplayer + avatar customization.

---

## 5. YipMan Project_ box = Vintage Boxing — UNDERSOLD
- **Path:** `F:\DevCrow\Backup CP\for portofolio\YipMan Project_ box`
- **Unity:** 2022.3.15f1 LTS
- **Type / genre:** Boxing combat lab with modifier-key punch grid + Animation Rigging
- **Status:** Curated for portfolio (lives under `for portofolio/`)
- **Correlation:** Maps to current "Vintage Boxing" card. Current desc: *"IK Animation, Physics Combat, Hit Feedback"* — accurate but generic.

### Mechanics & systems
- 8-direction punch matrix via mouse + modifier keys: LMB / RMB × (no mod / Shift / Alt / Ctrl) → 6 unique punch animations + L_Block / R_Block (8 outputs from 4 keys × 2 buttons)
- Raycast-driven Animation Rigging targets: mouse hover sets `target.position` for `Rig` constraint, so punches *look at the cursor*
- Movement-blocked-during-punch (input gated by `movement.movement.magnitude != 0`)
- AI opponent (`AIMovement`)
- Impact tracking (`ImpactTakenMeter`, `WhenPunch`)
- WASD movement (`WASDMovement`), random animator speed for variety (`RandomAnimatorSpeed`), stats (`Stats`)

### Code highlights
- `PunchOnClick.cs` (~108 lines): the modifier-key punch dispatcher
- Clean separation between input mapping and rig target

### Asset workflow / middleware
- Animation Rigging package (`Rig`, `MultiAimConstraint`)
- 33-ford-coupe car model in scene (vibe asset?)

### Visual / vibe
- Lab-style scenes (`URP box.unity`, `URP lab.unity`, `lab.unity`) — clearly an experiment bench
- 10+ MP4 recordings — proof-of-life footage available

### Soul hooks
- **Modifier-key punch grid** = inventive input mapping (uncommon for boxing games — most use combos via button sequences, not modifier-locked aliases)
- **Cursor-targeted rig** = punches aim at where you click, mouse becomes targeting reticle
- Animation Rigging used at runtime (not just authoring)

### Presentation hook candidates
1. *"Punches that look where you click"* — Animation Rigging + raycast targets
2. *"The punch grid"* — 8 outputs from 4 keys (clip showing each punch labeled)

### Recommended card upgrade
Replace generic "IK + physics + hit feedback" with one specific named system. E.g.: *"Boxing combat lab. Animation Rigging targets that follow the mouse cursor — every punch lands where you point. 6 punch animations + 2 blocks mapped to mouse buttons + modifier keys."*

---

## 6. TD Mechanics Lab = Fantasy Tower Defence — UNDERSOLD
- **Path:** `F:\DevCrow\Backup CP\for portofolio\TD Mechanics Lab`
- **Unity:** 2022.3.15f1 LTS
- **Type / genre:** Tower defence with multi-element champions
- **Status:** Curated for portfolio
- **Correlation:** Maps to current "Fantasy Tower Defence" card. Current desc: *"A* Pathfinding, Wave Logic, Mesh Deformation"* — undersells dramatically.

### Mechanics & systems
- 5 distinct champion classes, each with own ActionsUI: Archer, Wizard, FireWizard, IceWizard, PoisonArcher, Warrior
- Element-typed spells: `BasicSpell`, `FireSpell`, `IceSpike`, `PoisonArrow`
- Element-typed projectiles: `Arrow`, `PoisonArrow`, `Sword`
- Damage system: `DamageBase` (base + UI refresh), `EnemyProfile`
- Turret state machine: `Turret`, `TurretState`, `TurretArea`, `RangedTurret`, `NodeBehavior` (turretState enum), with `OnDrawGizmosSelected` range visualization
- Wave system: `Wave`, `WaveManager`, `WaveSpawner`, `Waypoints`
- Build placement: `UnitBuilder` (the meta-loop)
- Effects: `EffectAreaBehaviour`, `Explosion`, `FireExplosion`
- Player-side: `PlayerActions`, `PlayerInfo`, `PlayerStats`, `ScriptHolder` GameObject lookup pattern

### Code highlights
- `FireWizard.cs`: nearest-enemy lock-on (`OverlapSphere` every 0.5s via `InvokeRepeating`), Quaternion.Lerp turn, coroutine-driven cast animation
- `DamageBase.cs`: clean `OnTriggerEnter` with `EndPoind` tag check + UI refresh callback
- 30+ scripts organized by champion type and system

### Asset workflow / middleware
- UMotion (advanced animation editor)
- TextMesh Pro
- Custom turret-area gizmo visualization

### Visual / vibe
- Champions, Enemies, Turrets, Buffers, Effects asset categories — well-architected hierarchy
- Magical effect demos (Blood, Magical, MagicFireVol1)

### Soul hooks
- **Multi-element champion design** — each champ has distinct kit, action UI, projectile behavior (way more design than generic "Tower Defence")
- **NodeBehavior turret state machine** = formal state architecture, not ad-hoc booleans
- **UnitBuilder + WaveManager + Waypoints** = full meta-loop

### Presentation hook candidates
1. *"Five champions, five kits"* — Archer / Wizard / FireWizard / IceWizard / PoisonArcher with distinct projectiles
2. *"Tower state, formalized"* — NodeBehavior state machine + WaveManager + UnitBuilder

### Recommended card upgrade
Replace generic "A* + wave logic + mesh deformation" with one specific named system. E.g.: *"Tower defence lab. Five champion classes (Archer, Fire/Ice/Poison wizards) with distinct projectiles and per-class action UI. NodeBehavior turret state machine, WaveSpawner / Waypoints architecture, UnitBuilder placement."*

### Detail-page potential
**Yes** — second-strongest candidate for a `/td-lab.html` detail page.

---

## 7. Heavy Rotten Souls = Post-Apocalyptic Driving — SEVERELY UNDERSOLD
- **Path:** `F:\DevCrow\Backup CP\for portofolio\Heavy Rotten Souls`
- **Unity:** 2022.3.15f1 LTS
- **Type / genre:** Drive-and-on-foot zombie game with mobile-ready UI
- **Status:** Curated for portfolio
- **Correlation:** Maps to current "Post-Apocalyptic Driving" (2018) card. Current desc: *"Vehicle Physics, Environmental Shaders"* — hides ~80% of what's actually built.

### Mechanics & systems
- **Dual-mode play**: drive + on-foot. `OnFeetMotor` (mouse-aim raycast + WASD via Rigidbody.AddForce) + `CameraFollowPOnFeet` for on-foot mode
- Custom car physics: `RearWheelDrive` (true rear-wheel-drive model), `EasySuspension` (suspension tuning)
- Object-pooled enemies: `EnemyPools` (zombie waves at scale)
- NavMesh for dynamic obstacles: `NavMeshComponents-master` (the Unity GitHub package, predates Unity 6 default support)
- Score system: `ScoreSystem`, `HitTextController`, `HitTextScript`, `PointsTextController`, `PointsEarnedTextScript` (full scoring HUD)
- Collision systems: `BumperCollisions`, `CollisionImpact`, `PlayerCollisions`, `ZombieCollisions`
- Enemy AI: `ZombiesFollowPlayer`, `FollowPlayer`, `FollowScript`, `FloatingEnemy`, `SoulEnemyMovement`
- Mobile UI: `VirtualJoystick` + dedicated `StartMenu` scene
- 2D char overlay: `Cubism` (Live2D)

### Code highlights
- `OnFeetMotor.cs`: clean mouse-aim raycast + Rigidbody.AddForce on-foot motor (separate from car motor)
- `EnemyPools.cs`: pooling discipline early
- `RearWheelDrive.cs`: real wheel-collider physics setup

### Asset workflow / middleware
- EasyRoads3D (procedural roads)
- LowpolyStreetPack, Low Poly Buildings Lite
- Cubism (Live2D Unity SDK)
- Sci Fi Gun Light
- Bumper physic material, Brake Light Mat

### Visual / vibe
- Low-poly post-apocalyptic streetscape
- 2 demo movies recorded
- BodyGuards scene + zombie test scene + StartMenu scene + VirtualJoystick scene = multi-feature build

### Soul hooks
- **Drive AND on-foot dual mode** — Carmageddon-meets-Dead Rising in a portfolio piece
- **Mobile-ready** (virtual joystick + StartMenu UI flow)
- **Live2D integration** for character overlays — uncommon stack

### Presentation hook candidates
1. *"Two modes, one apocalypse"* — drive-zombies + on-foot mouse-aim shooter (clip swap: drive → step out → fire)
2. *"Built to scale + mobile"* — object-pooled zombies, NavMeshComponents, virtual joystick UI

### Recommended card upgrade
Replace 2018-Built-in framing (which buries it) with: *"Post-apocalyptic kill-em-up with two modes — drive over zombies (custom rear-wheel-drive + suspension), step out and fight on foot (mouse-aim Rigidbody motor). Object-pooled enemy waves, NavMeshComponents for dynamic obstacles, mobile-ready UI."* Year is fine to keep (2018 origin, the on-disk version is upgraded to 2022 LTS).

### Detail-page potential
Optional — has enough depth (dual-mode novelty) to merit a `/post-apo.html` if Chris wants the third detail page slot.

---

## Skills Delta — vs current `unity.html` skills matrix

| Skill (observed in projects) | Currently in table? | Recommended action | Source folders |
|---|---|---|---|
| **DOTS / Burst Compile** | ❌ Missing | Add chip — **Familiar** tier | IslandP (`[BurstCompile]` on CharacterMechanics), Cowboy vs Hell (ProjectDawn.LocalAvoidance DOTS) |
| **Animation Rigging (runtime constraints / IK)** | ⚠️ Bundled into "Animation (Mecanim/Blend Trees)" | Split out as own chip — **Experienced** tier | Hack&Slash (`MultiAimConstraint`), YipMan (`Rig` + raycast targets) |
| **2D Pipeline (PSB / 2D Animator / sprite shadows)** | ❌ Missing | Add chip — **Experienced** tier | Cowboy vs Hell (Bull.psb, 2D animator controllers, SpriteShadow) |
| **VR / XR (Meta Quest 3, shared sessions)** | ❌ Missing | Add chip — **Experienced** tier | Fraport contract on portfolio but no skill chip backing it |
| **Photon Networking (PUN)** | ✅ "Multiplayer (Netcode/Photon/Mirror)" — **Familiar** | **Bump to Experienced** — Greater Game shipped full lobby/rooms/listing flow | Greater Game Official |
| **Object pooling** | ⚠️ Implicit under "Modular Systems" | Keep as-is, **mention explicitly** in HRS card copy | Heavy Rotten Souls (EnemyPools), IslandP |
| **Verlet rope / custom physics** | ⚠️ Implicit under "Physics & Interaction" | Keep as-is, **mention explicitly** in IslandP card copy | IslandP (VerletLine fishing) |
| **Cubism / Live2D** | ❌ Missing | Optional add — **Familiar** if Chris wants it visible | Heavy Rotten Souls |
| **Editor-tooling integrations (Odin / SerializedCollections / BetterHierarchy)** | ✅ "Custom Editor Tools" covers it | No change | IslandP, Hack&Slash |

**Net additions to skills matrix: 4 new chips (DOTS/Burst, Animation Rigging split, 2D Pipeline, VR/XR), 1 tier bump (Photon → Experienced).**

---

## Per-project — recommended portfolio actions (summary table)

| # | Folder | Current card | Action | Detail page? |
|---|---|---|---|---|
| 1 | Hack&Slash | (none) | **Add new card** | Yes (1 of 3) |
| 2 | IslandP_Collab | "Island Project" (Pyles, generic) | **Rewrite card** with named systems (verlet fishing / thirst / Burst) | Yes (2 of 3) |
| 3 | Cowboy vs Hell | "Darn! My Barn!" (framed as farm management) | **Reconcile framing first** then rewrite — twin-stick action vs farm bosses | No |
| 4 | Greater Game Official | (dropped by makeover) | **Restore card** — match Pyles Studio format, YT `ldTZRpw-oGg` | No |
| 5 | YipMan Project_ box | "Vintage Boxing" (generic IK) | **Rewrite card** with named system (modifier-key punch grid + cursor-targeted rig) | No |
| 6 | TD Mechanics Lab | "Fantasy Tower Defence" (generic A*) | **Rewrite card** with named systems (5 champions + NodeBehavior + UnitBuilder) | Yes (3 of 3) |
| 7 | Heavy Rotten Souls | "Post-Apocalyptic Driving" (generic vehicle physics) | **Rewrite card** — dual mode + pooling + mobile UI | Optional |

---

## Open questions / next probes — STATUS 2026-05-03
1. ✅ **Darn! My Barn! framing** — RESOLVED: action shooter, rewrite the card. Current "farm management" framing is wrong.
2. 🔒 **Hack&Slash card placement** — LOCKED to default: Solo Lab section.
3. 🔒 **Detail-page count** — LOCKED to default: 3 (Hack&Slash + IslandP + TD Lab); HRS optional 4th deferred to /_handoff.
4. 🔒 **Greater Game year** — LOCKED to default: `2019-2020`.
5. 🔒 **DOTS/Burst chip naming** — LOCKED to default: single chip "DOTS / Burst".

## Sources (workspace, grep-dominant)
- `F:\DevCrow\portfolio\D3vCrow.github.io\unity.html` (current portfolio)
- `F:\DevCrow\portfolio\D3vCrow.github.io\projects.html` (redirect stub) + git revision `6a29ba0:projects.html` (original portfolio with Greater Game entry)
- `F:\DevCrow\portfolio\D3vCrow.github.io\knowledge\INDEX.md` (dedup; no overlap)
- 7 project folders' `ProjectSettings/ProjectVersion.txt` (Unity versions)
- 7 project folders' `Assets/` directory listings (Glob, depth 1-3)
- Selected scripts read in full:
  - `Hack&Slash/Assets/AimControl.cs`
  - `Hack&Slash/Assets/AttackSelectorUI.cs`
  - `IslandP_Collab/Assets/Scripts/Brain_Manager.cs`
  - `IslandP_Collab/Assets/Scripts/CharacterMechanics.cs`
  - `Greater Game Official/Assets/Scripts/GamePlayManager.cs`
  - `YipMan Project_ box/Assets/PunchMeter.cs` (placeholder, empty)
  - `YipMan Project_ box/Assets/PunchOnClick.cs`
  - `TD Mechanics Lab/Assets/Scripts/FireWizard.cs`
  - `TD Mechanics Lab/Assets/Scripts/DamageBase.cs`
  - `Heavy Rotten Souls/Assets/GameManager.cs`
  - `Heavy Rotten Souls/Assets/OnFeetMotor.cs`
- Git history: `git log --all --oneline` for makeover history; `git show 6a29ba0:projects.html` for original Greater Game framing
