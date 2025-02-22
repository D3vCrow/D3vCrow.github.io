// Optionally create a Trusted Types policy for scripts (if needed)
if (window.trustedTypes) {
  window.trustedTypes.createPolicy("default", {
    createScript: function(input) { return input; }
  });
}

window.addEventListener("scroll", function() {
  // Calculate the scroll fraction (a value between 0 and 1)
  var scrollFraction = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
  
  // Select all cube elements
  var cubes = document.querySelectorAll(".cube");
  
  // Compute creative transformation values:
  var baseRotation = scrollFraction * 360;
  var oscillationX = Math.sin(scrollFraction * Math.PI * 2) * 20; // ±20 deg
  var oscillationY = Math.cos(scrollFraction * Math.PI * 2) * 20;
  var rotationX = baseRotation + oscillationX;
  var rotationY = baseRotation + oscillationY;
  
  var translateX = Math.sin(scrollFraction * Math.PI * 2) * 30; // ±30px
  var translateY = Math.cos(scrollFraction * Math.PI * 2) * 30;
  
  var scale = 0.9 + (Math.sin(scrollFraction * Math.PI * 2) * 0.1 + 0.1);
  
  // Cycle hue based on scroll (0-360°)
  var hue = Math.floor(scrollFraction * 360);
  var faceColor = "hsla(" + hue + ", 50%, 50%, 0.8)";
  var borderColor = "hsla(" + hue + ", 50%, 40%, 0.8)";
  
  // Apply the transformations to each cube
  for (var i = 0; i < cubes.length; i++) {
    cubes[i].style.transform = "rotateX(" + rotationX + "deg) rotateY(" + rotationY + "deg) translate(" + translateX + "px, " + translateY + "px) scale(" + scale + ")";
    
    // Update all faces of this cube with the new color
    var faces = cubes[i].querySelectorAll(".face");
    for (var j = 0; j < faces.length; j++) {
      faces[j].style.background = faceColor;
      faces[j].style.borderColor = borderColor;
    }
  }
});
