/* 6. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
P.A. contendo 10 valores. */

let a1 = parseInt(prompt('Informe o valor inicial A:'))
let r = parseInt(prompt('Informe o valor da Razão:'))
let sequenciaPA = []
sequenciaPA.push(a1)
for (let i = 0; i < 9; i++) {
    sequenciaPA.push(a1 += r)
}
alert(sequenciaPA.join(', '))