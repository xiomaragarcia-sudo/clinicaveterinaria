const Factura = require('../models/Factura');

exports.getFacturas = async (req, res) => {
  try {
    const facturas = await Factura.find()
      .populate('cliente_id', 'nombre apellido')
      .populate('consulta_id');
    res.json(facturas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener facturas', error });
  }
};

exports.getFactura = async (req, res) => {
  try {
    const factura = await Factura.findById(req.params.id)
      .populate('cliente_id')
      .populate('consulta_id');
    if (!factura) return res.status(404).json({ mensaje: 'Factura no encontrada' });
    res.json(factura);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error', error });
  }
};

exports.crearFactura = async (req, res) => {
  try {
    const factura = new Factura(req.body);
    await factura.save();
    res.status(201).json(factura);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear factura', error });
  }
};

exports.actualizarFactura = async (req, res) => {
  try {
    const factura = await Factura.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!factura) return res.status(404).json({ mensaje: 'Factura no encontrada' });
    res.json(factura);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar', error });
  }
};

exports.eliminarFactura = async (req, res) => {
  try {
    await Factura.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Factura eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar', error });
  }
};