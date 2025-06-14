// Get references to the button and body element
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const toggleIcon = document.getElementById('toggle-icon');

// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        // Update icon to moon SVG path
        toggleIcon.innerHTML = `<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>`;
    } else {
        body.classList.remove('dark-theme');
        // Update icon to sun SVG path
        toggleIcon.innerHTML = `<path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 10a1 1 0 110-2h1a1 1 0 110 2h-1zm-9.536 5.657a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zm-4.243-4.243a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM3 10a1 1 0 01-1 1H1a1 1 0 110-2h1a1 1 0 011 1zm8-4.95l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414zm-1.414-9.9c.39.39.39 1.023 0 1.414L10 3.707a1 1 0 00-1.414 0l-.707-.707a1 1 0 000-1.414z"/>`;
    }
    localStorage.setItem('theme', theme); // Save preference
}

// Check for saved theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light
    setTheme(savedTheme);
});

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});
