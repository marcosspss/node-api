const Repository = require ('../repositories/transactionRepository')


async function execute (body) {
    try{
    const repository = new Repository()
   await repository.create(body)
   return { sucess:true}
} catch (err){
    throw new Error ('Erro ao criar transação')
}
}


module.exports = {execute}