import { authService } from "../services/auth.service.js";

/**
 * POST /register
 */
async function register(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña son obligatorios" });
    }

    const newUser = await authService.createUser(email, password);

    // No devolvemos nunca la contraseña (ni el hash) al cliente
    return res.status(201).json({
      message: "Usuario registrado correctamente",
      user: { id: newUser.id, email: newUser.email },
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

/**
 * POST /login
 */
async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña son obligatorios" });
    }

    const token = await authService.login(email, password);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
}

/**
 * GET /public
 */
function publicRoute(req, res) {
  return res.status(200).json({ message: "Esta es una ruta pública, acceso libre" });
}

/**
 * GET /private
 */
function privateRoute(req, res) {
  // req.user lo añade el middleware de autenticación
  return res.status(200).json({
    message: "Esta es una ruta privada, acceso autorizado",
    user: req.user,
  });
}

export const authController = {
  register,
  login,
  publicRoute,
  privateRoute,
};
