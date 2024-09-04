const arr = [];
let quantDeImoveis = 0;
let opcao = "";
let localizacao = "";
let quantDeQuartos01 = "";
let garagem = "";
let quantDeQuartos = parseFloat(quantDeQuartos01);

do {
  opcao = prompt(
    "Olá seja bem vindo(a)!\n, No seu carrinho estão salvos " +
      quantDeImoveis +
      " imóveis\n Escolha uma opção para seguir:\n a) Salvar um imóvel\n b) Mostrar todos os imóveis cadastrados\n c) Sair"
  );

  switch (opcao) {
    case "a":
      localizacao = prompt(
        "Para acharmos um imóvel ao seu gosto digite a localização"
      );

      quantDeQuartos = prompt("Digite a quantidade de quartos desejada");

      garagem = prompt("Quer que possua garagem?");
      alert(
        "Imóvel cadastrado!\n Na localização: " +
          localizacao +
          " " +
          "\nO numero de quartos são: " +
          quantDeQuartos +
          " " +
          "\nPossui garagem? " +
          garagem
      );
      quantDeImoveis++;
      arr.push({ localizacao, quantDeQuartos, garagem });
      console.log(arr);
      break;

    case "b":
      if (quantDeImoveis === 0) {
        alert("Nenhum imóvel cadastrado.");
      } else {
        let listaImoveis = "Imóveis salvos:\n";
        arr.forEach((imovel, index) => {
          //O index é uma variável que representa a posição de um elemento dentro de um array.
          listaImoveis += `${index + 1}) Localização: ${
            imovel.localizacao
          }, Quartos: ${imovel.quantDeQuartos}, Garagem: ${imovel.garagem}\n`;
        });
        alert(listaImoveis);
      }
      break;
    case "c":
      alert("Encerrando o chamado...");
      break;
    default:
      alert("Entrada inválida! Escolha uma das opções.");
      break;
  }
} while (opcao !== "c");
