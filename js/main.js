// navbar close
document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");
    let offcanvas = document.querySelector(".offcanvas");
    let bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            bsOffcanvas.hide();
        });
    });
});

// Active navbar
let nav = document.querySelector('.navigation-wrap');
window.onscroll =function (){
    if(document.documentElement.scrollTop >10){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.add("scroll-on");
    }
}
