const BaseService = require('./base.service')
let _ideaRepository = null

class IdeaService extends BaseService{

    constructor({IdeaRepository}){
        super(IdeaRepository)
        _ideaRepository = IdeaService
    }

    async obtenerIdeasPorUsuario(autor){
        //verificamos si existe ese autor
        if(!autor){
            const error = new Error()
            error.status = 400
            error.message = "El autor debe enviarse"
            throw error
        }

        return await _ideaRepository.obtenerIdeasPorUsuario(autor)
    }


    async votosPositivosIdea(ideaID){
        if(!ideaID){
            const error = new Error()
            error.status = 400
            error.message = "El id de la idea debe enviarse"
            throw error
        }

        const idea = await _ideaRepository.obtenerUno(ideaID)

        if(!idea){
            const error = new Error()
            error.status = 404
            error.message = "La idea no existe"
            throw error
        }

        //utilizamos el atributo del esquema de ideas
        //para agregarle un nuevo valor con push ya que es un arreglo
        idea.votosPositivos.push(true)

        //Utilizamos el metodo actualizar de los repositorios
        //para enviarlo a la base de datos
        return await _ideaRepository.actualizar(ideaID,{votosPositivos : idea.votosPositivos})

    }

    async votosNegativosIdea(ideaID){
        if(!ideaID){
            const error = new Error()
            error.status = 400
            error.message = "El id de la idea debe enviarse"
            throw error
        }

        const idea = await _ideaRepository.obtenerUno(ideaID)

        if(!idea){
            const error = new Error()
            error.status = 404
            error.message = "La idea no existe"
            throw error
        }

        idea.votosNegativos.push(true)

        return await _ideaRepository.actualizar(ideaID,{votosNegativos : idea.votosNegativos})

    }

    //vamos a crear el servicio ComentarioService

}

module.exports = IdeaService