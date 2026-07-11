import express from "express";

const router = express.Router();

const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Luis" },
  { id: 3, name: "Marta" }
];

// GET /users
router.get("/", (req, res) => {
  res.json(users);
});

// GET /users/:id
router.get("/:id", (req, res) => {
  res.json({ id: req.params.id });
});

export default router;