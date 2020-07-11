class BaseService{

    //El constructor recibe un repositorio de cualquier tipo
    //comentario, idea, usuario
    constructor(repository){
        this.repository = repository
    }

    async obtenerPorId(id){
        //Validamos si el id es enviado
        if(!id){
            const error = new Error()
            error.status = 400
            error.message = 'El id debe ser enviado'
            throw error
            /* 
            Este error se conecta directamente con nuestro middleware
            para errores generarles
            error.middleware.js
            */
        }

        //de nuestro repositorio, obtenemos un elemento por su id
        const entidad = await this.repository.obtenerUno(id)

        //en caso de que no exista dicha entidad lanzamos un error
        //para que nuestro middleware se encargue de mostrarlo
        if(!entidad){
            const error = new Error()
            error.status = 404
            error.message = 'La entidad no se pudo encontrar'
            throw error
        }

        return entidad
    }

    //hacemos llegar los parametros que necesita el base repository
    async obtenerTodos(pageSize, pageNum){
        return await this.repository.obtenerTodos(pageSize, pageNum)
        //ahora vamos a usuario.controller y modificamos el metodo obtenerTodos
    }

    async crearRegistro(entidad){
        return await this.repository.crearRegistro(entidad)
    }

    async actualizar(id, entidad){
        //Validamos si el id es enviado
        if(!id){
            const error = new Error()
            error.status = 400
            error.message = 'El id debe ser enviado'
            throw error
        }

        return await this.repository.actualizar(id, entidad)
    }

    async eliminar(id){
        if(!id){
            const error = new Error()
            error.status = 400
            error.message = 'El id debe ser enviado'
            throw error
        }

        return await this.repository.eliminar(id)
    }
    
}

module.exports = BaseService