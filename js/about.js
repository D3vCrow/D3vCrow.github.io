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
  // 1. Initial Desktop Tab Setup
  showAboutContent(0);

  // 2. Mobile Hamburger Menu Logic
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("active");
    });
  }

  // 3. Mobile Scroll Trigger for Unity Animation
  // We only want this observer on mobile, or generally if we are scrolling
  const unitySection = document.getElementById("unity-core-section");

  if (unitySection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger animation logic
          // We reuse the existing timeout logic but ensure it runs once
          if (!unitySection.dataset.animated) {
            unitySection.dataset.animated = "true";

            // Copy-paste of original animation trigger logic adapted for observer
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
                  }, 1200);
                }, 3000);
              }
            }, 500); // reduced delay since we are already looking at it
          }
        }
      });
    }, { threshold: 0.3 }); // Trigger when 30% visible

    observer.observe(unitySection);
  }
});



