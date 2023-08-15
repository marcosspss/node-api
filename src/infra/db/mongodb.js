const mongoose = require ('mongoose')

async function startConnection(){
    console.log('TesteMongo')
await mongoose.connect('mongodb://127.0.0.1:27017/test')
console.log('Mongo started connection')
}

async function closeConnection(){
await mongoose.disconnect()
console.log ('Mongo closed connection   ')
}

module.exports = {startConnection, closeConnection}