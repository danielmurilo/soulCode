/* 8. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, indique a quantidade de
cada um desses componentes para se obter uma certa quantidade de latão (requerida pelo
usuário). */
let qtdLatao = parseFloat(prompt('Informe a quantidade em kg de latão que você precisa.'))
let qtdCobre = qtdLatao * 0.7
let qtdZinco = qtdLatao * 0.3
alert(`Para produzir ${qtdLatao}kg de latão, são necessários ${qtdCobre.toFixed(2)}kg de cobre e ${qtdZinco.toFixed(2)}kg de zinco.`)