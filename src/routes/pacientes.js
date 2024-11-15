const express = require('express');
const Paciente = require('../models/pacientes');
const router = express.Router();

// Crear un paciente
router.post('/', async (req, res) => {
  try {
    const nuevoPaciente = new Paciente(req.body);
    await nuevoPaciente.save();
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
