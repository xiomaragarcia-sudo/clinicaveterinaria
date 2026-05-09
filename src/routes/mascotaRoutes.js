const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/mascotaController');

router.get('/',       ctrl.getMascotas);
router.get('/:id',    ctrl.getMascota);
router.post('/',      ctrl.crearMascota);
router.put('/:id',    ctrl.actualizarMascota);
router.delete('/:id', ctrl.eliminarMascota);

module.exports = router;