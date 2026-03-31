

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

// Video-as-text-background via canvas (optimized: 15fps, low quality, cached dimensions)
document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".title");
  var video = document.querySelector(".title-bg-video");
  if (!title || !video) return;

  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d", { willReadFrequently: true });
  var titleVisible = true;
  var cachedW = 0, cachedH = 0;

  video.play().catch(function(){});

  new IntersectionObserver(function(entries) {
    titleVisible = entries[0].isIntersecting;
    if (!titleVisible) video.pause();
    else video.play().catch(function(){});
  }, { threshold: 0 }).observe(title);

  // Cache dimensions, only recalc on resize
  function cacheDims() {
    cachedW = title.offsetWidth;
    cachedH = title.offsetHeight;
  }
  cacheDims();
  window.addEventListener('resize', cacheDims);

  var lastFrame = 0;
  var interval = 1000 / 15; // 15fps is plenty for background texture

  function drawFrame(ts) {
    if (!document.hidden && titleVisible && ts - lastFrame >= interval) {
      if (video.readyState >= 2 && cachedW > 0) {
        var vw = video.videoWidth, vh = video.videoHeight;
        var scale = Math.max(cachedW / vw, cachedH / vh);
        var sw = Math.ceil(vw * scale);
        var sh = Math.ceil(vh * scale);
        canvas.width = sw;
        canvas.height = sh;
        ctx.drawImage(video, 0, 0, sw, sh);
        title.style.backgroundImage = 'url(' + canvas.toDataURL('image/jpeg', 0.5) + ')';
        title.style.backgroundSize = sw + 'px ' + sh + 'px';
      }
      lastFrame = ts;
    }
    requestAnimationFrame(drawFrame);
  }
  requestAnimationFrame(drawFrame);
});

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

// Enhanced cinematic glitch — fires randomly ~once per 10-15s
(function scheduleGlitch() {
  const delay = 10000 + Math.random() * 5000;
  setTimeout(() => {
    const title = document.querySelector('.title');
    const echoR = document.querySelector('.title-echo-r');
    const echoB = document.querySelector('.title-echo-b');
    if (echoR && echoB) {
      const gx = 12 + Math.random() * 14;
      const gy = 4 + Math.random() * 8;
      echoR.style.transition = 'none';
      echoB.style.transition = 'none';
      echoR.style.transform = `translate(${-gx}px, ${-gy}px)`;
      echoB.style.transform = `translate(${gx}px, ${gy}px)`;
      // Brief brightness flash on title
      if (title) {
        title.style.filter = 'brightness(1.6) saturate(1.8)';
        title.style.opacity = '0.85';
      }
      setTimeout(() => {
        echoR.style.transition = '';
        echoB.style.transition = '';
        echoR.style.transform = '';
        echoB.style.transform = '';
        if (title) {
          title.style.filter = '';
          title.style.opacity = '';
        }
        scheduleGlitch();
      }, 90);
    } else {
      scheduleGlitch();
    }
  }, delay);
})();

// Idle parallax drift — slow sine wave when mouse is still
{
  let idleTimer = null;
  let idleDrifting = false;
  let idleRaf = null;
  const title = document.querySelector('.title');

  function startIdleDrift() {
    if (!title || idleDrifting) return;
    idleDrifting = true;
    const startTime = performance.now();
    function drift(ts) {
      if (!idleDrifting) return;
      const elapsed = (ts - startTime) / 1000;
      const dx = Math.sin(elapsed * 0.3) * 3;
      const dy = Math.cos(elapsed * 0.2) * 2;
      title.style.backgroundPosition = `${50 + dx}% ${50 + dy}%`;
      idleRaf = requestAnimationFrame(drift);
    }
    idleRaf = requestAnimationFrame(drift);
  }

  function stopIdleDrift() {
    idleDrifting = false;
    if (idleRaf) cancelAnimationFrame(idleRaf);
  }

  function resetIdleTimer() {
    stopIdleDrift();
    clearTimeout(idleTimer);
    idleTimer = setTimeout(startIdleDrift, 3000);
  }

  document.addEventListener('mousemove', resetIdleTimer);
  // Start idle timer on load
  idleTimer = setTimeout(startIdleDrift, 3000);
}

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
