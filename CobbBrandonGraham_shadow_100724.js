// ==UserScript==
// @name         Drop Shadow
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add a drop shadow effect to images in infoboxes and text
// @author       Brandon Graham Cobb
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function main() {
    console.log("Starting...");

    function styleSVGImages() {
        console.log("Starting svg styling...");
        const svgImages = document.querySelectorAll('img, a.image, .infobox-image img');
        //const svgImages = document.querySelectorAll('image');
        svgImages.forEach(svg => {
            svg.style.webkitFilter = 'drop-shadow(5px 5px 5px rgba(0,0,0, .3))';
            svg.style.filter = 'drop-shadow(5px 5px 5px rgba(0,0,0, .3))';
        });
        console.log("Stopping svg styling...");
    }

    function darkMode() {
        console.log("Starting darkMode styling...");
        const body = document.querySelectorAll('body');
        body.forEach(body => {
            body.style.backgroundColor = 'rgba(0,0,0,1)';
        });
        console.log("Stopping darkMode styling...");
    }

    function getTextColor(element) {
        console.log("Starting text color fetching...");
        const computedStyle = window.getComputedStyle(element);
        console.log("Stopping text color fetching...");
        return computedStyle.color;
    }

    function styleText() {
        console.log("Starting text styling...");
        const textElements = document.querySelectorAll('div');
        textElements.forEach(element => {
            const textColor = getTextColor(element);
            element.style.textShadow = `2px 2px 5px ${textColor}`;
        });
        console.log("Stopping text styling...");
    }

    function styleCode() {
        console.log("Starting text styling...");
        const textElements = document.querySelectorAll('pre');
        textElements.forEach(element => {
            const textColor = getTextColor(element);
            //element.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.3)';
            //element.style.padding = '2px 5px'; // Optional: add some padding for better visibility
            //element.style.textShadow = `2px 2px 5px ${textColor} !important`;
            element.style.setProperty('text-shadow', `none`, 'important');
        });
        console.log("Stopping text styling...");
    }

   // styleSVGImages();
    //styleText();
    //styleCode();
    //darkMode();

    console.log("Stopping...");
    window.addEventListener('load', () => {
        styleSVGImages()
        styleCode()
        const observer = new MutationObserver(styleCode);
        observer.observe(document.body, { childList: true, subtree: true });
        const observer2 = new MutationObserver(styleText);
        observer2.observe(document.body, { childList: true, subtree: true });
    });
})();