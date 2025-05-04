// слайдер
const heroSlides = document.querySelectorAll('.hero__slide');
let heroSlidesIndex = 0;

function switchHeroSlides() {
    heroSlides[heroSlidesIndex].classList.remove('hero-active');
    heroSlidesIndex++;
    if (heroSlidesIndex >= heroSlides.length){
        heroSlidesIndex = 0;
    }
    heroSlides[heroSlidesIndex].classList.add('hero-active')

}
setInterval(switchHeroSlides, 3000)
// слайдер
// аккордеон
const services = document.querySelectorAll('.services__item')
services.forEach(card => {
  const info = card.querySelector('.service__info')
  const plus = card.querySelector('.service__btn-open')
  plus.addEventListener('click', function () {
    services.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.querySelector('.service__info').classList.remove('open')
        otherCard.querySelector('.service__btn-open').textContent = '+'
      }
    })
    info.classList.toggle('open')
    plus.textContent = info.classList.contains('open') ? '-' : '+'
  })
})
// аккордеон
// бургер меню 


const burger = document.querySelector('.header__btn-burger_btn')
const nav = document.querySelector('.header__nav')

function burgerMenu() {
  burger.classList.toggle('burger-active');
  nav.classList.toggle('nav-active');
}
burger.addEventListener('click', burgerMenu);
// бургер меню 