/* 

    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
    gasto em reais para realizar este percurso.

*/

const pCombustivel = 5;
const distanciaKm = 70;

class Carro {
    marca;
    cor;
    ltKm;

constructor(marca,cor,ltKm){
    this.marca = marca;
    this.cor = cor;
    this.ltKm = ltKm;
}

calcularGasto() {
    return distanciaKm * this.ltKm * pCombustivel;
}

}

const toro = new Carro('Fiat', 'Vermelho', 1/12);
const palio = new Carro('Fiat', 'Preto', 1/10);
console.log(palio.calcularGasto());


