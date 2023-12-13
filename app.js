// 1. Navbar
const navOpen = document.querySelector(".nav-open-btn");
const navHeader = document.querySelector(".nav-header-container");
const navContainer = document.querySelector(".navbar-container");

navOpen.addEventListener("click", () => {
  navHeader.classList.add("nav-header-disappear");
  navContainer.classList.add("navbar-reveal");
});

const navClose = document.querySelector(".nav-close-btn");

navClose.addEventListener("click", () => {
  navHeader.classList.remove("nav-header-disappear");
  navContainer.classList.remove("navbar-reveal");
});
