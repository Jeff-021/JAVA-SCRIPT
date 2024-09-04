let nomeAtacante = prompt("Digite o nome do personagem atacante");
let nomeDefensor = prompt("Digite o nome do personagem defensor");
let poderDeAtaque1 = prompt("Digite o poder de ataque total do personagem");
let vidaDefensor2 = prompt("Digite a quantidade de vida do personagem");
let escudo01 = prompt("Digite a quantidade de escudo, se ele possuir");

let poderDeAtaque = parseFloat(poderDeAtaque1);
let vidaDefensor = parseFloat(vidaDefensor2);
let escudo = parseFloat(escudo01);
let Sobreviveu = perso2 + escudo - perso1;
let ataque = nomeAtacante - (nomeDefensor + escudo);

if (poderDeAtaque >= poderDeDefesa + escudo) {
  alert(
    "O personagem " +
      nomeDefensor +
      " " +
      "morreu " +
      "pois sofreu um ataque de " +
      ataque +
      " pontos de vida acima da sua vida máxima com o escudo imposto!"
  );
} else {
  alert(
    "O personagem " +
      nomeDefensor +
      " " +
      "sobreviveu com a ajuda do escudo, ele possui" +
      " " +
      Sobreviveu +
      " " +
      "pontos de vida"
  );
}

// o if serve apenas para true, se for truel vai fazer uma acao, se for false ele vai fazer outra coma ajuda do else
