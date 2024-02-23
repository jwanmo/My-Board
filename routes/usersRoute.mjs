import express, { response } from "express";
import User from "../modules/user.mjs";
import { HTTPCodes } from "../modules/httpConstants.mjs";
import SuperLogger from "../modules/SuperLogger.mjs";
import {loginUser} from "../modules/login.mjs"
import { registerUser } from "../modules/register.mjs";



const USER_API = express.Router();
USER_API.use(express.json()); // This makes it so that express parses all incoming payloads as JSON for this route.


USER_API.get('/', (req, res, next) => {
    SuperLogger.log("Demo of logging tool");
    SuperLogger.log("A important msg", SuperLogger.LOGGING_LEVELS.CRTICAL);
})

USER_API.get('/:id', async (req, res, next) => {
    SuperLogger.log("Get user with :id");
    const isOk = await loginUser("test", "pass")
    // Tip: All the information you need to get the id part of the request can be found in the documentation 
    // https://expressjs.com/en/guide/routing.html (Route parameters)

    /// TODO: 
    // Return user object
    res.status(200).send(JSON.stringify({ msg: "I got your requesr for user user with id" + isOk })).end();
})

USER_API.post('/', (req, res, next) => {

    
    const { name, email, password } = req.body;

    if (name != "" && email != "" && password != "") {
        const user = new User();
        user.name = name;
        user.email = email;

        ///TODO: Do not save passwords.
        user.pswHash = password;

        ///TODO: Does the user exist?
        let exists = false;

        if (!exists) {
            registerUser(user.name, user.email, user.pswHash)
            res.status(HTTPCodes.SuccesfullRespons.Ok).end();
        } else {
            res.status(HTTPCodes.ClientSideErrorRespons.BadRequest).end();
        }

    } else {
        res.status(HTTPCodes.ClientSideErrorRespons.BadRequest).send("Mangler data felt").end();
    }

});

USER_API.put('/:id', (req, res) => {
    /// TODO: Edit user
})

USER_API.delete('/:id', (req, res) => {
    /// TODO: Delete user.
})

export default USER_API
