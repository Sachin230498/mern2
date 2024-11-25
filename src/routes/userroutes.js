import express from "express";
import  { register, login, GetData } from "../controller/userController.js"

const router = express.Router();

// Routes

router.get("/get", GetData);
router.post("/signup", register);
router.post("/login", login);

export default router;
