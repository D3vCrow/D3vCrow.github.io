document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    // State to track if mouse is hovering over a button
    let isHovering = false;

    // Mouse Move Effect for Background
    document.addEventListener('mousemove', (e) => {
        if (isHovering) return; // Skip if hovering over a button

        const winW = window.innerWidth;
        const winH = window.innerHeight;

        // Calculate percentage position (0% to 100%)
        const xPos = (e.clientX / winW) * 100;
        const yPos = (e.clientY / winH) * 100;

        // Map X directly to background position percentage 
        // 0% (left) shows left part of image (IT)
        // 100% (right) shows right part of image (Game Dev)

        // For Y, we want a subtle movement around the 10% mark (or center if prefered)
        // Let's stick closer to the original idea where Y moves slightly based on mouse
        // Original was: ((e.pageY / winH) * 100) - 40; effectively shifting it up.
        // Let's try mapping 0-100 input to maybe 0-20% output to keep it visible
        const moveY = (yPos * 0.2) + 5;

        title.style.backgroundPosition = `${xPos}% ${moveY}%`;
    });

    // Hover Effects for Left Button
    leftBtn.addEventListener('mouseenter', () => {
        isHovering = true;
        // Snap to LEFT side (0%)
        title.style.transition = 'background-position 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        title.style.backgroundPosition = '0% 10%';
    });

    leftBtn.addEventListener('mouseleave', () => {
        isHovering = false;
        // Reset transition for mouse movement to be responsive again
        setTimeout(() => {
            title.style.transition = 'background-position 0.1s ease-out';
        }, 800);
    });

    // Hover Effects for Right Button
    rightBtn.addEventListener('mouseenter', () => {
        isHovering = true;
        // Snap to RIGHT side (100%)
        title.style.transition = 'background-position 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        title.style.backgroundPosition = '100% 10%';
    });

    rightBtn.addEventListener('mouseleave', () => {
        isHovering = false;
        setTimeout(() => {
            title.style.transition = 'background-position 0.1s ease-out';
        }, 800);
    });
});
