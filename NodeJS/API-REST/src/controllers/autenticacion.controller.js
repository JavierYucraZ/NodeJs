let _autenticacionService = null

class AutenticacionController{
    constructor({AutenticacionService}){
        _autenticacionService = AutenticacionService
    }


    async registrarse(req, res){
        const { body } = req
        const usuarioCreado = await _autenticacionService.registrarse(body)
        return res.status(201).send(usuarioCreado)
    }

    async iniciarSesion(req, res){
        const { body } = req
        const credenciales = await _autenticacionService.iniciarSesion(body)
        return res.status(200).send(credenciales)
    }
}

module.exports = AutenticacionController

//Ahora lo exportamos en el index de esta seccion