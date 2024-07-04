// CLASSE ABSTRATA: classe que não pode ser instanciada diretamente (você não pode criar objects dessa classe), mas que pode ser herdada por outras classes

console.log("\n")
class Person {

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    speak() {
        console.log("Hello, how's it goin'?")
    }
}

const objectPerson = new Person("Ana", 19) // 1º instância

console.log(objectPerson)
objectPerson.speak()
console.log(typeof objectPerson)
console.log("\n")

class Funcionario extends Person { // 1º classe herdeira

    constructor(nome, cargo, salario) {
        super(nome) // Person.call(this, nome) 
        // chama o cosntrutor da classe pai Person
        this.cargo = cargo
        this.salario = salario
    }

    work() {
        console.log("Let's go to work!")
    }

}

const objectFuncionario = new Funcionario("Ana", "Full Stack Developer", 4000) // 2º instância

console.log(objectFuncionario)
objectFuncionario.work()
console.log(typeof objectFuncionario)
console.log("\n")

class RH extends Funcionario { // 2º classe herdeira

    constructor(nome, cargo, salario, ferias, admissao) {
        super(nome, cargo, salario)
        this.ferias = ferias
        this.admissao = admissao
    }

    calmDown() {
        console.log("Time to vacations.")
    }
}

const objectRH = new RH("Ana", "Full Stack Developer", 4000, '01 / 01 / 2024', '01 / 01 / 2023') // 3º instância
console.log(objectRH)
objectRH.calmDown()
console.log(typeof objectRH)
console.log("\n")