const http = require('http')
const fs = require('fs')

const inicio = fs.readFileSync('./inicio.html')
const nosotros = fs.readFileSync('./nosotros.html')

/* 
Rutas
Cuando hablamos de rutas, realmente estamos hablando de identificadores
que hacen referencia a algun recurso que este dentro de nuestro servidor

imagen.jpg
imagen(1).jpg

Cuando hacemos una peticion tipo get, es una solicitud de informacion o contenido

localhost:8080 -> '/'
localhost:8080/nosotros.html -> /nosotros.html
*/

http.createServer((request, response) => {
    const { url } = request
    console.log(url)
    if(url === '/'){
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.write(inicio)
    }else if(url === '/nosotros'){
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.write(nosotros)
    }else{
        response.writeHead(404, {'Content-Type' : 'text/html'})
        response.write('Lo siento, la pagina no se pudo encontrar')
    }
    response.end()
}).listen(8080)