// Get the header element
const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Initial scroll position
let lastScrollPosition = 0;

// Function to handle scroll events
function handleScroll() {
    // Get current scroll position
    const currentScrollPosition = window.scrollY;

    // Add blur effect as soon as scrolling starts
    if (currentScrollPosition > 0) {
        header.style.backdropFilter = 'blur(10px)';
        header.style.webkitBackdropFilter = 'blur(10px)'; // For Safari support
    } else {
        // Remove blur effect when back at top
        header.style.backdropFilter = 'none';
        header.style.webkitBackdropFilter = 'none';
    }

    // Update last scroll position
    lastScrollPosition = currentScrollPosition;
}

// Toggle menu function
function toggleMenu() {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Event listeners
window.addEventListener('scroll', handleScroll);
menuToggle.addEventListener('click', toggleMenu);

// Close menu on window resize if open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Optional: Add smooth transition for the blur effect
document.addEventListener('DOMContentLoaded', () => {
    header.style.transition = 'backdrop-filter 0.3s ease, background-color 0.3s ease';
}); 