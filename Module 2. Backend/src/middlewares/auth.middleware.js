import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
  // 1. Leer el header Authorization
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token proporcionado' })
  }

  // 2. Extraer el token (quitar "Bearer ")
  const token = authHeader.split(' ')[1]

  try {
    // 3. Verificar y decodificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // 4. Guardar el payload en req.user (disponible en el controller)
    req.user = decoded  // { userId: "abc123", iat: ..., exp: ... }

    next() // pasar al controller

  } catch (error) {
    // Token expirado o manipulado: cortar el flujo
    res.status(401).json({ error: 'Token inválido o expirado' })
  }
}