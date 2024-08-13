import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation:{
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next',
    },
    grid: {
      rows: 1,
    },
    breakpoints: {
      992: {      
        grid: { 
          rows: 1,
        },
        slidesPerView: 2,
        spaceBetween: 48,
      }
    }
  });