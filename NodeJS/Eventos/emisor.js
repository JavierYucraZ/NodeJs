/* 

Asincronia y Sincronia

Cuando hablamos de asincronia, nos referimos a que mas de un proceso se esta ejecutando
al mismo tiempo

Sincronia, es lo contrario, quiere decir que solo puede ejecutarse un proceso al mismo tiempo

Javascript es sincrono
 Ejecuta linea por linea, nunca tendremos dos lineas ejecutandose al mismo tiempo

NodeJS es asincrono
 mientras v8 va ejecutando el codigo de javascript, de manera sincrona y lo va convirtiendo
 al lenguaje de maquina que entiende el servidor
 NodeJs puede seguir trabajando en otro codigo

Eventos y emisores de eventos
 En NodeJs tenemos dos tipos de eventos
  Eventos del sistema, la libreria que utilizan los eventos de sistema se llama LibUV
  Eventos personalizados, son eventos que nos ayudan a manipular nuestra aplicacion
*/

function Emitter(){
    this.events = {}
}

Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || []
    this.events[type].push(listener)
}

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach((listener) => listener())
    }
}

module.exports = Emitter
