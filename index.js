class heroi {
    constructor (tipo, ataque) {
         this.tipo = tipo
         this.ataque = ataque
    }
escrever () {
    console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
}
} 

let mago = new heroi ("Mago", "magia")
let guerreiro = new heroi ("Guerreiro", "espada")
let monge = new heroi ("Monge", "artes marciais")
let ninja = new heroi ("Ninja", "shuriken")

monge.escrever()