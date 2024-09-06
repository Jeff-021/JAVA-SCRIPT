function addInput() {
  // essa é a origem, clicando no botao ira acontecer:
  const ul = document.getElementById("inputs");

  const newli = document.createElement("li"); // criará uma linha dentro de ul
  newli.className = "list-item"; // essa é a classe dele, para editar dps
  newli.innerText = "newImput:"; // o titulo do q sera criado

  const newImput = document.createElement("input");
  newImput.type = "text";
  newImput.name = "input";

  newli.appendChild(newImput);
  ul.appendChild(newli); // isso serve para adicionar a linha a UL, o conteudo na linha, sempre seguindo a hierarquia ul>linha>conteudo>
}
