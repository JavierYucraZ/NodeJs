// API -> application programming interface
// REST -> Representation State Transfer

//API RESTful
//JSon o XML

const container = require('./src/startup/container')
const server = container.resolve('app')
const { MONGO_URI } = container.resolve('config')
const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)

mongoose.connect(MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false
})
.then(() => server.start())
.catch(console.log)