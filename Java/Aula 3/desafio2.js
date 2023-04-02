/*
    2) O IMC - Indice de Massa Corporal é um critério da Organização Mundialda Saúde
    para dar uma indicação sobre a condição de peso de uma pessoa Adulta.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com
    a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade Grave;
*/

const pesoKg = 67;
const alturaCm = 1.80;

const imc = pesoKg / Math.pow(altura, 2);
console.log('IMC é:', IMC.toFixed(2));


if (imc < 18.5) {
    console.log('Abaixo do peso');

} else if (imc >= 18.5 && IMC <= 25) {
    console.log('Peso normal');

} else if (imc > 25 && IMC <= 30) {
    console.log('Acima do peso');

} else if (imc > 30 && IMC <= 40) {
    console.log('Obeso');

} else if (imc > 40) {
    console.log('Obesidade Grave');

}







