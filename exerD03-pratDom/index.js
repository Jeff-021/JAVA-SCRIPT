function addInput() {
  const ul = document.getElementById("inputs"); //primeiramente tem que determinar onde eu irei adicionar novas coisas, a partir desse ira ser add

  const newLi = document.createElement("li"); // criou uma nova linha
  newLi.innerText = "Novo input: "; // titulo da linha

  const newInput = document.createElement("input"); // serve para criar o input
  newInput.type = "text"; // do tipo texto
  newInput.name = "input";

  newLi.appendChild(newInput); // a linha é pai do input
  ul.appendChild(newLi); // a lista é pai da linha
}
