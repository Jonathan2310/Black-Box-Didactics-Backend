const express = require('express');
const OpinionController = require('../../interfaces/controllers/opinionController');

const router = express.Router();
const controller = new OpinionController();

router.get('/', controller.getOpiniones);
router.post('/', controller.createOpinion);

module.exports = router;
