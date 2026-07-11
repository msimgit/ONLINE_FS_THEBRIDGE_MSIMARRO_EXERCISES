import express from "express"
import * as c from "../controllers/products.controller.js"

const router = express.Router()

// OJO: el prefijo /products se pone en app.js al montar el router.
// Aquí las rutas son relativas: "/" equivale a /products
router.get("/", c.getProducts)
router.get("/cheap", c.getCheapProducts)   // antes de /:id
router.get("/names", c.getNamesProducts)   // antes de /:id
router.get("/:id", c.getProduct)
router.post("/", c.createProduct)
router.put("/:id", c.updateProduct)
router.delete("/:id", c.deleteProduct)

export default router