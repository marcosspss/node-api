const transactions = require ('../infra/db/dados')

class TransactionRepositoryInMemory {
    create(transaction) {
        transactions.push(transaction)
    }

    findALL() {
        return transactions
    }
}
module.exports = TransactionRepositoryInMemory