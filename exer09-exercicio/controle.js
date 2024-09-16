let options = "";
let amountOfMoney1 = prompt(
  "Olá seja bem vindo ao nosso banco!\n Digite a quantidade de dinheiro disponível!"
);

let amountOfMoney = parseFloat(amountOfMoney1); // converti o amount pois o prompt trasnforma tudo em string

do {
  options = prompt(
    `Que maravilha!\nVoçê possui um valor de: ${amountOfMoney} reais
  Temos opções para voçê!\n a) Adicionar dinheiro\n b) Remover dinheiro\n c) Sair`
  );
  switch (options) {
    case "a":
      let addMoney1 = prompt("Qual seria o valor adicionado?");
      let addMoney = parseFloat(addMoney1);
      confirm("Confirma essa ação?");
      amountOfMoney += addMoney;
      break;

    case "b":
      let removeMoney1 = prompt("Qual seria o valor para ser retirado?");
      let removeMoney = parseFloat(removeMoney1);
      confirm("Confirma essa ação?");
      amountOfMoney -= removeMoney;
      break;

    case "c":
      alert("Encerrando o programa...");
      break;

    default:
      alert("Entrada inválida! Escolha uma das opções.");
      break;
  }
} while (options !== "c");
