function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value; // isso aqui serve para pegar o valor digitado e guardar, como se fosse uma variavel!, o value pega o valor e trasfere para o const nome, number e position

  console.log({ position, name, number }); // serve só para ver no console, ver se esta certo

  const confirmation = confirm("Escalar " + name + " como " + position + "?"); // isso serve como um alerta na tela confirmando se esta tudo bem

  if (confirmation) {
    // se estiver tudo bem, ele vai adicionar usando o if
    const teamList = document.getElementById("team-list");
    const playerItem = document.createElement("li"); // criando uma linha
    playerItem.id = "player-" + number;
    playerItem.innerText = position + " " + name + " " + number; // na lista a linha criada é assim
    teamList.appendChild(playerItem); // tean list (nada mais é que o id da lista) é pai da linha

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = ""; // isso aqui serve para resetar o input para colocar as informacoes tudo de novo
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value; // esse ('number to remove') é o id do input do remover um jogador, o value esta aqui para guardar a informacao do numero
  const playerToRemove = document.getElementById("player-" + number);

  const confirmation = confirm(
    "Remover o jogador " + playerToRemove.innerText + "?" // confirmando se ira remover
  );

  if (confirmation) {
    document.getElementById("team-list").removeChild(playerToRemove);
    document.getElementById("numberToRemove").value = ""; // serve para limpar o input
  }
}
