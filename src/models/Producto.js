const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre:           { type: String, required: true },
  categoria:        { type: String, enum: ['medicamento', 'insumo', 'alimento'] },
  descripcion:      { type: String },
  stock_actual:     { type: Number, default: 0 },
  stock_minimo:     { type: Number, default: 5 },
  unidad:           { type: String, enum: ['unidades', 'ml', 'mg'] },
  precio_compra:    { type: Number },
  precio_venta:     { type: Number },
  fecha_vencimiento:{ type: Date },
  proveedor:        { type: String }
});

module.exports = mongoose.model('Producto', productoSchema);