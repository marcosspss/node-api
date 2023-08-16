const Repository = require('../repositories/transactionRepository')

async function execute (id) {
const repository = new Repository()
await repository.remove(id)
}

module.exports = {execute}