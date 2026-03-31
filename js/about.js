// Show About Content Function
function showAboutContent(index) {
  const contents = document.querySelectorAll(".about-content .content");
  const navItems = document.querySelectorAll(".side-tabs li");

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

// Default show first content
document.addEventListener("DOMContentLoaded", () => showAboutContent(0));

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

// Gamer Timeline: flat row, in-place card scaling, character crossfade underlay
function initGamerTimeline() {
  const slider      = document.getElementById('gamer-slider');
  if (!slider) return;

  const yearDisplay = document.getElementById('gamer-year-display');
  const charA       = document.getElementById('gamer-char-a');
  const charB       = document.getElementById('gamer-char-b');
  const cardsRow    = document.getElementById('gamer-cards-row');
  const allCards    = cardsRow ? cardsRow.querySelectorAll('.game-card') : [];

  let cachedSliderWidth = slider.offsetWidth || 600;

  const heading   = document.getElementById('gamer-heading');

  const ERAS = [
    {
      imgSrc: 'assets/08yome-removebg-preview.png',
      message: 'Where it all began... pixelated dreams on a tiny screen'
    },
    {
      imgSrc: 'assets/15yome-removebg-preview.png',
      message: 'LAN parties, mods, and the golden age of PC gaming'
    },
    {
      imgSrc: 'assets/25yome-removebg-preview.png',
      message: 'From player to creator... games that shaped how I build'
    },
    {
      imgSrc: 'assets/35yome-removebg-preview.png',
      message: 'Still playing, still inspired, still chasing that feeling'
    },
  ];

  const MIN = 1990, MAX = 2025, RANGE = MAX - MIN;

  function getEraIndex(year) {
    if (year < 2000) return 0;  // 1990s
    if (year < 2010) return 1;  // 2000s
    if (year < 2020) return 2;  // 2010s
    return 3;                   // 2020s
  }

  function updateFill(value) {
    const pct = ((value - MIN) / RANGE) * 100;
    slider.style.background =
      'linear-gradient(to right, #ff9800 ' + pct + '%, rgba(255,152,0,0.2) ' + pct + '%)';
  }

  function updateYearDisplay(value) {
    var pct = ((value - MIN) / RANGE) * 100;
    var sliderWidth = cachedSliderWidth;
    var thumbHalf = 10;
    var leftPx = (pct / 100) * sliderWidth;
    var corrected = leftPx + (thumbHalf - (pct / 100) * 2 * thumbHalf);
    // Clamp so the label never goes off the left/right edge
    var labelHalf = 24;
    corrected = Math.max(labelHalf, Math.min(corrected, sliderWidth - labelHalf));
    yearDisplay.style.left = corrected + 'px';
    yearDisplay.textContent = value;
  }

  let currentEra = 0;
  let isTransitioning = false;
  let pendingEra = -1;
  let selectedCard = null;

  function applyEra(newEra) {
    const activeImg   = charA.classList.contains('active') ? charA : charB;
    const inactiveImg = activeImg === charA ? charB : charA;

    inactiveImg.src = ERAS[newEra].imgSrc;
    activeImg.classList.remove('active');
    inactiveImg.classList.add('active');

    // Highlight cards of the active decade
    allCards.forEach(function(card) {
      var cardEra = getEraIndex(parseInt(card.dataset.year, 10));
      card.classList.toggle('era-active', cardEra === newEra);
    });

    // Update heading message with fade transition
    if (heading) {
      var currentSpan = heading.querySelector('.gamer-heading-text.active');
      var newSpan = document.createElement('span');
      newSpan.className = 'gamer-heading-text';
      newSpan.textContent = ERAS[newEra].message;
      heading.appendChild(newSpan);

      // Trigger reflow, then add active class for fade-in
      newSpan.offsetWidth;
      newSpan.classList.add('active');

      if (currentSpan) {
        currentSpan.classList.remove('active');
        currentSpan.addEventListener('transitionend', function() {
          if (currentSpan.parentNode) currentSpan.remove();
        }, { once: true });
        // Fallback removal
        setTimeout(function() {
          if (currentSpan.parentNode) currentSpan.remove();
        }, 700);
      }
    }

    currentEra = newEra;
  }

  function switchEra(newEra) {
    if (newEra === currentEra) return;
    if (isTransitioning) { pendingEra = newEra; return; }
    isTransitioning = true; pendingEra = -1;
    applyEra(newEra);
    setTimeout(function() {
      isTransitioning = false;
      if (pendingEra !== -1 && pendingEra !== currentEra) switchEra(pendingEra);
    }, 620);
  }

  // Sync slider position to a given year
  function syncSliderToYear(year) {
    slider.value = year;
    updateFill(year);
    updateYearDisplay(year);
  }

  // Card click: select in place + switch character era + sync slider
  allCards.forEach(function(card) {
    card.addEventListener('click', function(e) {
      e.stopPropagation();
      const cardYear = parseInt(card.dataset.year, 10);
      const era = getEraIndex(cardYear);

      // Toggle: if clicking same card, deselect
      if (selectedCard === card) {
        card.classList.remove('selected');
        selectedCard = null;
        return;
      }

      // Deselect previous
      if (selectedCard) {
        selectedCard.classList.remove('selected');
      }

      // Select new card (scales in place via CSS)
      card.classList.add('selected');
      selectedCard = card;

      // Switch character to match the game's era
      switchEra(era);

      // Sync the slider to this card's year
      syncSliderToYear(cardYear);

      // Scroll the card into view smoothly
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  });

  // Click outside cards to deselect
  document.addEventListener('click', function(e) {
    if (selectedCard && !e.target.closest('.game-card')) {
      selectedCard.classList.remove('selected');
      selectedCard = null;
    }
  });

  // Keyboard: Escape to deselect
  document.addEventListener('keydown', function(e) {
    if (!selectedCard) return;
    if (e.key === 'Escape') {
      selectedCard.classList.remove('selected');
      selectedCard = null;
    }
  });

  // 3D tilt effect on hover (desktop only), throttled with rAF
  if (window.matchMedia('(hover: hover)').matches) {
    allCards.forEach(function(card) {
      var tiltRaf = false;
      card.addEventListener('mousemove', function(e) {
        if (card.classList.contains('selected') || tiltRaf) return;
        tiltRaf = true;
        var clientX = e.clientX, clientY = e.clientY;
        requestAnimationFrame(function() {
          tiltRaf = false;
          var rect = card.getBoundingClientRect();
          var x = clientX - rect.left;
          var y = clientY - rect.top;
          var rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 12;
          var rotateX = ((rect.height / 2 - y) / (rect.height / 2)) * 12;
          card.style.transform = 'scale(1.12) translateY(-10px) perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        });
      });

      card.addEventListener('mouseleave', function() {
        if (card.classList.contains('selected')) return;
        card.style.transform = '';
      });
    });
  }

  // Find closest card to a given year, select it, and scroll to it
  function selectClosestCard(year) {
    let closest = null;
    let closestDist = Infinity;
    allCards.forEach(function(card) {
      var cardYear = parseInt(card.dataset.year, 10);
      var dist = Math.abs(cardYear - year);
      if (dist < closestDist) {
        closestDist = dist;
        closest = card;
      }
    });

    if (!closest || closest === selectedCard) return;

    // Deselect previous
    if (selectedCard) {
      selectedCard.classList.remove('selected');
    }

    // Select the closest card
    closest.classList.add('selected');
    selectedCard = closest;

    // Scroll into view
    if (cardsRow) {
      var rowRect = cardsRow.getBoundingClientRect();
      var cardRect = closest.getBoundingClientRect();
      var scrollTarget = cardsRow.scrollLeft + (cardRect.left - rowRect.left) - (rowRect.width / 2) + (cardRect.width / 2);
      cardsRow.scrollTo({ left: scrollTarget, behavior: 'smooth' });
    }
  }

  // Scrubber init — start at 1990
  updateFill(1990);
  updateYearDisplay(1990);

  // Mark era 0 cards active on load
  allCards.forEach(function(card) {
    card.classList.toggle('era-active', getEraIndex(parseInt(card.dataset.year, 10)) === 0);
  });

  var sliderRafPending = false;
  slider.addEventListener('input', function() {
    if (sliderRafPending) return;
    sliderRafPending = true;
    requestAnimationFrame(function() {
      sliderRafPending = false;
      var val = parseInt(slider.value, 10);
      updateFill(val);
      updateYearDisplay(val);
      switchEra(getEraIndex(val));
      selectClosestCard(val);
    });
  });

  var resizeRafPending = false;
  window.addEventListener('resize', function() {
    if (resizeRafPending) return;
    resizeRafPending = true;
    requestAnimationFrame(function() {
      resizeRafPending = false;
      cachedSliderWidth = slider.offsetWidth || 600;
      updateYearDisplay(parseInt(slider.value, 10));
    });
  });

  // Entrance — stagger cards when section comes into view
  var wrap = document.querySelector('.gamer-timeline-wrap');
  if (wrap && 'IntersectionObserver' in window) {
    var entranceObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          wrap.classList.add('revealed');
          // Stagger card reveals via CSS custom property
          allCards.forEach(function(card, i) {
            card.style.setProperty('--i', i);
          });
          // Let CSS handle the delay via transition-delay: calc(var(--i) * 35ms)
          requestAnimationFrame(function() {
            allCards.forEach(function(card) {
              card.style.opacity = '';
              card.style.transform = '';
              card.classList.add('card-entered');
            });
          });
          entranceObserver.unobserve(wrap);
        }
      });
    }, { threshold: 0.1 });
    entranceObserver.observe(wrap);
  } else if (wrap) {
    wrap.classList.add('revealed');
    allCards.forEach(function(card) { card.classList.add('card-entered'); });
  }

  // Pause animations when gamer section is off-screen (saves GPU/battery)
  if (wrap && 'IntersectionObserver' in window) {
    var visibilityObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        wrap.classList.toggle('animations-paused', !entry.isIntersecting);
      });
    }, { threshold: 0 });
    visibilityObserver.observe(wrap);
  }
}

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

  // 4. Gamer Timeline
  initGamerTimeline();
});




