window.addEventListener('scroll', () => {
  const scrollFraction = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
  document.body.style.setProperty('--scroll', Math.min(Math.max(scrollFraction, 0), 1));
}, false);
