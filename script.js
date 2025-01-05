// Select the hamburger icon and links
const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerLinks = document.getElementById("hamburger-links");

// Add click event to toggle menu visibility
hamburgerIcon.addEventListener("click", () => {
    hamburgerLinks.classList.toggle("show");
});

// Dark mode for toggle
const toggleSwitch = document.querySelector('.input');
const currentTheme = localStorage.getItem('theme');
const elementsToToggle = [
    document.body,
    document.getElementById('desktop-nav'),
    document.getElementById('headline'),
    document.getElementById('about-me'),
    document.getElementById('about-section-headliner'), // Added this line
    document.querySelector('footer'),
    ...document.querySelectorAll('.nav-links a'),
    ...document.querySelectorAll('.card-client'),
];

// Apply the saved theme on page load
if (currentTheme === 'dark') {
    elementsToToggle.forEach((el) => el.classList.add('dark-mode'));
    toggleSwitch.checked = true;
}

// Listen for toggle switch changes
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        elementsToToggle.forEach((el) => el.classList.add('dark-mode'));
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        elementsToToggle.forEach((el) => el.classList.remove('dark-mode'));
        localStorage.setItem('theme', 'light'); // Save preference
    }
});
