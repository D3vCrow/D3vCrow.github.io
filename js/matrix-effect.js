// matrix-effect.js

// Get the canvas and context
var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");

// Resize canvas to full screen
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
  drops[i] = 1; // start at the top of each column
}

// Draw function
function draw() {
  // Black semi-transparent background to create fade effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0"; // Green text
  ctx.font = fontSize + "px monospace";

  // Loop over drops
  for (var i = 0; i < drops.length; i++) {
    // Pick a random character
    var text = letters[Math.floor(Math.random() * letters.length)];
    // Draw the character at the column and drop position
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset drop to top if it has reached the bottom or a random chance
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Run the draw function repeatedly
setInterval(draw, 33);
