let end = {
    rua: 'Rua Barão de Souza Leão',
        numero: 420,
        bairro: 'Boa Viagem',
        cidade: 'Recife',
        uf: 'PE',
        cep: '50.721-180'
}
let pessoa = {
    nome: 'Daniel Guedes',
    idade: 41,
    cpf: '123.454.333.32',
    altura: 176,
    peso: 78,
    endereco: {...end}, //desvincula do objeto end
    statusAtivo: true,
    habilidades: ['JavaScript', 'Java','C#', 'HTML', 'CSS'],
    cumprimentar () {
        console.log(`Olá, meu nome é ${this.nome}.`)
    }
}
pessoa.cumprimentar()
pessoa.nome = 'Pablo Escobar'
pessoa.cumprimentar()
pessoa.habilidades.push('Angular')
console.log(pessoa.habilidades.join(', '))
console.log(pessoa['cpf'])
console.log(pessoa.endereco.rua)
pessoa.endereco.rua = 'Rua Modificada'
console.log(end.rua)
console.log(pessoa.endereco.rua)