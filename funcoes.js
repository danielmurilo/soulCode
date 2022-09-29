function cumprimentar (mensagem = 'Mensagem Padrão', repetir = 1) { //1 só é usado caso o segundo parâmetro não seja passado
    mensagem = mensagem.toUpperCase() + "!!"
    for(let i = 1; i <= repetir; i++) {
        alert(mensagem)
    }    
}
cumprimentar('Olá Mundo!', 3)

function a () {
    function b () {
        function a () {

        }
    }
}