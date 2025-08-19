var numere = 1;

{
    let numero = 2;
    console.log( 'Dentro = ', numero); // 2

}

console.log("Fora = ", numere); // 1f

// As variáveis declaradas com let têm escopo de bloco, ou seja, só são acessíveis dentro do bloco onde foram definidas.
// Já as variáveis declaradas com var têm escopo global ou de função, dependendo de onde são declaradas.
// Portanto, a variável 'numero' não é acessível fora do bloco onde foi definida,
// enquanto 'numere' é acessível em todo o escopo do arquivo.
// Isso demonstra a diferença entre let e var em termos de escopo.