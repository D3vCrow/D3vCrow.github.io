// matrix-effect.js

var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = [];
  for (var i = 0; i < columns; i++) {
    // Initialize each drop at a random row within the canvas height
    drops[i] = Math.floor(Math.random() * (canvas.height / fontSize));
  }
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Array of common Unity C# commands
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

// Calculate the number of columns (one drop per column)
var columns = Math.floor(canvas.width / fontSize);

// Create an array of drops – one per column, starting near the bottom.
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = Math.floor(Math.random() * (canvas.height / fontSize));
}

function draw() {
  // Draw a semi-transparent black rectangle to create a fade effect.
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Set fill style for the text in a cool blue tone.
  ctx.fillStyle = "#0af";
  ctx.font = fontSize + "px monospace";
  
  // Loop over each column
  for (var i = 0; i < drops.length; i++) {
    // Pick a random Unity C# command for this column.
    var command = commands[Math.floor(Math.random() * commands.length)];
    
    // Calculate y coordinate so that drops rise upward.
    // Instead of using drops[i] * fontSize from the top,
    // we subtract it from the canvas height.
    var y = canvas.height - drops[i] * fontSize;
    
    // Draw the command at the calculated position.
    ctx.fillText(command, i * fontSize, y);
    
    // Move the drop upward.
    drops[i]--;
    
    // If the drop goes off the top, reset it to a random row near the bottom.
    if (y < 0) {
      drops[i] = Math.floor(Math.random() * (canvas.height / fontSize));
    }
  }
}

setInterval(draw, 33);
