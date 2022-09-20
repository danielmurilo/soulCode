//operador E (&&)
//tabela verdade:
//V && V -> V
//V && F -> F
//F && V -> F
//F && F -> F
//
let media = (7 + 10 + 10)/3
let presenca = 0.95
console.log(media>=7 && presenca >= 0.8)//true


//OPERADOR OU (||)
//tabela verdade
//V || V -> V
//V || F -> V
//F || V -> V
//F || F -> F

let logado = false
if(logado){
    console.log('não pode acessar')
}
