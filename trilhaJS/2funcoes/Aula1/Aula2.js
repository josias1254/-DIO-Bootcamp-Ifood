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