const express = require('express');
const router = express.Router();
const stripeController = require('../../interfaces/controllers/stripeController');

router.post('/pagar', stripeController.crearSesionPago);

module.exports = router;
