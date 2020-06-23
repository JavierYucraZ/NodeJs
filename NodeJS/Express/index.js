/* 
NPM -> node package manager
install
Se conecta a los repositorios de la libreria que queremos instalar

Licencias
ISC
Concedemos el permiso para utilizar, copiar, modificar, y/o distribuir
el programa, para cualquier proposito, puede ser con cargo o sin cargo
Siempre y cuando el aviso de copyright y este mismo aviso se adjuten a
las copias

MIT
Concedemos derecho para uso, modificar, publicar, distribuir, sublicenciar,
unir o fusionar, venta de copias
siempre y cuando el aviso de copyright y este mismo aviso se adjunten
a las copias

Existen dos tipos de dependencias
-> Dependencias de desarrollo
-> Dependencias de produccion

*/

const express = require('express')
const server = express()

const fs = require('fs')
const { request } = require('http')
const { response } = require('express')
const inicio = fs.readFileSync('./index.html')
const contacto = fs.readFileSync('./contacto.html')

server.listen(8080, () => {
    console.log('El servidor se ha iniciado en el puerto 8080')
})


/* 
Metodos HTTP(s)

Get -> lectura de un recurso 
Post -> crear un nuevo recurso
Put -> Reemplaza un recursos existente
Patch -> Actualizar una propiedad de un recurso existente
Delete -> Eliminar un recurso

*/

server.get('/', (req, res) => {
    res.write(inicio)
})

function irContacto(req, res){
    return res.write(contacto)
}

server.get('/contacto', irContacto)
