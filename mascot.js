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

// ======= RADIANT BORDER (WHITE-BLACK-WHITE) & WING UPDATE =======
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
  
  // Update wings' text color to match a contrasting hue (example: greenish)
  const wings = document.querySelectorAll('#mascot .wing');
  wings.forEach(wing => {
    wing.style.color = "#0f0";
  });
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

// ======= WING CODE EFFECT =======
// Generate a random binary string of a given length
function generateRandomBinary(length) {
  let str = "";
  const characters = "01";
  for (let i = 0; i < length; i++) {
    str += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return str;
}

// Generate multiple lines of binary code for a wing.
// 'lines' specifies the number of lines; 'length' specifies characters per line.
function generateWingCode(lines, length) {
  let code = "";
  for (let i = 0; i < lines; i++) {
    code += generateRandomBinary(length) + "\n";
  }
  return code;
}

// Update both wings with multiple lines of binary code
setInterval(() => {
  const leftWing = document.querySelector('#mascot .wing.left');
  const rightWing = document.querySelector('#mascot .wing.right');
  if (leftWing && rightWing) {
    // For example, 4 lines of 20 characters each
    leftWing.textContent = generateWingCode(4, 20);
    rightWing.textContent = generateWingCode(4, 20);
  }
}, 200);
setInterval(() => {
  // Update both wings with new binary code
  const leftWing = document.querySelector('#mascot .wing.left');
  const rightWing = document.querySelector('#mascot .wing.right');
  if (leftWing && rightWing) {
    leftWing.textContent = generateRandomBinary(30);
    rightWing.textContent = generateRandomBinary(30);
  }
}, 200);

// ======= MOUSEMOVE LISTENER =======
document.addEventListener('mousemove', (e) => {
  const rect = mascot.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Eyes follow the mouse
  const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
  const offset = Math.min(10, rect.width / 10);
  const dx = offset * Math.cos(angle);
  const dy = offset * Math.sin(angle);
  pupils.forEach(pupil => {
    pupil.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
  });
  
  // Update radiant border and wings color
  updateMascotBorderColor(e.clientX);
  
  // If the mouse is too close, relocate the mascot
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
