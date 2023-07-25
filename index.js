const express = require ('express');
const app = express()

app.get('/', function (request,response){
response.send('API Master class 1')
})

app.listen(3000, ()=>{
    console.log('server linstening on port 3000')
})