let a = 7 // Variável a recebe o valor 7
let b = 94 // Variável b recebe o valor 94
temp = a // Atribui o valor de a a uma variável temporária
a = b // Atribui o valor de b a a
b = temp // Atribui o valor da variável temporária a b

// [a, b] = [b, a]; // Alternativa usando destructuring para trocar os valores de a e b 

console.log(a); // Exibe os valores de a
console.log(b); // Exibe os valores de b
// Resultado esperado: a = 94, b = 7    
