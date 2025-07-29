const express = require("express");
const router = express.Router();
const tutorialController = require("../../interfaces/controllers/tutorialController");

router.get("/", tutorialController.getAll);
router.post("/", tutorialController.create);

module.exports = router;
