const express = require('express')
const router = express.Router()
const pacienteController = require('../controllers/pacienteController')
const PacienteModel = require('../models/paciente')

module.exports = function(){

    //Listar todos los pacientes en el index
    router.get('/', async (req, res) => {
        const listaPacientes = await PacienteModel.find()
        res.render('index', {
            listaPacientes
        })
    })

    //Agregar un nuevo registro
    router.post('/agregar', 
        pacienteController.nuevoCliente
    )

    //Eliminar un registro
    router.get('/eliminar/:id', async (req, res) => {
        const { id } = req.params
        await PacienteModel.deleteOne({ _id : id })
        res.redirect('/')
    })

    //Realizamos la busqueda por id
    //Renderizamos la pagina de editar
    //Enviamos la informacion del paciente encontrado
    router.get('/editar/:id', async (req, res) => {
        const { id } = req.params
        const paciente = await PacienteModel.findById(id)
        res.render('editar', {
            paciente
        })
    })

    //Obtiene el id por parametro
    //Compara con los id de la base de datos
    //Reemplaza el objeto encontrado con la nueva informacion
    router.post('/editar/:id', async(req, res) => {
        const { id } = req.params
        await PacienteModel.updateOne({ _id : id }, req.body)
        res.redirect('/') 
    })

    return router
}