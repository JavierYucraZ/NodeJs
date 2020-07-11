/* 
Este repositorio nos servira como un crud
para la base de datos
*/
class BaseRepository {
    /*
    Creamos los metodos tradicionales de un CRUD
    Crear, leer, actualizar, borrar
    */

    //Un constructor que recibe un modelo para poder trabajar
    constructor(model){
       this.model = model 
    }

    //Su trabajo sera obtener un registro de mongo mediante su id
   async obtenerUno(id){
       return await this.model.findById(id)
   }

   //Obtiene todos los registros de la base de datos
   //Modificamos para limitar la cantidad de recursos que traera desde mongodb
   //pageSize, servira para decirle que por defecto traiga esa cantidad de registros
   //pageNum, servira para indicar la pagina por defecto que mostrara
   async obtenerTodos(pageSize = 5, pageNum = 1){
       /**
        * Tenemos dos metodos que tiene mongoose para generar
        * este tipo de limitaciones
        * skip - le dice a mongoose cuantas paginas debe saltar para su siguiente busqueda
        * limit - le dice a mongoose cuantos elementos mostrara en su retorno
        */
       const skips = pageSize * (pageNum-1)
       return await this.model.find().skip(skips).limit(pageSize)
       /**
        * Ahora vamos a modificar nuestro base service
        */
   }

   async crearRegistro(entidad){
    //    console.log('entidad')
       return await this.model.create(entidad)
   }

   async actualizar(id, entitad){
       return await this.model.findByIdAndUpdate(id, entitad, {
           /*
           Este atributo le dice a mongoose que nos devuelva 
           la entidad que ha sido actualizada
           */
           new : true
       })
   }

   async eliminar(id){
       await this.model.findByIdAndDelete(id)
       //devolvemos un true como respuesta si el usuario se elimina correctamente
       return true
   }
   

   /* 
   Como esta es solo una plantilla que heredara sus metodos
   ahora creamos los repositorios para cada modelo
   */
}

module.exports = BaseRepository