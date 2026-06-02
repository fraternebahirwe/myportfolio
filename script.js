const changingText = document.getElementById("changing-text");

const words = ["HTML", "CSS", "JavaScript", "Git & GitHub"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    changingText.textContent = currentWord.substring(0, letterIndex - 1);
    letterIndex--;
  } else {
    changingText.textContent = currentWord.substring(0, letterIndex + 1);
    letterIndex++;
  }

  if (!isDeleting && letterIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex++;

    if (wordIndex === words.length) {
      wordIndex = 0;
    }
  }

  setTimeout(typeEffect, isDeleting ? 70 : 120);
}

typeEffect();