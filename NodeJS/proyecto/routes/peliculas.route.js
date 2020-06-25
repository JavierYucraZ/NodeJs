const router = require('express').Router()
const { PeliculasController } = require('../controllers')

router.get('/peliculas', PeliculasController.index)
//Renderiza la pagina

router.get('/peliculas/listado', PeliculasController.get)
//End point para recibir la informacion

router.post('/peliculas', PeliculasController.add)
//End point para agregar peliculas

module.exports = router