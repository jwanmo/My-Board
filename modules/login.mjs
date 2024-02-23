import fs from "fs/promises";

export const loginUser = async (email, password) => {
    try {
        const usersData = await fs.readFile("users.json", "utf-8");
        const users = JSON.parse(usersData);

        // Check if the user exists
        const user = users.find((u) => u.email === email);

        if (!user) {
            console.log("User not found. Please register first.");
            return false;
        }

        // Check password
        if (user.pswHash === password) {
            console.log("Login successful.");
            return true;
        } else {
            console.log("Incorrect password. Please try again.");
            return false;
        }
    } catch (error) {
        console.error("Error logging in:", error);
        return false;
    }
};


// login.mjs

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Håndter innlogging her
        console.log("Innloggingsskjemaet ble sendt");
    });
});

