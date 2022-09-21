/**
 * Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10%
 */

const precoProduto = parseFloat(prompt('Qual o preço do produto?'))
const mensagem = `
Qual é a forma de pagamento? Digite:
1 Dinheiro
2 Cheque
3 Cartão`
const formaPagamento = prompt(mensagem)

if(formaPagamento == '1' || formaPagamento == '2'){
    const precoFinal = precoProduto * 0.9
    alert(`Valor a Pagar: R$ ${precoFinal.toFixed(2)}`)
} else if (formaPagamento == '3'){
    const parcelas = parseInt(prompt('Informe a Quantidade de Parcelas'))
    if (parcelas == '1') {
        const precoFinal = precoProduto * 0.85
        alert(`Valor a Pagar: R$ ${precoFinal.toFixed(2)}`)
    } else if (parcelas == '2') {
        alert(`Valor a Pagar: R$ ${precoFinal.toFixed(2)}`)
    } else if (parcelas >= '3') {
        const precoFinal = precoProduto * 1.1
        alert(`Valor a Pagar: R$ ${precoFinal.toFixed(2)}`)
    }
}
