var a = 3; 
let b = 4; // let é mais moderno que var

var a = 30;
// let b = 40; // let não pode ser redeclarada
b = 40; // mas pode ser reatribuída
console.log(a, b);

a = 300; // var pode ser reatribuída
b = 400; // let também pode ser reatribuída

console.log(a, b);

const c = 5; // const não pode ser reatribuída
// c = 50; // const não pode ser reatribuída
console.log(c);