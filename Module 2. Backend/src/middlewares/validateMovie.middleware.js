export const validateMovie = (req, res, next) => {
  const { title, year } = req.body
  if (!title || !year) {
    return res.status(400).json({
      success: false,
      error: 'title y year son obligatorios'
    })
  }
  next()
}