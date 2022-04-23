//npm i --save express

const express = require('express')
const server = express()

// com GET a url tem q ser igual a chamada
// com USE nao precisa ser totalmente igual

server.use('/api',function(req , res , next ){  //http://localhost:3000/api/batmanqualquercoisa mesmo assim funfa
    console.log('inicio...')  // primeiro a ser chamado
    next()
    console.log('Fim...') // ultimo a ser chamado
})

server.use('/api',function(req , res ){
    console.log('Resposta...') // segundo a ser chamado
    res.send('<h1> API! </h1>')
})

server.listen(3000, () => console.log('Executando...'))
