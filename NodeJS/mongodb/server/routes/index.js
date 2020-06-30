const express = require('express')
const router = express.Router()
const pacienteController = require('../controllers/pacienteController')
const PacienteModel = require('../models/paciente')

module.exports = function(){

    router.get('/', async (req, res) => {
        const listaPacientes = await PacienteModel.find()
        res.render('index', {
            listaPacientes
        })
    })

    router.post('/agregar', 
        pacienteController.nuevoCliente
    )

    return router
}