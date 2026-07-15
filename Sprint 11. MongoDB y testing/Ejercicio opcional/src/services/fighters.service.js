import Fighter from '../models/fighters.model.js';

export const getAllFighters = () => Fighter.find();

export const getFighterById = (id) => Fighter.findById(id);

export const createFighter = (data) => Fighter.create(data);

export const updateFighter = (id, data) =>
  Fighter.findByIdAndUpdate(id, data, { new: true, runValidators: true });

export const deleteFighter = (id) => Fighter.findByIdAndDelete(id);