let name = prompt("Olá Turista, Digite o seu nome!");
let visited = prompt("Já visitou alguma cidade?");
let howManyCitiesVisited = 0;
let citysVisited = "";

while (visited === "sim") {
  let city = prompt("Digite o nome da cidade que voçê já visitou");
  citysVisited += " - " + city;
  howManyCitiesVisited++;
  visited = prompt("Já visitou alguma cidade?");
}
alert(
  `O turista ${name}, já visitou ${howManyCitiesVisited} cidades, as cidades são: ${citysVisited}`
);
