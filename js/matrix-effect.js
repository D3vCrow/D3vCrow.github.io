// js/matrix-effect.js

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
var columns = Math.floor(canvas.width / fontSize);

// Create an array of drops—one per column
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Define the excluded region (central 40% of the screen)
function getExcludeRegion() {
  return {
    start: canvas.width * 0.3,
    end: canvas.width * 0.7
  };
}

// Draw function
function draw() {
  // Create a semi-transparent black background for the fade effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set font properties
  ctx.font = fontSize + "px monospace";
  ctx.fillStyle = "#0F0"; // Matrix green

  // Get the excluded central region
  var region = getExcludeRegion();

  // Loop over drops (columns)
  for (var i = 0; i < drops.length; i++) {
    var x = i * fontSize;
    // If the x-coordinate falls within the central exclusion region, skip drawing
    if (x >= region.start && x <= region.end) {
      continue;
    }

    // Pick a random character
    var text = letters[Math.floor(Math.random() * letters.length)];
    // Draw the character at the computed column and drop position
    ctx.fillText(text, x, drops[i] * fontSize);

    // Reset drop if it reaches the bottom (or with a slight random chance)
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Run the draw function repeatedly (~30fps)
setInterval(draw, 33);
