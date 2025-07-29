const express = require('express');
const router = express.Router();
const recursoController = require('../../interfaces/controllers/recursoController');

router.post('/', recursoController.crear);
router.get('/', recursoController.obtenerTodos);
router.delete('/:id', recursoController.eliminar);

module.exports = router;
