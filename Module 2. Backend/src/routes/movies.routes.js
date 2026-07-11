import express from "express"
import * as movieController from "../controllers/movies.controller.js"
import { validateMovie } from "../middlewares/validateMovie.middleware.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = express.Router()

// Ruta pública: info del router de películas (antes de /:id)
router.get("/health", (req, res) => {
  res.json({ status: "ok", resource: "movies" })
})

// Rutas protegidas: solo usuarios autenticados
router.get("/", authMiddleware, movieController.getMovies)
router.get("/:id", authMiddleware, movieController.getMovie)

// validateMovie se ejecuta ANTES de createMovie
router.post("/", authMiddleware, validateMovie, movieController.createMovie)
router.put("/:id", authMiddleware, validateMovie, movieController.updateMovie)
router.delete("/:id", authMiddleware, movieController.deleteMovie)

export default router