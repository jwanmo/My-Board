import pkg from 'pg';
import SuperLogger from "./SuperLogger.mjs";
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'jwan',
    password: 'admin',
    port: 5432,
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