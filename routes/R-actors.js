const express = require("express");
const actorsController = require('../controllers/C-actors')
const router = express.Router();

router.get('/', actorsController.getAllActors);

router.get('/:id', actorsController.getActorById);

router.get('/actor/:actor', actorsController.getActorByName);

router.get('/combine/:id', actorsController.actorMovies);

module.exports = router