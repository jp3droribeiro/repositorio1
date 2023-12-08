function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');

    const drawerLinks = document.querySelector('.drawer');
    drawerLinks.classList.toggle('show');
}