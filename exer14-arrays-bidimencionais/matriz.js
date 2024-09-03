// arrays com duas dimencoes sao arrays q tem arrays dentro dele, basta apenas colocar um [[ ]]
const arr = [
  ["Nivel 1", "Nivel 2", "Nivel 3"],
  ["Nivel 1", "Nivel 2", "Nivel 3"],
  ["Nivel 1", "Nivel 2", "Nivel 3"],
];
console.log(arr);

// array de exemplo do video:

const arr01 = [
  "1º Nível",
  ["2º nível", 42, true],
  [
    ["3º nível", "1º item", "Olá, mundo!"],
    ["3º nível", "2º item", "Oi, mundo!"],
  ],
  [],
];
console.log(arr01[1][0]); //= 2 nivel, isso serve para pegar um elemento especifico dentro de um array, no caso seria a string '2 nivel'
console.log(arr01[1][2]); //= true o primeiro [] serve para avaliar qual linha esta, o segundo [ serve para pegar o item da fila, comecando a contar pelo 0]

// arrays sendo pego no terceiro nivel
console.log(arr01[2][1][2]); //= oi mundo, em arrays de terceiro nivel o segundo [] nao serve para pegar um item, mas sim a linha, o terceiro []serve para pegar itens

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];

console.table(matriz); // um novo conceito que cria uma tabela se for possivel, e eu posso mudar essa tabela adicionando ais itens

matriz.push([
  // para adicionar uma linha a mais na tabela
  "Nova linha",
  "Nova linha 2",
  "Nova linha 3",
  "Nova linha 4",
  "Nova linha 5",
]);
matriz[0].push("Nova coluna"); // para criar uma coluna a mais
console.table(matriz);
