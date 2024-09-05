let opcao = "";
let resultado = "";
let baseTriangulo = "";
let alturaTriangulo = "";
let baseRetangulo = "";
let alturaRetangulo = "";
let ladoQuadrado = "";
let baseMaiorTrapezio = "";
let baseMenorTrapezio = "";
let alturaTrapezio = "";
let circuloRaio = "";

function calcularAreaTriangulo() {
  baseTriangulo = parseFloat(prompt("Informe a base do triângulo:"));
  alturaTriangulo = parseFloat(prompt("Informe a altura do triângulo:"));
  return (baseTriangulo * alturaTriangulo) / 2;
}

function calcularAreaRetangulo() {
  baseRetangulo = parseFloat(prompt("Informe a base do retângulo:"));
  alturaRetangulo = parseFloat(prompt("Informe a altura do retângulo:"));
  return baseRetangulo * alturaRetangulo;
}

function calcularAreaQuadrado() {
  ladoQuadrado = parseFloat(prompt("Informe a área do quadrado:"));
  return ladoQuadrado * ladoQuadrado;
}

function calcularAreaTrapezio() {
  baseMenorTrapezio = parseFloat(prompt("Informe a base menor do trapézio:"));
  baseMaiorTrapezio = parseFloat(prompt("Informe a base maior do trapézio:"));
  alturaTrapezio = parseFloat(prompt("Informe a altura do trapézio:"));
  return ((baseMaiorTrapezio + baseMenorTrapezio) * alturaTrapezio) / 2;
}

function calcularAreaCirculo() {
  circuloRaio = parseFloat(prompt("Informe o raio do círculo:"));
  return 3.14 * circuloRaio * circuloRaio;
}

do {
  opcao = parseFloat(
    prompt(
      "Calculadora Geométrica\n" +
        "1). Calcular área de triângulo\n" +
        "2). Calcular área de retângulo\n" +
        "3). Calcular área de quadrado\n" +
        "4). Calcular área de trapézio\n" +
        "5). Calcular área de círculo\n" +
        "6). Sair\n"
    )
  );

  switch (
    opcao // esse resultado seria pegar o resultado da funcao e colocar nele e exibir, o retorno da funcao é quem faz a conta
  ) {
    case 1:
      resultado = calcularAreaTriangulo();
      alert("O resultado é " + resultado);
      break;
    case 2:
      resultado = calcularAreaRetangulo();
      alert("O resultado é " + resultado);
      break;

    case 3:
      resultado = calcularAreaQuadrado();
      alert("O resultado é " + resultado);
      break;

    case 4:
      resultado = calcularAreaTrapezio();
      alert("O resultado é " + resultado);
      break;

    case 5:
      resultado = calcularAreaCirculo();
      alert("O resultado é " + resultado);
      break;

    case 6:
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida. Tente novamente.");
  }
} while (opcao !== 6);
