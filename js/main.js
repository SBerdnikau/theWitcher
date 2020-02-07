// Активация слайдера
var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1, //кол-во слайдов
    loop: true, // перелистование
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints: {
        // when window width is >= 540px
        540: {
          slidesPerView: 2,
        },
      }
    
});

//Активация кнопки бургера 
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');
menuButton.addEventListener('click', (event) => {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
});