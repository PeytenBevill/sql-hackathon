const express = require('express')
const router = express.Router()
const movieControllers = require('../controllers/C-movies')

router.get('/', movieControllers.list)
router.get('/:id', movieControllers.show)
router.get('/:title', movieControllers.showTitle)
router.get('/', movieControllers.create)
router.get('/:id', movieControllers.update)
router.get('/:id', movieControllers.deleteMovie)


module.exports = router