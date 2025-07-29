const express = require('express');
const TestimonioController = require('../../interfaces/controllers/testimonioController');

const router = express.Router();
const controller = new TestimonioController();

router.get('/', controller.getTestimonios);
router.post('/', controller.createTestimonio);

module.exports = router;
