const Paciente = require('../models/paciente')

exports.nuevoCliente = async (req, res) => {
    const paciente = new Paciente(req.body)
    await paciente.save()
    res.json({
        mensaje : 'El cliente se agrego correctamente'
    })
}
