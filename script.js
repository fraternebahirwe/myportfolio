const themeBtn = document.querySelector(".theme-btn");
const themeIcon = document.querySelector("#theme-icon");

if (themeBtn && themeIcon) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeIcon.src = "moon.png";
    } else {
      themeIcon.src = "sun.png";
    }
  });
}


const burgerBtn = document.querySelector(".burger-btn");
const navLinks = document.querySelector(".nav-links");


if (burgerBtn && navLinks) {
  burgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      burgerBtn.textContent = "×";
    } else {
      burgerBtn.textContent = "☰";
    }
  });
}