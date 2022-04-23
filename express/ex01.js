//npm i --save express

const express = require('express')
const server = express()

server.get('/',  function(req,res){
    res.send('<h1> Index!</h1>')
})


server.get('/teste',  function(req,res){
    res.send('<h1> Teste!</h1>')
})


server.get(/api/,  function(req,res){ // se tiver essas letras 'api' na urlchama essa funcao
    res.send('<h1> API!</h1>')
    //http://localhost:3000/api/teste
    //http://localhost:3000/qualquercoisaapi
    //http://localhost:3000/bbbbbapi
})

server.listen(3000, () => console.log('Executando...'))
