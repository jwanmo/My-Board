import fs from "fs/promises";
import User from "./user.mjs";
import SuperLogger from "./SuperLogger.mjs";
import { insert } from "./db.mjs";


export const registerUser = async (name, email, pswHash, city) => {
    try {

        const insertQuery = 'INSERT INTO "user" (name, email, pswhash, city) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [name, email,  pswHash, city];

        const insertRes = insert(insertQuery, values);
        
        SuperLogger.log('Data inserted successfully:' + insertRes);

    } catch (error) {
        SuperLogger.log("Error registering user: " + error, SuperLogger.LOGGING_LEVELS.CRTICAL);
        return false;
    }
};

