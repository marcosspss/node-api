const repository = require( '../repositories/transactionRepsitory')

function execute (){
    repository.findALL()
}

module.exports ={execute}