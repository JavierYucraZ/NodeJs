const BaseRepository = require('./base.repository')
let _comentario = null

class ComentarioRepository extends BaseRepository{

    constructor({ Comentario }){
        super(Comentario)
        _comentario = Comentario
    }


    //y declaramos esta clase como exportable en el index de esta seccion
}

module.exports = ComentarioRepository