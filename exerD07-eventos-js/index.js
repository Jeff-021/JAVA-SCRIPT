function register(evento) {
  console.log(evento);
  const selectionElement = evento.currentTarget.parentNode;
  const username = selectionElement.children.username.value;
  const password = selectionElement.children.password.value;
  const passwordConfirmation =
    selectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    confirm("Cadastro Realizado! " + username);
  } else {
    confirm("Consulte a sua senha " + username + " " + " e tente novamente!");
  }
}

const button = document.getElementById("register-button");
button.addEventListener("click", register); //serve para adicionar eventos, nos exer anteriores a gente colocava os eventos direto no html, agr estamos colocando no js para ficar mais organizado

function removeListener() {
  button.removeEventListener("click", register);
  alert("Evento removido"); //
}
