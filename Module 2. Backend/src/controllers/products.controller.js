import * as svc from "../services/products.service.js"

export const getProducts = (req, res) => res.json({ ok: true, data: svc.getAllProducts() })

export const getProduct = (req, res) => {
  const p = svc.getProductById(req.params.id)
  if (!p) return res.status(404).json({ ok: false, error: "Not found" })
  res.json({ ok: true, data: p })
}

export const createProduct = (req, res) =>
  res.status(201).json({ ok: true, data: svc.createProduct(req.body) })

export const updateProduct = (req, res) => {
  const p = svc.updateProduct(req.params.id, req.body)
  if (!p) return res.status(404).json({ ok: false, error: "Not found" })
  res.json({ ok: true, data: p })
}

export const deleteProduct = (req, res) => {
  const p = svc.deleteProduct(req.params.id)
  if (!p) return res.status(404).json({ ok: false, error: "Not found" })
  res.json({ ok: true, data: p })
}
export const getCheapProducts = (req, res) =>
  res.json({ ok: true, data: svc.getCheapProducts() })

export const getNamesProducts = (req, res) =>
  res.json({ ok: true, data: svc.getNamesProducts() })