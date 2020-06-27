const express = require('express')
const router = express.Router()
const pacienteController = require('../controllers/pacienteController')

module.exports = function(){

    router.post('/pacientes', 
        pacienteController.nuevoCliente
    )

    return router
}