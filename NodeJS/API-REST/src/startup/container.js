const { createContainer, asClass, asValue, asFunction } = require('awilix')
const { HomeService } = require('../services')
const { HomeController } = require('../controllers')
const { HomeRoutes } = require('../routes/index.routes')
const Routes = require('../routes')
const config = require('../config')

const container = createContainer()

container.register({
    router : asFunction(Routes).singleton(),
    config : asValue(config)
}).register({
    HomeService : asClass(HomeService).singleton()
}).register({
    HomeController : asClass(HomeController.bind(HomeController)).singleton()
}).register({
    HomeRoutes : asFunction(HomeRoutes).singleton()
})

module.exports = {
    container
}