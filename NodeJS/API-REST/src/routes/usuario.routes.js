const { Router } = require('express')
const { AutenticacionMiddleware, ParseIntMiddleware, CacheMiddleware } = require('../middlewares')
const { CacheTime } = require('../helpers')

module.exports = function( { UsuarioController } ){
    const router = Router()

    //Podemos agregar un middleware en la peticion
    //para que se ejecute antes de resolver la ruta
    router.get('/', [AutenticacionMiddleware, ParseIntMiddleware, CacheMiddleware(CacheTime.UNA_HORA)], UsuarioController.obtenerTodos)
    /***
     * Una vez actualizado esta ruta, ya protegida con el middleware
     * Podemos crear un sistema de paginacion en nuestro api,
     * para ver solo una cantidad de registros por pagina
     * 
     * Los parametros que enviemos por la url siempre viajan 
     * como strings, entonces para enviar tambien la paginacion
     * como un parametro adicional, necesitamos un metodo que nos ayude a
     * transformarlas en numericas para generar la paginacion, entonces
     * Creamos parse-int.middleware.js
     */
    router.get('/:usuarioID', UsuarioController.obtenerPorId)
    router.patch('/usuarioID', UsuarioController.actualizar)
    router.delete('/usuarioID', UsuarioController.eliminar)


    return router
}

//Ahora vamos a crear las rutas para las ideas
