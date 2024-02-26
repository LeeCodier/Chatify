///packages
import express from "express";

//modules
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

// authRoutes,
//these routes will lead to controllers, for organization sake,
// controllers will be in there own folder
//the first argument is the route, the second argument is the controller which is a callback function callback functions

//All these routes will be post methods, they will send data to the server or database
//e.g signup route will send handle
router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
