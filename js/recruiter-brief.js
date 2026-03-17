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
Unity developer and game designer with 7+ years of hands-on Unity/C# experience, including 4 years in a professional product environment. Skilled across the full game development pipeline — systems architecture, editor tooling, rendering, performance profiling, and live deployment.

---

## Core Unity Skills
Production-Ready: Build Pipeline & Configuration, Custom Editor Tools, C# Architecture (OOP / SOLID / Async), Lighting, Project Settings
Very Experienced: Render Pipelines (Built-in / URP / HDRP), Rendering Optimization (LOD / Occlusion / Batching), UI Development, Scene Management, Animation (Mecanim / Blend Trees), Camera Systems (Cinemachine), Performance Profiling, Modular & Event-Driven Systems (ScriptableObjects / C# Events)
Experienced: AI Programming (NavMesh / Behavior Trees / State Machines), Input Systems (Legacy + New), VFX (Shader Graph / VFX Graph / Particles), Timeline & Cutscenes (Playable API), Audio (FMOD / Built-in), Physics & Interaction, Asset Management (Addressables / Asset Bundles)
Familiar: Multiplayer (Netcode for GameObjects / Photon / Mirror)

---

## Professional Experience

Unity Developer / Product Owner / Generalist — Renderapp lt
Feb 2021 – Dec 2024 | Remote
- Owned the full pipeline from 3D car data to live web configurator (Unity, 3DS Max, Node.js)
- Solo migrated a live production project from Built-in Render Pipeline to HDRP
- Product Owner for Caterham's online car configurator (caterhamcars.com/en/configurator)
- Built and maintained custom editor tools for QA and workflow automation
- Managed GitHub version control, Azure/cloud deployments, and client technical communications

Senior Unity Developer — e-Point (Contract)
Jun 2024 – Nov 2024
- Developed a VR experience for Fraport Airport

---

## Notable Projects

Thrion — Turn-based strategy (solo dev, in development)
Tile-based tactical gameplay with custom AI systems, procedural mechanics, and bespoke editor tooling.

Darn! My Barn! — Published indie game
https://d3vcrow.itch.io/darn-my-barn
Solo-developed and published: gameplay, art direction, audio integration.

Island Project — Open-world prototype (solo dev)
Large-scale Unity environment exploring terrain, procedural generation, and performance at scale.`,


  software: `# Christoforos Papachristoforou — Software Engineer | Unity Developer | IT Specialist
Location: Athens, Greece
Email: chr.papachristoforou@gmail.com
LinkedIn: https://www.linkedin.com/in/christoforos-papachristoforou-a7b303157/
GitHub: https://github.com/D3vCrow
Portfolio: https://d3vcrow.github.io

---

## Summary
Software engineer with experience spanning Unity/C# product development, 3D visualization pipelines, IT operations, and team leadership. Worked in high-standard corporate environments including international airports and the automotive industry. Currently deepening Python skills with a focus on automation, data science, and AI tooling.

---

## Core Skills
Expert: Unity, C#
Experienced: Python (automation / AI tools), Git / PlasticSCM, JavaScript, 3D Rendering (HDRP / URP), Custom Tool Development
Familiar: Web Development (HTML / CSS / JS), Node.js, Photoshop, Office 365

---

## Professional Experience

Unity Developer / Product Owner / Generalist — Renderapp lt
Feb 2021 – Dec 2024 | Remote
- Managed end-to-end 3D car configurator pipeline (Unity, 3DS Max, Node.js) for automotive clients
- Product Owner for Caterham's live online configurator (caterhamcars.com/en/configurator)
- Developed custom workflow tools that improved QA efficiency and process reliability
- Led technical communications, project estimations, and live deployments (Azure / cloud / private servers)
- Managed GitHub repositories: branch management, migrations, backup/recovery

Senior Unity Developer — e-Point (Contract)
Jun 2024 – Nov 2024
- Developed a VR project for Fraport Airport as a contracted senior developer

Team Leader of Service Operations & Site Administrators — SITA / NetSquare @ Athens Int'l Airport
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
B.Eng Electronic Computer Systems Engineer — ATEI of Piraeus (2008 – 2014)
Cisco ICND1 Certification (640-822) — New York College (2012)`

};

function copyRecruiterBrief(variant, btnEl) {
  const text = RECRUITER_BRIEFS[variant];
  if (!text) return;

  navigator.clipboard.writeText(text).then(() => {
    const original = btnEl.innerHTML;
    btnEl.innerHTML = btnEl.dataset.copied || '<i class="fas fa-check"></i> Copied!';
    btnEl.classList.add('brief-copied');
    setTimeout(() => {
      btnEl.innerHTML = original;
      btnEl.classList.remove('brief-copied');
    }, 2200);
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);

    const original = btnEl.innerHTML;
    btnEl.innerHTML = btnEl.dataset.copied || '<i class="fas fa-check"></i> Copied!';
    btnEl.classList.add('brief-copied');
    setTimeout(() => {
      btnEl.innerHTML = original;
      btnEl.classList.remove('brief-copied');
    }, 2200);
  });
}
