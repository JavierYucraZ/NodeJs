/*
Modules, exports, requires

Modules 
Es un bloque de codigo que podemos reutilizar y lo podemos asociar con el trabajo de una funcion
No afectara al desarrollo de nuestro programa principal si no lo llamamos

Exports
Declaramos un modulo como exportable, cuando lo utilizaremos en otro programa

Require
Es una funcion que usa NodeJs para poder cargar los modulos
recibe como un string como parametro
ese string simboliza la url o direccion del modulo que estamos requiriendo

*/

// console.log('Hola mundo desde un modulo')

function saludo(nombre){
    console.log(`Bienvenido ${nombre}`)
}

// module.exports = saludo

/*
Cuando empezamos a utilizar funciones, clases, objetos, arrays
entonces debemos declararlos como exportables, asi cualquier archivo
que haga un require podra utilizarlos
*/

module.exports = {
    saludo,
    numero : 25
}