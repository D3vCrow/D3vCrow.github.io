document.addEventListener("DOMContentLoaded", () => {
    generateBulletsForAllGalleries();
    injectFullscreenButtons();
    showGallery(0); // Show the first gallery by default
    preloadAssets();
    startCategoryPreviews();
});

// Loading Screen
const assets = [
    "assets/DMB.mp4",
    "assets/Thrion_Tactics.mp4",
    "assets/old_projects.mp4",
    "assets/DMB_gameplay.mp4",
    "assets/post-apo_car.mp4",
    "assets/td_ds.mp4",
    "assets/box.mp4",
    "assets/thriambos.mp4",
    "assets/SMB_gameplay.mp4",
    "assets/compare.PNG",
    "assets/obsidian_moon.png"
];

let assetsLoaded = 0;
const totalAssets = assets.length;

function updateLoadingScreen() {
    const loadingText = document.getElementById("loading-text");
    const loadingBar = document.getElementById("loading-bar");
    const loadingScreen = document.getElementById("loading-screen");

    if (!loadingScreen || !loadingText || !loadingBar) return;

    const percent = Math.floor((assetsLoaded / totalAssets) * 100);
    loadingText.textContent = `${percent}% of the content loaded.`;
    loadingBar.style.width = `${percent}%`;

    if (assetsLoaded === totalAssets) {
        setTimeout(() => {
            loadingScreen.style.opacity = 0;
            setTimeout(() => loadingScreen.style.display = "none", 500);
        }, 500);
    }
}

function preloadAssets() {
    assets.forEach(src => {
        if (src.endsWith('.mp4')) {
            const video = document.createElement('video');
            video.oncanplaythrough = video.onerror = () => {
                assetsLoaded++;
                updateLoadingScreen();
            };
            video.src = src;
            video.load();
        } else {
            const img = new Image();
            img.onload = img.onerror = () => {
                assetsLoaded++;
                updateLoadingScreen();
            };
            img.src = src;
        }
    });
}
// Store active gallery and slide index
let currentProjectIndex = 0;
let currentSlideIndex = 0;

// Generate bullets for each gallery
function generateBulletsForAllGalleries() {
    document.querySelectorAll('.gallery').forEach((gallery, index) => {
        const bulletContainer = document.getElementById(`bullets-${index}`);
        if (!bulletContainer) return;

        bulletContainer.innerHTML = ""; // Clear existing bullets
        const slides = gallery.querySelectorAll('.gallery-item');

        slides.forEach((_, slideIndex) => {
            const bullet = document.createElement("li");
            bullet.setAttribute("data-slide-to", slideIndex);
            bullet.classList.add("gallery-bullet");
            if (slideIndex === 0) bullet.classList.add("active");

            bullet.onclick = () => jumpToSlide(index, slideIndex);
            bulletContainer.appendChild(bullet);
        });
    });
}

// Show a gallery based on the selected button
function showGallery(index) {
    // Hide all galleries
    document.querySelectorAll('.gallery').forEach(gallery => {
        gallery.classList.remove('active');
        gallery.style.display = "none";
    });

    // Stop all playing YouTube videos
    document.querySelectorAll('.gallery iframe').forEach(iframe => {
        iframe.src = iframe.src; // Reset src to stop video playback
    });

    // Deactivate all project buttons
    document.querySelectorAll('.project-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Show selected gallery
    const currentGallery = document.getElementById(`gallery-${index}`);
    if (currentGallery) {
        currentGallery.classList.add('active');
        currentGallery.style.display = "flex";
        currentProjectIndex = index;
        currentSlideIndex = 0;

        // Highlight the selected project button
        const selectedBtn = document.querySelectorAll('.project-btn')[index];
        selectedBtn.classList.add('selected');

        // Center the selected button loop on mobile
        if (window.innerWidth <= 1024) {
            const container = document.querySelector('.projects-buttons');
            const parent = selectedBtn.parentElement;
            if (container && parent) {
                const scrollLeft = parent.offsetLeft - (container.offsetWidth / 2) + (parent.offsetWidth / 2);
                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }

        // Reset slides within this gallery
        const slides = currentGallery.querySelectorAll('.gallery-item');
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        if (slides.length > 0) {
            slides[0].classList.add('active');
            playVideo(slides[0]); // Ensure it plays
        }

        updateBulletHighlight(index, 0);
    }
}

// Change slides within the current gallery
function changeSlide(direction) {
    const slides = document.querySelectorAll(`#gallery-${currentProjectIndex} .gallery-item`);
    if (!slides.length) return;

    // Hide all slides and stop their videos
    slides.forEach(slide => {
        slide.classList.remove('active');
        stopVideo(slide);
    });

    // Update slide index
    currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;

    // Show the selected slide and play video if applicable
    slides[currentSlideIndex].classList.add('active');
    playVideo(slides[currentSlideIndex]);

    updateBulletHighlight(currentProjectIndex, currentSlideIndex);
}

// Jump to a specific slide when clicking a bullet
function jumpToSlide(galleryIndex, slideIndex) {
    const slides = document.querySelectorAll(`#gallery-${galleryIndex} .gallery-item`);
    if (!slides.length) return;

    slides.forEach(slide => {
        slide.classList.remove("active");
        stopVideo(slide);
    });

    slides[slideIndex].classList.add("active");
    playVideo(slides[slideIndex]);

    updateBulletHighlight(galleryIndex, slideIndex);
}

// Update which bullet is highlighted
function updateBulletHighlight(galleryIndex, activeIndex) {
    const bullets = document.querySelectorAll(`#bullets-${galleryIndex} .gallery-bullet`);
    bullets.forEach((bullet, index) => {
        bullet.classList.toggle("active", index === activeIndex);
    });
}

// Play a video (iframe or video tag) when a slide is active
function playVideo(slide) {
    const iframe = slide.querySelector('iframe');
    if (iframe) {
        let src = iframe.src;
        if (!src.includes("autoplay=1")) {
            src += (src.includes("?") ? "&" : "?") + "autoplay=1";
            iframe.src = src;
        }
    }
    const video = slide.querySelector('video');
    if (video) {
        video.play().catch(error => console.log("Autoplay blocked or failed:", error));
    }
}

// Stop a video (iframe or video tag) when switching slides
function stopVideo(slide) {
    const iframe = slide.querySelector('iframe');
    if (iframe) {
        let src = iframe.src.split("?")[0]; // Remove autoplay
        iframe.src = src;
    }
    const video = slide.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0; // Reset to start
    }
}

// Handle project button selection
const projectButtons = document.querySelectorAll('.project-btn');
projectButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        showGallery(index);
    });
});
// Inject fullscreen buttons into all media wrappers
function injectFullscreenButtons() {
    document.querySelectorAll('.gallery-item .media-wrapper').forEach(wrapper => {
        if (!wrapper.querySelector('.fullscreen-btn')) {
            const btn = document.createElement('div');
            btn.className = 'fullscreen-btn';
            btn.innerHTML = '<i class="fas fa-expand"></i>';
            btn.onclick = (e) => {
                e.stopPropagation();
                toggleManualFullscreen(btn);
            };
            wrapper.appendChild(btn);
        }
    });
}

// Handle manual fullscreen toggle
function toggleManualFullscreen(btn) {
    // Stop propagation to prevent button click (gallery change)
    if (window.event) window.event.stopPropagation();
    
    const wrapper = btn.closest('.media-wrapper');
    if (!wrapper) return;

    if (!document.fullscreenElement) {
        if (wrapper.requestFullscreen) {
            wrapper.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Rotate category button content
function startCategoryPreviews() {
    const buttons = document.querySelectorAll('.project-btn');
    const galleries = document.querySelectorAll('.gallery');
    const galleryMedias = [];

    // Collect media from all galleries
    galleries.forEach((gallery) => {
        const medias = [];
        gallery.querySelectorAll('.gallery-item .media-wrapper').forEach(wrapper => {
            const video = wrapper.querySelector('video');
            const img = wrapper.querySelector('img');
            
            if (video) {
                const source = video.querySelector('source');
                if (source) medias.push({ type: 'video', src: source.src });
            } else if (img) {
                medias.push({ type: 'img', src: img.src });
            }
        });
        galleryMedias.push(medias);
    });

    buttons.forEach((btn, bIndex) => {
        let currentElement = btn.querySelector('img, video');
        if (currentElement) currentElement.classList.add('active');

        if (!galleryMedias[bIndex] || galleryMedias[bIndex].length <= 1) return;

        let currentIdx = 0;

        const rotate = () => {
            currentIdx = (currentIdx + 1) % galleryMedias[bIndex].length;
            const nextMedia = galleryMedias[bIndex][currentIdx];

            let nextElement;
            if (nextMedia.type === 'video') {
                nextElement = document.createElement('video');
                nextElement.autoplay = true;
                nextElement.loop = true;
                nextElement.muted = true;
                nextElement.playsInline = true;
                const s = document.createElement('source');
                s.src = nextMedia.src;
                s.type = 'video/mp4';
                nextElement.appendChild(s);
            } else {
                nextElement = document.createElement('img');
                nextElement.src = nextMedia.src;
            }

            nextElement.className = 'btn-preview-media next';
            btn.appendChild(nextElement);

            // Force reflow
            nextElement.offsetHeight;

            nextElement.classList.add('active');
            nextElement.classList.remove('next');

            if (currentElement) {
                currentElement.classList.remove('active');
                currentElement.classList.add('fade-out');
                
                const oldEl = currentElement;
                setTimeout(() => {
                    if (oldEl.parentNode === btn) btn.removeChild(oldEl);
                }, 1000);
            }
            currentElement = nextElement;
        };

        setInterval(rotate, 5000); // Rotate every 5 seconds
    });
}

// Update icon and handle orientation on fullscreen change
document.addEventListener('fullscreenchange', () => {
    const fullscreenElement = document.fullscreenElement;
    const btns = document.querySelectorAll('.fullscreen-btn i');
    
    btns.forEach(icon => {
        if (fullscreenElement) {
            icon.classList.remove('fa-expand');
            icon.classList.add('fa-compress');
        } else {
            icon.classList.remove('fa-compress');
            icon.classList.add('fa-expand');
        }
    });

    // Mobile: Attempt to lock orientation to landscape when entering fullscreen
    if (fullscreenElement && window.innerWidth <= 1024 && screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(err => {
            console.log("Orientation lock not supported or blocked:", err);
        });
    } else if (!fullscreenElement && screen.orientation && screen.orientation.unlock) {
        // Unlock orientation when exiting
        screen.orientation.unlock();
    }
});
