import express from 'express'
import * as controller from '../controllers/videogames.controller.js'

const router = express.Router()

router.get('/', controller.getVideogames)
router.get('/:id', controller.getVideogame)
router.post('/', controller.postVideogame)
router.put('/:id', controller.putVideogame)
router.delete('/:id', controller.deleteVideogame)

export default router