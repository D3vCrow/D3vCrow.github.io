// Show About Content Function
function showAboutContent(index) {
  const contents = document.querySelectorAll(".about-content .content");
  const navItems = document.querySelectorAll(".about-nav li");

  contents.forEach((content, idx) => {
    content.classList.toggle("active", idx === index);
  });

  navItems.forEach((item, idx) => {
    item.classList.toggle("active", idx === index);
  });
}

// Default show first content
document.addEventListener("DOMContentLoaded", () => showAboutContent(0));


function showAboutContent(index) {
  const contents = document.querySelectorAll(".about-content .content");
  const navItems = document.querySelectorAll(".about-nav li");

  contents.forEach((content, idx) => {
    content.classList.toggle("active", idx === index);
  });

  navItems.forEach((item, idx) => {
    item.classList.toggle("active", idx === index);
  });

  // Trigger Unity animation only for the Unity Core Engineer tab (index 4)
if (index === 4) {
  setTimeout(() => {
    const dots = document.getElementById("typing-dots");
    const response = document.getElementById("chatgpt-response");
    const responsibilities = document.getElementById("unity-responsibilities");

    if (dots && response && responsibilities) {
      dots.style.display = "flex";

      setTimeout(() => {
        dots.style.display = "none";
        response.style.display = "block";

        setTimeout(() => {
          responsibilities.style.display = "block";
          showCategory(0); // start checkboxes
        }, 1200); // slight pause before responsibilities appear
      }, 3000); // simulate 3s "typing..."
    }
  }, 2000); // delay after tab opens before "typing..."
}

}
// Make this globally accessible
const showCategory = (categoryIndex) => {
  const categories = Array.from(document.querySelectorAll(".responsibility-block"));
  if (categoryIndex >= categories.length) return;

  const category = categories[categoryIndex];
  category.style.display = "block";

  const items = category.querySelectorAll("li");
  const mainCheck = category.querySelector(".main-check-symbol");
  let i = 0;

  const reveal = () => {
    if (i < items.length) {
      const item = items[i];
      item.style.opacity = 1;
      setTimeout(() => {
        item.querySelector(".check").innerHTML = "✓";
        i++;
        setTimeout(reveal, 1100);
      }, 600);
    } else {
      setTimeout(() => {
        category.setAttribute("data-complete", "true");
        mainCheck.innerHTML = "✓";
        showCategory(categoryIndex + 1);
      }, 800);
    }
  };

  reveal();
};

document.addEventListener("DOMContentLoaded", () => {
  // Do not auto-start the animation
});



