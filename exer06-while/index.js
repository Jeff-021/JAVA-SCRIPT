let velocidade = 100;

while (velocidade > 0) {
  alert("o carro está a " + velocidade + " km/h");

  velocidade -= 20;
  alert("O carro está diminuindo 20km/h");

  if (velocidade === 20) {
    break;
  }
}
alert("O carro parou...");
