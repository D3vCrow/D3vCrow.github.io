document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.action-btn.copy');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const linkToCopy = button.getAttribute('data-link');

            if (linkToCopy) {
                navigator.clipboard.writeText(linkToCopy).then(() => {
                    // Show visual feedback
                    button.classList.add('copied');
                    const originalText = button.querySelector('span').innerText;
                    button.querySelector('span').innerText = 'Copied!';

                    // Revert after 2 seconds
                    setTimeout(() => {
                        button.classList.remove('copied');
                        button.querySelector('span').innerText = originalText;
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            }
        });
    });
});
