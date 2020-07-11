const { Router } = require('express')
const { ParseIntMiddleware } = require('../middlewares')

module.exports = function( { IdeaController } ){
    const router = Router()

    router.get('/', ParseIntMiddleware, IdeaController.obtenerTodos)
    /**
     * Una vez actualizada esta ruta con su respectivo middleware
     * se puede decir que el proyecto ya esta funcional
     * Podemos registrar usuarios, iniciar sesion
     * incluso podemos empezar a agregar las ideas, todo esto
     * utilizando postman porque recordemos que este proyecto no tiene
     * un frontend que lo ayude en esos trabajos
     * 
     * Y si bien lo podriamos dejar ahi, uno de los principios que maneja
     * RESTful es el manejo de la cache, para que los resultados de las peticiones
     * se puedan quedar en memoria y asi no volver a realizar ese mismo trabajo
     * ademas que eso tambien genera un comportamiento mucho mas dinamico y rapido
     * con las respuestas
     * 
     * Asi que vamos a crear un middleware que se llame cache.middleware
     * esto se trabaja con la dependencia memory-cache
     */

    router.get('/:ideaID', IdeaController.obtenerPorId)
    router.get('/:ideaID/todas-las-ideas', IdeaController.obtenerIdeasPorUsuario)
    router.post('/', IdeaController.crearIdea)
    router.patch('/ideaID', IdeaController.actualizar)
    router.delete('/ideaID', IdeaController.eliminar)
    router.post('/:ideaID/votos-positivos', IdeaController.votosPositivos)
    router.post('/:ideaID/votos-negativos', IdeaController.votosNegativos)


    return router
}

//Ahora vamos a crear las rutas para los comentarios