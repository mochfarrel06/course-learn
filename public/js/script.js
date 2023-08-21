// Menu Toggle
const tham = document.querySelector('.tham');

tham.addEventListener('click', () => {
  tham.classList.toggle('tham-active');
});

// menu mobile
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});
