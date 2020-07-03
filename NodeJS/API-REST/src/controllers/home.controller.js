let _homeservice = null

class HomerController{
    
    constructor( {HomeService} ){
        _homeservice = HomeService
    }

    index(req, res){
        return res.send(_homeservice.index())
    }

}

module.exports = HomerController