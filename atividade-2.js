let inputString = "Aqui está um exemplo de string para verificar a ocorrência de 'A' ou 'a'.";


let count = 0;

for (let i = 0; i < inputString.length; i++) {
  if (inputString[i] === 'a' || inputString[i] === 'A') {
    count++; 
  }
}


if (count > 0) {
  console.log(`A letra 'a' aparece ${count} vezes na string.`);
} else {
  console.log("A letra 'a' não aparece na string.");
}