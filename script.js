const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
    burger.classList.remove('active');
  }
});

// Show all nav links on clicking the burger icon
burger.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    navLinks.classList.toggle('show-links');
  }
});

// Hide all nav links on clicking anywhere outside the navigation bar
// document.addEventListener('click', (event) => {
//   const target = event.target;
//   if (!target.closest('.navbar') && !target.classList.contains('burger')) {
//     navLinks.classList.remove('show-links');
//     burger.classList.remove('active');
//   }
// });
