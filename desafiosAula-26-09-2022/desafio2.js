/* 2. Escreva um algoritmo que leia um valor inicial A e imprima o seu fatorial */
const numero = parseInt(prompt("Digite um número natural para saber seu fatorial:"))
let fatorial = 0
if(isNaN(numero) || numero <= 1 || !Number.isInteger(numero)){
    fatorial = 1
} else {
    fatorial = numero
    for (let i = numero-1; i > 0; i--) {
        fatorial *= i
    }
}
alert(fatorial)