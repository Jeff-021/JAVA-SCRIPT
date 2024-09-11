const carOne = prompt("Digite o nome do primeiro carro");
const speedOne = prompt("Digite a velocidade dele");
const carTwo = prompt("Digite o nome do segundo carro");
const speedTwo = prompt("Digite a velocidade dele");

const speed1 = parseFloat(speedOne);
const speed2 = parseFloat(speedTwo);

if (speed1 > speed2) {
  alert(
    `O carro ${carOne} é mais rapido, pois sua velocidade é ${speed1} km/h`
  );
} else if (speed1 === speed2) {
  alert(
    `As velocidades do ${carOne} e ${carTwo} são as mesmas, cada um tem a velocidade dê: ${speed1} km/h`
  );
} else {
  alert(
    `O carro ${carTwo} é mais rapido, pois a velocidade dele é ${speed2} km/h`
  );
}

// o if serve apenas para true, se for truel vai fazer uma acao, se for false ele vai fazer outra coma ajuda do else
