import { Router } from "express";
import { getLandingData } from "../controllers/index.controller.js";

const router = Router();

// Rutas al mock
router.get("/home", getLandingData);

export default router;