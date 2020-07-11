if(process.env.NODE_ENV !== "production" ){
    require('dotenv').config()
}

module.exports = {
    PORT : process.env.PORT,
    MONGO_URI : process.env.MONGO_URI,
    APPLICATION_NAME : process.env.APPLICATION_NAME,
    //El jsonWebToken vendra desde
    //las variables de entorno(.env)
    //asi que vamos a ese archivo y lo creamos
    //Esto hara el trabajo de mantener informacion de la sesion
    //y el tiempo que se mantendra activa
    JWT_SECRET : process.env.JWT_SECRET,
    
    /**
     * Vamos a configurarlo al archivo .env
     */
    CACHE_KEY : process.env.CACHE_KEY
}