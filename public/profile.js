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
    const url = "/user/";
    fetch(url, {
      method: "GET",
      headers: {
        "Authorization": token,
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
          userEmail.textContent = "Email: " + data.email;
          userName.textContent = "Name: " + data.name;
          userCity.textContent = "City: " + data.city;
          userStreet.textContent = "Street: " + data.street;
          userCountry.textContent = "Country: " + data.country;
          userZipCode.textContent = "Zip Code: " + data.zipcode;
        }
    })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async function deleteUser() {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const response = await fetch("/user", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
      });

      if (response.ok) {
        localStorage.removeItem("token");
        navigateTo("login");
        showHideAuthLinks();
      } else {
        alert("Delete user failed");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user");
    }
  }
}

const updateProfileForm = document.getElementById("updateProfileForm");
updateProfileForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alterUser();
});


const deleteUserButton = document.getElementById("deleteUser");
deleteUserButton.addEventListener("click", function (event) {
  event.preventDefault();
  deleteUser();
});

if (document.getElementById("userEmail")) {
    getUser();
}

