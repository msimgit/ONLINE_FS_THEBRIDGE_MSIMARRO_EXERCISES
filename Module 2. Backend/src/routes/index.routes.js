import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ ok: true, message: "API funcionando" });
});

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

export default router;