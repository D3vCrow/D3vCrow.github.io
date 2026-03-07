// Moving GIF Background Effect
document.addEventListener("mousemove", (e) => {
  const title = document.querySelector(".title");
  if (title) {
    let traX = (e.pageX / window.innerWidth) * 50;
    let traY = (e.pageY / window.innerHeight) * 50;
    title.style.backgroundPosition = `${traX}% ${traY}%`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const messages = ["Game Developer", "Unity Engineer", "Game Designer"];
  const container = document.getElementById("rotating-message-container");

  if (container) {
    let currentIndex = 0;

    function showMessage() {
      container.textContent = messages[currentIndex];
      container.classList.remove("fade-out");
      container.classList.add("fade-in");

      setTimeout(() => {
        container.classList.remove("fade-in");
        container.classList.add("fade-out");

        setTimeout(() => {
          currentIndex = (currentIndex + 1) % messages.length;
          showMessage();
        }, 1000); // Wait for fade out before switching
      }, 2500); // Keep visible before fading out
    }

    showMessage(); // Start animation cycle
  }

  // Scroll Reveal Logic
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target); // Only reveal once
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));
});
