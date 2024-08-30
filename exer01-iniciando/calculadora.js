const entrada1 = prompt("Informe o primeiro número:");
const entrada2 = prompt("Informe o segundo número:");

const num1 = parseFloat(entrada1);
const num2 = parseFloat(entrada2); //esse parsefloat serve para converter o a string em numero, p prompt converte tudo em string

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;

alert(
  "Resultados:\n" +
    "\nSoma: " +
    soma +
    "\nSubtração: " +
    subtracao +
    "\nMultiplicação: " +
    multiplicacao +
    "\nDivisão: " +
    divisao // esse \n serve para pular linha
);
