import { Router } from "express";
import * as productController from "../controllers/productController.js";
import { validateProduct } from "../middlewares/validateProduct.js";

const router = Router();

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/", validateProduct, productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

export default router;