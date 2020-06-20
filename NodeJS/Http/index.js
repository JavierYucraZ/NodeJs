/* 

Http : Protocolo de transferencia de informacion de diferentes servicios
s : secure

Servidor web
Se puede entender como un software es el encargado de enviar contenido de un sitio web al usuario

NodeJS tiene la capacidad de crear sus propios servidores
Tiene poca tolerancia de errores
Hay varios frameworks que nos ayudan a crear servidores
Express

*/

const http = require('http')
const fs = require('fs')
//FileSystem
const pagina = fs.readFileSync('./index.html')

/*
Puede recibir una lista de opciones(request, response)
tambien recibe un listener
*/

// http.createServer((request, response) => {
//     response.write('Saludo desde mi primer servidor en Node')
//     response.end()
// }).listen(8080)


http.createServer((request, response) => {
    /* 
    Tipos de status en peticiones http
    100 -> respuestas informativas
    200 -> peticiones correctas
        200 : OK, respuesta estandar, todo bien
    300 -> redirecciones
    400 -> errores del cliente, el cliente no es el usuario, es el navegador
        404 : Not Found, Cuando el servidor no puede encontrar el recurso solicitado
    500 -> errores del servidor, el servidor falla al completar la solicitud
        504 : Gateway Timeout, cuando el tiempo de respuesta sobrepasa lo estimado
            o directamente no hay respuesta
    */
   response.writeHead(200, {'Content-Type' : 'text/html'})
   response.write(pagina)
   response.end()
}).listen(8080)