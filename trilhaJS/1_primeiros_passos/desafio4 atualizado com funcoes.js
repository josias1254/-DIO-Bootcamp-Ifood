/*
    3) Elaboare um algoritmo que calcule o que deve ser pago por um produto, considerando 
    o preço normal de etiqueta e a escolha da condição de pagamento.
    
    Utilize os coódigos da tabela a seguir para ler qual a condição de pagamento escolhida e 
    efetuar o cálculo.

    Código condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

const precoNormal = 100;
const formaPgt = 2;
const vezes = 1;

function juros(porcent) {
    const valDesc = (porcent / 100) * precoNormal;
    return precoNormal + valDesc
}

function precoFinal() {
    if (formaPgt === 1) {
        if (vezes === 1) {
            return juros(-10)
        } if (vezes === 2) {
            return juros(0)
        } if (vezes > 2) {
            return juros(10)
        }
    } else {
        if (vezes === 1) {
            return juros(-15)
        } if (vezes === 2) {
            return juros(0)
        } if (vezes > 2) {
            return juros(10)
        }
    }
}

console.log('O valor a ser pago é: R$' + precoFinal())