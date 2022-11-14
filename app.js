//Début Header Sticky

window.addEventListener("scroll", () =>{
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 100);
}) //Fin Header Sticky



const menu = document.querySelector(".menu")

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




