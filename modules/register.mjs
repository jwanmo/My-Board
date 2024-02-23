import fs from "fs/promises";
import User from "./user.js";
import SuperLogger from "./SuperLogger.js";

const logger = new SuperLogger();

export const registerUser = async (email, pswHash, name) => {
    try {
        const usersData = await fs.readFile("users.json", "utf-8");
        const users = JSON.parse(usersData);

        // Check if email already exists
        if (users.find((user) => user.email === email)) {
            logger.log("Email already exists. Please choose another one.");
            return false;
        }

        // Add new user
        const newUser = new User(email, pswHash, name);
        users.push(newUser);

        await fs.writeFile("users.json", JSON.stringify(users, null, 2));

        logger.log("User registered successfully.");
        return true;
    } catch (error) {
        logger.log("Error registering user:", SuperLogger.LOGGING_LEVELS.CRTICAL);
        return false;
    }
};

// register.mjs

document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("regForm");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Handle registreringen her
        console.log("Registreringsskjemaet ble sendt");
    });
});
