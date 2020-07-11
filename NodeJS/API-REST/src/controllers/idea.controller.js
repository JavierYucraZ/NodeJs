let _ideaService = null

class IdeaController {
    
    constructor({IdeaService}){
        _ideaService = IdeaService
    }

    async crearIdea(req, res){
        const { body } = req
        const ideaCreada = await _ideaService.crearRegistro(body)
        return res.status(201).send(ideaCreada) 
    }

    async obtenerPorId(req, res){
        const { ideaID } = req.params
        const idea = await _ideaService.obtenerPorId(ideaID)
        return res.send(idea)
    }

    async obtenerTodos(req, res){
        const { pageSize, pageNum } = req.query
        const ideas = await _ideaService.obtenerTodos(pageSize, pageNum)
        return res.send(ideas)

        //ahora vamos a configurar las rutas
        //usuario.routes y idea.routes
    }

    async actualizar(req, res){
        const { body } = req
        const { ideaId } = req.params
        const ideaActualizada = await _ideaService.actualizar(ideaId, body)
        return res.send(ideaActualizada)
    }

    async eliminar(req, res){
        const { ideaId } = req.params
        const ideaEliminada = await _ideaService.eliminar(ideaId)
        return res.send(ideaEliminada)
    }


    async obtenerIdeasPorUsuario(req, res){
        const { usuarioId } = req.params
        const ideas = await _ideaService.obtenerIdeasPorUsuario(usuarioId)
        return res.send(ideas)
    }

    async votosPositivos(req, res){
        const { ideaId } = req.params
        const idea = await _ideaService.votosPositivosIdea(ideaId)
        return idea
    }

    async votosNegativos(req, res){
        const { ideaId } = req.params
        const idea = await _ideaService.votosNegativosIdea(ideaId)
        return idea
    }

}

module.exports = IdeaController


//vamos a crear comentarioController