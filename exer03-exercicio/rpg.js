let perso01 = prompt("Digite o nome e o poder de ataque total do personagem");
let perso02 = prompt(
  "Digite outro nome e a quantidade de vida de um personagem"
);
let escudo01 = prompt("Digite a quantidade de escudo que ele possui");

let perso1 = parseFloat(perso01);
let perso2 = parseFloat(perso02);
let escudo = parseFloat(escudo01);
let Sobreviveu = perso2 + escudo - perso1;

if (perso1 > perso2 + escudo) {
  alert("O personagem " + perso2 + " " + "morreu");
} else {
  alert(
    "O personagem " +
      perso2 +
      " " +
      "sobreviveu com a ajuda do escudo, ele possui" +
      " " +
      Sobreviveu +
      " " +
      "pontos de vida"
  );
}
