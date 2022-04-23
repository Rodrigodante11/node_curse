//npm i --save express

const express = require('express')
const router = express.Router()

router.use((req,res,next) =>{
    const init =Date.now()
    next()
    console.log(`tempo = ${Date.now() - init} ms.`)
})

router.get('/produtos/:id/:name', (req,res,next) =>{
    res.json({
        id: req.params.id, 
        name: req.params.name,
    })
})
router.get('/clientes/:id', (req,res) =>{
    res.json({
        id: req.params.id, 
        name: 'Joao'
    })
})

module.exports = router
