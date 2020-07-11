const mongoose = require('mongoose')
const { Schema } = mongoose

const IdeaSchema = new Schema({
    idea : {
        type : String,
        required : true
    },
    descripcion : {
        type : String,
        required : true
    },
    votosPositivos : [{
        type : Boolean
    }],
    votosNegativos : [{
        type : Boolean
    }],
    //Aca relacionamos el modelo user, con el modelo de idea
    autor : {
        type : Schema.Types.ObjectId,
        //el atributo ref hace el trabajo de enlazar este esquema con el
        //esquema de usuarios
        ref : 'usuario',
        required : true,
        /*
        Ahora, cada vez que busquemos una idea, traiga consigo toda la informacion
        del usuario que la publico, para esto instalaremos una nueva dependencia 
        que nos ayudara en ese trabajo y sea mucho mas facil
        
        npm install mongoose-autopopulate

        */
        autopopulate : true
    },
    //creamos un modelo para los comentarios y creamos el esquema que usara
    comentarios : [{
        type : Schema.Types.ObjectId,
        ref : 'comentario',
        autopopulate : true
    }]
})

//Configuramos autopopulate
IdeaSchema.plugin(require('mongoose-autopopulate'))


module.exports = mongoose.model('idea', IdeaSchema)

//ya que tenemos los 3 modelos vamos a nuestro index principal del directorio models