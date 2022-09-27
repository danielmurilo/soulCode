// 4. Escreva um programa que leia uma letra e mostre se ela é vogal ou consoante
let letra = prompt('Digite uma letra:')
while ("qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(letra) < 0) {
    letra = prompt('Digite uma letra:')
}
letra = letra.toLocaleUpperCase()
if (letra != 'A' && letra != 'E' && letra != 'I' && letra != 'O' && letra != 'U') {
    alert(letra + ' é Consoante!')
} else {
    alert(letra + ' é vogal!')
}