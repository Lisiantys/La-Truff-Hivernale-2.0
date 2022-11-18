//Début Header Sticky

window.addEventListener("scroll", () => {
  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 100);
}); //Fin Header Sticky


//Début Scroll Menu

const menu = document.querySelector(".menu");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
}); //Fin Scroll Menu


//Début Hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => 
n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})); //Fin Hamburger


