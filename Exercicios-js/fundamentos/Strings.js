const escola = "Cod3r";

console.log(escola.charAt(4)); // Exibe o caractere na posição 4 (índice começa em 0)
console.log(escola.charAt(5)); // Exibe '' (vazio) porque não existe caractere na posição 5
console.log(escola.charCodeAt(3)); // Exibe o código Unicode do caractere na posição 3
console.log(escola.indexOf('3')); // Exibe o índice do caractere '3' (2)


console.log(escola.substring(1)); // Exibe a substring a partir do índice 1 (incluindo o caractere na posição 1)
console.log(escola.substring(0, 3)); // Exibe a substring do índice 0 até o índice 3 (não incluindo o caractere na posição 3)

console.log("Escola ".concat(escola).concat("!")); // Concatena a string "Escola " com o valor de escola e "!" no final
console.log("Escola " + escola + "!"); // Outra forma de concatenar strings
c
console.log(escola.replace(3, 'e')); // Substitui o caractere '3' por 'e'

console.log("Ana, Maria, Pedro".split(",")); // Divide a string em um array usando a vírgula como delimitador
console.log("Ana, Maria, Pedro".split(/,/)); // Usando expressão regular para dividir a string
console.log("Ana, Maria, Pedro".split(/, |,/)); // Divide a string usando vírgula ou vírgula seguida de espaço como delimitador
console.log("Ana, Maria, Pedro".split(/, |,/).join(" e ")); // Junta os elementos do array com " e " como separador
