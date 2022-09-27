/* Crie um algortimo que recebe informações de 15 produtos. 
Cada produto possui nome, marca, uma foto (link de uma imagem da internet), 
preço unitário e a quantidade de produtos em estoque. 
Ao receber essas informações dos produtos, imprima no HTML essas informações de 
cada produto e o produto entre o preço e a quantidade de produtos em estoque (preço total). */


function salvarProduto(){
    let produto = {
        nome: document.getElementById('inputNomeProduto').value,
        marca: document.getElementById('inputMarcaProduto').value,
        imagem: document.getElementById('inputImagem').value,
        precoUnitario: parseFloat(document.getElementById('inputPrecoUnitario').value),
        qtdEstoque: parseInt(document.getElementById('inputQtdEstoque').value),
        calcularPrecoTotal (){
            return this.qtdEstoque * this.precoUnitario
        }
    }
    //preenchendo tabela:
    let table = document.getElementById("tabelaParaPreencherViaJS")
    let row = table.insertRow()

    let nome = row.insertCell(0)
    nome.innerHTML = produto.nome

    let marca = row.insertCell(1)
    marca.innerHTML = produto.marca

    let img = `<img src="${produto.imagem}" alt="imagem do produto">`
    let imagem = row.insertCell(2)
    imagem.innerHTML = img

    let precoUnitario = row.insertCell(3)
    precoUnitario.innerHTML = produto.precoUnitario

    let qtdEstoque = row.insertCell(4)
    qtdEstoque.innerHTML = produto.qtdEstoque

    let total = row.insertCell(5)
    total.innerHTML = 'R$ ' + produto.calcularPrecoTotal().toFixed(2)

    document.getElementById("myForm").reset()
}
