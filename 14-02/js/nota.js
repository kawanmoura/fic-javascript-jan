// Variáveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");

function resultadoNotaClick(event) {
    event.preventDefault();
    console.log(inputNota.value);
}