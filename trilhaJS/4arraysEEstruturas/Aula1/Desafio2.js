// 2) Crie um programa que seja capaz de percorrer uma lista de números
// e imprima cada número Par encontrado.

const lista = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < lista.length; i++) {
    let numeroDaVez = lista[i]
    if (numeroDaVez % 2 === 0 && numeroDaVez != 0){
        console.log(`${numeroDaVez} é par`);
    }
}