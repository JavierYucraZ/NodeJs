const Emitter = require('./emisor')

const emitter = new Emitter()

emitter.on('guardar', () => {
    console.log('Se activo el evento guardar')
})

emitter.on('guardar', () => {
    console.log('Se activo el evento guardar 2')
})

emitter.emit('guardar')