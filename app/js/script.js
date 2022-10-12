const hamburger = document.getElementById("header__cta");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("header__hamburger")) {
    hamburger.classList.remove("header__hamburger");
    hamburger.classList.add("header__hamburger-close");
    overlay.classList.remove("hidden");
  } else {
    hamburger.classList.remove("header__hamburger-close");
    hamburger.classList.add("header__hamburger");
    overlay.classList.add("hidden");
  }
});
