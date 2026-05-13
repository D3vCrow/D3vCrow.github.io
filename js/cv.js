// Recruiter Brief — one-click clipboard copy of a structured candidate profile.

const RECRUITER_BRIEFS = {

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
