// Armazenando uma funcao dentro de variavel/const
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenado uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

// retorno implicito
const subtracao = (a, b) => a - b

console.log(subtracao(3, 2))

const adicaoDe1 = a => ++a

console.log(adicaoDe1(4))