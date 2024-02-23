function submit() {
    console.log("submit")
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const url = "http://localhost:8080/user";
    const data = {
        "name": name.value,
        "email": email.value,
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
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Handle the data from the response
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error("Error:", error);
        });

}
document.addEventListener("DOMContentLoaded", function () {
    const regForm = document.getElementById("regForm");

    regForm.addEventListener("submit", () => {
        submit()
    })
});

