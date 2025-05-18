// If you need any JavaScript functionality, you can add them here.
// For example, here is a simple scroll-to-top functionality:

document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners for any buttons, etc.
  console.log("Metro Made website is ready!");

  // Example: Scroll-to-top button functionality (if you want to add it later)
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerHTML = "↑";
  scrollToTopButton.style.position = 'fixed';
  scrollToTopButton.style.bottom = '20px';
  scrollToTopButton.style.right = '20px';
  scrollToTopButton.style.backgroundColor = '#111';
  scrollToTopButton.style.color = 'white';
  scrollToTopButton.style.border = 'none';
  scrollToTopButton.style.padding = '10px';
  scrollToTopButton.style.borderRadius = '50%';
  document.body.appendChild(scrollToTopButton);

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
