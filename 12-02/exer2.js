/*
    -Abaixo da constante "cities", declare uma let "upperCaseCities" e atribua à
    ela um array vazio;
    -Adicione ao array que a let "upperCaseCities" armazena as cidades do array
    cities com todas as letras maiúsculas, utilizando o for loop;
    -Para ver se deu certo, exiba o upperCaseCities no console.
    push() - dica
    [] array vazio - dica
*/

const cities = ["São Paulo", "Rio de Janeiro", "Minas Gerais"];
let upperCaseCities = [];
console.log(cities.length);

for (let i = 0; i < cities.length; i++) {
    upperCaseCities.push(cities[i].toUpperCase());
}

console.log(upperCaseCities);