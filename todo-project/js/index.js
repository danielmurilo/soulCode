const todoForm = document.getElementById('todo-form')
const todos = []
todoForm.addEventListener('submit', function(evento){
    evento.preventDefault() //evita recarregamento da página (F5).
    evento.stopPropagation() //evita a propagação do evento.
    const todoInput = document.querySelector('#input-todo')
    const radioButtonValue = document.querySelector('.form-check-input:checked').value
    todos.push(radioButtonValue + todoInput.value)
    todoInput.value = ''
    renderizarTodos()
})

function renderizarTodos(){
    const todosListSection = document.querySelector('#todos-list')
    todosListSection.innerHTML = ''
    for(let tarefa of todos){
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')
        
        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')
        
        const p = document.createElement('p')
        p.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
        const iconBall = document.createElement('i')
        iconBall.innerText = 'circle'
        iconBall.classList.add('material-icons')
        if(tarefa.charAt(0) == 1) {
            iconBall.classList.add('icon-1')
        } else if(tarefa.charAt(0) == 2) {
            iconBall.classList.add('icon-2')
        } else {
            iconBall.classList.add('icon-3')
        }
        p.innerText = tarefa.substring(1)
        const buttonDelete = document.createElement('button')
        buttonDelete.classList.add('btn', 'delete-todo')
        buttonDelete.addEventListener('click', () => {
            const index = todos.indexOf(tarefa)
            todos.splice(index, 1)
            renderizarTodos()
        })//arrow functions sempre são anônimas

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'

        //nomeando os filhos...
        buttonDelete.appendChild(spanIcon)
        divCardBody.append(p, iconBall, buttonDelete)
        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)
    }
}