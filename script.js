// Abstração -> Trazer um objeto do mundo real para a programação
// Herança -> Classe filha herda atributos e métodos da classe pai.
// Encapsulamento -> Gerenciar a visibilidade e o acesso aos dados(atributos e métodos)
// Polimorfismo -> Transformação de métodos baseado em uma classe

class Animal{
    #nome_cientifico
    #peso
    #alimentacao

    constructor(nome_cientifico, peso, alimentacao ){
        this.#nome_cientifico = nome_cientifico
        this.#peso = peso
        this.#alimentacao = alimentacao
    }
    
    emitirSom() {
        console.log("Emitindo som...")
    }

    locomover(){
        console.log("Animal se locomovendo")
    }
}

class Cachorro extends Animal {
    emitirSom(){
        console.log("Au Au")
    }
}

class Gato extends Animal{
    emitirSom(){
        console.log("Miau")
    }
}

const dog = new Cachorro("Dogos latindus", 20, "Carnívoro")
const cat = new Gato("Gatilis Miandus", 5, "Qualquer coisa")

dog.emitirSom()
cat.emitirSom()
