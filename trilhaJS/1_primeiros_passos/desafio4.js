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

if (formaPgt === 1) {
    if (vezes === 1) {
        console.log('valor a ser pago:', (precoNormal - (precoNormal * 0.1)))
    } else if (vezes === 2) {
        console.log('valor a ser pago:', precoNormal)
    } else if (vezes > 2) {
        console.log('valor a ser pago:', (precoNormal + (precoNormal * 0.10)))
    }

} else if (formaPgt === 2) {
    if (vezes === 1) {
        console.log('valor a ser pago:', (precoNormal - (precoNormal * 0.15)))
    } else if (vezes === 2) {
        console.log('valor a ser pago:', precoNormal)
    } else if (vezes > 2) {
        console.log('valor a ser pago:', (precoNormal + (precoNormal * 0.10)))
    }

}