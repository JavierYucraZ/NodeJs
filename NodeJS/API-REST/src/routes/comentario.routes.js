const { Router } = require('express')

module.exports = function( { ComentarioController } ){
    const router = Router()

    router.get('/:comentarioID/comment', ComentarioController.obtenerPorId)
    router.get('/:ideaID', ComentarioController.obtenerComentariosIdea)
    router.post('/:ideaId', ComentarioController.crearComentario)
    router.patch('/:comentarioID', ComentarioController.actualizar)
    router.delete('/:comentarioID', ComentarioController.eliminar)


    return router
}

/**
 Ya que tenemos todas las rutas configuradas,
 vamos a exportarlas en index.routes.js 
 */