const { EventEmitter } = require('events')

const emitter = new EventEmitter()

emitter.on('guardar', () => {
    console.log('Usando los emisores de NodeJs')
})

emitter.emit('guardar')