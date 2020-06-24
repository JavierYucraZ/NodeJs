const path = require('path')

function render(file, res){
    return res.sendFile(path.join(__dirname + `../public/${file}.html`))
}

class InicioController{
    async index(req, res){
        // return res.send({ menssage : 'No logramos encontrar el archivo index en la carpeta publica' })
        render('index', res)
    }
}

module.exports = new InicioController()