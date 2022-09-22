let litros = parseFloat(prompt('Favor informar a quantidade de litros'))
while(isNaN(litros) || litros <= 0){
    alert("Favor informar qtd de litros sem letras ou caracteres especiais.")
    litros = parseFloat(prompt('Favor informar a quantidade de litros'))
}
let combustivel = prompt('Informe "E" para Etanol ou "G" para Gasolina').trim().toUpperCase()
while (combustivel != 'E' && combustivel != 'G'){
    combustivel = prompt('*Informe "E" para Etanol ou "G" para Gasolina').trim().toUpperCase()
}
let precoGasolina = 2.70
let precoEtanol = 1.90

if (combustivel == 'E') {
    if (litros <= 25) {
        //2% de desconto
        let valorTotal = (precoEtanol * litros) * 0.98
        alert(valorTotal.toFixed(2))
    } else {
        //4% desconto
        let valorTotal = (precoEtanol * litros) * 0.94
        alert(valorTotal.toFixed(2))
    }
}else if (combustivel == 'G'){
    //3% desconto
    if (litros <= 25) {
        let valorTotal = (precoGasolina * litros) * 0.97
        alert(valorTotal.toFixed(2))
    } else {
        //5% desconto
        let valorTotal = (precoGasolina * litros) * 0.95
        alert(valorTotal.toFixed(2))
    }
    
}else {
    alert("Digite Uma Opção válida!")
}