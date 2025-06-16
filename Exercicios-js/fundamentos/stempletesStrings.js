const nome = "Rebeca"; 
const concatenacao = "Olá" + nome + "!"; // Concatenação tradicional
const template = 
    `Olá 
    ${nome}!` // Template string (template literal)
// A template string permite que você inclua expressões dentro de `${}`
// Exemplo de expressão dentro de template string
const expressao = `1 + 1 = ${1 + 1}`; // Avalia a expressão e insere o resultado
console.log(concatenacao, template); 

// expressoes...
console.log(`1 + 1 = ${1 + 1}`); // Exibe "1 + 1 = 2"

const up = texto => texto.toUpperCase(); // Função para converter texto para maiúsculas
console.log(`Ei... ${up('cuidado')}!`); // Exibe "Ei... CUIDADO!"