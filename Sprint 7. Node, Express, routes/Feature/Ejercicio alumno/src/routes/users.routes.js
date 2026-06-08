import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  getMarketing,
  getDevelopers,
  getVentas,
  getQAs
} from "../controllers/users.controller.js";

const router = Router();

router.get("/marketing", getMarketing);
router.get("/developers", getDevelopers);
router.get("/ventas", getVentas);
router.get("/QAs", getQAs);
router.get("/:id", getUserById);
router.get("/", getAllUsers);

export default router;