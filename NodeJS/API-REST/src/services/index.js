module.exports = {
    HomeService : require('./home.service'),
    UsuarioService : require('./usuario.service'),
    IdeaService : require('./idea.service'),
    ComentarioService : require('./comentario.service'),
    /**
     * Ya que tenemos nuestros servicios configurados
     * vamos a declararlos en el container
     */


    
    //seccion de autenticacion
    AutenticacionService : require('./autenticacion.service')
    /**
     * Ahora vamos a declararlo en el container
     */
}

