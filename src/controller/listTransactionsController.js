const listTransactionsUseCase = require ('../useCases/listTransactionUseCase')

async function listTransactions ( request,response) {
    const transactions = await listTransactionsUseCase.execute()
    return response.status(200).json(transactions)
}

module.exports= { listTransactions}