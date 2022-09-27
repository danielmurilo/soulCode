/* 9. Leia a velocidade máxima permitida em uma avenida e a velocidade com que o motorista
estava dirigindo nela e calcule a multa que uma pessoa vai receber, sabendo que são
pagos: 
    a) 50 reais se o motorista estiver ultrapassar em até 10km/h a velocidade permitida 
    (ex.: velocidade máxima: 50km/h; motorista a 60km/h ou a 56km/h); 
    b) 100 reais, se o motorista ultrapassar de 11 a 30 km/h a velocidade permitida. 
    c) 200 reais, se estiver
    acima de 31km/h da velocidade permitida. */

let velocidadeMax = parseFloat(prompt('Informe a velocidade máxima da via:'))
let velocidadeAferida = parseFloat(prompt('Informe a velocidade aferida:'))
if ((velocidadeAferida - velocidadeMax) <= 0) {
    alert('Você não foi multado')
} else if ((velocidadeAferida - velocidadeMax) <= 10) {
    alert("Multa de R$ 50")
} else if ((velocidadeAferida - velocidadeMax) <= 30) {
    alert("Multa de R$ 100")
} else {
    alert("Multa de R$ 200")
}