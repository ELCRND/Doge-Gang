import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".roadmap__swiper", {
  slidesPerView: 1,
  grid: {
    rows: 3,
  },
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 176,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
  },
});
// const swiper = new Swiper(".roadmap__swiper", {
//   slidesPerView: 1,

//   spaceBetween: 176,
//   navigation: {
//     nextEl: ".swiper-next",
//     prevEl: ".swiper-prev",
//   },

//   breakpoints: {
//     1279: {
//       slidesPerView: 3,
//     },
//   },
// });
