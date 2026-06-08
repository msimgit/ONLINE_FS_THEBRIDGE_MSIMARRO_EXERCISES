import { videogames } from '../data/videogames.data.js'

export const getAll = () => videogames

export const getById = (id) => {
  return videogames.find(g => g.id === Number(id))
}

export const create = (data) => {
  const newGame = {
    id: videogames.length + 1,
    ...data
  }
  videogames.push(newGame)
  return newGame
}

export const update = (id, data) => {
  const index = videogames.findIndex(g => g.id === Number(id))
  if (index === -1) return null
  videogames[index] = { ...videogames[index], ...data }
  return videogames[index]
}

export const remove = (id) => {
  const index = videogames.findIndex(g => g.id === Number(id))
  if (index === -1) return null
  const deleted = videogames.splice(index, 1)
  return deleted[0]
}