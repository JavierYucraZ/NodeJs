module.exports = {
    Usuario : require('./user.model'),
    Idea : require('./idea.model'),
    Comentario : require('./comentarios.model')
}

//Ya que esta exportable, vamos a nuestro container 
//para que pueda ser inyectado como dependecia