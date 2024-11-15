const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  genero: {
    type: String,
    enum: ['Masculino', 'Femenino', 'Otro'],
    required: true,
  },
  telefono: String,
  correo: String,
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;
