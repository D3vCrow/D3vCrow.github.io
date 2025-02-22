document.addEventListener('scroll', () => {
  // Calculate the scroll fraction (from 0 to 1)
  const scrollFraction = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
  // Select the cube element
  const cube = document.querySelector('.cube');
  if (cube) {
    // Rotate the cube on both the X and Y axes based on scroll position.
    // Adjust the multiplier (e.g., 360) to control rotation amount.
    cube.style.transform = `rotateX(${scrollFraction * 360}deg) rotateY(${scrollFraction * 360}deg)`;
  }
});
