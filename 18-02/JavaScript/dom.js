// Variável
const nome = document.getElementById("nome");
const cidade = document.getElementById("cidade");
const email = document.getElementById("email");

const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const txtEmail = document.getElementById("txt_email");

function mudar(event) {
    event.preventDefault();

    // Validação de Formulário
    if (nome.value === "" || cidade.value === "" || email.value === "") {
        alert("Você não digitou em todos os campos!")
        return false;
    }


    if (nome.value === ""){
        alert("Preencha o campo de NOME!");
        return false;
    }

    if (cidade.value === ""){
    alert("Preencha o campo de CIDADE!");
        return false;
    }

    if (email.value === ""){
        alert("Preencha o campo de EMAIL!");
        return false;
    }

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

  // Outra Função
  function mudarCor() {
    // alert("Olá!") 

    if (document.body.style.backgroundColor === "Blue") {
    document.body.style.backgroundColor = "";
    } else {
        document.body.style.backgroundColor = "Blue";
    }
}

