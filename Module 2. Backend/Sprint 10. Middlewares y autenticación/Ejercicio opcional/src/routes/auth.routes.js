import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/public", authController.publicRoute);
router.get("/private", authMiddleware, authController.privateRoute);

export default router;