let velocidade = 0;

do {
  alert("A velocidade do veiculo é " + velocidade + " " + "km/h");
  velocidade -= 20;
} while (velocidade > 0);

alert("Velocidade final " + velocidade + "km/h"); // se uma afirmacao for falsa o codigo se repetira apenas uma vez
