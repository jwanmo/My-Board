import fs from "fs/promises";
import { implement } from "./db.mjs";

export const loginUser = async (email, password) => {
    try {
        const dbRes = implement('SELECT * from user')
        dbRes.rows.forEach(row => {
            SuperLogger.log("Got data:", row);
        });

        return dbRes.rows;
    } catch (error) {
        console.error("Error logging in:", error);
        return false;
    }
};

