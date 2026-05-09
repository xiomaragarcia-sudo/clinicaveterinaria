const Mascota = require('../models/Mascota');

exports.getMascotas = async (req, res) => {
  try {
    const mascotas = await Mascota.find().populate('cliente_id', 'nombre apellido');
    res.json(mascotas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener mascotas', error });
  }
};

exports.getMascota = async (req, res) => {
  try {
    const mascota = await Mascota.findById(req.params.id).populate('cliente_id');
    if (!mascota) return res.status(404).json({ mensaje: 'Mascota no encontrada' });
    res.json(mascota);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error', error });
  }
};

exports.crearMascota = async (req, res) => {
  try {
    const mascota = new Mascota(req.body);
    await mascota.save();
    res.status(201).json(mascota);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear mascota', error });
  }
};

exports.actualizarMascota = async (req, res) => {
  try {
    const mascota = await Mascota.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(mascota);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar', error });
  }
};

exports.eliminarMascota = async (req, res) => {
  try {
    await Mascota.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Mascota eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar', error });
  }
};