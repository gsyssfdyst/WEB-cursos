const prod1 = {}; // Objeto é uma coleção de chave-valor
prod1.nome =  "Calculdaora Ultra Mega"; // Atribuindo valores a atributos do objeto
prod1.preco = 4998.90; // Atribuindo valores a atributos do objeto
prod1["Desconto legal"] = 0.40; // Evitar atributos com espaço

console.log(prod1) // Exibe o objeto completo com seus atributos e valores

const prod2 = {
    nome: "Camisa Polo", // Atributo nome com valor "Camisa Polo"
    preco: 79.90, // Atributo preco com valor 79.90
    desconto: 0.20, // Atributo desconto com valor 0.20
    obj: {
        blabla: 1, // Atributo obj com um objeto aninhad
        obj2: {
            blabla2: 2 // Atributo obj2 com um objeto aninhado dentro de obj
        }
    }
}


console.log(prod2) // Exibe o objeto completo com seus atributos e valores


