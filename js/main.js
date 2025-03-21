// Moving GIF Background Effect
document.addEventListener("mousemove", (e) => {
  let traX = (e.pageX / window.innerWidth) * 50;
  let traY = (e.pageY / window.innerHeight) * 50;
  document.querySelector(".title").style.backgroundPosition = `${traX}% ${traY}%`;
});

document.addEventListener("DOMContentLoaded", function () {
  const messages = ["Game Developer", "Unity Engineer", "Game Designer"];
  const container = document.getElementById("rotating-message-container");

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
});

// Loading Screen
const assets = [
  "../assets/thrionbg.gif",
  "../assets/DMB gameplay-3.gif",
  "../assets/box.gif"
];

let assetsLoaded = 0;
const totalAssets = assets.length;
const loadingText = document.getElementById("loading-text");
const loadingBar = document.getElementById("loading-bar");
const loadingScreen = document.getElementById("loading-screen");

function updateLoadingScreen() {
  const percent = Math.floor((assetsLoaded / totalAssets) * 100);
  loadingText.textContent = `Loading: ${percent}%`;
  loadingBar.style.width = `${percent}%`;

  if (assetsLoaded === totalAssets) {
    setTimeout(() => {
      loadingScreen.style.opacity = 0;
      setTimeout(() => loadingScreen.style.display = "none", 500);
    }, 500);
  }
}

assets.forEach(src => {
  const img = new Image();
  img.onload = img.onerror = () => {
    assetsLoaded++;
    updateLoadingScreen();
  };
  img.src = src;
});

