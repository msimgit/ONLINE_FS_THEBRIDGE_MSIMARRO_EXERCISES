import * as movieService from "../services/movies.service.js"

export const getMovies = (req, res) => {
  const movies = movieService.getAllMovies()
  res.json({ success: true, data: movies })
}

export const getMovie = (req, res) => {
  const movie = movieService.getMovieById(req.params.id)
  if (!movie) return res.status(404).json({ success: false, error: "Not found" })
  res.json({ success: true, data: movie })
}

export const createMovie = (req, res) => {
  const movie = movieService.createMovie(req.body)
  res.status(201).json({ success: true, data: movie })  // 201 Created
}

export const updateMovie = (req, res) => {
  const movie = movieService.updateMovie(req.params.id, req.body)
  if (!movie) return res.status(404).json({ success: false, error: "Not found" })
  res.json({ success: true, data: movie })
}

export const deleteMovie = (req, res) => {
  const movie = movieService.deleteMovie(req.params.id)
  if (!movie) return res.status(404).json({ success: false, error: "Not found" })
  res.json({ success: true, data: movie })
}