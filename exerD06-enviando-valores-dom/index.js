function register(element) {
  const username = element.children.username.value;
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation.value;
  console.log({ username, password, passwordConfirmation });
  if (password === passwordConfirmation) {
    alert("Usuario " + username + " Cadastrado com sucesso!");
  } else {
    alert("As senhas não se batem, corrija e tente de novo!");
  }
}
