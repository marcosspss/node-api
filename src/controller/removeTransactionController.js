const { json } = require('express')
const removeTransactionUseCase = require('../useCases/removeTransactionUseCase')

async function removeTransaction (request,response) {
const{id} = request.params
await removeTransactionUseCase.execute(id)
return response.json()
}

module.exports = {removeTransaction}