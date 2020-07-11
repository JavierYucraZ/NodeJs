const mongoose = require('mongoose')
const { Schema } = mongoose

const { compareSync, hashSync, genSaltSync } = require('bcryptjs')

const UserSchema = new Schema({
    nombre : {
        type : String,
        required : true
    },
    usuario : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

UserSchema.methods.toJSON = function(){
    let usuario = this.toObject()
    delete usuario.password
    return usuario
}

UserSchema.methods.ComparePasswords = function(password){
    return compareSync(password, this.password)
}

UserSchema.pre('save', async function(next){
    const usuario = this

    if(!usuario.isModified('password')){
        return next()
    }

    const salt = genSaltSync(10)
    const hashedPassword = hashSync(usuario.password, salt)
    usuario.password = hashedPassword
    next()
})


module.exports = mongoose.model('usuario', UserSchema)

/*
Hasta este punto llegamos con las clases, en un principio
la meta era crear un API RESTful que funcione como un login y registro
de usuarios implementando la mejor estructura posible
Trabajando un poco sobre este mismo concepto les presento un proyecto
un poco mejor elaborado y con mas detalles

nota : Cambiamos de
module.exports = mongoose.model('info', UserSchema)
A 
module.exports = mongoose.model('usuario', UserSchema)

no es necesario definir otra coleccion en la base de datos,
mongodb crea automaticamente la nueva coleccion
*/

/*
La tematica sera la siguiente : 

Una aplicacion que funcione como un sistema donde los usuarios
puedan compartir sus ideas con una comunidad que cumpliran el rol
de poder comentar sobre las ideas, dar votos positivos y votos negativos
Ademas cada usuario debe estar autenticado para poder publicar o votar 
sobre alguna idea

Siguiente paso : crear el modelo de la idea
*/