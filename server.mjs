import express from "express";
import USER_API from "./routes/usersRoute.mjs";
import "dotenv/config";
import TASK_API from "./routes/tasksRoute.mjs";
import SuperLogger from "./modules/SuperLogger.mjs";

const server = express();
const port = process.env.PORT || 8080;
server.set("port", port);

const logger = new SuperLogger();
server.use(logger.createAutoHTTPRequestLogger());

server.use(express.static("public"));

server.use("/user", USER_API);
server.use("/task", TASK_API);

server.use(express.json());

server.post("/login", (req, res, next) => {
  console.log("user " + req.params.username + "wnts to login!");
  res.status(200).send().end();
});

server.get("/", (req, res, next) => {
  req.originalUrl;

  res
    .status(200)
    .send(JSON.stringify({ msg: "These are not the droids...." }))
    .end();
});

server.listen(server.get("port"), function () {
  console.log("server running", server.get("port"));
});
