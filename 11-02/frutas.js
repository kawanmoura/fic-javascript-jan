/*
    -Abaixo do array "fruits", verifique se a fruta "Abacaxi" existe no array, se existir, 
    exiba um console com a mensagem "A string "Abacaxi" existe no array fruits".
    -Se abacaxi não existir, verifique se a fruta "pera" existe no array, se existir, 
    exiba um console com a mensagem "A string "pera" existe no array fruits".
    - se nenhuma das duas frutas existir, exiba um console com a mensagem 
    "Nenhuma das strings existe no array fruits".
*/

const fruits = ["morango", "banana", "mamão", "pera"];

if (fruits.includes("Abacaxi")) {
    console.log("A string 'Abacaxi' existe no array fruits");
} else if (fruits.includes("pera")) {
    console.log("A string 'pera' existe no array fruits");
} else {
    console.log("Nenhuma das strings existe no array fruits");
}