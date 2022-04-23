console.log(process.argv)
// process para pegar os dado de entrada quando chama o arquivo pelo node
//node ex08_process --producao outro param

function temParam(param){
    return process.argv.indexOf(param) !== -1
}

if(temParam('--producao')){
    console.log('--producao foi passado')
}else{
    console.log('--producao Nao foi passado')
}