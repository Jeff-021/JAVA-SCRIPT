let num01 = prompt("Digite um número para saber a sua tabuada de 1 a 20!");
let num = parseFloat(num01);
let resultado = "";

for (let i = 1; i <= 20; i++) {
  resultado += num + " X " + i + " = " + num * i + "\n"; // Adiciona cada resultado à string, esse += serve para colocar todo o resultado da string na variavel vazia
}

alert(resultado); // Exibe todos os resultados de uma vez
