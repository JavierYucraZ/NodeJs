const BaseService = require('./base.service')
let _comentarioRepository = null, _ideaRepository = null

class ComentarioService extends BaseService{

    constructor({ComentarioRepository, IdeaRepository}){
        super(ComentarioRepository)
        _comentarioRepository = ComentarioService
        _ideaRepository = IdeaRepository
    }

    //traemos los comentarios de una idea en especifico
    async obtenerComentariosIdea(ideaId){
        if(!ideaId){
            const error = new Error()
            error.status = 400
            error.message = "El id de la idea debe enviarse"
            throw error
        }

        const idea = await _ideaRepository.obtenerUno(ideaId)

        if(!idea){
            const error = new Error()
            error.status = 404
            error.message = "La idea no existe"
            throw error
        }

        //desestructuramos el atributo comentario del modelo idea
        const { comentarios } = idea
        return comentarios
    }

    async crearComentario(comentario, ideaId){
        if(!ideaId){
            const error = new Error()
            error.status = 400
            error.message = "El id de la idea debe enviarse"
            throw error
        }

        const idea = await _ideaRepository.obtenerUno(ideaId)

        if(!idea){
            const error = new Error()
            error.status = 404
            error.message = "La idea no existe"
            throw error
        }

        const comentarioNuevo = await _comentarioRepository.crearRegistro(comentario)
        idea.comentarios.push(comentarioNuevo)
        return await _ideaRepository.actualizar(ideaId, {comentarios : idea.comentarios})
    }

    //Ya que tenemos todos los servicios listos, los agregamos al index principal de
    //esta seccion

}

module.exports = ComentarioService