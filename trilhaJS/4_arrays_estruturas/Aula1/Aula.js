const notas = [];

notas.push(5);
notas.push(6);
notas.push(7);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {

    let nota = notas[i];
    soma = soma + nota;

}

const media = soma / notas.length;
console.log(media);