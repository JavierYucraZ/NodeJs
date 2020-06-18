// Tipos de datos Primitivos

/* 
String -> cadena de texto representada en el interior de comillas simples, comillas dobles
comillas invertidas 

Number -> Numeros reales o enteros

Boolean -> valores que oscilan entre verdadero y falso

Array -> Son una coleccion de datos que podemos ir agregando secuencialmente en un arreglo, indice inicial
empieza en 0

Set 
Maps

Function -> es un bloque de un programa dentro de nuestro mismo programa, no se ejecuta hasta que se invoque

null -> ausencia de valor

undefined -> el valor no se ha definido o creado

*/

//Variables y constantes
/* 

let = var = variable
const = constante 

son espacios que reservamos en memoria para utilizar despues

*/

//Operadores Logicos
/*

== igualdad
=== igualdad exacta
!= diferencia
<
>
<=
>=

&&
||

*/

//Sentencias condicionales
// const edad = 10
// if(edad >= 18){
// 	console.log('eres mayor de edad')
// }else{
// 	console.log('aun no tienes la mayoria de edad')
// }

// const calificacion = 25
// if(calificacion > 91){
// 	console.log('Tienes un muy alto rendimiento')
// }else if(calificacion > 71 && calificacion < 90){
// 	console.log('Tienes un rendimiento alto')
// }else if(calificacion > 51 && calificacion < 70){
// 	console.log('Tienes un rendimiento promedio')
// }else if(calificacion < 51){
// 	console.log('Lo siento, reprobaste')
// }


// let n1 = 20
// let n2 = 30
// const operacion = 'suma'

// switch (operacion) {
// 	case 'sumar':
// 		console.log(n1+n2)
// 		break;
// 	case 'restar':
// 		console.log(n1-n2)
// 		break;
// 	case 'multiplicacion':
// 		console.log(n1*n2)
// 		break;
// 	case 'division':
// 		console.log(n1/n2)
// 		break;
// 	default:
// 		console.log('Operacion no valida')
// 		break;
// }

//Objetos
//Object es un dato primitivo y ademas es el padre de todos los demas tipos
{
	nombre : 'Javier'
}

// const persona = {
// 	nombre : 'Javier',
// 	profesion : 'Desarrollador Web'
// }

// console.log(persona.profesion)

// class Persona {
// 	nombre
// 	apellido
	
// 	constructor(nombre, apellido){
// 		this.nombre = nombre
// 		this.apellido = apellido
// 	}

// 	getNombre(){
// 		return this.nombre
// 	}

// 	setNombre(nombre){
// 		this.nombre = nombre
// 	}

// 	obtenerDatosCompletos(){
// 		return `Nombre : ${this.nombre}, Apellido : ${this.apellido}`
// 	}
// }

// let persona = new Persona('Javier', 'Yucra')
// console.log(persona)
// console.log(persona.obtenerDatosCompletos())

//Arreglos
// const arreglo = new Array()
// const arreglo = [
// 	'Brasil',//0
// 	'Inglaterra',//1
// 	'Alemania',//2
// 	25,//3
// 	true,//4
// 	{
// 		nombre : 'Javier',
// 		apellido : 'Yucra'
// 	},//5
// 	//funcion anonima
// 	function(){
// 		console.log('Funcion en un arreglo')
// 		return ''
// 	}//6
// ]

// console.log(arreglo[6]())

//Set, no permite agregar elementos repetidos
// const CI = new Set()
// CI.add(123)
// CI.add(123)
// CI.add(123)
// CI.add(123)
// CI.add(123)
// CI.add(123)
// CI.add(123)
// CI.add(234)

// console.log(CI)

//Map, trabaja con la estructura llave : valor 
// const estudiante = new Map()
// estudiante.set('nombre', 'Javier')
// estudiante.set('apellido', 'Yucra')
// console.log(estudiante.get('apellido'))


//Estructuras repetitivas o Bucles
const ciudades = [
	'La Paz',
	'Cochabamba',
	'Santa Cruz',
	'Pando'
]

// for (let index = 0; index < ciudades.length; index++) {
// 	console.log(ciudades[index])
// }

//For of
//For in

// for (const ciudad of ciudades) {
// 	console.log(ciudad)
// }

const peliculas = [
	{titulo : 'Django', genero : 'Western'},
	{titulo : 'Star Wars', genero : 'Ciencia Ficcion'},
	{titulo : 'Shrek', genero : 'Animada'}
]

// for (const key in peliculas) {
// 	console.log(peliculas[key].titulo)
// }

//trabajar mientras ocurra la condicion
let n = 4
// while (n != 4) {
// 	n = Math.round(Math.random()*(7 - 1))
// 	console.log(n)
// }

//trabajar hasta que ocurra la condicion
// do {
// 	n = Math.round(Math.random()*(7 - 1))
// 	console.log(n)
// } while (n != 4)

//Funciones
function imprimir(parametro){
	console.log(parametro)
}

let colores = [
	'Rojo',
	'Verde',
	'Azul',
	'Negro'
]

// for (const color of colores) {
// 	imprimir(color)
// }

//Funciones flecha
const saludo = (nombre) => {
	console.log(`Bienvenido ${nombre}`)
}

// saludo('Javier')

//callback
/* 
Es una funcion que puede ser utilizada como parametro de otra funcion
*/

// setTimeout(function(){
// 	console.log('Hola mundo desde un setTimeout')
// },2000)

// function sumar(n1, n2){
// 	return n1+n2
// }

// function restar(n1, n2){
// 	return n1-n2
// }

// function operar(n1,n2, operacion){
// 	return console.log(operacion(n1,n2))
// }

// const resultado = operar(1, 2, restar)
// console.log(resultado)


const librosDB = [
	{id : 1, titulo : 'Harry Potter y la Piedra Filosofal', autorID : 1},
	{id : 2, titulo : 'El Nombre del Viento', autorID : 2},
	{id : 3, titulo : 'La Torre Oscura', autorID : 3}
]

const autoresDB = [
	{id : 1, nombre : 'J. K. Rowling'},
	{id : 2, nombre : 'Patrick Rothfus'},
	{id : 3, nombre : 'Stephen King'}
]

// function obtenerLibroByID(id, funcion){
// 	const libro = librosDB.find( libro => libro.id === id )
// 	//si no lo encuentra, le asigina un valor null
// 	//null en una sentencia if, automaticamente se convierte en un valor false
// 	if(!libro){
// 		const error = new Error()
// 		error.message = 'El libro no se encuentra en nuestra base de datos'
// 		return funcion(error)
// 	}
// 	funcion(null, libro)
// }

// function obtenerAutorByID(id, funcion){
// 	const autor = autoresDB.find( autor => autor.id === id )
// 	if(!autor){
// 		const error = new Error()
// 		error.message = 'El autor no se encuentra en nuestra base de datos'
// 		return funcion(error)
// 	}
// 	funcion(null, autor)
// }


// obtenerLibroByID(1, (error, libro) => {
// 	if(error){
// 		return console.log(error.message)
// 	}
// 	obtenerAutorByID(libro.id, (error, autor) => {
// 		if(error){
// 			return console.log(error.message)
// 		}
// 		console.log(`El libro ${libro.titulo} fue escrito por ${autor.nombre}`)
// 	})
// 	// console.log(libro.titulo)
// })

//Promesa
/* 

Son la mejor alternativa a los callbacks

Es un objeto que representa la respuesta satisfactoria o el fracaso de una
operacion asincrona

then() => llega la informacion siempre y cuando la respuesta sea positiva
catch() => llega el error

promise hell
*/

// function obtenerLibroByID(id){
// 	return new Promise((resolve, reject) => {
// 		const libro = librosDB.find( libro => libro.id === id )
// 		if(!libro){
// 			const error = new Error()
// 			error.message = 'El libro no se encuentra en nuestra base de datos'
// 			reject(error)
// 		}
// 		resolve(libro)
// 	})
// }

// function obtenerAutorByID(id){
// 	return new Promise((resolve, reject) => {
// 		const autor = autoresDB.find( autor => autor.id === id )
// 		if(!autor){
// 			const error = new Error()
// 			error.message = 'El autor no se encuentra en nuestra base de datos'
// 			reject(error)
// 		}
// 		resolve(autor)
// 	})
// }

obtenerLibroByID(1)
.then(libro => {
	return obtenerAutorByID(libro.id)
	.then(autor => {
		console.log(`El libro ${libro.titulo} fue escrito por ${autor.nombre}`)
	})
	.catch(error => {
		console.log(error.message)
	})
})
.catch(error => {
	console.log(error.message)
})


//Async Await
/* 

Empezaron en C# y luego, a partir de la version 6 de javascript se adoptaron

Async : Cuando llamamos a una funcion async, el resultado que nos devuelve es una promesa
Await : Cuando usamos await, esto ocasiona que la funcion declarada como async se detenga hasta que
el promise haya terminado su proceso y cuando lo termina, el resultado del await sera una promesa

Cuando utilizamos async await tenemos un codigo mas limpio, mejor control de las excepciones
Siempre que sea posible, las deberiamos utilizar

*/

async function obtenerLibroByID(id){
	const libro = librosDB.find( libro => libro.id === id )
	if(!libro){
		const error = new Error()
		error.message = 'El libro no se encuentra en nuestra base de datos'
		throw error
	}
	return libro
}

async function obtenerAutorByID(id){
	const autor = autoresDB.find( autor => autor.id === id )
	if(!autor){
		const error = new Error()
		error.message = 'El autor no se encuentra en nuestra base de datos'
		throw error		
	}
	return autor
}

async function principal(){
	try {
		const libro = await obtenerLibroByID(1)
		const autor = await obtenerAutorByID(libro.autorID)
		console.log(`El libro ${libro.titulo} fue escrito por ${autor.nombre}`)	
	} catch (error) {
		console.log(error.message)
	}
	
}
principal()
