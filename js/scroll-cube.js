window.addEventListener('scroll', () => {
  // Calculate scroll fraction (0 to 1)
  const scrollFraction = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);

  // Compute creative transformation values:
  // Base rotation (in degrees) from scroll fraction
  const baseRotation = scrollFraction * 360;
  // Oscillations for extra twist (sine/cosine effects)
  const oscillationX = Math.sin(scrollFraction * Math.PI * 2) * 20; // ±20 deg offset
  const oscillationY = Math.cos(scrollFraction * Math.PI * 2) * 20;
  const rotationX = baseRotation + oscillationX;
  const rotationY = baseRotation + oscillationY;
  
  // Floating effect: horizontal and vertical movement (±30px)
  const translateX = Math.sin(scrollFraction * Math.PI * 2) * 30;
  const translateY = Math.cos(scrollFraction * Math.PI * 2) * 30;
  
  // Scale oscillation: vary scale between 0.9 and 1.1
  const scale = 0.9 + (Math.sin(scrollFraction * Math.PI * 2) * 0.1 + 0.1);
  
  // Color effect: cycle hue based on scroll (0-360°)
  const hue = Math.floor(scrollFraction * 360);
  const faceColor = `hsla(${hue}, 50%, 50%, 0.8)`;
  const borderColor = `hsla(${hue}, 50%, 40%, 0.8)`;

  // Select all cubes and apply transformations and color updates
  const cubes = document.querySelectorAll('.cube');
  cubes.forEach(cube => {
    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) translate(${translateX}px, ${translateY}px) scale(${scale})`;
    cube.querySelectorAll('.face').forEach(face => {
      face.style.background = faceColor;
      face.style.borderColor = borderColor;
    });
  });
});
