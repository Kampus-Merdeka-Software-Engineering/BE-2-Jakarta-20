import { Router } from "express";
import { getProfile } from "../controllers/aboutControllers.js";

const router = Router();

router.get("/about", getProfile);

export default router;