// Recruiter Brief — one-click clipboard copy of a structured candidate profile.
// Two variants: 'game' (portfolio/game dev roles) and 'software' (resume/SE roles).

const RECRUITER_BRIEFS = {

  game: `# Christoforos Papachristoforou | Unity Developer & Game Designer
Location: Athens, Greece
Email: chr.papachristoforou@gmail.com
Portfolio: https://d3vcrow.github.io
GitHub: https://github.com/D3vCrow
LinkedIn: https://www.linkedin.com/in/christoforos-papachristoforou-a7b303157/
Itch.io: https://d3vcrow.itch.io/

---

## Summary
Unity developer with 8+ years hands-on (~5 professional), spanning OEM car configurators, VR experiences, festival event games, and indie titles. Sole technical owner of a commercial Unity product for 4 years (Caterham configurator at Renderapp). Comfortable across the full pipeline: systems architecture, editor tooling, render pipelines (Built-in / URP / HDRP), performance profiling, live deployment. For non-Unity work (web, Python, tooling), I work AI-assisted with Claude Code. I write the spec, AI writes the code, I review every diff.

---

## Core Unity Skills
Strong: C# Architecture (OOP / SOLID / Async), Render Pipelines (Built-in / URP / HDRP), Custom Editor Tools, Build Pipeline & Configuration
Solid: Performance Profiling, UI Development, Animation (Mecanim / Blend Trees), Camera (Cinemachine), AI Systems (NavMesh / Behavior Trees), VFX (Shader Graph / Particles), FMOD, PlayFab
Working: Multiplayer (Photon / Netcode for GameObjects), Addressables, Timeline & Cutscenes

---

## Professional Experience

Independent Unity Developer / OEM Configurators (Self-employed)
2025 – Present | Athens, Greece
- Ongoing Caterham configurator via direct engagement with former Renderapp leadership after Renderapp's closure
- Hyundai Tucson and Subaru Solterra car configurators delivered solo via white-label studio engagement (Sept 2025)
- End-to-end ownership: project management, estimations, asset prep, Unity build, configurations, QC

Unity Developer / Technical Artist (Contract) at Obsidian Moon
Dec 2025 – Mar 2026 | 4-dev team, Steam release
- Built the cutscene system (Controller / View / ScriptableObject pattern)
- Localized actor names, press-to-continue input, repeated-action feedback
- Visual revamp and player feedback work across the broader build

Contract Game Developer, Pokefest 3 (Fantasy Festival 2025)
2025 | 20k+ visitors
- Super Pokémon Bros: reworked and expanded the Pokefest 2 Unity build for the 2025 event
- Compare the Pokémons: new interactive knowledge game, Unity, concept to delivery, solo

Unity Developer / Product Owner / 3D Generalist at Renderapp ltd
Feb 2021 – Dec 2024 | Remote
- Product Owner and sole technical owner of the Caterham car configurator for 4 years
- Team Lead for a 3-person workflow team
- Full pipeline: 3DS Max → Unity HDRP → Node.js → Azure cloud
- Multi-mode delivery from one codebase: web, dealership real-time render, VR (HTC Vive), PLUS messaging

Senior Unity Developer (Contract) at e-Point
Jun – Nov 2024 | Timisoara, Romania (remote)
- Upgraded shared-VR experience for Fraport Airport from HTC Vive to Meta Quest 3
- Deep package upgrade (MRTK + OpenXR + Meta XR SDK) across complex dependency chain
- Preserved master/slave TCP networking, D-BOX motion platform, custom localization through migration

---

## Notable Projects

Caterham Car Configurator
Live web configurator, sole ownership across 4+ years (Renderapp + post-closure continuation), full pipeline.
https://caterhamcars.com/en/configurator

Hyundai Tucson Configurator & Subaru Solterra Configurator
Delivered Sept 2025. Solo white-label, post-Renderapp: asset prep, Unity build, configurations, QC. NDA.

Fraport VR Experience
Shared VR on Meta Quest 3, two simultaneous users, senior contract. NDA.

Obsidian Moon (Steam)
Contract: technical artist + C# developer on a 4-dev team. Cutscene system, visual revamp, player feedback.
https://store.steampowered.com/app/3462170/Obsidian_Moon/

Super Pokémon Bros & Compare the Pokémons
Pokefest 3 at Fantasy Festival 2025 (20k+ visitors). Mario-meets-Pokémon fan game + interactive knowledge game, both Unity, solo delivery.

Thrion Arenas
Turn-based strategy, solo dev. 4 champions, modular architecture, FMOD, PlayFab. Active 2026.

Darn! My Barn!
Solo-shipped in 17 days for Global Game Jam 2024.
https://d3vcrow.itch.io/darn-my-barn

---

## Education
B.Eng Electronic Computer Systems Engineering, ATEI of Piraeus (2008 – 2014)`,


  software: `# Christoforos Papachristoforou | Software Engineer
Location: Athens, Greece
Email: chr.papachristoforou@gmail.com
LinkedIn: https://www.linkedin.com/in/christoforos-papachristoforou-a7b303157/
GitHub: https://github.com/D3vCrow
Portfolio: https://d3vcrow.github.io

---

## Summary
Generalist software engineer with ~12 years in tech across airport operations, automotive product, and independent freelance work. 8+ years hands-on with Unity, ~5 of those professional. Currently independent, with the Caterham car configurator as my active OEM work (ongoing engagement carried over after Renderapp closed in Dec 2024). Comfortable in high-standard corporate environments (international airports, automotive OEMs) and team-led settings. For web, Python, tooling, and automation, I work AI-assisted with Claude Code. I write the spec, AI writes the code, I review every diff.

---

## Core Skills
Strong: Unity, C#, Build Pipeline & Configuration, Custom Editor Tools, Git / GitHub
Solid: 3D Rendering (Built-in / URP / HDRP), Custom Tool Development, 3DS Max (pipeline), Azure Deployments, PlasticSCM
Comfortable: Python (scripting & automation), JavaScript / HTML / CSS, Node.js
Operations / leadership: SLA management, team lead (3-5 people), staff training, incident escalation, structured QA pipelines
AI-assisted workflow: Claude Code, spec-driven prompting, diff review & QA

---

## Professional Experience

Independent Unity Developer / OEM Configurators (Self-employed)
2025 – Present | Athens, Greece
- Ongoing Caterham configurator via direct engagement with former Renderapp leadership after Renderapp's closure
- Hyundai Tucson and Subaru Solterra car configurators delivered solo via white-label studio engagement (Sept 2025)
- End-to-end ownership: project management, estimations, asset prep, Unity build, QC

Unity Developer / Technical Artist (Contract) at Obsidian Moon
Dec 2025 – Mar 2026 | 4-dev team, Steam release
- Built the cutscene system (Controller / View / ScriptableObject pattern)
- Visual revamp and player feedback work across the broader build

Unity Developer / Product Owner / 3D Generalist at Renderapp ltd
Feb 2021 – Dec 2024 | Remote
- Sole technical owner of the Caterham online car configurator for 4 years
- Team Lead for a 3-person workflow team; trained new joiners on tools and processes
- Full pipeline: 3DS Max → Unity HDRP → Node.js → Azure cloud
- Custom editor tools for QA and workflow automation
- Direct client communication, estimations, live deployments

Senior Unity Developer (Contract) at e-Point
Jun – Nov 2024 | Timisoara, Romania (remote)
- Upgraded shared-VR experience for Fraport Airport from HTC Vive to Meta Quest 3
- Deep package upgrade (MRTK + OpenXR + Meta XR SDK) across complex dependency chain

IT Team Leader, Service Operations at SITA / NetSquare (Athens International Airport)
May 2018 – Feb 2021 | Athens
- Led a team of service operations engineers; trained and performance-managed
- Owned SLA targets for critical airport infrastructure; coordinated cross-team incident response
- Built a reporting tool that cut process time by over 90%

CUTE Specialist at Printec SA (Athens International Airport)
Aug 2014 – Nov 2016 | Athens
- On-site and remote support for Common-Use Terminal Equipment
- Led airport terminal equipment upgrade and renewal program

---

## Education
B.Eng Electronic Computer Systems Engineering, ATEI of Piraeus (2008 – 2014)`

};

function copyRecruiterBrief(variant, btnEl) {
  const text = RECRUITER_BRIEFS[variant];
  if (!text) return;

  navigator.clipboard.writeText(text).then(() => {
    const original = btnEl.innerHTML;
    btnEl.innerHTML = btnEl.dataset.copied || '&#x2713; Copied!';
    btnEl.classList.add('brief-copied');
    setTimeout(() => {
      btnEl.innerHTML = original;
      btnEl.classList.remove('brief-copied');
    }, 2200);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);

    const original = btnEl.innerHTML;
    btnEl.innerHTML = btnEl.dataset.copied || '&#x2713; Copied!';
    btnEl.classList.add('brief-copied');
    setTimeout(() => {
      btnEl.innerHTML = original;
      btnEl.classList.remove('brief-copied');
    }, 2200);
  });
}

// Scroll reveal
document.querySelectorAll('.reveal').forEach(el => {
  new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
  }, { threshold: 0.1 }).observe(el);
});

// Click ripple
document.addEventListener('click', (e) => {
  const el = document.createElement('div');
  el.className = 'cursor-click';
  el.style.left = e.clientX + 'px';
  el.style.top = e.clientY + 'px';
  document.body.appendChild(el);
  el.addEventListener('animationend', () => el.remove());
});
