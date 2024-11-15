const express = require('express');
const RegistroMedico = require('../models/registroMedico');
const router = express.Router();

// Añadir un registro médico
router.post('/', async (req, res) => {
  try {
    const nuevoRegistro = new RegistroMedico(req.body);
    await nuevoRegistro.save();
    res.status(201).json(nuevoRegistro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener historial médico de un paciente
router.get('/paciente/:pacienteId', async (req, res) => {
    try {
      const registros = await RegistroMedico.find({ pacienteId: req.params.pacienteId });
      res.status(200).json(registros);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// Buscar registros médicos por criterios
router.get('/', async (req, res) => {
    try {
      const { diagnostico, fecha } = req.query;
  
      let consulta = {};
      if (diagnostico) consulta.diagnostico = new RegExp(diagnostico, 'i');
      if (fecha) consulta.fecha = new Date(fecha);
  
      const registros = await RegistroMedico.find(consulta);
      res.status(200).json(registros);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
module.exports = router;