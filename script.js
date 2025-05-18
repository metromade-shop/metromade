// Mobile Menu Toggle (Hamburger Menu)
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Toggle the navigation on and off when the hamburger icon is clicked
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// Contact Form Validation
const contactForm = document.querySelector('.contact form');

// Add an event listener for the form submission
contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting until we check

  // Get input values
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // Simple validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields!');
  } else {
    alert('Thank you for contacting us!');
    contactForm.reset(); // Clear the form after submission
  }
});
