/*
    -Após a const numbers, utilize um for loop para somar todos os números do
    array;
    -Exiba no console um boolean indicando se o total dessa soma é 337;
    -O console deve exibir true.
*/

const numbers = ['91', '5', '30', '97', '83', '31'];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
}

console.log(sum); // 337
console.log(sum === 337); // true