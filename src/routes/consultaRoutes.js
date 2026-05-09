const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/consultaController');

router.get('/',       ctrl.getConsultas);
router.get('/:id',    ctrl.getConsulta);
router.post('/',      ctrl.crearConsulta);
router.put('/:id',    ctrl.actualizarConsulta);
router.delete('/:id', ctrl.eliminarConsulta);

module.exports = router;