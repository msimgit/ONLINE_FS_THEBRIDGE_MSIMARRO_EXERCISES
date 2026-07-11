import express from 'express'
import * as authController
  from '../controllers/auth.controller.js'
import { authMiddleware }
  from '../middlewares/auth.middleware.js'

const router = express.Router()

// Rutas públicas
router.post('/register',
  authController.register)

router.post('/login',
  authController.login)

// Ruta protegida: necesita token válido
router.get('/me',
  authMiddleware,
  authController.getMe)

export default router