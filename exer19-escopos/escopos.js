let pokemon = "Charmander"; // escopo externo, esta fora da funcao, fora de um possivel if e else
function evoluir() {
  pokemon = "Charmeleon";
}
console.log(pokemon);
evoluir();
console.log(pokemon);

function criarAnimal() {
  let animal = "Gato";
}
criarAnimal;
console.log(animal); // umavriavel interna n pode ser lida com o return = (criarAnimal) externo,
