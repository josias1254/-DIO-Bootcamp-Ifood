class Aluno {
    constructor(nome, turma, media) {
        this.nome = nome;
        this.turma = turma;
        this.notas = [];
        this.media = media;
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

const gabriel = new Aluno('gabriel', 'primeiro');
gabriel.notas.push(3,4,5);
gabriel.media = gabriel.calcularMedia();


const eduardo = new Aluno('eduardo', 'segundao');
eduardo.notas.push(7,5,7);
eduardo.media = eduardo.calcularMedia();


console.log(gabriel,eduardo) 



