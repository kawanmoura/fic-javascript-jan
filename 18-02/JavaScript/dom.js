// Variável
const nome = document.getElementById("nome");
const cidade = document.getElementById("cidade");
const email = document.getElementById("email");

const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const txtEmail = document.getElementById("txt_email");

function mudar(event) {
    event.preventDefault();

    // titulo
    titulo.innerHTML = nome.value
    // subtitulo
    subtitulo.innerHTML = cidade.value
    // txt email
    txtEmail.innerHTML = email.value


    // Limpar Campos
    nome.value = "";
    cidade.value = "";
    email.value = "";

}
