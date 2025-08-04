
// script.js
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('transform');
    mobileMenu.classList.toggle('-translate-y-full');
    mobileMenuButton.classList.toggle('open');
});

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.add('transform');
    mobileMenu.classList.add('-translate-y-full');
    mobileMenuButton.classList.remove('open');
}
