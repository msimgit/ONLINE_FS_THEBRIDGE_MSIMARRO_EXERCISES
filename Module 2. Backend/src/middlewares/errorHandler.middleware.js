// 4 parámetros: Express lo reconoce como manejador de errores
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Error interno del servidor'
  })
}
// En app.js siempre al final: app.use(errorHandler)