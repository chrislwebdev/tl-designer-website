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

// window.addEventListener("resize", () => {
//   console.log(window.innerWidth);
// });

// 2. Cards //

// Image open
// const cardBtn = document.querySelectorAll(".card-btn");

// cardBtn.forEach(function (card) {
//   card.addEventListener("click", (e) => {
//     var windowWidth = screen.width;
//     var windowHeight = screen.height;

//     var newWindow = window.open(
//       e.target.href,
//       "_blank",
//       "width=" +
//         windowWidth +
//         "height=" +
//         windowHeight +
//         "toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes"
//     );
//   });
// });
