//Para que esta clase pueda heredar de base.repository
//primero lo importamos
const BaseRepository = require('./base.repository')
let _usuario = null

class UsuarioRepository extends BaseRepository{
    /*
    Como ya configuramos los modelos en nuestro container
    podemos usarlos directamente en este constructor
    */
    constructor({ Usuario }){
        super(Usuario)
        _usuario = Usuario
    }

    //Creamos un metodo para obtener un usuario por su nombre de usuario
    async obtenerUsuarioPorNombre(username){
        return await _usuario.findOne({username})
    }

    //y declaramos esta clase como exportable en el index de esta seccion

}

module.exports = UsuarioRepository