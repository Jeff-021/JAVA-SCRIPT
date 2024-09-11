const number01 = prompt("Digite um número!");
const number02 = prompt("Digite outro número");

const num01 = parseFloat(number01);
const num02 = parseFloat(number02);

const sum = num01 + num02;
const subtraction = num01 - num02;
const multiplication = num01 * num02;
const division = num01 / num02;

confirm("Confirma os dados?");
alert(`A soma dê ${num01} e ${num01} é ${sum}.
    A subtração dê ${num01} e ${num01} é ${subtraction}.
    A multiplicação dê ${num01} e ${num01} é ${multiplication}.
    A divisão dê ${num01} e ${num01} é ${division}`);
