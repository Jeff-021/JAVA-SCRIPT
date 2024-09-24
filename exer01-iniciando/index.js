document.getElementById("button").addEventListener("click", function () {
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const profissao = document.getElementById("profissao").value;
  const anoNascimento = document.getElementById("anoNascimento").value; // aqui eu estou pegando o valor do input q sera preenchido

  // Criando os parágrafos com as informações
  const nomeP = document.createElement("p"); // serve para criar um elemento, no caso um p
  nomeP.textContent = `Nome: ${nome}`; // textcontent serve para criar o que estara escrito no paragrafo

  const sobrenomeP = document.createElement("p");
  sobrenomeP.textContent = `Sobrenome: ${sobrenome}`;

  const profissaoP = document.createElement("p");
  profissaoP.textContent = `Profissão: ${profissao}`;

  const anoNascimentoP = document.createElement("p");
  anoNascimentoP.textContent = `Ano de Nascimento: ${anoNascimento}`;

  // aqui eu estou criando uma variavel para onde as informacoes irao
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  // Adicionando os parágrafos na div de resultado
  resultadoDiv.appendChild(nomeP);
  resultadoDiv.appendChild(sobrenomeP);
  resultadoDiv.appendChild(profissaoP);
  resultadoDiv.appendChild(anoNascimentoP);

  // Limpando os campos dos inputs
  document.getElementById("nome").value = "";
  document.getElementById("sobrenome").value = "";
  document.getElementById("profissao").value = "";
  document.getElementById("anoNascimento").value = "";
});
