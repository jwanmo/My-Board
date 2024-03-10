async function alterUser() {
  const newName = document.getElementById("newName").value;
  const newPassword = document.getElementById("newPassword").value;
  const token = localStorage.getItem("token");

  if (token) {
    const payload = {
      token: token,
      name: newName,
      password: newPassword,
    };

    try {
      const response = await fetch("/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Update successful");
      } else {
        alert("Update failed");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Error updating user");
    }
  }
}

function getUser() {
    const token = getLocalStoarge("token");
    const url = "/user/" + token;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      }).then((data) => {
        if (data) {
          const userEmail = document.getElementById("userEmail");
          const userName = document.getElementById("userName");
          const userCity = document.getElementById("userCity");
          const userCountry = document.getElementById("userCountry");
          const userStreet = document.getElementById("userStreet");
          const userZipCode = document.getElementById("userZipCode");
          userEmail.textContent = data.email;
          userName.textContent = data.name;
          userCity.textContent = data.city;
          userStreet.textContent = data.street;
          userCountry.textContent = data.country;
          userZipCode.textContent = data.zipcode;
        }
    })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

const updateProfileForm = document.getElementById("updateProfileForm");
updateProfileForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alterUser();
});

if (document.getElementById("userEmail")) {
    getUser();
}