// 1) Crie um prograama que dado um número imprima a sua tabuada.

function imprimirTabuada(numero, sinal){

if (sinal === '+'){
for (let i = 1; i <= 10; i++) {

    let resultado = numero + i;
    console.log(`${numero} + ${i} = ${resultado}`);}

}else if (sinal === '*') {
for (let i = 1; i <= 10; i++) {

    let resultado = numero * i;
    console.log(`${numero} * ${i} = ${resultado}`);}
}
}

imprimirTabuada(7, '*');



