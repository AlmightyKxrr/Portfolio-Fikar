 window.onscroll = function() {
  const btn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
  btn.style.display = "block";
  } else {
  btn.style.display = "none";
  }
};


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      section.classList.add("show");
    }
  });
});


window.addEventListener("load", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      section.classList.add("show");
    }
  });
});
