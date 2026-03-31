

// Click ripple effect
if (document.body.classList.contains('portfolio-page')) {
  document.addEventListener('click', (e) => {
    const el = document.createElement('div');
    el.className = 'cursor-click';
    el.style.left = e.clientX + 'px';
    el.style.top = e.clientY + 'px';
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  });
}

// Video text fill is now pure CSS (mix-blend-mode) — no canvas needed

// Parallax + chromatic aberration on mousemove (throttled to rAF)
{
  let mousemoveRafPending = false;
  let lastMouseX = 0, lastMouseY = 0;
  document.addEventListener("mousemove", (e) => {
    lastMouseX = e.pageX;
    lastMouseY = e.pageY;
    if (mousemoveRafPending) return;
    mousemoveRafPending = true;
    requestAnimationFrame(() => {
      mousemoveRafPending = false;
      const title = document.querySelector(".title");
      const echoW = document.querySelector(".title-echo:not(.title-echo-r):not(.title-echo-b)");
      const echoR = document.querySelector(".title-echo-r");
      const echoB = document.querySelector(".title-echo-b");
      const nx = lastMouseX / window.innerWidth - 0.5;
      const ny = lastMouseY / window.innerHeight - 0.5;

      if (title) {
        title.style.backgroundPosition = `${(nx + 0.5) * 50}% ${(ny + 0.5) * 50}%`;
      }
      // White echo drifts opposite to mouse
      if (echoW) {
        echoW.style.transform = `translate(${nx * -10}px, ${ny * -6}px)`;
      }
      // Red echo drifts up-left, blue drifts down-right — chromatic split
      if (echoR) {
        echoR.style.transform = `translate(${nx * -16}px, ${ny * -10}px)`;
      }
      if (echoB) {
        echoB.style.transform = `translate(${nx * 16}px, ${ny * 10}px)`;
      }
    });
  });
}

// Occasional glitch — fires randomly ~once per 10-15s
(function scheduleGlitch() {
  const delay = 10000 + Math.random() * 5000;
  setTimeout(() => {
    const echoR = document.querySelector('.title-echo-r');
    const echoB = document.querySelector('.title-echo-b');
    if (echoR && echoB) {
      const gx = 8 + Math.random() * 10;
      const gy = 3 + Math.random() * 5;
      echoR.style.transition = 'none';
      echoB.style.transition = 'none';
      echoR.style.transform = `translate(${-gx}px, ${-gy}px)`;
      echoB.style.transform = `translate(${gx}px, ${gy}px)`;
      setTimeout(() => {
        echoR.style.transition = '';
        echoB.style.transition = '';
        echoR.style.transform = '';
        echoB.style.transform = '';
        scheduleGlitch();
      }, 80);
    } else {
      scheduleGlitch();
    }
  }, delay);
})();

document.addEventListener("DOMContentLoaded", function () {
  const messages = ["Game Developer", "Unity Engineer", "Game Designer"];
  const container = document.getElementById("rotating-message-container");

  if (container) {
    let currentIndex = 0;

    function buildChars(text) {
      container.innerHTML = '';
      return text.split('').map((ch, i) => {
        const span = document.createElement('span');
        span.className = 'msg-char';
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        span.style.transitionDelay = `${i * 60}ms`;
        container.appendChild(span);
        return span;
      });
    }

    function cycle() {
      const text = messages[currentIndex];
      const chars = buildChars(text);

      // Enter: left → right (single rAF + offset to ensure reflow)
      requestAnimationFrame(() => {
        chars.forEach(c => c.classList.add('visible'));
      });

      // Exit: right → left
      setTimeout(() => {
        chars.forEach((c, i) => {
          c.style.transitionDelay = `${(chars.length - 1 - i) * 55}ms`;
          c.classList.add('exit');
          c.classList.remove('visible');
        });
        const exitDuration = chars.length * 40 + 450;
        setTimeout(() => {
          currentIndex = (currentIndex + 1) % messages.length;
          cycle();
        }, exitDuration);
      }, 3800);
    }

    cycle();
  }

  // Scroll Reveal Logic
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target); // Only reveal once
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));
});
