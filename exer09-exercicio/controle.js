let valorRetirado01 = "";
let valorAdicionado01 = "";
let quantInicial01 = prompt(
  "Sejá bem-vindo\nQual seria a quantidade inicial para depósito?"
);

let quantInicial = parseFloat(quantInicial01);
let valorAdicionado = parseFloat(valorAdicionado01);
let valorRetirado = parseFloat(valorRetirado01);

do {
  opcao = prompt(
    "Que maravilha!\nVoçê possui um valor de: " +
      quantInicial +
      " Temos opções para voçê!\n a) Adicionar dinheiro\n b) Remover dinheiro\n c) Sair"
  );

  switch (opcao) {
    case "a":
      valorAdicionado = prompt("Qual seria o valor a ser adicionado?");
      quantInicial += parseFloat(valorAdicionado); // serve para converter de volta para numero, eu ja tinha feito isso mas como eu coloqueia variavel em um prompt ela volta a ser string
      break;
    case "b":
      valorRetirado = prompt("Qual seria o valor a ser retirado?");
      quantInicial -= valorRetirado;
      break;
    case "c":
      alert("Encerrando o programa...");
      break;
    default:
      alert("Entrada inválida! Escolha uma das opções.");
      break;
  }
} while (opcao !== "c"); // isso é falso, por isso encerra o programa
