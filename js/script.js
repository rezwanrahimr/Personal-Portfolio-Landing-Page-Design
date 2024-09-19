const hamburger = document.querySelector('hamburger');
const navMenu = document.querySelector('nav_menu');

hamburger.addEventListener('click', () => {
    console.log('clicked');
    navMenu.classList.toggle('active');
})

console.log('script loaded');