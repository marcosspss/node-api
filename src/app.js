const express = require ('express');
const app = express()
const port = 3000
app.use(express.json())
const transactions = require('./infra/db/dados')

app.get('/transactions', (request,response)=>{
return response.status(200).json(transactions)
})

app.post('/transaction', (request,response)=>{
    const body = request.body
    if(!body.id || !body.type || !body.value){
    return response.status(400).json({error: "Missing type os Value"})
    }
    if (transactions.find( t=> t.id ==body.id)){
    return response.status(400).json({error: "transaction already exists"})    
    }


    transactions.push(body)
    return response.status(201).json(body)
})


module.exports =app