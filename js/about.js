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
