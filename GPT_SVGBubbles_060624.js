document.addEventListener("DOMContentLoaded", () => {
    const svgContainer = document.getElementById('svg-container');
    const numberOfSvgs = 10;
    const svgs = [];
    const svgSize = 50;

    // Array of SVG URLs from Wikipedia
    const svgUrls = [
        'https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/4/4a/Commons-logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_the_United_Nations.svg'
        // Add more SVG URLs as needed
    ];

    // Function to create an SVG element
    function createSvgElement(url) {
        const img = document.createElement('img');
        img.src = url;
        img.style.width = `${svgSize}px`;
        img.style.height = `${svgSize}px`;
        img.style.position = 'absolute';

        svgContainer.appendChild(img);

        return img;
    }

    // Function to set initial positions and velocities
    function initializeSvg(img) {
        const x = Math.random() * (window.innerWidth - svgSize);
        const y = Math.random() * (window.innerHeight - svgSize);
        const dx = (Math.random() - 0.5) * 4;
        const dy = (Math.random() - 0.5) * 4;

        return { img, x, y, dx, dy };
    }

    // Function to animate the SVGs
    function animate() {
        svgs.forEach(obj => {
            obj.x += obj.dx;
            obj.y += obj.dy;

            if (obj.x <= 0 || obj.x >= window.innerWidth - svgSize) {
                obj.dx *= -1;
            }
            if (obj.y <= 0 || obj.y >= window.innerHeight - svgSize) {
                obj.dy *= -1;
            }

            obj.img.style.transform = `translate(${obj.x}px, ${obj.y}px)`;
        });

        requestAnimationFrame(animate);
    }

    // Create and initialize SVGs
    for (let i = 0; i < numberOfSvgs; i++) {
        const randomUrl = svgUrls[Math.floor(Math.random() * svgUrls.length)];
        const img = createSvgElement(randomUrl);
        const svgObj = initializeSvg(img);
        svgs.push(svgObj);
    }

    // Start the animation
    animate();
});
