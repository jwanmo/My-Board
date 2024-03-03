function submit() {
    console.log("submit")
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const street = document.getElementById("street");
    const city = document.getElementById("city");
    const zipcode = document.getElementById("zipcode");
    const country = document.getElementById("country");


    const url = "http://localhost:8080/user";
    const data = {
        "name": name.value,
        "email": email.value,
        "password": password.value,
        "street": street.value,
        "city": city.value,
        "zipcode": zipcode.value,
        "country": country.value
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
                throw new Error("Network response was not ok" + JSON.stringify(response));
            }
            navigateTo('login')
            return JSON.stringify(response);
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

const regForm = document.getElementById("regForm");

regForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submit()
})


