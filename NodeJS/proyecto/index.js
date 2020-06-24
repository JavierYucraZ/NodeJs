const express = require('express')
const server = express()
const { PORT } = require('./config')
const { InicioRoute } = require('./routes')

server.listen(PORT, ()=> {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})

/* 
Middleware
Es un bloque de codigo que se ejecuta entre la peticion que
hace el usuario hasta que llega al servidor

Es un intermediario
*/

//static
server.use(express.static('./public'))
server.use(express.json())


server.use('/', InicioRoute)

