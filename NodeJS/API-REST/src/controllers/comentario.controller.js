let _comentarioService = null

class ComentarioController {
    
    constructor({ComentarioService}){
        _comentarioService = ComentarioService
    }

    async crearComentario(req, res){
        const { body } = req
        const { ideaId } = req.params
        const comentarioCreado = await _comentarioService.crearComentario(body, ideaId)
        return res.status(201).send(comentarioCreado) 
    }

    async obtenerPorId(req, res){
        const { comentarioID } = req.params
        const usuario = await _comentarioService.obtenerPorId(comentarioID)
        return res.send(usuario)
    }

    async actualizar(req, res){
        const { body } = req
        const { comentarioId } = req.params
        const comentarioActualizado = await _comentarioService.actualizar(comentarioId, body)
        return res.send(comentarioActualizado)
    }

    async eliminar(req, res){
        const { comentarioId } = req.params
        const comentarioEliminado = await _comentarioService.eliminar(comentarioId)
        return res.send(comentarioEliminado)
    }

    async obtenerComentariosIdea(req, res){
        const { ideaId } = req.params
        const comentarios = await _comentarioService.obtenerComentariosIdea(ideaId)
        return res.send(comentarios)
    }
}

module.exports = ComentarioController

//Ya que tenemos todos los controladores creados, vamos al index de esta seccion
//y los exportamos