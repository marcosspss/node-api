const Repository = require( '../repositories/transactionRepository')

async function execute (){
    const repository = new Repository()
    return await repository.findALL()
}

module.exports ={execute}