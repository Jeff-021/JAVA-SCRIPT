const name = prompt("Olá recruta, Digite o seu nome!");
const surname = prompt("E qual seria o seu sobrenome?");
const profession = prompt("A sua profissão?");
const yearOfBirth = prompt("E que ano voçê nasceu?");
const age = 2024 - yearOfBirth;

confirm("Confirma as imformações?");
alert(
  `Olá, recruta ${name} ${surname}, com a profissão ${profession}! Atualmente voçê tem ${age} anos`
);
