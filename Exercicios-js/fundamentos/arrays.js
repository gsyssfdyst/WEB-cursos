const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3])     // Acessa os elementos do array valores
console.log(valores[4])                 // Acessa um índice que não existe, resultando em undefined


valares[4] = 10; // Adiciona um novo elemento no índice 4
console.log(valores);  // Exibe o array atualizado com o novo elemento
console.log(valores.length); // Exibe o tamanho do array, que agora é 5

valares.push({id : 3}, false, null, "teste"); // Adiciona vários elementos ao final do array
console.log(valores); // Exibe o array com os novos elementos adicionados
console.log(valores.pop()); // Remove e exibe o último elemento do array
delete valares[0]; // Remove o elemento no índice 0
console.log(valores); // Exibe o array após a remoção do elemento no índice 0

console.log(typeof valores);