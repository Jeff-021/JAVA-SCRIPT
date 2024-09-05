function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}
const resultado = calcularMedia(2, 7);
console.log(resultado);
alert("O resultado da média é " + resultado); //criei uma variavel para tirar o resultado de dentro da funcao,sempre lembrar de colocar o return

function criarProduto(nome, preco, estoque) {
  //criei uma funcao vazia, mas preenchi ela depois usando a variavel do produto + o 'criar produto, sempre lembrar de colocar tudo na ordem
  const produto = {
    nome,
    preco,
    estoque,
  };
  return produto;
}

const notebook = criarProduto("notebook i5 8GB", 3800, 7);
console.log(notebook);
const televisao = criarProduto("TV LG 55 polegadas", 4800, 10);
console.log(televisao);

function areaRetangular(base, altura) {
  const area = base * altura;
  return area;
}
const resultado02 = areaRetangular(4, 7);
console.log(resultado02);
alert("O resultado da area retangular é " + resultado02);

function ola() {
  let texto = "...";
  return texto;
  texto = "Ola mundo";
  console.log(texto); // funcao morta, pois ela so pode funcionar antes do return, dps do return a funcao morre
}
console.log(ola);

function maiorDeIdade(idade) {
  if (idade >= 18) return "Maior de idade";
  else {
    return "Menor de idade";
  }
}
console.log(maiorDeIdade(29));
console.log(maiorDeIdade(12)); // if e else, switch fazer assim, colocar return em opcoes diferentes
