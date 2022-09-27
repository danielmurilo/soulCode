/* 7. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
P.G. contendo 10 valores. */
let a1 = parseInt(prompt('Informe o valor inicial A:'))
let r = parseInt(prompt('Informe o valor da Razão:'))
let sequenciaPG = []
sequenciaPG.push(a1) //adciona primeiro termo
for (let i = 0; i < 9; i++) {
    let ultimoElemento = sequenciaPG[sequenciaPG.length - 1]
    sequenciaPG.push(ultimoElemento * r)
}
alert(sequenciaPG.join(', '))