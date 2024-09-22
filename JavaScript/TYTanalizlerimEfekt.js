window.addEventListener('scroll', applyeffect = function() {
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5');
    const windowHeight = window.innerHeight;
    const windowCenter = windowHeight / 2;

    let closestElement = null;
    let closestDistance = Infinity;

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const topFromCenter = rect.top - windowCenter;

        // Find the element closest to the center
        const distance = Math.abs(topFromCenter);
        if (distance < closestDistance) {
            closestElement = element;
            closestDistance = distance;
        }
    });

    // Set the closest element to full opacity
    if (closestElement) {
        closestElement.style.opacity = 1;
    }

    // Reduce opacity for other elements based on their distance from the center
    elements.forEach(element => {
        if (element !== closestElement && element.id !== "local-timer") {
            const rect = element.getBoundingClientRect();
            const topFromCenter = rect.top - windowCenter;
            const opacityFactor = Math.abs(topFromCenter) / (windowHeight / 2); // Normalize to [0, 1]
            element.style.opacity = 1 - opacityFactor; // Invert to get increasing opacity as you go up
        }
    });
});


applyeffect()


function getClientLocalTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

console.log("Client's local time:", getClientLocalTime());


function updateLocalTimer() {
    const localTimerElement = document.getElementById('local-timer');
    if (localTimerElement) {
        localTimerElement.textContent = getClientLocalTime();
    }
}

// Update the timer every second
setInterval(updateLocalTimer, 1000);

// Initial update
updateLocalTimer();


function applyLightMode() {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 0 || currentHour < 0) {
        const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5');
        elements.forEach(element => {
            element.classList.add('DarkMode');
            element.classList.remove('LightMode');
        });
    }
}

// Call the function initially
//applyLightMode();

// Update every minute to check for time changes
//setInterval(applyLightMode, 60000);
