/*
    1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
    calcule e imprima sua media e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 8;

let media = (nota1 + nota2 + nota3) / 3;

console.log('A média das notas foi:', media.toFixed(2));

if (media < 5) {
    console.log('O aluno está reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('O aluno está de recuperação');
} else {
    console.log('O aluno está aprovado');
}
