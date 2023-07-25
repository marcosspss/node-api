const express = require ('express');
const app = express()
const port = 3000
const message = {mesage: 'API OK'}

app.get('/', function (request,response){
response.status(200).json(message)
})

app.listen(port, ()=>{
    console.log(`Server linstening on ${port}`)
})