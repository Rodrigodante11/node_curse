const PI = 3.14   
console.log(global.PI)  // jeito errado
// sistema de modules garante que tudo que esta escrito dentro de um arquivo\modulo
// eh visivel apenas dentro do proprio modulo 

global.obj = {name: "Estou no global"} // jeito certo de fazer global em node/modulo
