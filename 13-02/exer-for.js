/*
    -Após a const "names", ultilize um for loop para gerar um tamplate HTML;
    -Exiba no console o template HTML que você gerou;
    -O template deve ser exibido apenas uma vez no console e o resultado deve ser:
    <li>João Grilo</li><li>Chicó</li><li>Rosinha</li>
*/

const names = ['João Grilo', 'Chicó', 'Rosinha'];

let template = '';
for (let i = 0; i < names.length; i++) {
    template += `<li>${names[i]}</li>`;
}
console.log(template);