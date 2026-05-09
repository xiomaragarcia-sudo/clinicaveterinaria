const mongoose = require('mongoose');

const detalleSchema = new mongoose.Schema({
  descripcion:     String,
  cantidad:        Number,
  precio_unitario: Number,
  subtotal:        Number
});

const facturaSchema = new mongoose.Schema({
  cliente_id:  { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  consulta_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Consulta' },
  fecha:       { type: Date, default: Date.now },
  subtotal:    { type: Number },
  descuento:   { type: Number, default: 0 },
  total:       { type: Number },
  metodo_pago: { type: String, enum: ['efectivo', 'tarjeta', 'transferencia'] },
  estado:      { type: String, enum: ['pendiente', 'pagada', 'anulada'], default: 'pendiente' },
  detalle:     [detalleSchema]
});

module.exports = mongoose.model('Factura', facturaSchema);