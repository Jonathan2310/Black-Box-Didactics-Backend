const express = require('express');
const router = express.Router();
const productoController = require('../../interfaces/controllers/productoController');
const upload = require('../../middlewares/uploadImage');

router.get('/buscar', productoController.buscar);
router.get('/relacionados/:categoria/:id', productoController.relacionados);
router.get('/', productoController.getProductos);
router.get('/:id', productoController.getProducto);
router.delete('/:id', productoController.eliminarProducto);
router.post('/', upload.single('imagen'), productoController.crearProducto);
router.get('/categoria/:categoria', productoController.getPorCategoria);

module.exports = router;
