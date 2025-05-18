// Optional: This is where you can add any interactivity in the future

// Example: Toggling the navigation menu on small screens
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
