document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("regForm");
    const loginIcon = document.getElementById("loginIcon");
    const loginButton = document.getElementById("login");
    const registerButton = document.getElementById("register");

    loginIcon.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        showLoginForm();
    });

    loginButton.addEventListener("click", function () {
        showLoginForm();
    });

    registerButton.addEventListener("click", function () {
        showRegisterForm();
    });

    function showLoginForm() {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    }

    function showRegisterForm() {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
});
