module.exports = function(req, res, next){
    const queryStrings = req.query
    for(const key in queryStrings){
        const length = queryStrings[key].length
        /**
         * Generalmente los id que genera mongoose tienen 20 caracteres
         * entonces debemos validar si lo que se enviar por parametro
         * no tiene esa longitud
         * 
         * Una condicional if tradicional se puede convertir en una expresion ternaria
         * gracias a las ultimas versiones de javascript 
         * If tradicional
         * 
         * if(condicion){
         *   Proceso por verdad
         * }else{
         *   Proceso por falso
         * }
         * 
         * If con expresion ternaria
         * 
         * const "valor_a_retornar" = (condificion) ? (algo por verdad) : (algo por falso)
         */
        const esValida = length > 20 ? false : !isNaN(parseInt(queryStrings[key]))
        /**
         * En la expresion anterior validamos si la longitud es mayor a 20 por si se esta enviando un
         * id de mongoose, si es verdad retorna falso y se asigna a la constante esValida, si es falso
         * preguntamos si es un numero con la negacion de isNan(is not a number), y si cumple, entonces
         * hacemos un parseInt(transformacion a entero) del parametro que esta llegando por url
         */

        if(esValida){
            queryStrings[key] = parseInt(queryStrings[key])
        }
    }
    req.query = queryStrings
    next()
}


/**
 * Ahora lo exportamos en el index principal de esta seccion
 */