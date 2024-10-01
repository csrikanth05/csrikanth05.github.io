document.addEventListener("DOMContentLoaded", function() {
    const bootText = document.getElementById('boot-text');
    const dots = document.getElementById('dots');
    const promptText = document.getElementById('prompt-text');
    const descText = document.getElementById('desc-text');
    const menuText = document.getElementById('menu-text');
    const cursor = document.getElementById('cursor');

    let delay = 500;

    // Simulate typing effect for boot text and dots
    setTimeout(() => {
        bootText.style.opacity = 1; // Show boot text
        let dotsInterval = setInterval(() => {
            dots.style.opacity = dots.style.opacity === '0' ? '1' : '0';
        }, 500);

        setTimeout(() => {
            clearInterval(dotsInterval); // Stop dots animation
            dots.style.opacity = '1'; // Keep dots visible after animation
            // Show prompt text after 2 seconds
            setTimeout(() => {
                promptText.style.opacity = 1;
                cursor.style.opacity = 1; // Show blinking cursor
                // Show description text after another second
                setTimeout(() => {
                    descText.style.opacity = 1;
                    // Show menu after description appears
                    setTimeout(() => {
                        menuText.style.opacity = 1;
                    }, delay);
                }, delay);
            }, delay);
        }, 3000); // Total 3 seconds for the boot dots animation
    }, delay);
});
