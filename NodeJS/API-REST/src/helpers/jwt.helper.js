//JWT tiene un metodo llamado sign, que sirve para firmar los tokens
const { sign } = require('jsonwebtoken')
/**
 * En las configuraciones, agregamos una referencia hacia un token
 */
const { JWT_SECRET } = require('../config')


module.exports.generarToken = function(usuario){
    /**
     * Retornamos la generacion del token con el metodo sign
     * primer parametro es el usuario como objeto que debe encriptar
     * segundo parametro es la clave secreta de nuestra aplicacion
     * tercer parametro es un atributo que indica el tiempo de expiracion(4h = 4 Hours)
     */
    return sign({usuario}, JWT_SECRET, {expiresIn : '4h'})
}


//Ahora lo exportamos en el index principal de esta seccion