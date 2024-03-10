import express, { response } from "express";
import { HTTPCodes } from "../modules/httpConstants.mjs";
import SuperLogger from "../modules/SuperLogger.mjs";
import { insert } from "../modules/db.mjs";
import jwt from "jsonwebtoken";

const TASK_API = express.Router();
TASK_API.use(express.json());
TASK_API.get("/", (req, res, next) => {
  SuperLogger.log("Get tasks");
});

TASK_API.get("/:id", async (req, res, next) => {
  SuperLogger.log("Get task with :id");
});

TASK_API.post("/", async (req, res, next) => {
  const { title, description, deadline, status, token } = req.body;

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token is invalid or expired" });
    }
    try {
      const insertQuery =
        'INSERT INTO "task" (title, description, deadline, status) VALUES ($1, $2, $3, $4) RETURNING *';
      const values = [title, description, deadline, status];

      const insertRes = await insert(insertQuery, values);

      SuperLogger.log(
        "Data inserted successfully: " + JSON.stringify(insertRes)
      );
      res.status(HTTPCodes.SuccesfullRespons.Ok).end();
    } catch (error) {
      SuperLogger.log(
        "Error registering user: " + error,
        SuperLogger.LOGGING_LEVELS.CRTICAL
      );
      res.status(HTTPCodes.ClientSideErrorRespons.BadRequest).end();
    }
  });
});

TASK_API.put("/:id", (req, res) => {
  /// TODO: Edit task
});

TASK_API.delete("/:id", (req, res) => {
  /// TODO: Delete task.
});

export default TASK_API;
