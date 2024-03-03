function login() {
    console.log("login");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const url = "http://localhost:8080/login";
    const data = {
        "username": username.value,
        "password": password.value,
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                if (response.status === 404) {
                    window.location.href = "register.html";
                } else {
                    throw new Error("Network response was not ok");
                }
            } else {
                window.location.href = "index.html";
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);

            if (data.token) {
                console.log("User is logged in");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}


const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    login();
});

let createUser = document.getElementById("register");
createUser.addEventListener("click", function () {
    window.location.href = "register.html";
});

