// Los datos viven aquí, en el db
import { movies } from "../db/movies.db.js"

// READ — GET ALL
export const getAllMovies = () => movies

// READ — GET BY ID
export const getMovieById = (id) => {
  return movies.find(m => m.id === Number(id))
}

// CREATE
export const createMovie = (data) => {
  const newMovie = {
    id: movies.length + 1,   // ID automático
    ...data                   // spread del body
  }
  movies.push(newMovie)
  return newMovie
}

// UPDATE
export const updateMovie = (id, data) => {
  const index = movies.findIndex(m => m.id === Number(id))
  if (index === -1) return null
  movies[index] = { ...movies[index], ...data }  // merge
  return movies[index]
}

// DELETE
export const deleteMovie = (id) => {
  const index = movies.findIndex(m => m.id === Number(id))
  if (index === -1) return null
  const deleted = movies.splice(index, 1)  // elimina del array
  return deleted[0]
}