const TransactionModel = require('../models/transaction')
const { startConnection, closeConnection } = require('../infra/db/mongodb')

class TransactionRepository {
    async create(Transaction) {
        try {
            await startConnection()
            await TransactionModel.create(Transaction)
            await closeConnection()
        } catch (err) {
            throw new Error('Erro ao criar transação')
        }
    }


    async findALL() {
        try {
            await startConnection()
            const transactions = await TransactionModel.find()
            await closeConnection()
            return transactions
        } catch (err) {
            throw new Error('Erro ao criar transação')
        }
    }

    async remove(_id) {
        try {
            await startConnection()
            await TransactionModel.deleteOne({ _id })
            await closeConnection()
        } catch (err) {
            throw new Error('Erro ao remover transação')
        }
    }

    async update(_id, data) {
        try {
            await startConnection()
            await TransactionModel.updateOne({ _id }, data)
            await closeConnection()

        } catch (err) {
            throw new Error('Erro ao atualizar transação')
        }
    }
}
module.exports = TransactionRepository