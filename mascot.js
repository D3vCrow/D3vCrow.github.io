// mascot.js

// ======= SELECTORS & CONSTANTS =======
const mascot = document.getElementById('mascot');
const pupils = document.querySelectorAll('#mascot .pupil');
const dialogue = document.getElementById('dialogue');
const threshold = 100; // Distance before mascot relocates

// ======= HELPER FUNCTIONS =======
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ======= UPDATE RADIANT BORDER (WHITE-BLACK-WHITE) =======
function updateMascotBorderColor(mouseX) {
  const ratio = mouseX / window.innerWidth;
  let normalized;
  if (ratio <= 0.5) {
    normalized = 1 - (ratio / 0.5); // white at left to black at center
  } else {
    normalized = (ratio - 0.5) / 0.5; // black at center to white at right
  }
  const gray = Math.round(normalized * 255);
  const newColor = `rgb(${gray}, ${gray}, ${gray})`;
  mascot.style.borderColor = newColor;
  mascot.style.boxShadow = `0 0 15px ${newColor}`;
  dialogue.style.borderColor = newColor;
  dialogue.style.boxShadow = `0 0 10px ${newColor}`;
}

// ======= MASCOT RELOCATION =======
function relocateMascot(mouseX, mouseY) {
  const rect = mascot.getBoundingClientRect();
  const mascotWidth = rect.width;
  const mascotHeight = rect.height;
  const padding = 20;
  
  let newLeft = randInt(padding, window.innerWidth - mascotWidth - padding);
  let newTop = randInt(padding, window.innerHeight - mascotHeight - padding);
  
  const centerX = newLeft + mascotWidth / 2;
  const centerY = newTop + mascotHeight / 2;
  const dx = mouseX - centerX;
  const dy = mouseY - centerY;
  const distance = Math.hypot(dx, dy);
  
  if (distance < threshold) {
    newLeft = Math.min(window.innerWidth - mascotWidth - padding, newLeft + threshold);
    newTop = Math.min(window.innerHeight - mascotHeight - padding, newTop + threshold);
  }
  mascot.style.left = newLeft + 'px';
  mascot.style.top = newTop + 'px';
}

// ======= MOUSEMOVE LISTENER =======
document.addEventListener('mousemove', (e) => {
  const rect = mascot.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Eyes follow the mouse.
  const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
  const offset = Math.min(10, rect.width / 10);
  const dx = offset * Math.cos(angle);
  const dy = offset * Math.sin(angle);
  pupils.forEach(pupil => {
    pupil.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
  });
  
  // Update radiant border color
  updateMascotBorderColor(e.clientX);
  
  // If mouse is too close, relocate
  const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
  if (distance < threshold) {
    relocateMascot(e.clientX, e.clientY);
  }
});

// ======= SECTION HOVER LISTENERS =======
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  section.addEventListener('mouseenter', () => {
    const text = section.getAttribute('data-dialogue') || "";
    dialogue.textContent = text;
    dialogue.style.opacity = 1;
  });
  section.addEventListener('mouseleave', () => {
    dialogue.style.opacity = 0;
  });
});
