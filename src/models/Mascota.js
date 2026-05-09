const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
  cliente_id:       { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  nombre:           { type: String, required: true },
  especie:          { type: String, enum: ['perro', 'gato', 'ave', 'conejo', 'otro'] },
  raza:             { type: String },
  fecha_nacimiento: { type: Date },
  sexo:             { type: String, enum: ['M', 'F'] },
  peso:             { type: Number },
  color:            { type: String },
  activo:           { type: Boolean, default: true }
});

module.exports = mongoose.model('Mascota', mascotaSchema);