


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