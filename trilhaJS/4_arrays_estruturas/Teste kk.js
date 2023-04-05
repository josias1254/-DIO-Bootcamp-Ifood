class Aluno {
    constructor(nome, turma) {
        this.nome = 'nome';
        this.turma = 'turma';
        this.notas = [];
        }

        calcularMedia() {
            let soma = 0;
            let media = [];
            for (let i = 0; i < this.notas.length ; i++){
                soma = soma + this.notas[i];
                media = soma / this.notas.length;
            }return media
        }
        
    status(){
    }
}




const gabriel = new Aluno('gabriel', 'primeiro')
gabriel.notas.push(3,4,5)


