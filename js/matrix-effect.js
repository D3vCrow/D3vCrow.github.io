// matrix-effect.js

var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Characters for the Matrix effect (default letters)
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
letters = letters.split("");

// Recruiting messages to occasionally appear
var messages = [
  "Awesome game developer!",
  "Hire me!",
  "Truly innovative!",
  "Code wizard!",
  "Next-gen dev!",
  "Game changer!",
  "Pixel perfect!"
];

var fontSize = 16;
var columns = canvas.width / fontSize;

// Create an array of drops – one per column
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1; // start at the top
}

function draw() {
  // Create a semi-transparent black background to produce a fade effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Loop over drops for each column
  for (var i = 0; i < drops.length; i++) {
    var chance = Math.random();
    var text = "";
    // With 2% probability, choose a recruiting message instead of a letter
    if (chance < 0.02) {
      text = messages[Math.floor(Math.random() * messages.length)];
      // Use a slightly larger, different font for messages
      ctx.font = (fontSize + 8) + "px sans-serif";
    } else {
      text = letters[Math.floor(Math.random() * letters.length)];
      ctx.font = fontSize + "px monospace";
    }
    
    // Use a blue tone for the falling text
    ctx.fillStyle = "#0af";
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
    // Reset drop to top if it goes beyond the bottom, with randomness
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 33);
