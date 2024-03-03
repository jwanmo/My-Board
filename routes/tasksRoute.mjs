import express, { response } from "express";
import { HTTPCodes } from "../modules/httpConstants.mjs";
import SuperLogger from "../modules/SuperLogger.mjs";



const TASK_API = express.Router();
TASK_API.use(express.json()); // This makes it so that express parses all incoming payloads as JSON for this route.


TASK_API.get('/', (req, res, next) => {
    SuperLogger.log("Get tasks");
})

TASK_API.get('/:id', async (req, res, next) => {
    SuperLogger.log("Get task with :id");
})

TASK_API.post('/', (req, res, next) => {
    // add task
    //const { } = req.body;

});

TASK_API.put('/:id', (req, res) => {
    /// TODO: Edit task
})

TASK_API.delete('/:id', (req, res) => {
    /// TODO: Delete task.
})

export default TASK_API
