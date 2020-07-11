const { createContainer, asClass, asValue, asFunction } = require('awilix')

//Agregamos los nuevos servicios y los registramos en el container
//Despues de configurar nuestro servicio de autenticacion lo importamos y declaramos
const { HomeService, UsuarioService, IdeaService, ComentarioService, AutenticacionService } = require('../services')

//Agregamos los nuevos controladores y los registramos en el container
//Despues de configurar nuestro controlador de autenticacion lo importamos y declaramos
const { HomeController, UsuarioController, IdeaController, ComentarioController, AutenticacionController} = require('../controllers')

//Agregamos las nuevas rutas y las registramos en el container
//Despues de configurar nuestra ruta de autenticacion lo importamos y declaramos
const { HomeRoutes, UsuarioRoutes, IdeaRoutes, ComentarioRoutes, AutenticacionRoutes } = require('../routes/index.routes')


const Routes = require('../routes')
const config = require('../config')
const app = require('.')


//modelos
const { Usuario, Idea, Comentario } = require('../models')
//y lo registramos


//repositorios
const { UsuarioRepository, IdeaRepository, ComentarioRepository } = require('../repositories')
//y los registramos



const container = createContainer()

container.register({
    app : asClass(app).singleton(),
    router : asFunction(Routes).singleton(),
    config : asValue(config)
}).register({
    HomeService : asClass(HomeService).singleton(),


    //registramos los nuevos servicios
    UsuarioService : asClass(UsuarioService).singleton(),
    IdeaService : asClass(IdeaService).singleton(),
    ComentarioService : asClass(ComentarioService).singleton(),
    //Ahora nos dirigimos a crear los controladores
    //empezamos en usuarioController


    //Declaramos el servicio de autenticacion
    AutenticacionService : asClass(AutenticacionService).singleton()
    //ahora vamos a crear el controlador de este servicio
}).register({
    HomeController : asClass(HomeController.bind(HomeController)).singleton(),

    //Registramos los nuevos controladores
    UsuarioController : asClass(UsuarioController.bind(UsuarioController)).singleton(),
    IdeaController : asClass(IdeaController.bind(IdeaController)).singleton(),
    ComentarioController : asClass(ComentarioController.bind(ComentarioController)).singleton(),
    //Ahora nos dirigimos a crear las rutas
    //empezamos con usuarioRoute

    //Registramos nuestro controlador de autenticacion
    AutenticacionController : asClass(AutenticacionController.bind(AutenticacionController)).singleton()
    //Ahora vamos a crear las rutas de nuestra autenticacion
}).register({
    HomeRoutes : asFunction(HomeRoutes).singleton(),

    //Registramos las nuevas rutas
    UsuarioRoutes : asFunction(UsuarioRoutes).singleton(),
    IdeaRoutes : asFunction(IdeaRoutes).singleton(),
    ComentarioRoutes : asFunction(ComentarioRoutes).singleton(),
    //Ya que ahora son funciones inyectables, vamos al index principal
    //de la seccion de routes(index.js) y las configuramos

    //Registramos nuestro controlador de autenticacion
    AutenticacionRoutes : asFunction(AutenticacionRoutes).singleton()
    //regresamos a la carpeta routes y en el archivo de index.js, lo agregamos
}).register({
    Usuario : asValue(Usuario),
    Idea : asValue(Idea),
    Comentario : asValue(Comentario)
    
//Creamos una nueva seccion para nuestro proyecto y creamos una carpeta llamada
//repositories(vendran los repositorios, una capa de acceso a la base de datos)
//debera tener su archivo de index y como primer repositorio tendremos a base.js
}).register({
    UsuarioRepository : asClass(UsuarioRepository).singleton(),
    IdeaRepository : asClass(IdeaRepository).singleton(),
    ComentarioRepository : asClass(ComentarioRepository).singleton()

    //Vamos a crear los servicios
    //Al igual que los repositorios, crearemos primero una plantilla 
    //con los metodos para que los demas servicios lo puedan heredar
})

module.exports = container