const express = require ('express');
const port = 3000
const routes = require('./infra/routes')

const app = express()
app.use(express.json())
app.use(routes)
    
module.exports = app