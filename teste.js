//inicio WHILE
while(cont <= quantIndiceProduto){
    precoProduto = (parseInt(prompt(`Digite o valor o ${cont} ° numero:  `)));
    if(precoProduto > maiorValorProduto){
      maiorValorProduto = precoProduto
    }
    if(precoProduto < menorValorProduto){
      menorValorProduto = precoProduto;
    }
    somaProduto += precoProduto;
    cont++  
  }
  console.log(`A soma dos produtos foi ${somaProduto}`);
  console.log(`O maior valor de produto foi ${maiorValorProduto}`);
  console.log(`O menor valor de produto foi ${menorValorProduto}`);