document.addEventListener("DOMContentLoaded", () => {
    generateBulletsForAllGalleries();
    injectMediaControls();
    showGallery(0); // Show the first gallery by default
    preloadAssets();
    startCategoryPreviews();
    initExpandableDescriptions();
});

function initExpandableDescriptions() {
    document.querySelectorAll('.gallery-description.technical').forEach(panel => {
        const header = panel.querySelector('.tech-header');
        if (!header) return;
        header.addEventListener('click', (e) => {
            e.stopPropagation();
            panel.classList.toggle('expanded');
        });
    });
}

// Loading Screen
const assets = [
    "assets/DMB_gameplay.mp4",
    "assets/island_project.mp4",
    "assets/Thrion_Tactics.mp4",
    "assets/post-apo_car.mp4",
    "assets/td_ds.mp4",
    "assets/box.mp4",
    "assets/thriambos.mp4",
    "assets/SMB_gameplay.mp4",
    "assets/compare.PNG",
    "assets/obsidian_moon.png"
];

let isGlobalMuted = true; // Default to muted

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
        video.muted = isGlobalMuted; // Respect global state
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
// Inject fullscreen and mute buttons into media wrappers
function injectMediaControls() {
    document.querySelectorAll('.gallery-item .media-wrapper').forEach(wrapper => {
        // Fullscreen Button
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

        // Mute Button (Only for videos)
        if (wrapper.querySelector('video') && !wrapper.querySelector('.mute-btn')) {
            const btn = document.createElement('div');
            btn.className = 'mute-btn';
            const iconClass = isGlobalMuted ? 'fa-volume-mute' : 'fa-volume-up';
            btn.innerHTML = `<i class="fas ${iconClass}"></i>`;
            btn.onclick = (e) => {
                e.stopPropagation();
                toggleMute(btn);
            };
            wrapper.appendChild(btn);
        }
    });
}

// Handle global mute toggle
function toggleMute(btn) {
    isGlobalMuted = !isGlobalMuted;

    // Update all mute button icons
    document.querySelectorAll('.mute-btn i').forEach(icon => {
        icon.className = isGlobalMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    });

    // Apply to current playing video immediately
    document.querySelectorAll('.gallery-item.active video').forEach(v => {
        v.muted = isGlobalMuted;
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

    function createMediaElement(media) {
        if (media.type === 'video') {
            const el = document.createElement('video');
            el.autoplay = true;
            el.loop = true;
            el.muted = true;
            el.playsInline = true;
            el.disablePictureInPicture = true;
            el.setAttribute('controlsList', 'nopictureinpicture');
            const s = document.createElement('source');
            s.src = media.src;
            s.type = 'video/mp4';
            el.appendChild(s);
            return el;
        } else {
            const el = document.createElement('img');
            el.src = media.src;
            return el;
        }
    }

    buttons.forEach((btn, bIndex) => {
        const medias = galleryMedias[bIndex];
        if (!medias || medias.length === 0) return;

        btn.innerHTML = '';

        // Pre-create two slots and swap between them — no DOM insertion/removal
        const slotA = createMediaElement(medias[0]);
        const slotB = createMediaElement(medias.length > 1 ? medias[1] : medias[0]);

        slotA.className = 'active';
        slotB.className = 'btn-preview-media';

        btn.appendChild(slotA);
        btn.appendChild(slotB);

        if (medias.length <= 1) return;

        let currentIdx = 0;
        let activeSlot = slotA;
        let hiddenSlot = slotB;

        const rotate = () => {
            if (document.hidden) return; // Skip when tab is not visible
            const nextIdx = (currentIdx + 1) % medias.length;
            const nextMedia = medias[nextIdx];

            // Update the hidden slot's source before fading it in
            if (nextMedia.type === 'video') {
                const source = hiddenSlot.tagName === 'VIDEO' ? hiddenSlot.querySelector('source') : null;
                if (source) {
                    source.src = nextMedia.src;
                    hiddenSlot.load();
                } else {
                    // Slot type mismatch — replace it
                    const newEl = createMediaElement(nextMedia);
                    newEl.className = 'btn-preview-media';
                    btn.replaceChild(newEl, hiddenSlot);
                    hiddenSlot = newEl;
                }
            } else {
                if (hiddenSlot.tagName === 'IMG') {
                    hiddenSlot.src = nextMedia.src;
                } else {
                    const newEl = createMediaElement(nextMedia);
                    newEl.className = 'btn-preview-media';
                    btn.replaceChild(newEl, hiddenSlot);
                    hiddenSlot = newEl;
                }
            }

            // Swap active/hidden
            activeSlot.classList.remove('active');
            activeSlot.classList.add('fade-out');
            hiddenSlot.classList.add('active');
            hiddenSlot.classList.remove('btn-preview-media', 'fade-out');

            const prevActive = activeSlot;
            activeSlot = hiddenSlot;
            hiddenSlot = prevActive;

            // Reset the now-hidden slot after fade
            setTimeout(() => {
                hiddenSlot.classList.remove('active', 'fade-out');
                hiddenSlot.classList.add('btn-preview-media');
            }, 1000);

            currentIdx = nextIdx;
        };

        setInterval(rotate, 5000);
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
