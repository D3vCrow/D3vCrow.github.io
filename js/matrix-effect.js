// matrix-effect.js

var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");

// Resize the canvas to fill the viewport
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
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

// Set font properties
var fontSize = 16;
ctx.font = fontSize + "px monospace";

// Calculate the number of columns (one drop per column)
var columns = Math.floor(canvas.width / fontSize);

// Create an array of drop positions (one per column)
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1; // start at row 1 for each column
}

// Draw function to create the falling effect
function draw() {
  // Draw a semi-transparent black rectangle over the canvas for the fade effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Set the fill color to a cool blue tone (you can adjust as needed)
  ctx.fillStyle = "#0af";
  
  // Loop through each column
  for (var i = 0; i < drops.length; i++) {
    // Pick a random command from our array
    var command = commands[Math.floor(Math.random() * commands.length)];
    
    // Draw the command at the current drop position
    ctx.fillText(command, i * fontSize, drops[i] * fontSize);
    
    // If the drop has reached the bottom and with a random chance, reset it to the top
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    
    // Increment the drop's vertical position
    drops[i]++;
  }
}

setInterval(draw, 33);
