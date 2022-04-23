//npm i --save express

const express = require('express')
const server = express()


server.route('/clientes') // visto no postman
    .get((req , res)=> res.send('lista de clientes'))
    .post((req , res)=> res.send('Novo Cliente'))
    .put((req , res)=> res.send('Alterar cliente'))
    .delete((req , res)=> res.send('Remove cliente'))



server.listen(3000, () => console.log('Executando...'))
