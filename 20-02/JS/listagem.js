const listaValores = document.querySelector("#listaValores");

// Carregar valores salvos ao iniciar a página
carregarValoresSalvos();

function carregarValoresSalvos() {
    listaValores.innerHTML = ""; // Limpar a lista antes de adicionar os valores

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if (chave.startsWith("ValorSalvo")) { // Filtra as chaves desejadas
            const valor = localStorage.getItem(chave);
            // Criar um elemento HTML
            const listItem = document.createElement("li");
            listItem.textContent = valor;
            listaValores.appendChild(listItem);

        }
    }
}