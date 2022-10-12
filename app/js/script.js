const hamburger = document.getElementById("header__cta");

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("header__hamburger")) {
    hamburger.classList.remove("header__hamburger");
    hamburger.classList.add("header__hamburger-close");
  } else {
    hamburger.classList.remove("header__hamburger-close");
    hamburger.classList.add("header__hamburger");
  }
});
