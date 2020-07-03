const express = require('express')
let _express = null
let _config = null

class Server{
    constructor({config, router}){
        _config = config
        _express = router
    }

    start(){
        return new Promise(resolve => {
            _express.listen(_config.PORT, () => {
                console.log(_config.APPLICATION_NAME+' esta corriendo en el puerto '+_config.PORT)
                resolve()
            })
        })
    }
}