import fs from "fs/promises";
import User from "./user.mjs";
import SuperLogger from "./SuperLogger.mjs";
import { insert } from "./db.mjs";


export const registerUser = async (name, email, pswHash, street, city, zipcode, country) => {
    try {

        const insertQuery = 'INSERT INTO "user" (name, email, pswhash, street, city, zipcode, country) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
        const values = [name, email, pswHash ,street, city, zipcode, country];

        const insertRes = insert(insertQuery, values);
        
        SuperLogger.log('Data inserted successfully:' + insertRes);

    } catch (error) {
        SuperLogger.log("Error registering user: " + error, SuperLogger.LOGGING_LEVELS.CRTICAL);
        return false;
    }
};

