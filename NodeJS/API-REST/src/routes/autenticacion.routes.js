const { Router } = require('express')

module.exports = function( { AutenticacionController } ){
    const router = Router()

    router.post('/registrarse', AutenticacionController.registrarse)
    router.post('/iniciar-sesion', AutenticacionController.iniciarSesion)


    return router
}

//Ahora lo importamos en index.routes