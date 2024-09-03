let num01 = prompt("Digite um número para saber a sua tabuada de 1 a 20!");
let num = parseFloat(num01);
let contagem = "";

for (contagem = 1; contagem <= 20; contagem++) {
  // a contagem comeca no 1 e termina no 20, e sempre sera adicionado mais um
  alert("O resultado seria: " + num + "X" + contagem + " = " + num * contagem);
}
