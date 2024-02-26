import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

//protectRoute willl make sure unauthenticated users wont access the route and see the users you speak to
router.get("/", protectRoute, getUsersForSidebar);

export default router;
