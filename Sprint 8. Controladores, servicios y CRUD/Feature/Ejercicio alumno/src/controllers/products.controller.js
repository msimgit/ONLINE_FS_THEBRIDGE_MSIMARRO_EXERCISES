import * as productsService from "../services/products.service.js";

// GET /api/products
export const getAllProducts = (req, res) => {
  const products = productsService.getAllProducts();
  res.json({ ok: true, data: products });
};

// GET /api/products/:id
export const getProductById = (req, res) => {
  const product = productsService.getProductById(req.params.id);

  if (!product) {
    return res.status(404).json({
      ok: false,
      error: { message: "Product not found" }
    });
  }

  res.json({ ok: true, data: product });
};

// POST /api/products
export const createProduct = (req, res) => {
  const { brand, model, price } = req.body;

  if (!brand || !model || price === undefined) {
    return res.status(400).json({
      ok: false,
      error: { message: "brand, model and price are required" }
    });
  }

  if (price < 0) {
    return res.status(400).json({
      ok: false,
      error: { message: "price must be >= 0" }
    });
  }

  const newProduct = productsService.createProduct(req.body);
  res.status(201).json({ ok: true, data: newProduct });
};

// PUT /api/products/:id
export const updateProduct = (req, res) => {
  const { price } = req.body;

  if (price !== undefined && price < 0) {
    return res.status(400).json({
      ok: false,
      error: { message: "price must be >= 0" }
    });
  }

  const updated = productsService.updateProduct(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({
      ok: false,
      error: { message: "Product not found" }
    });
  }

  res.json({ ok: true, data: updated });
};

// DELETE /api/products/:id
export const deleteProduct = (req, res) => {
  const deleted = productsService.deleteProduct(req.params.id);

  if (!deleted) {
    return res.status(404).json({
      ok: false,
      error: { message: "Product not found" }
    });
  }

  res.json({ ok: true, data: deleted });
};