// const modulo = require('./modulos')
/* 
Cada vez que nosotros utilicemos un require, nodejs guarda en cache la instancia del modulo
*/

// modulo('Javier')

const { saludo, numero } = require('./modulos')

/*
Desestructuracion : nos permite extraer valores almacenados en arreglos u objetos
Destructuracion
*/

saludo('Javier')
console.log(numero)