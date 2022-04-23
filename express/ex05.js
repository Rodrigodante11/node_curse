//npm i --save express

const express = require('express')
const server = express()

const router = require('./ex05_routes')

server.use('/api/' , router)

server.listen(3000, () => console.log('Executando...'))

//http://localhost:3000/api/clientes/1
//http://localhost:3000/api/clientes/1000
//http://localhost:3000/api/produtos/1000/canetaaarftredg
