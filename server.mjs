import express from 'express' // Express is installed using npm
import USER_API from './routes/usersRoute.mjs'; // This is where we have defined the API for working with users.
import 'dotenv/config';
import TASK_API from './routes/tasksRoute.mjs'; 
import SuperLogger from './modules/SuperLogger.mjs';

// Creating an instance of the server
const server = express();
// Selecting a port for the server to use.
const port = (process.env.PORT || 8080);
server.set('port', port);

// Enable logging for server
const logger = new SuperLogger();
server.use(logger.createAutoHTTPRequestLogger()); // Will logg all http method requests


// Defining a folder that will contain static files.
server.use(express.static('public'));

// Telling the server to use the USER_API (all urls that uses this code will have to have the /user after the base address)
server.use("/user", USER_API);
server.use("/task", TASK_API);

server.post("/login",(req, res, next) => {
    console.log("user " + req.params.username + "wnts to login!");
    res.status(200).send().end();
});

// A get request handler example)
server.get("/", (req, res, next) => {

    req.originalUrl

    res.status(200).send(JSON.stringify({ msg: "These are not the droids...." })).end();
});



// Start the server 
server.listen(server.get('port'), function () {
    console.log('server running', server.get('port'));
});

