import express, { response } from "express";
import User from "../modules/user.mjs";
import { HTTPCodes } from "../modules/httpConstants.mjs";
import SuperLogger from "../modules/SuperLogger.mjs";
import { registerUser } from "../modules/register.mjs";
import { implement } from "../modules/db.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const USER_API = express.Router();
USER_API.use(express.json());
USER_API.get("/", async (req, res, next) => {
  const token = req.headers['authorization'];

  const decodedToken = jwt.decode(token);

  if (decodedToken && decodedToken.userId) {
    try {
      const userQuery =
        'SELECT name, email, city, street, country, zipcode FROM "user" WHERE id = $1';

      const userRes = await implement(userQuery, [decodedToken.userId]);

      if (userRes.rows.length > 0) {
        res.status(200).json(userRes.rows[0]);
      } else {
        res.status(401).json({ message: "No user found" });
      }
    } catch (error) {
      console.error("Get user failed: ", error);
      res.status(500).json({ message: "Server error during get user process" });
    }
  } else {
    res.status(401).json({ message: "Invalid token" });
  }
});

USER_API.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userQuery = 'SELECT * FROM "user" WHERE email = $1';
    const userRes = await implement(userQuery, [email]);

    if (userRes.rows.length > 0) {
      const user = userRes.rows[0];
      const match = await bcrypt.compare(password, user.pswhash);
      console.log(match);
      if (match) {
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "Incorrect email or password" });
      }
    } else {
      res.status(401).json({ message: "Incorrect email or password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during the login process" });
  }
});

USER_API.post("/", (req, res, next) => {
  SuperLogger.log("got post request");
  const { name, email, password, street, city, zipcode, country } = req.body;

  if (name != "" && email != "" && password != "") {
    const user = new User();
    user.name = name;
    user.email = email;
    user.street = street;
    user.city = city;
    user.zipcode = zipcode;
    user.country = country;
    user.pswHash = password;

    let exists = false;

    if (!exists) {
      registerUser(
        user.name,
        user.email,
        user.pswHash,
        user.street,
        user.city,
        user.zipcode,
        user.country
      );
      res.status(HTTPCodes.SuccesfullRespons.Ok).end();
    } else {
      res.status(HTTPCodes.ClientSideErrorRespons.BadRequest).end();
    }
  } else {
    res
      .status(HTTPCodes.ClientSideErrorRespons.BadRequest)
      .send("Mangler data felt")
      .end();
  }
});

USER_API.put("/", (req, res) => {
  /// TODO: Edit user
  console.log("Got put request");
  const { token, name, password } = req.body;
  console.log("--", token, "--", password, "-", name);

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token is invalid or expired" });
    }

    try {
      let pswHash;
      const updateNameQuery =
        'UPDATE "user" SET name = $1 WHERE id = $2 RETURNING *';
      const updatePasswordQuery =
        'UPDATE "user" SET pswHash = $1 WHERE id = $2 RETURNING *';
      let updatePass;
      let updateName;
      if (password) {
        const saltRounds = 10;
        pswHash = await bcrypt.hash(password, saltRounds);
        updatePass = await implement(updatePasswordQuery, [
          pswHash,
          decoded.userId,
        ]);
      }

      if (name) {
        updateName = await implement(updateNameQuery, [name, decoded.userId]);
      }

      if (
        (updatePass && updatePass.rows.length > 0) ||
        (updateName && updateName.rows.length > 0)
      ) {
        res.json({ message: "User updated successfully" });
      } else {
        res.status(404).json({ message: "Update failed" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Database or server error" });
    }
  });
});

USER_API.delete("/:id", (req, res) => {
  /// TODO: Delete user.
});

export default USER_API;
