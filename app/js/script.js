const hamburger = document.getElementById("header__cta");
const overlay = document.getElementById("overlay");
const headerMenu = document.getElementById("headerMenu");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("header__hamburger")) {
    hamburger.classList.remove("header__hamburger");
    hamburger.classList.add("header__hamburger-close");
    overlay.classList.remove("hidden");
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
    headerMenu.classList.remove("hidden");
    body.classList.add("noscroll");
  } else {
    body.classList.remove("noscroll");
    hamburger.classList.remove("header__hamburger-close");
    hamburger.classList.add("header__hamburger");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    headerMenu.classList.add("hidden");
  }
});
