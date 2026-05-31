import { users } from "../db/usersData.js";

export const getAllUsers = (req, res) => {
  let result = [...users];

  if (req.query.name) {
    result = result.filter(user => user.name === req.query.name);
  }
  if (req.query.minAge) {
    result = result.filter(user => user.age >= Number(req.query.minAge));
  }
  if (req.query.specialty) {
    result = result.filter(user => user.specialty === req.query.specialty);
  }

  res.json({ ok: true, data: result });
};

export const getUserById = (req, res) => {
  const user = users.find(user => user.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ ok: false, error: "User not found" });
  }

  res.json({ ok: true, data: user });
};


export const getMarketing = (req, res) => {
  const result = users.filter(user => user.specialty === 'marketing');
  res.json({ ok: true, data: result });
};

export const getDevelopers = (req, res) => {
  const result = users.filter(user => user.specialty === 'developers');
  res.json({ ok: true, data: result });
};

export const getVentas = (req, res) => {
  const result = users.filter(user => user.specialty === 'ventas');
  res.json({ ok: true, data: result });
};

export const getQAs = (req, res) => {
  const result = users.filter(user => user.specialty === 'QAs');
  res.json({ ok: true, data: result });
};