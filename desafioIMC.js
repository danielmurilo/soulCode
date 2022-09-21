let peso = parseFloat(prompt('Favor Informar Seu Peso: '))
let altura = parseFloat(prompt('Favor informar Sua Altura: '))
let imc = peso / altura ** 2
alert('Seu IMC é: ' + imc.toFixed(1))

if (imc < 18.5) {
    alert('Você Está Abaixo do Peso!')
} else if (imc >= 18.5 && imc <= 25) {
    alert('Você Está Com Peso Normal!')
} else if (imc > 25 && imc <= 30) {
    alert('Você Está Acima do Peso!')
} else if (imc > 30){
    alert('Você Está Obeso!')
} else {
    alert('Erro!')
}