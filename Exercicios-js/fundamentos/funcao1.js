function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3); 
imprimirSoma(2) // no js voce pode passar apenas um valor, a outra vai esta sem nada.
imprimirSoma (2, 3, 4, 5, 6, 7, 8); 
imprimirSoma(); 

// funcao com retorno 

function soma(a, b = 1) {
    return a + b 

}

console.log(soma(2, 3));
console.log(soma(2));