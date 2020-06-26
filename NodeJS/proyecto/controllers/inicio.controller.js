const path = require('path')

function render(file, res){
    return res.sendFile(path.join(__dirname + `/../public/${file}.html`))
}

class InicioController{
    async index(req, res){
        render('index', res)
    }
}

module.exports = new InicioController()