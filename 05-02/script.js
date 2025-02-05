// Como se fosse um "span" (Var)
let nome = prompt("Qual seu nome?");
let idade = prompt("Quantos Anos?");
let time = prompt("Que time é teu?");

// Imprimir na tela
document.write("Seja Bem-Vindo: " + nome + ", Sua Idade é: " + idade + " Anos");
document.write("<br><br>");
document.write(`Seja Bem-Vindo: ${nome}, Sua Idade é: ${idade} anos.`);