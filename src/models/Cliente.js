const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre:          { type: String, required: true },
  apellido:        { type: String, required: true },
  dni:             { type: String, required: true, unique: true },
  telefono:        { type: String },
  email:           { type: String },
  direccion:       { type: String },
  fecha_registro:  { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cliente', clienteSchema);