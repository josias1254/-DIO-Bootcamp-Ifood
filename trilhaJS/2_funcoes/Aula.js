// Definir função
function nome(valor) {
    // Processamento
    const final = valor + valor
    // Retorna o valor
    return final

}
// Invoca a função
// console.log(nome(10))
////////

function calcularJuros() {
}

function main() {
    console.log('Programa principal');
    calcularJuros();
}
main()

/////////////////
function escreverNome(nome){
    return 'Meu nome é ' + nome;
}

function eMaior(idade) {
    if (idade >= 18) {
        console.log(escreverNome('josias') + ', maior de idade')
    } else {
        console.log('Menor de idade')
    }
}

eMaior(18);