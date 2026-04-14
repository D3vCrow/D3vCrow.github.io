// Scroll reveal
document.querySelectorAll('.reveal').forEach(el => {
  new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
  }, { threshold: 0.08 }).observe(el);
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

// Card videos: play when scrolled into view, pause when out
document.querySelectorAll('.card-media video').forEach(video => {
  new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, { threshold: 0.4 }).observe(video);
});
