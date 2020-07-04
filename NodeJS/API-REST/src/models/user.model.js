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


module.exports = mongoose.model('info', UserSchema)