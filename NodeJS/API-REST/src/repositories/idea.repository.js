const BaseRepository = require('./base.repository')
let _idea = null

class IdeaRepository extends BaseRepository{

    constructor({Idea}){
        super(Idea)
        _idea = Idea
    }

    //Creamos un metodo para obtener todas las ideas de un usuario
    async obtenerIdeasPorUsuario(autor){
        return await _idea.find({ autor })
    }

    //y declaramos esta clase como exportable en el index de esta seccion
}

module.exports = IdeaRepository