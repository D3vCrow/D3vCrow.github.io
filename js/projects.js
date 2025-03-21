document.addEventListener("DOMContentLoaded", () => {
    generateBulletsForAllGalleries();
    showGallery(0); // Show the first gallery by default
});

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
        document.querySelectorAll('.project-btn')[index].classList.add('selected');

        // Reset slides within this gallery
        const slides = currentGallery.querySelectorAll('.gallery-item');
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        if (slides.length > 0) {
            slides[0].classList.add('active');
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

    updateBulletHighlight(galleryIndex, slideIndex);
}

// Update which bullet is highlighted
function updateBulletHighlight(galleryIndex, activeIndex) {
    const bullets = document.querySelectorAll(`#bullets-${galleryIndex} .gallery-bullet`);
    bullets.forEach((bullet, index) => {
        bullet.classList.toggle("active", index === activeIndex);
    });
}

// Play a video inside an iframe when a slide is active
function playVideo(slide) {
    const iframe = slide.querySelector('iframe');
    if (iframe) {
        let src = iframe.src;
        if (!src.includes("autoplay=1")) {
            src += (src.includes("?") ? "&" : "?") + "autoplay=1";
            iframe.src = src;
        }
    }
}

// Stop a video inside an iframe when switching slides
function stopVideo(slide) {
    const iframe = slide.querySelector('iframe');
    if (iframe) {
        let src = iframe.src.split("?")[0]; // Remove autoplay
        iframe.src = src;
    }
}

// Handle project button selection
const projectButtons = document.querySelectorAll('.project-btn');
projectButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        showGallery(index);
    });
});
