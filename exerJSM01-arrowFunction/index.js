const soma = (a, b) => {
  return a + b;
};

console.log(`A soma é ${soma(2, 2)}`);

const subtracao = (a, b) => a - b;

console.log(`Subtração: ${subtracao(5, 2)}`);

const dobro = (n) => `O dobro de ${n} é ${n * 2}`;

const numero = 21;
console.log(`Dobro: ${dobro(numero)}`);

const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

const startingWithP = towns.filter((town) => town[0] === "P");
console.log(startingWithP);
