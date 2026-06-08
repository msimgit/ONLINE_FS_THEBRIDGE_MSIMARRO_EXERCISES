import { products } from "../db/products.js";

export const getAllProducts = (req, res) => {
  res.json({ ok: true, data: products });
};

export const getProductById = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ ok: false, error: { message: "Product not found" } });
  }

  res.json({ ok: true, data: product });
};

export const createProduct = (req, res) => {
  const { brand, model, price, year, range } = req.body;

  // Validación básica
  if (!brand || !model || !price) {
    return res.status(400).json({ ok: false, error: { message: "brand, model and price are required" } });
  }

  const newProduct = {
    id: products.length + 1,
    brand,
    model,
    price,
    year,
    range
  };

  products.push(newProduct);
  res.status(201).json({ ok: true, data: newProduct });
};


export const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ ok: false, error: { message: "Product not found" } });
  }

  // Merge: keep existing fields, overwrite with what was sent
  products[index] = { ...products[index], ...req.body, id };

  res.json({ ok: true, data: products[index] });
};


export const deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ ok: false, error: { message: "Product not found" } });
  }

  const deleted = products.splice(index, 1)[0];

  res.json({ ok: true, data: deleted });
};