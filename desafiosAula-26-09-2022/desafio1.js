/* 1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar :
    a. A menor altura do grupo;
    b. A maior altura do grupo; */

const listaAltura = []
for (let i = 1; i <= 2; i++) {
    listaAltura.push(parseFloat(prompt('Digite Altura da ' + i + 'ª pessoa:')))
}
let auxMaiorAltura = 0, auxMenorAltura = Number.MAX_VALUE
for (let altura of listaAltura) {
    if (altura > auxMaiorAltura) {
        auxMaiorAltura = altura
    }
    if (altura < auxMenorAltura) {
        auxMenorAltura = altura
    }
}
alert('A pessoa mais alta tem ' + auxMaiorAltura.toFixed(2) + 'm de altura. A mais baixa ' + auxMenorAltura.toFixed(2) + 'm.')
