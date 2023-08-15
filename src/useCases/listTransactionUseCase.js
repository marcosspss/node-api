const Repository = require( '../repositories/transactionRepsitory')

async function execute (){
    const repository = new Repository()
    return await repository.findALL()
}

module.exports ={execute}