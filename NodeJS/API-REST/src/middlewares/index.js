module.exports = {
    NotFoundMiddleware : require('./not-found.middleware'),
    ErrorMiddleware : require('./error.middleware'),
    AutenticacionMiddleware : require('./autenticacion.middleware'),

    /**
     * Agregamos el middleware de autenticacion a usuario.route.js
     */

    ParseIntMiddleware : require('./parse-int.middleware'),
    /**
     * Ahora vamos a modificar nuestro base.repository
     * en el metodo obtenerTodos
     */

    CacheMiddleware : require('./cache.middleware')
}