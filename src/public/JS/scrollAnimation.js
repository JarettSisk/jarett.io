let revealEls = document.querySelectorAll(".reveal");

function reveal() {
  for (let i = 0; i < revealEls.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = revealEls[i].getBoundingClientRect().top;
    let elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
      revealEls[i].classList.add("active");
    } else {
      revealEls[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
