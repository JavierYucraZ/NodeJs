const express = require('express')
const app = express()
const { PORT } = require('./config')
const mongoose = require('mongoose')
const routes = require('./routes')
const bodyParser = require('body-parser')
const path = require('path')

mongoose.Promise = global.Promise

app.set('views', path.join(__dirname+'/views'))
app.set('view engine', 'ejs')

const uri = 'mongodb+srv://Javier:nodejseducomser@cluster0-2cab2.mongodb.net/veterinaria?retryWrites=true&w=majority'


mongoose.connect(uri,{
    /*
        Es una herramienta para analizar cadenas de conexion
        en nuevas versiones
    */
    useNewUrlParser : true,
    /* 
        Elimina la compatibilidad con varias opciones de conexion
        que estan obsoletas con los nuevos motores de
        topologia
    */
    useUnifiedTopology : true,
    /* 
        Devuelve la version premodificada del documento
    */
    useFindAndModify : false
})
.then(console.log('Base de datos, conectada'))
.catch(error => console.log(error))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use('/', routes())


app.listen(PORT, () => {
    console.log(`Servidor corriendo sobre el puerto ${PORT}`)
})


/* 

docker build -t nombre_proyecto

*/
