module.exports = {
    HomeRoutes : require('./home.routes'),
    UsuarioRoutes : require('./usuario.routes'),
    IdeaRoutes : require('./idea.routes'),
    ComentarioRoutes : require('./comentario.routes'),
    /**
     * Ahora lo que resta es ir a nuestro container para que
     * awilix las pueda usar como dependencias inyectables
     */




    AutenticacionRoutes : require('./autenticacion.routes')
    /**
     * Ahora vamos a nuestro container y lo registramos
     */
}

