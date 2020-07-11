module.exports = {
    HomeController : require('./home.controller'),
    UsuarioController : require('./usuario.controller'),
    IdeaController : require('./idea.controller'),
    ComentarioController : require('./comentario.controller'),
    /**
    * Ya que tenemos nuestros controladores creados
    * ahora los declaramos en nuestro container
    */


    
    AutenticacionController : require('./autenticacion.controller')
    /**
     * Y ahora vamos al container para configurarlo
     */

}

