// Variáveis
const campo = document.querySelector("#campo");
const salvarBtn = document.querySelector("#salvar");

// Adicionar evento de clique ao botão salvar
salvarBtn.addEventListener("click", function() {
    const valor = campo.value;

    // Salvar no localStorage
    const chave = `ValorSalvo_${Date.now()}`; // Usa timestamp para chave única

    // Funcionabilidade do LocalStorage
    localStorage.setItem(chave, valor);
});