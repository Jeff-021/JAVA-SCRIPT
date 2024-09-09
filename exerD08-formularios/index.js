const form = document.getElementById("orderForm"); // peguei o formulario inteiro

form.addEventListener("submit", function (evento) {
  evento.preventDefault(); // sempre colocar pois quando nao se coloca as imformacoes nao sao salvas
  const name = document.querySelector('input[name="name"]').value;
  const address = document.querySelector('input[name="address"]').value;
  // o queryselector funciona como o css, para id é #, class é ., mas nesse caso eu peguei p input puro
  const breadType = document.querySelector('select[name="breadType"]').value; // aqui no brad como é um input de selecionar uma opcao tem q pegar a tag inteira onde as opcoes estao q no caso foi select, o value guarda a informacao da opcao selecionada

  const main = document.querySelector('input[name="main"]').value;
  const observations = document.querySelector(
    'textarea[name="observations"'
  ).value;

  //para duvidas assistir a aula trabalhando com formularios

  // abaixo estara o input da salada, ele a pessoa pode selecionar mais de uma opcao:

  let salad = "";
  document
    .querySelectorAll('input[name="salad"]:checked')
    .forEach(function (item) {
      salad += " " + item.value; // sempre colocar esse :checked para pegar os itens selecionados, colocar o for each e criar uma funcao
    });

  console.log({ name, address, breadType, main, observations, salad });

  alert(
    "Pedido Realizado!" +
      "\nNome do cliente: " +
      name +
      "\nEndereço de entrega: " +
      address +
      "\nTipo de pão: " +
      breadType +
      "\nRecheio: \n - " +
      main +
      "\n" +
      salad +
      "Observações: " +
      observations
  );
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("breadType").value = "";
  document.getElementById("main").value = "";
  document.getElementById("observations").value = "";
});
