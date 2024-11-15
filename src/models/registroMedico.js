const mongoose = require('mongoose');

const registroMedicoSchema = new mongoose.Schema({
  pacienteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Paciente',
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  diagnostico: String,
  tratamiento: String,
  medico: String,
  notas: String,
});

const RegistroMedico = mongoose.model('RegistroMedico', registroMedicoSchema);

module.exports = RegistroMedico;
