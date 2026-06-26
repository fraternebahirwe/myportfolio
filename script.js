// --- GESTION DU THÈME (SOMBRE / CLAIR) ---
const themeBtn = document.querySelector(".theme-btn");
const themeIcon = document.querySelector("#theme-icon");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  if (themeIcon) themeIcon.src = "img/moon.png";
} else {
  document.body.classList.remove("light-mode");
  if (themeIcon) themeIcon.src = "img/sun.png";
}

if (themeBtn && themeIcon) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeIcon.src = "img/moon.png";
      localStorage.setItem("theme", "light");
    } else {
      themeIcon.src = "img/sun.png";
      localStorage.setItem("theme", "dark");
    }
  });
}

// --- GESTION DU MENU BURGER & DRAWER MOBILE ---
const burgerBtn = document.querySelector(".burger-btn");
const navLinks = document.querySelector(".nav-links");
const allLinks = document.querySelectorAll(".nav-links a"); // AJOUT : Cible tous vos liens

if (burgerBtn && navLinks) {
  // Ouverture / Fermeture manuelle avec le bouton
  burgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burgerBtn.textContent = navLinks.classList.contains("active") ? "×" : "☰";
  });

  // AJOUT ESSENTIEL : Fermeture automatique du tiroir au clic sur un lien
  allLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      burgerBtn.textContent = "☰"; // Réinitialise l'icône burger immédiatement
    });
  });
}

// --- FILTRES DE PROJETS ---
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(button => button.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.textContent.toLowerCase();

    projectCards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// --- VALIDATION & ENVOI DU FORMULAIRE DE CONTACT ---
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("invalid", () => { form.classList.add("submitted"); }, true);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("submitted");

    if (!form.checkValidity()) return;

    const successMessage = document.getElementById("form-success");
    const data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    })
    .then(response => {
      if (response.ok) {
        successMessage.style.display = "block";
        form.reset();
        form.classList.remove("submitted");
      } else {
        alert("Une erreur est survenue, veuillez réessayer.");
      }
    })
    .catch(() => {
      alert("Erreur de connexion. Veuillez réessayer.");
    });
  });
});

// --- EFFET D'AUTO-COMPLÉTION (TYPING EFFECT) ---
const words = ["HTML, CSS & JS responsive web sites.", "JavaScript apps.", "clean UI."];
const elem = document.getElementById("changing-text");
let word = 0, char = 0, del = false;

if (elem) { // Sécurité : évite de planter si l'élément n'est pas chargé
  (function type() {
      const cur = words[word];
      char += del ? -1 : 1;
      elem.textContent = cur.substring(0, char);

      let speed = del ? 50 : 100;

      if (!del && char === cur.length) { 
        speed = 2000; 
        del = true; 
      } else if (del && char === 0) { 
        del = false; 
        word = (word + 1) % words.length; 
        speed = 400; 
      }

      setTimeout(type, speed);
  })();
}






