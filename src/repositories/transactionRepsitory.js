const transactions = require ('../infra/db/dados')

function create (transaction){
    transactions.push(transaction)
}

function findALL (){
    return transactions
}

module.exports = {create,findALL}