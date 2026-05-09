const Consulta = require('../models/Consulta');

exports.getConsultas = async (req, res) => {
  try {
    const consultas = await Consulta.find().populate('mascota_id', 'nombre especie');
    res.json(consultas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener consultas', error });
  }
};

exports.getConsulta = async (req, res) => {
  try {
    const consulta = await Consulta.findById(req.params.id).populate('mascota_id');
    if (!consulta) return res.status(404).json({ mensaje: 'Consulta no encontrada' });
    res.json(consulta);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error', error });
  }
};

exports.crearConsulta = async (req, res) => {
  try {
    const consulta = new Consulta(req.body);
    await consulta.save();
    res.status(201).json(consulta);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear consulta', error });
  }
};

exports.actualizarConsulta = async (req, res) => {
  try {
    const consulta = await Consulta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(consulta);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar', error });
  }
};

exports.eliminarConsulta = async (req, res) => {
  try {
    await Consulta.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Consulta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar', error });
  }
};