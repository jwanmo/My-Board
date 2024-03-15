import express, { response } from "express";
import { HTTPCodes } from "../modules/httpConstants.mjs";
import SuperLogger from "../modules/SuperLogger.mjs";
import { insert } from "../modules/db.mjs";
import jwt from "jsonwebtoken";

const TASK_API = express.Router();
TASK_API.use(express.json());
TASK_API.get("/", (req, res, next) => {
  SuperLogger.log("Get My tasks");

  const token = req.headers['authorization'];

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token is invalid or expired" });
    }
    try {
      const selectQuery = 'SELECT * FROM "task" WHERE userid = $1';
      const values = [decoded.userId];
      const tasks = await insert(selectQuery, values);
      if (tasks.rows.length > 0) {
        res.status(HTTPCodes.SuccesfullRespons.Ok).json(tasks.rows);
      } else {
        res
          .status(HTTPCodes.ClientSideErrorRespons.NotFound)
          .json({ message: "Tasks not found" });
      }
    } catch (error) {
      SuperLogger.log(
        "Error fetching task: " + error,
        SuperLogger.LOGGING_LEVELS.CRTICAL
      );
      res
        .status(HTTPCodes.ClientSideErrorRespons.InternalServerError)
        .json({ message: "Error fetching task" });
    }
  });
});

TASK_API.get("/:id", async (req, res, next) => {
  SuperLogger.log("Get task with :id");

  const taskId = req.params.id;
  const token = req.headers['authorization'];

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token is invalid or expired" });
    }
    try {
      const selectQuery = 'SELECT * FROM "task" WHERE id = $1 AND userid = $2';
      const values = [taskId, decoded.userId];
      const task = await insert(selectQuery, values);
      if (task.rows.length > 0) {
        res.status(HTTPCodes.SuccesfullRespons.Ok).json(task.rows[0]);
      } else {
        res
          .status(HTTPCodes.ClientSideErrorRespons.NotFound)
          .json({ message: "Task not found" });
      }
    } catch (error) {
      SuperLogger.log(
        "Error fetching task: " + error,
        SuperLogger.LOGGING_LEVELS.CRTICAL
      );
      res
        .status(HTTPCodes.ClientSideErrorRespons.InternalServerError)
        .json({ message: "Error fetching task" });
    }
  });
});

TASK_API.post("/", async (req, res, next) => {
  const token = req.headers['authorization'];
  const { title, description, deadline, status } = req.body;

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token is invalid or expired" });
    }
    try {
      const insertQuery =
        'INSERT INTO "task" (title, description, deadline, status, userid) VALUES ($1, $2, $3, $4, $5) RETURNING *';
      const values = [title, description, deadline, status, decoded.userId];

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
  const token = req.headers['authorization'];
  const taskId = req.params.id;
  const { title, description, deadline, status } = req.body;

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token is invalid or expired" });
    }
    try {
      const insertQuery =
        'UPDATE "task" SET title = $1, description = $2, deadline = $3, status = $4 WHERE id = $5 AND userid = $6 RETURNING *';
      const values = [title, description, deadline, status, taskId, decoded.userId];
console.log(values)
      const insertRes = await insert(insertQuery, values);

      SuperLogger.log(
        "Data Updated successfully: " +insertRes
      );
      if(insertRes.rowCount==0) {
        res.status(HTTPCodes.ClientSideErrorRespons.BadRequest).end();
      }
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

TASK_API.delete("/:id", (req, res) => {
  const token = req.headers['authorization'];
  const taskId = req.params.id;

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token is invalid or expired" });
    }
    try {
      const insertQuery =
        'DELETE FROM "task" WHERE id = $1 AND userid = $2 RETURNING *';
      const values = [ taskId, decoded.userId];

      const insertRes = await insert(insertQuery, values);

      SuperLogger.log(
        "Data deleted " + JSON.stringify(insertRes)
      );
      if(insertRes.rowCount==0) {
        res.status(HTTPCodes.ClientSideErrorRespons.BadRequest).end();
      }
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

export default TASK_API;
