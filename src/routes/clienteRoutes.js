const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/clienteController');

router.get('/',       ctrl.getClientes);
router.get('/:id',    ctrl.getCliente);
router.post('/',      ctrl.crearCliente);
router.put('/:id',    ctrl.actualizarCliente);
router.delete('/:id', ctrl.eliminarCliente);

module.exports = router;