document.addEventListener("DOMContentLoaded", function() {
  var codeBlocks = [
`using UnityEngine;

public class Enemy : MonoBehaviour {
    void Start() {
        // Initialize enemy
    }
    void Update() {
        // Enemy behavior here
    }
}`,
`using UnityEngine;

public class Player : MonoBehaviour {
    void Start() {
        // Initialize player
    }
    void Update() {
        // Player control here
    }
}`
  ];
  
  var container = document.getElementById("ide-effect");
  var currentBlockIndex = 0;
  
  // Type out the given code block letter-by-letter, but force vertical alignment.
  function typeBlock(block) {
    container.innerHTML = "";
    var i = 0;
    var interval = setInterval(function() {
      // Append the next character followed by a newline if it is a letter
      var char = block.charAt(i);
      // If the character is not a newline, add a newline after it so each character appears on its own line.
      if (char !== "\n") {
        container.innerHTML += char + "\n";
      } else {
        container.innerHTML += char;
      }
      i++;
      if (i >= block.length) {
        clearInterval(interval);
        // After finishing, wait 2 seconds then erase the block
        setTimeout(function() {
          eraseBlock();
        }, 2000);
      }
    }, 50); // Typing speed (50ms per character)
  }
  
  function eraseBlock() {
    var interval = setInterval(function() {
      var text = container.innerHTML;
      if (text.length > 0) {
        // Remove one character and one newline (if present)
        container.innerHTML = text.substring(0, text.length - 2);
      } else {
        clearInterval(interval);
        currentBlockIndex = (currentBlockIndex + 1) % codeBlocks.length;
        setTimeout(function() {
          typeBlock(codeBlocks[currentBlockIndex]);
        }, 500);
      }
    }, 30); // Erasing speed
  }
  
  typeBlock(codeBlocks[currentBlockIndex]);
});
