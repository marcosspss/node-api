const repository = require('../repositories/transactionRepository')
async function execute (id,data){
const repository =  new Repository()
await repository.updade(id,data)
}

module.exports = {execute}