module.exports = {
    JWTHelper : require('./jwt.helper'),
    CacheTime : require('./cache-time.helper')
    //Ahora vamos a las rutas en las consultas que
    //necesitamos que se queden cache, agreganis el middleware
    //usuarios en el pedido de todos los usuarios
    //podria ser util tambien en idea y el pedido de todas las ideas
}

//ahora procedemos a crear el servicio de autenticacion
//en la carpeta service, creamos autenticacion.service.js