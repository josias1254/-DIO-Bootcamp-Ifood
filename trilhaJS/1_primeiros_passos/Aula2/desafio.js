/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;
*/

const pEta = 3.50;
const pGas = 6.74;
const cType = 'gasolina';
const kmPlt = 13.3;
const dist = 232;

const ltGasto = dist / kmPlt;
const pEtaGasto = ltGasto * pEta;
const pGasGasto = ltGasto * pGas;

if (cType === 'etanol') {
    console.log('Nessa viagem foram gastos', ltGasto.toFixed(2), 'Litros de', cType, 'Totalizando: R$', pEtaGasto.toFixed(2));
} else {
    console.log('Nessa viagem foram gastos', ltGasto.toFixed(2), 'Litros de', cType, 'Totalizando: R$', pGasGasto.toFixed(2));
}





