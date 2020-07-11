let _usuarioService = null

class UsuarioController {
    
    constructor({UsuarioService}){
        _usuarioService = UsuarioService
    }

    async obtenerPorId(req, res){
        const { usuarioID } = req.params
        const usuario = await _usuarioService.obtenerPorId(usuarioID)
        return res.send(usuario)
    }

    async obtenerTodos(req, res){
        const { pageSize, pageNum } = req.query
        const usuarios = await _usuarioService.obtenerTodos(pageSize, pageNum)
        return res.send(usuarios)

        //ahora tambien modificamos el controller de ideas, en su metodo obtenerTodo
    }

    async actualizar(req, res){
        const { body } = req
        const { usuarioId } = req.params
        const usuarioActualizado = await _usuarioService.actualizar(usuarioId, body)
        return res.send(usuarioActualizado)
    }

    async eliminar(req, res){
        const { usuarioId } = req.params
        const usuarioEliminado = await _usuarioService.eliminar(usuarioId)
        return res.send(usuarioEliminado)
    }
}

module.exports = UsuarioController

//vamos a crear ideaController