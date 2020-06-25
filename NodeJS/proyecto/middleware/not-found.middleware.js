module.exports = function(req, res){
    return res.status(404).send({message : 'Pagina no encontrada'})
}