/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

*/

const precoCombustivel = 5.79;
const kmLt = 12;
const distanciakm = 1580;

const ltConsumido = distanciakm / kmLt;
const resultado = ltConsumido * precoCombustivel;


console.log('Foram consumidos',ltConsumido.toFixed(2),'litros, E o valor gasto total é de: R$',resultado.toFixed(2));

