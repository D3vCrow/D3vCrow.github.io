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

// ── Rotating message ─────────────────────────────────────────────────────
(function () {
  const el = document.getElementById('home-rotating-msg');
  if (!el) return;

  const messages = ['Unity Developer', 'AI-Directed Engineer', 'Game Developer'];
  let idx = 0;

  function showMessage(msg) {
    el.innerHTML = '';
    msg.split('').forEach((ch, i) => {
      const span = document.createElement('span');
      span.textContent = ch === ' ' ? ' ' : ch;
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
