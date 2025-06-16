const peso1 =  1.0; // Literal numérico
const peso2 = Number('2.0'); // Construtor numérico

console.log(peso1, peso2); // Exibe os pesos
console.log(Number.isInteger(peso1)); // Verifica se é inteiro
console.log(Number.isInteger(peso2)); // Verifica se é inteiro

const avaliacao1 = 9.871; // Literal numérico
const avaliacao2 =  6.871; // Literal numérico

const total = avaliacao1 * peso1 + avaliacao2 * peso2; // Cálculo do total ponderado
const media = total / (peso1 + peso2) // Cálculo da média ponderada


console.log(media.toFixed(2)); // Formata a média para 2 casas decimais
console.log(media.toString(2)); // Converte a média para binário
console.log(media.toString()); // Converte a média para string 
console.log(typeof media); // Exibe o tipo da média

// tipo Numeber  É um tipo primitivo em JavaScript que representa números, tanto inteiros quanto de ponto flutuante.
// É usado para realizar operações matemáticas e manipular valores numéricos.
// Já o number é o tipo primitivo que representa números em JavaScript, enquanto Number é um construtor que pode ser usado para criar objetos numéricos ou converter valores para o tipo numérico.