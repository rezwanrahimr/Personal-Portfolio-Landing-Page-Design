const hamburger = document.querySelector('.hamburger');
const menuIcon = document.getElementById('menu_icon');
const navMenu = document.querySelector('.nav_menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        menuIcon.classList.replace('fa-bars', 'fa-times'); // Switch to close icon
    } else {
        menuIcon.classList.replace('fa-times', 'fa-bars'); // Switch back to hamburger
    }

})

