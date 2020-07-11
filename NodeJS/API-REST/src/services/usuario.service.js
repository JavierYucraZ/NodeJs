const BaseService = require('./base.service')
let _usuarioRepository = null

class UsuarioService extends BaseService{

    constructor({UsuarioRepository}){
        super(UsuarioRepository)
        _usuarioRepository = UsuarioRepository
    }

    async obtenerUsuarioPorNombre(username){
        return await _usuarioRepository.obtenerUsuarioPorNombre(username)
    }

    //vamos a crear el servicio IdeaService
}

module.exports = UsuarioService