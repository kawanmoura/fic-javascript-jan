/*
    -Armazene sua idade em uma constante;
    -Escreva uma estrutura condicional em que, se a idade é 7 anos ou menos, ou
    se a idade é 65 anos ou mais, a frase "Para você, a entrada é grátis!" é
    armazenada em uma variável;
    -Se a mensagem nã atende às condições acima, a variável deve armazenar a
    mensagem "A entrada é R$30,00.";
    -Exiba a mensagem no console.
    -Agora teste diferentes idades para se certificar que a condição do `if`
    também está funcionando.
*/

const idade = 7;

if (idade <= 7 || idade >= 65) {
    console.log("Para você, a entrada é grátis!");
} else {
    console.log("A entrada é R$30,00.");
}