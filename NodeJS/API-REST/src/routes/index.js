const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
require('express-async-errors')
const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares')

//Inyectamos las nuevas rutas y las configuramos
module.exports = function( {HomeRoutes, UsuarioRoutes, IdeaRoutes, ComentarioRoutes, AutenticacionRoutes } ){
    const router = express.Router()
    const apiRoutes = express.Router()


    apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression())

    apiRoutes.use('/home', HomeRoutes)
    
    //Agregamos las nuevas rutas
    apiRoutes.use('/usuario', UsuarioRoutes)
    apiRoutes.use('/idea', IdeaRoutes)
    apiRoutes.use('/comentario', ComentarioRoutes)
    /**
     * Y una vez configuradas podemos ir probando estas rutas desde postman
     * http://localhost:5000/v1/api/home
     * http://localhost:5000/v1/api/usuario
     * http://localhost:5000/v1/api/idea
     * Nota : Comentario no tiene una ruta raiz porque no hay ningun sentido 
     * en traer todos los comentarios
     * Para eso tenemos una ruta que se encarga de traer los comentarios
     * especificos de una idea
     * 
     * Ya que tenemos todo esto configurado y corriendo sin ningun problema
     * Es momento de agregar seguridad para nuestro API
     * Empezamos generando tokens
     * JsonWebTokens(jwt), esto lo creamos en la carpeta helpers
     */


    //Agregamos la nueva ruta
    apiRoutes.use('/autenticacion', AutenticacionRoutes)
    //Una vez agregado, creamos un middleware que se encargara de controlar
    //si un usuario esta autenticado

    
    router.use('/v1/api', apiRoutes)

    //middlewares
    router.use(NotFoundMiddleware)
    router.use(ErrorMiddleware)

    return router


}