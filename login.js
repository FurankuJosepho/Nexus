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
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());
// toggle
const body = document.querySelector("body"),
        toggle = document.querySelector(".toggle");
      let getMode = localStorage.getItem("mode");
      if (getMode && getMode === "dark") {
        body.classList.add("dark");
        toggle.classList.add("active");
      }
      toggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        if (!body.classList.contains("dark")) {
          return localStorage.setItem("mode", "light");
        }
        localStorage.setItem("mode", "dark");
      });
      toggle.addEventListener("click", () => toggle.classList.toggle("active"));

