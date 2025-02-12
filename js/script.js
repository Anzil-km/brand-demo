// Toggle mobile menu
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const navLinksContainer = document.getElementById("nav-links-container");
const navItems = document.querySelectorAll(".nav-links li a");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
      toggle.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const words = ["Brands", "Identities", "Success", "Visions"];
  const changingWord = document.getElementById("changing-word");

  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      changingWord.textContent = currentWord.substring(0, letterIndex - 1);
      letterIndex--;
    } else {
      changingWord.textContent = currentWord.substring(0, letterIndex + 1);
      letterIndex++;
    }

    let speed = isDeleting ? 100 : 150;

    if (!isDeleting && letterIndex === currentWord.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 800;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();

  //Slideshow
  const clientLogos = document.querySelectorAll(".client-logo");
  let currentIndex = 0;

  function showNextLogo() {
    clientLogos[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % clientLogos.length;

    clientLogos[currentIndex].classList.add("active");
  }

  setInterval(showNextLogo, 2000);
});
