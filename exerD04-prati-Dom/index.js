function addContact() {
  const contactSection = document.getElementById("contacts-list"); // onde tudo se inicia

  const h3 = document.createElement("h3"); // criando o h3
  h3.innerText = "Contato"; // colocando um titulo pra ele, no caso seria contato em negrito

  const ul = document.createElement("ul"); // criando uma lista

  const nameLi = document.createElement("li"); //criando uma linha
  nameLi.innerText = "Nome: "; // titulo da linha
  const nameInput = document.createElement("input"); //espaco para o cliente digitar
  nameInput.type = "text"; // o tipo do espaco é em formato de texto
  nameInput.name = "fullname"; // dando o nome de uma classe para dps editar
  nameLi.appendChild(nameInput); // a linha é pai do input(espaco para escrever)
  ul.appendChild(nameLi); // a lista é pai da linha
  ul.appendChild(document.createElement("br")); // para pular linha, sempre colocar

  const phoneLi = document.createElement("li");
  phoneLi.innerText = "Telefone: ";
  const phoneInput = document.createElement("input");
  phoneInput.type = "text";
  phoneInput.name = "phone";
  phoneLi.appendChild(phoneInput);
  ul.appendChild(phoneLi);
  ul.appendChild(document.createElement("br"));

  const addressLi = document.createElement("li");
  addressLi.innerHTML = '<label for="address">Endereço: </label>';
  const addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.name = "address";
  addressInput.id = "address";
  addressLi.appendChild(addressInput);
  ul.appendChild(addressLi);
  ul.appendChild(document.createElement("br"));

  contactSection.append(h3, ul); // serve para adicionar tudo de uma vez
}

function removeContact() {
  const contactSection = document.getElementById("contacts-list");

  const titles = document.getElementsByTagName("h3"); // excluir todos os titulos
  const contacts = document.getElementsByTagName("ul"); // excluir todo o contato que seria a lista

  contactSection.removeChild(titles[titles.length - 1]); // aqui voce esta especificando o tipo que voce ira excluir q seria o tipo titulo, o -1 sig o ultimo que foi adicionado, length sig o tamanho
  contactSection.removeChild(contacts[contacts.length - 1]);
}
