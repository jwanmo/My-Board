function login() {
    console.log("login")
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const url = "http://localhost:8080/login"; // Adjust the URL for your login endpoint
    const data = {
        "username": username.value,
        "password": password.value,
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    // User not found, redirect to the registration page
                    window.location.href = "register.html"; // Adjust the URL accordingly
                } else {
                    throw new Error("Network response was not ok");
                }
            }
            return response.json();
        })
        .then(data => {
            // Handle the data from the response, e.g., redirect to a dashboard
            console.log(data);
            // You can redirect to a dashboard or perform other actions upon successful login
        })
        .catch(error => {
            // Handle errors
            console.error("Error:", error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        login();
    });

    let createUser = document.getElementById("register");
    createUser.addEventListener("click", function () {
        // Redirect to the registration page
        window.location.href = "register.html"; // Adjust the URL accordingly
    });
});
