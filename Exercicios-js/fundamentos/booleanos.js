let isAtivo = false; 
console.log(isAtivo); // false

isAtivo = true; // Alterando o valor da variável
console.log(isAtivo); // true

isAtivo = 1; // JavaScript permite atribuir valores numéricos a variáveis booleanas
console.log(!!isAtivo); // Exibe true, pois 1 é considerado verdadeiro em JavaScript
console.log(!isAtivo);  // Exibe false, pois ! inverte o valor booleano


console.log('os verdadeiros...'); // Exibe a mensagem
console.log(!!3); // Exibe true, pois 3 é um número diferente de zero
console.log(!!-1); // Exibe true, pois -1 também é considerado verdadeiro
console.log(!! ""); // Exibe false, pois string vazia é considerado falso
console.log(!!"texto"); // Exibe true, pois string não vazia é verdadeiro
console.log(); // Apenas uma linha em branco no console
console.log (!![]); // Exibe true, pois array vazio é considerado verdadeiro
console.log(!!Infinity); // Exibe true, pois Infinity é verdadeiro
console.log(isAtivo = true); // Atribui true a isAtivo e exibe true

// false 

console.log("Os falsos..."); // Exibe a mensagem
console.log(!!0); // Exibe false, pois 0 é considerado falso
console.log(!!""); // Exibe false, pois string vazia é falso
console.log(!!null); // Exibe false, pois null é falso
console.log(!!Nan); // Exibe false, pois NaN é falso (atenção: correto é 'NaN', não 'Nan')
console.log(!!undefined); // Exibe false, pois undefined é falso
console.log(!!(isAtivo = false)); // Atribui false a isAtivo e exibe false

console.log ("Para finalizar..."); // Exibe a mensagem
console.log(!!('' || null || 0 || ' ')); // Exibe true, pois ' ' (espaço) é verdadeiro

let nome = '';
console.log(nome || 'Desconhecido'); // Exibe 'Desconhecido', pois nome é string vazia

nome = 'Lucas';
console.log(nome || 'Desconhecido'); // Exibe 'Lucas', pois nome agora tem valor


