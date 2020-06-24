const router = require('express').Router()

const { InicioController } = require('../controllers')
router.get('/', InicioController.index)

module.exports = router