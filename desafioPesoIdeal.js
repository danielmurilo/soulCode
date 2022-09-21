let altura = parseFloat(prompt('Informe Altura: '))
let genero = prompt('Informe "F" para Feminino e "M" para masculino: ')
genero = genero.toLocaleUpperCase()

if (genero == 'F') {
    let pesoIdeal = (62.1 * altura) - 44.7
    alert(pesoIdeal.toFixed(2))
} else if (genero == 'M') {
    let pesoIdeal = (72.7 * altura) - 58
    alert(pesoIdeal.toFixed(2))
} else {
    alert('Informe Uma Opção Válida')
}