 /*const lista = ["Item1","Item2","Item3"]
 const mt  = [

    [1,2,3],
    [4,5,6],
    [7,8,9]

 ]
 console.log(lista[0])
 console.log(mt[1][1])

 mt.forEach(function(item) {
    item.forEach(function(valor){
    console.log(valor)
    })
 })

// lista.forEach(item => console.log(item))

const pessoa1 = {
    nome: "Teste",
    Idade: 20

}

console.log(pessoa1.nome)

pessoa1.nome ="Teste2"
pessoa1.cpf = "123456"

console.log(pessoa1)

class Pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    podeDirigir(){
        return (this.idade > 18) ? "Pode" : "Não Pode"
    }
}

const pessoa2 = new Pessoa("Nome da Pessoa 2",35)
pessoa2.nome = "Teste"
pessoa2.cpf = "1234567"

console.log(pessoa2.podeDirigir())*/

class Estudante{
    constructor(nome,email,ra,curso,disciplina){
    this.nome = nome
    this.email = email
    this.ra = ra
    this.curso = curso
    this.disciplina = disciplina
    }
}

const estudante1 = new Estudante("Nome1","teste1@gmail.com","0123456789","ADS",["Programação","Estrutura de Dados","Sistemas Operacionais"])
const estudante2 = new Estudante("Nome2","teste2@gmail.com","0123456710","ADS",["Programação","Estrutura de Dados","Sistemas Operacionais"])
console.log(estudante1)
console.log(estudante2)