// Variáveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message");

function resultadoNotaClick(event) {
    // Previne um comportamento no navegador
    event.preventDefault();
    console.log(inputNota.value);

    // Validação de formulário
    if (inputNota.value == "") {
        message.style.display = "block";
        // alert("Digite a nota.");
        return false;
    }

    // Condição
    if (inputNota.value >= 6) {
        resultado.innerHTML =  "Mais próximo da vagabundagem!";
    } else {
        resultado.innerHTML =  "Quem passa direto é trem!";
    }

    message.style.display = "none";

    inputNota.value = "";

} 