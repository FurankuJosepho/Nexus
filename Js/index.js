// navbar
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Swiper JS
// Swiper JS 1
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next", // Unique class for swiper 1 next button
    prevEl: ".swiper-button-prev", // Unique class for swiper 1 prev button
  },
  pagination: {
    el: ".swiper-pagination-1", // Unique class for swiper 1 pagination
    clickable: true,
  },
});

// Swiper JS 2
let swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 5,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next-2", // Unique class for swiper 2 next button
    prevEl: ".swiper-button-prev-2", // Unique class for swiper 2 prev button
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },
  },
});
