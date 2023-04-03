class Aluno {
    nome;
    turma;
    status = this.status()
    media = this.calcularMedia()
    notas;

    constructor(nome, turma, notas) {
        this.nome = nome;
        this.turma = turma;
        }

   
    calcularMedia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length ; i++) {
            let nota = this.notas[i];
            soma = soma + nota;
        } return soma
        //const mediaa = soma / notas.length;
        //return mediaa
    }
    status(){

    }
}

const gabriel = new Aluno('gabriel', 'primeiro', [2, 1, 1])
console.log(gabriel);







/*
function definirStatus() {
    if (media >= 7) {
        return 'Aprovado'
    } else if (media < 7) { 
        return 'Reprovado'
    }
}
*/


