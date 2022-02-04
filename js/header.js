let header__burger = document.querySelector('.header__burger');
let header__menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');
let nav__link1 = document.querySelector('.link1');
let nav__link2 = document.querySelector('.link2');
let nav__link3 = document.querySelector('.link3');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header__menu.classList.toggle('active');
    back.classList.toggle('lock');
}

nav__link1.onclick = function() {
    header__burger.classList.remove('active');
    header__menu.classList.remove('active');
    back.classList.remove('lock');
}
nav__link2.onclick = function() {
    header__burger.classList.remove('active');
    header__menu.classList.remove('active');
    back.classList.remove('lock');
}
nav__link3.onclick = function() {
    header__burger.classList.remove('active');
    header__menu.classList.remove('active');
    back.classList.remove('lock');
}