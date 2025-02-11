/*
    Verifica se o número é positivo, negativo ou nulo
    se o numero for maior que nulo, exibe a mensagem "O número é positivo"
    se o numero for menor que nulo, exibe a mensagem "O número é negativo"
    se o numero for igual a zero, exibe a mensagem "O número é nulo"
*/

let numero = prompt("Digite um número: ");

if (numero > 0) {
    document.write(`O número ${numero} é positivo`);
} else if (numero < 0) {
    document.write(`O número ${numero} é negativo`);
} else {
    document.write(`O número ${numero} é nulo`);
}