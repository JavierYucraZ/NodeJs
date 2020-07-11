const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')

module.exports = function(req, res, next){
    /**
     * aca agregamos el token de autorizacion para que
     * solo los usuarios loggeados puedan realizar peticiones
     * 
     * 
     * Podemos proteger cualquier peticion a cualquier ruta agregando este
     * middleware, asi siempre pedira un token de autorizacion y no dejara 
     * pasar las peticiones que no lo tengan
     * 
     * Cuando utilizamos la ruta tipo post de registro, veremos en la respuesta
     * los datos del usuario, inmediatamente deberiamos hacer un inicio de sesion
     * lo cual nos mostrara la informacion del usuario y como un dato adicional
     * deberia mostrarse tambien el token que se genera automaticamente para ese usuario
     * 
     * en postman, existe una seccion llamada headers
     * ingresamos y para cualquier peticion que este protegida por este middleware
     * debemos agregar un nuevo key llamado autorizacion y en su value
     * pegar el token que se genero al iniciar sesion
     * Solo asi podremos empezar a realizar las peticiones
     */
    const token = req.headers['autorizacion']
    
    if(!token){
        const error = new Error()
        error.message = 'El token debe ser enviado'
        error.status = 400
        throw error
    }

    jwt.verify(token, JWT_SECRET, function(error, tokenDecodificado){
        if(error){
            const error = new Error()
            error.message = 'El token es invalido'
            error.status = 401
            throw error
        }

        req.usuario = tokenDecodificado.usuario
        next()
    })
}

/**
 * Ahora podemos ir a probar las rutas que agregamos para la autenticacion 
 * http://localhost:5000/v1/api/autenticacion/registrarse
 * Utilizamos postman para probar la ruta, con un metodo post
 * ingresamos a la seccion body para declarar los datos necesarios segun dicta nuestro modelo de usuarios
 * marcamos raw y cambiamos el formato de text a json
 * 
 * Si todo esta correcto, entonces el envio por el metodo post se realiza correctamente y en la 
 * respuesta nos deberia salir el usuario que acabamos de crear con el id, nombre, usuario
 * 
 * Y despues de crear el usurio podriamos probar la ruta que sirve para inicio de sesion
 * http://localhost:5000/v1/api/autenticacion/iniciar-sesion
 * Quitamos el nombre del envio
 * y podemos ver que genera un token para identificar la sesion de usuario
 * ademas que tampoco se devuelve la contraseña porque tenemos el metodo que se encarga de quitarla
 * 
 * Tambien podemos mostrar la lista de usuarios creados simplemente haciendo una peticion get
 * hacia la ruta correspondiente 
 * 
 * Entonces ya que todo funciona, vamos a exportar este middleware en el index
 */
