const nome = prompt("E aí, turista! Qual é o seu nome?");
let cidades = "";
let contagem = 0;

let jaVisitou = prompt("Voçê já visitou alguma cidade sem ser a sua? Sim/Não");

while (jaVisitou === "sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?");
  cidades += " - " + cidade; //fazendo isso a variavel vazia vai ser preenchida
  contagem++;
  jaVisitou = prompt("Voçê já visitou alguma outra cidade? Sim/Não");
}
alert(
  "Turista: " +
    nome +
    "\nQuantidade de cidades visitadas:" +
    " " +
    contagem +
    "\nCidades visitadas:" +
    " " +
    cidades
);
