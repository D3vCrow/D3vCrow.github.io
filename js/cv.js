// Recruiter Brief — one-click clipboard copy of a structured candidate profile.
// Two variants: 'game' (portfolio/game dev roles) and 'software' (resume/SE roles).

const RECRUITER_BRIEFS = {

  game: `# Christoforos Papachristoforou — Unity Developer & Game Designer
Location: Athens, Greece
Email: chr.papachristoforou@gmail.com
Portfolio: https://d3vcrow.github.io
GitHub: https://github.com/D3vCrow
LinkedIn: https://www.linkedin.com/in/christoforos-papachristoforou-a7b303157/
Itch.io: https://d3vcrow.itch.io/

---

## Summary
Unity developer and game designer with 7+ years of hands-on Unity/C# experience, including 4 years as sole technical owner of a commercial product. Skilled across the full game development pipeline — systems architecture, editor tooling, rendering, performance profiling, and live deployment. For tasks outside Unity (web, Python, tooling), works through a tuned Claude Code environment with project standards, review agents, and persistent memory — honest about what's hand-written and what's AI-directed.

---

## Core Unity Skills
Production-Ready: Build Pipeline & Configuration, Custom Editor Tools, C# Architecture (OOP / SOLID / Async), Lighting, Project Settings
Very Experienced: Render Pipelines (Built-in / URP / HDRP), Rendering Optimization (LOD / Occlusion / Batching), UI Development, Scene Management, Animation (Mecanim / Blend Trees), Camera Systems (Cinemachine), Performance Profiling, Modular & Event-Driven Systems (ScriptableObjects / C# Events)
Experienced: AI Programming (NavMesh / Behavior Trees / State Machines), Input Systems (Legacy + New), VFX (Shader Graph / VFX Graph / Particles), Timeline & Cutscenes (Playable API), Audio (FMOD / Built-in), Physics & Interaction, Asset Management (Addressables / Asset Bundles)
Familiar: Multiplayer (Netcode for GameObjects / Photon / Mirror)

---

## Professional Experience

Unity Developer / Product Owner — Renderapp ltd
Feb 2021 – Dec 2024 | Remote
- Sole technical owner of the Caterham online car configurator for 4 years
- Full pipeline: 3D data (3DS Max) → Unity HDRP → Node.js → Azure cloud
- Solo-migrated a live production product from Built-in Render Pipeline to HDRP
- Custom editor tools for QA and workflow automation

Senior Unity Developer — e-Point (Contract)
Jun – Nov 2024 | Athens
- Shared VR experience for Fraport Airport on Meta Quest 3

---

## Notable Projects

Thrion Arenas — Turn-based strategy (solo dev, in development)
Tile-based tactical gameplay with custom AI, modular scene architecture, FMOD audio, and PlayFab backend.

Darn! My Barn! — Published indie game
https://d3vcrow.itch.io/darn-my-barn
Solo-developed in 17 days for Global Game Jam 2024. Gameplay, art direction, audio — all shipped alone.`,


  software: `# Christoforos Papachristoforou — Unity Developer | AI-Directed Engineer | IT Specialist
Location: Athens, Greece
Email: chr.papachristoforou@gmail.com
LinkedIn: https://www.linkedin.com/in/christoforos-papachristoforou-a7b303157/
GitHub: https://github.com/D3vCrow
Portfolio: https://d3vcrow.github.io

---

## Summary
Software engineer with experience spanning Unity/C# product development, 3D visualization pipelines, IT operations, and team leadership. Worked in high-standard corporate environments including international airports and the automotive industry. For web, Python, and tooling work, directs through a tuned Claude Code environment with project-scoped standards, persistent memory, and review agents — honest about what's hand-built and serious about the quality bar.

---

## Core Skills
Expert: Unity, C#
Strong: AI-Directed Engineering (Claude Code, spec-driven prompting, diff review & QA), Git / GitHub, 3D Rendering (HDRP / URP), Custom Tool Development
Working knowledge (via AI-directed): Python, JavaScript, HTML / CSS, Node.js
Other: Azure Deployments, PlasticSCM, 3DS Max (pipeline), Photoshop, Office 365

---

## Professional Experience

Unity Developer / Product Owner — Renderapp ltd
Feb 2021 – Dec 2024 | Remote
- Sole technical owner of the Caterham online car configurator for 4 years
- Managed end-to-end 3D pipeline: 3DS Max → Unity HDRP → Node.js → Azure cloud
- Solo-migrated a live production product from Built-in to HDRP
- Custom editor tools for QA and workflow automation
- Direct technical communication with clients, estimations, and live deployments

Senior Unity Developer — e-Point (Contract)
Jun – Nov 2024 | Athens
- Developed a VR project for Fraport Airport as contracted senior developer

Team Leader of Service Operations — SITA / NetSquare @ Athens Int'l Airport
May 2018 – Feb 2021 | Athens
- Led operations team and delivered staff training programs
- Maintained SLA targets for critical airport systems; coordinated incident escalations
- Built a reporting tool that reduced process time by over 90%

CUTE Specialist — Printec SA @ Athens Int'l Airport
Aug 2014 – Nov 2016 | Athens
- On-site and remote support for Common-Use Terminal Equipment
- Led airport terminal equipment upgrade and renewal program

---

## Education
B.Eng Electronic Computer Systems Engineering — ATEI of Piraeus (2008 – 2014)
Cisco ICND1 Certification (640-822) — New York College (2012)`

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
