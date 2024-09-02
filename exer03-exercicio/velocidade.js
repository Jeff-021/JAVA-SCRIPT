let carro01 = prompt(
  "Digite o modelo do seu carro e a velocidade maxíma dele (em cavalos)"
);
let carro02 = prompt(
  "Digite outro modelo do seu carro e a velocidade maxíma dele (em cavalos)"
);

let carro1 = parseFloat(carro01);
let carro2 = parseFloat(carro02);

if (carro1 > carro2) {
  alert("O mais rápido é: " + carro1);
} else {
  alert("o mais rápido é: " + carro2);
}

// o if serve apenas para true, se for truel vai fazer uma acao, se for false ele vai fazer outra coma ajuda do else
