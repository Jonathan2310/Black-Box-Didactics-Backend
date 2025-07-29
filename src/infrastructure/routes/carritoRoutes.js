const express = require('express');
const router = express.Router();
const carritoController = require('../../interfaces/controllers/carritoController');

router.get('/:usuario_id', carritoController.getCarrito);
router.post('/agregar', carritoController.addProducto);
router.delete('/:usuario_id/:producto_id', carritoController.deleteProducto);

module.exports = router;
