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

// Login Form Validation
document.getElementById("loginForm").addEventListener("submit", function (event) {
    let form = this;

    // Check form validity
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

    // Add Bootstrap validation classes
    form.classList.add("was-validated");
});


// // First Name
// function validateName(input) {
//     let regex = /^[A-Za-z\s]+$/; // Sirf letters aur space allow karega
//     let errorDiv = document.getElementById("nameError");

//     if (!regex.test(input.value)) {
//         input.classList.add("is-invalid");
//         errorDiv.style.display = "block";
//         input.value = input.value.replace(/[^A-Za-z\s]/g, ""); // Numbers hata dega
//     } else {
//         input.classList.remove("is-invalid");
//         errorDiv.style.display = "none";
//     }
// }


// // Last Name
// function validateLastName(input) {
//     let regex = /^[A-Za-z\s]+$/; // Sirf alphabets aur spaces allow
//     let errorDiv = document.getElementById("lastNameError");

//     if (!regex.test(input.value)) {
//         input.classList.add("is-invalid");
//         errorDiv.style.display = "block";
//         input.value = input.value.replace(/[^A-Za-z\s]/g, ""); // Numbers & special characters hata dega
//     } else {
//         input.classList.remove("is-invalid");
//         errorDiv.style.display = "none";
//     }
// }
// //  confirm password
// function validatePassword() {
//     let password = document.getElementById("floatingPassword").value;
//     let confirmPassword = document.getElementById("floatingConfirmPassword").value;
//     let confirmPasswordField = document.getElementById("floatingConfirmPassword");
//     let errorDiv = document.getElementById("confirmPasswordError");

//     if (password !== confirmPassword || confirmPassword === "") {
//         confirmPasswordField.classList.add("is-invalid");
//         errorDiv.style.display = "block";
//     } else {
//         confirmPasswordField.classList.remove("is-invalid");
//         confirmPasswordField.classList.add("is-valid");
//         errorDiv.style.display = "none";
//     }
// }

// // Login Eye password
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    
    // Toggle password field type
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    } else {
        passwordField.type = 'password';
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    }
});