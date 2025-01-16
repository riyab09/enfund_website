// News API Setup
// script.js

// Get the menu button and left menu
const menuButton = document.querySelector('.menu-button');
const leftMenu = document.querySelector('.left-menu');

// Toggle the left menu visibility when the button is clicked
menuButton.addEventListener('click', function() {
    if (leftMenu.style.width === '250px') {
        leftMenu.style.width = '0px'; // Collapse the menu
    } else {
        leftMenu.style.width = '250px'; // Expand the menu
    }
});


// function adjustPageSize() {
//     var width = window.innerWidth; // Get the current width of the window

//     // Reset scaling first to avoid accumulation of transformations
//     document.body.style.transform = "scale(1)";
//     document.body.style.transformOrigin = "top left";

//     // Apply scale based on screen width ranges
//     if (width >= 992 && width <= 1600) {
//         document.body.style.transform = "scale(0.9)"; // Shrink the page by 90%
//     } else if (width >= 700 && width <= 767) {
//         document.body.style.transform = "scale(0.8)"; // Shrink the page by 80%
//     } else if (width >= 600 && width < 700) {
//         document.body.style.transform = "scale(0.75)"; // Shrink the page by 75%
//     } else if (width <= 600) {
//         document.body.style.transform = "scale(0.5)"; // Shrink the page by 50%
//     }
// }
function adjustPageSize() {
    var width = window.innerWidth; // Get the current width of the window

    // Remove any previous scaling transformations
    document.body.style.transform = "none"; // Reset any transform scale

    // Apply scaling logic based on screen width ranges
    if (width >= 992 && width <= 1600) {
        document.body.style.width = "90vw"; // Set width to 90% of viewport width
    } else if (width >= 700 && width <= 767) {
        document.body.style.width = "80vw"; // Set width to 80% of viewport width
    } else if (width >= 600 && width < 700) {
        document.body.style.width = "75vw"; // Set width to 75% of viewport width
    } else if (width <= 600) {
        document.body.style.width = "50vw"; // Set width to 50% of viewport width
    } else {
        document.body.style.width = "100vw"; // Full width for larger screens
    }
}

// Call adjustPageSize when the page is loaded or resized

// Call the function when the window is resized or initially loaded
window.addEventListener('resize', adjustPageSize);
window.addEventListener('load', adjustPageSize); // Ensure the function is called on page load


window.addEventListener('resize', adjustRightPanelVisibility);

function adjustRightPanelVisibility() {
    var windowWidth = window.innerWidth; // Get the current window width
    var mainContentWidth = document.querySelector('.main-container').offsetWidth; // Get the width of main content

    // Check if the window width is smaller than the main content's width
    if (windowWidth <= mainContentWidth) {
        document.querySelector('.right-panel').style.display = 'none'; // Hide right panel
        document.querySelector('.main-container').style.width = '100%'; // Make main content take full width
    } else {
        document.querySelector('.right-panel').style.display = 'block'; // Show right panel
        document.querySelector('.main-container').style.width = 'auto'; // Revert main content width
    }
    var rightPanel = document.querySelector('.right-panel');
    if (windowWidth <= 768) {
        rightPanel.style.width = '250px'; // Adjust width for smaller screens
    } else {
        rightPanel.style.width = '400px'; // Default width for larger screens
    }
    if(windowWidth =680){
        rightPanel.style.display="block";
    }
}

// Initial check when the page loads
adjustRightPanelVisibility();
