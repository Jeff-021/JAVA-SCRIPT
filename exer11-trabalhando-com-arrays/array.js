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

//shift -remover elemtos no inicio do array

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

//slice
const inverso = arr.slice(-4);
const copiarUmacopia = arr.slice(0, 4); // ele faz uma cópia parcial do array, iniciando no 0 e acabando no 3, o 4 ele n pega
console.log(copiarUmacopia);
console.log(inverso); // o n negativo funciona ao contrario, só comecar a contar -1,-2... no final da lista do array
