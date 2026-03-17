

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

// Video-as-text-background via canvas
document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".title");
  const video = document.querySelector(".title-bg-video");
  if (!title || !video) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  video.play().catch(() => {});

  let titleVisible = true;
  new IntersectionObserver(entries => {
    titleVisible = entries[0].isIntersecting;
  }, { threshold: 0 }).observe(title);

  let lastFrameTime = 0;
  const frameInterval = 1000 / 30; // 30 fps cap

  function drawFrame(timestamp) {
    if (!document.hidden && titleVisible && timestamp - lastFrameTime >= frameInterval) {
      if (video.readyState >= 2) {
        const w = title.offsetWidth;
        const h = title.offsetHeight;
        if (w > 0 && h > 0) {
          const vw = video.videoWidth;
          const vh = video.videoHeight;
          const scale = Math.max(w / vw, h / vh);
          const sw = Math.ceil(vw * scale);
          const sh = Math.ceil(vh * scale);
          canvas.width = sw;
          canvas.height = sh;
          ctx.drawImage(video, 0, 0, sw, sh);
          title.style.backgroundImage = 'url(' + canvas.toDataURL('image/jpeg', 0.85) + ')';
          title.style.backgroundSize = sw + 'px ' + sh + 'px';
        }
      }
      lastFrameTime = timestamp;
    }
    requestAnimationFrame(drawFrame);
  }

  requestAnimationFrame(drawFrame);
});

// Parallax + chromatic aberration on mousemove
document.addEventListener("mousemove", (e) => {
  const title = document.querySelector(".title");
  const echoW = document.querySelector(".title-echo:not(.title-echo-r):not(.title-echo-b)");
  const echoR = document.querySelector(".title-echo-r");
  const echoB = document.querySelector(".title-echo-b");
  const nx = e.pageX / window.innerWidth - 0.5;
  const ny = e.pageY / window.innerHeight - 0.5;

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

      // Enter: left → right
      requestAnimationFrame(() => requestAnimationFrame(() => {
        chars.forEach(c => c.classList.add('visible'));
      }));

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
