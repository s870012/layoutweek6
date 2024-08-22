import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

const swiper = new Swiper(".swiper-article", {
  navigation: {
    prevEl:'.swiper-prev',
    nextEl:'.swiper-next',
  },
  breakpoints: {
    1200:{
      slidesPerView: 2,
      spaceBetween: 48,
    },
    576:{
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination-custom",
    clickable: true,
    type:"fraction",
  },
  });

  const swiper1 = new Swiper(".swiper-view", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 24,
    breakpoints: {
      768:{
        slidesPerView: 2,
      },
      576:{
        slidesPerView: 1,
      },
    }
  });

  const swiper2 = new Swiper(".swiper-subscribe", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    grid:{
      rows:1,
    },
    slidesPerView: 1,
    spaceBetween: 24,
  });

  const swiper3 = new Swiper(".swiper-blog", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    grid:{
      rows:1,
    },
    breakpoints: {
      576:{
        grid:{
          rows: 3,
        },
      }
    },
    slidesPerView: 1,
    spaceBetween: 24,
  });

  AOS.init();