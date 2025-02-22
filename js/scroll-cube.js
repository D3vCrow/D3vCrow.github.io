window.addEventListener('scroll', () => {
  const scrollFraction = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
  // Apply rotation to all cube elements
  const cubes = document.querySelectorAll('.cube');
  cubes.forEach(cube => {
    cube.style.transform = `rotateX(${scrollFraction * 360}deg) rotateY(${scrollFraction * 360}deg)`;
  });
});
