console.log(7 / 0); // Exibe Infinity, resultado de divisão por zero
console.log("3" + 2); // Concatena a string "3" com o número 2, resultando em "32" 
console.log("3" - 2);  // Subtrai a string "3" convertida para número, resultando em 1
console.log("10" / 2); // Converte a string "10" para número e divide por 2
console.log("Show!" * 2); // Resultado NaN (Not a Number) porque não é possível multiplicar uma string por um número
console.log(0.1 + 0.7); // Resultado 0.7999999999999999 devido a precisão de ponto flutuante
// console.log(10.toFixed()); // Erro: 10.toFixed() não é válido, deve ser (10).toFixed()
console.log((10.345).toFixed(2)); // Formata o número 10.345 para 2 casas decimais, resultando em "10.35"