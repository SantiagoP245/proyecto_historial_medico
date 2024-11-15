require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Importar rutas
const rutasPacientes = require('./routes/pacientes');
const rutasRegistrosMedicos = require('./routes/registrosMedicos');

const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

// Usar rutas
app.use('/api/pacientes', rutasPacientes);
app.use('/api/registrosMedicos', rutasRegistrosMedicos);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
