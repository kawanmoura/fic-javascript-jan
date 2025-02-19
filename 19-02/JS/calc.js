// Obtém os elementos do DOM
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

// Variável resultado
const resultado = document.getElementById("resultado");

// Função para fazer a soma
function somar(event) {
    event.preventDefault();

    let resultadoSoma = Number(valor1.value) + Number(valor2.value);
    resultado.innerHTML =resultadoSoma;
}

// Função para sub
function subt(event) {
    event.preventDefault();

    let resultadoSub = Number(valor1.value) - Number(valor2.value);
    resultado.innerHTML = resultadoSub;
}

// Função para div
function div(event) {
    event.preventDefault();

    let resultadoDiv = Number(valor1.value) / Number(valor2.value);
    resultado.innerHTML = resultadoDiv;
}

// Função para mult
function mult(event) {
    event.preventDefault();

    let resultadoMult = Number(valor1.value) * Number(valor2.value);
    resultado.innerHTML = resultadoMult;
}

// Função limpar campo