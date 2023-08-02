const repository = require ('../repositories/transactionRepsitory')

function execute (body) {
    repository.create(body)
}


module.exports = {execute}