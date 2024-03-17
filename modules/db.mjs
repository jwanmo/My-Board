import pkg from "pg";
import SuperLogger from "./SuperLogger.mjs";
import dotenv from "dotenv";
const { Pool } = pkg;

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
});

export const implement = async (request, values) => {
  let client;
  try {
    client = await pool.connect();
    const dbRes = await client.query(request, values);
    return dbRes;
  } catch (e) {
    console.log("DATABASE ERROR: ", e);
    return false;
  } finally {
    if (client) {
      client.release();
    }
  }
};

export const insert = async (request, values) => {
  let client;
  try {
    client = await pool.connect();
    const dbRes = await client.query(request, values);

    dbRes.rows.forEach((element) => {
      SuperLogger.log("Data :" + element);
    });
    return dbRes;
  } catch (e) {
    SuperLogger.log("ERROR :" + e);
    return false;
  } finally {
    if (client) {
      client.release();
    }
  }
};

export const update = async (request, values) => {
  let client;
  try {
    client = await pool.connect();
    const dbRes = await client.query(request, values);
    return dbRes;
  } catch (e) {
    return false;
  } finally {
    if (client) {
      client.release();
    }
  }
};

export const remove = async (request, values) => {
  let client;
  try {
    client = await pool.connect();
    const dbRes = await client.query(request, values);
    return dbRes;
  } catch (e) {
    return false;
  } finally {
    if (client) {
      client.release();
    }
  }
};
