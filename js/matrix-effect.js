// matrix-effect.js

// Get the canvas and its context
var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");

// Resize the canvas to full screen
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Characters for the Matrix effect
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
letters = letters.split("");

// Set font size and calculate columns
var fontSize = 16;
var columns = canvas.width / fontSize;

// Create an array of drops - one per column
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1; // start at the top
}

// Draw function
function draw() {
  // Create a semi-transparent black background to produce the fade effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0"; // Matrix green
  ctx.font = fontSize + "px monospace";

  // Loop over drops
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset drop after it passes the bottom, or at random
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 33);
