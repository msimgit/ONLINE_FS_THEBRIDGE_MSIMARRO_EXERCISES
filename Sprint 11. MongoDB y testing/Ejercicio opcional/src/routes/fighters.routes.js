import { Router } from 'express';
import * as fightersController from '../controllers/fighters.controller.js';

const router = Router();

router.get('/', fightersController.getAllFighters);
router.get('/:id', fightersController.getFighterById);
router.post('/', fightersController.createFighter);
router.put('/:id', fightersController.updateFighter);
router.delete('/:id', fightersController.deleteFighter);

export default router;