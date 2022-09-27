/* 5. Crie um código que receba 3 valores do comprimento de um triângulo e depois mostre um 
alert informando se o triângulo é equilátero, isóceles ou escaleno. */
let ladoA = parseFloat(prompt('Informe o lado A do triângulo: '))
let ladoB = parseFloat(prompt('Informe o lado B do triângulo: '))
let ladoC = parseFloat(prompt('Informe o lado C ou Hipotenusa do triângulo: '))

if (ladoA == ladoB && ladoA == ladoC) {
    alert('Triangulo Equilátero!')
} else if (ladoA == ladoB || ladoA == ladoC) {
    alert('Triangulo Isósceles!')
} else {
    alert('Triangulo Escaleno!')
}