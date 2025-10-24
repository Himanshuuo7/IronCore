const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.mobile-menu .close-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.style.right = '0';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.right = '-100%';
});

// Optional: click outside to close
window.addEventListener('click', (e) => {
  if(e.target === mobileMenu){
    mobileMenu.style.right = '-100%';
  }
});
