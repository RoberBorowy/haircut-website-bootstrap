
// menu scroll
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navbar");

  function addShadow() {
    if (window.scrollY >= 100) {
      nav.classList.add("shadow");
    } else {
      nav.classList.remove("shadow");
    }
  }

  window.addEventListener('scroll',addShadow)
});


// scroll reval anime
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(
  `.hero-text, .btn-dark,.about-img,.about-text,.title,.underline,.about-subtitle,.about-description,.card,.team-img,.contact-container,.contact-form`,
  {
    interval: 100,
  }
);