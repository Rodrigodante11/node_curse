//npm i --save express

const express = require('express')
const server = express()

server.get('/',function(req , res , next ){
    console.log('inicio...')  // primeiro a ser chamado
    next()
    console.log('Fim...') // ultimo a ser chamado
})

server.get('/',function(req , res ){
    console.log('Resposta...') // segundo a ser chamado
    res.send('<h1> Ols Express! </h1>')
})

server.listen(3000, () => console.log('Executando...'))
