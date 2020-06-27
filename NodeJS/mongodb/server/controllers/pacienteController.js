exports.nuevoCliente = (req, res) => {

    console.log(req.body)

    res.json({
        mensaje : 'Cliente agregado correctamente'
    })
}
