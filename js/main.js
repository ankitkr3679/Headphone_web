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
document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector(".navigation-wrap");
    let topHeader = document.getElementById("topHeader");

    // Scroll Event
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            navbar.classList.add("fixed-nav");
        } else {
            navbar.classList.remove("fixed-nav");
        }
    });
    // Close Button Click Event
    function closeHeader() {
        if (topHeader) {
            topHeader.style.display = "none";
        }
    }
    // Attach function to the window (for inline onclick)
    window.closeHeader = closeHeader;
});
