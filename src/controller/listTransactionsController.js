const listTransactionsUseCase = require ('../useCases/listTransactionUseCase')

function listTransactions ( request,reposnse) {
    listTransactionsUseCase.execute()
    return response.status(200).json(transactions)
}

module.exports= { listTransactions}