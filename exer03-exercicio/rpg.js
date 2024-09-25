document.getElementById("button").addEventListener("click", function () {
  const name1 = document.getElementById("nome1").value;
  const attack = parseFloat(document.getElementById("attack").value);
  const name2 = document.getElementById("nome2").value;
  const defense = parseFloat(document.getElementById("defense").value);
  const shild = parseFloat(document.getElementById("shild").value);

  const surviverP = document.createElement("p");
  const deathP = document.createElement("p");
  const empateP = document.createElement("p");
  const liveShild = defense + shild;

  if (attack > defense + shild) {
    deathP.textContent = `O personagem ${name1}, com um poder de ataque de ${attack} pontos, acabou matando o personagem ${name2}. A defesa somada ao escudo totalizou ${liveShild} pontos de vida, não foi suficiente para protegê-lo!`;
  } else if (attack === defense + shild) {
    empateP.textContent = `O personagem ${name2} não resistiu. Mesmo com a ajuda do escudo, ele apenas igualou o ataque de ${name1}, que era de ${attack} pontos. Os pontos de vida de ${name2}, somados com o escudo, totalizaram ${attack} pontos, totalizando a sua morte!.`;
  } else if (defense + shild > attack) {
    surviverP.textContent = `O personagem ${name2} resistiu ao ataque de ${name1}, graças à defesa e ao escudo que foram superiores ao ataque dê: ${attack} pontos, a vida com o escudo do personagem ${name2} totalizados foram dê: ${liveShild} pontos! .`;
  }

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  resultadoDiv.appendChild(surviverP);
  resultadoDiv.appendChild(deathP);
  resultadoDiv.appendChild(empateP);

  document.getElementById("nome1").value = "";
  document.getElementById("attack").value = "";
  document.getElementById("nome2").value = "";
  document.getElementById("defense").value = "";
  document.getElementById("shild").value = "";
});
