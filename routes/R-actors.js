const express = require("express");
const actorsController = require('../controllers/C-actors')
const router = express.Router();

router.get('/', actorsController.getAllActors);

router.get('/:id', actorsController.getActorById);

router.get('/:actor', actorsController.getActorByName);

module.exports = router