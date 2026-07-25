export function errorHandler(err, req, res, next) {
  console.error(err);

  // Error de Prisma: registro no encontrado
  if (err.code === "P2025") {
    return res.status(404).json({ error: "Recurso no encontrado" });
  }

  // Error de Prisma: violación de constraint único
  if (err.code === "P2002") {
    return res.status(409).json({ error: "Conflicto: registro duplicado" });
  }

  const status = err.status || 500;
  res.status(status).json({ error: err.message || "Error interno del servidor" });
}