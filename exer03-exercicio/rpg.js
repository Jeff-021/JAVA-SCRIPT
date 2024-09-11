const nameCharacter1 = prompt("Digite o nome de um personagem");
const attackPower1 = prompt(
  "Digite também a quantidade de poder de ataque que ele possui"
);
const nameCharacter2 = prompt(
  "Digite o nome de um outro persoangem, mas esse será um personagem de defesa"
);
const defensePower1 = prompt("Digite um poder de defesa que ele irá possuir");
const shield1 = prompt("Quantos de escudo ele terá a mais na sua vida?");
confirm("Confirma as informações?");

const attackPower = parseFloat(attackPower1);
const defensePower = parseFloat(defensePower1);
const shield = parseFloat(shield1);
const statics = defensePower + shield - attackPower;

if (attackPower >= defensePower + shield) {
  alert(
    `O personagem ${nameCharacter2} infelizmente não resistiu ao ataque, mesmo com a ajuda do escudo, ele ficou com: ${statics} pontos de vida`
  );
} else {
  alert(
    `O personagem ${nameCharacter2} sobreviveu, pois com a ajuda do escudo ele é mais forte!, ele ficou com ${statics} pontos de vida `
  );
}
