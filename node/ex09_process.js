process.stdout.write('Escreva algo: ') // saida padrao


process.stdin.on('data', function(data){ // entrada padrao
    process.stdout.write(`sua resposta foi ${data.toString()} `)
    process.exit()
})