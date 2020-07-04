module.exports = (error, req, res) => {
    
    const httpStatus = error.status || 500

    return rest.status(httpStatus).send({
        status : httpStatus,
        message : error.message || 'Error interno del servidor'
    })

}