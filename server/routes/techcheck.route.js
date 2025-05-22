import express from "express";
import { createTechCheck, getTechCheck } from "../controllers/techCheck.controller.js";
import validateTechCheck from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/", validateTechCheck, createTechCheck);
router.get("/", getTechCheck);

export default router;
