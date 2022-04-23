const _ = require('lodash')
//npm i lodash
//npm i lodash --save (ja salva a dependencia na pasta package.json)

const alunos = [{
    nome: 'Rodrigo',
    nota: 7.6   
},{
    nome: 'Thigo',
    nota: 8.6   
}, {
    nome: 'Pedro',
    nota: 8.61  
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)