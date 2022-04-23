//npm i --save express

const express1 = require('express')
const express2 = require('express')
console.log(express1 === express2)


const serve1 = express1()
const serve2 = express1()
console.log(serve1 === serve2) // falso pois sempre cria uma uma unica instancia 


const router1 = express1.Router()
const router2 = express1.Router()
console.log(router1 === router2) // falso pois sempre cria uma uma unica instancia 
