let arr = ["1-Jefferson", "2-Marcelo", "3-Igor", "4-Kaique", "5-Ryan"];
let nome = "";
let opcao = "";

do {
  opcao = prompt(
    "Olá seja bem vindo(a)\n Eis a lista de espera;" +
      arr +
      "\nEis as opções a seguir\n a) Novo paciente!\n b) Consultar paciente\n c) Sair"
  );

  switch (opcao) {
    case "a":
      nome = prompt("Qual é o seu nome para cadastro?");
      alert("Cadastro concluido! " + nome);
      arr.push(nome);
      break;
    case "b":
      arr.shift();
      alert("Paciente Consultado");
      break;
    case "c":
      alert("Encerrando o chamado...");
      break;
    default:
      alert("Entrada inválida! Escolha uma das opções.");
      break;
  }
} while (opcao !== "c");
