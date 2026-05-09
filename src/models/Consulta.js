const mongoose = require('mongoose');

const recetaSchema = new mongoose.Schema({
  medicamento: String,
  dosis:       String,
  frecuencia:  String,
  duracion:    String,
  indicaciones: String
});

const consultaSchema = new mongoose.Schema({
  mascota_id:      { type: mongoose.Schema.Types.ObjectId, ref: 'Mascota', required: true },
  fecha:           { type: Date, default: Date.now },
  motivo_consulta: { type: String },
  temperatura:     { type: Number },
  peso_actual:     { type: Number },
  diagnostico:     { type: String },
  tratamiento:     { type: String },
  observaciones:   { type: String },
  recetas:         [recetaSchema]
});

module.exports = mongoose.model('Consulta', consultaSchema);