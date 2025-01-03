// Select the hamburger icon and links
const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerLinks = document.getElementById("hamburger-links");

// Add click event to toggle menu visibility
hamburgerIcon.addEventListener("click", () => {
    hamburgerLinks.classList.toggle("show");
});