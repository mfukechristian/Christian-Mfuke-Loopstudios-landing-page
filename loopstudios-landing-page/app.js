const btnOpenMenu = document.querySelector(".open");
const navMenu = document.querySelector(".header-nav-container");
const btnCloseMenu = document.querySelector(".close");

btnOpenMenu.addEventListener("click", () => {
  navMenu.classList.add("active");
});

btnCloseMenu.addEventListener("click", () => {
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
  }
});
