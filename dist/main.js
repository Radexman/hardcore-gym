// Mobile hamburger menu nodes

const menuBtn = document.querySelector('.header__menu');
const hamburger = document.querySelector('.menu__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.nav__ul');
const navHome = document.querySelector('#homenav');
const navAbout = document.querySelector('#aboutnav');
const navPlans = document.querySelector('#plansnav');
const navContact = document.querySelector('#contactnav');

// Addition of 'open' class that toggles 
// navbar to pop up

let openMenu = false;


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
    if(!openMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        openMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        openMenu = false;
    }
};

// Function that hides navbar when
// links are clicked

navHome.addEventListener('click', closeMenu);
navAbout.addEventListener('click', closeMenu);
navPlans.addEventListener('click', closeMenu);
navContact.addEventListener('click', closeMenu);

function closeMenu () {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    openMenu = false;
};