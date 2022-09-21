//Delimitação de Strings
const aspasSimples = 'Olá, mundo!'
console.log(aspasSimples)

let aspasDuplas = "Olá gente"
console.log(aspasDuplas)

//caracteres de escape
aspasDuplas = "Olá gente\n aqui já é outra \tlinha..."
console.log(aspasDuplas)

//texto com crase
let stringComCrase = `texto
com 
    crase`
console.log(stringComCrase)

//metodos das strings
const texto = 'O Javascript foi criado alguns anos após o Python. No entanto, o Javascript é bem mais bacana.'
console.log('texto original: ' + texto)
console.log('toUpperCase(): ' + texto.toUpperCase())
console.log('toLowerCase(): ' + texto.toLowerCase())
console.log('length: ' + texto.length)
console.log('concat(): ' + texto.concat(' A linguagem C é a mãe de todas as linguagens.'))
console.log("replaceAll('o','0'): " + texto.replaceAll('o','0'))//substitui todas as letras 'o' por numeros 0. case sensitive
console.log('substring(2,12): ' + texto.substring(2,12))
console.log('Regex: ' + texto.replace(/Javascript/g, 'PHP')) //case sensitive
console.log('Regex: ' + texto.replace(/Javascript/gi, 'PHP')) //no case sensitive
console.log('' + texto.replace(/[\s]/gi, '_')) //muda todos os espaços em branco por underline

let html = '<!DOCTYPE html>\n<html lang="pt-br">\n\<head>'
console.log(html.startsWith('<!DOCTYPE html>'))
const strObj = new String('algum texto');
console.log(typeof(strObj))
console.log(typeof('algum texto'))
console.log(strObj == 'algum texto')
console.log(strObj === 'algum texto')