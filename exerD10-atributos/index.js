const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "Olá, mundo!"; // esse addEventListener ja diz oq o botao é no caso é click, eu sincronizei o botao =.value com o input

  console.log(input.value);
  console.log(input.getAttribute("value")); //ignorar ambos
});

document.getElementById("type").addEventListener("click", function () {
  input.setAttribute("type", "radio");
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digita algo...";
}); // isso serve para quando o input estiver vazio uma mensagem apareca uma mensagem quase invisivel

// existem 3 tipos de botoes até agr, o primeiro é o onclick (exer 1 ate o 7, nele voce o id dele e taca numa funcao e cria as coisas dentro dele, o botao submit serve para enviar as informacoes tudo de uma vez (exer08), ele serve para confirmar um pedido...
