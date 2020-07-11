const mcache = require('memory-cache')
//Para esto, necesitamos crear una llave que nos permita usar la memoria cache
//vamos a las configuraciones y lo creamos
const { CACHE_KEY } = require('../config')

module.exports = function(duracion){
    return (req, res, next) => {
        const key = CACHE_KEY + req.originalUrl || req.url
        const cacheBody = mcache.get(key)

        if(cacheBody){
            return res.send(JSON.parse(cacheBody))
        }else{
            res.sendResponse = res.send
            res.send = body => {
                mcache.put(key, body, duracion * 1000)
                res.sendResponse(body)
            }
            next()
        }
    }

    /**
     * Ahora vamos a configurar un helper que nos ayude a enviar el tiempo de duracion que tendra la memoria cache
     */
}