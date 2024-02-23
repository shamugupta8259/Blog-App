import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { create } from "../controller/postController.js ";
import { getposts } from "../controller/postController.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getposts);

export default router;
