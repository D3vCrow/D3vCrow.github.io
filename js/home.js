'use strict';

// ── Click ripple ──────────────────────────────────────────────────────────
document.addEventListener('click', (e) => {
  const el = document.createElement('div');
  el.className = 'cursor-click';
  el.style.left = e.clientX + 'px';
  el.style.top = e.clientY + 'px';
  document.body.appendChild(el);
  el.addEventListener('animationend', () => el.remove());
});

// ── Video-as-text-background ──────────────────────────────────────────────
(function () {
  const title = document.querySelector('.home-title');
  const video = document.querySelector('.title-bg-video');
  if (!title || !video) return;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  let visible = true;
  let cachedW = 0, cachedH = 0;
  let lastFrame = 0;
  const FPS = 15;

  function cacheDims() {
    cachedW = title.offsetWidth;
    cachedH = title.offsetHeight;
  }
  cacheDims();
  window.addEventListener('resize', cacheDims);

  video.play().catch(() => {});

  new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    if (!visible) video.pause(); else video.play().catch(() => {});
  }, { threshold: 0 }).observe(title);

  function drawFrame(ts) {
    if (!document.hidden && visible && ts - lastFrame >= 1000 / FPS) {
      if (video.readyState >= 2 && cachedW > 0) {
        const vw = video.videoWidth, vh = video.videoHeight;
        const scale = Math.max(cachedW / vw, cachedH / vh);
        canvas.width = Math.ceil(vw * scale);
        canvas.height = Math.ceil(vh * scale);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        title.style.backgroundImage = `url(${canvas.toDataURL('image/jpeg', 0.5)})`;
        title.style.backgroundSize = `${canvas.width}px ${canvas.height}px`;
      }
      lastFrame = ts;
    }
    requestAnimationFrame(drawFrame);
  }
  requestAnimationFrame(drawFrame);
}());

// ── Parallax + chromatic aberration ─────────────────────────────────────
(function () {
  const wrap = document.querySelector('.home-title-wrap');
  const echoR = document.querySelector('.title-echo-r');
  const echoB = document.querySelector('.title-echo-b');
  if (!wrap) return;

  let raf = null;
  let tx = 0, ty = 0;
  let idleTimer = null;
  let idle = false;
  let driftT = 0;

  function applyTransform(x, y) {
    if (wrap) wrap.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
    if (echoR) echoR.style.transform = `translate(${-4 + x * 0.005}px, ${-2 + y * 0.003}px)`;
    if (echoB) echoB.style.transform = `translate(${4 - x * 0.005}px, ${2 - y * 0.003}px)`;
  }

  window.addEventListener('mousemove', (e) => {
    idle = false;
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => { idle = true; }, 3000);

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    tx = e.clientX - cx;
    ty = e.clientY - cy;

    if (!raf) raf = requestAnimationFrame(update);
  });

  function update() {
    raf = null;
    if (idle) {
      driftT += 0.01;
      const dx = Math.sin(driftT) * 15;
      const dy = Math.cos(driftT * 0.7) * 8;
      applyTransform(dx, dy);
      raf = requestAnimationFrame(update);
    } else {
      applyTransform(tx, ty);
    }
  }
}());

// ── Random glitch ─────────────────────────────────────────────────────────
(function () {
  const echoR = document.querySelector('.title-echo-r');
  const echoB = document.querySelector('.title-echo-b');
  if (!echoR || !echoB) return;

  function glitch() {
    echoR.style.transform = `translate(${-8 + Math.random() * 4}px, ${-4 + Math.random() * 2}px)`;
    echoB.style.transform = `translate(${8 - Math.random() * 4}px, ${4 - Math.random() * 2}px)`;
    document.body.style.filter = 'brightness(1.15)';
    setTimeout(() => {
      echoR.style.transform = 'translate(-4px, -2px)';
      echoB.style.transform = 'translate(4px, 2px)';
      document.body.style.filter = '';
    }, 90);
    setTimeout(glitch, 10000 + Math.random() * 8000);
  }
  setTimeout(glitch, 4000 + Math.random() * 6000);
}());

// ── Rotating message ─────────────────────────────────────────────────────
(function () {
  const el = document.getElementById('home-rotating-msg');
  if (!el) return;

  const messages = ['Game Developer', 'Unity Engineer', 'AI-Directed Engineer', 'Game Designer'];
  let idx = 0;

  function showMessage(msg) {
    el.innerHTML = '';
    msg.split('').forEach((ch, i) => {
      const span = document.createElement('span');
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      span.style.cssText = `display:inline-block;opacity:0;transform:translateY(8px);transition:opacity 0.3s ease ${i * 0.04}s,transform 0.3s ease ${i * 0.04}s`;
      el.appendChild(span);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }));
    });
  }

  showMessage(messages[0]);
  setInterval(() => {
    idx = (idx + 1) % messages.length;
    el.querySelectorAll('span').forEach((s, i) => {
      s.style.transition = `opacity 0.2s ease ${i * 0.02}s, transform 0.2s ease ${i * 0.02}s`;
      s.style.opacity = '0';
      s.style.transform = 'translateY(-8px)';
    });
    setTimeout(() => showMessage(messages[idx]), 350);
  }, 3200);
}());

// ── Scroll reveal ─────────────────────────────────────────────────────────
document.querySelectorAll('.reveal').forEach(el => {
  new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); } });
  }, { threshold: 0.12 }).observe(el);
});
