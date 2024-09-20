const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})
