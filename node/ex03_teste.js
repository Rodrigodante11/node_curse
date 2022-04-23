const s1 =  require('./ex03_singleton')
const s2 =  require('./ex03_singleton')

s1.exibirProximo() //1
s2.exibirProximo() //2
s1.exibirProximo() //3
s2.exibirProximo() //4
// provando que sao instancias compartilhadas 