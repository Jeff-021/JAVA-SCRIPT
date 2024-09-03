let quantdeDecartas = 0;
let opcao = "";
let nome = "";
const baralho = []; // tem como fazer um array vazio e dps preenche-lo

do {
  opcao = prompt(
    "Olá seja bem-vindo(a)!\n Aqui a baixo está as informações do baralho:\n Quantidade de cartas: " +
      quantdeDecartas +
      "\n a) Adicionar uma carta!\n b) Puxar uma carta\n c) Sair"
  );

  switch (opcao) {
    case "a":
      nome = prompt("Qual seria o nome da carta a ser adicionada?");
      alert("A carta " + nome + " foi adicionada com sucesso!");
      quantdeDecartas++;
      baralho.unshift(nome);
      break;
    case "b":
      baralho.shift(nome);
      alert(
        "A carta que foi puxada foi " +
          nome +
          " pois ela estava no inicio do baralho"
      );
      break;
    case "c":
      alert("Encerrando o chamado...");
      break;
    default:
      alert("Entrada inválida! Escolha uma das opções.");
      break;
  }
} while (opcao !== "c");
