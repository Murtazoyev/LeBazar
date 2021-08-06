
var toggleMenu = document.getElementById('menu-toggle')
var menu = document.getElementById('menu');
var navLinksLi = document.getElementsByClassName('nav-item');
var navLinkA = document.getElementsByClassName('nav-link');

function clickMenu() {
    menu.classList.toggle('nav-active')
    toggleMenu.classList.toggle('toggle')
}