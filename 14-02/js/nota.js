// Variáveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");

function resultadoNotaClick(event) {
    // Previne um comportamento no navegador
    event.preventDefault();
    console.log(inputNota.value);

    // Condição
    if (inputNota.value >= 6) {
        resultado.innerHTML =  "Mais próximo da vagabundagem!";
    } else {
        resultado.innerHTML =  "Quem passa direto é trem!";
    }

    inputNota.value = "";
} 