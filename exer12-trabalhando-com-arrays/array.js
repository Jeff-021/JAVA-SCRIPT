const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

//adicionar elementos
//push - adicionar um elemento no final do array

arr.push("Teste01");
arr.push("Teste02");
arr.push("Teste03");
console.log(arr);

//unshift - no começo do array

arr.unshift("Teste01");
console.log(arr);

//pop - remover elementos no final do array
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//shift -remover elementos no inicio do array

ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//pesquisar por um elemeto - includes = ver se um elemento esta dentro do array, se existir ele vai devolver vdd, se n falso

const inclui = arr.includes("Gandalf");
console.log(inclui);

//indeOf
const indice = arr.indexOf("Gandalf");
console.log(indice); // ver qual posicao o gandalf esta dentro do array

// cortar e concatenar

//slice =cortar
const inverso = arr.slice(-4);
const copiarUmacopia = arr.slice(0, 4); // ele faz uma cópia parcial do array, iniciando no 0 e acabando no 3, o 4 ele n pega
console.log(copiarUmacopia);
console.log(inverso); // o n negativo funciona ao contrario, só comecar a contar -1,-2... no final da lista do array

//concat = concatenar
const juntar = inverso.concat(copiarUmacopia, "aleatorio");
console.log(juntar); //os arrays da variavel inverso e copiaruamcopia e um arrray q eu acabei de criar estao dentro dessa variavel

// substituicao de arrays antigos por novos -splice

const removerElementos = juntar.splice(
  3,
  2,
  "array novo",
  "substituindo os antigos"
); // os numeros para se colocar nos () sao, 3= significa que a partir do indice 3 ela ira eliminar a quantidade q eu colocar esubstituir em ''
console.log(juntar);
console.log(removerElementos);
