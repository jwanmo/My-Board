function login() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const url = "/user/login";
    const data = {
        "email": email.value,
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
            if (response.status != 200) {
                if (response.status === 404) {
                    navigateTo('register');
                } if (response.status === 401) {
                    console.log(" email or passowrd not correct!");
                }
                else {
                    throw new Error("Network response was not ok");
                }
            }
            return response.json();
        })
        .then((data) => {
            if (data.token) {
                console.log("User is logged in");
                setLocalStoarge("token", data.token);
                navigateTo('home');
                isLoggedIn = true;
                showHideAuthLinks();
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
    navigateTo('register');
});

