const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productoController');

router.get('/',       ctrl.getProductos);
router.get('/:id',    ctrl.getProducto);
router.post('/',      ctrl.crearProducto);
router.put('/:id',    ctrl.actualizarProducto);
router.delete('/:id', ctrl.eliminarProducto);

module.exports = router;