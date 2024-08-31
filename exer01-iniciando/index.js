const primeiroNome = window.prompt("Informe o primeiro nome do recruta:");
const sobrenome = window.prompt("Informe o sobrenome do recruta:");
const campoDeEstudo = window.prompt("Qual é o campo de estudo do recruta?");
const anoDeNascimento = window.prompt("Qual é o ano de nascimento do recruta?"); //window.prompt serve para colocar as informaçoes, o \n serve para pular linha e deixar mais organizado

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    primeiroNome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    campoDeEstudo +
    "\nIdade: " +
    (2022 - anoDeNascimento)
);
