const TransactionModel = require('../models/transaction')
const {startConnection, closeConnection} = require('../infra/db/mongodb')

class TransactionRepository {
     async create(Transaction) {
        console.log( 'Teste')
        await startConnection()
        await TransactionModel.create(Transaction)
        await closeConnection()
    }

    async findALL() {
        await startConnection()
        const transactions = await TransactionModel.find()
        await closeConnection()
        return transactions
    }
}
module.exports = TransactionRepository