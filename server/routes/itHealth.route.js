import express from "express";
import { createITtHealth, getITHealth } from "../controllers/itHealth.controller.js";

const router = express.Router();

router.post("/", createITtHealth);
router.get("/", getITHealth);

export default router;
