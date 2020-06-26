// JSON -> Javascript object notation
const express = require('express')
const server = express()
const { PORT } = require('./config')
const { InicioRoute, PeliculasRoute } = require('./routes')
const { NotFoundMiddleware } = require('./middleware')

//Rutas
server.use('/', InicioRoute)
server.use('/', PeliculasRoute)

/* 
Middleware
Es un bloque de codigo que se ejecuta entre la peticion que
hace el usuario hasta que llega al servidor
Es un intermediario

*/
//Middlewares
server.use(express.static('./public'))
server.use(express.json())
server.use(NotFoundMiddleware)

server.listen(PORT, ()=> {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})




