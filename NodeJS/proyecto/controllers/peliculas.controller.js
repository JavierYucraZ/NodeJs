const path = require('path')
const DB_PATH = path.join(__dirname +'/../data/db.json')
let db = require(DB_PATH)
const fs = require('fs')

function render(file, res){
	return res.sendFile(path.join(__dirname + `../public/${file}.html`))
}

class PeliculasController{
    
	async index(req, res){
		return render('peliculas', res)
	}

	async get(req, res){
		return res.send(db)
	}

	async add(req, res){
		const { body : pelicula } = req
		const ultimaPelicula = db[db.length -1]
		const { id } = ultimaPelicula
		console.log(pelicula)
		// pelicula.id = id + 1
		// db.push(pelicula)
		// fs.writeFileSync(DB_PATH, JSON.stringify(db))
		// return res.status(201).send()
	}
}

module.exports = new PeliculasController()

