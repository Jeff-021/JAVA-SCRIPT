document.getElementById("button").addEventListener("click", function () {
  const name1 = document.getElementById("nome").value;
  const speed1 = parseFloat(document.getElementById("velocidade1").value);
  const name2 = document.getElementById("nome2").value;
  const speed2 = parseFloat(document.getElementById("velocidade2").value);

  const nameP = document.createElement("p");
  const name2P = document.createElement("p");
  const name3P = document.createElement("p");

  const compararSpeed1 = speed1 - speed2;
  const compararspeed2 = speed2 - speed1;

  if (speed1 > speed2) {
    nameP.textContent = `O carro ${name1} é mais rápido, pois a velocidade dele é dê ${speed1}, que é ${compararSpeed1} km/h mais rápido! que o ${name2}, com a velçocidade de ${speed2} km/h`;
  } else if (speed1 === speed2) {
    name2P.textContent = `Os carros: ${name1} e ${name2}, tem a mesma velocidade que é dê: ${speed1}`;
  } else if (speed1 < speed2) {
    name3P.textContent = `O carro ${name2} é mais rápido, pois ele possui a velocidade dê: ${speed2}, que é ${compararspeed2} km/h mais rápido! que o ${name1}, com a velçocidade de ${speed1}`;
  }

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  resultadoDiv.appendChild(nameP);
  resultadoDiv.appendChild(name2P);
  resultadoDiv.appendChild(name3P);

  document.getElementById("nome").value = "";
  document.getElementById("velocidade1").value = "";
  document.getElementById("nome2").value = "";
  document.getElementById("velocidade2").value = "";
});
