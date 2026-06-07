const themeBtn = document.querySelector(".theme-btn");
const burgerBtn = document.querySelector(".burger-btn");
const navLinks = document.querySelector(".nav-links");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeBtn.textContent = "☾";
    } else {
      themeBtn.textContent = "☼";
    }
  });
}

if (burgerBtn) {
  burgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}