const express = require('express');
const router = express.Router();
const ordenController = require('../../interfaces/controllers/ordenController');

router.post('/orden', ordenController.crearOrden);
router.get('/orden/:usuario_id', ordenController.obtenerOrdenes);

module.exports = router;
