let opcao = "";

do {
  opcao = prompt(
    "Bem Vindo!\n Escolha uma das opções abaixo\n a)\n b)\n c)\n d)\n e)"
  );

  switch (opcao) {
    case "a":
      alert("Você escolheu a opção a.");
      break;
    case "b":
      alert("Você escolheu a opção b.");
      break;
    case "c":
      alert("Você escolheu a opção c.");
      break;
    case "d":
      alert("Você escolheu a opção d.");
      break;
    case "e":
      alert("Encerrando o programa...");
      break;
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.");
  }
} while (opcao !== "e"); // uma afirmacao falsa pois e é igual a e, tenho que colocar uma afirmacão falsa pra encerrar
