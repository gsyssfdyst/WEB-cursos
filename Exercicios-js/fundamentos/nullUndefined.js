let valor // nao inicializado
console.log(valor); // Exibe undefined, pois valor não foi inicializado

valor = null // Ausência de valor
console.log(valor);
//console.log(valor.topString())

const produto = {};
console.log(produto.preco);
console.log(produto)

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined 
// detelar p.produto.preco
console.log(produto);

produto.preco = null; 
console.log()
