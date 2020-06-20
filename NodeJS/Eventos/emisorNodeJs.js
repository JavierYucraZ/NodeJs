const { EventEmitter } = require('events')
const { Save } = require('./nombres-eventos')

const emitter = new EventEmitter()

emitter.on(Save, () => {
    console.log('Usando los emisores de NodeJs')
})

emitter.emit(Save)

/* 
String magic
*/