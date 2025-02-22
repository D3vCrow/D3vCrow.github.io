window.addEventListener('scroll', function() {
  var scrollFraction = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
  
  // Base rotation and creative oscillations
  var baseRotation = scrollFraction * 360;
  var oscillationX = Math.sin(scrollFraction * Math.PI * 2) * 20;
  var oscillationY = Math.cos(scrollFraction * Math.PI * 2) * 20;
  var rotationX = baseRotation + oscillationX;
  var rotationY = baseRotation + oscillationY;
  
  // Floating effect
  var translateX = Math.sin(scrollFraction * Math.PI * 2) * 30;
  var translateY = Math.cos(scrollFraction * Math.PI * 2) * 30;
  
  // Scale oscillation
  var scale = 0.9 + (Math.sin(scrollFraction * Math.PI * 2) * 0.1 + 0.1);
  
  // Dynamic color: cycle hue based on scroll
  var hue = Math.floor(scrollFraction * 360);
  var faceColor = "hsla(" + hue + ", 50%, 50%, 0.8)";
  var borderColor = "hsla(" + hue + ", 50%, 40%, 0.8)";
  
  // Select and update each cube
  var cubes = document.querySelectorAll('.cube');
  for (var i = 0; i < cubes.length; i++) {
    cubes[i].style.transform = "rotateX(" + rotationX + "deg) rotateY(" + rotationY + "deg) translate(" + translateX + "px, " + translateY + "px) scale(" + scale + ")";
    
    var faces = cubes[i].querySelectorAll('.face');
    for (var j = 0; j < faces.length; j++) {
      faces[j].style.background = faceColor;
      faces[j].style.borderColor = borderColor;
    }
  }
});
