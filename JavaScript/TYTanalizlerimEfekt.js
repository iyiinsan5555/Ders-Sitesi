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
        if (element!== closestElement) {
            const rect = element.getBoundingClientRect();
            const topFromCenter = rect.top - windowCenter;
            const opacityFactor = Math.abs(topFromCenter) / (windowHeight / 2); // Normalize to [0, 1]
            element.style.opacity = 1 - opacityFactor; // Invert to get increasing opacity as you go up
        }
    });
});


applyeffect()
