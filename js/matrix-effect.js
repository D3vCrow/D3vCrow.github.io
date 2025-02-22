// matrix-commands-effect.js

var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");

// Resize the canvas to fill the viewport and reinitialize columns.
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initColumnsData();
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// List of common Unity C# commands
var commands = [
  "Debug.Log",
  "GetComponent<>",
  "Instantiate()",
  "Destroy()",
  "transform.position",
  "transform.rotation",
  "transform.localScale",
  "Time.deltaTime",
  "Input.GetAxis()",
  "Input.GetKeyDown()",
  "Application.Quit()",
  "Rigidbody.AddForce()",
  "Vector3.zero",
  "Vector3.one",
  "Quaternion.identity",
  "GameObject.Find()",
  "Random.Range()",
  "SceneManager.LoadScene()",
  "Camera.main",
  "AudioSource.Play()"
];

var fontSize = 16;
ctx.font = fontSize + "px monospace";
var speed = 1; // pixels per frame

// Calculate the number of columns (one column per fontSize width)
var columns = Math.floor(canvas.width / fontSize);

// Array to hold state for each column; each element is { command: string, offset: number }
var columnsData = [];

// Initialize state for each column: choose a random command and set a starting offset.
function initColumnsData() {
  columns = Math.floor(canvas.width / fontSize);
  columnsData = [];
  for (var i = 0; i < columns; i++) {
    var cmd = commands[Math.floor(Math.random() * commands.length)];
    // Set the starting offset randomly between canvas.height and canvas.height + (cmd.length * fontSize)
    var offset = canvas.height + Math.floor(Math.random() * (cmd.length * fontSize));
    columnsData.push({ command: cmd, offset: offset });
  }
}

initColumnsData();

// The draw function: clears the canvas and draws each column's command vertically.
function draw() {
  // Draw a semi-transparent black background to create a fade effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Set text style for the commands using a cool blue tone
  ctx.fillStyle = "#0af";
  ctx.font = fontSize + "px monospace";
  
  // Loop over each column's data
  for (var i = 0; i < columnsData.length; i++) {
    var data = columnsData[i];
    var cmd = data.command;
    // Draw each letter of the command vertically
    for (var j = 0; j < cmd.length; j++) {
      var letter = cmd[j];
      // Calculate the y position so that the block appears from bottom to top.
      // data.offset is measured in "row units" multiplied by fontSize.
      var y = data.offset - j * fontSize;
      // Only draw the letter if it's within the visible canvas
      if (y > 0 && y < canvas.height) {
        ctx.fillText(letter, i * fontSize, y);
      }
    }
    // Move the command upward by subtracting from its offset
    data.offset -= speed;
    // If the entire command has scrolled above the top, reset this column
    if (data.offset - cmd.length * fontSize < 0) {
      data.command = commands[Math.floor(Math.random() * commands.length)];
      data.offset = canvas.height + Math.floor(Math.random() * (data.command.length * fontSize));
    }
  }
  
  requestAnimationFrame(draw);
}

draw();
