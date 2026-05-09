const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/facturaController');

router.get('/',       ctrl.getFacturas);
router.get('/:id',    ctrl.getFactura);
router.post('/',      ctrl.crearFactura);
router.put('/:id',    ctrl.actualizarFactura);
router.delete('/:id', ctrl.eliminarFactura);

module.exports = router;