const { generarToken } = require('../helpers/jwt.helper')
let _usuarioService = null

class AutenticacionService {

    constructor({UsuarioService}){
        _usuarioService = UsuarioService
    }

    async registrarse(usuario){
        return await _usuarioService.crearRegistro(usuario)
    }


    async iniciarSesion(usuario){
        const { username, password } = usuario
        const existeUsuario = await _usuarioService.obtenerUsuarioPorNombre(username)
        if(!existeUsuario){
            const error = new Error()
            error.status = 404
            error.message = 'El usuario no existe'
            throw error
        }
        
        //validamos si la contraseña que se esta enviando
        //es igual a la contraseña encriptada que tenemos almacenada
        const validacionPass = existeUsuario.ComparePasswords(password)
        if(!validacionPass){
            const error = new Error()
            error.status = 400
            error.message = 'Credenciales invalidas'
            throw error
        }

        const usuario_codificar = {
            usuario : existeUsuario.usuario,
            id : existeUsuario._id
        }

        const token = generarToken(usuario_codificar)

        return { token, usuario : existeUsuario}

    }
}

module.exports = AutenticacionService

//y ahora lo exportamos en el index de esta seccion