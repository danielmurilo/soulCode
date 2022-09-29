let i = 1
function mostrarAlerta() {
    if (i == 1) {
        document.getElementById('paragrafo-msg').innerHTML = "Você clicou " + i++ + " vez.";
    } else {
        document.getElementById('paragrafo-msg').innerHTML = "Você clicou " + i++ + " vezes.";
    }    
    const divAlerta = document.getElementById('alerta')    
    divAlerta.classList.add('mostrar')
}    

function fecharAlerta(){
    i = 1
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}

const buttonMostrar = document.getElementById('button-mostrar')
const buttonFechar = document.getElementById('button-fechar')

buttonMostrar.addEventListener('click', mostrarAlerta)
buttonFechar.addEventListener('click', fecharAlerta)