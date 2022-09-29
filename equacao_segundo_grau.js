
function equacaoSegundoGrau (a, b, c){
    // Delta = b² - 4ac
    let delta = b ** 2 - 4 * a * c
    //Báscara: -b +- raiz delta / 2a
    let raizDelta = Math.sqrt(delta)
    let x1 = (-b + raizDelta) / 2 * a
    let x2 = (-b - raizDelta) / 2 * a
    return 'Delta = ' + delta + " | x' = " + x1 + ' | x" = ' + x2
}
console.log(equacaoSegundoGrau(1, -1, -12))
console.log(equacaoSegundoGrau(1, -10, 25))
console.log(equacaoSegundoGrau(7, 3, 8))

//Raiz quadrada 9 é o mesmo que 9 ** 0.5 