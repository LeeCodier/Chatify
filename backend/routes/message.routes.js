//package imports
import express from "express";

//file imports
import { sendMessage, getMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

//send message route
//before sendMessage function controller is run,
//check if the user is authenticated, this is a protected route
//this is middleware that authenticates the user and sends the user data to the controller
//the router.post method will:
//find the path
//run protect route middleware to make sure the user is authenticated,this is authorization
//and only then run send message function and send the message

router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
