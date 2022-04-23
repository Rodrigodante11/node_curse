const http =  require('http')
const server = http.createServer(function(req, res){
    res.writeHead(200, {"context-type": "text/html"})
    res.end('<h1> Acho que eh melhor usar o Express</h1>')
})

const porta = 3456
server.listen(porta , function(){
    console.log(`Escutando a ${porta}`)
})

// navegador http://localhost:3456/