const themeBtn = document.querySelector(".theme-btn");
const themeIcon = document.querySelector("#theme-icon");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  if (themeIcon) themeIcon.src = "moon.png";
} else {
  document.body.classList.remove("light-mode");
  if (themeIcon) themeIcon.src = "sun.png";
}

if (themeBtn && themeIcon) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeIcon.src = "moon.png";
      localStorage.setItem("theme", "light");
    } else {
      themeIcon.src = "sun.png";
      localStorage.setItem("theme", "dark");
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


const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    filterBtns.forEach(button => {
      button.classList.remove("active");
    });

    btn.classList.add("active");

  });
});

const links = document.querySelectorAll(".nav-links a");
const underline = document.querySelector(".underline");

links.forEach(link => {
  link.addEventListener("mouseenter", (e) => {
    const rect = e.target.getBoundingClientRect();
    const parentRect = e.target.parentElement.getBoundingClientRect();

    const x = rect.left - parentRect.left;

    underline.style.width = rect.width + "px";
    underline.style.transform = `translateX(${x}px)`;
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

    if (!form) return;

  form.addEventListener(
    "invalid",
    () => {
      form.classList.add("submitted");
    },
    true
  );

  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      form.classList.add("submitted");
    }
  });
});