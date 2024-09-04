let opcao = "";

do {
  opcao = prompt(
    "Bem Vindo!\n Escolha uma das opções abaixo:\n a) Opção A\n b) Opção B\n c) Opção C\n d) Opção D\n e) Encerrar"
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
} while (opcao !== "e"); // O loop continua até que a opção 'e' seja escolhida para encerrar, pois o do while só encerra quando tem uma afirmacao falsa
