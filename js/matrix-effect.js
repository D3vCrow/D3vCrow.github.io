// matrix-effect.js

var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Characters for the Matrix effect
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
letters = letters.split("");
var fontSize = 16;
var columns = canvas.width / fontSize;

// Create an array of drops – one per column
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1; // start at the top
}

// Array of overlay messages (recruiting jokes)
var messages = [
  "Awesome game developer!",
  "Hire me!",
  "Truly innovative!",
  "Code wizard!",
  "Next-gen dev!",
  "Game changer!",
  "Pixel perfect!"
];

// Array to store overlay message objects
var overlayMessages = [];

// Draw function for the Matrix effect
function draw() {
  // Draw a semi-transparent black rectangle to fade out previous frames
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Set font for falling characters and use a blue tone
  ctx.fillStyle = "#0af"; // neon blue tone
  ctx.font = fontSize + "px monospace";
  
  // Loop through drops and draw random characters in each column
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
    // Reset drop to top if it goes beyond the bottom, with a little randomness
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
  
  // Occasionally add a recruiting overlay message
  if (Math.random() < 0.005) { // about a 0.5% chance per frame
    var msg = messages[Math.floor(Math.random() * messages.length)];
    var x = Math.random() * canvas.width * 0.8; // leave some margin from the edges
    var y = Math.random() * canvas.height * 0.8;
    overlayMessages.push({ text: msg, x: x, y: y, opacity: 1.0, fontSize: 24 });
  }
  
  // Draw overlay messages and update their opacity for fade-out
  for (var j = overlayMessages.length - 1; j >= 0; j--) {
    var overlay = overlayMessages[j];
    ctx.fillStyle = "rgba(0, 170, 255, " + overlay.opacity + ")"; // blue with variable opacity
    ctx.font = overlay.fontSize + "px sans-serif";
    ctx.fillText(overlay.text, overlay.x, overlay.y);
    
    // Fade out the message
    overlay.opacity -= 0.005;
    if (overlay.opacity <= 0) {
      overlayMessages.splice(j, 1);
    }
  }
}

setInterval(draw, 33);
