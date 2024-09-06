function show() {
  const contatoLista = document.getElementById("contatoLista");
  console.log(contatoLista); //serve para editar todos os elementos do id (contatoLista) de uma vez

  const listaDeElementos = document.getElementsByTagName("li");
  console.log(listaDeElementos); // pega elementos de uma tag especifica

  const contatoImput = document.getElementsByClassName("contato-input01");
  console.log(contatoImput); // pega elementos pela classe

  // isso é uma nodelist, uma nodelist tem elementos diferentes das outras, abaixo esta uma nodelist de um elemento ´so
  const contato01 = document.getElementsByName("contato1");
  console.log(contato01);

  // uma tag ou até mais especifica
  const contato = document.querySelectorAll("#contatoLista > li > label");
  console.log(contato);
  // o # pq é um id, ele pegará todas as labels

  // ele pegara uma label só e parara

  const contato3 = document.querySelector("#conatoLista > li > label");
  console.log(contato3);
}
