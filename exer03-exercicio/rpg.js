let nome1 = prompt("Digite o nome do personagem atacante");
let nome2 = prompt("Digite o nome do personagem defensor");
let perso01 = prompt("Digite o poder de ataque total do personagem");
let perso02 = prompt("Digite a quantidade de vida do personagem");
let escudo01 = prompt("Digite a quantidade de escudo, se ele possuir");

let perso1 = parseFloat(perso01);
let perso2 = parseFloat(perso02);
let escudo = parseFloat(escudo01);
let Sobreviveu = perso2 + escudo - perso1;
let ataque = perso1 - (perso2 + escudo);

if (perso1 >= perso2 + escudo) {
  alert(
    "O personagem " +
      nome2 +
      " " +
      "morreu " +
      "pois sofreu um ataque de " +
      ataque +
      " pontos de vida acima da sua vida máxima com o escudo imposto!"
  );
} else {
  alert(
    "O personagem " +
      nome2 +
      " " +
      "sobreviveu com a ajuda do escudo, ele possui" +
      " " +
      Sobreviveu +
      " " +
      "pontos de vida"
  );
}

// o if serve apenas para true, se for truel vai fazer uma acao, se for false ele vai fazer outra coma ajuda do else
