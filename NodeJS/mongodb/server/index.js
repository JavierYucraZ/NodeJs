const express = require('express')
const app = express()
const { PORT } = require('./config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/nombredb',{
    /*
        Es una herramienta para analizar cadenas de conexion
        en nuevas versiones
    */
    useNewUrlParser : true,
    /* 
        Elimina la compatibilidad con varias opciones de conexion
        que estan obsoletas con los nuevos motores de
        topologia
    */
    useUnifiedTopology : true,
    /* 
        Devuelve la version premodificada del documento
    */
    useFindAndModify : false
})


app.listen(PORT, () => {
    console.log(`Servidor corriendo sobre el puerto ${PORT}`)
})



