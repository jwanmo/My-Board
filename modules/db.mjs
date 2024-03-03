import pkg from 'pg';
import SuperLogger from "./SuperLogger.mjs";
import dotenv from 'dotenv';
const { Pool } = pkg;

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
})

export const implement = async (request) => {
    let client
    try {
        client = await pool.connect();
        const dbRes = await client.query(request);
        return dbRes;
    } catch (e) {
        return false;
    } finally {
        if (client) {
            client.release(); // Release the client back to the pool
        }
    }
}

export const insert = async (request, values) => {
    let client
    try {
        client = await pool.connect();
        const dbRes = await client.query(request, values);
        dbRes.rows.forEach(element => {
            SuperLogger.log('Data :' + element);
        });
        return dbRes;
    } catch (e) {
        return false;
    } finally {
        if (client) {
            client.release(); // Release the client back to the pool
        }
    }
}