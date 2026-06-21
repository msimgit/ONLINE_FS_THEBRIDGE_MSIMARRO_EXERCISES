import * as service from '../services/videogames.service.js'

export const getVideogames = (req, res) => {
  res.json({ ok: true, data: service.getAll() })
}

export const getVideogame = (req, res) => {
  const game = service.getById(req.params.id)
  if (!game) return res.status(404).json({ ok: false, error: 'Not found' })
  res.json({ ok: true, data: game })
}

export const postVideogame = (req, res) => {
  const game = service.create(req.body)
  res.status(201).json({ ok: true, data: game })
}

export const putVideogame = (req, res) => {
  const game = service.update(req.params.id, req.body)
  if (!game) return res.status(404).json({ ok: false, error: 'Not found' })
  res.json({ ok: true, data: game })
}

export const deleteVideogame = (req, res) => {
  const game = service.remove(req.params.id)
  if (!game) return res.status(404).json({ ok: false, error: 'Not found' })
  res.json({ ok: true, data: game })
}