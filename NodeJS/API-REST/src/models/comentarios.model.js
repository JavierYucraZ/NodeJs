const mongoose = require('mongoose')
const { Schema } = mongoose

const ComentarioSchema = new Schema({
    comentario : {
        type : String,
        required : true
    },
    descripcion : {
        type : String
    },
    autor : {
        type : Schema.Types.ObjectId,
        ref : 'usuario',
        required : true,
        autopopulate : true
    }
})

//Configuramos autopopulate
ComentarioSchema.plugin(require('mongoose-autopopulate'))


module.exports = mongoose.model('comentario', ComentarioSchema)