import * as fightersService from '../services/fighters.service.js';

export const getAllFighters = async (req, res) => {
  try {
    const fighters = await fightersService.getAllFighters();
    res.status(200).json(fighters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFighterById = async (req, res) => {
  try {
    const fighter = await fightersService.getFighterById(req.params.id);
    if (!fighter) {
      return res.status(404).json({ message: 'Luchador no encontrado' });
    }
    res.status(200).json(fighter);
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'ID no válido' });
    }
    res.status(500).json({ message: error.message });
  }
};

export const createFighter = async (req, res) => {
  try {
    const newFighter = await fightersService.createFighter(req.body);
    res.status(201).json(newFighter);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

export const updateFighter = async (req, res) => {
  try {
    const updated = await fightersService.updateFighter(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ message: 'Luchador no encontrado' });
    }
    res.status(200).json(updated);
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'ID no válido' });
    }
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

export const deleteFighter = async (req, res) => {
  try {
    const deleted = await fightersService.deleteFighter(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Luchador no encontrado' });
    }
    res.status(200).json({ message: 'Luchador eliminado', fighter: deleted });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'ID no válido' });
    }
    res.status(500).json({ message: error.message });
  }
};