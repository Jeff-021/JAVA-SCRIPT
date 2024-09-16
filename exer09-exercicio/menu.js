const options = "";
options = prompt(
  "Olá seja bem vindo ao menu interativo do DoWhile!, escolha uma das opções abaixo:\n a) Opção\n b) Opção \n c) Opção\n d) Opção\n e) Encerrar!"
);

do {
  switch (options) {
    case "a":
      alert("Voçê escolheu a opção A");
      break;

    case "b":
      alert("Voçê escolheu a opção B");
      break;

    case "c":
      alert("Voçê escolheu a opção C");
      break;
    case "d":
      alert("Voçê escolheu a opção D");
      break;
    case "e":
      alert("Encerrando...");
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.");
  }
} while (opcao !== "e");

// O loop continua até que a opção 'e' seja escolhida para encerrar, pois o do while só encerra quando tem uma afirmacao falsa
