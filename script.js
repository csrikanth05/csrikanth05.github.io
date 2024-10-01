const texts = document.querySelectorAll('.typed-text');
let delay = 0;

texts.forEach((text, index) => {
    setTimeout(() => {
        text.style.opacity = 1; // Fade in the text
        typeText(text.innerHTML, text, index);
    }, delay);
    delay += 3000; // Delay between each text
});

function typeText(fullText, element, index) {
    let i = 0;
    element.innerHTML = ''; // Clear the text
    const typingInterval = setInterval(() => {
        if (i < fullText.length) {
            element.innerHTML += fullText.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100); // Typing speed
}
