import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
    
    slidesPerView: 3,
    
    direction: 'horizontal',
    loop: true,

    
    pagination: {
        el: '.swiper-pagination',
    },

    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    
    scrollbar: {
        el: '.swiper-scrollbar',
    },


    breakpoints: {

        1300: {
            slidesPerView: 3,
        },

        800: {
            slidesPerView: 2,
        },

        600: {
            slidesPerView: 1,
        },

        300: {
            slidesPerView: 1,
        },
    }
});

export default swiper;