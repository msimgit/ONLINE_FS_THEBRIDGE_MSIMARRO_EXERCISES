import { productsService } from '../services/products.service.js';

// El controlador traduce entre HTTP (req/res) y la capa de servicio.

const getAll = (req, res) => {
  const data = productsService.getAll();
  res.json({ ok: true, data });
};

const getById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = productsService.getById(id);

  if (!product) {
    return res.status(404).json({ ok: false, error: { message: 'Product not found' } });
  }

  res.json({ ok: true, data: product });
};

const create = (req, res) => {
  const { name, brand, price } = req.body;

  if (!name || !brand || price === undefined) {
    return res
      .status(400)
      .json({ ok: false, error: { message: 'name, brand y price son obligatorios' } });
  }

  const newProduct = productsService.create(req.body);
  res.status(201).json({ ok: true, data: newProduct });
};

const update = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = productsService.update(id, req.body);

  if (!updated) {
    return res.status(404).json({ ok: false, error: { message: 'Product not found' } });
  }

  res.json({ ok: true, data: updated });
};

const remove = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = productsService.remove(id);

  if (!deleted) {
    return res.status(404).json({ ok: false, error: { message: 'Product not found' } });
  }

  res.status(204).send();
};

export const productsController = { getAll, getById, create, update, remove };
